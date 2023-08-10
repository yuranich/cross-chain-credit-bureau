// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;
pragma abicoder v2;

import "./LzAttester.sol";
import "./interfaces/ILoanActionStorer.sol";
import "hardhat/console.sol";

contract LoanActionStorer is ILoanActionStorer {
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

	LzAttester private immutable i_attester;
	uint16 private attestationChain;

	constructor(LzAttester _attester, uint16 _attestationChain) {
		i_attester = _attester;
		attestationChain = _attestationChain;
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
		i_attester.attestOnRemoteChain{ value: msg.value }(
			LzAttester.AttestationRecord(
				loanAction.actionId,
				uint8(loanAction.action),
				loanAction.reporter,
				loanAction.loan.borrower,
				loanAction.loan.fromDate,
				loanAction.loan.toDate,
				loanAction.loan.amount,
				loanAction.loan.token
			),
			attestationChain
		);
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
}
