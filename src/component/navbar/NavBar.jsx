import React from 'react'
import './navbar.css'
import Logo from '../../assets/Frame 334.png'

export const NavBar = () => {
  return (
    <nav className='navbar'>
        <ul>
            
            <li className='active'>Home</li>
            <li>About</li>
            <li>Service</li>
            <li><img src={Logo} alt="" className='logo' /> CareerGirl</li>
            <li>Resume</li>
            <li>Project</li>
            <li>Contact</li>
        </ul>
    </nav>
  )
}
