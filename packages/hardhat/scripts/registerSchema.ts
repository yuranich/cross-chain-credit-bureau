import * as dotenv from "dotenv"
dotenv.config()
import { SchemaRegistry } from "@ethereum-attestation-service/eas-sdk"
import { ethers, Signer, Wallet } from "ethers"
import hre from "hardhat"

import { NetAddrs } from "../config/addresses.config"

// const schemaRegistryContractAddress = "0xA7b39296258348C78294F95B872b282326A97BDF"

// const hhFirstKey = "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80"

async function main() {
    const [deployer] = await hre.ethers.getSigners()
    console.log("Calling contract with the account: ", deployer.address)

    const registryAddr = NetAddrs[hre.network.name].SCHEMA_REGISTRY
    const resolverAddress = NetAddrs[hre.network.name].SCHEMA_RESOLVER || ethers.constants.AddressZero

    const schemaRegistry = new SchemaRegistry(registryAddr)

    // const wallet = new ethers.Wallet(hhFirstKey, new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545"))
    schemaRegistry.connect(deployer)

    const schema =
        "address reporter, address borrower, uint8 status, uint256 creditId, uint256 fromDate, uint256 toDate, uint256 amount, address token, uint256 amountRepaid"

    const revocable = true

    const transaction = await schemaRegistry.register({
        schema,
        resolverAddress,
        revocable,
    })
    console.log(`tx: ${JSON.stringify(transaction)}`)

    // Optional: Wait for transaction to be validated
    const rec = await transaction.wait(1)
    console.log(`tx rec: ${JSON.stringify(rec)}`)

    const created = await schemaRegistry.getSchema({ uid: rec })
    console.log(`created schema: ${JSON.stringify(created)}`)
}

main().catch(error => {
    console.error(error)
    process.exitCode = 1
})
