module.exports = {
  networks: {
    development: {
      privateKey: '32799031a989e0d47af2fcaaa2d4e0731786c82769dbb62ad5bc9166671af11f', // Replace with your private key
      fullHost: "http://127.0.0.1:8080", // Tron local node or TronGrid Devnode
      network_id: "1" // Match any network id
    },
    shasta: {
      privateKey: "98c0905d473be42cfeee5a3a47c4978aff9315e76a4e21a53dd02076f3f192c1",
      userFeePercentage: 50,
      feeLimit: 1000 * 1e6,
      fullHost: 'https://api.shasta.trongrid.io',
      network_id: '2'
    },
    compilers: {
      solc: {
        version: '0.8.0'
      }
    }
  }
}