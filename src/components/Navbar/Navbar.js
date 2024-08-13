import React, { useState } from 'react';
import logo from '../../image/main_logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="bg-[#A7FFBB]">
        <div className="flex flex-wrap items-center justify-between p-2 ">
          <a href="/">
            <img src={logo} className="h-12" alt="Logo" />
          </a>
          <button 
            onClick={toggleMenu} 
            data-collapse-toggle="navbar-default" 
            type="button" 
            className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm rounded-lg text-black-500 md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
            aria-controls="navbar-default" 
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true"  fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
            <ul className="flex flex-col p-4 mt-4 font-medium md:p-0 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
              <li>
                <a href="/Home" className="block px-3 py-2 text-black rounded md:hover:text-green-700 md:p-0 ">Home</a>
              </li>
              <li>
                <a href="/Menu" className="block px-3 py-2 text-black rounded md:hover:text-green-700 md:p-0 ">Menu</a>
              </li>
              <li>
                <a href="/About" className="block px-3 py-2 text-black rounded md:hover:text-green-700 md:p-0 ">About us</a>
              </li>
              <li>
                <a href="/contact" className="block px-3 py-2 text-black rounded md:hover:text-green-700 md:p-0 ">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
