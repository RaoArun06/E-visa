import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Select_country_bg from '../../../utils/Select_country_bg.png'
import { flag_url } from '../../../utils/constants'
import { useState } from 'react'
const passportOptions = [
  { label: "United States America", value: "us" },
  { label: "India", value: "in"},
  { label: "Canada", value: "ca"},
];

const travelOptions = [
  { label: "Azerbaijan", value: "az"},
  { label: "Egypt", value: "eg"},
  { label: "Turkey", value: "tr" },
];
const Home = () => {
  const [selected_Passport, setSelected_Passport] = useState(passportOptions[0]);
  const [selected_Traveling, setSelected_Traveling] = useState(travelOptions[0]);
  const [isOpen_Passport, setIsOpen_passport] = useState(false);
  const [isOpen_Traveling, setIsOpen_Traveling] = useState(false);

  const handleSelect_Passport = (option) => {
    setSelected_Passport(option);
    setIsOpen_passport(false);
  };
  const handleSelect_Traveling = (option) => {
    setSelected_Traveling(option);
    setIsOpen_Traveling(false);
  };
  return (
    <div>
        <Header/>
        <div>
          {/* country selection section */}
          <section
            className="relative h-[120rem] max-h-[500px] bg-no-repeat  bg-cover bg-left py-36 px-28 "
            style={{ backgroundImage: `url(${Select_country_bg})` }}
          >
            <div className="w-full">
              <h1 className="text-white text-5xl font-bold leading-tight mb-9">
                Get Your e-Visa on Time
              </h1>

              <div className="bg-white rounded-xl flex md:flex-row items-end  justify-between gap-4 p-5 max-w-3xl">
                {/* Passport From */}
                <div className="relative w-full md:w-[260px]">
                  <label className=" text-gray-800 font-medium mb-2 block">
                    Passport from:
                  </label>
                  <button
                    onClick={() => setIsOpen_passport(!isOpen_Passport)}
                    className="border border-gray-300 text-gray-700 rounded-md flex justify-between items-center px-4 py-2.5 h-12 w-64"
                  >
                    <div className="flex items-center">
                      <img
                        src={`https://flagcdn.com/${selected_Passport.value}.svg`}
                        alt={selected_Passport.label}
                        className="w-5 h-5 mr-2"
                      />
                      <span>{selected_Passport.label}</span>
                    </div>
                    <span>{isOpen_Passport ? '▲' : '▼'}</span>
                  </button>

                  {isOpen_Passport && (
                    <div className="absolute left-0 right-0 bg-white border mt-1 z-10 rounded-md shadow-lg text-gray-700">
                      {passportOptions.map((option) => (
                        <div
                          key={option.value}
                          onClick={() => handleSelect_Passport(option) }
                          className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        >
                          <img
                            src={`https://flagcdn.com/${option.value}.svg`}
                            alt={option.label}
                            className="w-5 h-5 mr-2"
                          />
                          {option.label}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Traveling To */}
                <div className="relative w-full md:w-[260px]">
                  <label className=" text-gray-800 font-medium mb-2 block">
                    Traveling to:
                  </label>
                  <button
                    onClick={() => setIsOpen_Traveling(!isOpen_Traveling)}
                    className="border border-gray-300 text-gray-700 rounded-md flex justify-between items-center px-4 py-2.5 h-12 w-64"
                  >
                    <div className="flex items-center">
                      <img
                        src={`https://flagcdn.com/${selected_Traveling.value}.svg`}
                        alt={selected_Traveling.label}
                        className="w-5 h-5 mr-2"
                      />
                      <span>{selected_Traveling.label}</span>
                    </div>
                    <span>{isOpen_Traveling ? '▲' : '▼'}</span>
                  </button>

                  {isOpen_Traveling && (
                    <div className="absolute left-0 right-0 bg-white border mt-1 z-10 rounded-md shadow-lg text-gray-700">
                      {travelOptions.map((option) => (
                        <div
                          key={option.value}
                          onClick={() => handleSelect_Traveling(option) }
                          className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        >
                          <img
                            src={`https://flagcdn.com/${option.value}.svg`}
                            alt={option.label}
                            className="w-5 h-5 mr-2"
                          />
                          {option.label}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Button */}
                <button className="bg-[#BB940C] text-white font-semibold px-6 py-2.5 rounded-md h-12 end-0">
                  Get Started →
                </button>
              </div>
            </div>
          </section>
          {/* Country card section */}
          <div>

          </div>
          {/* Why bls international section */}
          <div>

          </div>
        </div>

        <Footer/>
    </div>
  )
}

export default Home