import React from 'react'
import { RiHeart2Fill, RiMore2Line, RiPlayCircleFill, RiPlayFill, RiRepeat2Line, RiShuffleFill, RiShuffleLine, RiSkipBackFill, RiSkipForwardFill, RiSpeaker2Fill, RiSpeaker2Line } from 'react-icons/ri'

const Player = () => {
  return (
    <div className='bg-white w-full h-20 flex items-center rounded-t-xl px-8'>
      <div className='flex w-full items-center'>
        <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" className='object-cover w-12 h-12 rounded hidden sm10:flex' alt="" />
        <span className='mx-4 font-bold text-lg hidden lg:flex'>Nothing is playing</span>
        <div className='flex items-center mx-1 sm10:mx-4'>
          <RiSkipBackFill className='text-slate-300 mx-1' size={24} />
          <RiPlayCircleFill className='text-spotify-purple cursor-pointer hover:grayscale-[0.2] duration-75 mx-1' size={36} />
          <RiSkipForwardFill className='text-slate-300 mx-1' size={24} />
        </div>
        <div className='flex w-9/12 sm:w-7/12 mx-4 ml-6'>
          <input type="range" name="" className='h-fit rounded w-full' />
        </div>
        <div className='hidden mlg:flex text-lg text-slate-400 items-center'>
          <span className='rounded-full p-2 hover:bg-spotify-purple/20 duration-75 mx-1'>
            <RiHeart2Fill className='cursor-pointer' size={20} />
          </span>
          <span className='rounded-full p-2 hover:bg-spotify-purple/20 duration-75 mx-1'>
            <RiShuffleLine className='cursor-pointer' size={20} />
          </span>
          <span className='rounded-full p-2 hover:bg-spotify-purple/20 duration-75 mx-1'>
            <RiRepeat2Line className='cursor-pointer' size={20} />
          </span>
          <span className='rounded-full p-2 hover:bg-spotify-purple/20 duration-75 mx-1'>
            <RiSpeaker2Line className='cursor-pointer' size={20} />
          </span>
        </div>
        <span className='mlg:hidden flex rotate-90 rounded-full p-2 hover:bg-spotify-purple/20 duration-75 mx-1'>
          <RiMore2Line className='cursor-pointer' size={20} />
        </span>
      </div>
    </div>
  )
}

export default Player