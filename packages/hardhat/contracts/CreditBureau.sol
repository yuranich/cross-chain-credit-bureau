// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "./interfaces/ICreditBureau.sol";
import "hardhat/console.sol";

contract CreditBureau is ICreditBureau {
	mapping(address user => Report[] reports) public creditHistory;

	event CreditReportAdded(address indexed reporter, address indexed user);

	error InvalidReport();

	constructor() {}

	function verify(Report memory report) public returns (bool) {
		return true;
	}

	function viewCreditSummary(
		address _wallet
	)
		public
		view
		returns (
			uint256 lengthOfCreditHistory,
			uint256 earliestReport,
			uint256 latestReport,
			uint256 totalOpenCreditLines,
			uint256 mostRecentCreditLineOpenDate,
			uint256 totalNumberOfRecords
		)
	{
		Report[] memory reports = creditHistory[_wallet];
		totalNumberOfRecords = reports.length;

		if (totalNumberOfRecords == 0) return (0, 0, 0, 0, 0, 0);

		earliestReport = reports[0].timestamp;
		latestReport = reports[0].timestamp;

		for (uint256 i = 0; i < totalNumberOfRecords; i++) {
			if (reports[i].status == Status.OPENED) totalOpenCreditLines++;
			if (reports[i].credit.fromDate > mostRecentCreditLineOpenDate) {
				mostRecentCreditLineOpenDate = reports[i].credit.fromDate;
			}
			if (reports[i].timestamp < earliestReport)
				earliestReport = reports[i].timestamp;
			if (reports[i].timestamp > latestReport)
				latestReport = reports[i].timestamp;
		}

		lengthOfCreditHistory = (latestReport - earliestReport) / 1 days;
	}

	function submitCreditReport(Report memory report, address user) external {
		console.log(
			"Report: %s %s %s",
			report.creditProvider,
			report.reporter,
			report.timestamp
		);
		if (!verify(report)) revert InvalidReport();
		_addReport(report, msg.sender, user);
	}

	function _addReport(
		Report memory report,
		address reporter,
		address user
	) internal {
		report.timestamp = block.timestamp;
		report.reporter = reporter;

		console.log("Pushing to history");
		creditHistory[user].push(report);

		console.log("emitting event");
		emit CreditReportAdded(reporter, user);
	}
}