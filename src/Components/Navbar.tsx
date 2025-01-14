"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { FaShoppingCart, FaUser, FaSearch, FaBars, FaTimes } from 'react-icons/fa';
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
  );
};

export default Navbar;
