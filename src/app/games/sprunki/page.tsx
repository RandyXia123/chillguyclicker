import SimilarGamesPool from '@/components/SimilarGamesPool';
import NewGamesPool from '@/components/NewGamesPool';
import GameContainer from '@/components/GameContainer';

export default function SprunkiPage() {
  // Define current game data
  const currentGame = {
    title: 'Sprunki',
    slug: '/sprunki',
    category: ['Sprunki'],
    rating: 4.3,
    imageSrc: 'https://cdn2.scratch.mit.edu/get_image/project/1088280075_480x360.png'
  };

  return (
    <div className="bg-[#f5f5f5]">
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 gap-6">
        {/* Main Content */}
        <div className="w-full md:w-2/3">
          {/* Game Container Section */}
          <section className="mb-8">
            <GameContainer 
              gameUrl="https://turbowarp.org/1088280075/embed"
              gameTitle="Sprunki"
              gameLogoSrc="https://cdn2.scratch.mit.edu/get_image/project/1088280075_480x360.png"
              rating={4.3}
              backgroundImageSrc="https://cdn2.scratch.mit.edu/get_image/project/1088280075_480x360.png"
              thumbnailSrc="https://cdn2.scratch.mit.edu/get_image/project/1088280075_480x360.png"
            />
          </section>


          <NewGamesPool />

{/* Game Info SEO Section */}
<section className="bg-white rounded-lg shadow-md p-6">
  <article className="prose prose-lg max-w-none">
    <h1 className="text-3xl font-bold text-gray-800 mb-6">
      Sprunki - Interactive Beat Maker | Free Browser Music Experience
    </h1>
    
    <div className="space-y-8">
      {/* Category & Tags */}
      <div className="flex flex-wrap gap-4">
        <div>
          <span className="font-semibold text-gray-700">Category:</span>
          <span className="ml-2 px-3 py-1 bg-gray-100 rounded-full text-gray-600">Interactive Music Experience</span>
        </div>
        <div>
          <span className="font-semibold text-gray-700">Tags:</span>
          <div className="inline-flex gap-2 ml-2">
            <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">Sprunki</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">Beat Maker</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">Interactive</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">Music Creator</span>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Interactive Sprunki Beat Maker</h2>
        <p className="text-gray-600">
          Sprunki is an interactive beat-making experience where you can drag Sprunki characters to blank slots to create your own unique musical beats. Created by ayceinyoface, this creative tool allows you to experiment with different sound combinations, mute or listen to specific tracks, and craft your own musical compositions with the charming Sprunki characters.
        </p>
      </div>

      {/* What is section */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">What is Sprunki Beat Maker?</h2>
        <p className="text-gray-600">
          Discover this engaging interactive beat-making experience featuring the adorable Sprunki characters! This application lets you create music by dragging different Sprunki characters into blank slots, with each character producing unique sounds. Combine characters in different arrangements to create rhythmic patterns and beats that you can play back, customize, and enjoy. The intuitive interface makes music creation accessible to everyone, regardless of musical background.
        </p>
      </div>

      {/* How to Play */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">How to Create Beats with Sprunki</h2>
        <ol className="text-gray-600 list-decimal pl-6 space-y-2 mb-6">
          <li>Drag the Sprunki characters to the blank slots on the beat grid</li>
          <li>Use the buttons to mute, listen, or remove specific sounds</li>
          <li>Experiment with different character combinations to create unique beats</li>
          <li>Play back your creation and make adjustments as desired</li>
        </ol>
        <p className="text-gray-600">
          Start creating beats with Sprunki right away in your browser! No downloads required - just drag, drop, and make music. Each Sprunki character offers a different sound, encouraging musical exploration and creativity.
        </p>
      </div>

      {/* Features */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Application Features</h2>
        <div className="space-y-6 text-gray-600">
          <p>
            Experience the exciting world of music creation with Sprunki's interactive beat maker. This application offers several engaging features to help you express your creativity.
          </p>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Drag and Drop Interface</h3>
            <p>
              Easily drag Sprunki characters to blank slots to assign sounds and create rhythmic patterns.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Sound Controls</h3>
            <p>
              Use the mute, listen, and remove (X) buttons to fine-tune your musical creation.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Character-Based Sounds</h3>
            <p>
              Each Sprunki character produces unique sounds, giving you a variety of audio elements to work with.
            </p>
          </div>

          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>No download required - create music directly in your browser</li>
            <li>Various Sprunki characters with unique sounds</li>
            <li>Intuitive drag-and-drop interface</li>
            <li>Sound control options (mute, listen, remove)</li>
            <li>Create and save your own beat compositions</li>
            <li>Accessible to musicians and non-musicians alike</li>
          </ul>
        </div>
      </div>

      {/* Instructions Highlight */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Quick Start Instructions</h2>
        <div className="bg-blue-50 border border-blue-200 rounded-md p-4 text-gray-700">
          <p className="font-semibold mb-2">Getting Started with Sprunki:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Drag the character to the blank slots to assign sounds</li>
            <li>Use buttons to mute, listen, and remove (X) sounds</li>
            <li>Experiment with different arrangements</li>
            <li>Play back your creation to hear your unique beat</li>
          </ul>
        </div>
      </div>

      {/* Credits */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Credits</h2>
        <ul className="text-gray-600 list-disc pl-6 space-y-2">
          <li>Creator: ayceinyoface</li>
          <li>Special thanks to the Sprunki character designers</li>
        </ul>
      </div>

      {/* FAQ */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-gray-800">What is Sprunki Beat Maker?</h3>
            <p className="text-gray-600">This is an interactive browser application where you can create musical beats by dragging Sprunki characters to slots and controlling their sounds.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Do I need musical experience to use this?</h3>
            <p className="text-gray-600">Not at all! The interface is designed to be intuitive and fun for everyone, regardless of musical background.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">What do the control buttons do?</h3>
            <p className="text-gray-600">The mute button silences a track, the listen button plays just that track, and the X button removes the character from that slot.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Can I save my beats?</h3>
            <p className="text-gray-600">Yes, you can save your beat compositions to revisit and modify them later.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Is this suitable for children?</h3>
            <p className="text-gray-600">Absolutely! Sprunki Beat Maker is designed to be fun and accessible for users of all ages.</p>
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

