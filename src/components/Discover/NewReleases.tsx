import React, { useContext, useEffect, useState } from 'react'
import Song from '../Album/Album'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y } from 'swiper';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import { CommonContext } from '../../context';
import Album from '../Album/Album';
import { IAlbum } from '../../types';

const NewReleases = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const { newReleases } = useContext(CommonContext)

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  console.log(newReleases);

  return (
    <div className='w-full flex flex-col'>
      <div className='w-full flex items-center justify-between'>
        <span className='font-bold text-slate-500 text-lg'>Released this week</span>
        <hr className='border border-slate-400 sm:flex hidden sm:w-4/12 md:w-6/12 lg:w-8/12' />
        <div className='flex'>
          <RiArrowLeftSLine className='text-slate-400 mx-2 p-2 rounded-full hover:bg-slate-200 cursor-pointer' title='Scroll Left' onClick={() => { }} size={36} />
          <RiArrowRightSLine className='text-slate-400 mx-2 p-2 rounded-full hover:bg-slate-200 cursor-pointer' title='Scroll Right' onClick={() => { }} size={36} />
        </div>
      </div>
      <Swiper
        slidesPerView={Math.floor(screenWidth / 160)}
        modules={[Navigation, Pagination, A11y]}
        className="w-full"
      >
        {
          newReleases.albums.items.map((album:IAlbum  , index: number) => {
            return (
              <SwiperSlide key={index} className="w-fit">
                <Album album={album} />
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </div>
  )
}

export default NewReleases