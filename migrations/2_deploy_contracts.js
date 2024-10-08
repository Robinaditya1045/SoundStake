// var ConvertLib = artifacts.require("./ConvertLib.sol");
// var MetaCoin = artifacts.require("./MetaCoin.sol");
// const path = require("path");
// const fs = require("fs");

// module.exports = function(deployer) {
//   deployer.deploy(ConvertLib);
//   deployer.link(ConvertLib, MetaCoin);
//   deployer.deploy(MetaCoin, 10000);
//   saveFrontendFiles(ConvertLib, "ConvertLib");
//   saveFrontendFiles(MetaCoin, "MetaCoin");
// };

// function saveFrontendFiles(contract, name) {
//   const contractsDir = path.join(__dirname, "../src/contracts_data/");

//   // Ensure the directory exists
//   if (!fs.existsSync(contractsDir)) {
//     fs.mkdirSync(contractsDir, { recursive: true });
//   }

//   // Save contract address
//   fs.writeFileSync(
//     path.join(contractsDir, `${name}-address.json`),
//     JSON.stringify({ address: contract.address }, undefined, 2)
//   );

//   // Save contract ABI
//   const contractArtifact = artifacts.readArtifactSync(name);
//   fs.writeFileSync(
//     path.join(contractsDir, `${name}.json`),
//     JSON.stringify(contractArtifact, null, 2)
//   );
// }


var ConvertLib = artifacts.require("./ConvertLib.sol");
var MetaCoin = artifacts.require("./MetaCoin.sol");
const path = require("path");
const fs = require("fs");

module.exports = async function (deployer, network, accounts) {
  // Deploy ConvertLib
  await deployer.deploy(ConvertLib);
  // Link ConvertLib to MetaCoin
  await deployer.link(ConvertLib, MetaCoin);
  // Deploy MetaCoin with an initial balance of 10000
  await deployer.deploy(MetaCoin, 10000);
  
  // Save the frontend files for both contracts
  saveFrontendFiles(ConvertLib, "ConvertLib");
  saveFrontendFiles(MetaCoin, "MetaCoin");
};

function saveFrontendFiles(contract, name) {
  const contractsDir = path.join(__dirname, "../src/contracts_data/");

  // Ensure the directory exists
  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir, { recursive: true });
  }

  // Save contract address
  fs.writeFileSync(
    path.join(contractsDir, `${name}-address.json`),
    JSON.stringify({ address: contract.address }, undefined, 2)
  );

  // Save contract ABI (ABI is available directly from the contract object in Tronbox)
  const contractAbi = contract.abi;
  fs.writeFileSync(
    path.join(contractsDir, `${name}.json`),
    JSON.stringify({ abi: contractAbi }, null, 2)
  );
}
