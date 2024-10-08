'use client';
import { useEffect, useState } from 'react';
import {TronWeb }from 'tronweb'; // Ensure TronWeb is installed via npm/yarn

const BlockTimestamp = () => {
  const [globalTronWeb, setGlobalTronWeb] = useState<TronWeb | null>(null);
  const [timestamp, setTimestamp] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [title, setTitle] = useState<string>('');
  const [artistName, setArtistName] = useState<string>('');
  const [releaseTime, setReleaseTime] = useState<bigint>(BigInt(0));
  const [fractionPrice, setFractionPrice] = useState<bigint>(BigInt(0));
  const [totalFraction, setTotalFraction] = useState<bigint>(BigInt(0));

  const SongFractionalizedAddress = require('../../contracts_data/SongFractionalized-address.json').address;
  const SongEscrowAddress = require('../../contracts_data/SongEscrow-address.json').address;
  const FractionPurchaseAddress = require('../../contracts_data/FractionPurchase-address.json').address;
  const SongRevenueAddress = require('../../contracts_data/SongRevenue-address.json').address;

  const SongFractionalizedAbi = require('../../contracts_data/SongFractionalized.json').abi;
  const SongEscrowAbi = require('../../contracts_data/SongEscrow.json').abi;
  const FractionPurchaseAbi = require('../../contracts_data/FractionPurchase.json').abi;
  const SongRevenueAbi = require('../../contracts_data/SongRevenue.json').abi;

  useEffect(() => {
    const fetchBlockTimestamp = async () => {
      setLoading(true);
      setError(null);

      try {
        const tronWeb = new TronWeb({
          fullHost: 'http://localhost:8080',
          privateKey: 'fdc61ecd9ccfabf168027fc3d051efa155fdf9e932f81c4e29ec062bc5f2c013', // Replace with your actual private key
        });
        setGlobalTronWeb(tronWeb);

        const contract = tronWeb.contract(SongFractionalizedAbi, SongFractionalizedAddress);
        const result = await contract.methods.getCurrentBlockTimestamp().call();

        const timestampInHex = result.toString();
        const timestampInNumber = parseInt(timestampInHex, 16);
        setTimestamp(timestampInNumber);
      } catch (err) {
        console.error('Error fetching block timestamp:', err);
        setError('Failed to fetch block timestamp');
      } finally {
        setLoading(false);
      }
    };

    fetchBlockTimestamp();
  }, []);

  const ListSong = async () => {
    try {
      if (!globalTronWeb) throw new Error('TronWeb not initialized');

      const tronLink = window.tronLink;
      if (!tronLink) {
        alert('Please install TronLink wallet to proceed.');
        return;
      }

      const userAddress = await globalTronWeb.defaultAddress.base58;

      console.log('User Address:', userAddress); // Log the user's address

      // Check if the account exists
      const accountInfo = await globalTronWeb.trx.getAccount(userAddress);
      if (!accountInfo.address) {
        throw new Error(`Account ${userAddress} does not exist`);
      }

      const contract = globalTronWeb.contract(SongFractionalizedAbi, SongFractionalizedAddress);

      // Sign the transaction using TronLink
      const result = await contract.methods.listSong(title, artistName, releaseTime, fractionPrice, totalFraction).send({
        feeLimit: 10000000,
        callValue: 0,
        shouldPollResponse: true,
      });

      console.log('Transaction result:', result);

    } catch (error) {
      console.error('Error listing song:', error);
      setError('Failed to list song');
    }
  };

  return (
    <div>
      <h1>Current Block Timestamp</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {timestamp !== null && !loading && !error && <p>Block Timestamp: {timestamp}</p>}
      <div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Song Title"
        />
        <p>Title: {title}</p>

        <input
          type="text"
          value={artistName}
          onChange={(e) => setArtistName(e.target.value)}
          placeholder="Artist Name"
        />
        <p>Artist: {artistName}</p>

        <input
          type="text"
          value={releaseTime.toString()}
          onChange={(e) => setReleaseTime(BigInt(e.target.value))}
          placeholder="Release Time (BigInt)"
        />
        <p>Release: {releaseTime.toString()}</p>

        <input
          type="text"
          value={fractionPrice.toString()}
          onChange={(e) => setFractionPrice(BigInt(e.target.value))}
          placeholder="Fraction Price (BigInt)"
        />
        <p>Fraction Price: {fractionPrice.toString()}</p>

        <input
          type="text"
          value={totalFraction.toString()}
          onChange={(e) => setTotalFraction(BigInt(e.target.value))}
          placeholder="Total Fraction (BigInt)"
        />
        <p>Total Fraction: {totalFraction.toString()}</p>

        <button onClick={ListSong}>List</button>
      </div>
    </div>
  );
};

export default BlockTimestamp;