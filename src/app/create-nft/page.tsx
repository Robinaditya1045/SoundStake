"use client";

import React, { useState, useRef, useEffect } from 'react';
// import { CgSoftwareUpload } from "react-icons/cg";
import Link from 'next/link'

const Page = () => {

  const inputFile = useRef(null);
  const [cid, setCid] = useState("");
  const [uploading, setUploading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    supply: '1',
    description: '',
    externalLink: '',
    image: ''
  });

  return (
    <div className='w-full h-screen bg-black flex justify-start items-center'>
      <div className='w-1/2 h-3/4 flex flex-col items-center justify-center mx-20'>
        <div className='justify-start'>
          <h1 className='text-white text-4xl font-semibold'>Create an NFT</h1>
          <p className='text-white py-4 text-lg font-medium'>Once your item is minted, you will not be able to change any of its information.</p>
        </div>
        <div className='w-[70%] h-[80%] outline-dashed outline-2 outline-offset-2 outline-slate-700 rounded-lg my-8 flex flex-col justify-center items-center hover:bg-zinc-900'>
          {/* <CgSoftwareUpload className='text-white w-12 h-12' /> */}
          <p className='text-white font-medium text-lg pt-4'>Drag and drop media</p>
          <input type="file" id="file" ref={inputFile} className='bg-transparent text-blue-500' />
          <p className='text-white text-sm opacity-70 pt-2'>Max size: 50MB</p>
          <p className='text-white text-sm opacity-70'>JPG, PNG, GIF, SVG, MP4</p>
        </div>
      </div>

      <div className='w-1/2 h-max flex flex-col justify-center items-start'>
        <p className='text-white text-lg font-semibold px-2'>Collection *</p>
        <div className='w-[70%] h-24 px-2 py-2 bg-zinc-900 rounded-xl my-2 hover:bg-zinc-800'></div>
        <button disabled={uploading} >
          {uploading ? "Uploading..." : "Upload"}
        </button>
        <div>
          {/* <p className='text-white'>The CID of the uploaded file is: {cid}</p> */}
        </div>
        <form >
          <p className='text-white text-sm opacity-60 px-2'>Not all collections are eligible. <span className='text-blue-500'>Learn more</span></p>
          <p className='text-white text-lg font-semibold px-2 pt-12 pb-4'>Name *</p>
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Name your NFT"
            required
            className="block w-[70%] rounded-lg border-[2px] border-zinc-700 bg-transparent py-[7px] font-satoshi pl-5 text-lg shadow-lg font-medium text-white peer mt-4"
          />
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Price per Token"
            required
            className="block w-[70%] rounded-lg border-[2px] border-zinc-700 bg-transparent py-[7px] font-satoshi pl-5 text-lg shadow-lg font-medium text-white peer mt-4"
          />
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="% Share"
            required
            className="block w-[70%] rounded-lg border-[2px] border-zinc-700 bg-transparent py-[7px] font-satoshi pl-5 text-lg shadow-lg font-medium text-white peer mt-4"
          />
          {/* <p className='text-white text-lg font-semibold px-2 pt-8 pb-4'>Supply *</p>
          <input
            type="text"
            name="supply"
            value={formData.supply}
            placeholder="1"
            required
            className="search_input_trans_create peer"
            onChange={handleChange}
          /> */}
          <p className='text-white text-lg font-semibold px-2 pt-8 pb-4'>Description</p>
          <textarea
            type="text"
            name="description"
            value={formData.description}
            placeholder="Search..."
            required
            className="block w-[70%] rounded-lg border-[2px] border-zinc-700 bg-transparent py-[7px] font-satoshi pl-5 text-lg shadow-lg font-medium text-white peer"
          />
          <p className='text-white text-lg font-semibold px-2 pt-8 pb-4'>Token To Release</p>
          <input
            type="text"
            name="externalLink"
            value={formData.externalLink}
            placeholder="No. of Tokens"
            required
            className="block w-[70%] rounded-lg border-[2px] border-zinc-700 bg-transparent py-[7px] font-satoshi pl-5 text-lg shadow-lg font-medium text-white peer"
          />
          <div className='w-[70%] flex justify-end items-center py-12 '>
            <button className='bg-blue-600 px-8 py-4 rounded-2xl' type="submit">Create</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;