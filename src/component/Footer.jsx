import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebook, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-scroll';

export default function Footer() {
  return (
    <div>
    
<div className='nav-bg pt-8 md:pt-12 pb-8 md:px-32 px-8 text-white'>
<div className='flex items-center  justify-between'>
<h3 className='font-bold text-xl md:text-3xl'> Lets Connect there</h3>
<button className='bg-active px-6 py-2 rounded-full'><a href="dnkem114@gmail.com">Hire me</a></button>
</div>
<div className='flex md:justify-between md:flex-row flex-col gap-5 mt-8  md:mt-14'>
<div className='flex gap-3 flex-col '>
  <div className='flex items-center mb-2'>
<img src="default.png" alt="" className='w-52' />

</div>
<p>Lets catch up on socials</p>
<div className='flex items-center fl  gap-2'>
<a href="https://wa.me/message/E6UQUYRMMPIFH1"><FontAwesomeIcon icon={faWhatsapp} className='h-4 footer ' title="WhatsApp" />
</a>
<a href=""> <FontAwesomeIcon icon={faFacebook} className='h-4 footer  ' title="Facebook" />
</a>
<a href="https://www.linkedin.com/in/nkemdilim-ugwu-579403212?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FontAwesomeIcon icon={faLinkedin} className='h-4 footer ' title="LinkedIn" />
</a>
<a href=""><FontAwesomeIcon icon={faTwitter} className='h-4 footer ' title="Twitter" />
</a>
<a href="">  <FontAwesomeIcon icon={faYoutube} className='h-4 footer ' title="YouTube" />
</a>
</div>

</div>

<div className=' flex justify-between mt-3 md:justify-normal md:gap-16 '>
<div className='flex flex-col gap-3'>
<h3 className='font-medium text-xl active-text'>Navigation</h3>
<Link to="home" smooth={true} duration={500} className="footer">
        Home
      </Link>
      
      <Link to="about" smooth={true} duration={500} className="footer  ">
        About
      </Link>
      <Link to="services" smooth={true} duration={500} className="footer">
        Services
      </Link>
      <Link href='https://docs.google.com/document/d/1ng4NE9qrONz4v5X0huj1kz0GgYOnmR5L/edit?usp=drivesdk&ouid=108957530268249417132&rtpof=true&sd=true' smooth={true} duration={500} className="footer">
        Resume
      </Link>
      <Link to="project" smooth={true} duration={500} className="footer">
        Project
      </Link>
      <Link to="contact" smooth={true} duration={500} className="footer">
        Contact
      </Link>      
</div>

<div className='flex gap-3 flex-col'> 
<h3 className='font-medium text-xl active-text'> Contact</h3>
<a href="+2349023033558" className='footer '>+2349023033558</a>
<a href="dnkem114@gmail.com" className='footer '>dnkem114@gmail.com</a>
</div>


</div>


</div>



</div>



    </div>
  )
}
