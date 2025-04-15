import React, { useState } from "react";
import { FaUsers } from "react-icons/fa";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { FiHelpCircle } from "react-icons/fi";
import { BsFillCalendar2DateFill } from "react-icons/bs";
import { IoChevronDownOutline } from "react-icons/io5";
import Header from '../Header'
import Footer from '../Footer'
import Azerbaijan from '../../../utils/Country_Page_images/Azerbaijan.png'
import { TbBrandVisa } from "react-icons/tb";
import { MdTimer } from "react-icons/md";
import { IoCalendarClearSharp } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import { AiOutlineDown } from "react-icons/ai";
const visaOptions = {
    business: {
      type: "Business visa",
      processing: "1 week",
      validity: "3 month",
      stay: "30 days",
      entries: "Single",
      fees: {
        visa: "100 USD",
        service: "20 USD",
        total: "120 USD",
      },
    },
    tourist: {
      type: "Tourist visa",
      processing: "5 days",
      validity: "1 month",
      stay: "15 days",
      entries: "Single",
      fees: {
        visa: "80 USD",
        service: "20 USD",
        total: "100 USD",
      },
    },
    study: {
        type: "study visa",
        processing: "3 days",
        validity: "2 years",
        stay: "1 year",
        entries: "Single",
        fees: {
          visa: "60 USD",
          service: "20 USD",
          total: "80 USD",
        },
      },
  };


const faqs = [
{
    question: "Do Indians need a visa for Azerbaijan?",
    answer:
    " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',.",
},
{
    question: "What does an Azerbaijan e-visa look like?",
    answer: " Sample e-visa will be shown here or described appropriately.",
},
{
    question: "Can I use the Azerbaijan e-visa for transit purposes?",
    answer: " Yes, you can use the e-visa for transit depending on your itinerary.",
},
];
  
