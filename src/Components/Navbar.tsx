"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { FaShoppingCart, FaUser, FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import { RootState } from '../app/redux/store';
import { useSelector } from 'react-redux';

const Navbar: React.FC = () => {
  const item = useSelector((state: RootState) => state.cart);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleNav = () => setIsNavOpen(!isNavOpen);

  // Toggle search bar visibility
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search (filter products or redirect to a search page)
    console.log(`Search for: ${searchTerm}`);
  };

  return (
    <header className="bg-white w-full h-auto font-[Clash Display] text-[22202E]">
      <div className="flex justify-between items-center px-4 py-3 shadow-md max-w-7xl mx-auto">
        <div className="flex items-center space-x-4">
          {/* Toggle Search Bar */}
          <FaSearch className="text-gray-700 cursor-pointer" onClick={toggleSearch} />
        </div>
        <div className="flex flex-1 justify-center">
          <p className="text-2xl font-thin">Avion</p>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/cart"><FaShoppingCart className="text-gray-900" /></Link>
          {item.length}
          <Link href="/SignIn"><FaUser className="text-gray-900" /></Link>
          <div className="md:hidden" onClick={toggleNav}>
            {isNavOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </div>
        </div>
      </div>

      {/* Search Bar - Show or Hide */}
      {isSearchOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-full max-w-3xl p-4 bg-white shadow-lg z-10">
          <form onSubmit={handleSearchSubmit} className="flex">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search for products..."
              className="w-full p-2 border rounded-l-md"
            />
            <button type="submit" className="bg-purple-600 text-white p-2 rounded-r-md">
              Search
            </button>
            <button
              type="button"
              onClick={toggleSearch} // Close the search bar
              className="ml-2 text-gray-700 hover:text-gray-900"
            >
              <FaTimes />
            </button>
          </form>
        </div>
      )}

      <nav className={`bg-white ${isNavOpen ? 'block' : 'hidden'} md:block`}>
        <div className="mx-auto flex justify-center py-4 max-w-7xl text-[726E8D] hover:text-[000000]">
          <ul className="hidden md:flex space-x-8"> {/* Space between items increased */}
            <li><Link href="/">Home</Link></li>
            <li><Link href="/About">About</Link></li>
            <li><Link href="/Contactus">Contact</Link></li>
            <li><Link href="/category/Chairs">Chairs</Link></li>
            <li><Link href="/category/Tableware">Tableware</Link></li>
            <li><Link href="/category/Ceramics">Ceramics</Link></li>
            <li><Link href="/category/Plantpots">Plant pots</Link></li>
            <li><Link href="/category/Cutlery">Cutlery</Link></li>
            <li><Link href="/category/Tables">Tables</Link></li>
            <li><Link href="/productlisting">All products</Link></li>
          </ul>

          {/* Mobile version */}
          <ul className="flex flex-col max-w-7xl mx-auto space-y-4 md:hidden text-[726E8D] hover:text-[000000]">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/About">About</Link></li>
            <li><Link href="/productlisting">All products</Link></li>
            <li><Link href="/category/Chairs">Chairs</Link></li>
            <li><Link href="/category/Tableware">Tableware</Link></li>
            <li><Link href="/category/Ceramics">Ceramics</Link></li>
            <li><Link href="/category/Plantpots">Plant pots</Link></li>
            <li><Link href="/category/Cutlery">Cutlery</Link></li>
            <li><Link href="/category/Tables">Tables</Link></li>
            <li><Link href="/Contactus">Contact</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
