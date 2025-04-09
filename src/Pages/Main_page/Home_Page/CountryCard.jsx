import React from 'react'

const CountryCard = ({visa}) => {
  return (
    <div
        key={visa.id}
        className="w-[380px] h-[400px] bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden"
        >
        <div className="relative">
            <img
            src={visa.image}
            alt={visa.name}
            className="w-full h-[300px] object-center"
            />
            <span className="absolute right-0 top-0 w-[176px] h-[29px]  bg-[#00B67A] text-white text-sm font-semibold px-[7px] py-[4px]">
            {visa.processed}
            </span>
        </div>
        <div className="px-[20px] pt-[10px]">
            <h3 className="text-3xl font-semibold text-gray-900 mb-[7px]">
            {visa.name}
            </h3>
            <p className="font-medium">
            Maximum stay: {visa.stay}
            </p>
        </div>
    </div>
  )
}

export default CountryCard