import React, { useContext, useEffect, useState } from 'react'
import Song from '../Card/Card'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y } from 'swiper';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import { CommonContext } from '../../context';
import Album from '../Card/Card';
import { IAlbum } from '../../types';
import Card from '../Card/Card';

const Categories = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const { categories } = useContext(CommonContext)

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='w-full flex flex-col'>
      <div className='w-full flex items-center justify-between'>
        <span className='font-bold text-slate-500 text-lg'>Featured Playlists</span>
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
          categories.categories.items.map((album: IAlbum, index: number) => {
            return (
              <SwiperSlide key={index} className="w-fit">
                <Card type='category' item={album} />
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </div>
  )
}

export default Categories