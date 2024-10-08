const FractionPurchase = artifacts.require("../build/contracts/FractionPurchase.sol");
const SongFractionalized = artifacts.require("../build/contracts/SongFractionalized.sol");
const SongEscrow = artifacts.require("../build/contracts/SongEscrow.sol");
const path = require("path");
const fs = require("fs");

module.exports = async function(deployer) {
  // Step 1: Deploy SongFractionalized contract
  await deployer.deploy(SongFractionalized);
  const songFractionalized = await SongFractionalized.deployed();
  saveFrontendFiles(songFractionalized, "SongFractionalized");

  // Step 2: Deploy SongEscrow contract with SongFractionalized address
  await deployer.deploy(SongEscrow, songFractionalized.address);
  const songEscrow = await SongEscrow.deployed();
  saveFrontendFiles(songEscrow, "SongEscrow");

  // Step 3: Deploy FractionPurchase contract with SongFractionalized and SongEscrow addresses
  await deployer.deploy(FractionPurchase, songFractionalized.address, songEscrow.address);
  const fractionPurchase = await FractionPurchase.deployed();
  saveFrontendFiles(fractionPurchase, "FractionPurchase");
};

// Function to save contract details (ABI and Address) for frontend use
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

  // Save contract ABI (available from contract object)
  fs.writeFileSync(
    path.join(contractsDir, `${name}.json`),
    JSON.stringify({ abi: contract.abi }, null, 2)
  );
}
