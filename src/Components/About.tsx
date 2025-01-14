<<<<<<< HEAD
import Image from "next/image";
import Link from "next/link";
import React from "react";
import "../../public/images/About second.jpg";
import Features from "./Features";
import Join from "./Join";
=======
//ABOUT PAGE
import React from "react";
import "../../public/images/About main.jpg"
import "../../public/images/About second.jpg"
>>>>>>> 4a9e0321b0ce98b0cf7d9797003af9b4425c0ac9

const About = () => {
  return (
    <div>
<<<<<<< HEAD
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
=======
      <div className="w-full h-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-16 py-8">
        <div className="md:w-2/4 text-xl md:text-2xl text-center md:text-left text-custom-purple">
          A brand built on the love of craftsmanship, quality, and outstanding customer service
        </div>
        <div className="mt-6 md:mt-0">
          <button className="bg-gray-200 h-12 w-40 rounded-sm text-custom-purple">
            View our products
          </button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full h-auto items-center justify-around px-4 py-16">
        <div className="bg-custom-purple w-full md:w-2/5 text-white p-8 md:p-16 mb-8 md:mb-0">
          <h1 className="text-xl md:text-2xl">It started with a small idea</h1>
          <p className="mt-6">
            A global brand with local beginnings, our story began in a small studio in South London in early 2014.
          </p>
          <button className="bg-input-bg h-12 w-40 rounded-sm mt-10 text-white">
            View Collection
          </button>
        </div>
        <div className="w-full md:w-2/5">
          <img
            src="/images/About main.jpg"
            alt="About main"
            className="w-full transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
          />
        </div>
      </div>

      {/* Service Section */}
      <div className="flex flex-col md:flex-row w-full h-auto items-center px-4 py-16 space-y-8 md:space-y-0">
        <img
          src="/images/About second.jpg"
          alt="Service"
          className="w-full md:w-2/5 transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
        />
        <div className="border-2 bg-slate-200 w-full md:w-3/5 p-8 md:p-20">
          <h1 className="text-xl md:text-2xl text-custom-purple">
            Our service isn&lsquo;t just personal, it&lsquo;s actually hyper-personally exquisite
          </h1>
          <p className="text-custom-purple mt-6">
            When we started Avion, the idea was simple. Make high-quality furniture affordable and available for the
            mass market. Handmade, and lovingly crafted furniture and homeware is what we live, breathe, and design so
            our Chelsea boutique became the hotbed for the London interior design community.
          </p>
          <button className="bg-white h-12 w-40 rounded-sm mt-10 text-custom-purple">Get in Touch</button>
>>>>>>> 4a9e0321b0ce98b0cf7d9797003af9b4425c0ac9
        </div>
      </div>

      {/* Features Section */}
<<<<<<< HEAD
      <div className="max-w-[1250px] mx-auto">
        <Features />
      </div>

      {/* Join Section */}
      <div className="w-full h-auto bg-gray-100 py-8">
        <Join />
=======
      <div className="w-full h-auto pb-16">
        <h1 className="text-center text-custom-purple text-xl">What makes our brand different</h1>
        <div className="flex flex-wrap justify-center md:justify-evenly px-4 py-10 gap-8">
          {[
            {
              img: "/images/Delivery.png",
              title: "Next day as standard",
              desc: "Order before 3pm and get your order the next day as standard",
            },
            {
              img: "/images/check.png",
              title: "Made by true artisans",
              desc: "Handmade crafted goods made with real passion and craftsmanship",
            },
            {
              img: "/images/Purchase.png",
              title: "Unbeatable prices",
              desc: "For our materials and quality you won’t find better prices anywhere",
            },
            {
              img: "/images/Sprout.png",
              title: "Recycled packaging",
              desc: "We use 100% recycled materials to ensure our footprint is more manageable",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gray-200 w-72 h-auto rounded-sm px-6 py-8 text-center"
            >
              <img
                src={item.img}
                alt={item.title}
                className="mx-auto transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
              />
              <h1 className="text-custom-purple text-lg mt-4">{item.title}</h1>
              <p className="text-custom-purple mt-4">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="w-full h-auto bg-gray-100 py-8">
        <div className="m-auto w-11/12 bg-white p-8 md:p-16">
          <h1 className="text-custom-purple text-2xl md:text-3xl text-center">Join the club and get the benefits</h1>
          <p className="text-custom-purple text-center mt-6 text-sm md:text-base">
            Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop-up stores, and more.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center mt-6 space-y-4 md:space-y-0">
            <input
              type="text"
              placeholder="you@gmail.com"
              className="bg-gray-100 w-80 h-12 p-5 rounded-sm"
            />
            <button className="bg-custom-purple h-12 w-32 rounded-sm text-white">Sign Up</button>
          </div>
        </div>
>>>>>>> 4a9e0321b0ce98b0cf7d9797003af9b4425c0ac9
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default About;
=======
export default About;
>>>>>>> 4a9e0321b0ce98b0cf7d9797003af9b4425c0ac9
