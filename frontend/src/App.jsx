import { useState } from 'react'
import { Routes, Route } from 'react-router'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar />
      <HomePage/>
      <Footer />
      </>
  )
}

export default App
