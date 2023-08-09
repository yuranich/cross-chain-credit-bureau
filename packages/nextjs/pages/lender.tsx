import { useState } from "react"
import ContractAbi from "../types/Contract.abi"
import { decode } from "../utils/scaffold-eth/wld"
import { IDKitWidget, ISuccessResult } from "@worldcoin/idkit"
import { BigNumber } from "ethers"
import type { NextPage } from "next"
import { useAccount, useContractWrite, usePrepareContractWrite } from "wagmi"
import { BugAntIcon, MagnifyingGlassIcon, SparklesIcon } from "@heroicons/react/24/outline"
import { MetaHeader } from "~~/components/MetaHeader"
import { RainbowKitCustomConnectButton } from "~~/components/scaffold-eth"

const Lender: NextPage = () => {
    const onSuccess = () => {
        console.log("on success")
    }
    const handleVerify = () => {
        console.log("handle verify")
    }

    const { address } = useAccount()
    const [proof, setProof] = useState<ISuccessResult | null>(null)

    const { config } = usePrepareContractWrite({
        address: process.env.NEXT_PUBLIC_CONTRACT_ADDR as `0x${string}`,
        abi: ContractAbi,
        enabled: proof != null && address != null,
        functionName: "verifyAndExecute",
        args: [
            address!,
            proof?.merkle_root ? decode<bigint>("uint256", proof?.merkle_root ?? "") : BigInt(0),
            proof?.nullifier_hash ? decode<bigint>("uint256", proof?.nullifier_hash ?? "") : BigInt(0),
            proof?.proof
                ? decode<[bigint, bigint, bigint, bigint, bigint, bigint, bigint, bigint]>(
                      "uint256[8]",
                      proof?.proof ?? "",
                  )
                : [BigInt(0), BigInt(0), BigInt(0), BigInt(0), BigInt(0), BigInt(0), BigInt(0), BigInt(0)],
        ],
    })

    const { write } = useContractWrite(config)

    return (
        <>
            <MetaHeader />
            <div className="flex items-center flex-col flex-grow pt-10">
                <div>
                    {address ? (
                        proof ? (
                            <button className="btn submit" onClick={write}>
                                Lend
                            </button>
                        ) : (
                            <IDKitWidget
                                signal={address}
                                action="lend"
                                onSuccess={setProof}
                                app_id={process.env.NEXT_PUBLIC_APP_ID!}
                            >
                                {({ open }) => (
                                    <button className="btn" onClick={open}>
                                        verify with world id
                                    </button>
                                )}
                            </IDKitWidget>
                        )
                    ) : (
                        <RainbowKitCustomConnectButton />
                    )}
                </div>
            </div>
        </>
    )
}

export default Lender
