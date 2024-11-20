import React from 'react'
import me from '../assets/me.png'

function Contact() {
  return (
    <div className='bg-red-600 overflow-hidden'>
        <div className='grid md:grid-cols-2 items-center px-28'>
            <div className='hidden md:grid'>
                <img src={me} alt="/" />
            </div>
            <form action="post" className='mt-[150px]' >
                <input type="text" placeholder='Your Name' className='w-full bg-transparent py-3 text-md border-b mb-5 focus:outline-none text-gray-300' /> <br />
                <input type="text" placeholder='Your Email' className='w-full bg-transparent py-3 text-md border-b mb-5 focus:outline-none text-gray-300' /> <br />
                <input type="text" placeholder='Subject' className='w-full bg-transparent py-3 text-md border-b mb-5 focus:outline-none text-gray-300' /> <br />
                <textarea  placeholder='Subject' className='w-full text-gray-400 bg-transparent py-3  text-md border-b mb-5 focus:outline-none  ' >Message</textarea > <br />
                <button className='bg-white  text-red-600 text-center text-md py-2 px-8 border-2 border-red-300 hover:bg-black hover:text-white '>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contact