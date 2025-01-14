//OUR CERAMICS PAGE
import Image from 'next/image'
import React from 'react'
import "../../public/images/DendyChair.jpg"
import "../../public/images/Rustic.jpg"
import "../../public/images/Lamp.jpg"
import "../../public/images/Silky.jpg"

const Ceramics = () => {
  return (
    <>
      <section>
        <div className="px-4 mt-0 md:px-8 py-12 text-[#2A254B]">
          {/* Title */}
          <h1 className="text-2xl font-semibold text-center">New Ceramics</h1>

          {/* Product Items */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {/* Product 1 */}
            <div className="w-full h-auto flex flex-col items-center">
              <Image
                src={'/images/DendyChair.jpg'}
                height={700}
                width={700}
                alt="chair"
                className="w-full h-[80%] object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1 rounded-lg"
              />
              <div className="mt-4 text-center text-[#2A254B]">
                <p className="py-2 font-medium">The Dendy Chair</p>
                <p className="font-semibold">$250</p>
              </div>
            </div>

            {/* Product 2 */}
            <div className="w-full h-auto flex flex-col items-center">
              <Image
                src={'/images/Rustic.jpg'}
                height={700}
                width={700}
                alt="vase"
                className="w-full h-[80%] object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1 rounded-lg"
              />
              <div className="mt-4 text-center text-[#2A254B]">
                <p className="py-2 font-medium">Rustic Vase Set</p>
                <p className="font-semibold">$155</p>
              </div>
            </div>

            {/* Product 3 */}
            <div className="w-full h-auto flex flex-col items-center">
              <Image
                src={'/images/Silky.jpg'}
                height={700}
                width={700}
                alt="silky vase"
                className="w-full h-[80%] object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1 rounded-lg"
              />
              <div className="mt-4 text-center text-[#2A254B]">
                <p className="py-2 font-medium">The Silky Vase</p>
                <p className="font-semibold">$125</p>
              </div>
            </div>

            {/* Product 4 */}
            <div className="w-full h-auto flex flex-col items-center">
              <Image
                src={'/images/Lamp.jpg'}
                height={700}
                width={700}
                alt="lamp"
                className="w-full h-[80%] object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1 rounded-lg"
              />
              <div className="mt-4 text-center text-[#2A254B]">
                <p className="py-2 font-medium">The Lucky Lamp</p>
                <p className="font-semibold">$399</p>
              </div>
            </div>
          </div>

          {/* View Collection Button */}
          <div className="my-10 flex justify-center">
            <button className="bg-[#F9F9F9] py-3 px-6 rounded-md text-[#2A254B] hover:bg-[#ececec] transition duration-300">
              View collection
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Ceramics;
