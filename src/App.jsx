import React, {  useState } from 'react'
import Navbar from "./components/Navbar"
import {Route,Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Cars from './pages/Cars'
import CarDetails from './pages/CarDetails'
import MyBooking from './pages/MyBooking'
import Footer from './components/Footer'
import Layout from './pages/owner/Layout'
import Dashboard from './pages/owner/Dashboard'
import AddCar from './pages/owner/AddCar'
import ManageCar from './pages/owner/ManageCar'
import ManageBookings from './pages/owner/ManageBookings'
import Login from './components/Login'

function App() {
const [showLogin, setshowLogin] = useState(false);
const isOwnerPath= useLocation().pathname.startsWith('/owner');
  return (
    <>
    {showLogin && <Login setshowLogin={setshowLogin} />}
    {!isOwnerPath && <Navbar setshowLogin={setshowLogin} />}

    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/carDetails/:id' element={<CarDetails/>} />
      <Route path='/cars' element={<Cars/>} />
      <Route path='/my-bookings' element={<MyBooking/>} />
      <Route path='/owner' element={<Layout/>}>
        <Route index element={<Dashboard/>} />
        <Route path='add-car' element={<AddCar/>} />
        <Route path='manage-cars' element={<ManageCar/>} />
        <Route path='manage-bookings' element={<ManageBookings/>} />

      </Route>
    </Routes>
    

    {!isOwnerPath && <Footer/>}
    </>
  )
}

export default App
