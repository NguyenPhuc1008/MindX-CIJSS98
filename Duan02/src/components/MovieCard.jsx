import React from 'react'
import { BiTime } from 'react-icons/bi'

const MovieCard = ({ movie }) => {
    const { src, title, main, runtime } = movie

    return (
        <div className='bg-primary rounded-md shadow-md shadow-primary 
        relative overflow-hidden hover:shadow-lg hover:shadow-primary'>
            <img src={src} alt="" className='w-full' />
            <div className='p-4 text-white'>
                <h4>{title}</h4>
                <p>{main}</p>
            </div>
            <div className='flex justify-between items-center bg-cyan-50 rounded-md 
            absolute top-2 left-2 p-2 min-w-[25%]'>
                <BiTime></BiTime>
                <p>{runtime}</p>

            </div>


        </div>
    )
}

export default MovieCard
