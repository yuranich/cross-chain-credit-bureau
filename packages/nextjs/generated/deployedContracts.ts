const contracts = {
  420: [
    {
      chainId: "420",
      name: "optimismGoerli",
      contracts: {
        EASSchemaRegistrar: {
          address: "0x7b5351e66A978ecb72669d2aDF932F53ce664EF0",
          abi: [
            {
              inputs: [
                {
                  internalType: "contract ISchemaRegistry",
                  name: "_registry",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [],
              name: "getLastUid",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "schema",
                  type: "string",
                },
                {
                  internalType: "contract ISchemaResolver",
                  name: "resolver",
                  type: "address",
                },
                {
                  internalType: "bool",
                  name: "revocable",
                  type: "bool",
                },
              ],
              name: "register",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "uids",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
        LoggingSchemaResolver: {
          address: "0x5db6384f8bDABC36fe6f00Ac375E2c07D0d2456c",
          abi: [
            {
              inputs: [
                {
                  internalType: "contract IEAS",
                  name: "eas",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [],
              name: "AccessDenied",
              type: "error",
            },
            {
              inputs: [],
              name: "InsufficientValue",
              type: "error",
            },
            {
              inputs: [],
              name: "InvalidEAS",
              type: "error",
            },
            {
              inputs: [],
              name: "NotPayable",
              type: "error",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "uid",
                      type: "bytes32",
                    },
                    {
                      internalType: "bytes32",
                      name: "schema",
                      type: "bytes32",
                    },
                    {
                      internalType: "uint64",
                      name: "time",
                      type: "uint64",
                    },
                    {
                      internalType: "uint64",
                      name: "expirationTime",
                      type: "uint64",
                    },
                    {
                      internalType: "uint64",
                      name: "revocationTime",
                      type: "uint64",
                    },
                    {
                      internalType: "bytes32",
                      name: "refUID",
                      type: "bytes32",
                    },
                    {
                      internalType: "address",
                      name: "recipient",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "attester",
                      type: "address",
                    },
                    {
                      internalType: "bool",
                      name: "revocable",
                      type: "bool",
                    },
                    {
                      internalType: "bytes",
                      name: "data",
                      type: "bytes",
                    },
                  ],
                  internalType: "struct Attestation",
                  name: "attestation",
                  type: "tuple",
                },
              ],
              name: "attest",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [],
              name: "isPayable",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "pure",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "uid",
                      type: "bytes32",
                    },
                    {
                      internalType: "bytes32",
                      name: "schema",
                      type: "bytes32",
                    },
                    {
                      internalType: "uint64",
                      name: "time",
                      type: "uint64",
                    },
                    {
                      internalType: "uint64",
                      name: "expirationTime",
                      type: "uint64",
                    },
                    {
                      internalType: "uint64",
                      name: "revocationTime",
                      type: "uint64",
                    },
                    {
                      internalType: "bytes32",
                      name: "refUID",
                      type: "bytes32",
                    },
                    {
                      internalType: "address",
                      name: "recipient",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "attester",
                      type: "address",
                    },
                    {
                      internalType: "bool",
                      name: "revocable",
                      type: "bool",
                    },
                    {
                      internalType: "bytes",
                      name: "data",
                      type: "bytes",
                    },
                  ],
                  internalType: "struct Attestation[]",
                  name: "attestations",
                  type: "tuple[]",
                },
                {
                  internalType: "uint256[]",
                  name: "values",
                  type: "uint256[]",
                },
              ],
              name: "multiAttest",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "uid",
                      type: "bytes32",
                    },
                    {
                      internalType: "bytes32",
                      name: "schema",
                      type: "bytes32",
                    },
                    {
                      internalType: "uint64",
                      name: "time",
                      type: "uint64",
                    },
                    {
                      internalType: "uint64",
                      name: "expirationTime",
                      type: "uint64",
                    },
                    {
                      internalType: "uint64",
                      name: "revocationTime",
                      type: "uint64",
                    },
                    {
                      internalType: "bytes32",
                      name: "refUID",
                      type: "bytes32",
                    },
                    {
                      internalType: "address",
                      name: "recipient",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "attester",
                      type: "address",
                    },
                    {
                      internalType: "bool",
                      name: "revocable",
                      type: "bool",
                    },
                    {
                      internalType: "bytes",
                      name: "data",
                      type: "bytes",
                    },
                  ],
                  internalType: "struct Attestation[]",
                  name: "attestations",
                  type: "tuple[]",
                },
                {
                  internalType: "uint256[]",
                  name: "values",
                  type: "uint256[]",
                },
              ],
              name: "multiRevoke",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "uid",
                      type: "bytes32",
                    },
                    {
                      internalType: "bytes32",
                      name: "schema",
                      type: "bytes32",
                    },
                    {
                      internalType: "uint64",
                      name: "time",
                      type: "uint64",
                    },
                    {
                      internalType: "uint64",
                      name: "expirationTime",
                      type: "uint64",
                    },
                    {
                      internalType: "uint64",
                      name: "revocationTime",
                      type: "uint64",
                    },
                    {
                      internalType: "bytes32",
                      name: "refUID",
                      type: "bytes32",
                    },
                    {
                      internalType: "address",
                      name: "recipient",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "attester",
                      type: "address",
                    },
                    {
                      internalType: "bool",
                      name: "revocable",
                      type: "bool",
                    },
                    {
                      internalType: "bytes",
                      name: "data",
                      type: "bytes",
                    },
                  ],
                  internalType: "struct Attestation",
                  name: "attestation",
                  type: "tuple",
                },
              ],
              name: "revoke",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [],
              name: "version",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              stateMutability: "payable",
              type: "receive",
            },
          ],
        },
        OmnichainLoanAttester: {
          address: "0x9b34a8B1Ad8dBbf565C15A881a38dF0Fd542AcCF",
          abi: [
            {
              inputs: [
                {
                  internalType: "contract IEAS",
                  name: "_eas",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "_schema_uid",
                  type: "bytes32",
                },
                {
                  internalType: "address",
                  name: "_endpoint",
                  type: "address",
                },
                {
                  internalType: "uint16",
                  name: "_attestationChain",
                  type: "uint16",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [],
              name: "EAS_NOT_DEFINED",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "user",
                  type: "address",
                },
              ],
              name: "NO_LOAN_ACTION_FOR_USER",
              type: "error",
            },
            {
              inputs: [],
              name: "SCHEMA_NOT_DEFINED",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "attUid",
                  type: "bytes32",
                },
                {
                  indexed: true,
                  internalType: "uint16",
                  name: "originChain",
                  type: "uint16",
                },
              ],
              name: "ActionAttested",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint64",
                  name: "actionId",
                  type: "uint64",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "reporter",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "user",
                  type: "address",
                },
              ],
              name: "LoanActionSaved",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint16",
                  name: "_srcChainId",
                  type: "uint16",
                },
                {
                  indexed: false,
                  internalType: "bytes",
                  name: "_srcAddress",
                  type: "bytes",
                },
                {
                  indexed: false,
                  internalType: "uint64",
                  name: "_nonce",
                  type: "uint64",
                },
                {
                  indexed: false,
                  internalType: "bytes",
                  name: "_payload",
                  type: "bytes",
                },
                {
                  indexed: false,
                  internalType: "bytes",
                  name: "_reason",
                  type: "bytes",
                },
              ],
              name: "MessageFailed",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint16",
                  name: "_srcChainId",
                  type: "uint16",
                },
                {
                  indexed: false,
                  internalType: "bytes",
                  name: "_srcAddress",
                  type: "bytes",
                },
                {
                  indexed: false,
                  internalType: "uint64",
                  name: "_nonce",
                  type: "uint64",
                },
                {
                  indexed: false,
                  internalType: "bytes32",
                  name: "_payloadHash",
                  type: "bytes32",
                },
              ],
              name: "RetryMessageSuccess",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint16",
                  name: "_dstChainId",
                  type: "uint16",
                },
                {
                  indexed: false,
                  internalType: "uint16",
                  name: "_type",
                  type: "uint16",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "_minDstGas",
                  type: "uint256",
                },
              ],
              name: "SetMinDstGas",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "address",
                  name: "precrime",
                  type: "address",
                },
              ],
              name: "SetPrecrime",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint16",
                  name: "_remoteChainId",
                  type: "uint16",
                },
                {
                  indexed: false,
                  internalType: "bytes",
                  name: "_path",
                  type: "bytes",
                },
              ],
              name: "SetTrustedRemote",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint16",
                  name: "_remoteChainId",
                  type: "uint16",
                },
                {
                  indexed: false,
                  internalType: "bytes",
                  name: "_remoteAddress",
                  type: "bytes",
                },
              ],
              name: "SetTrustedRemoteAddress",
              type: "event",
            },
            {
              inputs: [],
              name: "DEFAULT_PAYLOAD_SIZE_LIMIT",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "uint64",
                      name: "actionId",
                      type: "uint64",
                    },
                    {
                      internalType: "uint8",
                      name: "action",
                      type: "uint8",
                    },
                    {
                      internalType: "address",
                      name: "reporter",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "borrower",
                      type: "address",
                    },
                    {
                      internalType: "uint256",
                      name: "fromDate",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "toDate",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "amount",
                      type: "uint256",
                    },
                    {
                      internalType: "address",
                      name: "token",
                      type: "address",
                    },
                  ],
                  internalType:
                    "struct OmnichainLoanAttester.AttestationRecord",
                  name: "record",
                  type: "tuple",
                },
              ],
              name: "attestDirect",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "uint64",
                      name: "actionId",
                      type: "uint64",
                    },
                    {
                      internalType: "uint8",
                      name: "action",
                      type: "uint8",
                    },
                    {
                      internalType: "address",
                      name: "reporter",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "borrower",
                      type: "address",
                    },
                    {
                      internalType: "uint256",
                      name: "fromDate",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "toDate",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "amount",
                      type: "uint256",
                    },
                    {
                      internalType: "address",
                      name: "token",
                      type: "address",
                    },
                  ],
                  internalType:
                    "struct OmnichainLoanAttester.AttestationRecord",
                  name: "record",
                  type: "tuple",
                },
                {
                  internalType: "uint16",
                  name: "_dstChainId",
                  type: "uint16",
                },
                {
                  internalType: "uint256",
                  name: "msgValue",
                  type: "uint256",
                },
              ],
              name: "attestOnRemoteChain",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "id",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "fromDate",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "toDate",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "amount",
                      type: "uint256",
                    },
                    {
                      internalType: "address",
                      name: "token",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "borrower",
                      type: "address",
                    },
                  ],
                  internalType: "struct ILoanActionStorer.Loan",
                  name: "loan",
                  type: "tuple",
                },
                {
                  internalType: "enum ILoanActionStorer.Action",
                  name: "action",
                  type: "uint8",
                },
                {
                  internalType: "uint16",
                  name: "dstChainId",
                  type: "uint16",
                },
              ],
              name: "estimateActionGasFee",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint16",
                  name: "dstChainId",
                  type: "uint16",
                },
                {
                  components: [
                    {
                      internalType: "uint64",
                      name: "actionId",
                      type: "uint64",
                    },
                    {
                      internalType: "uint8",
                      name: "action",
                      type: "uint8",
                    },
                    {
                      internalType: "address",
                      name: "reporter",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "borrower",
                      type: "address",
                    },
                    {
                      internalType: "uint256",
                      name: "fromDate",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "toDate",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "amount",
                      type: "uint256",
                    },
                    {
                      internalType: "address",
                      name: "token",
                      type: "address",
                    },
                  ],
                  internalType:
                    "struct OmnichainLoanAttester.AttestationRecord",
                  name: "record",
                  type: "tuple",
                },
              ],
              name: "estimateFees",
              outputs: [
                {
                  internalType: "uint256",
                  name: "nativeFee",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "zroFee",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint16",
                  name: "",
                  type: "uint16",
                },
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
                {
                  internalType: "uint64",
                  name: "",
                  type: "uint64",
                },
              ],
              name: "failedMessages",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint16",
                  name: "_srcChainId",
                  type: "uint16",
                },
                {
                  internalType: "bytes",
                  name: "_srcAddress",
                  type: "bytes",
                },
              ],
              name: "forceResumeReceive",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint16",
                  name: "_version",
                  type: "uint16",
                },
                {
                  internalType: "uint16",
                  name: "_chainId",
                  type: "uint16",
                },
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_configType",
                  type: "uint256",
                },
              ],
              name: "getConfig",
              outputs: [
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getLastUid",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "user",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "actionId",
                  type: "uint256",
                },
              ],
              name: "getLoanDetails",
              outputs: [
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "id",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "fromDate",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "toDate",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "amount",
                      type: "uint256",
                    },
                    {
                      internalType: "address",
                      name: "token",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "borrower",
                      type: "address",
                    },
                  ],
                  internalType: "struct ILoanActionStorer.Loan",
                  name: "loan",
                  type: "tuple",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint16",
                  name: "_remoteChainId",
                  type: "uint16",
                },
              ],
              name: "getTrustedRemoteAddress",
              outputs: [
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint16",
                  name: "_srcChainId",
                  type: "uint16",
                },
                {
                  internalType: "bytes",
                  name: "_srcAddress",
                  type: "bytes",
                },
              ],
              name: "isTrustedRemote",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "user",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "loanActionHistory",
              outputs: [
                {
                  internalType: "uint64",
                  name: "actionId",
                  type: "uint64",
                },
                {
                  internalType: "enum ILoanActionStorer.Action",
                  name: "action",
                  type: "uint8",
                },
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "id",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "fromDate",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "toDate",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "amount",
                      type: "uint256",
                    },
                    {
                      internalType: "address",
                      name: "token",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "borrower",
                      type: "address",
                    },
                  ],
                  internalType: "struct ILoanActionStorer.Loan",
                  name: "loan",
                  type: "tuple",
                },
                {
                  internalType: "address",
                  name: "reporter",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "timestamp",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "lzEndpoint",
              outputs: [
                {
                  internalType: "contract ILayerZeroEndpoint",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint16",
                  name: "_srcChainId",
                  type: "uint16",
                },
                {
                  internalType: "bytes",
                  name: "_srcAddress",
                  type: "bytes",
                },
                {
                  internalType: "uint64",
                  name: "_nonce",
                  type: "uint64",
                },
                {
                  internalType: "bytes",
                  name: "_payload",
                  type: "bytes",
                },
              ],
              name: "lzReceive",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint16",
                  name: "",
                  type: "uint16",
                },
                {
                  internalType: "uint16",
                  name: "",
                  type: "uint16",
                },
              ],
              name: "minDstGasLookup",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint16",
                  name: "_srcChainId",
                  type: "uint16",
                },
                {
                  internalType: "bytes",
                  name: "_srcAddress",
                  type: "bytes",
                },
                {
                  internalType: "uint64",
                  name: "_nonce",
                  type: "uint64",
                },
                {
                  internalType: "bytes",
                  name: "_payload",
                  type: "bytes",
                },
              ],
              name: "nonblockingLzReceive",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint16",
                  name: "",
                  type: "uint16",
                },
              ],
              name: "payloadSizeLimitLookup",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "precrime",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "id",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "fromDate",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "toDate",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "amount",
                      type: "uint256",
                    },
                    {
                      internalType: "address",
                      name: "token",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "borrower",
                      type: "address",
                    },
                  ],
                  internalType: "struct ILoanActionStorer.Loan",
                  name: "loan",
                  type: "tuple",
                },
                {
                  internalType: "enum ILoanActionStorer.Action",
                  name: "action",
                  type: "uint8",
                },
              ],
              name: "reportLoanAction",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint16",
                  name: "_srcChainId",
                  type: "uint16",
                },
                {
                  internalType: "bytes",
                  name: "_srcAddress",
                  type: "bytes",
                },
                {
                  internalType: "uint64",
                  name: "_nonce",
                  type: "uint64",
                },
                {
                  internalType: "bytes",
                  name: "_payload",
                  type: "bytes",
                },
              ],
              name: "retryMessage",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "uid",
                  type: "bytes32",
                },
              ],
              name: "revokeAttestation",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint16",
                  name: "_version",
                  type: "uint16",
                },
                {
                  internalType: "uint16",
                  name: "_chainId",
                  type: "uint16",
                },
                {
                  internalType: "uint256",
                  name: "_configType",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "_config",
                  type: "bytes",
                },
              ],
              name: "setConfig",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint16",
                  name: "_dstChainId",
                  type: "uint16",
                },
                {
                  internalType: "uint16",
                  name: "_packetType",
                  type: "uint16",
                },
                {
                  internalType: "uint256",
                  name: "_minGas",
                  type: "uint256",
                },
              ],
              name: "setMinDstGas",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint16",
                  name: "_dstChainId",
                  type: "uint16",
                },
                {
                  internalType: "uint256",
                  name: "_size",
                  type: "uint256",
                },
              ],
              name: "setPayloadSizeLimit",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_precrime",
                  type: "address",
                },
              ],
              name: "setPrecrime",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint16",
                  name: "_version",
                  type: "uint16",
                },
              ],
              name: "setReceiveVersion",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint16",
                  name: "_version",
                  type: "uint16",
                },
              ],
              name: "setSendVersion",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint16",
                  name: "_remoteChainId",
                  type: "uint16",
                },
                {
                  internalType: "bytes",
                  name: "_path",
                  type: "bytes",
                },
              ],
              name: "setTrustedRemote",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint16",
                  name: "_remoteChainId",
                  type: "uint16",
                },
                {
                  internalType: "bytes",
                  name: "_remoteAddress",
                  type: "bytes",
                },
              ],
              name: "setTrustedRemoteAddress",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint16",
                  name: "",
                  type: "uint16",
                },
              ],
              name: "trustedRemoteLookup",
              outputs: [
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "uids",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
        UncollateralizedLenderStub: {
          address: "0x7ba9a3032d48c04A47549F55700e95991C6E087e",
          abi: [
            {
              inputs: [
                {
                  internalType: "contract ILoanActionStorer",
                  name: "_storer",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "limit",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "LIMIT_EXCEEDED",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "borrower",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "token",
                  type: "address",
                },
              ],
              name: "Lent",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "borrower",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "token",
                  type: "address",
                },
              ],
              name: "Repaid",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "role",
                  type: "bytes32",
                },
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "previousAdminRole",
                  type: "bytes32",
                },
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "newAdminRole",
                  type: "bytes32",
                },
              ],
              name: "RoleAdminChanged",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "role",
                  type: "bytes32",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
              ],
              name: "RoleGranted",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "role",
                  type: "bytes32",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
              ],
              name: "RoleRevoked",
              type: "event",
            },
            {
              inputs: [],
              name: "DEFAULT_ADMIN_ROLE",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "user",
                  type: "address",
                },
              ],
              name: "approveLoan",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "role",
                  type: "bytes32",
                },
              ],
              name: "getRoleAdmin",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "role",
                  type: "bytes32",
                },
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
              ],
              name: "grantRole",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "role",
                  type: "bytes32",
                },
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
              ],
              name: "hasRole",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "token",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "lend",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "role",
                  type: "bytes32",
                },
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
              ],
              name: "renounceRole",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "repay",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "user",
                  type: "address",
                },
              ],
              name: "revokeLoanApproval",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "role",
                  type: "bytes32",
                },
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
              ],
              name: "revokeRole",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes4",
                  name: "interfaceId",
                  type: "bytes4",
                },
              ],
              name: "supportsInterface",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
      },
    },
  ],
  11155111: [
    {
      chainId: "11155111",
      name: "sepolia",
      contracts: {
        EASSchemaRegistrar: {
          address: "0xB29C7D40a00af47a3a64F25F156da7c49A806b23",
          abi: [
            {
              inputs: [
                {
                  internalType: "contract ISchemaRegistry",
                  name: "_registry",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [],
              name: "getLastUid",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "schema",
                  type: "string",
                },
                {
                  internalType: "contract ISchemaResolver",
                  name: "resolver",
                  type: "address",
                },
                {
                  internalType: "bool",
                  name: "revocable",
                  type: "bool",
                },
              ],
              name: "register",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "uids",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
        LoggingSchemaResolver: {
          address: "0xdDD93F4C071C165d99c5B8A35D5eaCABcF2B75d6",
          abi: [
            {
              inputs: [
                {
                  internalType: "contract IEAS",
                  name: "eas",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [],
              name: "AccessDenied",
              type: "error",
            },
            {
              inputs: [],
              name: "InsufficientValue",
              type: "error",
            },
            {
              inputs: [],
              name: "InvalidEAS",
              type: "error",
            },
            {
              inputs: [],
              name: "NotPayable",
              type: "error",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "uid",
                      type: "bytes32",
                    },
                    {
                      internalType: "bytes32",
                      name: "schema",
                      type: "bytes32",
                    },
                    {
                      internalType: "uint64",
                      name: "time",
                      type: "uint64",
                    },
                    {
                      internalType: "uint64",
                      name: "expirationTime",
                      type: "uint64",
                    },
                    {
                      internalType: "uint64",
                      name: "revocationTime",
                      type: "uint64",
                    },
                    {
                      internalType: "bytes32",
                      name: "refUID",
                      type: "bytes32",
                    },
                    {
                      internalType: "address",
                      name: "recipient",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "attester",
                      type: "address",
                    },
                    {
                      internalType: "bool",
                      name: "revocable",
                      type: "bool",
                    },
                    {
                      internalType: "bytes",
                      name: "data",
                      type: "bytes",
                    },
                  ],
                  internalType: "struct Attestation",
                  name: "attestation",
                  type: "tuple",
                },
              ],
              name: "attest",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [],
              name: "isPayable",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "pure",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "uid",
                      type: "bytes32",
                    },
                    {
                      internalType: "bytes32",
                      name: "schema",
                      type: "bytes32",
                    },
                    {
                      internalType: "uint64",
                      name: "time",
                      type: "uint64",
                    },
                    {
                      internalType: "uint64",
                      name: "expirationTime",
                      type: "uint64",
                    },
                    {
                      internalType: "uint64",
                      name: "revocationTime",
                      type: "uint64",
                    },
                    {
                      internalType: "bytes32",
                      name: "refUID",
                      type: "bytes32",
                    },
                    {
                      internalType: "address",
                      name: "recipient",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "attester",
                      type: "address",
                    },
                    {
                      internalType: "bool",
                      name: "revocable",
                      type: "bool",
                    },
                    {
                      internalType: "bytes",
                      name: "data",
                      type: "bytes",
                    },
                  ],
                  internalType: "struct Attestation[]",
                  name: "attestations",
                  type: "tuple[]",
                },
                {
                  internalType: "uint256[]",
                  name: "values",
                  type: "uint256[]",
                },
              ],
              name: "multiAttest",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "uid",
                      type: "bytes32",
                    },
                    {
                      internalType: "bytes32",
                      name: "schema",
                      type: "bytes32",
                    },
                    {
                      internalType: "uint64",
                      name: "time",
                      type: "uint64",
                    },
                    {
                      internalType: "uint64",
                      name: "expirationTime",
                      type: "uint64",
                    },
                    {
                      internalType: "uint64",
                      name: "revocationTime",
                      type: "uint64",
                    },
                    {
                      internalType: "bytes32",
                      name: "refUID",
                      type: "bytes32",
                    },
                    {
                      internalType: "address",
                      name: "recipient",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "attester",
                      type: "address",
                    },
                    {
                      internalType: "bool",
                      name: "revocable",
                      type: "bool",
                    },
                    {
                      internalType: "bytes",
                      name: "data",
                      type: "bytes",
                    },
                  ],
                  internalType: "struct Attestation[]",
                  name: "attestations",
                  type: "tuple[]",
                },
                {
                  internalType: "uint256[]",
                  name: "values",
                  type: "uint256[]",
                },
              ],
              name: "multiRevoke",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "uid",
                      type: "bytes32",
                    },
                    {
                      internalType: "bytes32",
                      name: "schema",
                      type: "bytes32",
                    },
                    {
                      internalType: "uint64",
                      name: "time",
                      type: "uint64",
                    },
                    {
                      internalType: "uint64",
                      name: "expirationTime",
                      type: "uint64",
                    },
                    {
                      internalType: "uint64",
                      name: "revocationTime",
                      type: "uint64",
                    },
                    {
                      internalType: "bytes32",
                      name: "refUID",
                      type: "bytes32",
                    },
                    {
                      internalType: "address",
                      name: "recipient",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "attester",
                      type: "address",
                    },
                    {
                      internalType: "bool",
                      name: "revocable",
                      type: "bool",
                    },
                    {
                      internalType: "bytes",
                      name: "data",
                      type: "bytes",
                    },
                  ],
                  internalType: "struct Attestation",
                  name: "attestation",
                  type: "tuple",
                },
              ],
              name: "revoke",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [],
              name: "version",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              stateMutability: "payable",
              type: "receive",
            },
          ],
        },
        OmnichainLoanAttester: {
          address: "0x1DbdC0a71E267D2D94F400B2B620e22B1f0e256F",
          abi: [
            {
              inputs: [
                {
                  internalType: "contract IEAS",
                  name: "_eas",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "_schema_uid",
                  type: "bytes32",
                },
                {
                  internalType: "address",
                  name: "_endpoint",
                  type: "address",
                },
                {
                  internalType: "uint16",
                  name: "_attestationChain",
                  type: "uint16",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [],
              name: "EAS_NOT_DEFINED",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "user",
                  type: "address",
                },
              ],
              name: "NO_LOAN_ACTION_FOR_USER",
              type: "error",
            },
            {
              inputs: [],
              name: "SCHEMA_NOT_DEFINED",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "attUid",
                  type: "bytes32",
                },
                {
                  indexed: true,
                  internalType: "uint16",
                  name: "originChain",
                  type: "uint16",
                },
              ],
              name: "ActionAttested",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint64",
                  name: "actionId",
                  type: "uint64",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "reporter",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "user",
                  type: "address",
                },
              ],
              name: "LoanActionSaved",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint16",
                  name: "_srcChainId",
                  type: "uint16",
                },
                {
                  indexed: false,
                  internalType: "bytes",
                  name: "_srcAddress",
                  type: "bytes",
                },
                {
                  indexed: false,
                  internalType: "uint64",
                  name: "_nonce",
                  type: "uint64",
                },
                {
                  indexed: false,
                  internalType: "bytes",
                  name: "_payload",
                  type: "bytes",
                },
                {
                  indexed: false,
                  internalType: "bytes",
                  name: "_reason",
                  type: "bytes",
                },
              ],
              name: "MessageFailed",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint16",
                  name: "_srcChainId",
                  type: "uint16",
                },
                {
                  indexed: false,
                  internalType: "bytes",
                  name: "_srcAddress",
                  type: "bytes",
                },
                {
                  indexed: false,
                  internalType: "uint64",
                  name: "_nonce",
                  type: "uint64",
                },
                {
                  indexed: false,
                  internalType: "bytes32",
                  name: "_payloadHash",
                  type: "bytes32",
                },
              ],
              name: "RetryMessageSuccess",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint16",
                  name: "_dstChainId",
                  type: "uint16",
                },
                {
                  indexed: false,
                  internalType: "uint16",
                  name: "_type",
                  type: "uint16",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "_minDstGas",
                  type: "uint256",
                },
              ],
              name: "SetMinDstGas",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "address",
                  name: "precrime",
                  type: "address",
                },
              ],
              name: "SetPrecrime",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint16",
                  name: "_remoteChainId",
                  type: "uint16",
                },
                {
                  indexed: false,
                  internalType: "bytes",
                  name: "_path",
                  type: "bytes",
                },
              ],
              name: "SetTrustedRemote",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint16",
                  name: "_remoteChainId",
                  type: "uint16",
                },
                {
                  indexed: false,
                  internalType: "bytes",
                  name: "_remoteAddress",
                  type: "bytes",
                },
              ],
              name: "SetTrustedRemoteAddress",
              type: "event",
            },
            {
              inputs: [],
              name: "DEFAULT_PAYLOAD_SIZE_LIMIT",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "uint64",
                      name: "actionId",
                      type: "uint64",
                    },
                    {
                      internalType: "uint8",
                      name: "action",
                      type: "uint8",
                    },
                    {
                      internalType: "address",
                      name: "reporter",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "borrower",
                      type: "address",
                    },
                    {
                      internalType: "uint256",
                      name: "fromDate",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "toDate",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "amount",
                      type: "uint256",
                    },
                    {
                      internalType: "address",
                      name: "token",
                      type: "address",
                    },
                  ],
                  internalType:
                    "struct OmnichainLoanAttester.AttestationRecord",
                  name: "record",
                  type: "tuple",
                },
              ],
              name: "attestDirect",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "uint64",
                      name: "actionId",
                      type: "uint64",
                    },
                    {
                      internalType: "uint8",
                      name: "action",
                      type: "uint8",
                    },
                    {
                      internalType: "address",
                      name: "reporter",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "borrower",
                      type: "address",
                    },
                    {
                      internalType: "uint256",
                      name: "fromDate",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "toDate",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "amount",
                      type: "uint256",
                    },
                    {
                      internalType: "address",
                      name: "token",
                      type: "address",
                    },
                  ],
                  internalType:
                    "struct OmnichainLoanAttester.AttestationRecord",
                  name: "record",
                  type: "tuple",
                },
                {
                  internalType: "uint16",
                  name: "_dstChainId",
                  type: "uint16",
                },
                {
                  internalType: "uint256",
                  name: "msgValue",
                  type: "uint256",
                },
              ],
              name: "attestOnRemoteChain",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "id",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "fromDate",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "toDate",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "amount",
                      type: "uint256",
                    },
                    {
                      internalType: "address",
                      name: "token",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "borrower",
                      type: "address",
                    },
                  ],
                  internalType: "struct ILoanActionStorer.Loan",
                  name: "loan",
                  type: "tuple",
                },
                {
                  internalType: "enum ILoanActionStorer.Action",
                  name: "action",
                  type: "uint8",
                },
                {
                  internalType: "uint16",
                  name: "dstChainId",
                  type: "uint16",
                },
              ],
              name: "estimateActionGasFee",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint16",
                  name: "dstChainId",
                  type: "uint16",
                },
                {
                  components: [
                    {
                      internalType: "uint64",
                      name: "actionId",
                      type: "uint64",
                    },
                    {
                      internalType: "uint8",
                      name: "action",
                      type: "uint8",
                    },
                    {
                      internalType: "address",
                      name: "reporter",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "borrower",
                      type: "address",
                    },
                    {
                      internalType: "uint256",
                      name: "fromDate",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "toDate",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "amount",
                      type: "uint256",
                    },
                    {
                      internalType: "address",
                      name: "token",
                      type: "address",
                    },
                  ],
                  internalType:
                    "struct OmnichainLoanAttester.AttestationRecord",
                  name: "record",
                  type: "tuple",
                },
              ],
              name: "estimateFees",
              outputs: [
                {
                  internalType: "uint256",
                  name: "nativeFee",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "zroFee",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint16",
                  name: "",
                  type: "uint16",
                },
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
                {
                  internalType: "uint64",
                  name: "",
                  type: "uint64",
                },
              ],
              name: "failedMessages",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint16",
                  name: "_srcChainId",
                  type: "uint16",
                },
                {
                  internalType: "bytes",
                  name: "_srcAddress",
                  type: "bytes",
                },
              ],
              name: "forceResumeReceive",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint16",
                  name: "_version",
                  type: "uint16",
                },
                {
                  internalType: "uint16",
                  name: "_chainId",
                  type: "uint16",
                },
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_configType",
                  type: "uint256",
                },
              ],
              name: "getConfig",
              outputs: [
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getLastUid",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "user",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "actionId",
                  type: "uint256",
                },
              ],
              name: "getLoanDetails",
              outputs: [
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "id",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "fromDate",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "toDate",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "amount",
                      type: "uint256",
                    },
                    {
                      internalType: "address",
                      name: "token",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "borrower",
                      type: "address",
                    },
                  ],
                  internalType: "struct ILoanActionStorer.Loan",
                  name: "loan",
                  type: "tuple",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint16",
                  name: "_remoteChainId",
                  type: "uint16",
                },
              ],
              name: "getTrustedRemoteAddress",
              outputs: [
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint16",
                  name: "_srcChainId",
                  type: "uint16",
                },
                {
                  internalType: "bytes",
                  name: "_srcAddress",
                  type: "bytes",
                },
              ],
              name: "isTrustedRemote",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "user",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "loanActionHistory",
              outputs: [
                {
                  internalType: "uint64",
                  name: "actionId",
                  type: "uint64",
                },
                {
                  internalType: "enum ILoanActionStorer.Action",
                  name: "action",
                  type: "uint8",
                },
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "id",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "fromDate",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "toDate",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "amount",
                      type: "uint256",
                    },
                    {
                      internalType: "address",
                      name: "token",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "borrower",
                      type: "address",
                    },
                  ],
                  internalType: "struct ILoanActionStorer.Loan",
                  name: "loan",
                  type: "tuple",
                },
                {
                  internalType: "address",
                  name: "reporter",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "timestamp",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "lzEndpoint",
              outputs: [
                {
                  internalType: "contract ILayerZeroEndpoint",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint16",
                  name: "_srcChainId",
                  type: "uint16",
                },
                {
                  internalType: "bytes",
                  name: "_srcAddress",
                  type: "bytes",
                },
                {
                  internalType: "uint64",
                  name: "_nonce",
                  type: "uint64",
                },
                {
                  internalType: "bytes",
                  name: "_payload",
                  type: "bytes",
                },
              ],
              name: "lzReceive",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint16",
                  name: "",
                  type: "uint16",
                },
                {
                  internalType: "uint16",
                  name: "",
                  type: "uint16",
                },
              ],
              name: "minDstGasLookup",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint16",
                  name: "_srcChainId",
                  type: "uint16",
                },
                {
                  internalType: "bytes",
                  name: "_srcAddress",
                  type: "bytes",
                },
                {
                  internalType: "uint64",
                  name: "_nonce",
                  type: "uint64",
                },
                {
                  internalType: "bytes",
                  name: "_payload",
                  type: "bytes",
                },
              ],
              name: "nonblockingLzReceive",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint16",
                  name: "",
                  type: "uint16",
                },
              ],
              name: "payloadSizeLimitLookup",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "precrime",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "id",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "fromDate",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "toDate",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "amount",
                      type: "uint256",
                    },
                    {
                      internalType: "address",
                      name: "token",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "borrower",
                      type: "address",
                    },
                  ],
                  internalType: "struct ILoanActionStorer.Loan",
                  name: "loan",
                  type: "tuple",
                },
                {
                  internalType: "enum ILoanActionStorer.Action",
                  name: "action",
                  type: "uint8",
                },
              ],
              name: "reportLoanAction",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint16",
                  name: "_srcChainId",
                  type: "uint16",
                },
                {
                  internalType: "bytes",
                  name: "_srcAddress",
                  type: "bytes",
                },
                {
                  internalType: "uint64",
                  name: "_nonce",
                  type: "uint64",
                },
                {
                  internalType: "bytes",
                  name: "_payload",
                  type: "bytes",
                },
              ],
              name: "retryMessage",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "uid",
                  type: "bytes32",
                },
              ],
              name: "revokeAttestation",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint16",
                  name: "_version",
                  type: "uint16",
                },
                {
                  internalType: "uint16",
                  name: "_chainId",
                  type: "uint16",
                },
                {
                  internalType: "uint256",
                  name: "_configType",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "_config",
                  type: "bytes",
                },
              ],
              name: "setConfig",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint16",
                  name: "_dstChainId",
                  type: "uint16",
                },
                {
                  internalType: "uint16",
                  name: "_packetType",
                  type: "uint16",
                },
                {
                  internalType: "uint256",
                  name: "_minGas",
                  type: "uint256",
                },
              ],
              name: "setMinDstGas",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint16",
                  name: "_dstChainId",
                  type: "uint16",
                },
                {
                  internalType: "uint256",
                  name: "_size",
                  type: "uint256",
                },
              ],
              name: "setPayloadSizeLimit",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_precrime",
                  type: "address",
                },
              ],
              name: "setPrecrime",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint16",
                  name: "_version",
                  type: "uint16",
                },
              ],
              name: "setReceiveVersion",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint16",
                  name: "_version",
                  type: "uint16",
                },
              ],
              name: "setSendVersion",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint16",
                  name: "_remoteChainId",
                  type: "uint16",
                },
                {
                  internalType: "bytes",
                  name: "_path",
                  type: "bytes",
                },
              ],
              name: "setTrustedRemote",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint16",
                  name: "_remoteChainId",
                  type: "uint16",
                },
                {
                  internalType: "bytes",
                  name: "_remoteAddress",
                  type: "bytes",
                },
              ],
              name: "setTrustedRemoteAddress",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint16",
                  name: "",
                  type: "uint16",
                },
              ],
              name: "trustedRemoteLookup",
              outputs: [
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "uids",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
        UncollateralizedLenderStub: {
          address: "0x5Ae7761C70564113Dd2edB9587b2e42c8F9b6E0F",
          abi: [
            {
              inputs: [
                {
                  internalType: "contract ILoanActionStorer",
                  name: "_storer",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "limit",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "LIMIT_EXCEEDED",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "borrower",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "token",
                  type: "address",
                },
              ],
              name: "Lent",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "borrower",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "token",
                  type: "address",
                },
              ],
              name: "Repaid",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "role",
                  type: "bytes32",
                },
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "previousAdminRole",
                  type: "bytes32",
                },
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "newAdminRole",
                  type: "bytes32",
                },
              ],
              name: "RoleAdminChanged",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "role",
                  type: "bytes32",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
              ],
              name: "RoleGranted",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "role",
                  type: "bytes32",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
              ],
              name: "RoleRevoked",
              type: "event",
            },
            {
              inputs: [],
              name: "DEFAULT_ADMIN_ROLE",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "user",
                  type: "address",
                },
              ],
              name: "approveLoan",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "role",
                  type: "bytes32",
                },
              ],
              name: "getRoleAdmin",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "role",
                  type: "bytes32",
                },
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
              ],
              name: "grantRole",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "role",
                  type: "bytes32",
                },
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
              ],
              name: "hasRole",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "token",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "lend",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "role",
                  type: "bytes32",
                },
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
              ],
              name: "renounceRole",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "repay",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "user",
                  type: "address",
                },
              ],
              name: "revokeLoanApproval",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "role",
                  type: "bytes32",
                },
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
              ],
              name: "revokeRole",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes4",
                  name: "interfaceId",
                  type: "bytes4",
                },
              ],
              name: "supportsInterface",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
      },
    },
  ],
} as const;

export default contracts;
