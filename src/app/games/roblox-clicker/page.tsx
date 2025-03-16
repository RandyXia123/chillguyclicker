"use client";
import GameContainer from '@/components/GameContainer';
import GameCard from '@/components/GameCard';

export default function RobloxClickerPage() {
  // Sample data for related games
  const relatedGames = [
    { title: 'Chill Guy Clicker', imageSrc: '/images/game-thumbnails/chill-guy-clicker-game-f220x175.jpg', slug: '/' },
    { title: 'Chill Girl Clicker', imageSrc: '/images/game-thumbnails/chill-girl-clicker-game-f220x175.png', slug: '/chill-girl-clicker' },
    { title: 'Pokemon Clicker', imageSrc: 'https://cdn2.scratch.mit.edu/get_image/project/116421566_480x360.png', slug: '/pokemon-clicker' },
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
              gameUrl="https://turbowarp.org/568479962/embed"
              gameTitle="Roblox Clicker"
              gameLogoSrc="https://cdn2.scratch.mit.edu/get_image/user/76734536_32x32.png"
              rating={4.0}
              backgroundImageSrc="https://cdn2.scratch.mit.edu/get_image/project/568479962_480x360.png"
              thumbnailSrc="https://cdn2.scratch.mit.edu/get_image/project/568479962_480x360.png"
            />
          </section>

          {/* Game Info SEO Section */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <article className="prose prose-lg max-w-none">
              <h1 className="text-3xl font-bold text-gray-800 mb-6">
                Roblox Clicker - Free Online Idle Game | Popular Clicker Games
              </h1>
              
              <div className="space-y-8">
                {/* Credits */}
                <div className="text-sm text-gray-600">
                  <p>Created by GameXLegend123 | Last Updated: January 2024</p>
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
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">Roblox</span>
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">Idle Game</span>
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">Leaderboard</span>
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">Codes</span>
                    </div>
                  </div>
                </div>

                {/* Latest Update Banner */}
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                  <h2 className="text-xl font-bold text-blue-800 mb-2">🎮 New Update 2024!</h2>
                  <p className="text-blue-700">
                    Explore new in-game codes, music features, enhanced GUI, and compete on the leaderboard! Can you claim the top spot?
                  </p>
                </div>

                {/* Active Codes Section */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">Active Codes (January 2024)</h2>
                  <div className="space-y-4 bg-gray-50 p-4 rounded-lg">
                    <div>
                      <code className="bg-gray-200 px-3 py-1 rounded">Roblox2024</code>
                      <p className="text-gray-600 mt-1">1000 clicks, 10 Robux/sec, 100 click power</p>
                    </div>
                    <div>
                      <code className="bg-gray-200 px-3 py-1 rounded">ChristmasUpdate</code>
                      <p className="text-gray-600 mt-1">5000 clicks, 15 Robux/sec, 500 click power</p>
                    </div>
                    <div>
                      <code className="bg-gray-200 px-3 py-1 rounded">GameXLegend123</code>
                      <p className="text-gray-600 mt-1">50,000 free clicks (Requires YouTube subscription)</p>
                    </div>
                  </div>
                </div>

                {/* Achievements */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">Game Milestones</h2>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-yellow-500">🏆</span>
                      <p className="text-gray-600">December 2023: 4 Million Views Achievement!</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-yellow-500">🏆</span>
                      <p className="text-gray-600">February 2022: 1 Million Views Milestone</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-yellow-500">🏆</span>
                      <p className="text-gray-600">December 2021: #1 on Trending</p>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">Latest Features</h2>
                  <div className="space-y-6 text-gray-600">
                    <ul className="list-disc pl-6 space-y-2">
                      <li>New Music System</li>
                      <li>Enhanced GUI Interface</li>
                      <li>Global Leaderboard</li>
                      <li>Regular Code Updates</li>
                      <li>Administrator System</li>
                    </ul>
                  </div>
                </div>

                {/* Community */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">Join Our Community</h2>
                  <div className="space-y-4">
                    <p className="text-gray-600">
                      Subscribe to GameXLegend123's YouTube channel for exclusive codes and a chance to become an administrator!
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-800">Current Administrators:</h3>
                      <p className="text-gray-600">coolestperson2, klayton12321, TGCode3</p>
                    </div>
                  </div>
                </div>

                {/* Summary */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">Best Free Roblox Clicker Game</h2>
                  <p className="text-gray-600">
                    Experience the excitement of Roblox in this addictive clicker game! Click your way through the Roblox universe, collect characters, and unlock amazing achievements. No downloads required - play directly in your browser for free!
                  </p>
                </div>

                {/* Features */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">Game Features</h2>
                  <div className="space-y-6 text-gray-600">
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Roblox-themed clicker gameplay</li>
                      <li>Regular updates with new content</li>
                      <li>Browser-based - no downloads needed</li>
                      <li>Auto-save functionality</li>
                      <li>Mobile-friendly interface</li>
                    </ul>
                  </div>
                </div>

                {/* How to Play */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">How to Play</h2>
                  <ol className="text-gray-600 list-decimal pl-6 space-y-2">
                    <li>Click the "Play Now" button to start</li>
                    <li>Click to earn points and currency</li>
                    <li>Unlock new Roblox characters and items</li>
                    <li>Upgrade your clicking power</li>
                    <li>Complete achievements for bonus rewards</li>
                  </ol>
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
                      <h3 className="font-semibold text-gray-800">Do I need to install anything?</h3>
                      <p className="text-gray-600">No installation required - play directly in your web browser.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Is my progress saved?</h3>
                      <p className="text-gray-600">Yes, your progress is automatically saved as you play.</p>
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