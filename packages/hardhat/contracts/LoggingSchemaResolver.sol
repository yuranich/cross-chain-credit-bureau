// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;
pragma abicoder v2;

import { ISchemaResolver } from "@ethereum-attestation-service/eas-contracts/contracts/resolver/ISchemaResolver.sol";
import { SchemaResolver } from "@ethereum-attestation-service/eas-contracts/contracts/resolver/SchemaResolver.sol";
import { Attestation } from "@ethereum-attestation-service/eas-contracts/contracts/Common.sol";
import { IEAS } from "@ethereum-attestation-service/eas-contracts/contracts/IEAS.sol";
import "hardhat/console.sol";

contract LoggingSchemaResolver is SchemaResolver {
	constructor(IEAS eas) SchemaResolver(eas) {}

	function onAttest(
		Attestation calldata attestation,
		uint256 /*value*/
	) internal view override returns (bool) {
		console.logBytes32(attestation.schema);
		console.log(
			"attestation: %s; %s; %s",
			attestation.time,
			attestation.recipient,
			attestation.attester
		);

		return true;
	}

	function onRevoke(
		Attestation calldata attestation,
		uint256 /*value*/
	) internal view override returns (bool) {
		console.logBytes32(attestation.schema);
		console.log(
			"attestation: %s; %s; %s",
			attestation.time,
			attestation.recipient,
			attestation.attester
		);

		return true;
	}
}
