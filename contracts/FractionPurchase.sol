// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./SongFractionalized.sol";
import "./SongEscrow.sol";

contract FractionPurchase {
    SongFractionalized public songFractionalized;
    SongEscrow public songEscrow;

    constructor(address payable _songFractionalized, address payable _songEscrow) {
        songFractionalized = SongFractionalized(_songFractionalized);
        songEscrow = SongEscrow(_songEscrow);
    }

    function buyFraction(uint256 songId, uint256 amount) external payable {
        // Use the getter function to retrieve the Song details
        SongFractionalized.Song memory song = songFractionalized.getSong(songId);

        require(song.isListed, "Song has not been listed yet");
        require(amount > 0, "Must buy at least one fraction");
        require(msg.value == song.fractionPrice * amount, "Incorrect Ether sent");

        // Transfer fractions to buyer
        songFractionalized.transferFraction(msg.sender, songId, amount);

        // Send funds to SongEscrow for safe holding
        (bool success, ) = address(songEscrow).call{value: msg.value}("");
        require(success, "Failed to transfer Ether to escrow");
    }
}
//0x2E9d30761DB97706C536A112B9466433032b28e3
//0x3c725134d74D5c45B4E4ABd2e5e2a109b5541288
//0xDA07165D4f7c84EEEfa7a4Ff439e039B7925d3dF