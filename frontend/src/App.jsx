import { useState } from 'react'
import { Routes, Route } from 'react-router'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import Footer from './components/Footer'
import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'
import BlogPage from './pages/BlogPage'
//use /auth/me for persistent logging 
function App() {

  return (
    <div className='min-h-screen flex flex-col'>
      <Navbar />
      <main className='grow'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/blogs' element={<BlogPage />} />
        </Routes>
      </main>
        <Footer />
    </div>
  )
}

export default App
