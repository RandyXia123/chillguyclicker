import SimilarGamesPool from '@/components/SimilarGamesPool';
import NewGamesPool from '@/components/NewGamesPool';
import GameContainer from '@/components/GameContainer';
import React from 'react';

export default function IncrediboxSprunkiBabiesPage() {
  // Define current game data
  const currentGame = {
    title: 'Incredibox Sprunki Babies',
    slug: '/incredibox-sprunki-babies',
    category: ['Sprunki'],
    rating: 4.3,
    imageSrc: 'https://cdn2.scratch.mit.edu/get_image/project/1097319212_480x360.png'
  };

  return (
    <div className="bg-[#f5f5f5]">
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 gap-6">
        {/* Main Content */}
        <div className="w-full md:w-2/3">
          {/* Game Container Section */}
          <section className="mb-8">
            <GameContainer 
              gameUrl="https://turbowarp.org/1097319212/embed"
              gameTitle="Incredibox Sprunki Babies"
              gameLogoSrc="https://cdn2.scratch.mit.edu/get_image/project/1097319212_480x360.png"
              rating={4.3}
              backgroundImageSrc="https://cdn2.scratch.mit.edu/get_image/project/1097319212_480x360.png"
              thumbnailSrc="https://cdn2.scratch.mit.edu/get_image/project/1097319212_480x360.png"
            />
          </section>


          <NewGamesPool />

{/* Game Info SEO Section */}
<section className="bg-white rounded-lg shadow-md p-6">
  <article className="prose prose-lg max-w-none">
    <h1 className="text-3xl font-bold text-gray-800 mb-6">
      Incredibox - Sprunki Babies | Official Scratch Port
    </h1>
    
    <div className="space-y-8">
      {/* Category & Tags */}
      <div className="flex flex-wrap gap-4">
        <div>
          <span className="font-semibold text-gray-700">Category:</span>
          <span className="ml-2 px-3 py-1 bg-gray-100 rounded-full text-gray-600">Musical Experience</span>
        </div>
        <div>
          <span className="font-semibold text-gray-700">Tags:</span>
          <div className="inline-flex gap-2 ml-2">
            <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">Sprunki</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">Incredibox</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">Scratch Port</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">Music Creator</span>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Official Scratch Port of Sprunki Babies</h2>
        <p className="text-gray-600">
          Incredibox - Sprunki Babies is the official Scratch port of the popular Sprunki Babies experience. This port was shared by AlexanderLaverde, who has made the .sb3 file available to the community. The project brings the creative musical elements of Incredibox together with the charming Sprunki characters in a baby-themed variation.
        </p>
      </div>

      {/* What is section */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">What is Incredibox - Sprunki Babies?</h2>
        <p className="text-gray-600">
          This is the official Scratch port of the Sprunki Babies experience, based on the popular Incredibox musical creation concept. The project combines the interactive musical elements that made Incredibox famous with the adorable Sprunki Babies characters, allowing users to create unique musical arrangements in a playful environment.
        </p>
      </div>

      {/* Important Note */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Important Information</h2>
        <div className="bg-blue-50 border border-blue-200 rounded-md p-4 text-gray-700">
          <p className="font-semibold mb-2">Please Note:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>This is the official Scratch port of the original content</li>
            <li>The .sb3 file was shared by AlexanderLaverde but was not created by them</li>
            <li>If you remix this project, please include credits to both AlexanderLaverde and samerysanimationworld</li>
          </ul>
        </div>
      </div>

      {/* Credits */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Credits</h2>
        <ul className="text-gray-600 list-disc pl-6 space-y-2">
          <li>Port Shared By: AlexanderLaverde</li>
          <li>Original Creator: samerysanimationworld</li>
        </ul>
      </div>

      {/* Remixing Guidelines */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Remixing Guidelines</h2>
        <div className="space-y-4 text-gray-600">
          <div>
            <h3 className="font-semibold text-gray-800">Credit Requirements:</h3>
            <p>If you remix this project, please include credits to both AlexanderLaverde (who shared the port) and samerysanimationworld (the original creator).</p>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-gray-800">Who created this project?</h3>
            <p className="text-gray-600">The original project was created by samerysanimationworld. This Scratch port was shared by AlexanderLaverde.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Is this an original creation?</h3>
            <p className="text-gray-600">No, this is a port of an existing project. AlexanderLaverde has shared the .sb3 file but did not create the original content.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Can I remix this project?</h3>
            <p className="text-gray-600">Yes, but if you do remix it, please include credits to both AlexanderLaverde and samerysanimationworld.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">What is an .sb3 file?</h3>
            <p className="text-gray-600">An .sb3 file is the standard file format for Scratch projects, which can be imported into the Scratch editor.</p>
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
