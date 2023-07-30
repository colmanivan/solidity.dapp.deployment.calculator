const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Calculator Test", function () {
  let deployer;
  let sc;

  before(async () => {
    //Arrange
    [deployer] = await ethers.getSigners();
  });

  it("Initial value is zero", async function () {
    //Act
    const StoreFactory = await ethers.getContractFactory(
      "Calculator",
      deployer
    );
    sc = await StoreFactory.deploy();

    //Assert
    let value = await sc.getValue();
    expect(value).to.equal(0n);
  });

  it("Add operator should be ok", async function () {
    //Act
    const val = 10n;
    const expected = 10n;
    await sc.add(val);

    //Assert
    let value = await sc.getValue();
    expect(value).to.equal(expected);
  });

  it("Sub operator should be ok", async function () {
    //Act
    const val = 5n;
    const expected = 5n;
    await sc.sub(val);

    //Assert
    let value = await sc.getValue();
    expect(value).to.equal(expected);
  });

  it("Reset operator should be ok", async function () {
    //Act
    const expected = 0n;
    await sc.reset();

    //Assert
    let value = await sc.getValue();
    expect(value).to.equal(expected);
  });

  it("Add operator with negative number should be ok", async function () {
    //Act
    const val = -10n;
    const expected = -10n;
    await sc.add(val);

    //Assert
    let value = await sc.getValue();
    expect(value).to.equal(expected);
  });

  it("Sub operator with negative number should be ok", async function () {
    //Act
    const val = -10n;
    const expected = 0n;
    await sc.sub(val);

    //Assert
    let value = await sc.getValue();
    expect(value).to.equal(expected);
  });
});
