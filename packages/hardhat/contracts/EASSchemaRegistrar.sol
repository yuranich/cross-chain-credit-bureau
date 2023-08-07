// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;
pragma abicoder v2;

import { ISchemaResolver } from "@ethereum-attestation-service/eas-contracts/contracts/resolver/ISchemaResolver.sol";
import { ISchemaRegistry } from "@ethereum-attestation-service/eas-contracts/contracts/ISchemaRegistry.sol";
import { Attestation } from "@ethereum-attestation-service/eas-contracts/contracts/Common.sol";
import "hardhat/console.sol";

contract EASSchemaRegistrar {
	// keeping track of uids
	bytes32[] public uids;
	ISchemaRegistry internal registry;

	constructor(ISchemaRegistry _registry) {
		registry = _registry;
	}

	function register(
		string calldata schema,
		ISchemaResolver resolver,
		bool revocable
	) external {
		console.log("registering");
		bytes32 uid = registry.register(schema, resolver, revocable);
		console.log("registered");
		console.logBytes32(uid);
		uids.push(uid);
	}

	function getLastUid() public view returns (bytes32) {
		return uids[uids.length - 1];
	}
}
