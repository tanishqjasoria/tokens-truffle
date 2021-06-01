const accounts = await web3.eth.getAccounts()

const token20 = artifacts.require("Token20")
const token721 = artifacts.require("Token721")
const token777 = artifacts.require("Token777")
const token1155 = artifacts.require("Token1155")

const Token20 = await token20.deployed()
const Token721 = await token721.deployed()
const Token777 = await token777.deployed()
const Token1155 = await token1155.deployed()


module.exports = async function (deployer) {

    // Token20.transfer

}