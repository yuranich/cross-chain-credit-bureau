import { useMemo } from "react"

export function useTokens() {
    return useMemo(
        () => [
            { name: "USDT", value: "0x94b008aA00579c1307B0EF2c499aD98a8ce58e58" },
            { name: "USDC", value: "0x7F5c764cBc14f9669B88837ca1490cCa17c31607" },
            { name: "WBTC", value: "0x68f180fcCe6836688e9084f035309E29Bf0A2095" },
        ],
        [],
    )
}
