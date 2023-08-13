// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;
pragma abicoder v2;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "./interfaces/ILoanActionStorer.sol";
import "./LoanAccessControl.sol";

contract UncollateralizedLenderSample is LoanAccessControl {
	struct Credit {
		uint256 id;
		uint256 fromDate;
		uint256 toDate;
		uint256 amount;
		address token;
		uint256 amountRepaid;
	}

	ILoanActionStorer internal immutable i_storer;
	mapping(address borrower => Credit[]) credits;
	uint256 internal total;

	uint256 defaultPeriod = 30 days;
	uint256 maxCap = 1000;

	error LIMIT_EXCEEDED(uint limit, uint256 amount);

	event Lent(
		address indexed borrower,
		uint256 indexed amount,
		address indexed token
	);
	event Repaid(
		address indexed borrower,
		uint256 indexed amount,
		address indexed token
	);

	constructor(ILoanActionStorer _storer) {
		i_storer = _storer;
	}

	function lend(address token, uint256 amount) external payable onlyBorrower {
		uint8 dec = ERC20(token).decimals();
		if (1000 ** dec < amount) revert LIMIT_EXCEEDED(1000 ** dec, amount);

		console.log(
			"Lending token %s amount %s to %s",
			token,
			amount,
			msg.sender
		);
		Credit memory created = Credit(
			total,
			block.timestamp,
			block.timestamp + defaultPeriod,
			amount,
			token,
			0
		);
		credits[msg.sender].push(created);
		total++;
		emit Lent(msg.sender, amount, token);

		i_storer.reportLoanAction{ value: msg.value }(
			ILoanActionStorer.Loan(
				0,
				created.fromDate,
				created.toDate,
				created.amount,
				created.token,
				msg.sender
			),
			ILoanActionStorer.Action.OPENED
		);
	}

	function repay(uint256 amount) external onlyBorrower {
		Credit storage current = credits[msg.sender][
			credits[msg.sender].length - 1
		];
		current.amountRepaid += amount;
		emit Repaid(msg.sender, amount, current.token);

		if (current.amountRepaid >= current.amount) {
			// user no longer need borrower role
			_revokeLoanApproval(msg.sender);

			i_storer.reportLoanAction(
				ILoanActionStorer.Loan(
					0,
					current.fromDate,
					current.toDate,
					current.amount,
					current.token,
					msg.sender
				),
				getAction(current)
			);
		}
	}

	function getAction(
		Credit memory cred
	) internal view returns (ILoanActionStorer.Action action) {
		if (cred.amount > cred.amountRepaid && cred.toDate < block.timestamp) {
			console.log("time is out, credit is not repaid!");
			action = ILoanActionStorer.Action.DEFAULTED;
		} else if (
			cred.amount > cred.amountRepaid && cred.toDate > block.timestamp
		) {
			console.log("credit is opened!");
			action = ILoanActionStorer.Action.OPENED;
		} else if (
			cred.amount <= cred.amountRepaid && cred.toDate > block.timestamp
		) {
			console.log("credit is fully repaid!");
			action = ILoanActionStorer.Action.REPAID;
		} else {
			console.log("credit is fully repaid but late!");
			action = ILoanActionStorer.Action.DELAYED;
		}
	}
}
