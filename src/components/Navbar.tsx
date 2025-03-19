// src/components/Navbar.tsx
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { FaFire, FaGamepad, FaInfoCircle, FaBars, FaSearch } from 'react-icons/fa';
import SearchBar from './SearchBar';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav className="bg-[#879176] text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Navbar */}
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <Image src="/favicon/favicon-32x32.png" alt="Chill Guy Clicker" width={32} height={32} />
            <span className="text-[#d19a53] text-xl font-bold ml-3 hidden sm:inline">Chill Guy Clicker</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="w-64">
              <SearchBar />
            </div>
            <Link href="/hot-games" className="flex items-center space-x-2 hover:text-[#d19a53] transition-colors">
              <FaFire />
              <span>Hot Games</span>
            </Link>
            <Link href="/new-games" className="flex items-center space-x-2 hover:text-[#d19a53] transition-colors">
              <FaGamepad />
              <span>New Games</span>
            </Link>
            <Link href="/about-us" className="flex items-center space-x-2 hover:text-[#d19a53] transition-colors">
              <FaInfoCircle />
              <span>About Us</span>
            </Link>
          </div>

          {/* Mobile Navigation Controls */}
          <div className="flex items-center space-x-4 md:hidden">
            <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="p-2">
              <FaSearch className="w-5 h-5" />
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
              <FaBars className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {isSearchOpen && (
          <div className="md:hidden py-2 px-2">
            <SearchBar />
          </div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            <Link href="/hot-games" 
              className="flex items-center space-x-2 hover:text-[#d19a53] transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <FaFire />
              <span>Hot Games</span>
            </Link>
            <Link href="/new-games" 
              className="flex items-center space-x-2 hover:text-[#d19a53] transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <FaGamepad />
              <span>New Games</span>
            </Link>
            <Link href="/about-us" 
              className="flex items-center space-x-2 hover:text-[#d19a53] transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <FaInfoCircle />
              <span>About Us</span>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;