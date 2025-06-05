import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react'
import Navbar from './pages/Navbar'
import Contact from './pages/Contact'
import AOS from 'aos';
import 'aos/dist/aos.css';




const App = () => {
  useEffect(() => {
  AOS.init({
    duration: 800, // animation duration
    once: false, 
    offset:120,  // false => animation chale har baar jab visible ho
  });
}, []);
  return (
    <div className='bg-all max-w-screen-xl'>
  <Routes>
      <Route path="/" element={<Navbar/>}></Route>
    </Routes>
    <Routes>
      <Route path="/contact" element={<Contact/>}></Route>
    </Routes>

  
   
  {/* <Home/> */}
{/* <About/>
<Clients/>
<Footer/> */}
    </div>
  )
}

export default App
