import React, {  useState } from 'react'
import Navbar from "./components/Navbar"
import {Route,Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Cars from './pages/Cars'
import CarDetails from './pages/CarDetails'
import MyBooking from './pages/MyBooking'
import Footer from './components/Footer'

function App() {
const [showLogin, setshowLogin] = useState(false);
const isOwnerPath= useLocation().pathname.startsWith('/owner');
  return (
    <>
    {!isOwnerPath && <Navbar setshowLogin={setshowLogin} />}

    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/carDetails/:id' element={<CarDetails/>} />
      <Route path='/cars' element={<Cars/>} />
      <Route path='/my-bookings' element={<MyBooking/>} />
    </Routes>
    

    {!isOwnerPath && <Footer/>}
    </>
  )
}

export default App
