import GameCard from './GameCard';
import { games } from '@/data/games';

export default function NewGamesPool() {
  // Filter for new games, sort by release date
  const newGames = games
    .filter(game => game.isNew)
    .sort((a, b) => new Date(b.releaseDate || 0).getTime() - new Date(a.releaseDate || 0).getTime())
    .slice(0, 6); // Show 6 games (3 rows of 2)
  
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">New Games</h2>
      <div className="grid grid-cols-2 gap-4">
        {newGames.map((game, index) => (
          <GameCard 
            key={index}
            title={game.title}
            imageSrc={game.imageSrc}
            slug={game.slug}
            cardStyle="square"
          />
        ))}
      </div>
    </section>
  );
} 