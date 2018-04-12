module.exports = {
  messagePrefix: '\x18GoByte Signed Message:\n',
  bip32: {
    public: 0x488b21e,
    private: 0x488ade4
  },
  pubKeyHash: 0x26,
  scriptHash: 0x10,
  wif: 0xc6,
  dustThreshold: 5460 // https://github.com/gobytecoin/bitcore-lib-gobyte/blob/master/lib/transaction/transaction.js#L66
}
