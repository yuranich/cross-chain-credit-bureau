import { useState } from "react"
import type { OtherLoan } from "~~/pages/api/covalent-verify"

interface VerificationProps {
    address?: string
    onSuccess: () => void
    onFailure?: (error: Error) => void
}

export function Verification({ address, onSuccess, onFailure }: VerificationProps) {
    const [loans, setLoans] = useState<OtherLoan[]>([])

    const handleCovalent = async () => {
        try {
            const res: Response = await fetch("/api/covalent-verify", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ address }),
            })
            if (res.status == 200) {
                const data: OtherLoan[] = await res.json()

                if (data && data.length) {
                    setLoans(data)
                } else {
                    onSuccess()
                }

                console.log("Successful response from backend:\n", data)
            } else {
                const error = await res.text()
                throw new Error(`Error ${res.status} ${error || "Unknown error."}`)
            }
        } catch (e: any) {
            onFailure?.(e)
        }
    }

    return (
        <div className="flex flex-col w-1/3 mx-auto mt-10">
            <div className="alert bg-white shadow-lg mb-10 justify-start">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="stroke-current shrink-0 w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                </svg>
                <span>Verify that you don&apos;t have any other loans</span>
            </div>
            <button className="btn" onClick={handleCovalent}>
                Verify
            </button>
        </div>
    )
}
