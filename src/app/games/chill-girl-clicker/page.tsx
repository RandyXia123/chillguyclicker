"use client";
import GameContainer from '@/components/GameContainer';
import GameCard from '@/components/GameCard';

export default function ChillGirlClickerPage() {
  // Sample data for related games
  const hotGames = [
    { title: 'Chill Guy Clicker', imageSrc: '/images/game-thumbnails/chill-guy-clicker-game-f220x175.jpg', slug: '/' },
    { title: 'Roblox Clicker', imageSrc: 'https://cdn2.scratch.mit.edu/get_image/project/568479962_480x360.png', slug: 'roblox-clicker' },
    { title: 'Pokemon Clicker', imageSrc: 'https://cdn2.scratch.mit.edu/get_image/project/116421566_480x360.png', slug: '/pokemon-clicker' },
    // Add more games as needed
  ];

  return (
    <div className="bg-[#f5f5f5]">
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 gap-6">
        {/* Main Content */}
        <div className="w-full md:w-2/3">
          {/* Game Container Section */}
          <section className="mb-8">
            <GameContainer 
              gameUrl="https://game.azgame.io/chill-girl-clicker/"
              gameTitle="Chill Girl Clicker"
              gameLogoSrc="/images/game-thumbnails/chill-girl-clicker-game-f220x175.png"
              rating={4.3}
              backgroundImageSrc="/images/game-thumbnails/chill-girl-clicker-game-f220x175.png"
              thumbnailSrc="/images/game-thumbnails/chill-girl-clicker-game-f220x175.png"
            />
          </section>

          {/* Game Info SEO Section */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <article className="prose prose-lg max-w-none">
              <h1 className="text-3xl font-bold text-gray-800 mb-6">
                Chill Girl Clicker - Free Browser Idle Game | Relaxing Clicker Games
              </h1>
              
              <div className="space-y-8">
                {/* Category & Tags */}
                <div className="flex flex-wrap gap-4">
                  <div>
                    <span className="font-semibold text-gray-700">Category:</span>
                    <span className="ml-2 px-3 py-1 bg-gray-100 rounded-full text-gray-600">Relaxing Clicker Game</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Tags:</span>
                    <div className="inline-flex gap-2 ml-2">
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">Idle Game</span>
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">Free Browser Game</span>
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">Girl Clicker</span>
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">Relaxing Games</span>
                    </div>
                  </div>
                </div>

                {/* Summary */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">Best Free Browser Idle Game</h2>
                  <p className="text-gray-600">
                    Chill Girl Clicker brings a fresh twist to relaxing clicker games! Join the charming Chill Girl as you tap your way through this laid-back browser game. No downloads needed - just click, earn, upgrade, and watch your progress soar. Perfect for casual gaming sessions when you want to unwind and still feel accomplished. Best of all? It's completely free!
                  </p>
                </div>

                {/* What is section */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">What is Chill Girl Clicker?</h2>
                  <p className="text-gray-600">
                    Discover the most relaxing idle game featuring the trendy Chill Girl character! Our laid-back heroine brings her unique style and cool attitude to this addictive clicker game. Join thousands of players in this free browser game that combines casual fun with satisfying progression.
                  </p>
                </div>

                {/* How to Play */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">How to Play This Free Browser Idle Game</h2>
                  <ol className="text-gray-600 list-decimal pl-6 space-y-2 mb-6">
                    <li>Click the "Play Now" button to start your relaxing adventure</li>
                    <li>Tap or click on Chill Girl to earn points</li>
                    <li>Collect points to unlock cool upgrades</li>
                    <li>Complete achievements for bonus rewards</li>
                    <li>Set up auto-clickers for idle earnings</li>
                  </ol>
                  <p className="text-gray-600">
                    Start your journey with simple clicks and watch your empire grow! This free browser idle game lets you progress at your own pace. Purchase upgrades like Auto-Clickers, Chill Farms, and Power Boosters to multiply your earnings. The more you play, the more features you'll unlock!
                  </p>
                </div>

                {/* Features */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">Ultimate Relaxing Clicker Game Features</h2>
                  <div className="space-y-6 text-gray-600">
                    <p>
                      Experience the perfect blend of casual gaming and strategic progression in this free browser idle game. Chill Girl Clicker offers a unique take on the classic clicker genre!
                    </p>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Special Characters</h3>
                      <p>
                        Unlock an amazing cast of characters including Fashion Chill Girl, Gamer Chill Girl, and many more unique variations. Each character brings their own special bonuses and style to your clicking adventure!
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Progression System</h3>
                      <p>
                        Level up your clicking power with various upgrades and achievements. Watch your points multiply as you unlock new features and bonuses!
                      </p>
                    </div>

                    <ul className="list-disc pl-6 space-y-2 mt-4">
                      <li>No download required - play instantly in your browser</li>
                      <li>Automatic progress saving</li>
                      <li>Multiple upgrade paths to explore</li>
                      <li>Achievement system with rewards</li>
                      <li>Offline progress tracking</li>
                      <li>Responsive design for all devices</li>
                    </ul>
                  </div>
                </div>

                {/* Use Cases */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">Why Choose This Chill Clicker Game?</h2>
                  <ul className="text-gray-600 list-disc pl-6 space-y-2">
                    <li>Perfect for quick gaming breaks</li>
                    <li>Ideal free browser idle game for casual players</li>
                    <li>Engaging and relaxing gameplay mechanics</li>
                    <li>Great for multitasking</li>
                    <li>Accessible on any device with a browser</li>
                  </ul>
                </div>

                {/* FAQ */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">Free Browser Idle Game FAQ</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-800">Is Chill Girl Clicker free to play?</h3>
                      <p className="text-gray-600">Yes, enjoy this relaxing clicker game completely free in your browser!</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Are there any downloads required?</h3>
                      <p className="text-gray-600">No downloads needed - play instantly in your web browser.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Will my progress be saved?</h3>
                      <p className="text-gray-600">Yes, your game progress saves automatically in your browser.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Can I play on my phone or tablet?</h3>
                      <p className="text-gray-600">Absolutely! The game works perfectly on all mobile devices.</p>
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
            <h2 className="text-xl font-bold text-gray-800 mb-4">Similar Games</h2>
            <div className="grid grid-cols-2 gap-3">
              {hotGames.map((game, index) => (
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