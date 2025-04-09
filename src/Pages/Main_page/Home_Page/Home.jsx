import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Select_country_bg from '../../../utils/Home_images/Select_country_bg.png'
import Girl from '../../../utils/Home_images/Girl.png'
import Circle from '../../../utils/Home_images/Circle.png'
import { flag_url } from '../../../utils/constants.js'
import { useState } from 'react'
import CountryCard from './CountryCard'
import India from '../../../utils/Country_Card_Images/India.png'
import Egypt from '../../../utils/Country_Card_Images/Egypt.png'
import Azerbaijan from '../../../utils/Country_Card_Images/Azerbaijan.png'
import Achivment from './Achivment.jsx'
import qualified from '../../../utils/Home_images/Achivment_image/qualified.png'
import cyber_security from '../../../utils/Home_images/Achivment_image/cyber_security.png'
import customer_support from '../../../utils/Home_images/Achivment_image/customer_support.png'
import customer_support1 from '../../../utils/Home_images/Achivment_image/customer_support1.png'

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
const visaData = [
  {
    id: 1,
    name: "Egyptian e-Visa",
    image: Egypt,
    stay: "30 days",
    processed: "1000+ Processed Visas",
  },
  {
    id: 2,
    name: "Indian e-Visa",
    image: India,
    stay: "45 days",
    processed: "1340+ Processed Visas",
  },
  {
    id: 3,
    name: "Azerbaijani e-Visa",
    image: Azerbaijan,
    stay: "60 days",
    processed: "800+ Processed Visas",
  },
  {
    id: 4,
    name: "Thai e-Visa",
    image:Egypt,
    stay: "30 days",
    processed: "1200+ Processed Visas",
  },
  {
    id: 5,
    name: "Vietnamese e-Visa",
    image:Egypt,
    stay: "45 days",
    processed: "900+ Processed Visas",
  },
];
const Achivment_data =[
  {id:1, img:qualified,Data:"19+ year",Meta_data:"exprience"},
  {id:2, img:customer_support,Data:"99% e-visa",Meta_data:"Sucess Ratio"},
  {id:3, img:customer_support1,Data:"24*7",Meta_data:"Customer Support"},
  {id:4, img:cyber_security,Data:"24*7",Meta_data:"Cyber Security"},
];
const Home = () => {
  const [selected_Passport, setSelected_Passport] = useState(passportOptions[0]);
  const [selected_Traveling, setSelected_Traveling] = useState(travelOptions[0]);
  const [isOpen_Passport, setIsOpen_passport] = useState(false);
  const [isOpen_Traveling, setIsOpen_Traveling] = useState(false);

  const [showAll, setShowAll] = useState(false);
  const visibleVisas = showAll ? visaData : visaData.slice(0, 3);

  const handleSelect_Passport = (option) => {
    setSelected_Passport(option);
    setIsOpen_passport(false);
  };
  const handleSelect_Traveling = (option) => {
    setSelected_Traveling(option);
    setIsOpen_Traveling(false);
  };
  return (
<>
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
                        src={`${flag_url}${selected_Passport.value}.svg`}
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
                        src={`${flag_url}${selected_Traveling.value}.svg`}
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
          <section className="py-[50px] px-[75px] bg-white">
            <div className="max-w-7xl mx-auto">
              <div className="flex gap-[30px] flex-wrap">
                {visibleVisas.map((visa) => (
                  <CountryCard visa={visa}/>
                ))}
              </div>

              <div className="text-center mt-[30px]">
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="bg-[#00B67A] w-[200px] h-[45px] text-white font-medium rounded hover:bg-green-700 transition"
                >
                  {showAll ? "Hide Visas" : "View All Visas"}
                </button>
              </div>
            </div>
          </section>


          {/* Why bls international section */}
          <section className='flex h-[720px] bg-[#F4F6F7] px-[120px] py-[70px] gap-[170px]'>
            <div>
              <div className='flex relative h-[500px] w-[430px]'>
                <div>
                  <img src={Girl}/>
                </div>
                <div className='absolute bottom-0 -right-[140px] z-40 h-[200px]'>
                  <img src={Circle}/>
                </div>
              </div>
              <div className='mt-[20px] h-[60px] w-[460px] text-4xl scale-x-125 origin-left flex items-center font-semibold'>
                Why BLS International ?
              </div>
            </div>
            <div className='h-auto flex flex-wrap gap-[40px]'>
              {Achivment_data.map((temp)=>(
                  <Achivment data={temp}/>
              ))}
            </div>
          </section>


        </div>

        <Footer/>
        </>
  )
}

export default Home