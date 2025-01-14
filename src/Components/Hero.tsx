import Image from 'next/image';
import React from 'react';
import "../../public/images/DendyChair.jpg"

const Hero = () => {
  return (
    <section>
      <div className="px-8 py-12">
        <div className="flex flex-col md:flex-row font-[Clash Display]">
          <div className="w-full md:w-[60%] h-auto md:h-[580px] border border-black bg-[#2A254B] text-white px-4 md:px-12 py-6 md:py-12 flex flex-col justify-between shadow-lg">
            <div>
              <h1 className="text-xl md:text-3xl mt-0">
                The furniture brand for the future with <br /> the timeless designs
              </h1>
              <div className="flex justify-center md:justify-start mt-4">
                <button className="w-[170px] h-[56px] bg-gray-600 text-white border border-gray-600 font-bold hover:bg-gray-600 hover:text-white transition duration-300">
                  View collection
                </button>
              </div>
            </div>
            <div className="my-4 md:my-0">
              <p className="text-sm md:text-base">
                A new era in eco-friendly furniture with Avion, the French luxury retail brand
                <br /> with sleek fonts, full colors, and a beautiful way to display things digitally
                <br /> using modern web technologies.
              </p>
            </div>
          </div>

          <div className="w-full md:w-[60%] h-auto md:h-[580px] flex items-center justify-center">
            <Image
              src="/images/DendyChair.jpg"
              alt="Hero pics"
              width={300}
              height={580}
              className="w-full h-full shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
