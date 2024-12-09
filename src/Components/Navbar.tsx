//NABAR PAGE
"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { FaShoppingCart, FaUser, FaSearch, FaBars, FaTimes } from 'react-icons/fa';

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
  );
};

export default Navbar;
