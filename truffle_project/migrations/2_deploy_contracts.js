const Voucher = artifacts.require("Voucher");
const Factory = artifacts.require("Factory");

module.exports = function(deployer) {
  //deployer.deploy(Voucher, "0x123");
  deployer.deploy(Factory);
};
