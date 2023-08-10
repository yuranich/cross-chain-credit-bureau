// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;
pragma abicoder v2;

import { IEAS, AttestationRequest, AttestationRequestData } from "@ethereum-attestation-service/eas-contracts/contracts/IEAS.sol";
import { NO_EXPIRATION_TIME, EMPTY_UID } from "@ethereum-attestation-service/eas-contracts/contracts/Common.sol";
import "@layerzerolabs/solidity-examples/contracts/lzApp/NonblockingLzApp.sol";
import "hardhat/console.sol";

contract LzAttester is NonblockingLzApp {
	error EAS_NOT_DEFINED();
	error SCHEMA_NOT_DEFINED();

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

	constructor(
		IEAS _eas,
		bytes32 _schema_uid,
		address _endpoint
	) NonblockingLzApp(_endpoint) {
		i_eas = _eas;
		i_schema_uid = _schema_uid;
	}

	function _nonblockingLzReceive(
		uint16 _srcChainId,
		bytes memory _srcAddress,
		uint64 _nonce,
		bytes memory _payload
	) internal override {
		console.log(
			"receiving from LZ: %s; %s %s",
			_srcChainId,
			abi.decode(_srcAddress, (address)),
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
		bytes memory _payload
	) public view returns (uint nativeFee, uint zroFee) {
		return
			lzEndpoint.estimateFees(
				dstChainId,
				address(this),
				_payload,
				false,
				"0x00010000000000000000000000000000000000000000000000000000000000030d40"
			);
	}

	function attestCrossChain(
		AttestationRecord calldata record,
		uint16 _dstChainId
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
		_lzSend(
			_dstChainId,
			data,
			payable(msg.sender),
			address(0x0),
			bytes(""),
			msg.value
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

	function getLastUid() public view returns (bytes32) {
		if (uids.length == 0) return 0;
		return uids[uids.length - 1];
	}
}
