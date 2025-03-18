// src/components/Navbar.tsx
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { FaFire, FaGamepad, FaInfoCircle } from 'react-icons/fa';
import SearchBar from './SearchBar';

const Navbar = () => {
  return (
    <nav className="bg-[#879176] text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center">
          <Image src="/favicon/favicon-32x32.png" alt="Chill Guy Clicker" width={32} height={32} />
          <span className="text-[#d19a53] text-xl font-bold ml-3">Chill Guy Clicker</span>
        </Link>
        
        {/* Search Bar */}
        <div className="hidden md:block w-1/3 mx-4">
          <SearchBar />
        </div>
        
        <div className="flex space-x-4">
          <Link 
            href="/hot-games" 
            className="flex items-center space-x-2 hover:text-[#d19a53] transition-colors"
          >
            <FaFire />
            <span>Hot Games</span>
          </Link>
          <Link 
            href="/new-games" 
            className="flex items-center space-x-2 hover:text-[#d19a53] transition-colors"
          >
            <FaGamepad />
            <span>New Games</span>
          </Link>
          <Link 
            href="/about-us" 
            className="flex items-center space-x-2 hover:text-[#d19a53] transition-colors"
          >
            <FaInfoCircle />
            <span>About Us</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;