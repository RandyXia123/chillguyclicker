import SimilarGamesPool from '@/components/SimilarGamesPool';
import NewGamesPool from '@/components/NewGamesPool';
import GameContainer from '@/components/GameContainer';

export default function MoneyClickerPage() {
  // Define current game data
  const currentGame = {
    title: 'Fortnite Clicker',
    slug: '/fortnite-clicker',
    category: ['clicker', 'idle'],
    rating: 4.3,
    imageSrc: 'https://cdn2.scratch.mit.edu/get_image/project/284682486_480x360.png'
  };

  return (
    <div className="bg-[#f5f5f5]">
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 gap-6">
        {/* Main Content */}
        <div className="w-full md:w-2/3">
          {/* Game Container Section */}
          <section className="mb-8">
            <GameContainer 
              gameUrl="https://turbowarp.org/284682486/embed"
              gameTitle="Fortnite Clicker"
              gameLogoSrc="https://cdn2.scratch.mit.edu/get_image/project/284682486_480x360.png"
              rating={4.3}
              backgroundImageSrc="https://cdn2.scratch.mit.edu/get_image/project/284682486_480x360.png"
              thumbnailSrc="https://cdn2.scratch.mit.edu/get_image/project/284682486_480x360.png"
            />
          </section>


          <NewGamesPool />

 {/* Game Info SEO Section */}
<section className="bg-white rounded-lg shadow-md p-6">
  <article className="prose prose-lg max-w-none">
    <h1 className="text-3xl font-bold text-gray-800 mb-6">
      Fortnite Clicker - Free Browser Idle Game | Relaxing Clicker Games
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
            <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">Fortnite Themed</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">V-Bucks Clicker</span>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Best Free Browser Idle Game</h2>
        <p className="text-gray-600">
          Fortnite Clicker brings an exciting twist to relaxing clicker games! Created by mineshot108, this Fortnite-themed clicker game has garnered over 250,000 views and has been featured as Top Loved, Top Remixed, and Top Trending. Even @DerpAnimation has checked it out! Click the Fortnite Logo to earn V-Bucks, hunt for Loot Llamas for cash boosts, and aim for the high score to get that Victory Royale!
        </p>
      </div>

      {/* What is section */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">What is Fortnite Clicker?</h2>
        <p className="text-gray-600">
          Discover this popular Fortnite-themed idle game that brings the excitement of Battle Royale to the addictive clicker genre! Fortnite Clicker lets you earn V-Bucks by clicking on the Fortnite Logo, find Loot Llamas for bonus cash, and purchase upgrades to increase your earnings. With its intuitive interface and familiar Fortnite elements, this game offers hours of fun for both Fortnite fans and clicker game enthusiasts alike.
        </p>
      </div>

      {/* How to Play */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">How to Play This Free Browser Idle Game</h2>
        <ol className="text-gray-600 list-decimal pl-6 space-y-2 mb-6">
          <li>Click the Fortnite Logo to earn V-Bucks</li>
          <li>Look for and click on Loot Llamas for cash boosts</li>
          <li>Use the buttons on the right to access the shop, high scores, credits, and audio controls</li>
          <li>Buy the Battle Pass for increased earnings</li>
          <li>Purchase upgrades to maximize your V-Bucks collection rate</li>
          <li>Aim for the high score to achieve a Victory Royale</li>
        </ol>
        <p className="text-gray-600">
          Start your journey with simple clicks and watch your V-Bucks collection grow! This free browser idle game lets you progress at your own pace. Purchase various upgrades to multiply your earnings. The more you play, the closer you'll get to that coveted Victory Royale!
        </p>
      </div>

      {/* Features */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Ultimate Relaxing Clicker Game Features</h2>
        <div className="space-y-6 text-gray-600">
          <p>
            Experience the perfect blend of casual gaming and strategic progression in this free browser idle game. Fortnite Clicker offers a unique take on the classic clicker genre with Fortnite-inspired elements!
          </p>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Fortnite Elements</h3>
            <p>
              Enjoy familiar Fortnite features including V-Bucks, Loot Llamas, Battle Pass, and the ultimate Victory Royale goal! The game captures the essence of Fortnite while offering addictive clicker gameplay.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Loot Llama Bonuses</h3>
            <p>
              Keep an eye out for Loot Llamas that appear during gameplay. Click on them quickly to receive cash boosts that will accelerate your progress!
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Battle Pass Upgrade</h3>
            <p>
              Purchase the Battle Pass to significantly increase your earning potential. This key upgrade is essential for players looking to maximize their V-Bucks collection rate.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">High Score System</h3>
            <p>
              Compete for the top spot on the high score leaderboard. Reach the highest score to achieve the coveted Victory Royale status!
            </p>
          </div>

          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>No download required - play instantly in your browser</li>
            <li>Fortnite-themed graphics and gameplay</li>
            <li>Multiple upgrade paths to explore</li>
            <li>Background music with mute/unmute option</li>
            <li>Loot Llama special events for bonus rewards</li>
            <li>Intuitive interface with easy navigation</li>
            <li>High score tracking and Victory Royale achievement</li>
          </ul>
        </div>
      </div>

      {/* Use Cases */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Why Choose This Fortnite Clicker Game?</h2>
        <ul className="text-gray-600 list-disc pl-6 space-y-2">
          <li>Perfect for Fortnite fans looking for a casual gaming experience</li>
          <li>Ideal free browser idle game for breaks between Battle Royale matches</li>
          <li>Engaging and relaxing gameplay mechanics</li>
          <li>Great for multitasking</li>
          <li>Accessible on any device with a browser</li>
          <li>Familiar Fortnite elements make it easy to understand</li>
          <li>Community favorite with over 250,000 views</li>
        </ul>
      </div>

      {/* Community Recognition */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Community Recognition</h2>
        <div className="space-y-4 text-gray-600">
          <div>
            <h3 className="font-semibold text-gray-800">Notable Achievements:</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Over 250,000 views and counting!</li>
              <li>Featured as Top Loved on Scratch</li>
              <li>Featured as Top Remixed on Scratch</li>
              <li>Featured as Top Trending on Scratch</li>
              <li>Viewed by popular creator @DerpAnimation</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Credits */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Game Credits</h2>
        <ul className="text-gray-600 list-disc pl-6 space-y-2">
          <li>Creator: mineshot108</li>
          <li>Inspiration: Fortnite Battle Royale</li>
        </ul>
      </div>

      {/* FAQ */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Free Browser Idle Game FAQ</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-gray-800">Is Fortnite Clicker free to play?</h3>
            <p className="text-gray-600">Yes, enjoy this relaxing clicker game completely free in your browser!</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">How do I earn V-Bucks in the game?</h3>
            <p className="text-gray-600">Click on the Fortnite Logo to earn V-Bucks. You can also find Loot Llamas for cash boosts and purchase upgrades like the Battle Pass to increase your earnings.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">What are Loot Llamas?</h3>
            <p className="text-gray-600">Loot Llamas appear randomly during gameplay. Click on them quickly to receive cash boosts that will help you progress faster.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">How do I get a Victory Royale?</h3>
            <p className="text-gray-600">Achieve the highest score on the leaderboard to earn a Victory Royale! You can view high scores using the buttons on the right side of the screen.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Can I turn off the music?</h3>
            <p className="text-gray-600">Yes! Use the mute/unmute button on the right side of the screen to control the game's audio.</p>
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
