import Header from "./components/layout/Header"
import { Routes, Route } from 'react-router-dom';
import One from './pages/One'
import Two from './pages/Two'
import Three from './pages/Three'
import Four from './pages/Four'


function App() {

  return (
    <>

      <Header></Header>
      <Routes>
        <Route path="/one" element={<One />}></Route>
        <Route path="/two" element={<Two />}></Route>
        <Route path="/three" element={<Three />}></Route>
        <Route path="/four" element={<Four />}></Route>
      </Routes>



    </>
  )
}

export default App
