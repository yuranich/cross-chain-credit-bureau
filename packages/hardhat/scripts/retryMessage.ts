import hre, { ethers } from "hardhat"

async function main() {
    const [deployer] = await hre.ethers.getSigners()
    console.log("Calling contract with the account: ", deployer.address)

    const localAddr = "0x739535Ab00fF286D08E3f603D948a0A4EaAA4c9E"
    const remoteAddr = "0x7B415126421F1C848496A89EC45064C8A9AA9FD0739535AB00FF286D08E3F603D948A0A4EAAA4C9E"
    const remoteChain = 10132

    const localContract = await hre.ethers.getContractAt("LzAttester", localAddr, deployer)

    // const srcAddress = hre.ethers.utils.solidityPack(["address"], [remoteAddr])
    const payload =
        "0x0000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000000000000000000000000000057FE29128A175BDD0ADE7835ECAAD78E27CF976F00000000000000000000000082437EAE4D114EB2C64E5C734EE088EDBAF73A4E0000000000000000000000000000000000000000000000000000000064CF6B1A0000000000000000000000000000000000000000000000000000000064CFB93D0000000000000000000000000000000000000000000000000000000000989680000000000000000000000000A0B86991C6218B36C1D19D4A2E9EB0CE3606EB48"

    const tx = await localContract.retryMessage(remoteChain, remoteAddr, 1, payload, {
        gasLimit: 1000000,
        value: ethers.utils.parseEther("0.00051"),
    })
    console.log(`tx hash: ${JSON.stringify(tx)}`)
    const rec = await tx.wait()
    console.log(`tx rec: ${JSON.stringify(rec)}`)
}

main().catch(error => {
    console.error(error)
    process.exitCode = 1
})
