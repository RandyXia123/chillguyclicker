import SimilarGamesPool from '@/components/SimilarGamesPool';
import NewGamesPool from '@/components/NewGamesPool';
import GameContainer from '@/components/GameContainer';

export default function SprunkiInteractiveBetaPage() {
  // Define current game data
  const currentGame = {
    title: 'Sprunki Interactive Beta',
    slug: '/sprunki-interactive-beta',
    category: ['Sprunki'],
    rating: 4.3,
    imageSrc: 'https://cdn2.scratch.mit.edu/get_image/project/1090663998_480x360.png'
  };

  return (
    <div className="bg-[#f5f5f5]">
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 gap-6">
        {/* Main Content */}
        <div className="w-full md:w-2/3">
          {/* Game Container Section */}
          <section className="mb-8">
            <GameContainer 
              gameUrl="https://turbowarp.org/1090663998/embed"
              gameTitle="Sprunki Interactive Beta"
              gameLogoSrc="https://cdn2.scratch.mit.edu/get_image/project/1090663998_480x360.png"
              rating={4.3}
              backgroundImageSrc="https://cdn2.scratch.mit.edu/get_image/project/1090663998_480x360.png"
              thumbnailSrc="https://cdn2.scratch.mit.edu/get_image/project/1090663998_480x360.png"
            />
          </section>


          <NewGamesPool />

{/* Game Info SEO Section */}
<section className="bg-white rounded-lg shadow-md p-6">
  <article className="prose prose-lg max-w-none">
    <h1 className="text-3xl font-bold text-gray-800 mb-6">
      Sprunki - Interactive BETA | Free Browser Interactive Experience
    </h1>
    
    <div className="space-y-8">
      {/* Category & Tags */}
      <div className="flex flex-wrap gap-4">
        <div>
          <span className="font-semibold text-gray-700">Category:</span>
          <span className="ml-2 px-3 py-1 bg-gray-100 rounded-full text-gray-600">Interactive Experience</span>
        </div>
        <div>
          <span className="font-semibold text-gray-700">Tags:</span>
          <div className="inline-flex gap-2 ml-2">
            <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">Sprunki</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">Free Browser Game</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">Interactive</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">Beta Version</span>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Interactive Sprunki Experience</h2>
        <p className="text-gray-600">
          Sprunki - Interactive BETA offers a unique interactive experience where you can click on different Sprunki characters to trigger various sounds and actions. Created by Someone_YaKnow (known as dandysworld_addict on TikTok), this beta version allows you to explore different Sprunki characters, each with their own unique actions and stats. As a beta release, you can expect ongoing development with more Sprunki characters and features coming in future updates.
        </p>
      </div>

      {/* What is section */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">What is Sprunki - Interactive BETA?</h2>
        <p className="text-gray-600">
          Discover this engaging interactive experience based on the popular Sprunki characters! This beta version lets you interact with various Sprunkis by clicking on them, with each character producing unique sounds and demonstrating different actions. The experience showcases different character stats and behaviors, giving each Sprunki their own personality and interaction style. Inspired by the Sprunkling AU, this project brings these characters to life in an interactive browser-based format.
        </p>
      </div>

      {/* How to Play */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">How to Interact with Sprunkis</h2>
        <ol className="text-gray-600 list-decimal pl-6 space-y-2 mb-6">
          <li>Click on different Sprunki characters to trigger sounds</li>
          <li>Discover the unique actions each Sprunki performs</li>
          <li>Explore the different stats and characteristics of each character</li>
          <li>Check back regularly for updates as more Sprunkis are added</li>
        </ol>
        <p className="text-gray-600">
          Start interacting with Sprunkis right away in your browser! No downloads required - just click and enjoy the sounds and animations. Each Sprunki offers a different interactive experience, encouraging exploration and discovery.
        </p>
      </div>

      {/* Features */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Game Features</h2>
        <div className="space-y-6 text-gray-600">
          <p>
            Experience the exciting world of Sprunkis in this interactive beta version. Though still in development, this experience already offers several engaging features.
          </p>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Unique Character Interactions</h3>
            <p>
              Each Sprunki character has its own set of sounds, actions, and stats, making every interaction unique and engaging.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Character Stats</h3>
            <p>
              Discover the different statistics and characteristics of each Sprunki, adding depth to the interactive experience.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Ongoing Development</h3>
            <p>
              As a beta version, the experience is constantly evolving with new Sprunkis and features planned for future updates.
            </p>
          </div>

          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>No download required - interact directly in your browser</li>
            <li>Various Sprunki characters to discover</li>
            <li>Unique sounds for each character</li>
            <li>Different actions and animations</li>
            <li>Character-specific stats and behaviors</li>
            <li>Regular updates adding new content</li>
          </ul>
        </div>
      </div>

      {/* Beta Information */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Beta Version Information</h2>
        <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4 text-gray-700">
          <p className="font-semibold mb-2">Please Note: This is a BETA Version</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Some bugs and issues may be present during your experience</li>
            <li>Not all planned Sprunki characters have been implemented yet</li>
            <li>Features and interactions may change in future updates</li>
            <li>We appreciate your patience and feedback as development continues</li>
          </ul>
        </div>
      </div>

      {/* Credits */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Credits</h2>
        <ul className="text-gray-600 list-disc pl-6 space-y-2">
          <li>Creator: Someone_YaKnow</li>
          <li>TikTok: dandysworld_addict</li>
          <li>Special thanks to the creator of the Sprunkling AU for inspiration</li>
        </ul>
      </div>

      {/* Social Media */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Connect with the Creator</h2>
        <p className="text-gray-600">
          Follow the creator on TikTok <a href="https://www.tiktok.com/@dandysworld_addict" className="text-blue-600 hover:underline">@dandysworld_addict</a> for updates and more content related to Sprunki!
        </p>
      </div>

      {/* FAQ */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-gray-800">What is Sprunki - Interactive BETA?</h3>
            <p className="text-gray-600">This is an interactive browser experience where you can click on different Sprunki characters to trigger unique sounds and actions.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Why is it called a BETA version?</h3>
            <p className="text-gray-600">The experience is still in development, with more Sprunki characters and features planned for future updates. You may encounter some bugs or incomplete elements.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Will more Sprunkis be added?</h3>
            <p className="text-gray-600">Yes! The creator plans to add more Sprunki characters, each with their own unique actions and stats in future updates.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Where can I follow the creator?</h3>
            <p className="text-gray-600">You can follow the creator on TikTok at @dandysworld_addict for updates and more content.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">What is the Sprunkling AU?</h3>
            <p className="text-gray-600">The Sprunkling AU (Alternate Universe) is a fan-created concept that inspired this interactive experience. The creator acknowledges and credits the AU's creator for their inspiration.</p>
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

