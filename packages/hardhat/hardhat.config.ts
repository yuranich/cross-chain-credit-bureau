import * as dotenv from "dotenv"
dotenv.config()
import * as tdly from "@tenderly/hardhat-tenderly"
tdly.setup({
    automaticVerifications: false,
})
import { HardhatUserConfig } from "hardhat/config"
import "@nomicfoundation/hardhat-toolbox"
import "hardhat-deploy"
import "@matterlabs/hardhat-zksync-solc"
import "@matterlabs/hardhat-zksync-verify"

// If not set, it uses ours Alchemy's default API key.
// You can get your own at https://dashboard.alchemyapi.io
const providerApiKey = process.env.ALCHEMY_API_KEY || "oKxs-03sij-U_N0iOlrSsZFr29-IqbuF"
// If not set, it uses the hardhat account 0 private key.
const deployerPrivateKey =
    process.env.DEPLOYER_PRIVATE_KEY ?? "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80"
// If not set, it uses ours Etherscan default API key.
const etherscanApiKey = process.env.ETHERSCAN_API_KEY || "DNXJA8RX2Q3VZ4URQIWP7Z68CJXQZSC6AW"

const mainnetDeployerPK = process.env.MAINNET_DEPLOYER_PK || ""

const config: HardhatUserConfig = {
    solidity: {
        version: "0.8.19",
        settings: {
            optimizer: {
                enabled: true,
                // https://docs.soliditylang.org/en/latest/using-the-compiler.html#optimizer-options
                runs: 200,
            },
        },
    },
    defaultNetwork: "localhost",
    namedAccounts: {
        deployer: {
            // By default, it will take the first Hardhat account as the deployer
            default: 0,
        },
    },
    networks: {
        // View the networks that are pre-configured.
        // If the network you are looking for is not here you can add new network settings
        hardhat: {
            forking: {
                url: `https://eth-mainnet.alchemyapi.io/v2/${providerApiKey}`,
                enabled: true,
            },
        },
        mainnet: {
            url: `https://eth-mainnet.alchemyapi.io/v2/${providerApiKey}`,
            accounts: [deployerPrivateKey],
        },
        sepolia: {
            url: `https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_SEPOLIA_API_KEY}`,
            accounts: [deployerPrivateKey],
        },
        goerli: {
            url: `https://eth-goerli.alchemyapi.io/v2/${providerApiKey}`,
            accounts: [deployerPrivateKey],
        },
        arbitrum: {
            url: `https://arb-mainnet.g.alchemy.com/v2/${providerApiKey}`,
            accounts: [deployerPrivateKey],
        },
        arbitrumGoerli: {
            url: `https://arb-goerli.g.alchemy.com/v2/${providerApiKey}`,
            accounts: [deployerPrivateKey],
        },
        optimism: {
            chainId: 10,
            url: `https://opt-mainnet.g.alchemy.com/v2/${providerApiKey}`,
            accounts: [mainnetDeployerPK],
        },
        optimismGoerli: {
            chainId: 420,
            url: `https://opt-goerli.g.alchemy.com/v2/${providerApiKey}`,
            accounts: [deployerPrivateKey],
        },
        polygon: {
            url: `https://polygon-mainnet.g.alchemy.com/v2/${providerApiKey}`,
            accounts: [deployerPrivateKey],
        },
        polygonMumbai: {
            url: `https://polygon-mumbai.g.alchemy.com/v2/${providerApiKey}`,
            accounts: [deployerPrivateKey],
        },
        zkSyncTestnet: {
            url: "https://testnet.era.zksync.dev",
            zksync: true,
            accounts: [deployerPrivateKey],
            verifyURL: "https://zksync2-testnet-explorer.zksync.dev/contract_verification",
        },
        zkSync: {
            url: "https://mainnet.era.zksync.io",
            zksync: true,
            accounts: [deployerPrivateKey],
            verifyURL: "https://zksync2-mainnet-explorer.zksync.io/contract_verification",
        },
        base_testnet: {
            chainId: 84531,
            url: "https://goerli.base.org",
            accounts: [deployerPrivateKey],
            verifyURL: "https://goerli.basescan.org/api",
        },
        zora_testnet: {
            chainId: 999,
            url: "https://testnet.rpc.zora.energy",
            accounts: [deployerPrivateKey],
            verifyURL: "https://testnet.explorer.zora.energy/api",
        },
        mode_testnet: {
            chainId: 919,
            url: "https://sepolia.mode.network/",
            accounts: [deployerPrivateKey],
            verifyURL: "https://sepolia.explorer.mode.network/api",
            gasPrice: 2500000000,
        },
    },
    verify: {
        etherscan: {
            apiKey: `${etherscanApiKey}`,
        },
    },
    tenderly: {
        username: "yuranich", // tenderly username (or organization name)
        project: "omnichain", // project name
        privateVerification: false, // if true, contracts will be verified privately, if false, contracts will be verified publicly
    },
}

export default config
