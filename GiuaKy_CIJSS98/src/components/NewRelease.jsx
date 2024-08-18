import React from 'react'

export default function NewRelease({ animes, onSelect }) {
    const filteredMovies = animes.filter(e => e.id !== "1")
    return (
        <div className='new-release'>
            <h2>New Release</h2>
            <div className="release-grid">
                {filteredMovies.map((anime) => (
                    <div className='release-item bottom-img' key={anime.id} onClick={() => onSelect(anime)}>
                        <img src={anime.image} alt={anime.movieName} />
                        <div className="release-info">
                            <h3>{anime.movieName}</h3>
                            <p>Episode {anime.episode}</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}
