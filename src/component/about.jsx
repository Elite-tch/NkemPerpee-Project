import React from 'react'
import  { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

function About() {
    useEffect(() => {
        AOS.init({ duration: 1500 });
      }, []);
  return (
    
   <div className='px-8 md:py-6 pt-10 pb-24 mx-auto'>
 <div className='flex justify-center items-center md:items-start  gap-4  flex-col md:flex-row   md:gap-28'>
  <div className="relative-wrapper">
    <div className="portrait">
      <img src="about.png" alt="portrait" className='w-64 md:w-80' />
    </div>
    <div className="semi-circle"></div>
  </div>  

  <div className='pt-4 w-full md:w-2/5'>
    <h2 className='text-2xl font-bold'>
      Why <span className='active'>Hire Me</span> ?
    </h2>  
    <p data-aos="fade-right" className='text-gray-500 pt-2  text-sm'>
    I am a<span className='font-bold'>certified product designer and a mentor </span>
    with an experience in <span className='font-bold'>Scrum </span>and <span className='font-bold'>
        Agile methodologies.</span>
        I am highly motivated and detailed-oriented in crafting, compelling user interfaces and
         experience designs aligned with business objectives, which solve ewal-life solutions
          by collaborating cross-functionality for sucessful product development. I possess diverse skills that every team needs to grow. I am excellent at teamwork, excellent in communication, listening ,adaptive in any space i find myself.
    </p>
    <div className='flex gap-6 md:gap-16 pt-3'>
<div>
    <h4 className='font-bold text-xl text-gray-900'>10+</h4>
    <p className='text-gray-500 text-sm'>Project Completed</p>
</div>
<div>
<h4 className='font-bold text-xl text-gray-900'>20+</h4>
    <p className='text-gray-500 text-sm'>Team Collaborated</p>
</div>

    </div>
    <div className='pt-10 hires'>
    <a href="" className='py-3 px-6 hire' target="_blank" rel="noopener noreferrer">Hire Me</a>


    </div>
      </div> 
</div>


    </div>

    
  )
}

export default About
