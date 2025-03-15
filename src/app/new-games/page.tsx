import GameGrid from '@/components/GameGrid';

export default function NewGamesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-[#d19a53] mb-8">New Games 🎮</h1>
      <GameGrid games={newGames} showNewBadge />
    </main>
  );
}

const newGames = [
  {
    id: 1,
    title: "Chill Guy Clicker",
    url: "/games/chill-guy-clicker",
    thumbnailSrc: "/images/game-thumbnails/chill-guy-clicker-game-f220x175.jpg",
    rating: 4.3,
    backgroundImageSrc: "/images/backgrounds/chill-guy-bg.jpg",
    logoSrc: "/images/logos/chill-guy-logo.png",
    releaseDate: "2024-03-15" // Add release date for new games
  },
  // Add more new games here
]; 