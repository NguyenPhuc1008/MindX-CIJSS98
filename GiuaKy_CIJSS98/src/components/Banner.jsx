import React from 'react'
export default function Banner({ anime }) {
    return (
        <div className='banner right-banner' style={{ backgroundImage: `url(${anime.image})` }}>
            <div className="banner-content">
                <h2 className='banner-title'>{anime.movieName}</h2>
                <p className='banner-description'>{anime.description}</p>
            </div>

        </div>
    )
}
