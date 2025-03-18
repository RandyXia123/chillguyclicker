"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaSearch } from 'react-icons/fa';

export default function SearchBar({ className = "" }) {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className={`relative ${className}`}>
      <input
        type="text"
        placeholder="Search games..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full py-1.5 pl-3 pr-10 rounded-full text-sm text-gray-700 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#d19a53] focus:border-transparent"
      />
      <button 
        type="submit" 
        aria-label="Search"
        className="absolute right-0 top-0 h-full px-3 flex items-center justify-center text-gray-500 hover:text-[#d19a53]"
      >
        <FaSearch size={14} />
      </button>
    </form>
  );
} 