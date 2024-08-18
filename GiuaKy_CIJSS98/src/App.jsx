import { useState } from 'react'
import './style/index.css'
import Header from './components/Header.jsx'
import Banner from './components/Banner.jsx'
import NewRelease from './components/NewRelease.jsx'
import dataAnime from './data/data.json'


function App() {
  const [selectedAnime, setSelectAnime] = useState(dataAnime[0])

  return (
    <div className='container'>
      <Header></Header>
      <div className="title">
        <h2>Explore</h2>
        <p>What are yoy gonna watch today ?</p>
      </div>
      <Banner anime={selectedAnime}></Banner>
      <NewRelease animes={dataAnime} onSelect={setSelectAnime}></NewRelease>
    </div>
  )
}


export default App
