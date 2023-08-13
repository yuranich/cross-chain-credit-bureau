# OmniChain Loan Attester

Innovative omnichain loan reporting and attesting service. It leverages proof of humanity and attestations for uncollateralized lenders to solve multi-lending problem in this open world of blockchain.

## Contents

- [About](#About)
- [Deployments](#Deployments)
- [Tech Design](#tech-design)

## About

Uncollateralized lending is a growing narrative in crypto. This project aims to be a fully cross-chain solution and solve at least 2 problems:

- To find out if the user already has a loan on another blockchain or with another wallet.
- Allow lender to give loan on one chain but attest it on another chain ( where EAS works).
  At the same time, smart contracts and the application are designed in a way to protect lenders from users manipulating verification results before receiving a loan.
  Diagrams showing how the app works will be on github repo.

## Deployments

## Tech Design

![Lending Process](./lending_sequence.png)

## Requirements

Before you begin, you need to install the following tools:

- [Node (v18 LTS)](https://nodejs.org/en/download/)
- Yarn ([v1](https://classic.yarnpkg.com/en/docs/install/) or [v2+](https://yarnpkg.com/getting-started/install))
- [Git](https://git-scm.com/downloads)

## Run

1. install dependencies

```
yarn install
```

2. Fill in .env.local in `packages/nextjs` folder

3. Run app locally.

```
yarn start
```

Visit your app on: `http://localhost:3000`. You can interact with your smart contract using the contract component or the example ui in the frontend. You can tweak the app config (and network) in `packages/nextjs/scaffold.config.ts`.
