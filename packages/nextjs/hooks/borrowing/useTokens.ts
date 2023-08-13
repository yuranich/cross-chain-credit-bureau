import { useMemo } from "react"

export function useTokens() {
    return useMemo(
        () => [
            { name: "USDT", value: "0x5A0fe2a692297B4C605e703a79F94F765f872A03" },
            { name: "USDC", value: "0x7996b1503E9F48A3F92C72151223CB59129F0f86" },
            { name: "WBTC", value: "0xE7798f023fC62146e8Aa1b36Da45fb70855a77Ea" },
        ],
        [],
    )
}
