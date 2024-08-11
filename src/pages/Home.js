import React from 'react'
import pizzastore from '../image/PizzaStore.jpg';
import pizza1 from '../image/pizza1.jpg';
import pizza2 from '../image/pizza2.jpg';
import { NavLink } from 'react-router-dom';

function Home() {
  return (
    <><><><><div className="relative w-screen h-screen overflow-hidden">
      <img
        className="h-[80%] w-full brightness-[70%] object-cover"
        src={pizzastore}
        alt="Background Image" />
      <div className="absolute top-0 flex flex-col items-center justify-center w-full h-full px-4">
        <h1 className="font-bold text-[#ffffff] text-center text-[30px] sm:text-[35px] md:text-[45px] lg:text-[150px] font-serif ">
          Pizza Store
        </h1>
      </div>

    </div>
      <div className="absolute flex flex-col items-center justify-center h-full mx-auto -mt-64 w-h">
        <p className="font-bold text-black text-center text-[16px] sm:text-[20px] md:text-[25px] lg:text-[30px] -mt-12">
          "Your favorite pizza destination "
        </p>
        <p className=" text-black text-center text-[16px] sm:text-[15px] md:text-[20px] lg:text-[22px] mt-4 ">
          Pizza is a beloved culinary creation that originated in Italy and has become a global favorite. It consists of a round, flat base made from dough, which is traditionally topped with tomato sauce, cheese, and various ingredients such as meats, vegetables, and herbs. The combination of a crispy crust, gooey cheese, and flavorful toppings makes pizza a versatile and satisfying dish.<br />
          There are many variations of pizza, from the classic Margherita with its simple topping of tomatoes, mozzarella, and basil, to more elaborate versions like the meat-lovers or veggie-packed options. Each region has its unique take on pizza, such as the thin, crispy crusts of New York-style pizza or the thick, hearty slices of Chicago deep-dish.<br />
          Pizza is enjoyed by people of all ages and can be customized to suit individual tastes, whether you prefer a spicy kick, a vegetarian delight, or a meaty feast. It is often shared among friends and family, making it a popular choice for gatherings, parties, and casual meals. With endless possibilities for toppings and styles, pizza remains a timeless and universally adored dish.
        </p>
      </div></>
      <div className='overflow-hidden mt-72'>
        <img className="w-[100%] h-[30%] object-cover"
          src={pizza1}
        >
        </img>
      </div> </>
      <div className="relative flex flex-col items-center justify-center mt-8">
        <p className="font-bold text-black text-[16px] sm:text-[20px] md:text-[25px] lg:text-[30px]">
          Check Menu
        </p>
        <NavLink to="/Menu">
          <button className="px-6 py-2 mt-4 font-bold text-white transition duration-300 bg-[#ca2727] border rounded hover:bg-[#5E0606]">
            View Menu
          </button>
        </NavLink>
      </div></>
      <div className="relative flex flex-col items-center justify-center mt-8 overflow-hidde ">
        <img
          className="h-[20%] w-[80%] brightness-[100%] object-cover items-center justify-center rounded-lg"
          src={pizza2}
          alt="Background Image" />
          </div></>
        );
        }

        export default Home;