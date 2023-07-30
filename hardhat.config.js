require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("@nomicfoundation/hardhat-verify");
require("hardhat-contract-sizer");
require("@openzeppelin/hardhat-upgrades");

const { ALCHEMY_API_KEY, METAMASK_PRIVATE_KEY, ETHERSCAN_API_KEY } =
  process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {},
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [`0x${METAMASK_PRIVATE_KEY}`],
    },
  },
  settings: {
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },
  contractSizer: {
    alphaSort: true,
    disambiguatePaths: false,
    runOnCompile: true,
    strict: true,
  },
  etherscan: {
    apiKey: {
      sepolia: ETHERSCAN_API_KEY,
    },
  },
};
