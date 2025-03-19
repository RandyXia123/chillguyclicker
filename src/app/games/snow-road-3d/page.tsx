import SimilarGamesPool from '@/components/SimilarGamesPool';
import NewGamesPool from '@/components/NewGamesPool';
import GameContainer from '@/components/GameContainer';
import { useEffect } from 'react';

export default function SnowRoad3DPage() {
  // Define current game data
  const currentGame = {
    title: 'Snow Road 3D',
    slug: '/snow-road-3d',
    category: ['action'],
    rating: 4.5,
    imageSrc: '/images/game-thumbnails/snowroad-m180x180.webp/'
  };

  return (
    <div className="bg-[#f5f5f5]">
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 gap-6">
        {/* Main Content */}
        <div className="w-full md:w-2/3">
          {/* Game Container Section */}
          <section className="mb-8">
            <GameContainer 
              gameUrl="https://game.azgame.io/snow-road-3d/"
              gameTitle="Snow Road 3D"
              gameLogoSrc="/images/game-thumbnails/snowroad-m180x180.webp"
              rating={4.5}
              backgroundImageSrc="/images/game-thumbnails/snowroad-m180x180.webp"
              thumbnailSrc="/images/game-thumbnails/snowroad-m180x180.webp"
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
      Snow Road 3D - Free Browser Game | Racing Games
    </h1>
    
    <div className="space-y-8">
      {/* Category & Tags */}
      <div className="flex flex-wrap gap-4">
        <div>
          <span className="font-semibold text-gray-700">Category:</span>
          <span className="ml-2 px-3 py-1 bg-gray-100 rounded-full text-gray-600">Endless Runner Game</span>
        </div>
        <div>
          <span className="font-semibold text-gray-700">Tags:</span>
          <div className="inline-flex gap-2 ml-2">
            <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">Winter Racing</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">Free Browser Game</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">Snowmobile</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">3D Graphics</span>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Best Free Browser Winter Racing Game</h2>
        <p className="text-gray-600">
          Get ready to conquer the icy peaks in Snow Road 3D and challenge your reflex skills! This thrilling endless runner puts you on a snowmobile racing down breathtaking winter landscapes filled with obstacles and collectibles. Navigate through wild obstacles, collect beautiful gifts scattered across the icy paths, and see how far you can go on this endless snowy road! With stunning 3D visuals, smooth controls, and an addictive progression system, you'll find yourself coming back for more. No downloads needed - just race, collect, upgrade, and compete for the highest distances!
        </p>
      </div>

      {/* What is section */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">What is Snow Road 3D?</h2>
        <p className="text-gray-600">
          Discover this exhilarating winter racing game that combines stunning visuals with addictive gameplay! Developed by Azgames, Snow Road 3D challenges you to race down breathtaking mountains on your trusty snowmobile, navigating through increasingly difficult obstacles while collecting gifts along the way. The game features a dazzling winter wonderland with realistic snow effects, dynamic lighting, and immersive environments that make you feel like you're truly speeding down icy peaks. As you progress and collect items, you'll unlock powerful new snowmobiles with enhanced capabilities to help you reach greater distances. Whether you're a seasoned racing game veteran or new to the genre, Snow Road 3D offers an accessible yet challenging experience that will test your reflexes and keep you entertained for hours.
        </p>
      </div>

      {/* How to Play */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">How to Play This Free Browser Racing Game</h2>
        <ol className="text-gray-600 list-decimal pl-6 space-y-2 mb-6">
          <li>Control your snowmobile to navigate through the icy mountain paths</li>
          <li>Dodge obstacles like trees, rocks, and chasms to avoid crashes</li>
          <li>Collect colorful gifts scattered throughout the course</li>
          <li>Use collected items to unlock new snowmobiles with better stats</li>
          <li>Try to travel as far as possible on the endless snowy road</li>
          <li>Beat your personal best and compete against other players' distances</li>
        </ol>
        <p className="text-gray-600">
          Start your winter adventure with a basic snowmobile and master the controls! This free browser racing game rewards both quick reflexes and strategic item collection. Pay attention to the terrain changes and upcoming obstacles to maximize your distance. As you collect more gifts, you'll be able to unlock more powerful vehicles that will help you conquer the slopes and become the ultimate snowmobile master!
        </p>
      </div>

      {/* Features */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Ultimate Winter Racing Features</h2>
        <div className="space-y-6 text-gray-600">
          <p>
            Experience the perfect blend of accessible gameplay and challenging obstacles in this free browser winter racing game. Snow Road 3D offers breathtaking visuals, smooth controls, and a rewarding progression system that keeps you coming back for more!
          </p>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Stunning 3D Graphics</h3>
            <p>
              Immerse yourself in a beautiful winter wonderland with detailed snow effects, realistic lighting, and breathtaking mountain scenery! The visually impressive environments make every run feel fresh and exciting.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Unlockable Snowmobiles</h3>
            <p>
              Collect gifts during your runs to unlock powerful new snowmobiles! Each vehicle has unique stats and capabilities, allowing you to customize your racing experience and reach greater distances.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Endless Challenge</h3>
            <p>
              The procedurally generated endless track ensures no two runs are exactly the same! Face increasingly difficult obstacles and terrain variations the further you progress, testing your reflexes and adaptability.
            </p>
          </div>

          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>No download required - play instantly in your browser</li>
            <li>Smooth, responsive controls optimized for keyboard</li>
            <li>Beautiful winter environments with dynamic weather effects</li>
            <li>Collectible gifts that enhance your progression</li>
            <li>Competitive leaderboards to compare your best distances</li>
            <li>Progressive difficulty that keeps you challenged</li>
          </ul>
        </div>
      </div>

      {/* Use Cases */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Why Choose This Winter Racing Game?</h2>
        <ul className="text-gray-600 list-disc pl-6 space-y-2">
          <li>Perfect for quick gaming sessions when you need a winter-themed adventure</li>
          <li>Ideal free browser game for racing enthusiasts of all skill levels</li>
          <li>Great for improving reflexes and decision-making skills</li>
          <li>Satisfying progression system with unlockable content</li>
          <li>Visually impressive 3D graphics that stand out among browser games</li>
          <li>Accessible controls that are easy to learn but challenging to master</li>
        </ul>
      </div>

      {/* Game Elements Section */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Exciting Game Elements</h2>
        <div className="bg-gray-50 p-4 rounded-md text-gray-600 text-sm">
          <p className="mb-2">Stunning Snowy Landscapes - Race through picturesque mountain scenery</p>
          <p className="mb-2">Dynamic Obstacles - Navigate through trees, rocks, ice patches, and chasms</p>
          <p className="mb-2">Colorful Gift Collectibles - Gather presents to unlock special rewards</p>
          <p className="mb-2">Multiple Snowmobile Types - Each with unique handling and speed stats</p>
          <p className="mb-2">Day/Night Cycles - Experience different lighting conditions during your runs</p>
          <p className="mb-2">Weather Effects - Face challenges like snowstorms and fog</p>
          <p className="mb-2">Spectacular Jumps - Catch air off ramps and natural terrain features</p>
          <p className="mb-2">Distance Milestones - Unlock special rewards at certain distances</p>
          <p className="text-xs text-gray-500 mt-2">(Elements featured in Snow Road 3D)</p>
        </div>
      </div>

      {/* Credits */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Game Credits</h2>
        <ul className="text-gray-600 list-disc pl-6 space-y-2">
          <li>Developer: Azgames</li>
          <li>Genre: Endless Runner/Winter Racing</li>
        </ul>
      </div>

      {/* Pro Tips */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Pro Tips</h2>
        <div className="space-y-4 text-gray-600">
          <div>
            <h3 className="font-semibold text-gray-800">Developer's Advice:</h3>
            <p>"Focus on collecting gifts while maintaining speed - they're the key to unlocking better snowmobiles!" - Azgames</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Strategy Tip:</h3>
            <p>Look ahead and plan your route through obstacles rather than reacting at the last second. The further you can see ahead, the better decisions you'll make!</p>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Free Browser Winter Racing Game FAQ</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-gray-800">Is Snow Road 3D free to play?</h3>
            <p className="text-gray-600">Yes, enjoy this exhilarating winter racing game completely free in your browser!</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">What are the controls for Snow Road 3D?</h3>
            <p className="text-gray-600">Use the arrow keys or WASD to navigate your snowmobile through the snowy terrain.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">How do I unlock new snowmobiles?</h3>
            <p className="text-gray-600">Collect the colorful gifts scattered throughout the course to earn points towards unlocking new, more powerful snowmobiles.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Is there an end to the game?</h3>
            <p className="text-gray-600">Snow Road 3D is an endless runner, so there's no final level or endpoint - the challenge is to see how far you can go before crashing!</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Does the game get more difficult as I progress?</h3>
            <p className="text-gray-600">Yes! The further you travel, the more challenging the obstacles and terrain become, requiring quicker reflexes and better decision-making.</p>
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
