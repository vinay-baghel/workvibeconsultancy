import React, { useState } from 'react'
import logoo from "../assets/logoo.png"
import Home from '../components/Home'
import About from '../components/About'
import Clients from '../components/Clients'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import Service from '../components/Service'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className='flex items-center justify-between h-20 px-4 md:px-10 sticky top-0 bg-white shadow-md z-50'>
        <img src={logoo} alt="Logo" className='h-60' />

        {/* Desktop Menu */}
        <ul className='hidden md:flex gap-10 items-center'>
          <a href="#home"><li className='cursor-pointer'>Home</li></a>
          <a href="#about"><li className='cursor-pointer'>About</li></a>
          <a href="#service"><li className='cursor-pointer'>Services</li></a>
          <Link to="/contact">
            <button className='bg-black text-white px-5 py-2 rounded'>Contact</button>
          </Link>
        </ul>

        {/* Hamburger Icon for Mobile */}
        <div className='md:hidden'>
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg className='w-6 h-6' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24'>
              {isOpen ? (
                <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
              ) : (
                <path strokeLinecap='round' strokeLinejoin='round' d='M4 6h16M4 12h16M4 18h16' />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className='md:hidden flex flex-col gap-4 px-6 py-4 bg-white shadow'>
          <a href="#home" onClick={() => setIsOpen(false)}><li>Home</li></a>
          <a href="#about" onClick={() => setIsOpen(false)}><li>About</li></a>
          <a href="#service" onClick={() => setIsOpen(false)}><li>Services</li></a>
          <Link to="/contact" onClick={() => setIsOpen(false)}>
            <button className='bg-black text-white px-5 py-2 rounded w-full text-left'>Contact</button>
          </Link>
        </ul>
      )}

      {/* Page Sections */}
    <Home/>
    <About/>
    <Service/>
      <Clients />
      <Footer />
    </div>
  )
}

export default Navbar