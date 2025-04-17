import React, { useState } from "react";
import Header from './Header'
import Footer from './Footer'
import Tracker from './Components/Tracker'
import { FaArrowLeft, FaArrowRight, FaLightbulb } from "react-icons/fa";

const data = {
  "Schengen Visa (Short Stay Visa)": {
    "Business visa": ["India", "Germany", "France"],
    "Tourist visa": ["Italy", "Spain", "Portugal"]
  },
  "US Visa": {
    "Student visa": ["India", "Bangladesh"],
    "Work visa": ["UK", "Canada"]
  }
};
const VisaCategory = () => {
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [country, setCountry] = useState("");

  const visaTypes = category ? Object.keys(data[category]) : [];
  const countryOptions = category && type ? data[category][type] : [];
  return (
    <>
        <Header/>
          <Tracker currentStep={2} />
          <div className="bg-[#F6F9FB] flex items-center justify-center">
          <div className="flex gap-7 items-start max-w-6xl w-full pb-10">
            {/* Left Form Box */}
            <div className="bg-white shadow-lg rounded-md p-6 w-3/4">
              <h2 className="text-2xl font-medium mb-4">Select Visa Category</h2>
              <hr className="mb-6 border-gray-300" />

              <div className="grid grid-cols-2 gap-6 mb-6 text-[#333333]">
                <div>
                  <label className="block mb-1 text-[#11375C] font-medium">
                    Select Category <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={category}
                    onChange={(e) => {
                      setCategory(e.target.value);
                      setType("");
                      setCountry("");
                    }}
                    className="w-full border border-[#2D3C8A] px-3 py-2 rounded-md"
                  >
                    <option value="">-- Select Category --</option>
                    {Object.keys(data).map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block mb-1 text-[#11375C] font-medium">
                    Select type <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={type}
                    onChange={(e) => {
                      setType(e.target.value);
                      setCountry("");
                    }}
                    disabled={!category}
                    className="w-full border border-[#2D3C8A] px-3 py-2 rounded-md disabled:opacity-50"
                  >
                    <option value="">-- Select Type --</option>
                    {visaTypes.map((vt) => (
                      <option key={vt} value={vt}>
                        {vt}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-6">
                  <label className="block mb-1 text-[#11375C] font-medium">
                    Select Country <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    disabled={!type}
                    className="w-full border border-[#2D3C8A] px-3 py-2 rounded-md disabled:opacity-50"
                  >
                    <option value="">-- Select Country --</option>
                    {countryOptions.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex justify-between">
                <button className="bg-[#073B69] text-white px-4 py-2 rounded flex items-center gap-2">
                  <FaArrowLeft />
                  Back
                </button>
                <button
                  className="bg-[#BD9900] text-white px-4 py-2 rounded flex items-center gap-2"
                  disabled={!category || !type || !country}
                >
                Next <FaArrowRight />
                </button>
              </div>
            </div>

            {/* Right Quick Tips */}
            <div className="bg-[#FFFAEA] border border-yellow-400 p-3 h-64 px-4 w-1/4">
              <div className="flex items-center text-xl gap-2 font-semibold text-[#BB940C] mb-2 ">
                <span><FaLightbulb /></span>
                <span>Quick tips</span>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                Please ensure that the fields you have declared are correct. All the information and documents that you
                provide will be used in verifying your request and your Visa issuance.
              </p>
            </div>
          </div>
        </div>
        <Footer/>
    </>
  )
}

export default VisaCategory