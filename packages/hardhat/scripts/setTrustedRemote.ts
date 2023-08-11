import hre, { ethers } from "hardhat"

async function main() {
    const [deployer] = await hre.ethers.getSigners()
    console.log("Calling contract with the account: ", deployer.address)

    const localAddr = "0x36A66528ae0478cFA18867beBa2b590170072718"
    const remoteAddr = "0xbD2c4832383B1a16EcBa7e682C54A6F773a61FE8"
    const remoteChain = 10161

    const localContract = await hre.ethers.getContractAt("LzAttester", localAddr, deployer)

    const trustedRemote = hre.ethers.utils.solidityPack(["address", "address"], [remoteAddr, localContract.address])

    const tx = await localContract.setTrustedRemote(remoteChain, trustedRemote)
    const rec = await tx.wait()
    console.log(`tx rec: ${JSON.stringify(rec)}`)

    const trusted = await localContract.trustedRemoteLookup(remoteChain)
    console.log(`trusted remote: ${trusted}`)

    // const txCount = await deployer.getTransactionCount()
    // console.log(`count: ${txCount}`)
}

main().catch(error => {
    console.error(error)
    process.exitCode = 1
})
