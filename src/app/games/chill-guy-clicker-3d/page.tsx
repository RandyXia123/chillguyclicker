import SimilarGamesPool from '@/components/SimilarGamesPool';
import NewGamesPool from '@/components/NewGamesPool';
import GameContainer from '@/components/GameContainer';

export default function ChillGuyClicker3DPage() {
  // Define current game data
  const currentGame = {
    title: 'Chill Guy Clicker 3D',
    slug: '/chill-guy-clicker-3d',
    category: ['clicker', 'idle'],
    rating: 4,
    imageSrc: '/images/game-thumbnails/chillguyclicker3d-m180x180.webp'
  };

  return (
    <div className="bg-[#f5f5f5]">
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 gap-6">
        {/* Main Content */}
        <div className="w-full md:w-2/3">
          {/* Game Container Section */}
          <section className="mb-8">
            <GameContainer 
              gameUrl="https://game.azgame.io/chill-guy-clicker-3d/"
              gameTitle="Chill Guy Clicker 3D"
              gameLogoSrc="/images/game-thumbnails/chillguyclicker3d-m180x180.webp"
              rating={4}
              backgroundImageSrc="/images/game-thumbnails/chillguyclicker3d-m180x180.webp"
              thumbnailSrc="/images/game-thumbnails/chillguyclicker3d-m180x180.webp"
            />
          </section>

          {/* Similar Games Section - Mobile Only (Before New Games) */}
          <div className="md:hidden mb-8">
            <SimilarGamesPool currentGame={currentGame} />
          </div>

          <NewGamesPool />

          {/* Game Info SEO Section */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <article className="prose prose-lg max-w-none">
              <h1 className="text-3xl font-bold text-gray-800 mb-6">
                Chill Guy Clicker 3D - Free Browser Idle Game | Relaxing Clicker Games
              </h1>
              
              <div className="space-y-8">
                {/* Category & Tags */}
                <div className="flex flex-wrap gap-4">
                  <div>
                    <span className="font-semibold text-gray-700">Category:</span>
                    <span className="ml-2 px-3 py-1 bg-gray-100 rounded-full text-gray-600">3D Relaxing Clicker Game</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Tags:</span>
                    <div className="inline-flex gap-2 ml-2">
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">3D Idle Game</span>
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">Free Browser Game</span>
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">Chill Guy Meme</span>
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">Relaxing Games</span>
                    </div>
                  </div>
                </div>

                {/* Summary */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">Best Free Browser 3D Idle Game of 2025</h2>
                  <p className="text-gray-600">
                    Chill Guy Clicker 3D revolutionizes the relaxing clicker game experience with stunning 3D graphics and dynamic weather effects! Join the iconic Chill Guy as you tap your way through this immersive browser adventure. No downloads needed - just click, earn, upgrade, and watch your collection grow in beautiful 3D. Perfect for unwinding after a long day while still feeling a sense of accomplishment. Best of all? It's completely free to play on any device!
                  </p>
                </div>

                {/* What is section */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">What is Chill Guy Clicker 3D?</h2>
                  <p className="text-gray-600">
                    Discover the most engaging 3D idle game featuring the popular Chill Guy meme character! Our laid-back hero brings his unique style and ultra-relaxed attitude to life with impressive 3D modeling and animations. Join thousands of players in this free browser game that combines casual fun with satisfying progression and beautiful visuals that run smoothly on any device.
                  </p>
                </div>

                {/* How to Play */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">How to Play This Free Browser 3D Idle Game</h2>
                  <ol className="text-gray-600 list-decimal pl-6 space-y-2 mb-6">
                    <li>Click the "Play Now" button to start your relaxing adventure</li>
                    <li>Tap or click on Chill Guy to create more Chill Guys</li>
                    <li>Collect points to unlock cool upgrades and special characters</li>
                    <li>Complete achievements for bonus rewards</li>
                    <li>Set up auto-clickers for idle earnings</li>
                    <li>Change weather effects to match your mood</li>
                  </ol>
                  <p className="text-gray-600">
                    Start your journey with simple clicks and watch your Chill Guy collection grow in stunning 3D! This free browser idle game lets you progress at your own pace. Purchase upgrades to multiply your earnings and unlock special Chill Guy characters. The more you play, the more features you'll discover!
                  </p>
                </div>

                {/* Features */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">Ultimate Relaxing 3D Clicker Game Features</h2>
                  <div className="space-y-6 text-gray-600">
                    <p>
                      Experience the perfect blend of casual gaming and strategic progression in this free browser idle game. Chill Guy Clicker 3D offers a unique take on the classic clicker genre with industry-leading 3D graphics!
                    </p>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Immersive 3D Graphics</h3>
                      <p>
                        Unlike typical 2D clicker games, Chill Guy Clicker 3D features vibrant, high-quality 3D models that bring your clicking adventure to life with realistic details and smooth animations. Experience the most visually impressive idle game in your browser!
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Dynamic Weather System</h3>
                      <p>
                        Change the atmosphere of your game with various weather options! From gentle rain to bright sunshine, powerful winds to magical falling stars - each creates a different relaxing vibe and provides unique gameplay bonuses while you play.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Special Characters</h3>
                      <p>
                        Unlock an amazing cast of Chill Guy variations including Equilibrist Chill Guy, Witch Chill Guy, King Chill Guy, Mexican Chill Guy, and Chill Guy and Friend! Each character brings their own special bonuses and style to your clicking adventure!
                      </p>
                    </div>

                    <ul className="list-disc pl-6 space-y-2 mt-4">
                      <li>No download required - play instantly in your browser</li>
                      <li>Automatic progress saving with cloud backup</li>
                      <li>Multiple upgrade paths to explore</li>
                      <li>Achievement system with rewards</li>
                      <li>Offline progress tracking</li>
                      <li>Responsive design for all devices</li>
                      <li>Regular updates with new content</li>
                    </ul>
                  </div>
                </div>

                {/* Use Cases */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">Why Choose This Chill Clicker Game?</h2>
                  <ul className="text-gray-600 list-disc pl-6 space-y-2">
                    <li>Perfect for quick gaming breaks</li>
                    <li>Ideal free browser idle game for casual players</li>
                    <li>Engaging 3D visuals and realistic weather effects</li>
                    <li>Great for multitasking</li>
                    <li>Accessible on any device with a browser</li>
                    <li>Ad-free experience for uninterrupted enjoyment</li>
                  </ul>
                </div>

                {/* FAQ */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">Free Browser 3D Idle Game FAQ</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-800">Is Chill Guy Clicker 3D free to play?</h3>
                      <p className="text-gray-600">Yes, enjoy this relaxing 3D clicker game completely free in your browser!</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Are there any downloads required?</h3>
                      <p className="text-gray-600">No downloads needed - play instantly in your web browser at https://chillguyclicker.io/.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Will my progress be saved?</h3>
                      <p className="text-gray-600">Yes, your game progress saves automatically in the cloud, accessible across all your devices.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Can I play on my phone or tablet?</h3>
                      <p className="text-gray-600">Absolutely! The game is fully optimized for touchscreens and works perfectly on all mobile devices.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">How often is new content added?</h3>
                      <p className="text-gray-600">We regularly update with new characters, features, and seasonal events to keep the experience fresh!</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">What makes this different from other clicker games?</h3>
                      <p className="text-gray-600">Our beautiful 3D graphics, dynamic weather system, and unique character abilities create a premium experience you won't find elsewhere!</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </section>
        </div>

        {/* Sidebar - Desktop Only */}
        <div className="hidden md:block w-1/3">
          <SimilarGamesPool currentGame={currentGame} />
        </div>
      </div>
    </div>
  );
} 