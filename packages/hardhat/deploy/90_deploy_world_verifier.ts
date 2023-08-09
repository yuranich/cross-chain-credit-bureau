import { HardhatRuntimeEnvironment } from "hardhat/types"
import { DeployFunction } from "hardhat-deploy/types"
import { NetAddrs } from "../config/addresses.config"

const worldIDVerifier: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const { deployer } = await hre.getNamedAccounts()
    const { deploy } = hre.deployments
    const router = NetAddrs[hre.network.name].WORLD_ID_ROUTER

    await deploy("WorldIDVerifier", {
        from: deployer,
        args: [router, process.env.WORLDCOIN_APP_ID, "lend"],
        log: true,
        autoMine: true,
    })

    // Get the deployed contract
    // const yourContract = await hre.ethers.getContract("YourContract", deployer);
}

export default worldIDVerifier

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags YourContract
worldIDVerifier.tags = ["WorldIDVerifier"]
