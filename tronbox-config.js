module.exports = {
    networks: {
      // Local Development Network (with Tron Quickstart or TronGrid Devnode)
      development: {
        privateKey: '32799031a989e0d47af2fcaaa2d4e0731786c82769dbb62ad5bc9166671af11f', // Replace with your private key
        fullHost: "http://127.0.0.1:8080", // URL for Tron Quickstart node or TronGrid Devnode
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
        version: '0.8.0' // Replace with the version of Solidity you're using
      }
    }
  };
  