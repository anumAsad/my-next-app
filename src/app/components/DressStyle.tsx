import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const DressStyle = () => {
    return (
        <div className="flex flex-col items-center justify-center py-10 bg-gray-100">
          <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            BROWSE BY DRESS STYLE
          </h1>
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-screen-lg px-4 md:px-0"> */}
            <div className='flex gap-5'>
            {/* Casual */}
            <div className="relative group">
              <Image
                src="/casual.png"
                alt="Casual"
                width={407}
                height={289}
                className="w-full h-48 md:h-64 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <span className="text-white font-semibold text-lg md:text-xl">
                  <Link href="/product">Casual</Link>
                </span>
              </div>
            </div>
    
            {/* Formal */}
            <div className="relative group">
              <img
                src="/formal.png"
                alt="Formal"
                width={684}
                height={289}
                className="w-full h-48 md:h-64 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <span className="text-white font-semibold text-lg md:text-xl">
                  Formal
                </span>
              </div>
            </div>
            </div>

            <div className='flex gap-5 mt-5'>
            {/* Party */}
            <div className="relative group">
              <img
                src="/party.png"
                alt="Party"
                width={684}
                height={289}
                className="w-full h-48 md:h-64 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <span className="text-white font-semibold text-lg md:text-xl">
                  Party
                </span>
              </div>
            </div>
    
            {/* Gym */}
            <div className="relative group">
              <img
                src="/gym.png"
                alt="Gym"
                width={409}
                height={289}
                className="w-full h-48 md:h-64 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <span className="text-white font-semibold text-lg md:text-xl">
                  Gym
                </span>
              </div>
            </div>
            </div>
          
        </div>
      );
    }
 

export default DressStyle
    
  