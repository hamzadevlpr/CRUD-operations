import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Components/Login'
import Footer from './Components/Footer'
import Profile from './Components/Profile'

function App() {
  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App