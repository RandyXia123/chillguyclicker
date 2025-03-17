"use client";
import { useState } from 'react';
import { games } from '@/data/games';
import GameCard from '@/components/GameCard';

export default function HotGamesPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const gamesPerPage = 15;
  
  // Filter and sort hot games by rating
  const hotGames = games
    .filter(game => game.isHot)
    .sort((a, b) => (b.rating || 0) - (a.rating || 0));
    
  // Calculate pagination
  const totalPages = Math.ceil(hotGames.length / gamesPerPage);
  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  const currentGames = hotGames.slice(indexOfFirstGame, indexOfLastGame);

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-[#d19a53] mb-8">Hot Games 🔥</h1>
      
      {/* Game Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-8">
        {currentGames.map((game, index) => (
          <GameCard 
            key={index}
            title={game.title}
            imageSrc={game.imageSrc}
            slug={game.slug}
          />
        ))}
      </div>
      
      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 mt-8">
        <button 
          className={`w-8 h-8 rounded-full flex items-center justify-center ${currentPage === 1 ? 'bg-green-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
          onClick={() => setCurrentPage(1)}
        >
          1
        </button>
        
        {totalPages > 1 && (
          <button 
            className={`w-8 h-8 rounded-full flex items-center justify-center ${currentPage === 2 ? 'bg-green-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
            onClick={() => setCurrentPage(2)}
          >
            2
          </button>
        )}
        
        {totalPages > 2 && (
          <button 
            className={`w-8 h-8 rounded-full flex items-center justify-center ${currentPage === 3 ? 'bg-green-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
            onClick={() => setCurrentPage(3)}
          >
            3
          </button>
        )}
        
        {totalPages > 3 && (
          <button 
            className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-200 hover:bg-gray-300"
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          >
            &gt;|
          </button>
        )}
      </div>
    </main>
  );
}