import Image from "next/image";
import Link from "next/link";
import React from "react";
import "../../public/images/About second.jpg";
import Features from "./Features";
import Join from "./Join";

const About = () => {
  return (
    <div>
      {/* Section 1 */}
      <div className="w-full h-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-16 py-8">
        <div className="md:w-2/4 text-center md:text-left">
          <p className="text-xl md:text-2xl">
            A brand built on the love of craftsmanship,
          </p>
          <p className="text-xl md:text-2xl text-custom-purple mt-2">
            quality, and outstanding customer service
          </p>
        </div>

        {/* Button Section */}
        <Link href="/products">
          <button className="bg-gray-400 border border-b-gray-600 h-12 w-40 rounded-sm text-custom-purple">
            View our products
          </button>
        </Link>
      </div>

      {/* Section 2 */}
      <div className="flex flex-col w-full h-auto px-4 md:px-16 py-8 md:py-16 space-y-8 md:space-y-0 md:flex-row items-center">
        {/* Text and Button Section */}
        <div className="w-full md:w-1/2 text-white p-8 bg-[#2A254B] transition-transform duration-300 ease-in-out hover:scale-95 mb-8 md:mb-0">
          <h1 className="text-xl md:text-2xl clashDisplay text-center md:text-left">
            It started with a small idea
          </h1>
          <p className="mt-6 satoshi md:text-[18px] text-center md:text-left">
            A global brand with local beginnings, our story began in a small
            studio in South London in early 2014.
          </p>
          <div className="flex justify-center md:justify-start mt-8">
            <Link href="/products">
              <button className="bg-gray-400 border border-b-gray-600 h-12 w-40 rounded-sm text-black">
                View Collection
              </button>
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 mt-4 md:mt-0">
          <Image
            height={400}
            width={400}
            src="/images/image1.jpg"
            alt="About main"
            className="w-full"
          />
        </div>
      </div>

      {/* Section 3 */}
      <div className="flex flex-col w-full h-auto px-4 md:px-16 py-8 md:py-16 space-y-8 md:space-y-0 md:flex-row items-center">
        {/* Image Section */}
        <div className="w-full md:w-2/5">
          <Image
            width={400}
            height={400}
            src="/images/About second.jpg"
            alt="Service"
            className="w-full transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
          />
        </div>

        {/* Text Section */}
        <div className="border-2 bg-gray-100 w-full md:w-3/5 p-8 md:p-20">
          <h1 className="text-xl md:text-2xl text-custom-purple">
            Our service isn’t just personal, it’s actually hyper-personally exquisite
          </h1>
          <p className="text-custom-purple mt-6">
            When we started Avion, the idea was simple. Make high-quality furniture affordable and available for the
            mass market.
          </p>
          <p className="text-custom-purple mt-6">
            Handmade, and lovingly crafted furniture and homeware is what we live, breathe, and design so our Chelsea
            boutique became the hotbed for the London interior design community.
          </p>
          <button className="bg-white h-12 w-40 rounded-sm mt-10 text-custom-purple">
            Get in Touch
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-[1250px] mx-auto">
        <Features />
      </div>

      {/* Join Section */}
      <div className="w-full h-auto bg-gray-100 py-8">
        <Join />
       </div>
       </div>
  );
};

export default About;
