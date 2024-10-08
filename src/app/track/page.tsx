'use client';

import { useState, useRef } from 'react';
import { FaPause, FaPlay, FaForward, FaBackward } from 'react-icons/fa';

export default function MusicPlayer() {
  const track = {
    image: "https://ipfs.io/ipfs/QmTcDBA3mKDLbQ2vsFmUJNhT3hH7vkLdNCV9tqAzs2uH6s/nft.png",
    title: "SunShine",
    artist: "Vishal",
    audio: "https://emerald-managerial-firefly-535.mypinata.cloud/ipfs/QmSD5hhfn6aAo94pYc7xKLKKoHtFWCVdnWiWLJi9WzwxVG",
  };
  
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlayPause = () => {
    if (!isPlaying) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      setDuration(audioRef.current.duration);
    }
  };

  const handleSkipForward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime += 10; // Skip 10 seconds forward
    }
  };

  const handleSkipBackward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime -= 10; // Skip 10 seconds backward
    }
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-8'>
      <div className='w-64 h-64 bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 rounded-full border-[8px] border-black flex justify-center items-center'>
        <img src={track.image} alt="Track" className='w-60 h-60 rounded-full object-cover' />
      </div>

      <div className='text-center pt-6'>
        <h1 className='text-white text-4xl font-bold'>{track.title}</h1>
        {/* <p className='text-white opacity-70 text-lg pt-2'>{track.artist}</p> */}
      </div>

      <div className='flex items-center gap-6 pt-8'>
        <FaBackward className='text-white w-10 h-10 cursor-pointer' onClick={handleSkipBackward} />
        {isPlaying ? (
          <FaPause className='text-white w-10 h-10 cursor-pointer' onClick={togglePlayPause} />
        ) : (
          <FaPlay className='text-white w-10 h-10 cursor-pointer' onClick={togglePlayPause} />
        )}
        <FaForward className='text-white w-10 h-10 cursor-pointer' onClick={handleSkipForward} />
      </div>

      <div className='w-[80%] flex justify-center items-center pt-6'>
        <audio ref={audioRef} src={track.audio} onTimeUpdate={handleTimeUpdate} />
        <div className='w-full h-[4px] bg-gray-700 relative'>
          <div className='h-[4px] bg-blue-600' style={{ width: `${(currentTime / duration) * 100}%` }} />
        </div>
      </div>

      <div className='text-white text-sm opacity-70 pt-2'>
        {Math.floor(currentTime)} / {Math.floor(duration)} seconds
      </div>
    </div>
  );
}
