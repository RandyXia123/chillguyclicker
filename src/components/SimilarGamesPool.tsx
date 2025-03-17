import GamePool from './GamePool';
import { Game, games } from '@/data/games';

interface SimilarGamesPoolProps {
  currentGame: Game;
  maxGames?: number;
}

export default function SimilarGamesPool({ currentGame, maxGames = 10 }: SimilarGamesPoolProps) {
  const similarGames = games
    .filter(game => 
      game.slug !== currentGame.slug && // Exclude current game
      game.category?.some(cat => currentGame.category?.includes(cat)) // Match categories
    )
    .slice(0, maxGames);
  
  return (
    <GamePool 
      title="Similar Games" 
      games={similarGames}
      className="bg-[#dfe3f3] rounded-lg shadow-md p-4"
      columns={2}
    />
  );
} 