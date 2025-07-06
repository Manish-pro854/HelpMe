import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  return (
    <div className='fixed flex items-center justify-between md:grid grid-cols-[20%_80%] bg-red-500 px-4 md:px-10 h-15 w-full text-xl z-1'>
      <div className="logo flex items-center justify-start">
        <h1>Help me!</h1>
      </div>
        <div className="links-user hidden md:flex items-center justify-end gap-10">
          <ul className='flex items-center justify-center gap-10'>
            <li>Find Work</li>
            <li>Post a Job</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
          <FaUserCircle className='text-3xl'/>
        </div>
        <div className="mobile-section md:hidden">
          <RxHamburgerMenu className='text-2xl'/>
        </div>
      </div>
      
  )
}

export default Navbar
