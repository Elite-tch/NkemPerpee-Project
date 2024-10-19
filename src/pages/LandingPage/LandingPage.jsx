import React from 'react'
import { Services } from '../../component/services/Services'
import {NavBar} from '../../component/navbar/NavBar'
import { Hero } from '../../component/hero/hero'
import MobileMenu from '../../component/navbar/MobileMenu'


export const LandingPage = () => {
  return (
    <div>
         <MobileMenu/>
        <NavBar/>
        <Hero/>
        <Services />
        
    </div>
  )
}
