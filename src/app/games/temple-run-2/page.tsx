import SimilarGamesPool from '@/components/SimilarGamesPool';
import NewGamesPool from '@/components/NewGamesPool';
import GameContainer from '@/components/GameContainer';

export default function TempleRun2Page() {
  // Define current game data
  const currentGame = {
    title: 'Temple Run 2',
    slug: '/temple-run-2',
    category: ['action'],
    rating: 4.6,
    imageSrc: '/images/game-thumbnails/templerun22-m180x180.webp'
  };

  return (
    <div className="bg-[#f5f5f5]">
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 gap-6">
        {/* Main Content */}
        <div className="w-full md:w-2/3">
          {/* Game Container Section */}
          <section className="mb-8">
            <GameContainer 
              gameUrl="https://azgames.io/temple-run-2.embed"
              gameTitle="Temple Run 2"
              gameLogoSrc="/images/game-thumbnails/templerun22-m180x180.webp"
              rating={4.6}
              backgroundImageSrc="/images/game-thumbnails/templerun22-m180x180.webp"
              thumbnailSrc="/images/game-thumbnails/templerun22-m180x180.webp"
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
      Temple Run 2 - Free Browser Game | Action Games
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
            <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">Action Game</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">Free Browser Game</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">Temple Run</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">Adventure Themed</span>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Best Free Browser Action Game</h2>
        <p className="text-gray-600">
          Temple Run 2 brings an exciting adventure to the endless runner genre! Created by Imangi Studios, this temple exploration game lets you run, jump, slide, and dodge obstacles while being chased by demonic monkeys. With stunning visuals and fast-paced gameplay, you'll find yourself coming back for more. No downloads needed - just run, collect coins, unlock characters, and try to beat the world record!
        </p>
      </div>

      {/* What is section */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">What is Temple Run 2?</h2>
        <p className="text-gray-600">
          Discover this thrilling temple-themed endless runner that's captivated millions worldwide! Originally released in January 2013, Temple Run 2 challenges you to help your explorer escape the clutches of evil demon monkeys by running through ancient temples, zip lines, mine tracks, and forests. Collect coins during your run to purchase power-ups, unlock new characters, and enhance your abilities. With its beautiful 3D graphics and intuitive swipe controls, this game offers an adrenaline-pumping experience for players of all ages.
        </p>
      </div>

      {/* How to Play */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">How to Play This Free Browser Action Game</h2>
        <ol className="text-gray-600 list-decimal pl-6 space-y-2 mb-6">
          <li>Swipe up to jump over obstacles and gaps</li>
          <li>Swipe down to slide under barriers</li>
          <li>Swipe left or right to turn at intersections</li>
          <li>Tilt your device to move from side to side and collect coins</li>
          <li>Collect power-ups to activate special abilities like coin magnets and shields</li>
          <li>Try to run as far as possible to beat your personal best and global records</li>
        </ol>
        <p className="text-gray-600">
          Start your adventure by escaping the temple and watch how far you can run! This free browser action game lets you progress at your own skill level. Purchase various upgrades to enhance your abilities. The more you play, the better you'll become at navigating the treacherous temple paths!
        </p>
      </div>

      {/* Features */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Ultimate Action Runner Game Features</h2>
        <div className="space-y-6 text-gray-600">
          <p>
            Experience the perfect blend of fast-paced action and strategic obstacle avoidance in this free browser adventure game. Temple Run 2 offers an enhanced version of the classic runner genre with beautiful environments and exciting challenges!
          </p>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Stunning Graphics</h3>
            <p>
              Enjoy the breathtaking visuals as you navigate through cliffs, forests, and ruins! The detailed 3D environments bring the ancient temple world to life with vibrant colors and immersive scenery.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Simple Yet Challenging Gameplay</h3>
            <p>
              The intuitive controls make this game easy to learn but difficult to master. Just swipe to jump, slide, and turn as you navigate increasingly difficult obstacles at faster speeds!
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Global Leaderboards</h3>
            <p>
              Challenge yourself to beat your personal best distance and compete against players worldwide! Compare your skills with friends and climb the global rankings.
            </p>
          </div>

          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>No download required - play instantly in your browser</li>
            <li>Unique environments with varied terrain and obstacles</li>
            <li>Multiple characters to unlock with special abilities</li>
            <li>Power-ups and bonuses to enhance your run</li>
            <li>Competitive element with global leaderboards</li>
            <li>Responsive controls designed for players of all ages</li>
          </ul>
        </div>
      </div>

      {/* Use Cases */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Why Choose This Temple Run 2 Game?</h2>
        <ul className="text-gray-600 list-disc pl-6 space-y-2">
          <li>Perfect for quick gaming breaks when you need an adrenaline rush</li>
          <li>Ideal free browser action game for casual and competitive players</li>
          <li>Engaging and exciting gameplay mechanics</li>
          <li>Great for improving reflexes and coordination</li>
          <li>Immersive temple exploration experience</li>
          <li>Simple enough for anyone to enjoy, with depth for experienced gamers</li>
        </ul>
      </div>

      {/* Special Features Section */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Special Game Environments</h2>
        <div className="bg-gray-50 p-4 rounded-md text-gray-600 text-sm">
          <p className="mb-2">Sky High Ziplines</p>
          <p className="mb-2">Dangerous Mine Cart Tracks</p>
          <p className="mb-2">Dense Forest Paths</p>
          <p className="mb-2">Ancient Temple Ruins</p>
          <p className="mb-2">Flowing Water Rapids</p>
          <p className="mb-2">Crumbling Cliff Edges</p>
          <p className="mb-2">Mysterious Artifact Collections</p>
          <p className="mb-2">Deadly Spike Traps and Fire Pits</p>
          <p className="text-xs text-gray-500 mt-2">(Environments featured in the game)</p>
        </div>
      </div>

      {/* Credits */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Game Credits</h2>
        <ul className="text-gray-600 list-disc pl-6 space-y-2">
          <li>Creator: Imangi Studios</li>
          <li>Original Release Date: January 17, 2013</li>
        </ul>
      </div>

      {/* Pro Tips */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Pro Tips</h2>
        <div className="space-y-4 text-gray-600">
          <div>
            <h3 className="font-semibold text-gray-800">Developer's Advice:</h3>
            <p>"Focus on the path ahead, not just the immediate obstacles" - Imangi Studios</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Strategy Tip:</h3>
            <p>Save your resurrection wings for later in the run when speeds are higher and obstacles are more challenging!</p>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Free Browser Action Game FAQ</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-gray-800">Is Temple Run 2 free to play?</h3>
            <p className="text-gray-600">Yes, enjoy this thrilling action game completely free in your browser!</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">What's the main goal of the game?</h3>
            <p className="text-gray-600">Your goal is to run as far as possible while collecting coins and avoiding obstacles.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">How do I earn coins?</h3>
            <p className="text-gray-600">Simply collect the gold coins along the path as you run through the temple.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">What can I do with my coins?</h3>
            <p className="text-gray-600">You can use your coins to unlock new characters, upgrade abilities, and purchase power-ups.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Are there different characters to choose from?</h3>
            <p className="text-gray-600">Yes! The game features multiple unlockable characters, each with unique abilities to enhance your gameplay.</p>
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
