import GamePool from './GamePool';
import { games } from '@/data/games';

export default function HotGamesPool() {
  const hotGames = games
    .filter(game => game.isHot)
    .sort((a, b) => (b.rating || 0) - (a.rating || 0))
    .slice(0, 10); // Limit to top 10
  
  return (
    <GamePool 
      title="Hot Games" 
      games={hotGames}
      className="bg-[#dfe3f3] rounded-lg shadow-md p-4"
      columns={2} // Force 2 columns
    />
  );
} 