// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;
pragma abicoder v2;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "./interfaces/ICreditBureau.sol";

contract UncollateralizedLenderStub {
	ICreditBureau internal bureau;
	mapping(address borrower => ICreditBureau.Credit) credits;

	uint256 defaultPeriod = 30 days;
	uint256 maxCap = 1000;

	error LIMIT_EXCEEDED(uint limit, uint256 amount);

	event Lent(address borrower, uint256 amount, address token);
	event Repaid(address borrower, uint256 amount, address token);

	constructor(ICreditBureau _bureau) {
		bureau = _bureau;
	}

	function lend(address token, uint256 amount) external {
		uint8 dec = ERC20(token).decimals();
		if (dec * 1000 < amount) revert LIMIT_EXCEEDED(dec * 1000, amount);

		console.log(
			"Lending token %s amount %s to %s",
			token,
			amount,
			msg.sender
		);
		ICreditBureau.Credit memory created = ICreditBureau.Credit(
			block.timestamp,
			block.timestamp + defaultPeriod,
			amount,
			token,
			0
		);
		credits[msg.sender] = created;
		emit Lent(msg.sender, amount, token);

		bureau.submitCreditReport(
			ICreditBureau.Report(
				address(this),
				msg.sender,
				getStatus(created),
				created,
				block.timestamp,
				""
			)
		);
	}

	function repay(uint256 amount) external {
		credits[msg.sender].amountRepaid += amount;
		emit Repaid(msg.sender, amount, credits[msg.sender].token);

		if (credits[msg.sender].amountRepaid >= credits[msg.sender].amount) {
			// report
		}
	}

	function getStatus(
		ICreditBureau.Credit memory cred
	) internal returns (ICreditBureau.Status status) {
		if (cred.amount > cred.amountRepaid && cred.toDate < block.timestamp) {
			console.log("time is out, credit is not repaid!");
			status = ICreditBureau.Status.DEFAULTED;
		} else if (
			cred.amount > cred.amountRepaid && cred.toDate > block.timestamp
		) {
			console.log("credit is opened!");
			status = ICreditBureau.Status.OPENED;
		} else if (
			cred.amount <= cred.amountRepaid && cred.toDate > block.timestamp
		) {
			console.log("credit is fully repaid!");
			status = ICreditBureau.Status.REPAID;
		} else {
			console.log("credit is fully repaid but late!");
			status = ICreditBureau.Status.DELAYED;
		}
	}
}
