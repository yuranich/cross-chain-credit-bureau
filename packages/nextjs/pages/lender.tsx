import { useState } from "react"
import ContractAbi from "../types/Contract.abi"
import { decode } from "../utils/scaffold-eth/wld"
import { IDKitWidget, ISuccessResult } from "@worldcoin/idkit"
import { BigNumber } from "ethers"
import type { NextPage } from "next"
import { useAccount, useContractWrite, usePrepareContractWrite } from "wagmi"
import { MetaHeader } from "~~/components/MetaHeader"
import { RainbowKitCustomConnectButton } from "~~/components/scaffold-eth"
import { getTargetNetwork } from "~~/utils/scaffold-eth"

const Lender: NextPage = () => {
    const { address } = useAccount()
    const [proof, setProof] = useState<ISuccessResult | null>(null)

    const { config } = usePrepareContractWrite({
        chainId: getTargetNetwork().id,
        address: process.env.NEXT_PUBLIC_CONTRACT_ADDR as `0x${string}`,
        abi: ContractAbi,
        enabled: proof != null && address != null,
        functionName: "verifyAndExecute",
        args: [
            address || "0x0",
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

    const handleSubmit = () => {
        console.log(`handle submit. Config: ${JSON.stringify(config)}`)
        if (write) {
            write()
        }
    }

    return (
        <>
            <MetaHeader />
            <div className="flex items-center flex-col flex-grow pt-10">
                <div>
                    {address ? (
                        proof ? (
                            <button className="btn submit" onClick={handleSubmit}>
                                Lend
                            </button>
                        ) : (
                            <IDKitWidget
                                signal={address}
                                action="lend"
                                onSuccess={setProof}
                                app_id={process.env.NEXT_PUBLIC_APP_ID || "app_id"}
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
