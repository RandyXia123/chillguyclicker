import SimilarGamesPool from '@/components/SimilarGamesPool';
import NewGamesPool from '@/components/NewGamesPool';
import GameContainer from '@/components/GameContainer';

export default function SprunkiOCMakerPage() {
  // Define current game data
  const currentGame = {
    title: 'Sprunki OC Maker',
    slug: '/sprunki-oc-maker',
    category: ['Sprunki'],
    rating: 4.3,
    imageSrc: 'https://cdn2.scratch.mit.edu/get_image/project/1094541597_480x360.png'
  };

  return (
    <div className="bg-[#f5f5f5]">
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 gap-6">
        {/* Main Content */}
        <div className="w-full md:w-2/3">
          {/* Game Container Section */}
          <section className="mb-8">
            <GameContainer 
              gameUrl="https://turbowarp.org/1094541597/embed"
              gameTitle="Sprunki OC Maker"
              gameLogoSrc="https://cdn2.scratch.mit.edu/get_image/project/1094541597_480x360.png"
              rating={4.3}
              backgroundImageSrc="https://cdn2.scratch.mit.edu/get_image/project/1094541597_480x360.png"
              thumbnailSrc="https://cdn2.scratch.mit.edu/get_image/project/1094541597_480x360.png"
            />
          </section>


          <NewGamesPool />

{/* Game Info SEO Section */}
<section className="bg-white rounded-lg shadow-md p-6">
  <article className="prose prose-lg max-w-none">
    <h1 className="text-3xl font-bold text-gray-800 mb-6">
      Sprunki OC Maker - Create Custom Sprunki Characters
    </h1>
    
    <div className="space-y-8">
      {/* Category & Tags */}
      <div className="flex flex-wrap gap-4">
        <div>
          <span className="font-semibold text-gray-700">Category:</span>
          <span className="ml-2 px-3 py-1 bg-gray-100 rounded-full text-gray-600">Character Creator</span>
        </div>
        <div>
          <span className="font-semibold text-gray-700">Tags:</span>
          <div className="inline-flex gap-2 ml-2">
            <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">Sprunki</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">OC Maker</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">Character Customization</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">Creative Tool</span>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Create Your Own Sprunki Characters</h2>
        <p className="text-gray-600">
          Sprunki OC Maker is a creative tool that lets you design and customize your own original Sprunki characters. Created by georgepig1223, this character creator provides various accessories and customization options to help you bring your unique Sprunki OCs to life. The project features a music engine created by @pooky2007 and pays homage to the original creator of Sprunki.
        </p>
      </div>

      {/* What is section */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">What is Sprunki OC Maker?</h2>
        <p className="text-gray-600">
          This creative tool allows you to design original character (OC) versions of Sprunki characters. With various customization options, you can mix and match different elements to create unique characters that reflect your personal style and preferences. Whether you're a fan of Sprunki characters or just enjoy creative character design, this maker provides a simple yet effective platform for bringing your ideas to life.
        </p>
      </div>

      {/* How to Use */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">How to Use Sprunki OC Maker</h2>
        <ol className="text-gray-600 list-decimal pl-6 space-y-2 mb-6">
          <li>Explore the available accessories and customization options</li>
          <li>Mix and match different elements to create your unique Sprunki character</li>
          <li>If you need accessories that aren't included, consider remixing the project to add them</li>
          <li>Share your creations with the community</li>
        </ol>
        <p className="text-gray-600">
          The Sprunki OC Maker is designed to be simple and intuitive, allowing anyone to create their own custom characters without needing artistic skills. Just select the options you like and watch your character come to life!
        </p>
      </div>

      {/* Features */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Features</h2>
        <div className="space-y-6 text-gray-600">
          <p>
            Explore the creative possibilities with Sprunki OC Maker's range of customization features.
          </p>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Character Customization</h3>
            <p>
              Choose from various accessories and elements to create your perfect Sprunki OC. Mix and match different options to make truly unique characters.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Music Engine</h3>
            <p>
              Enjoy a pleasant creative experience with the integrated music engine developed by @pooky2007, adding an engaging audio element to your character creation process.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Remixable Design</h3>
            <p>
              If you need accessories that aren't included in the original version, the project is designed to be remixed, allowing you to add new elements and share them with the community.
            </p>
          </div>

          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>No download required - create characters directly in your browser</li>
            <li>Various customization options</li>
            <li>Integrated music engine</li>
            <li>Remixable project structure</li>
            <li>User-friendly interface</li>
          </ul>
        </div>
      </div>

      {/* Remixing Guidelines */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Remixing Guidelines</h2>
        <div className="bg-blue-50 border border-blue-200 rounded-md p-4 text-gray-700">
          <p className="font-semibold mb-2">Feel free to remix if:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>The accessories you need aren't included in the current version</li>
            <li>You want to add new customization options</li>
            <li>You have ideas to enhance the character creator</li>
          </ul>
          <p className="mt-3 font-semibold">When remixing, please:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Credit georgepig1223 as the creator of Sprunki OC Maker</li>
            <li>Credit the original creator of Sprunki</li>
            <li>Credit @pooky2007 for the music engine</li>
          </ul>
        </div>
      </div>

      {/* Credits */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Credits</h2>
        <ul className="text-gray-600 list-disc pl-6 space-y-2">
          <li>Creator: georgepig1223</li>
          <li>Music Engine: @pooky2007</li>
          <li>Original Sprunki Concept: Original Creator of Sprunki</li>
        </ul>
      </div>

      {/* FAQ */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-gray-800">What is a Sprunki OC?</h3>
            <p className="text-gray-600">A Sprunki OC (Original Character) is a customized character based on the Sprunki character style but with your own unique design elements and personality.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Can I add accessories that aren't in the maker?</h3>
            <p className="text-gray-600">Yes! The creator encourages remixing the project if the accessories you need aren't included. This allows you to add new elements and share them with others.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Who created the music for this project?</h3>
            <p className="text-gray-600">The music engine was created by @pooky2007.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Can I share my creations with others?</h3>
            <p className="text-gray-600">Absolutely! Creating and sharing your Sprunki OCs with the community is encouraged.</p>
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



