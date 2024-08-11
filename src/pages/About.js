import React from 'react';
import bgimage from '../image/about1.jpg';

function About() {
  return (
    <>
      <div className="relative w-screen h-screen overflow-hidden">
        <img
          className="w-full brightness-[50%] object-cover h-[50%] sm:h-[50%]"
          src={bgimage}
          alt="Background Image"
        />
        <div className="absolute top-0 flex flex-col items-center justify-center w-full h-full px-4 -mt-32">
          <h1 className="font-bold text-[#ffffff] text-center text-[30px] sm:text-[40px] md:text-[60px] lg:text-[100px] font-sans mt-[-10rem] sm:mt-[-8rem] md:mt-[-6rem]">
            About Us
          </h1>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full h-full px-4 -mt-72">
        <h1 className="font-bold text-black text-center text-[25px] sm:text-[30px] md:text-[45px] lg:text-[70px] -mt-24">
          Our Story
        </h1>
      </div>
      <div className="px-4 -mt-10 sm:px-8 md:px-16 lg:px-32">
        <p className="text-black text-center text-[14px] sm:text-[16px] md:text-[18px] lg:text-[30px] leading-relaxed mt-12 sm:mt-48md:mt-12">
          The Pizza Factory is all about fun and good times with people you care about, sharing original Italian pizza, hand-made in the traditional Italian way: thin & crispy, and deliciously baked in the only original wood-fired oven in Sri Lanka, along with a tasty range of authentic Italian food with carefully-sourced fresh ingredients sourced and imported from Italy, is ought to have your tastebuds craving for more, after one bite.
          We hope you'll try our menu, crafted with care to deliver great value and our signature Loveable pure Italian Taste. Enjoy the Pizza Factory Pizza's at home, or at one of our newly established restaurants to have an authentic Italian Pizza experience. See you soon!
        </p>
      </div><></>
    </>
  );
}

export default About;
