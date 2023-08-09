// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;
pragma abicoder v2;

import { IEAS, AttestationRequest, AttestationRequestData } from "@ethereum-attestation-service/eas-contracts/contracts/IEAS.sol";
import { NO_EXPIRATION_TIME, EMPTY_UID } from "@ethereum-attestation-service/eas-contracts/contracts/Common.sol";
import "./LzAttester.sol";
import "./interfaces/ICreditBureau.sol";
import "hardhat/console.sol";

contract CreditBureau is ICreditBureau {
	mapping(address user => Report[] reports) public creditHistory;
	uint256 internal totalReports;

	error InvalidReport();

	event CreditReportAdded(address indexed reporter, address indexed user);

	LzAttester private immutable i_attester;
	uint16 private reportStoreChain;

	constructor(LzAttester _attester, uint16 _reportStoreChain) {
		i_attester = _attester;
		reportStoreChain = _reportStoreChain;
	}

	function verify(Report memory report) public returns (bool) {
		return true;
	}

	function submitCreditReport(Report memory report) external payable {
		console.log(
			"Report: %s %s %s",
			report.borrower,
			uint8(report.status),
			report.timestamp
		);
		if (!verify(report)) revert InvalidReport();
		_addReport(report, msg.sender, report.borrower);
		i_attester.attestCrossChain{ value: msg.value }(
			report,
			reportStoreChain
		);
	}

	function _addReport(
		Report memory report,
		address reporter,
		address user
	) internal {
		report.timestamp = block.timestamp;
		report.reporter = reporter;

		console.log("Pushing to history");
		report.reportId = totalReports;
		creditHistory[user].push(report);
		totalReports++;

		console.log("emitting event");
		emit CreditReportAdded(reporter, user);
	}
}
