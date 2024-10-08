"use client"

import React from 'react'
import Image from 'next/image'
// import nft1 from '../../public/assets/nft.webp'
import { BiBuoy } from "react-icons/bi";
import Link from 'next/link'
// import banner from 'https://ipfs.io/ipfs/QmYDYUEyCUZ17jsSzPxE6Ui1RP68STDrbdQrctFdtbArtH/nft.jpg';


const Home = () => {

  // connectToDB();
  return (
    <div className='w-full h-fit bg-black flex flex-col '>
      <div className='flex justify-start items-center gap-6 ml-24 pt-6 text-white'>
        <div className='w-fit hover:bg-slate-800 rounded-lg px-4 py-2'><p className='logo_text'>All</p></div>
        <div className='w-fit hover:bg-slate-800 rounded-lg px-4 py-2'><p className='logo_text'>Music</p></div>
      </div>
      <div className='h-[30rem] rounded-2xl mx-12 my-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
      </div>

      <div className='flex justify-between items-center mx-24 my-4'>
        <div className='flex gap-4'>
          <div className='px-4 py-2 w-fit border-[2px] border-zinc-700 hover:border-zinc-500 text-white rounded-xl flex items-center gap-2 text-lg'>Trending</div>
          <div className='px-4 py-2 w-fit border-[2px] border-zinc-700 hover:border-zinc-500 text-white rounded-xl flex items-center gap-2 text-lg'>Top</div>
        </div>
      </div>
      <div className='text-white my-6 mx-24 text-3xl font-medium'>Trending NFT's</div>
      <div className='flex justify-start items-center mx-24 my-4 gap-12'>
        <div className='flex flex-wrap justify-start items-start mx-12 my-8 gap-8'>
          <div className='w-60 h-72 bg-white rounded-lg'>
            <Image
              src="https://ipfs.io/ipfs/QmV9waZphaSP15DnMVUsUCiyzMw16FpVHhTZX1sD8eNU6B/nft.png"
              alt='img'
              width={240}
              height={240}
              className='rounded-t-lg'
            />
            <div className='w-full h-16 bg-zinc-800 rounded-b-lg flex justify-between items-center p-2'>
              <div className='text-white'>Price: 100</div>
              <Link href='/buy-stake/1'>
                <button className='bg-blue-600 rounded-lg px-3 py-1 text-white'>Buy now</button>
              </Link>
            </div>
          </div>

          <div className='w-60 h-72 bg-white rounded-lg'>
            <Image
              src="https://ipfs.io/ipfs/QmXq6S3UgHuyWA26LYc2jr5JYLPKRvHB94e3ugw9AqZuQs/nft.jpg"
              alt='img'
              width={240}
              height={240}
              className='rounded-t-lg'
            />
            <div className='w-full h-16 bg-zinc-800 rounded-b-lg flex justify-between items-center p-2'>
              <div className='text-white'>Price: 100</div>
              <Link href='/buy-stake/2'>
                <button className='bg-blue-600 rounded-lg px-3 py-1 text-white'>Buy now</button>
              </Link>
            </div>
            {/* <div className='w-full h-16 bg-zinc-800 rounded-b-lg'></div> */}
          </div>

          <div className='w-60 h-72 bg-white rounded-lg'>
            <Image
              src="https://ipfs.io/ipfs/QmPsgF6q5nPzgUbyqyViJL62ytbv5CErBwNAqDTmrfcodC/nft.jpg"
              alt='img'
              width={240}
              height={240}
              className='rounded-t-lg'
            />
            <div className='w-full h-16 bg-zinc-800 rounded-b-lg flex justify-between items-center p-2'>
              <div className='text-white'>Price: 100</div>
              <Link href='/buy-stake'>
                <button className='bg-blue-600 rounded-lg px-3 py-1 text-white'>Buy now</button>
              </Link>
            </div>
            {/* <div className='w-full h-16 bg-zinc-800 rounded-b-lg'></div> */}
          </div>

          <div className='w-60 h-72 bg-white rounded-lg'>
            <Image
              src="https://ipfs.io/ipfs/QmTcDBA3mKDLbQ2vsFmUJNhT3hH7vkLdNCV9tqAzs2uH6s/nft.png"
              alt='img'
              width={240}
              height={240}
              className='rounded-t-lg'
            />
            <div className='w-full h-16 bg-zinc-800 rounded-b-lg flex justify-between items-center p-2'>
              <div className='text-white'>Price: 100</div>
              <Link href='/buy-stake/2'>
                <button className='bg-blue-600 rounded-lg px-3 py-1 text-white'>Buy now</button>
              </Link>
            </div>
            {/* <div className='w-full h-16 bg-zinc-800 rounded-b-lg'></div> */}
          </div>

        </div>
      </div>
      {/* <div className='flex justify-start items-center mx-24 my-4 gap-12'>
        <div className='flex flex-wrap justify-start items-start mx-12 my-8 gap-8'>
          <div className='w-60 h-72 bg-white rounded-lg'>
            <Image
              src="https://ipfs.io/ipfs/QmV9waZphaSP15DnMVUsUCiyzMw16FpVHhTZX1sD8eNU6B/nft.png"
              alt='img'
              width={240}
              height={240}
              className='rounded-t-lg'
            />
            <div className='w-full h-16 bg-zinc-800 rounded-b-lg flex justify-between items-center p-2'>
              <div className='text-white'>Price: 100</div>
              <Link href='/buy-stake'>
                <button className='bg-blue-600 rounded-lg px-3 py-1 text-white'>Buy now</button>
              </Link>
            </div>
          </div>

          <div className='w-60 h-72 bg-white rounded-lg'>
            <Image
              src="https://ipfs.io/ipfs/QmXq6S3UgHuyWA26LYc2jr5JYLPKRvHB94e3ugw9AqZuQs/nft.jpg"
              alt='img'
              width={240}
              height={240}
              className='rounded-t-lg'
            />
            <div className='w-full h-16 bg-zinc-800 rounded-b-lg flex justify-between items-center p-2'>
              <div className='text-white'>Price: 100</div>
              <Link href='/buy-stake'>
                <button className='bg-blue-600 rounded-lg px-3 py-1 text-white'>Buy now</button>
              </Link>
            </div>
            <div className='w-full h-16 bg-zinc-800 rounded-b-lg'></div>
          </div>


          <div className='w-60 h-72 bg-white rounded-lg'>
            <Image
              src="https://ipfs.io/ipfs/QmPsgF6q5nPzgUbyqyViJL62ytbv5CErBwNAqDTmrfcodC/nft.jpg"
              alt='img'
              width={240}
              height={240}
              className='rounded-t-lg'
            />
            <div className='w-full h-16 bg-zinc-800 rounded-b-lg flex justify-between items-center p-2'>
              <div className='text-white'>Price: 100</div>
              <Link href='/buy-stake'>
                <button className='bg-blue-600 rounded-lg px-3 py-1 text-white'>Buy now</button>
              </Link>
            </div>
            <div className='w-full h-16 bg-zinc-800 rounded-b-lg'></div>
          </div>

          <div className='w-60 h-72 bg-white rounded-lg'>
            <Image
              src="https://ipfs.io/ipfs/QmTcDBA3mKDLbQ2vsFmUJNhT3hH7vkLdNCV9tqAzs2uH6s/nft.png"
              alt='img'
              width={240}
              height={240}
              className='rounded-t-lg'
            />
            <div className='w-full h-16 bg-zinc-800 rounded-b-lg flex justify-between items-center p-2'>
              <div className='text-white'>Price: 100</div>
              <Link href='/buy-stake'>
                <button className='bg-blue-600 rounded-lg px-3 py-1 text-white'>Buy now</button>
              </Link>
            </div>
            <div className='w-full h-16 bg-zinc-800 rounded-b-lg'></div>
          </div>
        </div>

      </div> */}
    </div>
  )
}

export default Home