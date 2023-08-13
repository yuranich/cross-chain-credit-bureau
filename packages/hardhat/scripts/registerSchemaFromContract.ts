import { ethers } from "ethers"
import hre from "hardhat"
import { NetAddrs } from "../config/addresses.config"

import { SchemaRegistry } from "@ethereum-attestation-service/eas-sdk"

async function main() {
    const [deployer] = await hre.ethers.getSigners()
    console.log("Calling contract with the account: ", deployer.address)

    const registryAddr = NetAddrs[hre.network.name].SCHEMA_REGISTRY
    const schResolver = NetAddrs[hre.network.name].SCHEMA_RESOLVER

    const registrar = await hre.ethers.getContractAt("EASSchemaRegistrar", registryAddr, deployer)

    const schema =
        "address reporter, address borrower, uint8 status, uint256 creditId, uint256 fromDate, uint256 toDate, uint256 amount, address token, uint256 amountRepaid"
    const revocable = true

    const tx = await registrar.register(schema, schResolver, revocable, { gasLimit: 1000000 })
    const rec = await tx.wait(1)
    console.log(JSON.stringify(rec))

    const uid = await registrar.getLastUid()

    const schemaRegistry = new SchemaRegistry(registryAddr)

    schemaRegistry.connect(deployer)

    const created = await schemaRegistry.getSchema({ uid })
    console.log(`created schema: ${JSON.stringify(created)}`)
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })
