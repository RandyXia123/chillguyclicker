"use client";
import { useState } from 'react';
import { games } from '@/data/games';
import GameCard from '@/components/GameCard';
import Head from 'next/head';
import Link from 'next/link';

export default function HotGamesPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const gamesPerPage = 15;
  
  // Filter and sort hot games by rating
  const hotGames = games
    .filter(game => game.isHot)
    .sort((a, b) => (b.rating || 0) - (a.rating || 0));
    
  // Calculate pagination
  const totalPages = Math.ceil(hotGames.length / gamesPerPage);
  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  const currentGames = hotGames.slice(indexOfFirstGame, indexOfLastGame);

  return (
    <>
      <Head>
        <title>2024's Top Hot Games - Most Popular Free Online Browser Games</title>
        <meta name="description" content="Play the hottest free online games! No downloads needed. Explore trending browser games ranked by popularity and user ratings. Play instantly on any device!" />
      </Head>
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-[#d19a53] mb-8">Hot Games 🔥</h1>
        
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
              Hottest Free Online Games - Most Popular Browser Games
            </h2>
            
            <div className="space-y-8">
              {/* Updated Intro Paragraph */}
              <p className="text-gray-700 leading-relaxed">
                Dive into 2024's hottest free online games! Our Hot Games collection features the most popular browser games trending worldwide, from addictive io games like Agar.io to thrilling puzzle adventures and unblocked HTML5 games. Ranked by real player ratings and updated daily, all games are free to play instantly—no downloads or sign-ups needed!
              </p>
              
              {/* Category & Tags - Expanded */}
              <div className="flex flex-wrap gap-4">
                <div>
                  <span className="font-semibold text-gray-700">Category:</span>
                  <span className="ml-2 px-3 py-1 bg-gray-100 rounded-full text-gray-600">Browser Games</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-700">Tags:</span>
                  <div className="inline-flex flex-wrap gap-2 ml-2">
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">Hot Games</span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">Popular Games</span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">Free Online Games</span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">No Download</span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">HTML5 Games</span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">Unblocked Games</span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">IO Games</span>
                  </div>
                </div>
              </div>

              {/* Summary - Enhanced with examples */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-3">Top Free Browser Games Collection</h2>
                <p className="text-gray-600 mb-4">
                  Discover our curated collection of the hottest free online games trending right now. Our Hot Games section features the most popular browser games that have captured players' attention worldwide, including favorites like Chill Guy Clicker, Cookie Clicker, and multiplayer hits like Slither.io.
                </p>
                <p className="text-gray-600">
                  These games are ranked by player ratings and popularity, ensuring you'll find only the best gaming experiences. All games are completely free to play directly in your browser with no downloads required.
                </p>
              </div>

              {/* What are Hot Games - Expanded with game examples */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-3">What are Hot Games?</h2>
                <p className="text-gray-600 mb-4">
                  Hot Games are trending online games that have gained significant popularity among players in 2024. These games are ranked based on user ratings, play counts, and overall engagement to bring you the most enjoyable gaming experiences.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Trending in 2024</h3>
                  <p className="text-gray-600">
                    This year's hottest games include addictive clickers like Chill Guy Clicker, fast-paced arcade experiences, and multiplayer io games that let you compete against players worldwide.
                  </p>
                </div>
                <p className="text-gray-600">
                  Our collection includes various genres such as clicker games, arcade games, puzzle games, survival games, io games, and more. Each game in this section has been vetted for quality and entertainment value, ensuring an enjoyable gaming experience.
                </p>
              </div>

              {/* How to Use - Improved with bullet points */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-3">How to Browse Hot Games</h2>
                <ul className="text-gray-600 list-none space-y-3">
                  <li className="flex items-start">
                    <span className="text-[#d19a53] mr-2">•</span>
                    <span><strong>Browse:</strong> Explore our collection of hot games ranked by popularity</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#d19a53] mr-2">•</span>
                    <span><strong>Select:</strong> Click on any game card to go to its dedicated page</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#d19a53] mr-2">•</span>
                    <span><strong>Learn:</strong> Read about the game features and instructions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#d19a53] mr-2">•</span>
                    <span><strong>Play:</strong> Click "Play Now" to start playing instantly in your browser</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#d19a53] mr-2">•</span>
                    <span><strong>Explore More:</strong> Use the pagination buttons to discover additional hot games</span>
                  </li>
                </ul>
              </div>

              {/* Why Choose Us - New section */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-3">Why Choose Our Hot Games Collection?</h2>
                <ul className="text-gray-600 list-none space-y-3">
                  <li className="flex items-start">
                    <span className="text-[#d19a53] mr-2">•</span>
                    <span><strong>Quality Curation:</strong> Every game is hand-picked for quality and fun factor</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#d19a53] mr-2">•</span>
                    <span><strong>Always Free:</strong> No subscriptions or hidden costs—ever</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#d19a53] mr-2">•</span>
                    <span><strong>Instant Play:</strong> No downloads, registrations, or waiting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#d19a53] mr-2">•</span>
                    <span><strong>Latest Trends:</strong> Regularly updated with new trending games</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#d19a53] mr-2">•</span>
                    <span><strong>Community Rated:</strong> Games ranked by actual player reviews</span>
                  </li>
                </ul>
              </div>

              {/* Features - Updated with bullet points */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-3">Features of Our Hot Games Collection</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="text-gray-600 list-none space-y-3">
                    <li className="flex items-start">
                      <span className="text-[#d19a53] mr-2">•</span>
                      <span>Curated selection of top-rated browser games</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#d19a53] mr-2">•</span>
                      <span>No downloads or installations required</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#d19a53] mr-2">•</span>
                      <span>Games optimized for both desktop and mobile play</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#d19a53] mr-2">•</span>
                      <span>Regular updates with new trending games</span>
                    </li>
                  </ul>
                  <ul className="text-gray-600 list-none space-y-3">
                    <li className="flex items-start">
                      <span className="text-[#d19a53] mr-2">•</span>
                      <span>User rating system to help identify the best games</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#d19a53] mr-2">•</span>
                      <span>Instant play functionality</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#d19a53] mr-2">•</span>
                      <span>Wide variety of game genres</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#d19a53] mr-2">•</span>
                      <span>High-quality HTML5 games that run on any device</span>
                    </li>
                  </ul>
                </div>
                <p className="mt-4 text-gray-600">
                  Ready to dive into our game collection? <Link href="/new-games" className="text-[#d19a53] hover:underline">Check out our newest games</Link>.
                </p>
              </div>

              {/* Use Cases - Enhanced with examples */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-3">When to Play Hot Games</h2>
                <ul className="text-gray-600 list-none space-y-3">
                  <li className="flex items-start">
                    <span className="text-[#d19a53] mr-2">•</span>
                    <span>During short breaks for quick entertainment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#d19a53] mr-2">•</span>
                    <span>When looking for popular games that others are enjoying</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#d19a53] mr-2">•</span>
                    <span>To discover new trending games in various genres</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#d19a53] mr-2">•</span>
                    <span>When you want to play games without installing anything</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#d19a53] mr-2">•</span>
                    <span>For casual gaming sessions on any device, including mobile phones and tablets</span>
                  </li>
                </ul>
              </div>

              {/* FAQ - Enhanced with additional question and schema markup */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-3">Frequently Asked Questions</h2>
                <div className="space-y-4" itemScope itemType="https://schema.org/FAQPage">
                  <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                    <h3 className="font-semibold text-gray-800" itemProp="name">Are these games really free to play?</h3>
                    <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                      <p className="text-gray-600" itemProp="text">Yes, all games in our Hot Games collection are completely free to play with no hidden charges or paywalls.</p>
                    </div>
                  </div>
                  
                  <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                    <h3 className="font-semibold text-gray-800" itemProp="name">Do I need to create an account to play?</h3>
                    <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                      <p className="text-gray-600" itemProp="text">No account is required. Simply click on any game and start playing immediately without registration.</p>
                    </div>
                  </div>
                  
                  <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                    <h3 className="font-semibold text-gray-800" itemProp="name">How often is the Hot Games list updated?</h3>
                    <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                      <p className="text-gray-600" itemProp="text">We regularly update our Hot Games collection based on user ratings and popularity to ensure you always have access to the latest trending games. Most updates occur weekly.</p>
                    </div>
                  </div>
                  
                  <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                    <h3 className="font-semibold text-gray-800" itemProp="name">Can I play these games on mobile devices?</h3>
                    <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                      <p className="text-gray-600" itemProp="text">Yes, all games in our collection are optimized for both desktop and mobile play, allowing you to enjoy them on any device with a modern web browser.</p>
                    </div>
                  </div>
                  
                  <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                    <h3 className="font-semibold text-gray-800" itemProp="name">How are games ranked in the Hot Games section?</h3>
                    <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                      <p className="text-gray-600" itemProp="text">Games are ranked based on user ratings, play counts, and overall popularity to ensure you see the most beloved games first. Our algorithm also considers recent trends.</p>
                    </div>
                  </div>
                  
                  <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                    <h3 className="font-semibold text-gray-800" itemProp="name">What genres are included in Hot Games?</h3>
                    <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                      <p className="text-gray-600" itemProp="text">Our Hot Games collection includes a wide variety of genres such as clicker games, idle games, puzzle games, action games, io games, survival games, adventure games, and many more. We feature games that appeal to casual players and gaming enthusiasts alike.</p>
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