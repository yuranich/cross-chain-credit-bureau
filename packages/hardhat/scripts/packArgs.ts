import hre, { ethers } from "hardhat"
import { NetAddrs } from "../config/addresses.config"

async function main() {
    const easAddr = NetAddrs[hre.network.name].EAS || ethers.constants.AddressZero
    const schemaUid = NetAddrs[hre.network.name].CREDIT_REPORT_SCHEMA || ethers.constants.HashZero
    const lzEndpoint = NetAddrs[hre.network.name].LZ_ENDPOINT || ethers.constants.AddressZero
    const lzDestChain = NetAddrs[hre.network.name].LZ_DEST_CHAIN

    const args = hre.ethers.utils.solidityPack(
        ["address", "bytes32", "address", "uint16"],
        [easAddr, schemaUid, lzEndpoint, lzDestChain],
    )

    console.log(`packed: ${args}`)
}

main().catch(error => {
    console.error(error)
    process.exitCode = 1
})
