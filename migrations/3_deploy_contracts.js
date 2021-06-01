const Token20 = artifacts.require("Token20")
const Token721 = artifacts.require("Token721")
const Token777 = artifacts.require("Token777")
const Token1155 = artifacts.require("Token1155")


module.exports = async function (deployer) {

  await deployer.deploy(Token20, 1000000)
  await deployer.deploy(Token721)
  await deployer.deploy(Token777, 1000000, [])
  await deployer.deploy(Token1155)

}