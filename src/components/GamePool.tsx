import GameCard from './GameCard';
import { Game } from '@/data/games';

interface GamePoolProps {
  title: string;
  games: Game[];
  className?: string;
  columns?: number;
}

export default function GamePool({ title, games, className = '', columns = 5 }: GamePoolProps) {
  return (
    <section className={`mb-8 ${className}`}>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
      <div className="grid grid-cols-2 gap-3">
        {games.map((game, index) => (
          <GameCard 
            key={index}
            title={game.title}
            imageSrc={game.imageSrc}
            slug={game.slug}
          />
        ))}
      </div>
    </section>
  );
} 