const Country = () => {
    const [visaType, setVisaType] = useState("business");
    const [travellers, setTravellers] = useState(1);
    const visa = visaOptions[visaType];
    const [openIndex, setOpenIndex] = useState(0);

    const toggleFAQ = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };
  return (
    <>
      <Header/>
      <div className='h-[400px]'>
            <img src={Azerbaijan} className='w-full h-full object-cover'/>
      </div>

      {/* visa type selection section */}
      <div className="flex flex-col lg:flex-row justify-between py-10 px-24 bg-white">
        {/* Left Section */}
        <div className="max-w-[700px] w-auto">
          <h2 className="text-2xl font-semibold mb-5">Azerbaijan e-Visa</h2>

          <div className="relative w-full max-w-[400px] mb-6">
          <select
              value={visaType}
              onChange={(e) => setVisaType(e.target.value)}
              className="appearance-none w-full border border-[#CCCCCC] rounded-lg px-4 py-3 text-[#333333]"
          >
              <option value="business">Azerbaijan Business e-visa</option>
              <option value="tourist">Azerbaijan Tourist e-visa</option>
          </select>
          <IoChevronDownOutline
              className="absolute top-1/2 right-4 transform -translate-y-1/2 text-[#ACA2A2] pointer-events-none"
              size={20}
          />
          </div>

          <div className="flex flex-wrap gap-3 mb-14">
          {/* Visa Type */}
          <div className="flex items-center gap-2  h-12 rounded-lg max-w-52 w-full sm:w-[calc(50%-0.5rem)]">
              <span className="bg-[#FFDFDF] flex justify-center items-center rounded-sm h-10 w-10  text-xl"><TbBrandVisa /></span>
              <div>
              <p className="font-medium flex items-center gap-1">
                  Visa Type: <FiHelpCircle className="text-gray-400" />
              </p>
              <p className=" ">{visa.type}</p>
              </div>
          </div>

          {/* Processing Time */}
          <div className="flex items-center gap-2  h-12 rounded-lg max-w-52 w-full sm:w-[calc(50%-0.5rem)]">
              <span className="bg-[#DFFFF9] flex justify-center items-center rounded-sm h-10 w-10  text-xl"><MdTimer />
              </span>
              <div>
              <p className="font-medium flex items-center gap-1">
                  Processing time: <FiHelpCircle className="text-gray-400" />
              </p>
              <p className=" ">{visa.processing}</p>
              </div>
          </div>

          {/* Number of Entries */}
          <div className="flex items-center gap-2  h-12 rounded-lg max-w-52 w-full sm:w-[calc(50%-0.5rem)]">
              <span className="bg-[#FFDFDF] flex justify-center items-center rounded-sm h-10 w-10  text-xl"><IoCalendarClearSharp /></span>
              <div>
              <p className="font-medium flex items-center gap-1">
                  Number of entries: <FiHelpCircle className="text-gray-400" />
              </p>
              <p className=" ">{visa.entries}</p>
              </div>
          </div>

          {/* Validity */}
          <div className="flex items-center gap-2  h-12 rounded-lg max-w-52 w-full sm:w-[calc(50%-0.5rem)]">
              <span className="bg-[#DFEDFF] flex justify-center items-center rounded-sm h-10 w-10  text-xl"><IoCalendarClearSharp /></span>
              <div>
              <p className="font-medium flex items-center gap-1">
                  Validity: <FiHelpCircle className="text-gray-400" />
              </p>
              <p className=" ">{visa.validity}</p>
              </div>
          </div>

          {/* Stay Duration */}
          <div className="flex items-center gap-2  h-12 rounded-lg max-w-52 w-full sm:w-[calc(50%-0.5rem)]">
              <span className="bg-[#F0DFFF] flex justify-center items-center rounded-sm h-10 w-10  text-xl"><IoCalendarClearSharp /></span>
              <div>
              <p className="font-medium flex items-center gap-1">
                  You may stay for <FiHelpCircle className="text-gray-400" />
              </p>
              <p className=" ">{visa.stay}</p>
              </div>
          </div>

          
          </div>

          <div className="bg-white  flex flex-col gap-5">
          {/* Heading and Description */}
          <div>
            <h2 className="text-2xl font-semibold mb-3">Azerbaijan Visa</h2>
            <p className="text-lg">
              BLS International team of experts can assist you with getting your India visa whether you’re just looking for an escape to Agra or need to arrange a meeting with important business clients. Applying for an Indian visa online gives travelers 30 days in the country, and you don’t even have to hand over your passport. Just print the e-visa confirmation and have it ready at immigration when you arrive. Flying to India has never been easier now that the government accepts applications for these visas online.
            </p>
          </div>

          {/* Requirements Section */}
          <div className="mb-4">
            <h3 className="text-2xl font-semibold mb-3">
              Azerbaijan Visa Requirements for U.S. Citizens
            </h3>
            <p className="leading-relaxed text-lg mb-4">
              U.S. citizens can easily get an Indian e-Visa. They need to fulfill some requirements. An Indian e-Visa for U.S. citizens will permit them a stay up to 2 months from the first day of entry into the Nation. You can get this India visa only 2 times a year and it cannot be expanded. The documents and requirements are written below.
            </p>

            {/* Checklist */}
            <ul className="space-y-3 text-lg">
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-teal-500 mt-1 h-[25px] w-[25px]" />
                <span>A passport that should be valid for at least six months from the date of arrival</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-teal-500 mt-1 h-[25px] w-[25px]" />
                <span>A debit card or credit card to pay the India Visa fees</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-teal-500 mt-1 h-[25px] w-[25px]" />
                <span>Email Address to get the electronic Azerbaijan visa</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Frequently Asked Questions */}
        <div className="pt-7">
          <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-md overflow-hidden"
              >
                <button
                  className="w-full flex justify-between items-center h-[50px] bg-[#F2F6FF] px-4 py-3 text-left font-medium"
                  onClick={() => toggleFAQ(index)}
                >
                  {faq.question}
                  <AiOutlineDown
                    className={`transition-transform duration-200 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-4 py-3 rounded-b-md bg-white border border-[#DAE3F9]">
                    <span className="font-semibold">Ans:</span>{faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        </div>

        {/* Right Section (Fees Card) */}
        <div className="w-[400px] h-[280px] shadow-[0_0_10px_rgba(0,0,0,0.25)] rounded-2xl p-6 text-[#333333] sticky top-28 z-40">
            <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3 font-semibold text-xl ">
                <FaUsers className="text-[#575757] text-2xl"/>
                <span>Travellers</span>
            </div>
            <div className="flex items-center gap-3">
                <button
                onClick={() => setTravellers(Math.max(1, travellers - 1))}
                className="border border-gray-300 rounded-full p-1 text-gray-600 hover:bg-gray-100"
                >
                <AiOutlineMinus />
                </button>
                <span className="font-semibold">{travellers}</span>
                <button
                onClick={() => setTravellers(travellers + 1)}
                className="border border-gray-300 rounded-full p-1 text-gray-600 hover:bg-gray-100"
                >
                <AiOutlinePlus />
                </button>
            </div>
            </div>

            <div className="border-t border-b divide-y divide-gray-200">
            <div className="flex justify-between py-2">
                <span>{visa.type} Fees :</span>
                <span>{visa.fees.visa}</span>
            </div>
            <div className="flex justify-between py-2">
                <span>BLS Services Fees :</span>
                <span>{visa.fees.service}</span>
            </div>
            <div className="flex justify-between py-2 font-semibold">
                <span>Total Fees :</span>
                <span>{visa.fees.total}</span>
            </div>
            </div>

            <button className="mt-5 w-full bg-[#BB940C] hover:bg-yellow-700 text-white font-medium py-3 rounded-lg flex items-center justify-center gap-2 transition">
            Start Application <span>→</span>
            </button>
        </div>
        </div>
        
        
      <Footer/>
    </>
  )
}

export default Country