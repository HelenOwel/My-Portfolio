import React, { useEffect, useRef, useState } from 'react'

function Counting() {
    const [count, setCount] = useState(1)
    const first = useRef(null)
    const second = useRef(null)
    const [num, setNum] = useState(50)
    const third = useRef(null)
    const [digit, setDigit] = useState(50)
    const [figure, setFigure] = useState(0)
    const fourth = useRef(null)

    useEffect(()=>{
        const interval = setInterval(()=>{
            if(count >= 25){
                clearInterval(interval)
            }
            else{
                setCount((prevCount) => prevCount + 1)
            }
        }, 200)
        return ()=>clearInterval(interval)
    }, [count])

    useEffect(() => {
        if (first.current) {
          first.current.innerHTML = count + "k" + "+"; // Update the text inside the <div>
        }
      }, [count]); 


      useEffect(()=>{
        const interval = setInterval (() => {
            if(num >= 120){
                clearInterval(interval)
            }
            else{
                setNum((prevNum) =>prevNum + 1)
            }
        }, 180);
        return() => clearInterval(interval)
      }, [num])

      useEffect(()=>{
        if(second.current){
            second.current.innerHTML = num + "k" + "+";
        }
      }, [num])


      useEffect(()=>{
        const interval = setInterval(()=>{
            if(digit >= 89){
                clearInterval(interval)
            }
            else{
                setDigit((prevDigit) => prevDigit + 1)
            }
            return()=> clearInterval(interval)
        }, 190)
        return () => clearInterval(interval)
      }, [digit])

      useEffect(()=>{
        if(third.current){
            third.current.innerHTML = digit + "k" + "+"
        }
      }, [digit])

      useEffect(()=>{
       const interval = setInterval(()=>{
        if(figure >= 90){
            clearInterval(interval)
        }
        else{
            setFigure((prevFigure) => prevFigure + 1)
        }
       }, 59)
       return() => clearInterval(interval)
      }, [figure])

      useEffect(()=>{
        if(fourth.current){
            fourth.current.innerHTML = figure + "k" + "+"
        }
      }, [figure])




     


  return (
    <div   className=' overflow-x-hidden bg-black py-[150px] text-white mt-[50px]'>
        <div data-aos="zoom-in" className='flex overflow-x-hidden justify-between items-center mx-20'>
            <div >
                <div className='text-5xl'  ref={first}></div>
                <h1 className='text-center text-lg'>Listings</h1>
            </div>


            <div >
                <div className='text-5xl'  ref={second}></div>
                <h1 className='text-center text-lg'>Listing Categories</h1>
            </div>

            <div >
                <div className='text-5xl'  ref={third}></div>
                <h1 className='text-center text-lg'>Visitors</h1>
            </div>

            <div >
                <div className='text-5xl'  ref={fourth}></div>
                <h1 className='text-center text-lg'>Happy Clients</h1>
            </div>
        </div>
    </div>
  )
}

export default Counting