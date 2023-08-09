const contracts = {
  420: [
    {
      chainId: "420",
      name: "optimismGoerli",
      contracts: {
        CreditBureau: {
          address: "0x7F895F980CFff590ca629cBfACbD03eBc0570e9F",
          abi: [
            {
              inputs: [
                {
                  internalType: "contract LzAttester",
                  name: "_attester",
                  type: "address",
                },
                {
                  internalType: "uint16",
                  name: "_reportStoreChain",
                  type: "uint16",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [],
              name: "InvalidReport",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [
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
              name: "CreditReportAdded",
              type: "event",
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
              name: "creditHistory",
              outputs: [
                {
                  internalType: "uint256",
                  name: "reportId",
                  type: "uint256",
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
                  internalType: "enum ICreditBureau.Status",
                  name: "status",
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
                      internalType: "uint256",
                      name: "amountRepaid",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct ICreditBureau.Credit",
                  name: "credit",
                  type: "tuple",
                },
                {
                  internalType: "uint256",
                  name: "timestamp",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
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
                      internalType: "uint256",
                      name: "reportId",
                      type: "uint256",
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
                      internalType: "enum ICreditBureau.Status",
                      name: "status",
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
                          internalType: "uint256",
                          name: "amountRepaid",
                          type: "uint256",
                        },
                      ],
                      internalType: "struct ICreditBureau.Credit",
                      name: "credit",
                      type: "tuple",
                    },
                    {
                      internalType: "uint256",
                      name: "timestamp",
                      type: "uint256",
                    },
                    {
                      internalType: "bytes",
                      name: "data",
                      type: "bytes",
                    },
                  ],
                  internalType: "struct ICreditBureau.Report",
                  name: "report",
                  type: "tuple",
                },
              ],
              name: "submitCreditReport",
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
                      name: "reportId",
                      type: "uint256",
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
                      internalType: "enum ICreditBureau.Status",
                      name: "status",
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
                          internalType: "uint256",
                          name: "amountRepaid",
                          type: "uint256",
                        },
                      ],
                      internalType: "struct ICreditBureau.Credit",
                      name: "credit",
                      type: "tuple",
                    },
                    {
                      internalType: "uint256",
                      name: "timestamp",
                      type: "uint256",
                    },
                    {
                      internalType: "bytes",
                      name: "data",
                      type: "bytes",
                    },
                  ],
                  internalType: "struct ICreditBureau.Report",
                  name: "report",
                  type: "tuple",
                },
              ],
              name: "verify",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
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
        LzAttester: {
          address: "0x645eaefA3dfE93b6140e4AB68113f56Fb1910Ca8",
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
              inputs: [],
              name: "SCHEMA_NOT_DEFINED",
              type: "error",
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
              name: "ReportAttested",
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
                      internalType: "uint256",
                      name: "reportId",
                      type: "uint256",
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
                      internalType: "enum ICreditBureau.Status",
                      name: "status",
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
                          internalType: "uint256",
                          name: "amountRepaid",
                          type: "uint256",
                        },
                      ],
                      internalType: "struct ICreditBureau.Credit",
                      name: "credit",
                      type: "tuple",
                    },
                    {
                      internalType: "uint256",
                      name: "timestamp",
                      type: "uint256",
                    },
                    {
                      internalType: "bytes",
                      name: "data",
                      type: "bytes",
                    },
                  ],
                  internalType: "struct ICreditBureau.Report",
                  name: "report",
                  type: "tuple",
                },
                {
                  internalType: "uint16",
                  name: "_dstChainId",
                  type: "uint16",
                },
              ],
              name: "attestCrossChain",
              outputs: [],
              stateMutability: "payable",
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
                  internalType: "bytes",
                  name: "_payload",
                  type: "bytes",
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
          address: "0x26438b854c7E20B905C9ff813A09aDeF2935fd77",
          abi: [
            {
              inputs: [
                {
                  internalType: "contract ICreditBureau",
                  name: "_bureau",
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
                  indexed: false,
                  internalType: "address",
                  name: "borrower",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  indexed: false,
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
                  indexed: false,
                  internalType: "address",
                  name: "borrower",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "token",
                  type: "address",
                },
              ],
              name: "Repaid",
              type: "event",
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
          ],
        },
        WorldIDVerifier: {
          address: "0xF50424203bb664733551285E6033646D27DBf132",
          abi: [
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
        CreditBureau: {
          address: "0xB54B4227d0c2016fFaD2F9Ff6e4E6d197B1700d9",
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
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [],
              name: "InvalidEAS",
              type: "error",
            },
            {
              inputs: [],
              name: "InvalidReport",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [
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
              name: "CreditReportAdded",
              type: "event",
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
              name: "creditHistory",
              outputs: [
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
                  internalType: "enum ICreditBureau.Status",
                  name: "status",
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
                      internalType: "uint256",
                      name: "amountRepaid",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct ICreditBureau.Credit",
                  name: "credit",
                  type: "tuple",
                },
                {
                  internalType: "uint256",
                  name: "timestamp",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
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
                      internalType: "enum ICreditBureau.Status",
                      name: "status",
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
                          internalType: "uint256",
                          name: "amountRepaid",
                          type: "uint256",
                        },
                      ],
                      internalType: "struct ICreditBureau.Credit",
                      name: "credit",
                      type: "tuple",
                    },
                    {
                      internalType: "uint256",
                      name: "timestamp",
                      type: "uint256",
                    },
                    {
                      internalType: "bytes",
                      name: "data",
                      type: "bytes",
                    },
                  ],
                  internalType: "struct ICreditBureau.Report",
                  name: "report",
                  type: "tuple",
                },
              ],
              name: "submitCreditReport",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
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
                      internalType: "enum ICreditBureau.Status",
                      name: "status",
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
                          internalType: "uint256",
                          name: "amountRepaid",
                          type: "uint256",
                        },
                      ],
                      internalType: "struct ICreditBureau.Credit",
                      name: "credit",
                      type: "tuple",
                    },
                    {
                      internalType: "uint256",
                      name: "timestamp",
                      type: "uint256",
                    },
                    {
                      internalType: "bytes",
                      name: "data",
                      type: "bytes",
                    },
                  ],
                  internalType: "struct ICreditBureau.Report",
                  name: "report",
                  type: "tuple",
                },
              ],
              name: "verify",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_wallet",
                  type: "address",
                },
              ],
              name: "viewCreditSummary",
              outputs: [
                {
                  internalType: "uint256",
                  name: "lengthOfCreditHistory",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "earliestReport",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "latestReport",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "totalOpenCreditLines",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "mostRecentCreditLineOpenDate",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "totalNumberOfRecords",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
        EASSchemaRegistrar: {
          address: "0x4259e25D2B3dbc6c495f02f4BF1e4408066485C0",
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
          address: "0x690716b83FbFF443847cB024617532330075416A",
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
        UncollateralizedLenderStub: {
          address: "0x937690ce201597433892251f67817120D65E66a3",
          abi: [
            {
              inputs: [
                {
                  internalType: "contract ICreditBureau",
                  name: "_bureau",
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
                  indexed: false,
                  internalType: "address",
                  name: "borrower",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  indexed: false,
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
                  indexed: false,
                  internalType: "address",
                  name: "borrower",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "token",
                  type: "address",
                },
              ],
              name: "Repaid",
              type: "event",
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
          ],
        },
      },
    },
  ],
} as const;

export default contracts;
