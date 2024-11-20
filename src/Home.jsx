import React, { useEffect } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Main from './Components/Main'
import Service from './Components/Service'
import Resume from './Components/Resume'
import Price from './Components/Price'
import Portfolio from './Components/Portfolio'
import Team from './Components/Team'
import Counting from './Components/Counting'
import Contact from './Components/Contact'
import 'aos/dist/aos.css';
import AOS from 'aos';

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1200, 
    });
  }, []);
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Main/>
      <Service/>
      <Resume/>
      <Price/>
      <Portfolio/>
      <Team/>
      <Counting/>
      <Contact/>
    </div>
  )
}

export default Home