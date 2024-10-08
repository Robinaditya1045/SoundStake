module.exports = {
  networks: {
    shasta: {
      privateKey: "98c0905d473be42cfeee5a3a47c4978aff9315e76a4e21a53dd02076f3f192c1",
      userFeePercentage: 50,
      feeLimit: 1000 * 1e6,
      fullHost: 'https://api.shasta.trongrid.io',
      network_id: '1'
    },
    compilers: {
      solc: {
        version: '0.8.20'
      }
    }
  }
}