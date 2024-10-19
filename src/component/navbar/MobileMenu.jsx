import { useState } from "react";
import './Mobilemenu.css'
import Logo from '../../assets/Frame 334.png'

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-600 p-4 fixed top-0 left-0 w-full z-50 mobile-menu">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white font-bold text-xl"><img src={Logo} alt="" className="logo" /></div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
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
        <a href="#" className="block py-2 px-4 text-white">
          Home
        </a>
        <a href="#" className="block py-2 px-4 text-white">
          About
        </a>
        <a href="#" className="block py-2 px-4 text-white">
          CareerGirl
        </a>
        <a href="#" className="block py-2 px-4 text-white">
          Resume
        </a>
        <a href="#" className="block py-2 px-4 text-white">
          Project
        </a>
        <a href="#" className="block py-2 px-4 text-white">
          Contact
        </a>
        </div>
      </div>

      {/* Mobile Menu with Transition */}
      <div
        className={`${
          isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden transition-all duration-300 ease-in-out md:hidden`}
      >
        <a href="#" className="block py-2 px-4 text-white">
          Home
        </a>
        <a href="#" className="block py-2 px-4 text-white">
          About
        </a>
        <a href="#" className="block py-2 px-4 text-white">
          CareerGirl
        </a>
        <a href="#" className="block py-2 px-4 text-white">
          Resume
        </a>
        <a href="#" className="block py-2 px-4 text-white">
          Project
        </a>
        <a href="#" className="block py-2 px-4 text-white">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default MobileMenu;
