// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;
pragma abicoder v2;

import { IEAS, AttestationRequest, AttestationRequestData } from "@ethereum-attestation-service/eas-contracts/contracts/IEAS.sol";
import { NO_EXPIRATION_TIME, EMPTY_UID } from "@ethereum-attestation-service/eas-contracts/contracts/Common.sol";
import "./interfaces/ICreditBureau.sol";
import "hardhat/console.sol";

contract CreditBureau is ICreditBureau {
	mapping(address user => Report[] reports) public creditHistory;

	event CreditReportAdded(address indexed reporter, address indexed user);

	error InvalidEAS();
	error InvalidReport();

	IEAS private immutable i_eas;
	bytes32 private immutable i_schema_uid;

	constructor(IEAS _eas, bytes32 _schema_uid) {
		if (address(_eas) == address(0)) {
			revert InvalidEAS();
		}
		i_eas = _eas;
		i_schema_uid = _schema_uid;
	}

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

	function submitCreditReport(Report memory report) external {
		console.log(
			"Report: %s %s %s",
			report.borrower,
			uint8(report.status),
			report.timestamp
		);
		if (!verify(report)) revert InvalidReport();
		_addReport(report, msg.sender, report.borrower);
		_attest(report);
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

	function _attest(Report memory report) internal {
		bytes memory data = abi.encode(
			report.reporter,
			report.borrower,
			uint8(report.status),
			report.credit.id,
			report.credit.fromDate,
			report.credit.toDate,
			report.credit.amount,
			report.credit.token,
			report.credit.amountRepaid
		);
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
	}
}
