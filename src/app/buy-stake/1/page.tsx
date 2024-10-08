import React from 'react'
import Image from 'next/image'
import nft1 from '../../../../public/assets/nft.webp';
import { CgDetailsMore } from "react-icons/cg";

const page = () => {
    return (
        <div className='w-full min-h-screen flex justify-start items-start bg-black'>
            <div className='w-[25%] flex flex-col items-start justify-start ml-16 mt-8'>
                <div className='w-full bg-zinc-900 rounded-lg'>
                    <div className='w-full h-8 bg-zinc-800 rounded-t-lg'>

                    </div>

                    <div className='w-full'><img src="https://ipfs.io/ipfs/QmTcDBA3mKDLbQ2vsFmUJNhT3hH7vkLdNCV9tqAzs2uH6s/nft.png" alt='something' width={900} height={700} /></div>
                </div>
                <div className='w-full bg-zinc-900 rounded-lg px-4 mt-8 pt-4'>
                    <div className='flex justify-start gap-4 items-center '>< CgDetailsMore className='text-white w-6 h-6' />
                        <p className='text-white text-xl font-semibold'>Description</p>
                    </div>
                    <div className='h-[1px] w-full bg-zinc-600 my-6'></div>
                    <div className='my-6'>
                        <p className='text-white text-lg'><span className='opacity-70 text-md'>By</span> Robin</p>
                        <p className='text-white text-sm pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>

                        <div className='h-[1px] w-full bg-zinc-600 my-6'></div>
                        <p className='text-white text-xl font-semibold'>Details</p>
                        <div className='flex flex-col justify-start items-start mt-4'>
                            <div className='w-full flex justify-between items-center'>
                                <div className='text-white'>Contract Address</div>
                                <div className='text-blue-500 cursor-pointer'>0xabab...81</div>
                            </div>
                            <div className='w-full flex justify-between items-center'>
                                <div className='text-white'>Token ID</div>
                                <div className='text-blue-500 cursor-pointer'>5428</div>
                            </div>
                            <div className='w-full flex justify-between items-center'>
                                <div className='text-white'>Chain</div>
                                <div className='text-white'>Sepholia</div>
                            </div>
                            <div className='w-full flex justify-between items-center'>
                                <div className='text-white'>Uploaded</div>
                                <div className='text-white'>5 April 2024</div>
                            </div>
                            <div className='w-full flex justify-between items-center'>
                                <div className='text-white'>Remaining Token</div>
                                <div className='text-white'>10</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[65%] flex flex-col items-start justify-star mx-12 mt-8'>
                <h1 className='text-blue-400 text-2xl'>NFT</h1>
                <h1 className='text-white text-4xl font-semibold mt-4'>PRNS#5428</h1>
                <h1 className='text-white'>Owned by <span className='text-blue-400 mt-2'>Robin</span></h1>
                <div className='w-full text-white'>Like</div>
                <div className='w-full bg-zinc-900 rounded-lg mt-12 flex flex-col justify-start items-start py-4 px-4'>
                    <p className='text-white text-lg font-medium'>Sale ends on 7 April 2024 9:00 AM</p>
                    <div className='w-full h-[1px] bg-zinc-600 mt-6'></div>
                    <p className='text-white opacity-75 mt-4'>Price / Token</p>
                    <div className='text-white text-3xl font-semibold mt-2'>0.328TRX / Token</div>

                    <div className='w-full flex justify-around items-center py-4 bg-blue-500 mt-4 rounded-xl'>
                        <button type='button' className=''>Buy Now</button>
                    </div>
                </div>

                <div className='w-full bg-zinc-900 rounded-lg mt-12 flex flex-col justify-start items-start py-4 px-4'>
                    <p className='text-white text-lg font-medium'>Participating Accounts</p>
                    <div className='w-full h-[1px] bg-zinc-600 mt-6'></div>
                    <div className='w-full flex justify-between px-20'>
                        <div>Address: </div>
                        <div>No of tokens: </div>
                    </div>
                    <div className='w-full flex justify-between px-20'>
                        <div>Address: </div>
                        <div>No of tokens: </div>
                    </div>
                    <div className='w-full flex justify-between px-20'>
                        <div>Address: </div>
                        <div>No of tokens: </div>
                    </div>
                    <div className='w-full flex justify-between px-20'>
                        <div>Address: </div>
                        <div>No of tokens: </div>
                    </div>
                    <div className='w-full flex justify-between px-20'>
                        <div>Address: </div>
                        <div>No of tokens: </div>
                    </div>
                    <div className='w-full flex justify-between px-20'>
                        <div>Address: </div>
                        <div>No of tokens: </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default page