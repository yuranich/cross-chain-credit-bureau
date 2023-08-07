import * as dotenv from "dotenv"
dotenv.config()
import { SchemaRegistry } from "@ethereum-attestation-service/eas-sdk"
import { ethers, Signer, Wallet } from "ethers"
import hre from "hardhat"

const schemaRegistryContractAddress = "0xA7b39296258348C78294F95B872b282326A97BDF"

const hhFirstKey = "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80"

async function main() {
    const schemaRegistry = new SchemaRegistry(schemaRegistryContractAddress)

    const wallet = new ethers.Wallet(hhFirstKey, new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545"))
    schemaRegistry.connect(wallet)

    const schema =
        "address reporter, uint256 creditID, address borrower, uint256 fromDate, uint256 toDate,uint256 amount, address token, uint256 amountRepaid"

    const revocable = true

    // const uid = await schemaRegistry.contract.callStatic.register({ schema, revocable });
    // console.log("suggested uid: ", uid);

    const transaction = await schemaRegistry.register({
        schema,
        // resolverAddress,
        revocable,
    })
    console.log(`tx: ${JSON.stringify(transaction)}`)

    // Optional: Wait for transaction to be validated
    const rec = await transaction.tx.wait(1)
    console.log(`tx rec: ${JSON.stringify(rec)}`)

    const created = await schemaRegistry.getSchema({ uid: (await rec.getResult()) || "sdfs" })
    console.log(`created schema: ${JSON.stringify(created)}`)
}

main().catch(error => {
    console.error(error)
    process.exitCode = 1
})
