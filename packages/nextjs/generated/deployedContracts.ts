const contracts = {
  31337: [
    {
      chainId: "31337",
      name: "localhost",
      contracts: {
        WorldIDVerifier: {
          address: "0xD5bFeBDce5c91413E41cc7B24C8402c59A344f7c",
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
