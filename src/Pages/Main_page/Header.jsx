import React from 'react'
import BLS_logo from '../../utils/BLS_logo.png'
import { flag_url } from '../../utils/constants'
const Header = () => {
  return (
    <header className="flex justify-between items-center px-24 py-4 sticky top-0 z-50 bg-white border-b border-b-gray-200">
      {/* Logo Section */}
      <img src={BLS_logo} className='h-16 w-auto'/>
      {/* Navigation Links */}
      <nav className="flex items-center gap-6">
        <a href="#" className="text-[#BB940C] font-medium border-b-2 border-[#BB940C] pb-2">Home</a>
        <a href="#" className="text-black font-medium hover:text-[#BB940C] pb-2">Services</a>
        <a href="#" className="text-black font-medium hover:text-[#BB940C] pb-2">Information</a>
        <a href="#" className="text-black font-medium hover:text-[#BB940C] pb-2">Contact Us</a>
      </nav>

      {/* Actions: Sign In and Language Selector */}
      <div className="flex items-center gap-4">
        <button className="bg-[#BB940C] text-white px-6 py-2 rounded-md font-semibold">
          Sign In
        </button>
        <div className="flex items-center border-2 border-gray-400 rounded px-4 py-2">
          <img src={flag_url+"gb.svg"} alt="UK Flag" className="h-4 w-6 object-cover mr-2" />
          <span className="text-[#333333]">English</span>
        </div>
      </div>
    </header>
  )
}

export default Header