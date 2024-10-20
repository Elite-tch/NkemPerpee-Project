import React from 'react'
import  { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

function Experience() {
   useEffect(() => {
      AOS.init({ duration: 1200 });
    }, []);
  return (
    <div className='py-8 px-8  flex flex-col justify-center'>
     <h2 className='text-2xl  font-bold text-center'>My <span className='active  '>Work Experience</span ></h2> 
   
    <div className='flex gap-4 md:gap-40 flex-col md:flex-row justify-center w-full mx-auto pt-10 '>
    <div className='flex gap-6 justify-center md:gap-40'>
        <div data-aos="fade-right"  className='md:w-2/5 w-full'> 
   <h3 className='font-bold text-2xl'>Blaitware, Nigeria</h3>
   <p className='text-sm text-gray-400'>Sept 2022 - July 2024</p>
   <a href="" className='anchor text-xs' target="_blank" rel="noopener noreferrer">https://www.blaitware.com</a>
   </div>
     <div class="flex flex-col items-center md:mt-10">
  <div class=" border-2 p-1 border-dashed border-gray-950 rounded-full">
<div class="md:w-5  md:h-5 h-3 w-3 bg-active  rounded-full">
 </div>
  </div>
  <div class="w-1 h-32 md:h-32 border-r-2 border-dashed border-gray-950"></div>
</div>
</div>
<div data-aos="fade-right"  className='w-72'>
<h3 className='font-bold text-xl'>Product Dsigner</h3>
   <ul className='list-disc pl-5 text-sm md:text-sm text-gray-400'>
<li>Designed UI elements and prototypes for differnt projects.</li>
<li>Conducted user research and usability testing to improve the user interface.</li>
<li>Collaborated with developers and products managers to bring the design to life.</li>

   </ul>
</div>
</div>

<div className='flex gap-4 md:gap-40 flex-col md:flex-row justify-center w-full mx-auto  pt-10 md:pt-0 '>
    <div className='flex gap-6 justify-center md:gap-40'>
        <div data-aos="fade-right"  className=' md:pt-6 md:w-2/5 w-full'> 
   <h3 className='font-bold text-2xl'>Bolin Minig, China </h3>
   <p className='text-sm text-gray-400'>Oct 2023 - 2024 </p>
   <a href="" className='anchor text-xs' target="_blank" rel="noopener noreferrer">https://www.blaitware.com</a>
   
   </div>
     <div class="flex flex-col items-center">
  <div class=" border-2 p-1 border-dashed border-gray-950 rounded-full">
<div class="md:w-5  md:h-5 h-3 w-3 bg-gray-950  rounded-full">
 </div>
  </div>
  <div class="w-1 h-32 md:h-32 border-r-2 border-dashed border-gray-950"></div>
</div>
</div>
<div data-aos="fade-right"  className='w-72 md:pt-6 '>
<h3 className='font-bold text-xl'>Brand And Content Designer</h3>
   <ul className='list-disc pl-5 text-sm md:text-sm text-gray-400'>
<li>Social media content designer. </li>
<li>Collaborated with the web developers in designing and developing the company website and branding guidelines.</li>


   </ul>
</div>
</div>


<div className='flex gap-4 md:gap-40 flex-col md:flex-row justify-center w-full mx-auto  pt-10 md:pt-0 '>
<div className='flex gap-6 justify-center md:gap-40'>
        <div data-aos="fade-right"  className=' md:pt-6 md:w-2/5 w-full'> 
        <h3 className='font-bold text-2xl'>Genesys TechHub, </h3>
   <p className='text-sm text-gray-400'>Nov 2022 - Aug 2023 </p>
   
   <a href="" className='anchor text-xs' target="_blank" rel="noopener noreferrer">www.genesystechhub.com</a>
  
   </div>
     <div class="flex flex-col items-center">
  <div class=" border-2 p-1 border-dashed border-gray-950 rounded-full">
<div class="md:w-5  md:h-5 h-3 w-3 bg-active  rounded-full">
 </div>
  </div>
  <div class="w-1 h-32 md:h-52 border-r-2 md:hidden border-dashed border-gray-950"></div>
</div>
</div>
<div data-aos="fade-right"  className='w-72 md:pt-6  '>
<h3 className='font-bold text-xl'>Product Design Intern </h3>
   <ul className='list-disc pt-2 pl-5 text-sm md:text-sm text-gray-400'>
<li>Designed UI elements and prototypes for differnt projects . </li>
<li>Conducted user research and usability testing to improve the user interface. </li>
<li>Collaborated with developers and Product managers to bring the design to life. </li>
<li> Played the role of a scrum master and Product owner for a new e-learning tech platform for young children.</li>
   </ul>
</div>
</div>







</div>
    
  )
}

export default Experience;
