import React, { ReactElement, useEffect, useState } from 'react'
import { IconType } from 'react-icons/lib'
import { RiHeadphoneFill, RiHeart2Fill, RiMenu2Line, RiPlayCircleFill, RiSearchLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const Sidebar = () => {

  const [active, setActive] = useState<'discover' | 'search' | 'favorite' | 'playlists' | 'charts'>("discover")


  const links: {
    icon: IconType,
    name: string,
    label: 'discover' | 'search' | 'favorite' | 'playlists' | 'charts',
    path: string
  }[] = [
      {
        icon: RiHeadphoneFill,
        name: "Discover",
        label: "discover",
        path: "/"
      },
      {
        icon: RiSearchLine,
        name: "Search",
        label: "search",
        path: "/search"
      },
      {
        icon: RiHeart2Fill,
        name: "Favorites",
        label: "favorite",
        path: "/favorites"
      },
      {
        icon: RiPlayCircleFill,
        name: "Playlists",
        label: "playlists",
        path: "/playlists"
      },
      {
        icon: RiMenu2Line,
        name: "Charts",
        label: "charts",
        path: "/charts"
      },
    ]

  return (
    <div className='w-2/12 text-white h-full bg-spotify-purple shadow-lg shadow-slate-600 flex flex-col items-center justify-start pt-12'>
      <div className='flex flex-col w-full items-center justify-center'>
        <img className='object-cover rounded-full w-16 h-16 mlg:w-28 mlg:h-28' src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
        <span className='mlg:flex hidden my-4 text-lg font-bold'>Bob Smith</span>
        <div className='mt-6 flex w-full flex-col'>
          {
            links.map((link, index) => (
              <Link key={index} to={link.path}>
                <div onClick={() => setActive(link.label)} className={`${active === link.label ? "bg-gradient-to-r":""} my-1 cursor-pointer hover:bg-gradient-to-r py-3 w-full flex items-center mlg:justify-start justify-center px-4 from-white/40 via-white/20 to-white/10`}>
                  <link.icon size={28} />
                  <span className='md:flex hidden text-lg ml-2 font-semibold '>{link.name}</span>
                </div>
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Sidebar