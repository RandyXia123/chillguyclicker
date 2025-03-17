import SimilarGamesPool from '@/components/SimilarGamesPool';
import NewGamesPool from '@/components/NewGamesPool';
import GameContainer from '@/components/GameContainer';

export default function MoneyClickerPage() {
  // Define current game data
  const currentGame = {
    title: 'Money Clicker',
    slug: '/money-clicker',
    category: ['clicker', 'idle'],
    rating: 4.3,
    imageSrc: 'https://cdn2.scratch.mit.edu/get_image/project/208974963_480x360.png'
  };

  return (
    <div className="bg-[#f5f5f5]">
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 gap-6">
        {/* Main Content */}
        <div className="w-full md:w-2/3">
          {/* Game Container Section */}
          <section className="mb-8">
            <GameContainer 
              gameUrl="https://turbowarp.org/208974963/embed"
              gameTitle="Money Clicker"
              gameLogoSrc="https://cdn2.scratch.mit.edu/get_image/project/208974963_480x360.png"
              rating={4.3}
              backgroundImageSrc="https://cdn2.scratch.mit.edu/get_image/project/208974963_480x360.png"
              thumbnailSrc="https://cdn2.scratch.mit.edu/get_image/project/208974963_480x360.png"
            />
          </section>


          <NewGamesPool />

   {/* Game Info SEO Section */}
<section className="bg-white rounded-lg shadow-md p-6">
  <article className="prose prose-lg max-w-none">
    <h1 className="text-3xl font-bold text-gray-800 mb-6">
      Money Clicker - Free Browser Idle Game | Relaxing Clicker Games
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
            <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">Money Clicker</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">Scratch Project</span>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Best Free Browser Idle Game</h2>
        <p className="text-gray-600">
          Money Clicker brings an exciting twist to relaxing clicker games! Click your way through this addictive browser game created by GAMING_GUY18. No downloads needed - just click, earn, upgrade, and watch your progress soar. Perfect for casual gaming sessions when you want to unwind and still feel accomplished. Best of all? It's completely free and mobile friendly!
        </p>
      </div>

      {/* What is section */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">What is Money Clicker?</h2>
        <p className="text-gray-600">
          Discover this entertaining idle game that lets you click your way to virtual wealth! This addictive clicker game was created by GAMING_GUY18, drawing inspiration from the classic Cookie Clicker. Join thousands of players in this free browser game that combines casual fun with satisfying progression and money-themed mechanics.
        </p>
      </div>

      {/* How to Play */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">How to Play This Free Browser Idle Game</h2>
        <ol className="text-gray-600 list-decimal pl-6 space-y-2 mb-6">
          <li>Click to earn money</li>
          <li>Buy upgrades to increase your clicking power</li>
          <li>Set up auto-clickers for idle earnings</li>
          <li>Keep the tab open to continue earning</li>
          <li>Try to earn as much as possible in a single session</li>
        </ol>
        <p className="text-gray-600">
          Start your journey with simple clicks and watch your money grow! This free browser idle game lets you progress at your own pace. Purchase various upgrades to multiply your earnings. The more you play, the more features you'll unlock!
        </p>
      </div>

      {/* Features */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Ultimate Relaxing Clicker Game Features</h2>
        <div className="space-y-6 text-gray-600">
          <p>
            Experience the perfect blend of casual gaming and strategic progression in this free browser idle game. Money Clicker offers a unique take on the classic clicker genre with engaging features!
          </p>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Immersive Music</h3>
            <p>
              Enjoy the game with music from Mining Simulator (Fresh Air - Bslick) that keeps you engaged while clicking away!
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Progression System</h3>
            <p>
              Level up your clicking power with various upgrades and achievements. Watch your money multiply as you unlock new features and bonuses!
            </p>
          </div>

          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>No download required - play instantly in your browser</li>
            <li>Mobile friendly design for all devices</li>
            <li>Multiple upgrade paths to explore</li>
            <li>Smooth gameplay experience</li>
            <li>Potential future leaderboard system</li>
            <li>Great music selection for an immersive experience</li>
          </ul>
        </div>
      </div>

      {/* Use Cases */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Why Choose This Money Clicker Game?</h2>
        <ul className="text-gray-600 list-disc pl-6 space-y-2">
          <li>Perfect for quick gaming breaks</li>
          <li>Ideal free browser idle game for casual players</li>
          <li>Engaging and relaxing gameplay mechanics</li>
          <li>Great for multitasking</li>
          <li>Accessible on any device with a browser, including mobile</li>
          <li>For a lag-free experience, try the TurboWarp version: <a href="https://turbowarp.org/332026728" className="text-blue-600 hover:underline">https://turbowarp.org/332026728</a></li>
        </ul>
      </div>

      {/* Credits */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Game Credits</h2>
        <ul className="text-gray-600 list-disc pl-6 space-y-2">
          <li>Creator: GAMING_GUY18</li>
          <li>Inspiration: Cookie Clicker</li>
          <li>Humor inspiration: Flying Gorilla</li>
          <li>Music: Fresh Air - Bslick (from Mining Simulator)</li>
        </ul>
      </div>

      {/* FAQ */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Free Browser Idle Game FAQ</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-gray-800">Is Money Clicker free to play?</h3>
            <p className="text-gray-600">Yes, enjoy this relaxing clicker game completely free in your browser!</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Are there any downloads required?</h3>
            <p className="text-gray-600">No downloads needed - play instantly in your web browser.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Will my progress be saved?</h3>
            <p className="text-gray-600">Currently, there are no save codes. Be sure not to close the tab if you want to keep your progress!</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Can I play on my phone or tablet?</h3>
            <p className="text-gray-600">Absolutely! The game is mobile friendly and works perfectly on all mobile devices.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Is there a lag-free version available?</h3>
            <p className="text-gray-600">Yes! For a smoother experience, try the TurboWarp version: <a href="https://turbowarp.org/332026728" className="text-blue-600 hover:underline">https://turbowarp.org/332026728</a></p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Is there a leaderboard?</h3>
            <p className="text-gray-600">Not yet, but the creator is considering adding an infinite leaderboard in the future.</p>
          </div>
        </div>
      </div>
    </div>
  </article>
</section>
</div>
        {/* Sidebar */}
        <div className="w-full md:w-1/3">
          <SimilarGamesPool currentGame={currentGame} />
        </div>
      </div>
    </div>
  );
} 