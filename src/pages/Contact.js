import React from 'react'
import ctimage from '../image/contact1.jpg';


function Contact() {
  return (
    <><><div className="relative w-screen h-screen overflow-hidden">
      <img
        className="w-full brightness-[50%] object-cover h-[50%] sm:h-[50%]"
        src={ctimage}
        alt="Background Image" />
      <div className="absolute top-0 flex flex-col items-center justify-center w-full h-full px-4 -mt-32">
        <h1 className="font-bold text-[#ffffff] text-center  sm:text-[80px] md:text-[60px] lg:text-[100px] font-sans mt-[-10rem] sm:mt-[-8rem] md:mt-[-6rem]">
          Contact
        </h1>
      </div>
    </div>
      <div className='flex flex-col items-center justify-center w-full h-full px-4 -mt-16'>
        <p className='sm:text-[15px] md:text-[20px] lg:text-[40px] font-bold items-center justify-center text-[#000000] -mt-96'>
          Call / Whats App
        </p>
        <p className='sm:text-[15px] md:text-[20px] lg:text-[30px]  items-center justify-center text-[#000000] -mt-2'>
          071 xxx xx xx
        </p>
      </div></>
      <div className='flex flex-col items-center justify-center w-full h-full px-4 mt-8'>
      <p className='sm:text-[15px] md:text-[20px] lg:text-[40px] font-bold items-center justify-center text-[#000000] -mt-36'>
          Adress
        </p>
      <p className=' text-center sm:text-[15px] md:text-[20px] lg:text-[30px]  items-center justify-center text-[#000000] -mt-2 '>
         xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
         xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
         xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        </p>
        <br>
        </br>


      </div></>
  )
}

export default Contact
