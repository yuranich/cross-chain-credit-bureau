import { ethers } from "ethers"
import type { NextApiRequest, NextApiResponse } from "next"

export const userStateStorage = new Map<string, UserState>()

export type UserState = {
    nullifier: string
    otherLoans: boolean
}

export default function handler(req: NextApiRequest, res: NextApiResponse<boolean | string>) {
    const address = req.body.address
    if (!address) {
        res.status(400).send("Borrower address is required")
    }
    const chainId = req.body.chainId
    if (!chainId) {
        res.status(400).send("Chain ID is required")
    }
    const state = userStateStorage.get(address)
    if (state !== undefined && state.nullifier && !state.otherLoans) {
        console.log(`user ${address} ready to borrow! Updating on contract...`)
        approveLoan(address, chainId)
            .then(() => {
                res.status(200)
            })
            .catch(err => {
                res.status(500).send(err)
            })
    }
}

async function approveLoan(address: string, chainId: number) {
    const provider = ethers.getDefaultProvider(chainId)
    const wallet = new ethers.Wallet(process.env.NEXT_PUBLIC_PK || "", provider)

    const contract = new ethers.Contract(contracts.get(chainId) || "", abi, wallet)

    const tx = await contract.approveLoan(address)
    console.log(`approve tx: ${tx.hash}`)
    const rec = await tx.wait()
    console.log(`tx executed: ${JSON.stringify(rec)}`)
}

const abi = ["function approveLoan(address user) external"]

const contracts = new Map<number, string>()

contracts.set(420, "0x9b34a8B1Ad8dBbf565C15A881a38dF0Fd542AcCF")
