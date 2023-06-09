import React, { useState } from 'react'
import { RiMoonFill, RiSunFill } from 'react-icons/ri'
import NewReleases from '../../components/Discover/NewReleases'
import FeaturedPlaylists from '../../components/Discover/FeaturedPlaylists'
import music from "./../../assets/music.svg"
import Categories from '../../components/Discover/Categories'

const Discover = () => {

  return (
    <div className='w-full flex flex-col items-center justify-start h-full overflow-y-scroll'>
      <div className='bg-pink-400/50 h-[25%] w-full flex items-center justify-between px-8'>
        <div className='py-3 md:flex hidden h-full'>
          <img src={music} className="max-h-full" alt="" />
        </div>
        <span className='flex flex-col mr-8 items-end'>
          <span className='text-2xl md:text-4xl font-bold my-4'>Your favorite tunes</span>
          <span className='text-xl flex items-center md:text-3xl'>
            All <RiSunFill className='text-xl md:text-4xl mx-2' color='yellow' /> and all <RiMoonFill className='text-xl md:text-4xl mx-2' />
          </span>
        </span>
      </div>
      <div className='w-full flex flex-col px-4 mt-6'>
        <NewReleases />
        <FeaturedPlaylists />
        <Categories />
      </div>
    </div>
  )
}

export default Discover