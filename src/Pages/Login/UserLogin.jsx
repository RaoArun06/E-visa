import React, { useState } from "react";
import { FaUser, FaKey, FaEye, FaEyeSlash } from "react-icons/fa";
import Header from './Header'
import Login from '../../utils/Login.png'
import I_am_not_a_robot from '../../utils/I_am_not_a_robot.png'
const UserLogin = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
    <Header/>
    <div className=" bg-[#F6F9FB] flex items-center justify-center py-8">
      <div className="bg-white rounded-md shadow-lg flex overflow-hidden max-w-[850px] w-full h-[510px]">
        
        {/* Left Side Image */}
        <div className="h-[510px]">
          <img
            src={Login}
            alt="Visa Application"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right Side Login Form */}
        <div className="px-10 py-2 mt-4 max-w-[420px] w-full">
          <h2 className="text-2xl font-medium mb-4">Login to Apply</h2>

          {/* Email */}
          <label className="text-lg text-[#11375C]">
            Username or Email <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center border border-[#3773AD] rounded-md px-3 py-2 mt-2 mb-4 h-[45px]">
            <FaUser className="text-[#11375C] mr-4 w-6 h-auto" />
            <input
              type="email"
              placeholder="Email"
              className="w-full outline-none "
            />
          </div>

          {/* Password */}
          <label className="text-lg text-[#11375C]">
            Password <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center border border-[#3773AD] rounded-md px-3 py-2 mt-2 mb-4 h-[45px]">
            <FaKey className="text-[#11375C] mr-4 w-6 h-auto" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full outline-none "
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="focus:outline-none"
            >
              {showPassword ? (
                <FaEye className="text-[#38648E]" />
              ) : (
                
                <FaEyeSlash className="text-[#38648E]" />
              )}
            </button>
          </div>

          {/* Options */}
          <div className="flex justify-between items-center mb-4  text-[#11375C]">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="" />
              Remember me
            </label>
            <button className=" hover:underline">
              Forgot password?
            </button>
          </div>

          {/* CAPTCHA Placeholder */}
          <div className="mb-6 h-[70px]">
            <img
              src={I_am_not_a_robot}
              alt="Captcha"
              className="w-full h-[75px] object-contain "
            />
          </div>

          {/* Submit */}
          <button className="w-full h-[45px] bg-[#11375C] text-white py-2 rounded-md font-semibold text-lg">
            Submit
          </button>

          {/* Footer */}
          <p className="text-[#11375C] text-center mt-4">
            Don't have an account?{" "}
            <span className="font-bold cursor-pointer ">
              Create account
            </span>
          </p>
        </div>
      </div>
    </div>
    </>
    );
};
export default UserLogin
