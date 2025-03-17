import SimilarGamesPool from '@/components/SimilarGamesPool';
import NewGamesPool from '@/components/NewGamesPool';
import GameContainer from '@/components/GameContainer';

export default function SprunkiMakerBigUpdatePage() {
  // Define current game data
  const currentGame = {
    title: 'Sprunki Maker Big Update',
    slug: '/sprunki-maker-big-update',
    category: ['Sprunki'],
    rating: 4.3,
    imageSrc: 'https://cdn2.scratch.mit.edu/get_image/project/1107842897_480x360.png'
  };

  return (
    <div className="bg-[#f5f5f5]">
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 gap-6">
        {/* Main Content */}
        <div className="w-full md:w-2/3">
          {/* Game Container Section */}
          <section className="mb-8">
            <GameContainer 
              gameUrl="https://turbowarp.org/1107842897/embed"
              gameTitle="Sprunki Maker Big Update"
              gameLogoSrc="https://cdn2.scratch.mit.edu/get_image/project/1107842897_480x360.png"
              rating={4.3}
              backgroundImageSrc="https://cdn2.scratch.mit.edu/get_image/project/1107842897_480x360.png"
              thumbnailSrc="https://cdn2.scratch.mit.edu/get_image/project/1107842897_480x360.png"
            />
          </section>


          <NewGamesPool />

{/* Game Info SEO Section */}
<section className="bg-white rounded-lg shadow-md p-6">
  <article className="prose prose-lg max-w-none">
    <h1 className="text-3xl font-bold text-gray-800 mb-6">
      Sprunki Maker (BIG update) - Free Character Customization Game
    </h1>
    
    <div className="space-y-8">
      {/* Category & Tags */}
      <div className="flex flex-wrap gap-4">
        <div>
          <span className="font-semibold text-gray-700">Category:</span>
          <span className="ml-2 px-3 py-1 bg-gray-100 rounded-full text-gray-600">Character Customization</span>
        </div>
        <div>
          <span className="font-semibold text-gray-700">Tags:</span>
          <div className="inline-flex gap-2 ml-2">
            <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">Sprunki</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">Free Browser Game</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">Character Creator</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">Incredibox</span>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Create Your Own Sprunki Character</h2>
        <p className="text-gray-600">
          Sprunki Maker brings creativity to your fingertips with a comprehensive character customization experience. Created by TheManBehindItAll_, this popular game now features a BIG update with new skins, hats, shirts, mouths, eyes, and more! With over 50,000 views, this game lets you design your perfect Sprunki character with an ever-expanding collection of customization options. The original Sprunki concept was created by @nyankobflol.
        </p>
      </div>

      {/* What is section */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">What is Sprunki Maker?</h2>
        <p className="text-gray-600">
          Discover this engaging character customization game that lets you create your own unique Sprunki! This browser-based game offers an extensive selection of customization options including various skins, hats, shirts, mouths, eyes, and more. The latest BIG update expands the available options even further, giving you more creative freedom than ever before. Whether you're a fan of the Sprunki series or just enjoy character customization games, Sprunki Maker offers endless possibilities for creativity.
        </p>
      </div>

      {/* How to Play */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">How to Play Sprunki Maker</h2>
        <ol className="text-gray-600 list-decimal pl-6 space-y-2 mb-6">
          <li>Select from various customization options including skins, hats, shirts, mouths, and eyes</li>
          <li>Mix and match different elements to create your perfect Sprunki character</li>
          <li>Press the space bar to hide the UI for a clear view of your creation</li>
          <li>Make sure to read the in-game instructions for the best experience</li>
          <li>Check back regularly for updates - when the color of the polo in the thumbnail changes, it means a new update is available</li>
        </ol>
        <p className="text-gray-600">
          Unleash your creativity and design the Sprunki of your dreams! With simple controls and numerous customization options, Sprunki Maker offers hours of creative fun for players of all ages.
        </p>
      </div>

      {/* Features */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Game Features</h2>
        <div className="space-y-6 text-gray-600">
          <p>
            Experience the joy of character creation with Sprunki Maker's extensive customization features. The latest BIG update adds even more options to an already impressive collection.
          </p>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Extensive Customization Options</h3>
            <p>
              Choose from a wide variety of skins, hats, shirts, mouths, eyes, and more to create your perfect Sprunki character. The latest update adds even more items to customize with!
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">UI Controls</h3>
            <p>
              Press the space bar to hide the UI for a clear view of your creation. This new feature allows you to admire your Sprunki without any interface elements in the way.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Regular Updates</h3>
            <p>
              The developer consistently adds new content and features. When the game doesn't show on the creator's profile, it means they're working on a big update!
            </p>
          </div>

          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>No download required - create characters directly in your browser</li>
            <li>Multiple customization categories (skins, hats, shirts, mouths, eyes, etc.)</li>
            <li>UI hiding feature for clean screenshots</li>
            <li>Regular updates with new content</li>
            <li>Simple and intuitive controls</li>
            <li>Inspired by Incredibox's style</li>
          </ul>
        </div>
      </div>

      {/* Update Information */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Latest Update Information</h2>
        <div className="bg-green-50 border border-green-200 rounded-md p-4 text-gray-700">
          <p className="font-semibold mb-2">BIG NEW UPDATE Includes:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>New skins for more character variety</li>
            <li>Additional hats to customize your Sprunki's headwear</li>
            <li>New shirt options for stylish Sprunkis</li>
            <li>More mouth and eye variations for expressive characters</li>
            <li>Updated thumbnail - look for the polo color change to identify updates</li>
            <li>New Hide UI button (press space)</li>
          </ul>
        </div>
      </div>

      {/* Achievement */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Community Milestone</h2>
        <div className="bg-blue-50 border border-blue-200 rounded-md p-4 text-gray-700 flex items-center">
          <div className="text-3xl text-blue-500 mr-4">🎉</div>
          <div>
            <p className="font-semibold mb-1">50,000 VIEWS!</p>
            <p>Thank you to all players for making Sprunki Maker such a success!</p>
          </div>
        </div>
      </div>

      {/* Credits */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Credits</h2>
        <ul className="text-gray-600 list-disc pl-6 space-y-2">
          <li>Game Creator: TheManBehindItAll_</li>
          <li>Original Sprunki Character: @nyankobflol</li>
        </ul>
      </div>

      {/* Update Log */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Update Log</h2>
        <div className="text-gray-600">
          <p className="mb-2">Latest Update:</p>
          <ul className="list-disc pl-6 space-y-1 mb-4">
            <li>Updated the thumbnail</li>
            <li>Added new skins</li>
            <li>Added new hats</li>
            <li>Added new shirts</li>
            <li>Added new mouths</li>
            <li>Added new eyes</li>
            <li>Added new Hide UI button (press space)</li>
          </ul>
          <p className="text-sm text-gray-500">Note: When the color of the polo in the thumbnail changes, it indicates a new update has been released. When the game doesn't appear on the creator's profile, they're working on a big update.</p>
        </div>
      </div>

      {/* FAQ */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-gray-800">What is Sprunki Maker?</h3>
            <p className="text-gray-600">Sprunki Maker is a browser-based character customization game where you can create your own unique Sprunki character by selecting from various customization options.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">How do I hide the UI?</h3>
            <p className="text-gray-600">Press the space bar to hide the UI elements for a clean view of your creation.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">How do I know when there's a new update?</h3>
            <p className="text-gray-600">When the color of the polo in the thumbnail changes, it means a new update has been released.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Who created the original Sprunki character?</h3>
            <p className="text-gray-600">The original Sprunki character was created by @nyankobflol.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Will there be more updates in the future?</h3>
            <p className="text-gray-600">Yes! The creator has promised more updates soon. When the game doesn't show on their profile, it means they're working on a big update.</p>
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
