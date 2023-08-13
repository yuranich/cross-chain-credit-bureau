import hre, { ethers } from "hardhat"

async function main() {
    const [deployer] = await hre.ethers.getSigners()
    console.log("Calling contract with the account: ", deployer.address)

    const localAddr = "0x9b34a8B1Ad8dBbf565C15A881a38dF0Fd542AcCF"
    const remoteAddr = "0xC42e8977Ea5d89b58FEea41a06b36b464B336305"
    const remoteChain = 10160

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
