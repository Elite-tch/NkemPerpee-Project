import './hero.css'
import Quote from '../../assets/quote-up.png'
import { useState } from 'react';

export const Hero = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(true);
  };

  const [activeIndex, setActiveIndex] = useState(0);

  const links = [{id:1, link:"Portfolio", href:"https://docs.google.com/document/d/1ng4NE9qrONz4v5X0huj1kz0GgYOnmR5L/edit?usp=drivesdk&ouid=108957530268249417132&rtpof=true&sd=true"}, 
    {id:2, link:"Hire\u00A0me", href:"dnkem114@gmail.com"}



  ];


  return (
    <div id='home' className=' relative mx-6 px-4 md:mt-28 lg:pt-18 pt-12  md:px-6'>
        <header className='flex items-center md:flex-row flex-col pt-10 justify-center mx-auto md:w-4/5 md:gap-4'>
            <img src="hand.gif" alt="wave" className='md:w-38 w-28' />
       <h1 className='font-bold text-3xl md:text-5xl text-center'> I am <span className="orange-text">Nkem</span>, the careerGirl <br /> Product Designer
        </h1></header>
        <div className="lg:mx-28 md:mx-12">
  <div className="pt-9 flex  justify-ceter flex-col md:flex-row w-full ">
    
    <div>
      <img src={Quote} alt="text" />
      <p className="mt-4">
        Nkem is a curious Product Designer always ready and open to challenges with a
        demonstrated history of success. Excellent at communication
        and has developed proficiency in strategy, UX research, and experience design.
      </p>
      <div className="flex gap-2 items-center pt-4">
        <h4 className="font-bold text-2xl text-gray-900">2+ Years</h4>
        <span className="text-gray-600">Experience</span>
      </div>
    </div>
    {/* Image Overlay */}
    <div className="relative mt-28 md:mt-40 lg:mt-48 flex items-center justify-center md:justify-normal">
      <img src="circle.png" alt="decorative circle" className="lg:w-[60%] w-[100%] ml-56 md:ml-0" />
     
      <img
        src="image1.png"
        alt="portrait"
        className="absolute top-[-55%] left-[20%] md:left-[18%] lg:left-[12%] lg:w-[35%] w-[60%]"
      />
      <div className=' blurs left-[-90%] md:left-[-82%]  lg:left-[-51%] bottom-[-20%] md:top-[20%] lg:gap-4 gap-2 relative rounded-full flex items-center mt-12 md:mt-0 lg:mt-4 justify-center py-2 lg:py-2 px-3  lg:px-4'>
      <div className="flex gap-4">
      {links.map((link, index) => (
  <a
    key={index}
    href={link.href} 
    className={`md:py-2 md:px-4 px-3 py-2 rounded-full flex items-center gap-1 text-white text-sm lg:text-1xl md:text-xl ${
      activeIndex === index ? 'bg-[#FD853A]' : 'bg-transparent'
    }`}
    onMouseEnter={() => setActiveIndex(index)}
  >
    {link.link} {/* Access the `link` property of the object */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={`size-4 transition-opacity duration-300 ${
        activeIndex === index ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
      />
    </svg>
  </a>
))}

</div>

   
      </div>
    </div>
  </div>
</div>




    </div>

  )
}
