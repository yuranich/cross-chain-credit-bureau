import * as dotenv from "dotenv"
dotenv.config()
import { SchemaRegistry } from "@ethereum-attestation-service/eas-sdk"
import { ethers } from "ethers"
import hre from "hardhat"

import { NetAddrs } from "../config/addresses.config"

async function main() {
    const [deployer] = await hre.ethers.getSigners()
    console.log("Calling contract with the account: ", deployer.address)

    const registryAddr = NetAddrs[hre.network.name].SCHEMA_REGISTRY
    const resolverAddress = NetAddrs[hre.network.name].SCHEMA_RESOLVER || ethers.constants.AddressZero

    const schemaRegistry = new SchemaRegistry(registryAddr)

    schemaRegistry.connect(deployer)

    const schema = `uint64 actionId,
		uint8 action,
		address reporter,
		address borrower,
		uint256 fromDate,
		uint256 toDate,
		uint256 amount,
		address token`

    const revocable = true

    const transaction = await schemaRegistry.register({
        schema,
        resolverAddress,
        revocable,
    })
    console.log(`tx: ${JSON.stringify(transaction)}`)

    const rec = await transaction.wait(1)
    console.log(`tx rec: ${JSON.stringify(rec)}`)

    const created = await schemaRegistry.getSchema({ uid: rec })
    console.log(`created schema: ${JSON.stringify(created)}`)
}

main().catch(error => {
    console.error(error)
    process.exitCode = 1
})
