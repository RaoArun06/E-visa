import React from 'react'
import BLS_logo from '../../utils/BLS_logo.png'
const Footer = () => {
  return (
    // visa process section
    <> 
    <section className="bg-white h-[380px] py-[50px] px-[150px]">
      <div className="text-center ">
        <h2 className="h-[60px] text-5xl font-medium mb-4">
          e-Visa Application Process
        </h2>
        <div className="flex justify-between items-center relative gap-12 md:gap-0">
          {/* Horizontal Line */}
          <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-[700px] border-t border-[#CCCCCC] z-0"></div>

          {/* Step 1 */}
          <div className="flex flex-col items-center text-center z-10  px-4">
            <div className="bg-[#F4F6F7] w-16 h-16 rounded-full box-content border-[15px] border-white flex items-center justify-center text-lg font-bold text-[#C0902C] mb-4">
              1
            </div>
            <h3 className="text-2xl font-medium  mb-2">Search for visa</h3>
            <p className=" text-[#333333] max-w-xs">
              Lorem Ipsum is simply Lorem Ipsum has been the industry’s standard.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center z-10  px-4">
            <div className="bg-[#F4F6F7] w-16 h-16 rounded-full box-content border-[15px] border-white flex items-center justify-center text-lg font-bold text-[#C0902C] mb-4">
              2
            </div>
            <h3 className="text-2xl font-medium  mb-2">Apply for visa</h3>
            <p className=" text-[#333333] max-w-xs">
              Lorem Ipsum is simply Lorem Ipsum has been the industry’s standard.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center z-10  px-4">
            <div className="bg-[#F4F6F7] w-16 h-16 rounded-full box-content border-[15px] border-white flex items-center justify-center text-lg font-bold text-[#C0902C] mb-4">
              3
            </div>
            <h3 className="text-2xl font-medium  mb-2">Get Confirmed visa</h3>
            <p className=" text-[#333333] font-normal max-w-xs">
              Lorem Ipsum is simply Lorem Ipsum has been the industry’s standard.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* footer */}
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
  </>
  )
}

export default Footer