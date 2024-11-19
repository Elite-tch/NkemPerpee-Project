import React from 'react';

function Contact() {
  return (
    <div id='contact' className='text-center py-12 md:py-14 px-6 '>
<h2 className='text-2xl font-bold' >Have an Awesome Project Idea ? <span className='active-text'>Lets Collaborate</span></h2>
<div className='flex items-center  justify-center mt-5'>
<a href="dnkem114@gmail.com" className='flex review-hover2 items-center gap-2 py-3 px-6 rounded-full border mx-auto ' target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className=" p-2  email size-8">
  <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
</svg>
<span>Send me a mail</span>
</a>

</div>




    </div>
  )
}

export default Contact