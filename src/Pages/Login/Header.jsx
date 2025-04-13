import React from "react";
import { FaChevronDown } from "react-icons/fa";
import BLS_logo from '../../utils/BLS_logo.png'
const Header = () => {
  return (
    <header className="flex items-center justify-between px-52 py-4 bg-white shadow-sm border-b border-gray-200">
      {/* Left: Logo */}
      <img src={BLS_logo} className='h-20 w-auto'/>

      {/* Center: Title */}
      <h1 className="text-5xl font-normal text-gray-900 text-center">
        Ethiopia e-Visa Application
      </h1>

      {/* Right: Language Dropdown */}
      <div className="flex items-center space-x-2 cursor-pointer ">
        <img
          src="https://flagcdn.com/gb.svg"
          alt="UK Flag"
          className="w-10 h-10 rounded-full object-cover"
        />
        <span className="text-xl font-semibold text-gray-800">Eng (us)</span>
        <FaChevronDown className="text-gray-600 text-lg" />
      </div>
    </header>
  );
};

export default Header;
