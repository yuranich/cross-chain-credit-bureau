// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

interface ICreditBureau {
	enum Status {
		OPENED,
		REPAID,
		DEFAULTED,
		DELAYED
	}

	enum Collateral {
		UNCOLLATERALISED,
		COLLATERALISED,
		OVERCOLLATERALISED
	}

	struct Credit {
		uint256 fromDate;
		uint256 toDate;
		uint256 amount;
		address token;
		uint256 amountRepaid;
	}

	struct Report {
		// string creditProvider;
		address reporter;
		address borrower;
		Status status;
		Credit credit;
		uint256 timestamp;
		bytes data;
	}

	function submitCreditReport(Report memory report) external;
}
