export default [
    {
        inputs: [
            {
                internalType: "contract IWorldID",
                name: "_worldId",
                type: "address",
            },
            {
                internalType: "string",
                name: "_appId",
                type: "string",
            },
            {
                internalType: "string",
                name: "_actionId",
                type: "string",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [],
        name: "InvalidNullifier",
        type: "error",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "nullifier",
                type: "uint256",
            },
        ],
        name: "DuplicateNullifier",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "nullifier",
                type: "uint256",
            },
        ],
        name: "DuplicateVerificationSuccess",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [],
        name: "ProofVerificationFailed",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "signal",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "root",
                type: "uint256",
            },
        ],
        name: "ProofVerificationStarted",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "signal",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "root",
                type: "uint256",
            },
        ],
        name: "ProofVerified",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "signal",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "root",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "nullifierHash",
                type: "uint256",
            },
            {
                internalType: "uint256[8]",
                name: "proof",
                type: "uint256[8]",
            },
        ],
        name: "testVerify",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "signal",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "root",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "nullifierHash",
                type: "uint256",
            },
            {
                internalType: "uint256[8]",
                name: "proof",
                type: "uint256[8]",
            },
        ],
        name: "verifyAndExecute",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
] as const
