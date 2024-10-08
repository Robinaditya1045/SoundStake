module.exports = {
    networks: {
      // Local Development Network (with Tron Quickstart or TronGrid Devnode)
      development: {
        privateKey: 'fdc61ecd9ccfabf168027fc3d051efa155fdf9e932f81c4e29ec062bc5f2c013', // Replace with your private key
        fullHost: "http://127.0.0.1:8080", // URL for Tron Quickstart node or TronGrid Devnode
        userFeePercentage: 50,
        feeLimit: 1000 * 1e6,
        network_id: "1" // Match any network id
      },
  
      // Shasta Test Network
      shasta: {
        privateKey: "98c0905d473be42cfeee5a3a47c4978aff9315e76a4e21a53dd02076f3f192c1",
        userFeePercentage: 50,
        feeLimit: 1000 * 1e6,
        fullHost: 'https://api.shasta.trongrid.io',
        network_id: '2'
      },
  
      // Tron Main Network (optional if you're deploying to mainnet)
      mainnet: {
        privateKey: 'your-private-key-here', // Replace with your private key
        fullHost: "https://api.trongrid.io", // Mainnet full node
        network_id: "3"
      }
    },
  
    // Compiler Configuration (optional)
    compilers: {
      solc: {
        version: '0.8.20' // Replace with the version of Solidity you're using
      }
    }
  };
  