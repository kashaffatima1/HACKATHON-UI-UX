//FOOTER PAGE
import React from 'react';
import { FaFacebook, FaLinkedin, FaInstagram, FaSkype, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-[#2A254B] text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="flex flex-col mb-8 md:mb-0 md:mr-16">
            <h1 className="text-lg font-ClashDisplay mb-4">Menu</h1>
            <p className="mb-4 text-sm">New arrivals</p>
            <p className="mb-4 text-sm">Best seller</p>
            <p className="mb-4 text-sm">Recently Viewed</p>
            <p className="mb-4 text-sm">Popular this week</p>
            <p className="mb-4 text-sm">All Products</p>
          </div>
          <div className="flex flex-col mb-8 md:mb-0 md:mr-16">
            <h1 className="text-lg font-ClashDisplay mb-4">Category</h1>
            <p className="mb-4 text-sm">Crockery</p>
            <p className="mb-4 text-sm">Furniture</p>
            <p className="mb-4 text-sm">Homeware</p>
            <p className="mb-4 text-sm">Plant pots</p>
            <p className="mb-4 text-sm">Chair</p>
          </div>
          <div className="flex flex-col mb-8 md:mb-0 md:mr-16">
            <h1 className="text-lg font-ClashDisplay mb-4">Our Company</h1>
            <p className="mb-4 text-sm">About Us</p>
            <p className="mb-4 text-sm">Vacancies</p>
            <p className="mb-4 text-sm">Contact Us</p>
            <p className="mb-4 text-sm">Privacy</p>
            <p className="mb-4 text-sm">Return Policy</p>
          </div>
          <div className="flex flex-col mb-8 md:mb-0">
            <h1 className="text-lg font-ClashDisplay mb-4">Join our mailing list</h1>
            <div className="flex mt-4">
              <input
                type="text"
                placeholder="you@gmail.com"
                className="bg-gray-100 bg-opacity-100 h-12 p-4 rounded-l-sm text-black placeholder-black"
              />
              <button className=" h-12 w-32 rounded-sm text-white bg-gray-800">Sign Up</button>
            </div>
          </div>
        </div>
        <hr className="my-8 border-gray-500" />
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">Copyright 2022 Avion LTD</p>
          <div className="flex space-x-4">
            <FaLinkedin className="text-xl" />
            <FaFacebook className="text-xl" />
            <FaInstagram className="text-xl" />
            <FaSkype className="text-xl" />
            <FaTwitter className="text-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
