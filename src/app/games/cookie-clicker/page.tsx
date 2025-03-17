import SimilarGamesPool from '@/components/SimilarGamesPool';
import NewGamesPool from '@/components/NewGamesPool';
import GameContainer from '@/components/GameContainer';

export default function CookieClickerPage() {
  // Define current game data
  const currentGame = {
    title: 'Cookie Clicker',
    slug: '/cookie-clicker',
    category: ['clicker', 'idle'],
    rating: 4.3,
    imageSrc: 'https://cdn2.scratch.mit.edu/get_image/project/12575620_480x360.png'
  };

  return (
    <div className="bg-[#f5f5f5]">
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 gap-6">
        {/* Main Content */}
        <div className="w-full md:w-2/3">
          {/* Game Container Section */}
          <section className="mb-8">
            <GameContainer 
              gameUrl="https://turbowarp.org/12575620/embed"
              gameTitle="Cookie Clicker"
              gameLogoSrc="https://cdn2.scratch.mit.edu/get_image/project/12575620_480x360.png"
              rating={4.3}
              backgroundImageSrc="https://cdn2.scratch.mit.edu/get_image/project/12575620_480x360.png"
              thumbnailSrc="https://cdn2.scratch.mit.edu/get_image/project/12575620_480x360.png"
            />
          </section>


          <NewGamesPool />

         {/* Game Info SEO Section */}
<section className="bg-white rounded-lg shadow-md p-6">
  <article className="prose prose-lg max-w-none">
    <h1 className="text-3xl font-bold text-gray-800 mb-6">
      Cookie Clicker - Free Browser Idle Game | Relaxing Clicker Games
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
            <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">Cookie Clicker</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">Roblox Themed</span>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Best Free Browser Idle Game</h2>
        <p className="text-gray-600">
          Cookie Clicker brings an exciting twist to relaxing clicker games! Click your way through this Roblox-inspired browser game. No downloads needed - just click, earn, upgrade, and watch your progress soar. Perfect for casual gaming sessions when you want to unwind and still feel accomplished. Best of all? It's completely free and mobile friendly!
        </p>
      </div>

      {/* What is section */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">What is Cookie Clicker?</h2>
        <p className="text-gray-600">
          Discover the most entertaining idle game featuring Roblox-inspired themes! This addictive clicker game was created by j3or with code contributions from @Coltroc. Join thousands of players in this free browser game that combines casual fun with satisfying progression and Roblox aesthetics.
        </p>
      </div>

      {/* How to Play */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">How to Play This Free Browser Idle Game</h2>
        <ol className="text-gray-600 list-decimal pl-6 space-y-2 mb-6">
          <li>Click the cookies to earn points</li>
          <li>Buy upgrades at the shop to increase your clicking power</li>
          <li>Click the "i" button for more information</li>
          <li>Use the secret code "games" for 50,000 bonus clicks!</li>
          <li>Set up auto-clickers for idle earnings</li>
        </ol>
        <p className="text-gray-600">
          Start your journey with simple clicks and watch your empire grow! This free browser idle game lets you progress at your own pace. Purchase various upgrades to multiply your earnings. The more you play, the more features you'll unlock!
        </p>
      </div>

      {/* Features */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Ultimate Relaxing Clicker Game Features</h2>
        <div className="space-y-6 text-gray-600">
          <p>
            Experience the perfect blend of casual gaming and strategic progression in this free browser idle game. Cookie Clicker offers a unique take on the classic clicker genre with Roblox-inspired elements!
          </p>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Special Music</h3>
            <p>
              Enjoy a variety of tracks while you play, including the Roblox Theme Song, Wallpaper by Kevin Macleod, Collecting Cookies by The Living Tombstone + Mic The Microphone, and Radioactive by Imagine Dragons!
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
            <li>Mobile friendly design for all devices</li>
            <li>Multiple upgrade paths to explore</li>
            <li>Secret codes for bonus rewards</li>
            <li>Roblox-inspired themes and aesthetics</li>
            <li>Great music selection for an immersive experience</li>
          </ul>
        </div>
      </div>

      {/* Use Cases */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Why Choose This Cookie Clicker Game?</h2>
        <ul className="text-gray-600 list-disc pl-6 space-y-2">
          <li>Perfect for Roblox fans looking for a quick gaming break</li>
          <li>Ideal free browser idle game for casual players</li>
          <li>Engaging and relaxing gameplay mechanics</li>
          <li>Great for multitasking</li>
          <li>Accessible on any device with a browser, including mobile</li>
        </ul>
      </div>

      {/* Credits */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Game Credits</h2>
        <ul className="text-gray-600 list-disc pl-6 space-y-2">
          <li>Creator: j3or</li>
          <li>Code contributions: @Coltroc</li>
          <li>Inspiration: @GameXLegend123</li>
          <li>Music: Kevin Macleod, Roblox Theme Song, The Living Tombstone + Mic The Microphone, Imagine Dragons</li>
          <li>Special thanks to the admins: @hahahahhahhaheeh, @SmartFunnyGirl, @32ClaBec, @Bellathekittykat, @VBloomer, @Scratcher908638, @Wave-protogen-furry, @animal-1, @Cringeface12, and @plz_admin</li>
        </ul>
      </div>

      {/* FAQ */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Free Browser Idle Game FAQ</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-gray-800">Is Cookie Clicker free to play?</h3>
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
            <p className="text-gray-600">Absolutely! The game is mobile friendly and works perfectly on all mobile devices.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Are there any secret codes?</h3>
            <p className="text-gray-600">Yes! Try typing "games" for 50,000 bonus clicks!</p>
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
