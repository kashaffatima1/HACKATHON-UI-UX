"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaShoppingCart, FaSearch, FaBars, FaTimes, FaUser } from "react-icons/fa";
import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const Navbar: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleNav = () => setIsNavOpen(!isNavOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value);
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Search for: ${searchTerm}`);
  };

  return (
    <ClerkProvider>
      <header className="bg-white w-full h-auto font-[Clash Display] text-[#22202E]">
        <div className="flex justify-between items-center px-4 py-3 shadow-md max-w-7xl mx-auto">
          <div className="flex items-center space-x-4">
            <FaSearch className="text-gray-700 cursor-pointer" onClick={toggleSearch} />
          </div>

          <div className="flex flex-1 justify-center">
            <p className="text-2xl font-thin">Avion</p>
          </div>

          <div className="flex items-center space-x-4">
            <Link href="/cart">
              <FaShoppingCart className="text-gray-900" />
            </Link>

            {/* Authentication Buttons */}
            <SignedOut>
              <SignInButton>
              <FaUser className="text-gray-900" />
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <UserButton />
            </SignedIn>

            <div className="md:hidden" onClick={toggleNav}>
              {isNavOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
            </div>
          </div>
        </div>

        {/* Search Bar */}
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
              <button type="submit" className="bg-purple-600 text-white p-2 rounded-r-md">Search</button>
              <button type="button" onClick={toggleSearch} className="ml-2 text-gray-700 hover:text-gray-900">
                <FaTimes />
              </button>
            </form>
          </div>
        )}

        {/* Navigation Links */}
        <nav className={`bg-white ${isNavOpen ? "block" : "hidden"} md:block`}>
          <div className="mx-auto flex justify-center py-4 max-w-7xl text-[#726E8D] hover:text-[#000000]">
            <ul className="hidden md:flex space-x-8">
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

            {/* Mobile Navigation */}
            <ul className="flex flex-col max-w-7xl mx-auto space-y-4 md:hidden text-[#726E8D] hover:text-[#000000]">
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
    </ClerkProvider>
  );
};

export default Navbar;
