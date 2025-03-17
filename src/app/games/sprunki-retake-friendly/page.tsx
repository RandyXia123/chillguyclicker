import SimilarGamesPool from '@/components/SimilarGamesPool';
import NewGamesPool from '@/components/NewGamesPool';
import GameContainer from '@/components/GameContainer';

export default function SprunkiRetakeFriendlyPage() {
  // Define current game data
  const currentGame = {
    title: 'Sprunki Retake Friendly',
    slug: '/sprunki-retake-friendly',
    category: ['Sprunki'],
    rating: 4.3,
    imageSrc: 'https://cdn2.scratch.mit.edu/get_image/project/1104542703_480x360.png'
  };

  return (
    <div className="bg-[#f5f5f5]">
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 gap-6">
        {/* Main Content */}
        <div className="w-full md:w-2/3">
          {/* Game Container Section */}
          <section className="mb-8">
            <GameContainer 
              gameUrl="https://turbowarp.org/1104542703/embed"
              gameTitle="Sprunki Retake Friendly"
              gameLogoSrc="https://cdn2.scratch.mit.edu/get_image/project/1104542703_480x360.png"
              rating={4.3}
              backgroundImageSrc="https://cdn2.scratch.mit.edu/get_image/project/1104542703_480x360.png"
              thumbnailSrc="https://cdn2.scratch.mit.edu/get_image/project/1104542703_480x360.png"
            />
          </section>


          <NewGamesPool />

{/* Game Info SEO Section */}
<section className="bg-white rounded-lg shadow-md p-6">
  <article className="prose prose-lg max-w-none">
    <h1 className="text-3xl font-bold text-gray-800 mb-6">
      Sprunki Retake (Friendly) - Free Browser Idle Game | Relaxing Clicker Games
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
            <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">Sprunki</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">Kid Friendly</span>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Kid-Friendly Browser Game</h2>
        <p className="text-gray-600">
          Sprunki Retake (Friendly) is an adapted version of the popular Sprunki game, created by GreySprunkii. This family-friendly edition offers all the fun of the original concept while ensuring content is appropriate for younger players. With simple controls and engaging gameplay, this browser-based game provides entertainment for players of all ages.
        </p>
      </div>

      {/* What is section */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">What is Sprunki Retake (Friendly)?</h2>
        <p className="text-gray-600">
          Discover this kid-friendly adaptation of the Sprunki game concept! Sprunki Retake (Friendly) takes the core elements that made the original concept popular and presents them in a format suitable for children and family audiences. The game maintains the engaging mechanics while ensuring all content is appropriate for younger players.
        </p>
      </div>

      {/* Features */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Game Features</h2>
        <div className="space-y-6 text-gray-600">
          <p>
            Experience a family-friendly gaming experience with Sprunki Retake (Friendly). This version maintains the fun factor while ensuring content is appropriate for all ages.
          </p>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Kid-Friendly Content</h3>
            <p>
              All game elements have been carefully designed to be appropriate for younger players, making this version perfect for family gaming sessions.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Browser-Based Gameplay</h3>
            <p>
              No downloads required - access the game directly through your web browser for instant fun.
            </p>
          </div>

          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>No download required - play instantly in your browser</li>
            <li>Age-appropriate content for young players</li>
            <li>Simple controls for easy access</li>
            <li>Engaging gameplay that maintains the spirit of the original concept</li>
          </ul>
        </div>
      </div>

      {/* Use Cases */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Why Choose This Game?</h2>
        <ul className="text-gray-600 list-disc pl-6 space-y-2">
          <li>Perfect for younger players looking for age-appropriate fun</li>
          <li>Ideal for family gaming sessions</li>
          <li>Accessible browser-based format requires no downloads</li>
          <li>Provides entertainment while maintaining content standards for children</li>
        </ul>
      </div>

      {/* Credits */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Game Credits</h2>
        <ul className="text-gray-600 list-disc pl-6 space-y-2">
          <li>Current Version Creator: GreySprunkii</li>
          <li>Original Porter: CatzzzzGamezzz</li>
          <li>This version is a kid-friendly adaptation that provides proper attribution to the original porter</li>
        </ul>
      </div>

      {/* FAQ */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Game FAQ</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-gray-800">Is this game appropriate for children?</h3>
            <p className="text-gray-600">Yes! This version has been specifically adapted to be kid-friendly and appropriate for all ages.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Is this the original Sprunki game?</h3>
            <p className="text-gray-600">No, this is an adaptation based on the original concept. The original porter was CatzzzzGamezzz, and this version gives proper credit to their work.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Do I need to download anything to play?</h3>
            <p className="text-gray-600">No, this is a browser-based game that can be played directly without any downloads.</p>
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
