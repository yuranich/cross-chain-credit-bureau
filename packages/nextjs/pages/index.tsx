import { useState } from "react"
import Link from "next/link"
import type { VerifyReply } from "./api/verify"
import { CredentialType, IDKitWidget } from "@worldcoin/idkit"
import type { ISuccessResult } from "@worldcoin/idkit"
import type { NextPage } from "next"
import { useAccount, useContractWrite, usePrepareContractWrite } from "wagmi"
import { BugAntIcon, MagnifyingGlassIcon, SparklesIcon } from "@heroicons/react/24/outline"
import { MetaHeader } from "~~/components/MetaHeader"

const Home: NextPage = () => {
    const { address } = useAccount()
    const [proof, setProof] = useState<ISuccessResult | null>(null)

    const onSuccess = (result: ISuccessResult) => {
        setProof(result)
    }

    const handleProof = async (result: ISuccessResult) => {
        console.log("Proof received from IDKit:\n", JSON.stringify(result))
        const reqBody = {
            merkle_root: result.merkle_root,
            nullifier_hash: result.nullifier_hash,
            proof: result.proof,
            credential_type: result.credential_type,
            action: process.env.NEXT_PUBLIC_WLD_ACTION_NAME,
            signal: address,
        }
        console.log("Sending proof to backend for verification:\n", JSON.stringify(reqBody))
        const res: Response = await fetch("/api/verify", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(reqBody),
        })
        const data: VerifyReply = await res.json()
        if (res.status == 200) {
            console.log("Successful response from backend:\n", data) // Log the response from our backend for visibility
        } else {
            throw new Error(`Error code ${res.status} (${data.code}): ${data.detail}` ?? "Unknown error.") // Throw an error if verification fails
        }
    }

    const handleLend = () => {
        console.log("lending")
    }

    return (
        <>
            <MetaHeader />
            <div className="flex items-center flex-col flex-grow pt-10 gap-6">
                <IDKitWidget
                    action={process.env.NEXT_PUBLIC_WLD_ACTION_NAME!}
                    app_id={process.env.NEXT_PUBLIC_APP_ID!}
                    onSuccess={onSuccess}
                    handleVerify={handleProof}
                    credential_types={[CredentialType.Orb, CredentialType.Phone]}
                    autoClose
                >
                    {({ open }) => (
                        <button className="border border-black rounded-md" onClick={open}>
                            <div className="mx-3 my-1">Verify with World ID</div>
                        </button>
                    )}
                </IDKitWidget>
                <button className="btn primary" onClick={handleLend} disabled={proof == null}>
                    Lend
                </button>
                <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12">
                    <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
                        <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
                            <BugAntIcon className="h-8 w-8 fill-secondary" />
                            <p>
                                Tinker with your smart contract using the{" "}
                                <Link href="/debug" passHref className="link">
                                    Debug Contract
                                </Link>{" "}
                                tab.
                            </p>
                        </div>
                        <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
                            <SparklesIcon className="h-8 w-8 fill-secondary" />
                            <p>
                                Experiment with{" "}
                                <Link href="/example-ui" passHref className="link">
                                    Example UI
                                </Link>{" "}
                                to build your own UI.
                            </p>
                        </div>
                        <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
                            <MagnifyingGlassIcon className="h-8 w-8 fill-secondary" />
                            <p>
                                Explore your local transactions with the{" "}
                                <Link href="/blockexplorer" passHref className="link">
                                    Block Explorer
                                </Link>{" "}
                                tab.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
