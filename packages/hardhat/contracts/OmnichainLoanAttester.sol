// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;
pragma abicoder v2;

import { IEAS, AttestationRequest, AttestationRequestData, RevocationRequest, RevocationRequestData } from "@ethereum-attestation-service/eas-contracts/contracts/IEAS.sol";
import { NO_EXPIRATION_TIME, EMPTY_UID } from "@ethereum-attestation-service/eas-contracts/contracts/Common.sol";
import "@layerzerolabs/solidity-examples/contracts/lzApp/NonblockingLzApp.sol";
import "./interfaces/ILoanActionStorer.sol";
import "hardhat/console.sol";

contract OmnichainLoanAttester is NonblockingLzApp, ILoanActionStorer {
	error EAS_NOT_DEFINED();
	error SCHEMA_NOT_DEFINED();
	error NO_LOAN_ACTION_FOR_USER(address user);

	IEAS private immutable i_eas;
	bytes32 private immutable i_schema_uid;

	bytes32[] public uids;

	event ActionAttested(bytes32 indexed attUid, uint16 indexed originChain);

	struct AttestationRecord {
		uint64 actionId;
		uint8 action;
		address reporter;
		address borrower;
		uint256 fromDate;
		uint256 toDate;
		uint256 amount;
		address token;
	}

	struct LoanAction {
		uint64 actionId;
		Action action;
		Loan loan;
		address reporter;
		uint256 timestamp;
	}

	mapping(address user => LoanAction[] actions) public loanActionHistory;
	uint64 internal total;

	event LoanActionSaved(
		uint64 indexed actionId,
		address indexed reporter,
		address indexed user
	);

	uint16 private attestationChain;

	constructor(
		IEAS _eas,
		bytes32 _schema_uid,
		address _endpoint,
		uint16 _attestationChain
	) NonblockingLzApp(_endpoint) {
		i_eas = _eas;
		i_schema_uid = _schema_uid;
		attestationChain = _attestationChain;
	}

	function estimateActionGasFee(
		Loan memory loan,
		Action action,
		uint16 dstChainId
	) external view returns (uint256) {
		AttestationRecord memory record = AttestationRecord(
			0,
			uint8(action),
			msg.sender,
			loan.borrower,
			loan.fromDate,
			loan.toDate,
			loan.amount,
			loan.token
		);
		(uint256 nativeFee, uint256 zroFee) = estimateFees(dstChainId, record);
		return nativeFee;
	}

	function reportLoanAction(
		Loan memory loan,
		Action action
	) external payable {
		console.log(
			"Loan action: %s %s %s",
			loan.borrower,
			uint8(action),
			loan.amount
		);
		LoanAction memory loanAction = _saveAction(loan, action, msg.sender);
		AttestationRecord memory record = AttestationRecord(
			loanAction.actionId,
			uint8(loanAction.action),
			loanAction.reporter,
			loanAction.loan.borrower,
			loanAction.loan.fromDate,
			loanAction.loan.toDate,
			loanAction.loan.amount,
			loanAction.loan.token
		);
		if (block.chainid == attestationChain) {
			attestDirect(record);
		} else {
			attestOnRemoteChain(record, attestationChain, msg.value);
		}
	}

	function _saveAction(
		Loan memory loan,
		Action action,
		address reporter
	) internal returns (LoanAction memory loanAction) {
		loanAction = LoanAction(total, action, loan, reporter, block.timestamp);
		loanActionHistory[loan.borrower].push(loanAction);
		total++;
		emit LoanActionSaved(loanAction.actionId, reporter, loan.borrower);
	}

	function _nonblockingLzReceive(
		uint16 _srcChainId,
		bytes memory _srcAddress,
		uint64 _nonce,
		bytes memory _payload
	) internal override {
		address originAddress;
		assembly {
			originAddress := mload(add(_srcAddress, 20))
		}
		console.log(
			"receiving from LZ: %s; %s %s",
			_srcChainId,
			originAddress,
			_nonce
		);
		if (address(i_eas) == address(0)) {
			console.log("no EAS on this network. Only sending is possible.");
			revert EAS_NOT_DEFINED();
		}
		if (i_schema_uid == 0) {
			console.log(
				"Schema is not defined. Please redeploy with schema UID."
			);
			revert SCHEMA_NOT_DEFINED();
		}
		bytes32 uid = _attest(_payload);
		uids.push(uid);
		emit ActionAttested(uid, _srcChainId);
	}

	function estimateFees(
		uint16 dstChainId,
		AttestationRecord memory record
	) public view returns (uint256 nativeFee, uint256 zroFee) {
		bytes memory data = abi.encode(
			record.actionId,
			record.action,
			record.reporter,
			record.borrower,
			record.fromDate,
			record.toDate,
			record.amount,
			record.token
		);
		uint16 version = 1;
		uint256 value = 500000;
		bytes memory adapterParams = abi.encodePacked(version, value);
		return
			lzEndpoint.estimateFees(
				dstChainId,
				address(this),
				data,
				false,
				adapterParams
			);
	}

	function attestOnRemoteChain(
		AttestationRecord memory record,
		uint16 _dstChainId,
		uint256 msgValue
	) public payable {
		console.log("attesting record: %s", record.actionId);
		bytes memory data = abi.encode(
			record.actionId,
			record.action,
			record.reporter,
			record.borrower,
			record.fromDate,
			record.toDate,
			record.amount,
			record.token
		);
		uint16 version = 1;
		uint256 value = 500000;
		bytes memory adapterParams = abi.encodePacked(version, value);
		_lzSend(
			_dstChainId,
			data,
			payable(tx.origin),
			address(0x0),
			adapterParams,
			msgValue > 0 ? msgValue : msg.value
		);
	}

	function _attest(bytes memory data) internal returns (bytes32) {
		bytes32 att_uid = i_eas.attest(
			AttestationRequest(
				i_schema_uid,
				AttestationRequestData(
					address(0),
					NO_EXPIRATION_TIME,
					true,
					EMPTY_UID,
					data,
					0
				)
			)
		);
		console.logBytes32(att_uid);
		return att_uid;
	}

	function attestDirect(AttestationRecord memory record) public {
		console.log("attesting record: %s", record.actionId);
		bytes memory data = abi.encode(
			record.actionId,
			record.action,
			record.reporter,
			record.borrower,
			record.fromDate,
			record.toDate,
			record.amount,
			record.token
		);
		bytes32 uid = _attest(data);
		uids.push(uid);
		emit ActionAttested(uid, uint16(block.chainid));
	}

	function revokeAttestation(bytes32 uid) public onlyOwner {
		i_eas.revoke(
			RevocationRequest(i_schema_uid, RevocationRequestData(uid, 0))
		);
	}

	function getLastUid() public view returns (bytes32) {
		if (uids.length == 0) return 0;
		return uids[uids.length - 1];
	}

	function getLoanDetails(
		address user,
		uint256 actionId
	) external view returns (Loan memory loan) {
		LoanAction[] memory actions = loanActionHistory[user];
		if (actions.length == 0) {
			revert NO_LOAN_ACTION_FOR_USER(user);
		}
		for (uint i = 0; i < actions.length; i++) {
			if (actions[i].actionId == actionId) {
				loan = actions[i].loan;
			}
		}
	}
}
