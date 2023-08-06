const contracts = {
  31337: [
    {
      chainId: "31337",
      name: "localhost",
      contracts: {
        CreditBureau: {
          address: "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9",
          abi: [
            {
              inputs: [],
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
                  internalType: "string",
                  name: "creditProvider",
                  type: "string",
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
                      internalType: "string",
                      name: "creditProvider",
                      type: "string",
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
                  internalType: "address",
                  name: "user",
                  type: "address",
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
                      internalType: "string",
                      name: "creditProvider",
                      type: "string",
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
      },
    },
  ],
} as const;

export default contracts;
