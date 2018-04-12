// blockchain definition

var u = require('gobyte-util')

// definition of the genesis block's header
var genesisHeader = {
  version: 1,
  prevHash: u.nullHash,
  merkleRoot: u.toHash('dc9a719dc1bcda39107ea55424f00cab512170a1cb69efa08531f483f2399f21'),
  time: 1510848000,
  bits: 0x1e0ffff0,
  nonce: 1631855
}

// selected block headers for verifying initial sync
var checkpoints = [
  {
    height: 407452,
    header: {
      version: 3,
      prevHash: u.toHash('000000000007ccfff57f2f745129d7941b63a3c58563eab2a13d0c7a594397b9'),
      merkleRoot: u.toHash('f665a4a52012bccf8a1a94f884efb753d9526851583c29c777e39d787bad49bd'),
      time: 1523566010,
      bits: 0x1b2117a9,
      nonce: 1780261120
    }
  }
]

// settings passed to Blockchain objects
// (see https://github.com/mappum/blockchain-spv)
module.exports = {
  genesisHeader,
  checkpoints
}
