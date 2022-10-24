import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Profile from './Pages/Profile'
import Projects from './Pages/Projects'
import Random from './Pages/Random'
import Error from './Pages/Error'
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route element={<Random/>} path='/'/>
      <Route element={<About/>} path='/about'/>
      <Route element={<Projects/>} path='/projects'/>
      <Route element={<Contact/>} path='/contact'/>
      <Route element={<Profile/>} path='/profile'/>
      <Route element={<Error/>} path='*'/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
