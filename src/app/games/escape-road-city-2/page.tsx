import SimilarGamesPool from '@/components/SimilarGamesPool';
import NewGamesPool from '@/components/NewGamesPool';
import GameContainer from '@/components/GameContainer';

export default function EscapeRoadCity2Page() {
  // Define current game data
  const currentGame = {
    title: 'Escape Road City 2',
    slug: '/escape-road-city-2',
    category: ['action'],
    rating: 4.5,
    imageSrc: '/images/game-thumbnails/escaperoadcity2-m180x180.webp'
  };

  return (
    <div className="bg-[#f5f5f5]">
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 gap-6">
        {/* Main Content */}
        <div className="w-full md:w-2/3">
          {/* Game Container Section */}
          <section className="mb-8">
            <GameContainer 
              gameUrl="https://game.azgame.io/escape-road-2"
              gameTitle="Escape Road City 2"
              gameLogoSrc="/images/game-thumbnails/escaperoadcity2-m180x180.webp"
              rating={4.5}
              backgroundImageSrc="/images/game-thumbnails/escaperoadcity2-m180x180.webp"
              thumbnailSrc="/images/game-thumbnails/escaperoadcity2-m180x180.webp"
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
      Escape Road City 2 - Free Browser Game | Racing Games
    </h1>
    
    <div className="space-y-8">
      {/* Category & Tags */}
      <div className="flex flex-wrap gap-4">
        <div>
          <span className="font-semibold text-gray-700">Category:</span>
          <span className="ml-2 px-3 py-1 bg-gray-100 rounded-full text-gray-600">Racing Game</span>
        </div>
        <div>
          <span className="font-semibold text-gray-700">Tags:</span>
          <div className="inline-flex gap-2 ml-2">
            <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">Action Game</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">Free Browser Game</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">Police Chase</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">Car Customization</span>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Best Free Browser Racing Game</h2>
        <p className="text-gray-600">
          Escape Road City 2 brings high-octane racing action to your browser! This adrenaline-pumping sequel combines white-knuckle driving with strategic gameplay as you outrun sophisticated police AI and navigate challenging obstacles. With realistic physics, extensive vehicle customization, and multiple mission types, you'll find yourself coming back for more. No downloads needed - just drive, evade, upgrade, and compete against players worldwide!
        </p>
      </div>

      {/* What is section */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">What is Escape Road City 2?</h2>
        <p className="text-gray-600">
          Discover this thrilling racing game that's taking the online gaming world by storm! Escape Road City 2 challenges you to navigate through busy city streets while evading increasingly intelligent police forces. The game combines pure driving skill with strategic thinking - you'll need to find the best escape routes while handling your vehicle at breakneck speeds. With enhanced graphics, a sophisticated physics system, and AI that adapts to your driving patterns, this sequel ramps up everything that made the original popular while introducing enough new features to feel fresh and challenging.
        </p>
      </div>

      {/* How to Play */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">How to Play This Free Browser Racing Game</h2>
        <ol className="text-gray-600 list-decimal pl-6 space-y-2 mb-6">
          <li>Master the controls to navigate through traffic at high speeds</li>
          <li>Evade increasingly intelligent police forces with tactical maneuvers</li>
          <li>Complete various mission types from police pursuits to time trials</li>
          <li>Unlock and customize vehicles with performance upgrades</li>
          <li>Discover secret routes and hiding spots throughout the city</li>
          <li>Use the bail-out system for emergency escapes in critical situations</li>
        </ol>
        <p className="text-gray-600">
          Start your journey with basic vehicles and work your way up to high-performance machines! This free browser racing game rewards both skill and strategy. Purchase various upgrades to enhance your car's performance and tackle increasingly difficult missions. The more you play, the better you'll become at outmaneuvering law enforcement and conquering the streets!
        </p>
      </div>

      {/* Features */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Ultimate Racing Game Features</h2>
        <div className="space-y-6 text-gray-600">
          <p>
            Experience the perfect blend of high-speed action and strategic gameplay in this free browser racing game. Escape Road City 2 offers an enhanced version of the classic getaway experience with sophisticated AI, realistic physics, and deep customization options!
          </p>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Enhanced Police AI</h3>
            <p>
              Face off against police forces that analyze your driving patterns and adapt their strategies! With surveillance helicopters, drones, and armored vehicles joining the pursuit, every chase feels unique and unpredictable.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Advanced Physics System</h3>
            <p>
              Experience realistic vehicle handling that changes based on road surface, weather conditions, and damage level. See sparks fly when scraping walls and watch as damage to your car affects performance in real-time!
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Deep Vehicle Customization</h3>
            <p>
              Unlock new car models and customize every aspect of your vehicle! From acceleration engines to specialized tires, each upgrade affects handling differently depending on your car model and driving style.
            </p>
          </div>

          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>No download required - play instantly in your browser</li>
            <li>Multiple mission types including police pursuits, time trials, and obstacle courses</li>
            <li>Dynamic obstacles like smart barricades, rush hour traffic, and weather hazards</li>
            <li>Innovative bail-out system for emergency escapes</li>
            <li>Thriving multiplayer community with crew battles and territory control</li>
            <li>Regular content updates to keep gameplay fresh and exciting</li>
          </ul>
        </div>
      </div>

      {/* Use Cases */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Why Choose This Racing Game?</h2>
        <ul className="text-gray-600 list-disc pl-6 space-y-2">
          <li>Perfect for racing enthusiasts looking for their next adrenaline fix</li>
          <li>Ideal for players who enjoy both action and strategy in their gameplay</li>
          <li>Great way to test your driving skills and quick decision-making</li>
          <li>Satisfying progression system that keeps you engaged for hours</li>
          <li>Thriving multiplayer community for competitive players</li>
          <li>Regular updates ensure the game never feels stale</li>
        </ul>
      </div>

      {/* Mission Types Section */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Exciting Mission Types</h2>
        <div className="bg-gray-50 p-4 rounded-md text-gray-600 text-sm">
          <p className="mb-2">Police Pursuit - Evade law enforcement for as long as possible</p>
          <p className="mb-2">Time Trial - Race against the clock through challenging routes</p>
          <p className="mb-2">Obstacle Course - Navigate through increasingly difficult hazards</p>
          <p className="mb-2">Vehicle Theft - Steal special cars while avoiding detection</p>
          <p className="mb-2">Escort Missions - Protect valuable cargo from rival crews</p>
          <p className="mb-2">Territory Control - Compete against other players for map dominance</p>
          <p className="mb-2">Drift Challenges - Master precision driving techniques</p>
          <p className="mb-2">Multi-stage Escapes - Complete connected objectives under pressure</p>
          <p className="text-xs text-gray-500 mt-2">(Missions featured in the game)</p>
        </div>
      </div>

      {/* Credits */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Game Credits</h2>
        <ul className="text-gray-600 list-disc pl-6 space-y-2">
          <li>Creditor: Azgames</li>
          <li>Sequel to the popular Escape Road series</li>
        </ul>
      </div>

      {/* Pro Tips */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Pro Tips</h2>
        <div className="space-y-4 text-gray-600">
          <div>
            <h3 className="font-semibold text-gray-800">Expert's Advice:</h3>
            <p>"Don't always go full throttle. Sometimes slow and steady wins the chase." - GamersDaily</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Strategy Tips:</h3>
            <p>Keep scanning for escape routes, save your nitrous for straightaways, and learn the map's hiding spots. Master the handbrake turn technique and time your vehicle switches carefully!</p>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Free Browser Racing Game FAQ</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-gray-800">Is Escape Road City 2 free to play?</h3>
            <p className="text-gray-600">Yes, enjoy this thrilling racing game completely free in your browser!</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">What's the main goal of the game?</h3>
            <p className="text-gray-600">Complete various mission types while evading police and mastering your driving skills.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">How do vehicle upgrades work?</h3>
            <p className="text-gray-600">Each car handles upgrades differently - a turbo kit might work great on one vehicle but cause control issues on another. Experiment to find what works best!</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">What multiplayer modes are available?</h3>
            <p className="text-gray-600">Join Crew Wars (4v4 territory control), Chase Tag (1v5 survival), or Race Wars (8-player sprint racing) to compete against other players.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Does the game receive regular updates?</h3>
            <p className="text-gray-600">Yes! The developers regularly add new cars, missions, and features to keep the gameplay fresh and exciting.</p>
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
