import { userStateStorage } from "./user-state-update"
import { Client } from "@covalenthq/client-sdk"
import { Chains } from "@covalenthq/client-sdk/dist/services/Client"
import { timeStamp } from "console"
import { BigNumber, ethers } from "ethers"
import type { NextApiRequest, NextApiResponse } from "next"

export const config = {
    api: {
        externalResolver: true,
    },
}

export type OtherLoan = {
    amount: number
    token: string
    from: Date
    to: Date
}

type LoanEvent = {
    block_signed_at: Date
    block_height: number
    tx_hash: string
    raw_log_topics: string
    sender_address: string
}

const startingBlock = 13193210
const topicHash = "0xc1d0ecea6a248bc14cbc53469a61dc817fe634156831b7a89ef6c0e57cd2a032"

export default function handler(req: NextApiRequest, res: NextApiResponse<OtherLoan[] | string>) {
    const address = req.body.address
    if (!address) {
        res.status(400).send("Borrower address is required")
    }
    Promise.all([processEvents(address, "optimism-goerli"), processEvents(address, "optimism-mainnet")]).then(resps => {
        const flatten = resps.flat(1)
        if (flatten.length > 0) {
            const state = userStateStorage.get(address)
            if (state !== undefined) {
                state.otherLoans = true
            }
        }
        res.status(200).send(resps.flat(1))
    })
}

async function processEvents(address: string, network: Chains): Promise<OtherLoan[]> {
    const client = new Client(`${process.env.NEXT_PUBLIC_COVALENT_API_KEY}`)
    const resp = await client.BaseService.getLogEventsByTopicHash(network, topicHash, {
        startingBlock,
        endingBlock: "latest",
    })
    if (!resp.error) {
        console.log(resp.data)
        const loans: OtherLoan[] = []
        //TODO: handle paging
        resp.data.items
            .map(item => checkEvent(address, item, resp.data.chain_id))
            .forEach(elem =>
                elem.then(res => {
                    if (res !== "unrelated") loans.unshift(res)
                }),
            )
        return loans
    } else {
        console.log(resp.error_message)
        return []
    }
}

async function checkEvent(address: string, event: LoanEvent, chainId: number): Promise<OtherLoan | "unrelated"> {
    console.log(`event topics: ${event.raw_log_topics}`)
    const topics = event.raw_log_topics.split(",").map(t => t.trim())
    if (topics[2] === address) {
        console.log("found user borrow!", address)
        const loan = await getReportDetails(address, topics[0], chainId)
        if (loan.amount > 0 && loan.to.getTime() > Date.now()) {
            console.log("Found active loan!")
            return loan
        }
    }
    return "unrelated"
}

async function getReportDetails(address: string, actionId: string, chainId: number): Promise<OtherLoan> {
    const provider = ethers.getDefaultProvider(chainId)

    const contract = new ethers.Contract(contracts.get(chainId) || "", abi, provider)

    try {
        const details = await contract.getLoanDetails(address, BigNumber.from(actionId))
        console.log(`details: ${JSON.stringify(details)}`)
        return {
            amount: details.amount,
            token: details.token,
            from: new Date(details.fromDate),
            to: new Date(details.toDate),
        }
    } catch (err) {
        console.log("failed to get loan details. ", address, actionId)
    }
    return { amount: 0, token: "", from: new Date(0), to: new Date(0) }
}

const abi = [
    `function getLoanDetails(
    address user,
    uint256 actionId
) external view returns (Loan memory loan)`,
]

const contracts = new Map<number, string>()

contracts.set(420, "0x9b34a8B1Ad8dBbf565C15A881a38dF0Fd542AcCF")
