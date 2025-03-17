"use client";

import SimilarGamesPool from '@/components/SimilarGamesPool';
import NewGamesPool from '@/components/NewGamesPool';
import GameContainer from '@/components/GameContainer';

export default function CandyClicker2Page() {
  // Define current game data
  const currentGame = {
    title: 'Candy Clicker 2',
    slug: '/candy-clicker-2',
    category: ['clicker', 'idle'],
    rating: 4.3,
    imageSrc: 'https://cdn2.scratch.mit.edu/get_image/project/332026728_480x360.png'
  };

  return (
    <div className="bg-[#f5f5f5]">
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 gap-6">
        {/* Main Content */}
        <div className="w-full md:w-2/3">
          {/* Game Container Section */}
          <section className="mb-8">
            <GameContainer 
              gameUrl="https://turbowarp.org/332026728/embed"
              gameTitle="Candy Clicker 2"
              gameLogoSrc="https://cdn2.scratch.mit.edu/get_image/project/332026728_480x360.png"
              rating={4.3}
              backgroundImageSrc="https://cdn2.scratch.mit.edu/get_image/project/332026728_480x360.png"
              thumbnailSrc="https://cdn2.scratch.mit.edu/get_image/project/332026728_480x360.png"
            />
          </section>

          <NewGamesPool />

        {/* Game Info SEO Section */}
<section className="bg-white rounded-lg shadow-md p-6">
  <article className="prose prose-lg max-w-none">
    <h1 className="text-3xl font-bold text-gray-800 mb-6">
      Candy Clicker 2 - Free Browser Idle Game | Relaxing Clicker Games
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
            <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">Candy Clicker</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">Scratch Project</span>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Best Free Browser Idle Game</h2>
        <p className="text-gray-600">
          Candy Clicker 2 brings an exciting twist to relaxing clicker games! Click cookies to earn points and buy upgrades in this addictive browser game. No downloads needed - just click, earn, upgrade, and watch your progress soar. Perfect for casual gaming sessions when you want to unwind and still feel accomplished. Best of all? It's completely free and mobile friendly!
        </p>
      </div>

      {/* What is section */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">What is Candy Clicker 2?</h2>
        <p className="text-gray-600">
          Discover one of the most popular idle games with over 296,700 views! Created by Coltroc with additional features by j3or, this addictive clicker game has become a sensation with over 22 million cookies clicked by players worldwide. Join thousands in this free browser game that combines casual fun with satisfying progression.
        </p>
      </div>

      {/* How to Play */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">How to Play This Free Browser Idle Game</h2>
        <ol className="text-gray-600 list-decimal pl-6 space-y-2 mb-6">
          <li>Click on the candy to earn candies</li>
          <li>Buy upgrades to get automatic candies added</li>
          <li>Use the secret code "games" for 50,000 bonus clicks</li>
          <li>See how many of each upgrade you can get</li>
          <li>Click the "i" button for more information</li>
        </ol>
        <p className="text-gray-600">
          Start your journey with simple clicks and watch your candy empire grow! This free browser idle game lets you progress at your own pace. Purchase various upgrades to multiply your candy earnings. The more you play, the more features you'll unlock!
        </p>
      </div>

      {/* Features */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Ultimate Relaxing Clicker Game Features</h2>
        <div className="space-y-6 text-gray-600">
          <p>
            Experience the perfect blend of casual gaming and strategic progression in this free browser idle game. Candy Clicker 2 offers a unique take on the classic clicker genre with impressive statistics:
          </p>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Impressive Stats</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Over 22,175,000 candies clicked by Scratchers</li>
              <li>Approximately 48,830 hours of gameplay</li>
              <li>296,700+ views and counting!</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Special Music</h3>
            <p>
              Enjoy a variety of tracks while you play, including Wallpaper by Kevin Macleod, Roblox Theme Song, Collecting Cookies by The Living Tombstone + Mic The Microphone, and Radioactive by Imagine Dragons!
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Progression System</h3>
            <p>
              Level up your clicking power with various upgrades and achievements. Watch your candy count multiply as you unlock new features and bonuses!
            </p>
          </div>

          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>No download required - play instantly in your browser</li>
            <li>Mobile friendly design for all devices</li>
            <li>Multiple upgrade paths to explore</li>
            <li>Secret codes for bonus rewards</li>
            <li>Community-driven with regular updates based on player suggestions</li>
            <li>Great music selection for an immersive experience</li>
          </ul>
        </div>
      </div>

      {/* Use Cases */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Why Choose This Candy Clicker Game?</h2>
        <ul className="text-gray-600 list-disc pl-6 space-y-2">
          <li>Perfect for quick gaming breaks</li>
          <li>Ideal free browser idle game for casual players</li>
          <li>Engaging and relaxing gameplay mechanics</li>
          <li>Great for multitasking</li>
          <li>Accessible on any device with a browser, including mobile</li>
          <li>Active community with over 296,700 views</li>
        </ul>
      </div>

      {/* Credits */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Game Credits</h2>
        <ul className="text-gray-600 list-disc pl-6 space-y-2">
          <li>Original creator: Coltroc</li>
          <li>Additional features: j3or</li>
          <li>Inspiration: @GameXLegend123</li>
          <li>Music: Kevin Macleod, Roblox Theme Song, The Living Tombstone + Mic The Microphone, Imagine Dragons</li>
          <li>Check out more projects: <a href="https://scratch.mit.edu/users/j3or" className="text-blue-600 hover:underline">https://scratch.mit.edu/users/j3or</a></li>
          <li>Special thanks to all the players and admin team!</li>
        </ul>
      </div>

      {/* FAQ */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Free Browser Idle Game FAQ</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-gray-800">Is Candy Clicker 2 free to play?</h3>
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
          <div>
            <h3 className="font-semibold text-gray-800">Can I suggest new features?</h3>
            <p className="text-gray-600">Absolutely! Comment your ideas and they may be implemented in future updates.</p>
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