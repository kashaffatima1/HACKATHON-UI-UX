<<<<<<< HEAD
=======
//NABAR PAGE
>>>>>>> 4a9e0321b0ce98b0cf7d9797003af9b4425c0ac9
"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { FaShoppingCart, FaUser, FaSearch, FaBars, FaTimes } from 'react-icons/fa';
<<<<<<< HEAD
import Ceramics from './NewCeramics';

const Navbar: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => setIsNavOpen(!isNavOpen);

  return (
    <header className="bg-white w-full h-auto font-[Clash Display] text-[22202E]">
      <div className="flex justify-between items-center px-4 py-3 shadow-md max-w-7xl mx-auto">
        <div className="flex items-center space-x-4">
          <FaSearch className="text-gray-700" />
        </div>
        <div className="flex flex-1 justify-center">
          <p className="text-2xl font-thin">Avion</p>
        </div>
        <div className="flex items-center space-x-4">
          <FaShoppingCart className="text-gray-900" />
          <FaUser className="text-gray-900" />
          <div className="md:hidden" onClick={toggleNav}>
            {isNavOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </div>
        </div>
      </div>

      <nav className={`bg-white ${isNavOpen ? 'block' : 'hidden'} md:block`}>
        <div className="mx-auto flex justify-center md:justify-center py-4 max-w-7xl text-[726E8D] hover:text-[000000]">
          <ul className="hidden md:flex space-x-6">
          <li><Link href="#">Home</Link></li>
          <li><Link href="#">About</Link></li>
            <li><Link href="/">Plant pots</Link></li>
            <li><Link href="./OurCeramics">Ceramics</Link></li>
            <li><Link href="/about">Tables</Link></li>
            <li><Link href="/">Chairs</Link></li>
            <li><Link href="/">Crockery</Link></li>
            <li><Link href="/">Tableware</Link></li>
            <li><Link href="#">All product</Link></li>
            <li><Link href="/">Cutlery</Link></li>
          </ul>

          <ul className="flex flex-col items-center space-y-4 md:hidden text-[726E8D] hover:text-[000000]">
            <li><Link href="/hero">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact us</Link></li>
            <li><Link href="/">Plant pots</Link></li>
            <li><Link href="./OurCeramics">Ceramics</Link></li>
            <li><Link href="/">Tables</Link></li>
            <li><Link href="/">Chairs</Link></li>
            <li><Link href="/">Crockery</Link></li>
            <li><Link href="/">Tableware</Link></li>
            <li><Link href="/">Cutlery</Link></li>
          </ul>
        </div>
      </nav>
    </header>
=======

const Navbar: React.FC = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="nav-container">
      <div className="nav-top w-full h-11 flex justify-between items-center bg-[#FFFFFF] px-4">
        <div className="nav-logo flex justify-center w-full md:flex-row md:gap-11 md:p-9 md:font-bold md:font-4xl md:font-[clashDisplay]">
          <p className="text-center">Avion</p>
        </div>
        <div className="nav-actions flex items-center">
          <FaSearch className="text-[#22202E] mr-4" />
          <div className="md:hidden" onClick={handleClick}>
            {!nav ? <FaBars className="text-2xl" /> : <FaTimes className="text-2xl" />}
          </div>
        </div>
        <div className="nav-icons hidden md:flex flex-row gap-4 p-4">
          <FaShoppingCart className="text-[#22202E]" />
          <FaUser className="text-[#22202E]" />
        </div>
      </div>
      <div className="nav-bottom w-lg h-[48px]">
        <hr className="bg-[#0000001A]" />

        <div className="nav-links mt-0 bg-[#FFFFFF] flex flex-row justify-between">
          <div className="max-w-7xl mx-auto flex justify-between">
            <ul className="hidden md:flex flex-row gap-6 p-9">
              <li><Link href="/home">Plant pots</Link></li>
              <li><Link href="/contact">Ceramics</Link></li>
              <li><Link href="/about">Tables</Link></li>
              <li><Link href="/signup">Chairs</Link></li>
              <li><Link href="/signup">Crockery</Link></li>
              <li><Link href="/signup">Tableware</Link></li>
              <li><Link href="/signup">Cutlery</Link></li>
            </ul>
          </div>
        </div>

        <ul className={`flex flex-col items-center md:hidden bg-[#FFFFFF] w-full ${nav ? 'block' : 'hidden'}`}>
          <li className="py-4 text-xl"><Link href="/home">Home</Link></li>
          <li className="py-4 text-xl"><Link href="/home">Plant pots</Link></li>
          <li className="py-4 text-xl"><Link href="/contact">Ceramics</Link></li>
          <li className="py-4 text-xl"><Link href="/about">Tables</Link></li>
          <li className="py-4 text-xl"><Link href="/signup">Chairs</Link></li>
          <li className="py-4 text-xl"><Link href="/signup">Crockery</Link></li>
          <li className="py-4 text-xl"><Link href="/signup">Tableware</Link></li>
          <li className="py-4 text-xl"><Link href="/signup">Cutlery</Link></li>
        </ul>
      </div>
    </div>
>>>>>>> 4a9e0321b0ce98b0cf7d9797003af9b4425c0ac9
  );
};

export default Navbar;
