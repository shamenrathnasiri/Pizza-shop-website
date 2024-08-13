import React from 'react';

export default function App() {
  return (
    <footer className="text-center text-white bg-[#4D5F51] dark:text-neutral-200 lg:text-left">
      <div className="flex flex-col items-center justify-center p-6 border-b-2 border-neutral-200 dark:border-neutral-500 lg:justify-between">
        
        <p className=" text-center text-[5px] sm:text-[5px] md:text-[18px] lg:text-[12px] leading-relaxed">
          Pizza is a popular Italian dish that consists of a flat, round base of dough topped with a variety of ingredients, 
          including tomato sauce, cheese, and various toppings such as vegetables, meats, and herbs. It is typically baked in 
          an oven and can be customized to suit different tastes, making it a versatile and beloved food worldwide. 
          Pizza is often enjoyed in slices and is a staple at casual gatherings, parties, and restaurants.
        </p>
        <p className="text-center justify-center items-center sm:text-[2px] md:text-[15px] lg:text-[25px] leading-relaxed mt-4">
          Enjoy your Pizza...
        </p>
        
        {/* Wrapper div for icons */}
        <div className="flex flex-col items-center mt-4">
          <div className="flex space-x-4">
            {/* Facebook Icon */}
            <svg
              className="h-7 w-7"
              fill="currentColor"
              style={{ color: "#000000" }}
              viewBox="0 0 24 24"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 
              1.583-5.192 4.615v3.385z" />
            </svg>

            {/* Instagram Icon */}
            <svg
              className="h-7 w-7"
              fill="currentColor"
              style={{ color: "#000000" }}
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
}
