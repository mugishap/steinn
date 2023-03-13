import React from 'react'

const NotFound = () => {
    return (
        <div className='font-bold text-xl w-full h-full flex items-center justify-center'>
            <div className='flex flex-col'>
                <span>
                    404 | Page Not Found
                </span>
                <button className='px-2 py-1 bg-spotify-purple text-white cursor-pointer rounded mt-5' onClick={() => window.history.back()}>Go Back</button>
            </div>
        </div>
    )
}

export default NotFound