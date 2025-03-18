"use client";
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { games, Game } from '@/data/games';
import GameCard from '@/components/GameCard';
import Head from 'next/head';

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const [searchResults, setSearchResults] = useState<Game[]>([]);
  
  useEffect(() => {
    if (query) {
      const filteredGames = games.filter(game => 
        game.title.toLowerCase().includes(query.toLowerCase()) ||
        (game.category && game.category.some(cat => cat.toLowerCase().includes(query.toLowerCase())))
      );
      setSearchResults(filteredGames);
    } else {
      setSearchResults([]);
    }
  }, [query]);

  return (
    <>
      <Head>
        <title>Search Results for "{query}" | Chill Guy Clicker</title>
        <meta name="description" content={`Browse search results for ${query}. Find free online browser games matching your search.`} />
        <meta name="robots" content="noindex" />
      </Head>
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-[#d19a53] mb-4">
          Search Results: "{query}"
        </h1>
        
        {searchResults.length > 0 ? (
          <>
            <p className="text-gray-600 mb-6">Found {searchResults.length} games matching your search</p>
            
            {/* Game Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-8">
              {searchResults.map((game, index) => (
                <GameCard 
                  key={index}
                  title={game.title}
                  imageSrc={game.imageSrc}
                  slug={game.slug}
                />
              ))}
            </div>
          </>
        ) : (
          <div className="bg-gray-100 p-8 rounded-lg text-center">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">No games found</h2>
            <p className="text-gray-600 mb-4">
              Sorry, we couldn't find any games matching "{query}".
            </p>
            <p className="text-gray-600">
              Try using different keywords or checking out our 
              <a href="/hot-games" className="text-[#d19a53] hover:underline ml-1">hot games</a> 
              or 
              <a href="/new-games" className="text-[#d19a53] hover:underline ml-1">new releases</a>.
            </p>
          </div>
        )}
      </main>
    </>
  );
} 