export interface NetworkAddresses {
    EAS: string
    SCHEMA_REGISTRY: string
}

export const NetAddrs: { [k: string]: NetworkAddresses } = {
    hardhat: {
        EAS: "0xA1207F3BBa224E2c9c3c6D5aF63D0eb1582Ce587",
        SCHEMA_REGISTRY: "0xA7b39296258348C78294F95B872b282326A97BDF",
    },
    localhost: {
        EAS: "0xA1207F3BBa224E2c9c3c6D5aF63D0eb1582Ce587",
        SCHEMA_REGISTRY: "0xA7b39296258348C78294F95B872b282326A97BDF",
    },
    sepolia: {
        EAS: "0xC2679fBD37d54388Ce493F1DB75320D236e1815e",
        SCHEMA_REGISTRY: "0x0a7E2Ff54e76B8E6659aedc9103FB21c038050D0",
    },
}
