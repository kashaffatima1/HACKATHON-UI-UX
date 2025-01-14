import React from 'react';
import { FaFacebook, FaLinkedin, FaInstagram, FaSkype, FaTwitter, FaPinterest } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#2A254B] text-white font-thin font-[Clash Display] py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="menu mb-8 md:mb-0 md:mr-16">
            <h2 className="text-lg mb-4">Menu</h2>
            <ul className="space-y-4 text-sm">
              <li>New arrivals</li>
              <li>Best sellers</li>
              <li>Recently Viewed</li>
              <li>Popular this week</li>
              <li>All products</li>
            </ul>
          </div>
          <div className="category mb-8 md:mb-0 md:mr-16">
            <h2 className="text-lg mb-4">Categories</h2>
            <ul className="space-y-4 text-sm">
              <li>Crockery</li>
              <li>Furniture</li>
              <li>Homeware</li>
              <li>Plant pots</li>
              <li>Chairs</li>
              <li>Crockery</li>
            </ul>
          </div>
          <div className="company mb-8 md:mb-0 md:mr-16">
            <h2 className="text-lg mb-4">Our Company</h2>
            <ul className="space-y-4 text-sm">
              <li>About Us</li>
              <li>Vacancies</li>
              <li>Contact Us</li>
              <li>Privacy</li>
              <li>Returns Policy</li>
            </ul>
          </div>
          <div className="subscribe mb-8 md:mb-0">
            <h2 className="text-lg mb-4">Join our mailing list</h2>
            <div className="flex mt-4">
              <input
                type="email"
                placeholder="you@gmail.com"
                className="bg-[#4E4D93] h-12 p-4 rounded-l-sm text-gray-300"
              />
              <button className="bg-white text-gray-500 h-12 w-32 rounded-r-sm">Sign Up</button>
            </div>
          </div>
        </div>
        <hr className="my-8 border-gray-500" />
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">Copyright 2022 Avion LTD</p>
          <div className="social-icons flex space-x-4">
            <FaLinkedin size={24} />
            <FaFacebook size={24} />
            <FaInstagram size={24} />
            <FaSkype size={24} />
            <FaTwitter size={24} />
            <FaPinterest size={24} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
