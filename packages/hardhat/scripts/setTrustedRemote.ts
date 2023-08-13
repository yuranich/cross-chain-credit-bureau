import hre, { ethers } from "hardhat"

async function main() {
    const [deployer] = await hre.ethers.getSigners()
    console.log("Calling contract with the account: ", deployer.address)

    const remoteAddr = "0x9b34a8B1Ad8dBbf565C15A881a38dF0Fd542AcCF"
    const localAddr = "0x1DbdC0a71E267D2D94F400B2B620e22B1f0e256F"
    const remoteChain = 10132

    const localContract = await hre.ethers.getContractAt("OmnichainLoanAttester", localAddr, deployer)

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
