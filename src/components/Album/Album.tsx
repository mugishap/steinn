import React from 'react'
import { Link } from 'react-router-dom'

interface Props {
    album: any
}

const Album: React.FC<Props> = ({ album }) => {
    return (
        <Link to={`/album/${album.id}`} className='w-32 p-2 flex flex-col rounded'>
            <img src={album.images[0].url} className='w-full h-24 rounded object-cover' alt="" />
            <span className='truncate font-bold my-3 text-[17px]'>{album.name}</span>
        </Link>
    )
}

export default Album