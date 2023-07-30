const hre = require("hardhat");
const { parseUnits, parseEther } = require("ethers");

async function main() {
  [deployer] = await ethers.getSigners();

  console.log("Deployer: ", deployer.address);
  const StoreFactory = await ethers.getContractFactory("Calculator", deployer);
  var options = {
    gas: parseUnits("275010499", "gwei"),
  };
  const sc = await StoreFactory.deploy(options);
  console.log("Contract Deployed to Address: ", sc);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
