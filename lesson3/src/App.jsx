
// import Card from './Card.jsx';

// function App() {
//   return (
//     <div className="app">
//       <h1>Hello mọi người!</h1>
//       <Card />
//       <Card />
//       <Card />
//     </div>
//   )
// }

// export default App;
import Header from "./Header.jsx";
import Sidebar from "./Sidebar.jsx";
import Content from "./Content.jsx";
import Footer from "./Footer.jsx";
import './Header.css'
function App() {
  return (
    <div >
      <Header />
      <div className="flex">
        <Sidebar />
        <Content />
      </div>
      <Footer />

    </div>
  )
}
export default App
