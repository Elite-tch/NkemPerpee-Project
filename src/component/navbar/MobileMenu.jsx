import { useState } from "react";
import './Mobilemenu.css'
import { Link } from 'react-scroll';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeNavBar = () => {
    setIsOpen(false);
  }

  return (
    <nav className="bg-gray-950 px-6 py-4 fixed top-0 left-0 w-screen rounded z-50 mobile-menu">
      <div className="container mx-auto flex justify-between  items-center">
        {/* Logo */}
        <div className="text-white flex gap-2 font-bold text-2xl"><img src='default.png' alt="" className="logo w-52" />
        
         </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white  focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Links for Desktop */}
        <div className="hidden md:flex space-x-6">
        
        <Link to="home" smooth={true} duration={500} className="block py-2 px-4 text-white">
        Home
      </Link>
      <Link to="about" smooth={true} duration={500} className="block py-2 px-4 text-white">
        About
      </Link>
      <Link to="services" smooth={true} duration={500} className="block py-2 px-4 text-white">
        Services
      </Link>
      <Link to="home" smooth={true} duration={500} className="block py-2 px-4 text-white">
        CareerGirl
      </Link>
      <Link href="https://docs.google.com/document/d/1ng4NE9qrONz4v5X0huj1kz0GgYOnmR5L/edit?usp=drivesdk&ouid=108957530268249417132&rtpof=true&sd=true" smooth={true} duration={500} className="block py-2 px-4 text-white">
        Resume
      </Link>
      <Link to="project" smooth={true} duration={500} className="block py-2 px-4 text-white">
        Project
      </Link>
      <Link to="contact" smooth={true} duration={500} className="block py-2 px-4 text-white">
        Contact
      </Link>
        </div>
      </div>

      {/* Mobile Menu with Transition */}
      <div
        className={`${
          isOpen ? " opacity-100 flex flex-col" : "max-h-0 opacity-0"
        } overflow-hidden transition-all duration-300 ease-in-out md:hidden`}
      >
                <Link  onClick={closeNavBar} to="home" smooth={true} duration={500} className="blocks active2 mt-8 mb-3 py-2 px-6 text-white w-fit">
        Home
      </Link>
      <Link   onClick={closeNavBar} to="about" smooth={true} duration={500} className="blocks py-2 px-6 text-white w-fit">
        About
      </Link>
      <Link onClick={closeNavBar} to="services" smooth={true} duration={500} className="blocks py-2 px-6 text-white w-fit">
        Services
      </Link>
      <Link onClick={closeNavBar} href="https://docs.google.com/document/d/1ng4NE9qrONz4v5X0huj1kz0GgYOnmR5L/edit?usp=drivesdk&ouid=108957530268249417132&rtpof=true&sd=true"  smooth={true} duration={500} className="blocks py-2 px-6 text-white w-fit">
        Resume
      </Link>
      <Link onClick={closeNavBar} to="project" smooth={true} duration={500} className="blocks py-2 px-6 text-white w-fit">
        Project
      </Link>
      <Link  onClick={closeNavBar}  to="contact" smooth={true} duration={500} className="blocks py-2 px-6 text-white w-fit">
        Contact
      </Link>
      </div>
    </nav>
  );
};

export default MobileMenu;
