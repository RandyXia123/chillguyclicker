import SimilarGamesPool from '@/components/SimilarGamesPool';
import NewGamesPool from '@/components/NewGamesPool';
import GameContainer from '@/components/GameContainer';

export default function PokemonClickerV2Page() {
  // Define current game data
  const currentGame = {
    title: 'Pokemon Clicker V2',
    slug: '/pokemon-clicker-v2',
    category: ['clicker', 'idle'],
    rating: 4.3,
    imageSrc: 'https://cdn2.scratch.mit.edu/get_image/project/13878266_480x360.png'
  };

  return (
    <div className="bg-[#f5f5f5]">
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 gap-6">
        {/* Main Content */}
        <div className="w-full md:w-2/3">
          {/* Game Container Section */}
          <section className="mb-8">
            <GameContainer 
              gameUrl="https://turbowarp.org/13878266/embed"
              gameTitle="Pokemon Clicker V2"
              gameLogoSrc="https://cdn2.scratch.mit.edu/get_image/project/13878266_480x360.png"
              rating={4.3}
              backgroundImageSrc="https://cdn2.scratch.mit.edu/get_image/project/13878266_480x360.png"
              thumbnailSrc="https://cdn2.scratch.mit.edu/get_image/project/13878266_480x360.png"
            />
          </section>


          <NewGamesPool />

{/* Game Info SEO Section */}
<section className="bg-white rounded-lg shadow-md p-6">
  <article className="prose prose-lg max-w-none">
    <h1 className="text-3xl font-bold text-gray-800 mb-6">
      Pokemon Clicker v2.0 - Free Browser Idle Game | Relaxing Clicker Games
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
            <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">Pokemon Themed</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">Cookie Clicker</span>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Best Free Browser Idle Game</h2>
        <p className="text-gray-600">
          Pokemon Clicker v2.0 brings an exciting twist to relaxing clicker games! It's Cookie Clicker, but with Pokemon! Created by 39mammals, this unique game lets you click a Pokeball to begin your journey of collecting Pokemon. With 71 different Pokemon available and the ability to customize your team, this game offers hours of fun for both Pokemon fans and clicker game enthusiasts alike.
        </p>
      </div>

      {/* What is section */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">What is Pokemon Clicker v2.0?</h2>
        <p className="text-gray-600">
          Discover this Pokemon-themed idle game that takes the addictive mechanics of Cookie Clicker and combines them with the beloved world of Pokemon! Click the Pokeball to catch Pokemon, then buy more Pokemon to increase your catching rate. Version 2.0 introduces exciting new features like customizable Pokemon loadouts, Mega Evolution, and special events like the rare Masterball appearance that rewards quick clickers with bonus catches.
        </p>
      </div>

      {/* How to Play */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">How to Play This Free Browser Idle Game</h2>
        <ol className="text-gray-600 list-decimal pl-6 space-y-2 mb-6">
          <li>Click the Pokeball to begin catching Pokemon</li>
          <li>Buy Pokemon to automatically catch more Pokemon for you</li>
          <li>Press numbers 1-9 on your keyboard to change which Pokemon you have out</li>
          <li>Look out for the rare Masterball and click it quickly for bonus rewards</li>
          <li>Progress through the game to unlock Mega Evolution</li>
          <li>Keep an eye on your Pokemon Per Second (PPS) rate to optimize your strategy</li>
        </ol>
        <p className="text-gray-600">
          Start your journey with simple clicks and watch your Pokemon collection grow! This free browser idle game lets you progress at your own pace. Purchase various Pokemon to multiply your catching rate and unlock new features. The more you play, the more Pokemon and features you'll unlock!
        </p>
      </div>

      {/* Features */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Ultimate Relaxing Clicker Game Features</h2>
        <div className="space-y-6 text-gray-600">
          <p>
            Experience the perfect blend of casual gaming and strategic progression in this free browser idle game. Pokemon Clicker v2.0 offers a unique take on the classic clicker genre with Pokemon-inspired elements!
          </p>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">71 Different Pokemon</h3>
            <p>
              Collect and display 71 different Pokemon in your game! From original starters to rare legendaries, there's a diverse roster of Pokemon to discover and collect.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Mega Evolution</h3>
            <p>
              The latest update introduces Mega Evolution to the game! Progress far enough and you'll unlock this powerful feature that boosts your Pokemon's capabilities.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Customizable Pokemon Team</h3>
            <p>
              Press numbers 1-9 on your keyboard to toggle through 65+ different Pokemon! Customize your active Pokemon display to show your favorites or most powerful catches.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Special Events</h3>
            <p>
              Watch for the rare Masterball appearance! When you see it, click quickly to earn bonus Pokemon and rewards.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Regular Updates</h3>
            <p>
              The game receives regular updates based on player feedback and Pokemon news. Recent updates have added the Alola region starters (Rowlet, Litten, and Popplio) in honor of Pokemon Sun and Moon!
            </p>
          </div>

          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>No download required - play instantly in your browser</li>
            <li>Pokemon-themed graphics and gameplay</li>
            <li>Multiple upgrade paths to explore</li>
            <li>Cloud Pokemon counting system</li>
            <li>Dynamic catching rate mechanics</li>
            <li>Regular updates with new Pokemon and features</li>
          </ul>
        </div>
      </div>

      {/* Use Cases */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Why Choose This Pokemon Clicker Game?</h2>
        <ul className="text-gray-600 list-disc pl-6 space-y-2">
          <li>Perfect for Pokemon fans looking for a casual gaming experience</li>
          <li>Ideal free browser idle game for clicker game enthusiasts</li>
          <li>Engaging and relaxing gameplay mechanics</li>
          <li>Great for multitasking</li>
          <li>Regular updates with new Pokemon and features</li>
          <li>Community-driven development with features based on player feedback</li>
        </ul>
      </div>

      {/* Update Log */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Update History</h2>
        <div className="space-y-4 text-gray-600">
          <div>
            <h3 className="font-semibold text-gray-800">5/24/2016:</h3>
            <p>MEGA EVOLUTION is now up and running, based on player feedback! Progress far into the game to unlock this powerful feature.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">5/19/2016:</h3>
            <p>Some prices have changed and the way Pokemon are counted is different now. This fixes issues where PPS (Pokemon Per Second) wasn't calculating correctly.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">5/11/2016:</h3>
            <p>In honor of Pokemon Sun and Pokemon Moon, Rowlet, Litten, and Popplio have joined the other starters as options!</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">5/8/2016:</h3>
            <p>Choose your own Pokemon loadout! Toggle through 65 different Pokemon by pressing numbers 1-9.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">6/4/2014:</h3>
            <p>Now counting cloud Pokemon!</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">5/23/2014:</h3>
            <p>Masterball now available! If you see it, get clicking!</p>
          </div>
        </div>
      </div>

      {/* Credits */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Game Credits</h2>
        <ul className="text-gray-600 list-disc pl-6 space-y-2">
          <li>Creator: 39mammals</li>
          <li>Inspiration: Cookie Clicker</li>
          <li>Pokemon characters and concepts belong to their respective owners. All rights reserved.</li>
        </ul>
      </div>

      {/* FAQ */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Free Browser Idle Game FAQ</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-gray-800">Is Pokemon Clicker v2.0 free to play?</h3>
            <p className="text-gray-600">Yes, enjoy this relaxing clicker game completely free in your browser!</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">How do I change which Pokemon I have out?</h3>
            <p className="text-gray-600">Press numbers 1-9 on your keyboard to toggle through different Pokemon in your collection.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">How do I unlock Mega Evolution?</h3>
            <p className="text-gray-600">You need to progress far into the game to unlock the Mega Evolution feature. Keep playing and it will become available!</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">What's the Masterball?</h3>
            <p className="text-gray-600">The Masterball is a rare special event. If you see it appear, click on it quickly to receive bonus rewards!</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">How many Pokemon are in the game?</h3>
            <p className="text-gray-600">There are 71 different Pokemon available in the game, including starters from various regions!</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Will more Pokemon be added?</h3>
            <p className="text-gray-600">The creator regularly updates the game based on player feedback and Pokemon news. Feel free to suggest Pokemon you'd like to see added in the comments!</p>
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
