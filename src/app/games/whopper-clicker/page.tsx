import SimilarGamesPool from '@/components/SimilarGamesPool';
import NewGamesPool from '@/components/NewGamesPool';
import GameContainer from '@/components/GameContainer';

export default function WhopperClickerPage() {
  // Define current game data
  const currentGame = {
    title: 'Whopper Clicker',
    slug: '/whopper-clicker',
    category: ['clicker', 'idle'],
    rating: 4.3,
    imageSrc: 'https://cdn2.scratch.mit.edu/get_image/project/834840279_480x360.png'
  };

  return (
    <div className="bg-[#f5f5f5]">
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 gap-6">
        {/* Main Content */}
        <div className="w-full md:w-2/3">
          {/* Game Container Section */}
          <section className="mb-8">
            <GameContainer 
              gameUrl="https://turbowarp.org/834840279/embed"
              gameTitle="Whopper Clicker"
              gameLogoSrc="https://cdn2.scratch.mit.edu/get_image/project/834840279_480x360.png"
              rating={4.3}
              backgroundImageSrc="https://cdn2.scratch.mit.edu/get_image/project/834840279_480x360.png"
              thumbnailSrc="https://cdn2.scratch.mit.edu/get_image/project/834840279_480x360.png"
            />
          </section>


          <NewGamesPool />

  {/* Game Info SEO Section */}
<section className="bg-white rounded-lg shadow-md p-6">
  <article className="prose prose-lg max-w-none">
    <h1 className="text-3xl font-bold text-gray-800 mb-6">
      Whopper Clicker - Free Browser Idle Game | Relaxing Clicker Games
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
            <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">Whopper Clicker</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">Burger Themed</span>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Best Free Browser Idle Game</h2>
        <p className="text-gray-600">
          Whopper Clicker brings a delicious twist to relaxing clicker games! Created by SquareXYZ, this burger-themed clicker game lets you click THE WHOOOOOOPPER to earn more WHOOOOOOPPERS. With a catchy theme and simple yet addictive gameplay, you'll find yourself coming back for more. No downloads needed - just click, earn, upgrade, and try to beat the world record!
        </p>
      </div>

      {/* What is section */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">What is Whopper Clicker?</h2>
        <p className="text-gray-600">
          Discover this delightful burger-themed idle game that's taking the internet by storm! Originally created on April 18, 2023, Whopper Clicker challenges you to click on the WHOOOOOOPPER in the middle of the screen to earn WHOOOOOOPPERS. Use your earnings to purchase upgrades, increase your click power, and boost your WHOOOOOOPPERS per second. With its catchy theme song and simple yet engaging mechanics, this game offers a fun, lighthearted experience for players of all ages.
        </p>
      </div>

      {/* How to Play */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">How to Play This Free Browser Idle Game</h2>
        <ol className="text-gray-600 list-decimal pl-6 space-y-2 mb-6">
          <li>Click THE WHOOOOOOPPER in the middle of the screen to earn WHOOOOOOPPERS</li>
          <li>Use your WHOOOOOOPPERS to buy upgrades</li>
          <li>Increase your click power to earn more WHOOOOOOPPERS per click</li>
          <li>Buy automatic WHOOOOOOPPERS per second upgrades</li>
          <li>Try to get as many WHOOOOOOPPERS as possible</li>
          <li>Challenge yourself to beat the world record</li>
        </ol>
        <p className="text-gray-600">
          Start your journey with simple clicks and watch your WHOOOOOOPPERS collection grow! This free browser idle game lets you progress at your own pace. Purchase various upgrades to multiply your earnings. The more you play, the more WHOOOOOOPPERS you'll accumulate!
        </p>
      </div>

      {/* Features */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Ultimate Relaxing Clicker Game Features</h2>
        <div className="space-y-6 text-gray-600">
          <p>
            Experience the perfect blend of casual gaming and strategic progression in this free browser idle game. Whopper Clicker offers a unique take on the classic clicker genre with burger-themed elements and catchy music!
          </p>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Catchy Theme Song</h3>
            <p>
              Enjoy the now-famous Whopper jingle while you play! The repetitive yet strangely addictive lyrics will have you singing "Whopper, Whopper, Whopper, Whopper" long after you've stopped playing.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Simple Yet Addictive Gameplay</h3>
            <p>
              The straightforward mechanics make this game easy to pick up but hard to put down. Just click THE WHOOOOOOPPER, buy upgrades, and watch your WHOOOOOOPPERS count soar!
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">World Record Challenge</h3>
            <p>
              Challenge yourself to beat the world record for most WHOOOOOOPPERS collected! Compete against other players for burger-clicking supremacy.
            </p>
          </div>

          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>No download required - play instantly in your browser</li>
            <li>Burger-themed graphics and gameplay</li>
            <li>Multiple upgrade paths to explore</li>
            <li>Catchy theme song to keep you entertained</li>
            <li>Competitive element with world record challenges</li>
            <li>Simple interface designed for players of all ages</li>
          </ul>
        </div>
      </div>

      {/* Use Cases */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Why Choose This Whopper Clicker Game?</h2>
        <ul className="text-gray-600 list-disc pl-6 space-y-2">
          <li>Perfect for quick gaming breaks when you're feeling hungry for fun</li>
          <li>Ideal free browser idle game for casual players</li>
          <li>Engaging and relaxing gameplay mechanics</li>
          <li>Great for multitasking</li>
          <li>Amusing theme song that will get stuck in your head</li>
          <li>Simple enough for anyone to enjoy, regardless of gaming experience</li>
        </ul>
      </div>

      {/* Whopper Song Lyrics */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">The Famous Whopper Song</h2>
        <div className="bg-gray-50 p-4 rounded-md text-gray-600 text-sm">
          <p className="mb-2">Whopper, Whopper, Whopper, Whopper</p>
          <p className="mb-2">Junior, Double, Triple Whopper</p>
          <p className="mb-2">Flame-grilled taste with perfect toppers</p>
          <p className="mb-2">I rule, I rule, I rule this day</p>
          <p className="mb-2">Lettuce, Mayo, Pickle, Ketchup</p>
          <p className="mb-2">It's okay if I don't want that</p>
          <p className="mb-2">Impossible or bacon Whopper</p>
          <p className="mb-2">Any Whopper my way, Any Whopper my way</p>
          <p className="text-xs text-gray-500 mt-2">(Lyrics featured in the game)</p>
        </div>
      </div>

      {/* Credits */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Game Credits</h2>
        <ul className="text-gray-600 list-disc pl-6 space-y-2">
          <li>Creator: SquareXYZ</li>
          <li>Original Release Date: April 18, 2023</li>
        </ul>
      </div>

      {/* Pro Tips */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Pro Tips</h2>
        <div className="space-y-4 text-gray-600">
          <div>
            <h3 className="font-semibold text-gray-800">Creator's Advice:</h3>
            <p>"Click THE WHOOOOOOPPER" - SquareXYZ</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Strategy Tip:</h3>
            <p>Balance your upgrades between click power and WHOOOOOOPPERS per second to maximize your earning potential!</p>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Free Browser Idle Game FAQ</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-gray-800">Is Whopper Clicker free to play?</h3>
            <p className="text-gray-600">Yes, enjoy this relaxing clicker game completely free in your browser!</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">What's the main goal of the game?</h3>
            <p className="text-gray-600">Your goal is to get as many WHOOOOOOPPERS as you can or beat the world record.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">How do I earn WHOOOOOOPPERS?</h3>
            <p className="text-gray-600">Simply click THE WHOOOOOOPPER in the middle of the screen to earn WHOOOOOOPPERS.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">What can I do with my WHOOOOOOPPERS?</h3>
            <p className="text-gray-600">You can use your WHOOOOOOPPERS to buy upgrades for click power and WHOOOOOOPPERS per second.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Is there a world record to beat?</h3>
            <p className="text-gray-600">Yes! The game challenges you to get as many WHOOOOOOPPERS as possible or beat the current world record.</p>
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
