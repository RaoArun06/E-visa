import React from "react";
import { FaChevronDown } from "react-icons/fa";
import BLS_logo from '../../utils/BLS_logo.png'
const Header = () => {
  return (
    <header className="h-[80px] px-[120px] flex items-center justify-between bg-white shadow-sm border-b border-gray-200">
      {/* Left: Logo */}
      <img src={BLS_logo} className=' w-[100px] '/>

      {/* Center: Title */}
      <h1 className="text-4xl font-normal text-center">
        Ethiopia e-Visa Application
      </h1>

      {/* Right: Language Dropdown */}
      <div className="flex items-center cursor-pointer gap-2">
        <img
          src="https://flagcdn.com/gb.svg"
          alt="UK Flag"
          className="w-[30px] h-[30px] rounded-full object-cover"
        />
        <span className="text-xl font-semibold">Eng (us)</span>
        <FaChevronDown className=" text-lg" />
      </div>
    </header>
  );
};

export default Header;
