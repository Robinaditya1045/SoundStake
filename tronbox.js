module.exports = {
  networks: {
    development: {
      privateKey: 'fdc61ecd9ccfabf168027fc3d051efa155fdf9e932f81c4e29ec062bc5f2c013', // Replace with your private key
      fullHost: "http://127.0.0.1:8080", // Tron local node or TronGrid Devnode
      userFeePercentage: 50,
      feeLimit: 1000 * 1e6,
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
        version: '0.8.20'
      }
    }
  }
}