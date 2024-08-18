import React from 'react'

export default function Header() {
    return (
        <header className='header'>
            <div className="logo">Anonime</div>
            <a href="#">Home</a>
            <a href="#">List anime</a>
            <input type='text' className='search-bar' placeholder='Search anime or movie'></input>
        </header>
    )
}
