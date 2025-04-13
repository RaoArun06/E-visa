import React, { useState } from "react";
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import Header from './Header'
import Login from '../../utils/Login.jpg'
const UserLogin = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
    <Header/>
    <div className="bg-blue-200  flex justify-between mt-10 rounded-md shadow-md overflow-hidden w-[1200px] mx-auto">
        
        {/* Left Side Image */}
        <div className="h-[700px]">
          <img
            src= {Login}
            alt="Visa Application"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right Side Login Form */}
        <div className="p-8 md:w-1/2 w-full">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Login to Apply</h2>

          {/* Email */}
          <label className="text-sm font-medium text-gray-700">
            Username or Email <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center border border-blue-600 rounded-md px-3 py-2 mt-1 mb-4">
            <FaUser className="text-gray-400 mr-2" />
            <input
              type="email"
              placeholder="Email"
              className="w-full outline-none text-sm"
            />
          </div>

          {/* Password */}
          <label className="text-sm font-medium text-gray-700">
            Password <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center border border-blue-600 rounded-md px-3 py-2 mt-1 mb-2">
            <FaLock className="text-gray-400 mr-2" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full outline-none text-sm"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="focus:outline-none"
            >
              {showPassword ? (
                <FaEyeSlash className="text-gray-500" />
              ) : (
                <FaEye className="text-gray-500" />
              )}
            </button>
          </div>

          {/* Options */}
          <div className="flex justify-between items-center mb-4 text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-blue-600" />
              Remember me
            </label>
            <button className="text-blue-800 hover:underline">
              Forgot password?
            </button>
          </div>

          {/* CAPTCHA Placeholder */}
          <div className="mb-6">
            <img
              src="/captcha-placeholder.png" 
              alt="Captcha"
              className="w-full h-[75px] object-contain border"
            />
          </div>

          {/* Submit */}
          <button className="w-full bg-[#0b2f55] text-white py-2 rounded-md font-semibold text-lg">
            Submit
          </button>

          {/* Footer */}
          <p className="text-sm text-center mt-6 text-gray-700">
            Don't have an account?{" "}
            <span className="font-semibold text-blue-800 cursor-pointer hover:underline">
              Create account
            </span>
          </p>
        </div>
    </div>
    </>
    );
};
export default UserLogin
