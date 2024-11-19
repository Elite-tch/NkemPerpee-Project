import React from 'react'
import './navbar.css'
import { Link } from 'react-scroll';

export const NavBar = () => {
  return (
    <div className=''>
    <nav className='navbar'>
        <ul>
            
        <Link to="home" smooth={true} duration={500} className="block active py-2 lg:px-6 px-4 text-white">
        Home
      </Link>
      
      <Link to="about" smooth={true} duration={500} className="block py-2 lg:px-6 px-4 text-white">
        About
      </Link>
      <Link to="services" smooth={true} duration={500} className="block py-2 lg:px-6 px-4 text-white">
        Services
      </Link>
      <Link to="home" smooth={true} duration={500} className="flex gap-2 items-center text-xl px-4 py-2 lg:px-6 text-white">
      <img src='default.png' alt="" className="logo w-52 " />
      </Link>
      <Link href='https://docs.google.com/document/d/1ng4NE9qrONz4v5X0huj1kz0GgYOnmR5L/edit?usp=drivesdk&ouid=108957530268249417132&rtpof=true&sd=true' smooth={true} duration={500} className="block py-2 lg:px-6 px-4 text-white">
        Resume
      </Link>
      <Link to="project" smooth={true} duration={500} className="block py-2 lg:px-6 px-4 text-white">
        Project
      </Link>
      <Link to="contact" smooth={true} duration={500} className="block py-2 lg:px-6 px-4 text-white">
        Contact
      </Link>
        </ul>
    </nav>
    </div>
  )
}
