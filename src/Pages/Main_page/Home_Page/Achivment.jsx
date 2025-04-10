import React from 'react'
import Background from '../../../utils/Home_images/Achivment_image/Background.png'
const Achivment = ({data}) => {
  return (
    <div className="relative bg-white rounded-xl shadow-md p-4 w-[220px] h-[220px] flex flex-col items-center justify-center">
      {/* Main Icon */}
      <img src={data.img} alt="icon" className="h-[80px] mb-4 " />

      {/* Data */}
      <h3 className="text-2xl font-semibold text-center ">{data.Data}</h3>

      {/* Meta Data */}
      <p className="text-2xl font-semibold text-center ">{data.Meta_data}</p>

      {/* Airplane Background Icon */}
      <img
        src={Background}
        alt="airplane"
        className="absolute bottom-0 right-0 w-[125px] z-40"
      />
    </div>
  )
}

export default Achivment