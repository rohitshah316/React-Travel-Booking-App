import React, { useState } from 'react'
import { NavLink,Link } from 'react-router-dom'
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {

    const [menuOpen,setMenuOpen]=useState(false);
  return (
    <nav className='h-3xl p-6 max-w-5xl mx-auto'>
        <div className='flex justify-between items-center'>
            <h1 className='md:text-3xl text-xl font-bold '><Link to='/'>React Travel Booking App</Link></h1>

        <ul className='hidden md:flex gap-3 font-medium text-gray-300'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/destinations'>Destinations</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
        </ul>


        <button className='md:hidden text-3xl' onClick={()=>setMenuOpen(!menuOpen)}>
            {menuOpen?<HiX/>:<HiMenu/>}
        </button>
        </div>

        
        {menuOpen && (
<ul className='flex flex-col gap-5 mt-5 font-medium  p-3 text-gray-600'>
            <NavLink onClick={()=>setMenuOpen(false)} to='/'>Home</NavLink>
            <NavLink onClick={()=>setMenuOpen(false)} to='/destinations'>Destinations</NavLink>
            <NavLink onClick={()=>setMenuOpen(false)} to='/about'>About</NavLink>
            <NavLink onClick={()=>setMenuOpen(false)} to='/contact'>Contact</NavLink>
        </ul>
        )}
        
    </nav>
  )
}

export default Navbar