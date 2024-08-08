import React from 'react'
import bgimage from '../image/menu1.jpg';
import bgimage2 from '../image/menu2.jpg';
import bgimage3 from '../image/menu3.jpg';
import bgimage4 from '../image/menu4.jpg';

function Menu() {
  return (
    <>
      <div className="relative w-screen h-screen overflow-hidden">
        <img
          className="w-full brightness-[50%] object-cover h-[70%]"
          src={bgimage}
          alt="Background Image"
        />
        <div className="absolute top-0 flex flex-col items-center justify-center w-full h-full px-4">
          <h1 className="font-bold text-[#ffffff] text-center text-[30px] sm:text-[35px] md:text-[45px] lg:text-[150px] font-sans -mt-44">
            MENU
          </h1>
        </div>

        <div className="absolute top-0 flex flex-col items-center justify-center w-full h-full px-4 mt-4">
          <p className="font-bold text-[#047935] text-center text-[16px] sm:text-[20px] md:text-[30px] lg:text-[50px] mt-96">
            ITALIAN PIZZA
          </p>
        </div>
      </div>

      <div className='absolute top-0 flex flex-col items-center justify-center w-full h-full px-4 mt-96'>
        <table className="table-auto text-[30px] mt-28">
          <thead>
            <tr>
              <th></th>
              <th className='px-20 py-4'>Small</th>
              <th className='px-8 py-4'>Medium</th>
              <th className='px-8 py-4'>Large</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sea Food</td>
              <td className='px-20'>Rs.800.00</td>
              <td className='px-8'>Rs.1300.00</td>
              <td className='px-8'>Rs.2000.00</td>
            </tr>
            <tr>
              <td>Chicken</td>
              <td className='px-20'>Rs.700.00</td>
              <td className='px-8'>Rs.1200.00</td>
              <td className='px-8'>Rs.1900.00</td>
            </tr>
            <tr>
              <td>Sausages</td>
              <td className='px-20'>Rs.600.00</td>
              <td className='px-8'>Rs.1000.00</td>
              <td className='px-8'>Rs.1500.00</td>
            </tr>
            <tr>
              <td>Beef</td>
              <td className='px-20'>Rs.1000.00</td>
              <td className='px-8'>Rs.1500.00</td>
              <td className='px-8'>Rs.2500.00</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="relative flex flex-col items-center justify-center mt-40 overflow-hidden">
        <img
          className="w-[50%] h-[20%] object-cover rounded-lg"
          src={bgimage2}
          alt="Background Image"
        />
      </div>
      <div className="absolute flex flex-col items-center justify-center w-full h-full px-4 -mt-24">
          <p className="font-bold text-[#047935] text-center text-[16px] sm:text-[20px] md:text-[30px] lg:text-[50px] -mt-96">
          MARGHERITA PIZZA
          </p>
        </div>
        <div className='absolute flex flex-col items-center justify-center w-full h-full px-4 -mt-28'>
        <table className="table-auto text-[30px] -mt-44">
          <thead>
            <tr>
              <th className='px-20 py-4'>Small</th>
              <th className='px-8 py-4'>Medium</th>
              <th className='px-8 py-4'>Large</th>
            </tr>
          </thead>
          <tbody>
            <tr>
             
              <td className='px-20'>Rs.1000.00</td>
              <td className='px-8'>Rs.1500.00</td>
              <td className='px-8'>Rs.2000.00</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="relative flex flex-col items-center justify-center mt-56 overflow-hidden">
        <img
          className="w-[50%] h-[20%] object-cover rounded-lg"
          src={bgimage3}
          alt="Background Image"
        />
      </div>
      <div className="absolute flex flex-col items-center justify-center w-full h-full px-4 -mt-24">
          <p className="font-bold text-[#047935] text-center text-[16px] sm:text-[20px] md:text-[30px] lg:text-[50px] -mt-96">
          VEGITARIAN PIZZA
          </p>
        </div>
        <div className='absolute flex flex-col items-center justify-center w-full h-full px-4 -mt-28'>
        <table className="table-auto text-[30px] -mt-44">
          <thead>
            <tr>
              <th className='px-20 py-4'>Small</th>
              <th className='px-8 py-4'>Medium</th>
              <th className='px-8 py-4'>Large</th>
            </tr>
          </thead>
          <tbody>
            <tr>
             
              <td className='px-20'>Rs.500.00</td>
              <td className='px-8'>Rs.800.00</td>
              <td className='px-8'>Rs.1200.00</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="relative flex flex-col items-center justify-center mt-56 overflow-hidden">
        <img
          className="w-[100%] h-[50%] object-cover rounded-lg"
          src={bgimage4}
          alt="Background Image"
        />
      </div>   
    </>
  );
}

export default Menu;


