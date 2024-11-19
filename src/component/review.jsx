import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay  } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



function Review() {
  return (
    <div className='review mt-2 md:mt-10  pt-10'>
      <div className='text-center px-4 py-4'>
<h2 className='text-2xl text-white font-bold'>Testimonals That Speak to <span className='active-text'>My Results</span> </h2>
<p className='text-sm text-gray-500 pt-2'>You would not mind hearing what people say about me right ?, lets explore their comments. <span className='font-bold'>Enjoy</span></p>
      </div>
<div className='bg-[#171717] py-14 mt-8'>
<Swiper
  className="lg:w-4/6 mx-auto"
  modules={[Autoplay, Pagination]}
  pagination={{ clickable: true }}
  spaceBetween={50}
  slidesPerView={1}
  autoplay={{
    delay: 4000, // Time between slides
    disableOnInteraction: false, // Keep autoplay running even after user interaction
  }}
  loop={false} // Seamless looping
  speed={500} // Smooth transition speed
>
      <SwiperSlide> <div className=' bg-slate-50 review-hover2 rounded-md py-3  px-3 shadow-2xl   items-start justify-center flex-col md:w-3/5 w-4/5 mx-auto'>

<p className='text-sm'>Nkem is a true hard working and team player who gives 
her best to any projects she is part of. I enjoyed 
with her and i believe you will too. </p>
<a href='https://www.linkedin.com/in/kennedy-omeh?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' className='flex items-center gap-3 pt-5'><img src="lin2.png" alt="" className='w-14' /> 
<span>Kennedy Omeh</span> </a>


</div>
</SwiperSlide>
      <SwiperSlide> <div className=' bg-slate-50 review-hover2 rounded-md py-3  px-3 shadow-2xl   items-start justify-center flex-col md:w-3/5 w-4/5 mx-auto'>
          
          <p className='text-sm'>I had the pleasure of working with Nkemdili during UpSkill23, where she was my mentor 
    in product design. Her understanding of design principles,both in terms of aesthetics
     and funtionality, is excetional. Nkemdili has a unique ability to balance clean, simple
      design with a deep focus on user expereince UIX, ensuring that her work is not only 
      visually appealing but also highly functional for end-users.
    What sets Nkemdili apart is her dedication to the design process, She does not just stop at the
     surface level, She takes the time to dive deep into research, usability testing, and iteration,
      always keeping the users needs at the forefront. Her designs reflect a blend of creativity and
       practically making her an invaluable assets to any team.
    On a personal level Nkemdili is an excellent communicator amd collaborator. She is always open to feedback, 
    willing to share her knowledge and eager to help others grow. She shared her design works generously, which
     greatly enhanced my own understanding of products design.
    I highly recommend Nkemdilim to any organization or team looking for a skilled, user-focused product 
    designer who can deliver both beautiful and functional designs.  </p>
  <a href="https://www.linkedin.com/in/faithdev?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className='flex items-center gap-3 pt-5'> <img src="lin1.png" alt="" className='w-14' />
  <span>Faith Obi</span>
  </a>
          </div></SwiperSlide>

      <SwiperSlide>        <div className=' bg-slate-50 review-hover2 rounded-md py-3  px-3 shadow-2xl   items-start justify-center flex-col md:w-3/5 w-4/5 mx-auto'>
          
          <p className='text-sm'>Her expertise extends beyond design, excelling in social media management and
       making a significant impacts as a mentor for aspiring product designers. 
       Nkemdili seamlessly combines creativity with a commitment to social impact,
        making them an invaluable asset to any team.</p>
        <a href="https://www.linkedin.com/in/miracle-nzeh-b52a401b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className='flex items-center gap-3 pt-5'> <img src="lin3.png" alt="" className='w-14' />
        <span>Miracle Nzeh</span>
  </a>
      
          </div></SwiperSlide>

          <SwiperSlide>        <div className=' bg-slate-50 review-hover2 rounded-md py-3  px-3 shadow-2xl   items-start justify-center flex-col md:w-3/5 w-4/5 mx-auto'>
          
          <p className='text-sm'>Seven stars to my Mentor Nkem. She is one of the best Product designer so far. Nkem was my Mentor at Genesys upskill cohort 2. She dedicated her full time to making sure we had proper knowledge and understanding of what product design is about and above that she opened our eyes to deep secret and we finally graduated as the best. Above just being a Mentor at Genesys upskill, Nkem had always been my mentor in UI/UX Design always pushing me to lead more, always encouraging me to keep push. Am proud to say that Mentor Nkem made me what I am today. I highly recommend her for any product or mentorship, she is the best .</p>
        <a href="https://www.linkedin.com/in/yourdavidjohnson?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className='flex items-center gap-3 pt-5'> <img src="lin.png" alt="" className='w-14' />
        <span>David Joshnson</span>
  </a>
      
          </div></SwiperSlide>

          <SwiperSlide>        <div className=' bg-slate-50 review-hover2 rounded-md py-3  px-3 shadow-2xl   items-start justify-center flex-col md:w-3/5 w-4/5 mx-auto'>
          
          <p className='text-sm'>I terms of knowledge and creativity, I believe that Nkem would be a good fit for anything that has to do with innovation and creativity</p>
        <a href="https://www.linkedin.com/in/chimzuruoke-emmanuel-669b492a4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className='flex items-center gap-3 pt-5'> <img src="lin4.png" alt="" className='w-14' />
        <span>Chimzuoke Emmanuel</span>
  </a>
      
          </div></SwiperSlide>
         

      
      
    </Swiper>
     


</div>
     



</div>























    
  )
}

export default Review
