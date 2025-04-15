import React, { useState } from "react";
import { FaKey, FaEye, FaEyeSlash } from "react-icons/fa";
import Header from './Header'
const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [gender, setGender] = useState("male");
  return (
    <>
        <Header/>
        <div className=" bg-[#F6F9FB] flex justify-center items-center py-6">
        <div className="bg-white rounded-md shadow-lg px-8 py-4 w-full max-w-[1100px] ">
            <h2 className="text-2xl font-semibold mb-3">Register new user</h2>
            <hr className="mb-12 text-[#CCCCCC]" />

            <form className="grid grid-cols-1 md:grid-cols-3 gap-8 text-[#11375C]">

            {/* Full Name */}
            <div>
                <label className="block mb-1 ">
                Full name <span className="text-red-500">*</span>
                </label>
                <input
                type="text"
                placeholder="Full name"
                className="border border-blue-600 rounded-md px-3 py-2 w-full placeholder-[#333333]"
                />
            </div>

            {/* Place of Birth */}
            <div>
                <label className="block mb-1">
                Place of Birth <span className="text-red-500">*</span>
                </label>
                <input
                type="text"
                placeholder="Place name"
                className="border border-blue-600 rounded-md px-3 py-2 w-full placeholder-[#333333]"
                />
            </div>

            {/* Date of Birth */}
            <div>
                <label className="block mb-1">
                Date of Birth <span className="text-red-500">*</span>
                </label>
                <input
                type="text"
                placeholder="DD/MM/YYYY"
                className="border border-blue-600 rounded-md px-3 py-2 w-full placeholder-[#333333]"
                />
            </div>

            {/* Sex */}
            <div>
                <label className="block mb-1">
                    Sex <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-6 mt-2">
                    {/* Male */}
                    <div
                    onClick={() => setGender("male")}
                    className="flex items-center gap-2 cursor-pointer"
                    >
                    <div
                        className={`h-6 w-6 rounded-full border ${
                        gender === "male"
                            ? "bg-[#3773AD] border-[#3773AD]"
                            : "border-[#3773AD]"
                        }`}
                    ></div>
                    <span className="text-black">Male</span>
                    </div>

                    {/* Female */}
                    <div
                    onClick={() => setGender("female")}
                    className="flex items-center gap-2 cursor-pointer"
                    >
                    <div
                        className={`h-6 w-6 rounded-full border ${
                        gender === "female"
                            ? "bg-[#3773AD] border-[#3773AD]"
                            : "border-[#3773AD]"
                        }`}
                    ></div>
                    <span className="text-black">Female</span>
                    </div>
                </div>
            </div>

            {/* Email + Send OTP */}
            <div className="">
                <label className="block mb-1">
                Email Address <span className="text-red-500">*</span>
                </label>
                <div className="flex w-full">
                <input
                    type="email"
                    placeholder="Email Address"
                    className="border border-blue-600 rounded-l-md px-3 py-2 w-full placeholder-[#333333]"
                />
                <button
                    type="button"
                    className="bg-[#0b2f55] text-white px-4 rounded-r-md text-sm"
                >
                    Send OTP
                </button>
                </div>
            </div>

            {/* OTP */}
            <div>
                <label className="block mb-1">
                OTP <span className="text-red-500">*</span>
                </label>
                <input
                type="text"
                placeholder="Enter OTP"
                className="border border-blue-600 rounded-md px-3 py-2 w-full placeholder-[#333333]"
                />
            </div>

            {/* Phone Number */}
            <div>
                <label className="block mb-1">
                Phone number <span className="text-red-500">*</span>
                </label>
                <input
                type="text"
                placeholder="Phone no"
                className="border border-blue-600 rounded-md px-3 py-2 w-full placeholder-[#333333]"
                />
            </div>

            {/* Password */}
            <div>
                <label className="block mb-1">
                Password <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center border border-blue-600 rounded-md px-3 py-2">
                <FaKey className="text-[#11375C] mr-4 w-6 h-auto" />
                <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="w-full outline-none placeholder-[#333333]"
                />
                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                >
                    {showPassword ? (
                    
                    <FaEye className="text-[#38648E]" size={20} />
                    ) : (
                        <FaEyeSlash className="text-[#38648E]" size={20} />
                    )}
                </button>
                </div>
            </div>

            {/* Confirm Password */}
            <div>
                <label className="block mb-1">
                Confirm Password <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center border border-blue-600 rounded-md px-3 py-2">
                <FaKey className="text-[#11375C] mr-4 w-6 h-auto" />
                <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    className="w-full outline-none placeholder-[#333333]"
                />
                <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                    {showConfirmPassword ? (
                    
                    <FaEye className="text-[#38648E]" size={20} />
                    ) : (
                        <FaEyeSlash className="text-[#38648E]" size={20} />
                    )}
                </button>
                </div>
            </div>

            {/* Terms */}
            <div className="col-span-1 md:col-span-3 flex items-center gap-2 mt-2">
                <input type="checkbox" className="accent-blue-600 placeholder-[#333333]" />
                <label>I accept the terms & conditions</label>
            </div>

            {/* Submit Button */}
            <div className="col-span-1 md:col-span-3 mt-4 w-full max-w-[340px] mx-auto">
                <button
                type="submit"
                className="w-full bg-[#0b2f55] text-white py-2 rounded-md font-semibold"
                >
                Submit
                </button>
            </div>

            {/* Sign In */}
            <div className="col-span-1 md:col-span-3 text-center">
                <span className=" text-gray-700">
                Have an account?{" "}
                <span className="text-[#0b2f55] font-semibold cursor-pointer hover:underline">
                    SignIn
                </span>
                </span>
            </div>
            </form>
        </div>
        </div>
    </>
  )
}

export default Register