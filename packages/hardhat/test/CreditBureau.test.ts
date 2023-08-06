import { expect } from "chai";
import { Signer } from "ethers";
import { ethers, network } from "hardhat";
import { CreditBureau } from "../typechain-types";

describe("CreditBureau", function () {
  // We define a fixture to reuse the same setup in every test.

  let creditBureau: CreditBureau;
  let signer: Signer;
  before(async () => {
    [signer] = await ethers.getSigners();
    const yourContractFactory = await ethers.getContractFactory("CreditBureau");
    creditBureau = (await yourContractFactory.deploy()) as CreditBureau;
    await creditBureau.deployed();
  });

  describe("Submit credit report", function () {
    it("should safe report", async function () {
      const tx = await creditBureau.submitCreditReport(
        {
          creditProvider: "aave",
          reporter: "0x82437eaE4D114EB2c64E5C734eE088EDBaF73A4E",
          borrower: "0x82437eaE4D114EB2c64E5C734eE088EDBaF73A4E",
          status: 0,
          credit: {
            collateral: 2,
            fromDate: Date.now() - 20 * 24 * 60 * 60 * 1000,
            toDate: Date.now() - 5 * 24 * 60 * 60 * 1000,
            amount: 1_000_000_0,
            token: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
            chain: 1,
          },
          timestamp: "1691335973",
          data: "0x",
        },
        "0x82437eaE4D114EB2c64E5C734eE088EDBaF73A4E",
      );
      const rec = await tx.wait();
      console.log(`tx status: ${rec.status} and hash: ${rec.transactionHash}`);
      const summary = await creditBureau.viewCreditSummary("0x82437eaE4D114EB2c64E5C734eE088EDBaF73A4E");
      console.log(JSON.stringify(summary));
      expect(summary.totalNumberOfRecords).equals(1);
    });
  });
});
