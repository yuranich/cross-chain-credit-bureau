import { CredentialType, IDKitWidget, type ISuccessResult } from "@worldcoin/idkit"
import { useAccount } from "wagmi"
import type { VerifyReply } from "~~/pages/api/worldcoin-verify"

interface AuthProps {
    address?: string
    onSuccess: () => void
    onSkip: () => void
}

export function Authentification({ address, onSuccess, onSkip }: AuthProps) {
    const handleVerify = async (result: ISuccessResult) => {
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
        const res: Response = await fetch("/api/worldcoin-verify", {
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

    return (
        <div className="flex flex-col w-1/3 mx-auto mt-10">
            <div className="alert bg-white shadow-lg mb-10 justify-start">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="stroke-info shrink-0 w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                </svg>
                <div className="flex-col justify-start items-start">
                    <h3 className="font-bold">Please Verify Action!</h3>
                    <div className="text-xs">Before continue please pass authentification process</div>
                </div>
            </div>

            <div className="artboard flex flex-col justify-center items-center gap-10 bg-white shadow-lg py-10 rounded-2xl mx-auto w-1/2">
                <svg width={100} height={100} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 32" fill="none">
                    <path
                        d="M30.7195 9.78166C29.9097 7.88122 28.7647 6.17642 27.2845 4.6952C25.8044 3.21397 24.1288 2.06812 22.2298 1.25764C20.247 0.419214 18.1525 0 16.0021 0C13.8238 0 11.7293 0.419214 9.7744 1.25764C7.87537 2.06812 6.17184 3.21397 4.69171 4.6952C3.21159 6.17642 2.06659 7.88122 1.25671 9.78166C0.418903 11.738 0 13.8341 0 16.014C0 18.1659 0.418903 20.262 1.25671 22.2463C2.06659 24.1467 3.21159 25.8515 4.69171 27.3328C6.17184 28.814 7.87537 29.9598 9.7744 30.7424C11.7572 31.5808 13.8517 32 16.0021 32C18.1525 32 20.247 31.5808 22.2298 30.7424C24.1288 29.9319 25.8323 28.786 27.3125 27.3048C28.7926 25.8236 29.9376 24.1188 30.7475 22.2183C31.5853 20.2341 32.0042 18.138 32.0042 15.986C32.0042 13.8341 31.5574 11.738 30.7195 9.78166ZM10.696 14.5048C11.3383 11.9336 13.6842 10.0611 16.4489 10.0611H27.5638C28.2899 11.4306 28.7367 12.9397 28.9043 14.5048H10.696ZM28.9043 17.5231C28.7367 19.0882 28.262 20.5974 27.5638 21.9668H16.4489C13.6842 21.9668 11.3662 20.0664 10.696 17.5231H28.9043ZM6.81415 6.81921C9.27172 4.35983 12.5392 3.01834 16.0021 3.01834C19.465 3.01834 22.7325 4.35983 25.19 6.81921C25.2738 6.90306 25.3297 6.95895 25.4134 7.0428H16.4489C14.0472 7.0428 11.8131 7.96507 10.1095 9.66987C8.76903 11.0114 7.9033 12.6882 7.62403 14.5048H3.09988C3.435 11.5983 4.71964 8.91528 6.81415 6.81921ZM16.0021 29.0096C12.5392 29.0096 9.27172 27.6681 6.81415 25.2087C4.71964 23.1127 3.435 20.4017 3.09988 17.5231H7.62403C7.93123 19.3397 8.79696 21.0166 10.1095 22.3581C11.8131 24.0629 14.0472 24.9852 16.4489 24.9852H25.4134C25.3297 25.069 25.2738 25.1249 25.19 25.2087C22.7325 27.6681 19.465 29.0096 16.0021 29.0096Z"
                        fill="black"
                    />
                </svg>

                <IDKitWidget
                    signal={address}
                    action={process.env.NEXT_PUBLIC_WLD_ACTION_NAME || "lend"}
                    app_id={process.env.NEXT_PUBLIC_APP_ID || "app_id"}
                    onSuccess={onSuccess}
                    handleVerify={handleVerify}
                    credential_types={[CredentialType.Orb, CredentialType.Phone]}
                    autoClose
                >
                    {({ open }) => (
                        <button className="border border-black rounded-md w-96 max-w-max mx-auto" onClick={open}>
                            <div className="mx-3 my-1">Verify with World ID</div>
                        </button>
                    )}
                </IDKitWidget>
                <button className="btn" onClick={onSkip}>
                    Skip
                </button>
            </div>
        </div>
    )
}
