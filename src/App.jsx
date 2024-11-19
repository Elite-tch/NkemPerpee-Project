import React from 'react';
import Experience from "./component/experience";
import About from "./component/about";
import Review from './component/review';
import Contact from './component/contact';
import { Hero } from './component/hero/Hero';
import { NavBar } from './component/navbar/NavBar';
import MobileMenu from './component/navbar/MobileMenu';
import { Services } from './component/services/Services';
import Footer from './component/Footer';
import './App.css';
import './index.css';


function App() {


  return (
    <div>
      <MobileMenu/>
      <NavBar />
<Hero />
<Services />
<Review />
<Contact />
<Footer />
    </div>
  )
}

export default App;
