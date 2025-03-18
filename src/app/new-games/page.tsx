"use client";
import { useState } from 'react';
import { games } from '@/data/games';
import GameCard from '@/components/GameCard';
import Head from 'next/head';
import Link from 'next/link';

export default function NewGamesPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const gamesPerPage = 15;
  
  // Filter new games
  const newGames = games
    .filter(game => game.isNew)
    .sort((a, b) => new Date(b.releaseDate || 0).getTime() - new Date(a.releaseDate || 0).getTime());
    
  // Calculate pagination
  const totalPages = Math.ceil(newGames.length / gamesPerPage);
  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  const currentGames = newGames.slice(indexOfFirstGame, indexOfLastGame);

  return (
    <>
      <Head>
        <title>Latest New Games - Fresh Online Browser Games | Chill Guy Clicker</title>
        <meta name="description" content="Discover fresh free online games daily! Play the newest browser games without downloads. Latest releases include clickers, puzzles, and HTML5 games. Play now!" />
      </Head>
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-[#d19a53] mb-8">New Games 🎮</h1>
        
        {/* Game Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-8">
          {currentGames.map((game, index) => (
            <GameCard 
              key={index}
              title={game.title}
              imageSrc={game.imageSrc}
              slug={game.slug}
            />
          ))}
        </div>
        
        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 mt-8">
          <button 
            className={`w-8 h-8 rounded-full flex items-center justify-center ${currentPage === 1 ? 'bg-green-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
            onClick={() => setCurrentPage(1)}
          >
            1
          </button>
          
          {totalPages > 1 && (
            <button 
              className={`w-8 h-8 rounded-full flex items-center justify-center ${currentPage === 2 ? 'bg-green-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
              onClick={() => setCurrentPage(2)}
            >
              2
            </button>
          )}
          
          {totalPages > 2 && (
            <button 
              className={`w-8 h-8 rounded-full flex items-center justify-center ${currentPage === 3 ? 'bg-green-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
              onClick={() => setCurrentPage(3)}
            >
              3
            </button>
          )}
          
          {totalPages > 3 && (
            <button 
              className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-200 hover:bg-gray-300"
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            >
              &gt;|
            </button>
          )}
        </div>

        {/* SEO Section */}
        <section className="bg-white rounded-lg shadow-md p-6 mt-12">
          <article className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Latest Free Online Games - Fresh Browser Games Updated 
            </h2>
            
            <div className="space-y-8">
              {/* Updated Intro Paragraph */}
              <p className="text-gray-700 leading-relaxed">
                Discover 2024's freshest free online games! Our New Games collection showcases just-released browser games across all genres – from innovative clickers to challenging puzzles and competitive HTML5 multiplayer games. Be the first to play these exciting new releases without downloads or sign-ups. We add new titles daily so there's always something fresh to try!
              </p>
              
              {/* Category & Tags - Expanded */}
              <div className="flex flex-wrap gap-4">
                <div>
                  <span className="font-semibold text-gray-700">Category:</span>
                  <span className="ml-2 px-3 py-1 bg-gray-100 rounded-full text-gray-600">New Browser Games</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-700">Tags:</span>
                  <div className="inline-flex flex-wrap gap-2 ml-2">
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">New Releases</span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">Latest Games</span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">Free Online Games</span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">Fresh Titles</span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">HTML5 Games</span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">2024 Games</span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">No Download Games</span>
                  </div>
                </div>
              </div>

              {/* Summary - Enhanced with examples */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-3">Fresh Browser Game Releases</h2>
                <p className="text-gray-600 mb-4">
                  Our New Games collection brings you the latest and greatest in free online gaming. We continuously update this section with fresh titles, including brand new clicker games, strategy adventures, mind-bending puzzles, and more. Recent additions like Chill Girl Clicker and Roblox Clicker have quickly become player favorites.
                </p>
                <p className="text-gray-600">
                  Every game featured in our New Games section has been carefully selected for quality, playability, and fun factor. Unlike other sites, we personally test each game to ensure it meets our standards before adding it to our collection.
                </p>
              </div>

              {/* What is New Games - Expanded with specific details */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-3">What Are New Games?</h2>
                <p className="text-gray-600 mb-4">
                  New Games are the latest additions to our online gaming library – titles released within the past few months that represent the cutting edge of browser-based gaming. These games showcase the newest trends, mechanics, and innovations in web gaming technology.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">April 2024 Releases</h3>
                  <p className="text-gray-600">
                    This month's fresh additions include enhanced HTML5 games with stunning graphics, innovative indie titles with unique mechanics, and new entries in popular series. Check back weekly as we add more exciting new releases!
                  </p>
                </div>
                <p className="text-gray-600">
                  Our collection spans multiple genres including action, strategy, simulation, arcade, idle games, clickers, puzzles, adventures, and multiplayer experiences. We focus on discovering hidden gems that might otherwise go unnoticed.
                </p>
              </div>

              {/* How to Browse - Improved with bullet points */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-3">How to Discover Fresh Games</h2>
                <ul className="text-gray-600 list-none space-y-3">
                  <li className="flex items-start">
                    <span className="text-[#d19a53] mr-2">•</span>
                    <span><strong>Browse Latest:</strong> Our New Games page always shows the most recent releases first</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#d19a53] mr-2">•</span>
                    <span><strong>Check Release Date:</strong> View when each game was added to find the freshest titles</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#d19a53] mr-2">•</span>
                    <span><strong>Preview Details:</strong> Click any game to see screenshots, features, and gameplay info</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#d19a53] mr-2">•</span>
                    <span><strong>Instant Play:</strong> Hit "Play Now" to jump right into any new game without waiting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#d19a53] mr-2">•</span>
                    <span><strong>Subscribe:</strong> Join our newsletter to get alerts when new games are added</span>
                  </li>
                </ul>
              </div>

              {/* Why Choose Us - New section */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-3">Why Explore Our New Games Collection?</h2>
                <ul className="text-gray-600 list-none space-y-3">
                  <li className="flex items-start">
                    <span className="text-[#d19a53] mr-2">•</span>
                    <span><strong>First Access:</strong> Be among the first to play the latest browser games</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#d19a53] mr-2">•</span>
                    <span><strong>Daily Updates:</strong> We add fresh games more frequently than other sites</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#d19a53] mr-2">•</span>
                    <span><strong>Quality Vetted:</strong> Every new game is personally tested by our team</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#d19a53] mr-2">•</span>
                    <span><strong>Cutting Edge:</strong> Experience the newest HTML5 and WebGL gaming technologies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#d19a53] mr-2">•</span>
                    <span><strong>Discover Gems:</strong> Find amazing games before they become trending hits</span>
                  </li>
                </ul>
              </div>

              {/* Features - Updated with bullet points */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-3">Features of Our New Games Collection</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="text-gray-600 list-none space-y-3">
                    <li className="flex items-start">
                      <span className="text-[#d19a53] mr-2">•</span>
                      <span>Fresh titles added weekly (sometimes daily)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#d19a53] mr-2">•</span>
                      <span>Release date tracking for each new game</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#d19a53] mr-2">•</span>
                      <span>Diverse genres for every gaming preference</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#d19a53] mr-2">•</span>
                      <span>Cutting-edge browser game technology</span>
                    </li>
                  </ul>
                  <ul className="text-gray-600 list-none space-y-3">
                    <li className="flex items-start">
                      <span className="text-[#d19a53] mr-2">•</span>
                      <span>Mobile-optimized for play on any device</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#d19a53] mr-2">•</span>
                      <span>Instant loading with no downloads required</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#d19a53] mr-2">•</span>
                      <span>Innovative gameplay mechanics and ideas</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#d19a53] mr-2">•</span>
                      <span>Community feedback system for new games</span>
                    </li>
                  </ul>
                </div>
                <p className="mt-4 text-gray-600">
                  Looking for more options? Check out our <Link href="/hot-games" className="text-[#d19a53] hover:underline">hottest trending games</Link> that have already proven popular with players.
                </p>
              </div>

              {/* Use Cases - Enhanced with examples */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-3">When to Explore New Games</h2>
                <ul className="text-gray-600 list-none space-y-3">
                  <li className="flex items-start">
                    <span className="text-[#d19a53] mr-2">•</span>
                    <span>When you're tired of playing the same games and want something fresh</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#d19a53] mr-2">•</span>
                    <span>To be the first to discover the next viral browser game</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#d19a53] mr-2">•</span>
                    <span>When looking for innovative gameplay mechanics not seen before</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#d19a53] mr-2">•</span>
                    <span>To support indie game developers and their latest creations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#d19a53] mr-2">•</span>
                    <span>For experiencing cutting-edge browser technology in gaming</span>
                  </li>
                </ul>
              </div>

              {/* FAQ - Enhanced with schema markup */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-3">Frequently Asked Questions</h2>
                <div className="space-y-4" itemScope itemType="https://schema.org/FAQPage">
                  <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                    <h3 className="font-semibold text-gray-800" itemProp="name">How often do you add new games?</h3>
                    <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                      <p className="text-gray-600" itemProp="text">We add new games at least weekly, with multiple titles often added several times per week. Our goal is to consistently bring you the freshest gaming content available.</p>
                    </div>
                  </div>
                  
                  <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                    <h3 className="font-semibold text-gray-800" itemProp="name">How do you select new games to feature?</h3>
                    <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                      <p className="text-gray-600" itemProp="text">Our curation team reviews hundreds of new browser games weekly, testing each one for quality, entertainment value, and innovation. Only the best make it into our New Games collection.</p>
                    </div>
                  </div>
                  
                  <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                    <h3 className="font-semibold text-gray-800" itemProp="name">How long do games stay in the New Games section?</h3>
                    <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                      <p className="text-gray-600" itemProp="text">Games typically remain in our New Games section for 2-3 months, depending on release volume. After that, they move to their respective genre categories and may appear in Hot Games if they become popular.</p>
                    </div>
                  </div>
                  
                  <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                    <h3 className="font-semibold text-gray-800" itemProp="name">Are new games tested on mobile devices?</h3>
                    <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                      <p className="text-gray-600" itemProp="text">Yes, we test all new games on multiple devices including smartphones and tablets to ensure they provide a quality gaming experience across all platforms.</p>
                    </div>
                  </div>
                  
                  <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                    <h3 className="font-semibold text-gray-800" itemProp="name">Can I suggest a new game to be added?</h3>
                    <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                      <p className="text-gray-600" itemProp="text">Absolutely! We welcome player suggestions. You can submit game recommendations through our Contact page, and our team will review them for potential inclusion in our library.</p>
                    </div>
                  </div>
                  
                  <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                    <h3 className="font-semibold text-gray-800" itemProp="name">What types of new games are most popular in 2024?</h3>
                    <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                      <p className="text-gray-600" itemProp="text">In 2024, we're seeing particular popularity with idle/clicker games, multiplayer .io games, and puzzle games with unique mechanics. HTML5 games with high-quality graphics are also trending strongly among our new releases.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </section>
      </main>
    </>
  );
} 