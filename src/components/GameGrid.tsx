"use client";

import Link from 'next/link';
import Image from 'next/image';

interface Game {
  id: number;
  title: string;
  url: string;
  thumbnailSrc: string;
  rating: number;
  backgroundImageSrc: string;
  logoSrc: string;
  releaseDate?: string;
}

interface GameGridProps {
  games: Game[];
  showNewBadge?: boolean;
}

export default function GameGrid({ games, showNewBadge }: GameGridProps) {
  // Function to check if a game is new (less than 30 days old)
  const isNewGame = (releaseDate?: string) => {
    if (!releaseDate) return false;
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    return new Date(releaseDate) > thirtyDaysAgo;
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {games.map((game) => (
        <Link 
          href={game.url} 
          key={game.id}
          className="group"
        >
          <div className="bg-white/10 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="relative">
              <Image
                src={game.thumbnailSrc}
                alt={game.title}
                width={220}
                height={175}
                className="w-full object-cover"
              />
              <div className="absolute bottom-2 right-2 bg-black/70 px-2 py-1 rounded text-white text-sm">
                ★ {game.rating}
              </div>
              {showNewBadge && isNewGame(game.releaseDate) && (
                <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  NEW
                </div>
              )}
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold text-white mb-2 group-hover:text-[#d19a53] transition-colors">
                {game.title}
              </h2>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center text-gray-400">
                  <span className="mr-2">🎮</span>
                  <span>Play Now</span>
                </div>
                {game.releaseDate && (
                  <span className="text-gray-400 text-xs">
                    {new Date(game.releaseDate).toLocaleDateString()}
                  </span>
                )}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
} 