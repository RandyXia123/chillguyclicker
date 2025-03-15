import GameContainer from '@/components/GameContainer';
import GameCard from '@/components/GameCard';

export default function Home() {
  // Sample data for related games
  const hotGames = [
    { title: 'Chill Girl Clicker', imageSrc: '/images/game-thumbnails/chill-girl-clicker-game-f220x175.png', slug: 'chill-girl-clicker' },
    { title: 'Color Rush', imageSrc: '/images/game-thumbnails/color-rush.png', slug: 'color-rush' },
    { title: 'Supermarket Master', imageSrc: '/images/game-thumbnails/supermarket-master.png', slug: 'supermarket-master' },
    { title: 'Curve Rush', imageSrc: '/images/game-thumbnails/curve-rush.png', slug: 'curve-rush' },
    { title: 'Wave Road', imageSrc: '/images/game-thumbnails/wave-road.png', slug: 'wave-road' },
    // Add more games as needed
  ];

  const newGames = [
    { title: 'Knock Balls', imageSrc: '/images/game-thumbnails/knock-balls.png', slug: 'knock-balls' },
    { title: 'Monkey Mart', imageSrc: '/images/game-thumbnails/monkey-mart.png', slug: 'monkey-mart' },
    { title: 'Shooter Sky', imageSrc: '/images/game-thumbnails/shooter-sky.png', slug: 'shooter-sky' },
    { title: 'Red Light Green Light', imageSrc: '/images/game-thumbnails/red-light-green-light.png', slug: 'red-light-green-light' },
    { title: 'Wave Dash', imageSrc: '/images/game-thumbnails/wave-dash.png', slug: 'wave-dash' },
  ];

  return (
    <div className="bg-[#f5f5f5]">
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 gap-6">
        {/* Main Content */}
        <div className="w-full md:w-2/3">
          {/* Game Container Section */}
          <section className="mb-8">
            <GameContainer 
              gameUrl="https://game.azgame.io/chill-guy-clicker/"
              gameTitle="Chill Guy Clicker"
              gameLogoSrc="/images/chill-guy-logo.png"
              rating={4.3}
              backgroundImageSrc="/images/chill-guy-background.jpg"
              thumbnailSrc="/images/game-thumbnails/chill-guy-clicker-game-f220x175.jpg"
            />
          </section>

          {/* New Games Section */}
          <section id="new-games" className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">New Games</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {newGames.map((game, index) => (
                <GameCard 
                  key={index}
                  title={game.title}
                  imageSrc={game.imageSrc}
                  slug={game.slug}
                />
              ))}
            </div>
          </section>

          {/* Game Info SEO Section */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <article className="prose prose-lg max-w-none">
              <h1 className="text-3xl font-bold text-gray-800 mb-6">
                Chill Guy Clicker - Free Browser Idle Game | Relaxing Clicker Games
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
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">Chill Clicker</span>
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">Relaxing Games</span>
                    </div>
                  </div>
                </div>

                {/* Summary */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">Best Free Browser Idle Game</h2>
                  <p className="text-gray-600">
                  Chill Guy Clicker lets you hang out with the beloved Chill Guy while you tap away to rack up points. This laid-back browser game doesn't need any downloads - just click, earn, upgrade, and watch your progress soar. Perfect for when you want to zone out and still feel like you're accomplishing something. The best part? It's completely free!
                  </p>
                </div>

                {/* What is Chill Guy Clicker */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">What is Chill Guy Clicker?</h2>
                  <p className="text-gray-600">
                    Tap your way to zen with one of the most relaxing idle games featuring everyone's favorite meme character! Our chill pup rocks his signature style while keeping it cool no matter what. Join millions of players in this free browser game that's all about good vibes and casual fun.
                  </p>
                </div>

                {/* How to Play */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">How to Play This Free Browser Idle Game</h2>
                  <ol className="text-gray-600 list-decimal pl-6 space-y-2 mb-6">
                    <li>Click the "Play Now" button to start the game</li>
                    <li>Tap or click on the Chill Guy character to earn points</li>
                    <li>Use earned points to purchase upgrades</li>
                    <li>Unlock achievements as you progress</li>
                    <li>Enable auto-clickers to earn points while away</li>
                  </ol>
                  <p className="text-gray-600">
                    Just tap the chill guy to make more chill guys! Start with one click = one chill dude, and watch your chill army grow. This game is totally free - no downloads, 
                        no installations, and zero annoying ads to mess with your zen.
                        As you rack up chill guys (they're basically your points), you can spend them on cool upgrades. Grab a Cursor for 50 points to do some clicking for you, level up to a Chill Guy Farm for 1,100 points, or go big with a Chill Guy Pump for 100,000 points. The more upgrades you snag, the faster your chill guys multiply!
                        Your mission? Get so many points that you unlock the ultimate achievement: becoming a chill guy yourself. Pretty meta, right?
                        Ready to chill? Just head to chillguyclicker.io, hit Play Now, and start tapping. Before you know it, you'll be swimming in chill guys and vibing your way to the top!
                  </p>
                </div>

                {/* Features */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">Ultimate Relaxing Clicker Game Features</h2>
                  <div className="space-y-6 text-gray-600">
                    <p>
                      Forget boring old games - Chill Guy Clicker is where it's at! This laid-back idle game lets you hang with everyone's favorite internet doggo while you click your stress away.
                    </p>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Unlock Unique Characters</h3>
                      <p>
                        The cast is hilarious - unlock wild characters like Equilibrist Chill Guy doing his balance thing, Witch Chill Guy casting chill spells, King Chill Guy ruling the relaxation kingdom, and even Mexican Chill Guy bringing those south-of-the-border vibes. My personal favorite? Chill Guy and Friend - because even the chillest dudes need a buddy!
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Dynamic Weather System</h3>
                      <p>
                        Want to mix things up? Change the weather! Make it rain, bring out the sun, watch star showers fall, or let the wind blow through - each with its own cool effects.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Upgrades & Achievements</h3>
                      <p>
                        As you play, you'll stack up upgrades that turn you into a point-making machine. And those achievements? They hit different in the unblocked version - trust me, you'll want to find them all.
                      </p>
                    </div>

                    <ul className="list-disc pl-6 space-y-2 mt-4">
                      <li>Browser-based gameplay - no downloads required</li>
                      <li>Auto-save functionality</li>
                      <li>Multiple upgrade paths</li>
                      <li>Achievement system</li>
                      <li>Offline progress</li>
                      <li>Mobile-friendly interface</li>
                    </ul>
                  </div>
                </div>

                {/* Use Cases */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">Why Choose This Chill Clicker Game?</h2>
                  <ul className="text-gray-600 list-disc pl-6 space-y-2">
                    <li>Perfect for relaxing gaming breaks</li>
                    <li>Best free browser idle game for casual players</li>
                    <li>Engaging chill clicker gameplay</li>
                    <li>Relaxing idle game mechanics</li>
                    <li>Mobile-friendly browser game</li>
                  </ul>
                </div>

                {/* FAQ */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">Free Browser Idle Game FAQ</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-800">Is Chill Guy Clicker free to play?</h3>
                      <p className="text-gray-600">Yes, the game is completely free to play in your web browser.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Do I need to download anything?</h3>
                      <p className="text-gray-600">No, the game runs directly in your web browser without any downloads.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Does the game save my progress?</h3>
                      <p className="text-gray-600">Yes, your progress is automatically saved in your browser.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Can I play on mobile devices?</h3>
                      <p className="text-gray-600">Yes, the game is fully optimized for both desktop and mobile play.</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </section>
        </div>

        {/* Sidebar */}
        <div className="w-full md:w-1/3">
          <div className="bg-[#dfe3f3] rounded-lg shadow-md p-4 mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Hot games</h2>
            <div className="grid grid-cols-2 gap-3">
              {hotGames.map((game, index) => (
                <GameCard 
                  key={index}
                  title={game.title}
                  imageSrc={game.imageSrc}
                  slug={game.slug}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
