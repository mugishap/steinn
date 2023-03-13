import React from 'react'
import { Link } from 'react-router-dom'

interface Props {
    item: any
    type: 'release' | 'playlist' | 'category'
}

const Card: React.FC<Props> = ({ item,type }) => {
    return (
        <Link to={`/${type}/${item.id}`} className='w-32 p-2 flex flex-col rounded'>
            <img src={type==='category'?item.icons[0].url:item.images[0].url} className='w-full h-28 rounded object-cover' alt="" />
            <span className='truncate font-bold my-3 text-[17px]'>{item.name}</span>
        </Link>
    )
}

export default Card