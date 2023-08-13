import { useMemo, useState } from "react"
import { useTokens } from "~~/hooks/borrowing/useTokens"

interface BorrowingProps {
    onComlete?: () => void
}

export function Borrowing({ onComlete }: BorrowingProps) {
    const tokens = useTokens()
    const [token, setToken] = useState("")
    const [value, setValue] = useState("")

    const valueAttrs = useMemo(() => {
        const wbtc = tokens.find(t => t.name === "WBTC")
        return token === wbtc?.value ? { max: 1, step: 0.00001, min: 0.00001 } : { min: 1, max: 1000, step: 1 }
    }, [token, tokens])

    const handleSubmit = () => {
        console.log(token, value)
        onComlete?.()
    }

    return (
        <div className="flex flex-col gap-10 w-1/3 mx-auto mt-10">
            <div className="alert alert-success justify-start">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-current shrink-0 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
                <span>
                    <span className="font-bold">Congratulations!</span> You&apos;ve successfully passed verification!
                </span>
            </div>

            <div className="artboard flex flex-col justify-center items-center gap-10 bg-white shadow-lg p-10 rounded-2xl mx-auto w-full">
                <select className="select select-bordered w-full" onChange={e => setToken(e.currentTarget.value)}>
                    <option disabled selected>
                        Select token
                    </option>
                    {tokens.map(({ name, value }) => (
                        <option key={name} value={value}>
                            {name}
                        </option>
                    ))}
                </select>

                <input
                    disabled={!token}
                    type="number"
                    placeholder="Amount"
                    className="input input-bordered w-full"
                    onChange={e => setValue(e.currentTarget.value)}
                    {...valueAttrs}
                />

                <button disabled={!value || !token} className="btn primary w-full" onClick={handleSubmit}>
                    Borrow
                </button>
            </div>
        </div>
    )
}
