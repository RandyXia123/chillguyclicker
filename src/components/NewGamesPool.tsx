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
      columns={2} // Force exactly 2 columns
      className="grid-cols-2" // Override any responsive columns
    />
  );
} 