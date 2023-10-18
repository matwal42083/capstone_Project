
import Header from './components/header'
import { Routes, Route } from 'react-router-dom'
import Homepage from './router/homepage'
import Menupage from './router/menupage'
import Orderpage from './router/orderpage'
import Trackpage from './router/trackpage'
import Footer from './components/footer'


import './App.css'

function App() {

  return (
    <>

     <Header />
       <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/Menupage" element={<Menupage />}/>
        <Route path="/Orderpage" element={<Orderpage />}/>
        <Route path="Trackpage" element={<Trackpage />}/>
       </Routes> 
     <Footer />
    </>
  )
}

export default App
