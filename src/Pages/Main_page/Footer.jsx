import React from 'react'
import BLS_logo from '../../utils/BLS_logo.png'
const Footer = () => {
  return (
    <footer className="bg-[#1F1E1E] text-white pt-10 pb-4 px-24">
      {/* Top Section */}
      <div className="flex justify-between">
        {/* Logo and Description */}
        <div>
          <img src={BLS_logo} className='h-16'/>
          <p className=" mt-4  max-w-96">
            BLS International Services Ltd., with over 19+ years of experience, is a globally trusted and highly
            esteemed tech-enabled service partner for governments and citizens. The company has established itself as one
            of the top 2 players in the field of visa, passport, consular, and citizen services.
          </p>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col mt-2 gap-4 text-[#CCCCCC] opacity-80 font-semibold">
          <a href="#" className="hover:text-white">{">"} e-Visa</a>
          <a href="#" className="hover:text-white">{">"} About us</a>
          <a href="#" className="hover:text-white">{">"} Contact us</a>
          <a href="#" className="hover:text-white">{">"} Frequently Asked Questions</a>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col mt-2 gap-4 text-[#CCCCCC] opacity-80 font-semibold">
          <a href="#" className="hover:text-white">{">"} Privacy Policy</a>
          <a href="#" className="hover:text-white">{">"} Terms and Conditions</a>
          <a href="#" className="hover:text-white">{">"} Cookies Policy</a>
          <a href="#" className="hover:text-white">{">"} Newsroom</a>
        </div>
      </div>

      {/* Divider */}
      <hr className=" border-[#CCCCCC] my-3" />

      {/* Bottom Section */}
      <div className="text-center font-semibold">
        ( © ) BLS International 2024. All Rights Reserved
      </div>
    </footer>
  )
}

export default Footer