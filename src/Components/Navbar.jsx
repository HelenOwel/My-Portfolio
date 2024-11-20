import React, { useEffect, useState } from 'react';
import './Navbar.css'
import Hamburger from 'hamburger-react'

function Navbar() {

    const [isOpen, setOpen] = useState(false)
    const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  

  return (
    <div className={`fixed w-full left-0 right-0 top-0 z-10 ${scroll? "text-black": "text-white"}`}>
      <div
        className={`nav border-b hidden md:flex justify-between px-8 text-white  font-sans  duration-300 ${
          scroll ? 'bg-white  text-black pt-4 pb-4' : 'bg-red-600 text-white pt-8 pb-8'
        }`}
      >
        
       <div> <h1 className={`text-3xl ${ scroll? 'text-red-700': 'text-white'}`}>Helen Codespace</h1></div>
        <ul className={`nav-links flex gap-8 text-lg  ${ scroll? 'text-gray-500': 'text-white'}`}>
          <li className={`text-black ${ scroll? 'text-red-600': 'text-black'}`}>Home</li>
         <li>About</li>
          <li>Service</li>
          <li>Portfolio</li>
          <li>Review</li>
          <li>Team</li>
          <li>Contact</li>
        </ul>
      </div>




      {/* For Media */}
      <div
        className="relative md:hidden px-9 pt-4   text-gray-500"
      >
       <div className={`bg-white flex justify-between absolute top-0 left-0 w-full duration-200 overflow-hidden px-7 ${isOpen? "" : "h-14"}` }>
       <h1 className="md:text-4xl text-2xl text-red-700 my-3  right-0 top-4 z-10">Helen Codespace</h1>
       <div className={`border h-12`}>
       <Hamburger toggled={isOpen} toggle={setOpen}    />
       </div>
       </div>
       <h1 className="text-3xl hidden  right-0 top-4 pl-4 z-10">Helen Codespace</h1>
      <div>
        
      <ul
        className={`absolute gap-y-6 block py-3 mt-10 text-lg cursor-pointer transition-all duration-300 ${
          isOpen ? 'block bg-white w-full left-0 px-5' : 'hidden'
        }`}
      >
          <li className='py-3 hover:text-black'>Home</li>
          <li className='py-3 hover:text-black'>About</li>
          <li className='py-3 hover:text-black'>Service</li>
          <li className='py-3 hover:text-black'>Portfolio</li>
          <li className='py-3 hover:text-black'>Review</li>
          <li className='py-3 hover:text-black'>Team</li>
          <li className='py-3 hover:text-black'>Contact</li>
        </ul>
      </div>
      </div>
    </div>
  );
}

export default Navbar;
