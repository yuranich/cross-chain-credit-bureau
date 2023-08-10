// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

interface ILoanActionStorer {
	enum Action {
		OPENED,
		REPAID,
		DEFAULTED,
		DELAYED
	}

	struct Loan {
		uint256 id;
		uint256 fromDate;
		uint256 toDate;
		uint256 amount;
		address token;
		address borrower;
	}

	function reportLoanAction(Loan memory loan, Action action) external payable;
}