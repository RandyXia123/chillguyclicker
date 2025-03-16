"use client";
import GameContainer from '@/components/GameContainer';
import GameCard from '@/components/GameCard';

export default function PokemonClickerPage() {
  // Sample data for related games
  const relatedGames = [
    { title: 'Chill Guy Clicker', imageSrc: '/images/game-thumbnails/chill-guy-clicker-game-f220x175.jpg', slug: '/' },
    { title: 'Chill Girl Clicker', imageSrc: '/images/game-thumbnails/chill-girl-clicker-game-f220x175.png', slug: '/chill-girl-clicker' },
    { title: 'Roblox Clicker', imageSrc: 'https://cdn2.scratch.mit.edu/get_image/project/568479962_480x360.png', slug: 'roblox-clicker' },

    // Add more related games as needed
  ];

  return (
    <div className="bg-[#f5f5f5]">
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 gap-6">
        {/* Main Content */}
        <div className="w-full md:w-2/3">
          {/* Game Container Section */}
          <section className="mb-8">
            <GameContainer 
              gameUrl="https://turbowarp.org/116421566/embed"
              gameTitle="Pokemon Clicker"
              gameLogoSrc="https://cdn2.scratch.mit.edu/get_image/project/116421566_480x360.png"
              rating={4.3}
              backgroundImageSrc="https://cdn2.scratch.mit.edu/get_image/project/116421566_480x360.png"
              thumbnailSrc="https://cdn2.scratch.mit.edu/get_image/project/116421566_480x360.png"
            />
          </section>

          {/* Game Info SEO Section */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <article className="prose prose-lg max-w-none">
              <h1 className="text-3xl font-bold text-gray-800 mb-6">
                Pokemon Clicker - Free Online Idle Game | Popular Clicker Games
              </h1>
              
              <div className="space-y-8">
                {/* Credits */}
                <div className="text-sm text-gray-600">
                  <p>Created by tomergan | Last Updated: January 2024</p>
                </div>

                {/* Category & Tags */}
                <div className="flex flex-wrap gap-4">
                  <div>
                    <span className="font-semibold text-gray-700">Category:</span>
                    <span className="ml-2 px-3 py-1 bg-gray-100 rounded-full text-gray-600">Clicker Game</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Tags:</span>
                    <div className="inline-flex gap-2 ml-2">
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">Pokemon</span>
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">Idle Game</span>
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">Free Game</span>
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">Browser Game</span>
                    </div>
                  </div>
                </div>

                {/* Latest Update Banner */}
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                  <h2 className="text-xl font-bold text-blue-800 mb-2">🎮 New Update!</h2>
                  <p className="text-blue-700">
                    Explore new in-game codes, music features, enhanced GUI, and compete on the leaderboard! Can you claim the top spot?
                  </p>
                </div>

                {/* Game Features */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">Game Features</h2>
                  <div className="space-y-6 text-gray-600">
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Click on your Pokeball to get coins</li>
                      <li>Buy better Pokeballs in the shop</li>
                      <li>Collect Pokemons from eggs</li>
                      <li>Buy magical gems for gameplay effects</li>
                      <li>Pokemon gallery with bonuses</li>
                      <li>Prestige system with online saves</li>
                    </ul>
                  </div>
                </div>

                {/* How to Play */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">How to Play</h2>
                  <ol className="text-gray-600 list-decimal pl-6 space-y-2">
                    <li>Click the "Play Now" button to start</li>
                    <li>Click or press space to earn coins</li>
                    <li>Purchase better Pokeballs for more profit</li>
                    <li>Collect Pokemon and unlock achievements</li>
                    <li>Prestige to earn permanent bonuses</li>
                  </ol>
                </div>

                {/* Credits Section */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">Credits</h2>
                  <div className="space-y-2 text-gray-600">
                    <p>Music: Vexento - We are one</p>
                    <p>Graphics: Pokemon</p>
                  </div>
                </div>

                {/* FAQ */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">FAQ</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-800">Is this game free to play?</h3>
                      <p className="text-gray-600">Yes, the game is completely free to play in your browser!</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Do I need to download anything?</h3>
                      <p className="text-gray-600">No installation required - play directly in your web browser.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Does the game save my progress?</h3>
                      <p className="text-gray-600">Yes, your prestige progress is saved online automatically.</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </section>
        </div>

        {/* Sidebar */}
        <div className="w-full md:w-1/3">
          <div className="bg-[#dfe3f3] rounded-lg shadow-md p-4 mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Related Games</h2>
            <div className="grid grid-cols-2 gap-3">
              {relatedGames.map((game, index) => (
                <GameCard 
                  key={index}
                  title={game.title}
                  imageSrc={game.imageSrc}
                  slug={game.slug}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 