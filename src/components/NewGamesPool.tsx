import GamePool from './GamePool';
import { games } from '@/data/games';

export default function NewGamesPool() {
  // Filter for new games, sort by release date
  const newGames = games
    .filter(game => game.isNew)
    .sort((a, b) => new Date(b.releaseDate || 0).getTime() - new Date(a.releaseDate || 0).getTime())
    .slice(0, 8); // Show only 4 games (2×2 grid)
  
  return (
    <GamePool 
      title="New Games"
      games={newGames}
      columns={4}
      className="[&_div.grid]:grid-cols-2 [&_div.grid]:sm:grid-cols-4 [&_a]:!w-[180px] [&_a]:mx-auto [&_div.relative]:!w-[180px] [&_div.relative]:!h-[180px] [&_.bg-white]:!w-[180px]"
    />
  );
} 