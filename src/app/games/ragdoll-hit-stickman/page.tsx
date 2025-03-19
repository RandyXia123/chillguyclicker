import SimilarGamesPool from '@/components/SimilarGamesPool';
import NewGamesPool from '@/components/NewGamesPool';
import GameContainer from '@/components/GameContainer';
import { useEffect } from 'react';

export default function RagdollHitStickmanPage() {
  // Define current game data
  const currentGame = {
    title: 'Ragdoll Hit Stickman',
    slug: '/ragdoll-hit-stickman',
    category: ['action'],
    rating: 4.5,
    imageSrc: '/images/game-thumbnails/ragdollhitstickman1-m180x180.webp/'
  };

  return (
    <div className="bg-[#f5f5f5]">
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 gap-6">
        {/* Main Content */}
        <div className="w-full md:w-2/3">
          {/* Game Container Section */}
          <section className="mb-8">
            <GameContainer 
              gameUrl="https://game.azgame.io/ragdoll-hit-stickman/"
              gameTitle="Ragdoll Hit Stickman"
              gameLogoSrc="/images/game-thumbnails/ragdollhitstickman1-m180x180.webp"
              rating={4.5}
              backgroundImageSrc="/images/game-thumbnails/ragdollhitstickman1-m180x180.webp"
              thumbnailSrc="/images/game-thumbnails/ragdollhitstickman1-m180x180.webp"
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
      Ragdoll Hit Stickman - Free Browser Game | Action Games
    </h1>
    
    <div className="space-y-8">
      {/* Category & Tags */}
      <div className="flex flex-wrap gap-4">
        <div>
          <span className="font-semibold text-gray-700">Category:</span>
          <span className="ml-2 px-3 py-1 bg-gray-100 rounded-full text-gray-600">Physics-Based Action Game</span>
        </div>
        <div>
          <span className="font-semibold text-gray-700">Tags:</span>
          <div className="inline-flex gap-2 ml-2">
            <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">Ragdoll Physics</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">Free Browser Game</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">Stickman Battle</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">Multiplayer</span>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Best Free Browser Physics Game</h2>
        <p className="text-gray-600">
          Launch your stickman through obstacles and experience wild ragdoll physics in Ragdoll Hit Stickman! This fabulous action game puts you into chaotic battles with extremely vivid stickman warriors. Every movement is controlled by hilarious ragdoll physics that create unpredictable and entertaining results. The more chaos you cause, the higher your score will be! With multiple game modes, customizable warriors, and diverse maps, you'll find yourself coming back for more. No downloads needed - just launch, battle, and laugh at the outrageous physics-based mayhem!
        </p>
      </div>

      {/* What is section */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">What is Ragdoll Hit Stickman?</h2>
        <p className="text-gray-600">
          Discover this thrilling physics-based action game that combines strategic thinking with chaotic ragdoll physics! Developed by Azgames, Ragdoll Hit Stickman challenges you to launch your stickman warrior into battle, using the environment and obstacles to your advantage. The game's unique physics engine ensures that no two battles are ever the same, as your stickman flails, tumbles, and crashes through each level. Whether you're facing off against increasingly difficult AI opponents, competing with a friend in head-to-head battles, or surviving against waves of enemies, Ragdoll Hit Stickman offers hours of unpredictable entertainment that will test your reflexes, timing, and tactical thinking.
        </p>
      </div>

      {/* How to Play */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">How to Play This Free Browser Action Game</h2>
        <ol className="text-gray-600 list-decimal pl-6 space-y-2 mb-6">
          <li>Choose from three exciting game modes: Single-player, Two-player, or Survival</li>
          <li>In Single-player or Survival Mode, use the A and D keys to control your stickman</li>
          <li>In Two-player Mode, Player 1 uses A and D keys while Player 2 uses left and right arrow keys</li>
          <li>Customize your warrior's weapons and protective equipment before each match</li>
          <li>Launch your stickman and use the physics to create maximum chaos and damage</li>
          <li>Navigate through diverse maps with unique obstacles and challenges</li>
        </ol>
        <p className="text-gray-600">
          Start your journey by mastering the Single-player mode before challenging friends or taking on Survival! This free browser action game rewards creativity and chaos. The more wild and unpredictable your stickman's journey, the higher your score. Experiment with different launching angles and strategies to overcome increasingly difficult opponents and challenging maps!
        </p>
      </div>

      {/* Features */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Ultimate Action Game Features</h2>
        <div className="space-y-6 text-gray-600">
          <p>
            Experience the perfect blend of strategy and chaos in this free browser physics game. Ragdoll Hit Stickman offers unpredictable fun with every match, challenging you to master the art of controlled mayhem!
          </p>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Hilarious Ragdoll Physics</h3>
            <p>
              Watch as your stickman warrior flails, tumbles, and crashes through obstacles with realistic physics! Every launch creates unique and often hilarious results that keep the gameplay fresh and entertaining.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Three Exciting Game Modes</h3>
            <p>
              Choose between Single-player challenges against AI opponents, head-to-head Two-player battles, or the intense Survival mode against endless waves of enemies. Each mode offers different challenges and rewards!
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Customizable Warriors</h3>
            <p>
              Personalize your stickman warrior with various weapons and protective equipment! Each customization affects your fighting ability and creates new strategic opportunities.
            </p>
          </div>

          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>No download required - play instantly in your browser</li>
            <li>Diverse maps with unique designs and challenges</li>
            <li>Progressive difficulty with powerful boss encounters</li>
            <li>Simple controls that create complex gameplay</li>
            <li>Competitive two-player mode for battling friends</li>
            <li>Unpredictable physics that ensure no two battles are the same</li>
          </ul>
        </div>
      </div>

      {/* Use Cases */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Why Choose This Physics Action Game?</h2>
        <ul className="text-gray-600 list-disc pl-6 space-y-2">
          <li>Perfect for quick gaming sessions with unpredictable and hilarious outcomes</li>
          <li>Ideal for players who enjoy physics-based challenges</li>
          <li>Great for playing with friends in the same room with Two-player mode</li>
          <li>Satisfying progression system with increasingly difficult challenges</li>
          <li>Endless replayability due to the unpredictable physics engine</li>
          <li>Easy to learn but difficult to master, appealing to casual and hardcore gamers alike</li>
        </ul>
      </div>

      {/* Game Modes Section */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Exciting Game Modes</h2>
        <div className="bg-gray-50 p-4 rounded-md text-gray-600 text-sm">
          <p className="mb-2">Single-player Mode - Face increasingly difficult AI opponents and powerful bosses</p>
          <p className="mb-2">Two-player Mode - Go head-to-head with friends on the same screen</p>
          <p className="mb-2">Survival Mode - Battle against endless waves of enemies for the highest score</p>
          <p className="mb-2">Custom Battles - Set up matches with specific rules and environments</p>
          <p className="mb-2">Training Arena - Practice your launching techniques without pressure</p>
          <p className="mb-2">Time Attack - Complete challenges as quickly as possible</p>
          <p className="mb-2">Target Practice - Aim for specific obstacles to maximize your score</p>
          <p className="mb-2">Boss Rush - Face off against the game's toughest opponents back-to-back</p>
          <p className="text-xs text-gray-500 mt-2">(Game modes featured in Ragdoll Hit Stickman)</p>
        </div>
      </div>

      {/* Credits */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Game Credits</h2>
        <ul className="text-gray-600 list-disc pl-6 space-y-2">
          <li>Developer: Azgames</li>
          <li>Genre: Physics-Based Action</li>
        </ul>
      </div>

      {/* Pro Tips */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Pro Tips</h2>
        <div className="space-y-4 text-gray-600">
          <div>
            <h3 className="font-semibold text-gray-800">Developer's Advice:</h3>
            <p>"The more chaos you cause, the higher your score will be!" - Azgames</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Strategy Tip:</h3>
            <p>Pay attention to each map's unique design and use environmental obstacles to your advantage. Sometimes the path of most resistance yields the highest scores!</p>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Free Browser Action Game FAQ</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-gray-800">Is Ragdoll Hit Stickman free to play?</h3>
            <p className="text-gray-600">Yes, enjoy this hilarious physics-based action game completely free in your browser!</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">What are the controls for the game?</h3>
            <p className="text-gray-600">In Single-player and Survival modes, use the A and D keys. In Two-player mode, Player 1 uses A and D while Player 2 uses the left and right arrow keys.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Can I play with my friends?</h3>
            <p className="text-gray-600">Yes! The Two-player mode lets you battle head-to-head with a friend on the same screen.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">How do I customize my warrior?</h3>
            <p className="text-gray-600">Before each match, you can select different weapons and protective equipment to enhance your stickman's fighting abilities.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">What makes this game different from other action games?</h3>
            <p className="text-gray-600">The unique ragdoll physics engine ensures that no two battles are ever the same. Every launch creates unpredictable and often hilarious results that keep the gameplay fresh and entertaining!</p>
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
