import SimilarGamesPool from '@/components/SimilarGamesPool';
import NewGamesPool from '@/components/NewGamesPool';
import GameContainer from '@/components/GameContainer';

export default function MoneyClickerPage() {
  // Define current game data
  const currentGame = {
    title: 'Minecraft Clicker',
    slug: '/minecraft-clicker',
    category: ['clicker', 'idle'],
    rating: 4.3,
    imageSrc: 'https://cdn2.scratch.mit.edu/get_image/project/21610188_480x360.png'
  };

  return (
    <div className="bg-[#f5f5f5]">
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 gap-6">
        {/* Main Content */}
        <div className="w-full md:w-2/3">
          {/* Game Container Section */}
          <section className="mb-8">
            <GameContainer 
              gameUrl="https://turbowarp.org/21610188/embed"
              gameTitle="Minecraft Clicker"
              gameLogoSrc="https://cdn2.scratch.mit.edu/get_image/project/21610188_480x360.png"
              rating={4.3}
              backgroundImageSrc="https://cdn2.scratch.mit.edu/get_image/project/21610188_480x360.png"
              thumbnailSrc="https://cdn2.scratch.mit.edu/get_image/project/21610188_480x360.png"
            />
          </section>


          <NewGamesPool />

   {/* Game Info SEO Section */}
<section className="bg-white rounded-lg shadow-md p-6">
  <article className="prose prose-lg max-w-none">
    <h1 className="text-3xl font-bold text-gray-800 mb-6">
      Minecraft Clicker - Free Browser Idle Game | Relaxing Clicker Games
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
            <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">Minecraft Themed</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">Cookie Clicker</span>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Best Free Browser Idle Game</h2>
        <p className="text-gray-600">
          Minecraft Clicker brings an exciting twist to relaxing clicker games! Click the cookie to begin, then explore the almost endless possibilities imposed by this Minecraft-themed version of Cookie Clicker. Created by MineBlox13 (based on user4567's original work), this game lets you interact, play and most importantly have fun with this somewhat unstable make of Cookie Clicker on Scratch. No downloads needed - just click, earn, upgrade, and watch your progress soar!
        </p>
      </div>

      {/* What is section */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">What is Minecraft Clicker?</h2>
        <p className="text-gray-600">
          Discover this unique Minecraft-themed idle game that combines the addictive gameplay of Cookie Clicker with the beloved aesthetic of Minecraft! With continuous updates since its initial release in May 2014, this game has evolved to include numerous features like mining, enchantments, various blocks, and multiple upgrades. The game has been refined over time with numerous bug fixes and feature additions, ensuring a smooth and engaging experience.
        </p>
      </div>

      {/* How to Play */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">How to Play This Free Browser Idle Game</h2>
        <ol className="text-gray-600 list-decimal pl-6 space-y-2 mb-6">
          <li>Click the cookie to collect cookies!</li>
          <li>Buy upgrades to increase your clicking power</li>
          <li>Purchase miners and enchantments to earn cookies automatically</li>
          <li>Change color by using arrow keys</li>
          <li>Use the space bar to click the block continuously</li>
          <li>Use cookieJar to share cookies globally</li>
        </ol>
        <p className="text-gray-600">
          Start your journey with simple clicks and watch your cookie collection grow! This free browser idle game lets you progress at your own pace. Purchase various upgrades like pickaxes, enchantments, and miners to multiply your earnings. The more you play, the more features you'll unlock!
        </p>
      </div>

      {/* Features */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Ultimate Relaxing Clicker Game Features</h2>
        <div className="space-y-6 text-gray-600">
          <p>
            Experience the perfect blend of casual gaming and strategic progression in this free browser idle game. Minecraft Clicker offers a unique take on the classic clicker genre with Minecraft-inspired elements!
          </p>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Minecraft Elements</h3>
            <p>
              Enjoy various Minecraft-themed upgrades including obsidian pickaxes, enchantment tables, miners, and different block types like sand, emerald, ender eye, and end stone!
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Extensive Update History</h3>
            <p>
              The game has been continuously improved since its initial release in May 2014, with numerous versions adding new features, fixing bugs, and enhancing gameplay. Check out the detailed change log to see how the game has evolved!
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Customization Options</h3>
            <p>
              Change the background (press 'b'), toggle music (press 'm'), and customize colors using arrow keys. You can also turn particles on/off for a personalized gaming experience!
            </p>
          </div>

          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>No download required - play instantly in your browser</li>
            <li>Minecraft-themed assets and gameplay</li>
            <li>Multiple upgrade paths to explore</li>
            <li>Enchantment system</li>
            <li>Special effects and particles</li>
            <li>Background music with toggle option</li>
            <li>High score tracking</li>
            <li>Points per second display</li>
          </ul>
        </div>
      </div>

      {/* Use Cases */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Why Choose This Minecraft Clicker Game?</h2>
        <ul className="text-gray-600 list-disc pl-6 space-y-2">
          <li>Perfect for Minecraft fans looking for a casual gaming experience</li>
          <li>Ideal free browser idle game for casual players</li>
          <li>Engaging and relaxing gameplay mechanics</li>
          <li>Great for multitasking</li>
          <li>Regularly updated with new features and bug fixes</li>
          <li>Active community with player feedback incorporated into updates</li>
        </ul>
      </div>

      {/* Change Log */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Game Change Log</h2>
        <div className="text-gray-600 text-sm h-48 overflow-y-auto p-3 border border-gray-200 rounded">
          <p className="mb-1">(5/5/2020) [v.1.13] Added back points.</p>
          <p className="mb-1">(11/23/15) [v.1.12] Fixed spelling mistakes!</p>
          <p className="mb-1">(8/25/14) [v.1.12] Fixed Some Printing Bugs!</p>
          <p className="mb-1">(8/25/14) [v.1.11] Now Prints your new your click value every time you click on the block!</p>
          <p className="mb-1">(8/24/14) [v.1.10] Points are printed, its not that orange var!</p>
          <p className="mb-1">(6/21/14) [v.1.01] Miner not OP (Over Powered) and reset high scores to make it fair!</p>
          <p className="mb-1">(5/9/14) [v.1.00] added high score, surprise (after cookie block), removed cheat!</p>
          <p className="mb-1">(5/8/14) [v.0.91] fixed bug.</p>
          <p className="mb-1">(5/8/14) [v.0.90] added great new songs, edited dialog, and made shop items more helpful.</p>
          <p className="mb-1">(5/7/14) [v.0.83] Fixed miner & Enchantments</p>
          <p className="mb-1">(5/7/14) [v.0.82] Cool new intro!</p>
          <p className="mb-1">(5/7/14) [v.0.81] Replaced Villager with miner, retextured miner!</p>
          <p className="mb-1">(5/7/14) [v.0.80] SFX, New Upgrade, Click effect!</p>
          <p className="mb-1">(5/7/14) [v.0.73] fixed Enchanting price, always a whole number and a bit cheaper!</p>
          <p className="mb-1">(5/7/14) [v.0.72] enchantment table now changes in price!</p>
          <p className="mb-1">(5/7/14) [v.0.71] fixed 2 bugs!</p>
          <p className="mb-1">(5/7/14) [v.0.70] added obsidian pickax, sand, ender eye, emerald, and end stone!</p>
          <p className="mb-1">(5/6/14) [v.0.60] New block, can only get one enchantment at a time, new enchantment, potato, change music(m), and Changed background(b).</p>
          <p className="mb-1">(5/6/14) [v.0.51] *Patched Cheat* Hold down space for a continuous click!</p>
          <p className="mb-1">(5/6/14) [v.0.50] Now shows click value, can turn off particles, and can click the block with space.</p>
          <p className="mb-1">(5/6/14) [v.0.42] Fixed Enchanting</p>
          <p className="mb-1">(5/6/14) [v.0.41] made the block upgrade a bit more helpful!</p>
          <p className="mb-1">(5/6/14) [v.0.40] Particles, enchantment upgrades, and enchantments.</p>
          <p className="mb-1">(5/6/14) [v.0.31] Rebalansed points!</p>
          <p className="mb-1">(5/6/14) [v.0.30] New Upgrades, Points per Sec, and new blocks!</p>
          <p className="mb-1">(5/5/14) [v.0.23] Changed background</p>
          <p className="mb-1">(5/5/14) [v.0.22] fixed bug (after you buy pickax it would try to buy the next pickax)</p>
          <p className="mb-1">(5/5/14) [v.0.21] fixed Points (will always be a whole number) and tweaked pickax cost.</p>
          <p className="mb-1">(5/5/14) [v.0.20] Music and upgrades</p>
          <p className="mb-1">(5/5/14)[v.0.10]- released.</p>
        </div>
      </div>

      {/* Credits */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Game Credits</h2>
        <ul className="text-gray-600 list-disc pl-6 space-y-2">
          <li>Creator: MineBlox13</li>
          <li>Original game: user4567</li>
        </ul>
      </div>

      {/* FAQ */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Free Browser Idle Game FAQ</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-gray-800">Is Minecraft Clicker free to play?</h3>
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
            <h3 className="font-semibold text-gray-800">What are the keyboard shortcuts?</h3>
            <p className="text-gray-600">Use arrow keys to change colors, space to click the block, 'b' to change the background, and 'm' to toggle music.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">How do I share cookies?</h3>
            <p className="text-gray-600">Use the cookieJar feature to share cookies globally with other players.</p>
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
