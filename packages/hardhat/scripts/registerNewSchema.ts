import { ethers } from "ethers"
import hre from "hardhat"

import { SchemaRegistry } from "@ethereum-attestation-service/eas-sdk"

async function main() {
    const [deployer] = await hre.ethers.getSigners()
    console.log("Calling contract with the account: ", deployer.address)

    const registrar = await hre.ethers.getContractAt(
        "EASSchemaRegistrar",
        "0x4259e25D2B3dbc6c495f02f4BF1e4408066485C0",
        deployer,
    )

    const schema =
        "address reporter, uint256 creditID, address borrower, uint256 fromDate, uint256 toDate,uint256 amount, address token, uint256 amountRepaid"
    const revocable = true

    const resolver = "0x690716b83FbFF443847cB024617532330075416A"

    const tx = await registrar.register(schema, resolver, revocable, { gasLimit: 1000000 })
    const rec = await tx.wait(1)
    console.log(JSON.stringify(rec))

    const uid = await registrar.getLastUid()

    const schemaRegistryContractAddress = "0x0a7E2Ff54e76B8E6659aedc9103FB21c038050D0" //"0xA7b39296258348C78294F95B872b282326A97BDF"
    const hhFirstKey = "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80"
    const schemaRegistry = new SchemaRegistry(schemaRegistryContractAddress)

    // const wallet = new ethers.Wallet(deployer.pro, deployer.provider)
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
