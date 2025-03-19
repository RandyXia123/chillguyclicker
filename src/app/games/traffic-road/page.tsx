import SimilarGamesPool from '@/components/SimilarGamesPool';
import NewGamesPool from '@/components/NewGamesPool';
import GameContainer from '@/components/GameContainer';
import { useEffect } from 'react';

export default function TrafficRoadPage() {
  // Define current game data
  const currentGame = {
    title: 'Traffic Road',
    slug: '/traffic-road',
    category: ['action'],
    rating: 4.6,
    imageSrc: 'https://azgames.io/traffic-road.embed'
  };

  return (
    <div className="bg-[#f5f5f5]">
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 gap-6">
        {/* Main Content */}
        <div className="w-full md:w-2/3">
          {/* Game Container Section */}
          <section className="mb-8">
            <GameContainer 
              gameUrl="https://azgames.io/traffic-road.embed"
              gameTitle="Traffic Road"
              gameLogoSrc="/images/game-thumbnails/trafficroad-m180x180.webp"
              rating={4.6}
              backgroundImageSrc="/images/game-thumbnails/trafficroad-m180x180.webp"
              thumbnailSrc="/images/game-thumbnails/trafficroad-m180x180.webp"
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
      Traffic Road - Free Browser Game | Motorcycle Games
    </h1>
    
    <div className="space-y-8">
      {/* Category & Tags */}
      <div className="flex flex-wrap gap-4">
        <div>
          <span className="font-semibold text-gray-700">Category:</span>
          <span className="ml-2 px-3 py-1 bg-gray-100 rounded-full text-gray-600">Motorcycle Racing Game</span>
        </div>
        <div>
          <span className="font-semibold text-gray-700">Tags:</span>
          <div className="inline-flex gap-2 ml-2">
            <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">Driving Game</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">Free Browser Game</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">Traffic Dodging</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">First-Person Perspective</span>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Best Free Browser Motorcycle Game</h2>
        <p className="text-gray-600">
          Hop on your motorcycle in Traffic Road and weave through heavy traffic! This thrilling first-person driving game puts you on busy highways where split-second decisions determine your success. Experience realistic bike controls as you navigate at breakneck speeds, squeezing through narrow gaps between vehicles. With multiple game modes and a competitive leaderboard system, you'll find yourself coming back for more. No downloads needed - just ride, dodge, and compete for the highest scores!
        </p>
      </div>

      {/* What is section */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">What is Traffic Road?</h2>
        <p className="text-gray-600">
          Discover this engaging motorcycle game that brings the thrill of high-speed highway navigation to your browser! Developed by Azgames, Traffic Road challenges you to test your reflexes and precision as you weave through congested roads on a motorcycle capable of reaching hundreds of kilometers per hour. The game offers a realistic first-person perspective that immerses you in the action, making every near-miss feel heart-pounding and every successful maneuver satisfying. Whether you're confident in your navigation abilities or simply someone who loves speed, Traffic Road delivers an extremely exciting experience that will keep you on the edge of your seat.
        </p>
      </div>

      {/* How to Play */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">How to Play This Free Browser Motorcycle Game</h2>
        <ol className="text-gray-600 list-decimal pl-6 space-y-2 mb-6">
          <li>Select your preferred game mode from the four available options</li>
          <li>Control your motorcycle using the arrow keys or WASD keys</li>
          <li>Navigate through traffic by weaving between vehicles</li>
          <li>Adjust your speed appropriately when approaching tight spaces</li>
          <li>Focus on spectacular dodges to earn higher scores</li>
          <li>Complete objectives based on your chosen game mode</li>
        </ol>
        <p className="text-gray-600">
          Start your journey by mastering the Career mode before unlocking more challenging options! This free browser motorcycle game tests both your reflexes and decision-making skills. Pay special attention to steering segments and narrow passages to maximize your performance. Remember that impressive dodges will reward you with higher scores than simply gaining experience, so challenge yourself to make daring maneuvers whenever possible!
        </p>
      </div>

      {/* Features */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Ultimate Motorcycle Racing Features</h2>
        <div className="space-y-6 text-gray-600">
          <p>
            Experience the perfect blend of speed, precision, and challenge in this free browser motorcycle game. Traffic Road offers thrilling first-person gameplay that puts your reflexes to the test while providing various modes to suit different playstyles!
          </p>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Multiple Game Modes</h3>
            <p>
              Choose from four distinct game modes, each with its own objectives and challenges! From structured Career progression to endless highway racing, Time Trial challenges, and relaxed Free Ride options, there's always a new way to enjoy the game.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Realistic First-Person Perspective</h3>
            <p>
              Immerse yourself in the action with a detailed first-person view that puts you directly in the rider's seat! Feel every turn, acceleration, and near-miss as you navigate through traffic at high speeds.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Competitive Leaderboards</h3>
            <p>
              Compete against players worldwide to see who has the best motorcycle control and traffic-dodging skills! Compare your scores and distances to climb the global rankings.
            </p>
          </div>

          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>No download required - play instantly in your browser</li>
            <li>Realistic motorcycle controls with responsive handling</li>
            <li>Various traffic patterns and road conditions</li>
            <li>Progressive difficulty system that keeps you challenged</li>
            <li>Achievement system to track your progress</li>
            <li>Both one-way and two-way road options for diverse experiences</li>
          </ul>
        </div>
      </div>

      {/* Use Cases */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Why Choose This Traffic Road Game?</h2>
        <ul className="text-gray-600 list-disc pl-6 space-y-2">
          <li>Perfect for quick gaming sessions when you need an adrenaline rush</li>
          <li>Ideal free browser game for motorcycle enthusiasts</li>
          <li>Great for improving reflexes and decision-making skills</li>
          <li>Multiple game modes offer variety for different playing moods</li>
          <li>Competitive element for players who enjoy challenging themselves</li>
          <li>Realistic first-person perspective provides an immersive experience</li>
        </ul>
      </div>

      {/* Game Modes Section */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Exciting Game Modes</h2>
        <div className="bg-gray-50 p-4 rounded-md text-gray-600 text-sm">
          <p className="mb-2">Career Mode - Navigate one-way paths and complete levels within time limits</p>
          <p className="mb-2">Endless Mode - Choose between one-way or two-way roads and ride as far as possible</p>
          <p className="mb-2">Time Trial Mode - Race against the clock with unpredictable challenges (unlock required)</p>
          <p className="mb-2">Free Ride Mode - Enjoy a relaxed driving experience without pressure (unlock required)</p>
          <p className="mb-2">Custom Challenges - Master specific traffic patterns and road conditions</p>
          <p className="mb-2">High Score Runs - Focus purely on maximizing your score with spectacular dodges</p>
          <p className="mb-2">Distance Challenges - Push your limits to reach new distance records</p>
          <p className="mb-2">Skill Mastery - Perfect your riding techniques in specialized scenarios</p>
          <p className="text-xs text-gray-500 mt-2">(Game modes and challenges featured in Traffic Road)</p>
        </div>
      </div>

      {/* Credits */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Game Credits</h2>
        <ul className="text-gray-600 list-disc pl-6 space-y-2">
          <li>Developer: Azgames</li>
          <li>Genre: Motorcycle Racing/Traffic Dodging</li>
        </ul>
      </div>

      {/* Pro Tips */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Pro Tips</h2>
        <div className="space-y-4 text-gray-600">
          <div>
            <h3 className="font-semibold text-gray-800">Developer's Advice:</h3>
            <p>"Focus on spectacular dodges rather than just experience - they score much higher!" - Azgames</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Strategy Tip:</h3>
            <p>Pay special attention to steering segments and tight passages - adjust your speed before entering them rather than trying to slow down while navigating through!</p>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Free Browser Motorcycle Game FAQ</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-gray-800">Is Traffic Road free to play?</h3>
            <p className="text-gray-600">Yes, enjoy this thrilling motorcycle game completely free in your browser!</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">What are the controls for Traffic Road?</h3>
            <p className="text-gray-600">You can control your motorcycle using either the arrow keys or WASD keys.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">How do I unlock all game modes?</h3>
            <p className="text-gray-600">You need to reach certain levels by playing Career mode to unlock Time Trial and Free Ride modes.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">What's the difference between one-way and two-way roads?</h3>
            <p className="text-gray-600">One-way roads have all traffic moving in the same direction, while two-way roads feature vehicles coming from both directions, creating a more challenging experience.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">How can I get higher scores in Traffic Road?</h3>
            <p className="text-gray-600">Focus on making spectacular dodges between vehicles rather than just gaining experience - near misses and threading through tight gaps award significantly more points!</p>
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
