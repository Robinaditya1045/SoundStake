const TronWeb = require("tronweb");
const path = require("path");
const fs = require("fs");

// Set up TronWeb instance with private key and fullNode
const tronWeb = new TronWeb({
    fullHost: "https://api.shasta.trongrid.io",
    privateKey: process.env.PRIVATE_KEY_SHASTA
});

// Load contract ABI and address
function loadContract(name) {
    const contractsDir = path.join(__dirname, "../src/contracts_data/");
    const abi = JSON.parse(fs.readFileSync(path.join(contractsDir, `${name}.json`))).abi;
    const address = JSON.parse(fs.readFileSync(path.join(contractsDir, `${name}-address.json`))).address;
    return tronWeb.contract(abi, address);
}

// Interacting with FractionPurchase contract
async function buyFraction(songId, amount) {
    const fractionPurchase = loadContract("FractionPurchase");

    // Make sure to send enough TRX (amount * fraction price)
    const pricePerFraction = 100; // Example price in TRX (adjust based on your deployment)
    const totalCost = pricePerFraction * amount;

    try {
        const transaction = await fractionPurchase.methods
            .buyFraction(songId, amount)
            .send({
                callValue: tronWeb.toSun(totalCost) // Send the correct amount in SUN (1 TRX = 1e6 SUN)
            });

        console.log("Transaction Hash:", transaction);
    } catch (error) {
        console.error("Error buying fraction:", error);
    }
}

// Call this function as an example
buyFraction(1, 10);
