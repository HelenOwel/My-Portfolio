import React from 'react'
import './Service.css'
import 'aos/dist/aos.css';
import AOS from 'aos';



function Service() {
  return (
    <div>
        <div data-aos="zoom-in" className='w-full text-center '>
        <div className='flex gap-1 items-center justify-center text-center '>
            <span className='w-6  bg-red-600 border-red-600 h-1'></span>
            <span  className='w-1 bg-red-600 border-red-600 h-1'></span>
          <h1 className='text-2xl text-gray-700'>What i do</h1>
          </div >
            <h3 className='text-center py-3 text-5xl text-gray-700'>Awesome Quality Service</h3>
        </div>

<div  className='grid md:grid-cols-2 mx-11 '>

  
<div data-aos="fade-up" className='md:flex items-center mt-7 mx-9  text-gray-400'>
   <div className='apple text-red-500 text-7xl md:text-5xl border-2 border-red-600 p-9 hover:text-6xl duration-300'>
    <i class="fa-solid fa-laptop"></i>
    </div>
    <div className='arp  px-4 md:pt-5  pb-4  relative  '>
        <h1 className='text-xl py-2'>Web-Design</h1>
      <p className=' w-full text-sm'>Building responsive, user-friendly websites with modern designs and efficient backend websites</p>
      <span className='ment absolute  h-full top-0 left-0 w-full'></span>
    </div>
   </div>




   <div data-aos="fade-up" className='md:flex items-center mt-7  mx-9 text-gray-400'>
   <div className='apple text-red-500 text-7xl md:text-5xl border-2 border-red-600 p-9 hover:text-6xl duration-300'>
   <i class="fa-solid fa-computer"></i>
    </div>
    <div className='arp  px-4 md:pt-5    relative  '>
        <h1 className='text-xl py-2'>Web-Design</h1>
      <p className=' w-full text-sm'>Building responsive, user-friendly websites with modern designs and efficient backend websites</p>
      <span className='ment absolute  h-full top-0 left-0 w-full'></span>
    </div>
   </div>



   <div data-aos="fade-up" data-aos-delay="400"  className='md:flex items-center mt-7  mx-9 text-gray-400'>
   <div className='apple text-red-500 text-7xl md:text-5xl border-2 border-red-600 p-9 hover:text-6xl duration-300'>
   <i class="fa-solid fa-robot"></i>
    </div>
    <div className='arp  px-4 md:pt-5   relative  '>
        <h1 className='text-xl py-2'>Web-Design</h1>
      <p className=' w-full text-sm'>Building responsive, user-friendly websites with modern designs and efficient backend websites</p>
      <span className='ment absolute  h-full top-0 left-0 w-full'></span>
    </div>
   </div>



   <div data-aos="fade-up" data-aos-delay="400"  className='md:flex items-center  mx-9 mt-7 text-gray-400'>
   <div className='apple text-red-500 text-7xl md:text-5xl border-2 border-red-600 p-9 hover:text-6xl duration-300'>
   <i class="fa-brands fa-apple"></i>
    </div>
    <div className='arp  px-4 md:pt-5   relative  '>
        <h1 className='text-xl py-2'>Web-Design</h1>
      <p className=' w-full text-sm'>Building responsive, user-friendly websites with modern designs and efficient backend websites</p>
      <span className='ment absolute  h-full top-0 left-0 w-full'></span>
    </div>
   </div>


   
</div>



    </div>
  )
}

export default Service