import React from 'react';
import { LOGO_URL } from '../../utils/Constants';

const Header = () => {
  return (
    <div className="bg-gray-800 text-white p-2 md:flex md:justify-between md:items-center">
      {/* image */}
      <div className="w-24 h-24 mt-3 ml-3">
        <img src={LOGO_URL} alt="food-hub logo" />
      </div>
         {/* Navigation links  */}
      <div className='flex space-x-14 flex-row cursor-pointer '>
      <h1 className="text-lg font-semibold hover:text-gray-400 transition duration-300">Home</h1>
        <h2 className="text-lg font-semibold hover:text-gray-400 transition duration-300">About</h2>
        <h3 className="text-lg font-semibold hover:text-gray-400 transition duration-300">Contact Us</h3>
        <h3 className="text-lg font-semibold hover:text-gray-400 transition duration-300">Grocery</h3>
        <h4 className="text-lg font-semibold  hover:text-gray-400 transition duration-300">Sign In</h4>
      </div>
    </div>
  );
};

export default Header;
