// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;
pragma abicoder v2;

import "@openzeppelin/contracts/access/AccessControl.sol";
import "hardhat/console.sol";

contract LoanAccessControl is AccessControl {
	bytes32 internal constant BORROWER = bytes32("0x01");

	constructor() {
		_grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
	}

	function approveLoan(address user) external {
		//only admin can do that
		grantRole(BORROWER, user);
	}

	function revokeLoanApproval(address user) external {
		//only admin can do that
		revokeRole(BORROWER, user);
	}

	function _revokeLoanApproval(address user) internal {
		_revokeRole(BORROWER, user);
	}

	modifier onlyBorrower() {
		_checkRole(BORROWER);
		_;
	}
}
