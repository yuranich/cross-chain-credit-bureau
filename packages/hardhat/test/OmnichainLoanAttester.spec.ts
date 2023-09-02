import { expect } from "chai"
import { ethers, network } from "hardhat"
import { OmnichainLoanAttester } from "../typechain-types"
import { NetAddrs } from "../config/addresses.config"
import { SchemaRegistry } from "@ethereum-attestation-service/eas-sdk"

describe("OmnichainLoanAttester", function () {
    console.log(`running on network: ${network.name}`)
    const easAddr = NetAddrs[network.name].EAS || ethers.constants.AddressZero
    console.log(`eas: ${easAddr}`)
    const schemaUid = NetAddrs[network.name].CREDIT_REPORT_SCHEMA || ethers.constants.HashZero
    const lzEndpoint = NetAddrs[network.name].LZ_ENDPOINT || ethers.constants.AddressZero
    const lzDestChain = NetAddrs[network.name].LZ_DEST_CHAIN

    let attester: OmnichainLoanAttester
    before(async () => {
        const schemaId = await createSchema()
        const contractFactory = await ethers.getContractFactory("OmnichainLoanAttester")
        attester = (await contractFactory.deploy(easAddr, schemaId, lzEndpoint, lzDestChain)) as OmnichainLoanAttester
        await attester.deployed()
    })

    describe("attestDirect", function () {
        it("Should save direct attestation", async function () {
            const tx = await attester.attestDirect(sampleLendAttestation)
            console.log(`attesting tx: ${tx.hash}`)
            tx.wait()
            const uid = await attester.getLastUid()
            expect(uid).is.not.empty.and.not.equal("0")
            console.log(`uid: ${uid}`)
        })

        it("Can revoke attestation", async function () {
            const tx = await attester.attestDirect(sampleLendAttestation)
            console.log(`attesting tx: ${tx.hash}`)
            tx.wait()
            const uid = await attester.getLastUid()
            expect(uid).is.not.empty.and.not.equal("0")
            console.log(`uid: ${uid}`)

            const revokeTx = await attester.revokeAttestation(uid)
            console.log(`attesting tx: ${revokeTx.hash}`)
            const rec = await revokeTx.wait()
            expect(rec.status).equal(1)
        })
    })

    const sampleLendAttestation = {
        actionId: 10,
        action: 0,
        reporter: "0x57Fe29128a175bdD0ADE7835eCAad78E27CF976f",
        borrower: "0x82437eaE4D114EB2c64E5C734eE088EDBaF73A4E",
        fromDate: "1691314970",
        toDate: "1691334973",
        amount: "10000000",
        token: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    }
})

async function createSchema(): Promise<string> {
    const registryAddr = NetAddrs[network.name].SCHEMA_REGISTRY
    const resolverAddress = NetAddrs[network.name].SCHEMA_RESOLVER || ethers.constants.AddressZero

    const schemaRegistry = new SchemaRegistry(registryAddr)
    const [deployer] = await ethers.getSigners()

    schemaRegistry.connect(deployer)

    const schema = `uint64 actionId,
		uint8 action,
		address reporter,
		address borrower,
		uint256 fromDate,
		uint256 toDate,
		uint256 amount,
		address token`

    const revocable = true

    const transaction = await schemaRegistry.register({
        schema,
        resolverAddress,
        revocable,
    })
    console.log(`tx: ${JSON.stringify(transaction)}`)

    const rec = await transaction.wait(1)
    console.log(`tx rec: ${JSON.stringify(rec)}`)

    const created = await schemaRegistry.getSchema({ uid: rec })
    console.log(`created schema: ${JSON.stringify(created)}`)
    return rec
}
