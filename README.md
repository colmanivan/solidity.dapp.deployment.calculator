# Deployment Example

A basic example of deployment in a testnet.

## System Requirements

- Node JS [installation link](https://nodejs.org/)

### 1. Clone/Download this Repository

### 2. Execute the next commands

```shell
npm install
npx hardhat compile
npx hardhat test
npx hardhat run scripts/deploy.js --network sepolia
npx hardhat verify --network sepolia 0x03E615238D97FC376ed25c673E5dcB416621542B
```

![how to connect on MetaMask](/images/01.png)
![sepolia etherscan](/images/02.png)
