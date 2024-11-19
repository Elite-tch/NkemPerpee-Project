import React, { useEffect, useRef, useState } from 'react';
import About from '../about';
import Experience from '../experience';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Link } from 'react-scroll';

import { Navigation, Pagination,  Autoplay } from 'swiper/modules';


// Sample data structure
const projects = [
{ id: 1, src1: "/slide.png", src2: "/slide2.png", category: 'Category 1' ,
 src3: "/slide3.png", src4: "/slide4.png", src5: "/slide5.png",  src6: "/slide6.png", src7: "/slide7.png", src8: "/slide8.png", src9: "/slide9.png", },

  { id: 2, src1: "/slide.png", src2: "/slide2.png", category: 'Category 2' },
  { id: 3, src1: "/slide3.png", src2: "/slide4.png", src3: "/slide5.png", category: 'Category 3' },
  { id: 4, src1: "/slide6.png", src2: "/slide7.png", src3: "/slide8.png", src4: "/slide9.png", category: 'Category 4' }
];

export const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState('Category 1');
  const [visibleImages, setVisibleImages] = useState([]);

  const handleNavbarClick = (category) => {
    setSelectedCategory(category);
    setVisibleImages([]); // Reset visible images when category changes
  };

  // Filter images based on selected category
  const filteredImages = selectedCategory === "All" ? projects : projects.filter(
    (project) => project.category === selectedCategory
  );

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in'); // Corrected class name
          observer.unobserve(entry.target); // Stop observing after it's visible
        }
      });
    });

    const imageElements = document.querySelectorAll('.fade-in-target');
    imageElements.forEach(el => observer.observe(el));

    return () => {
      imageElements.forEach(el => observer.unobserve(el));
    };
  }, [filteredImages]);

  return (
    <div>
      <div id='services' className='services pt-3 text-white'>
        <h2 className='md:text-3xl text-2xl  py-6 text-center font-bold'>My <span className='orange-text'>Services</span></h2>
           {/*  <div className='flex justify-between md:flex-row flex-row'>
              <img  src="left.png" alt="decorative circle" className="md:h-96 h-48 relative -top-32" />
              <img src="right.png" alt="decorative circle" className="md:h-80 h-48 relative md:-bottom-20" />
            </div> */}
            <div className='hover'>
            <div className='flex justify-center items-center gap-8 md:w-4/5 mx-auto pt-8 pb-16 md:flex-row flex-col '>
            <li className="hidden" onClick={() => handleNavbarClick("Category 1")}>
                  All
                </li>
                <Link smooth to="bottom-section"><img onClick={() => handleNavbarClick('Category 2')} src="web3.png" alt="portrait" className="md:w-56 w-72 review-hover3" />
              </Link> 
              <Link smooth to="bottom-section">        <img onClick={() => handleNavbarClick('Category 3')} src="brand.png" alt="portrait" className="md:w-56 w-72 review-hover3" />
              </Link> 
              <Link smooth to="bottom-section">   <img onClick={() => handleNavbarClick('Category 4')} src="uix.png" alt="portrait" className="md:w-56 w-72 review-hover3" />
              </Link> 
            </div>
          </div>
          </div>
      


      <Experience />
      <About />
      <div >
      <div id="project"className="   mx-8  mx-auto flex justify-center items-center flex-col md:py-6"
>
         
      <h3 className="font-bold text-center md:text-3xl pb-7 md:pb-12 text-2xl mx-3">
              Let's have a quick exploration of my <span className="active-text">work</span>
            </h3>
      <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            
            centeredSlides={false}
            breakpoints={{
              640: {
                slidesPerView: 1, // 1 slide for screens >= 640px
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3, // 2 slides for screens >= 768px
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 4, // 3 slides for screens >= 1024px
                spaceBetween: 10,
              },
            }}
      
      className="mySwiper w-4/5 lg:w-4/5 md:w-5/5 mx-auto" id="bottom-section"
    >
      {filteredImages.map((image) => (
        <div key={image.id} className=''>
         
            <div className=''>
            <SwiperSlide className='flex items-center justify-center'> {image.src1 && (
                <img
                  className="fade-in-target rounded shadow-2xl md:w-64 md:h-48"
                  src={image.src1}
                  alt=""
                />
              )}</SwiperSlide> 
            
            <SwiperSlide className='flex items-center justify-center'> {image.src2 && (
                <img
                  className="fade-in-target rounded shadow-2xl md:w-64 md:h-48"
                  src={image.src2}
                  alt=""
                />
              )}</SwiperSlide> 


<SwiperSlide className='flex items-center justify-center'> {image.src3 && (
                <img
                  className="fade-in-target rounded shadow-2xl md:w-64 md:h-48"
                  src={image.src3}
                  alt=""
                />
              )}</SwiperSlide> 


<SwiperSlide className='flex items-center justify-center'>  {image.src4 && (
                <img
                  className="fade-in-target rounded shadow-2xl md:w-64 md:h-48"
                  src={image.src4}
                  alt=""
                />
              )}</SwiperSlide> 


<SwiperSlide className='flex items-center justify-center'>   {image.src5 && (
                <img
                  className="fade-in-target rounded shadow-2xl md:w-64 md:h-48"
                  src={image.src5}
                  alt=""
                />
              )}</SwiperSlide> 


<SwiperSlide className='flex items-center justify-center'>{image.src6 && (
                <img
                  className="fade-in-target rounded shadow-2xl md:w-64 md:h-48"
                  src={image.src6}
                  alt=""
                />
              )}</SwiperSlide> 


<SwiperSlide className='flex items-center justify-center'>   {image.src7 && (
                <img
                  className="fade-in-target rounded shadow-2xl md:w-64 md:h-48"
                  src={image.src7}
                  alt=""
                />
              )}</SwiperSlide> 


<SwiperSlide className='flex items-center justify-center'>   {image.src8 && (
                <img
                  className="fade-in-target rounded shadow-2xl md:w-64 md:h-48"
                  src={image.src8}
                  alt=""
                />
              )}</SwiperSlide> 


<SwiperSlide className='flex items-center justify-center'>    {image.src9 && (
                <img
                  className="fade-in-target rounded shadow-2xl md:w-64 md:h-48"
                  src={image.src9}
                  alt=""
                />
              )}</SwiperSlide> 
</div>
            </div>

        
      ))}
    </Swiper>
    </div>
    

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-6 lg:mx-32 mx-4 md:mx-20 py-8'>
         <p className='rounded-full text-center py-3 px-5 md:px-6 bg-gray-100 border hover:bg-gray-200'>Landing Page</p>
         <p className='rounded-full text-center py-3 px-5 md:px-6 bg-gray-100 border hover:bg-gray-200'>Product Design</p>
         <p className='rounded-full text-center py-3 px-5 md:px-6 bg-gray-100 border hover:bg-gray-200'>Web3 Design</p>
         <p className='rounded-full text-center py-3 px-5 md:px-6 bg-gray-100 border hover:bg-gray-200'>UIX Research</p>
         <p className='rounded-full text-center py-3 px-5 md:px-6 bg-gray-100 border hover:bg-gray-200'>Brand Identify</p>



         </div>
            </div>
          
        
      

  
    </div>
  );
};

