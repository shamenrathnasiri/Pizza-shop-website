import React from 'react';
import bgimage from '../image/bg.jpg';
import { NavLink } from 'react-router-dom';

function Firstpage() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <img
        className="h-full w-full brightness-[60%] object-cover"
        src={bgimage}
        alt="Background Image"
      />
      <div className="absolute top-0 flex flex-col items-center justify-center w-full h-full px-4">
        <h1 className=" font-bold text-white text-center text-[30px] sm:text-[35px] md:text-[45px] lg:text-[55px]">
          Welcome to our Pizza Store
        </h1>
        <p className="font-bold text-white text-center text-[16px] sm:text-[20px] md:text-[25px] lg:text-[30px] mt-4">
          Let's enjoy with us...
        </p>
        <NavLink to="/Home">
        <button className="bg-[#19FF05] hover:bg-[#328f2a] text-black font-bold py-2 px-4 border rounded mt-4">
          Home
        </button>
          
        </NavLink>
        
      </div>
    </div>
  );
}

export default Firstpage;