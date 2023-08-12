import { Client } from "@covalenthq/client-sdk"
import { Chains } from "@covalenthq/client-sdk/dist/services/Client"
import type { NextApiRequest, NextApiResponse } from "next"

export const config = {
    api: {
        externalResolver: true,
    },
}

export type OtherLoan = {
    tx: string
    amount: number
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
            .map(item => checkEvent(address, item))
            .forEach(elem => {
                if (elem !== "unrelated") loans.unshift(elem)
            })
        return loans
    } else {
        console.log(resp.error_message)
        return []
    }
}

function checkEvent(address: string, event: LoanEvent): OtherLoan | "unrelated" {
    console.log(`event topics: ${event.raw_log_topics}`)
    return "unrelated"
}
