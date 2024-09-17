import React from 'react'
import dataMovie from '../data/data.json'
import MovieCard from './MovieCard'



const Trending = () => {
    // const [movies, setMovies] = useState(dataMovie[0]);

    return (
        <div>
            <h3 className='border-b border-primary mt-12 mb-6 pb-4'>
                Trending
            </h3>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-8 mb-12'>
                {
                    dataMovie.map((movie, index) => (<MovieCard key={index} movie={movie} />))
                }
            </div>
            <div className='flex justify-center'>
                <button className='btn hover:scale-125 transition ease-out duration-500'>load more</button>
            </div>


        </div>
    )
}

export default Trending
