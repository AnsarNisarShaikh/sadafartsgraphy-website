import Image from 'next/image'
import React from 'react'

const Card = ({ title, des, src }) => {
  return (
    <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-xl flex flex-col bg-gradient-to-tr from-white  to-[#d9c4b8] group hover:bg-gradient-to-b hover:from-primary hover:primary transition-colors duration-1000">
      <div className="relative w-full h-[80%] overflow-hidden rounded-lg">
        <Image
          className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
          src={src}
          fill
          priority   // 🚀 ensures it loads immediately
          // quality={90}
          alt={title}
        />
      </div>
      <div className="w-full mt-5 flex flex-col  gap-6">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-base uppercase text-secondary font-semibold">
              {title}
            </h3>

          </div>
          <p className="text-sm tracking-wide mt-3  duration-300">
            {des}
          </p>
          <button className='btn btn-primary py-2 px-4 mt-3'>View More</button>
        </div>
      </div>
    </div>
  )
}

export default Card