import Image from 'next/image';

export default function AboutUsPage() {
  return (
    <main className="container mx-auto px-4 py-12 max-w-3xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#d19a53] mb-6">About Us</h1>
        <div className="mb-8">
          <Image
            src="/images/logos/chillguyclicker-logo.png"
            alt="Chill Guy Clicker Logo"
            width={200}
            height={200}
            className="mx-auto"
            priority
          />
        </div>
      </div>

      <div className="bg-white/10 rounded-lg p-8 shadow-xl">
        <p className="text-lg text-gray-200 leading-relaxed mb-6">
          Chill Guy Clicker is a clicker game featuring the dog character from Chill Guy meme. 
          Play, tap, accumulate, and chill your way with lots of upgrades and achievements. 
          Free. No download is required.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-4 text-center">
          <div className="bg-black/30 p-6 rounded-lg">
            <h2 className="text-[#d19a53] text-xl font-semibold mb-2">Free to Play</h2>
            <p className="text-gray-300">Jump right in without any downloads</p>
          </div>
          <div className="bg-black/30 p-6 rounded-lg">
            <h2 className="text-[#d19a53] text-xl font-semibold mb-2">Browser Based</h2>
            <p className="text-gray-300">Play instantly in your browser</p>
          </div>
        </div>
      </div>

      <footer className="mt-12 text-center text-sm text-gray-400 space-y-2">
        <nav className="flex justify-center space-x-4">
          <a href="/copyright" className="hover:text-[#d19a53] transition-colors">Copyright</a>
          <span>•</span>
          <a href="/contact-us" className="hover:text-[#d19a53] transition-colors">Contact Us</a>
          <span>•</span>
          <a href="/privacy-policy" className="hover:text-[#d19a53] transition-colors">Privacy Policy</a>
          <span>•</span>
          <a href="/terms-of-use" className="hover:text-[#d19a53] transition-colors">Terms of Use</a>
        </nav>
      </footer>
    </main>
  );
} 