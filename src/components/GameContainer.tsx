"use client";

import { useState, useRef } from 'react';
import Image from 'next/image';

interface GameContainerProps {
  gameUrl: string;
  gameTitle: string;
  gameLogoSrc: string;
  rating: number;
  backgroundImageSrc: string;
  thumbnailSrc: string;
}

const GameContainer: React.FC<GameContainerProps> = ({
  gameUrl,
  gameTitle,
  gameLogoSrc,
  rating,
  backgroundImageSrc,
  thumbnailSrc,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const startGame = () => {
    setIsPlaying(true);
  };

  const toggleFullScreen = () => {
    if (isPlaying) {
      // Handle fullscreen for the game iframe
      if (!document.fullscreenElement) {
        iframeRef.current?.requestFullscreen().catch(err => {
          console.error(`Error attempting to enable fullscreen: ${err.message}`);
        });
      } else {
        document.exitFullscreen();
      }
    } else {
      // Handle fullscreen for the thumbnail container
      if (!document.fullscreenElement) {
        containerRef.current?.requestFullscreen().catch(err => {
          console.error(`Error attempting to enable fullscreen: ${err.message}`);
        });
      } else {
        document.exitFullscreen();
      }
    }
  };

  const renderStars = () => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    return (
      <div className="flex">
        {[...Array(fullStars)].map((_, i) => (
          <span key={`star-${i}`} className="text-yellow-400 text-lg">★</span>
        ))}
        {hasHalfStar && <span className="text-yellow-400 text-lg">★</span>}
        {[...Array(5 - fullStars - (hasHalfStar ? 1 : 0))].map((_, i) => (
          <span key={`empty-star-${i}`} className="text-gray-400 text-lg">★</span>
        ))}
      </div>
    );
  };

  return (
    <div 
      id="game-container"
      className="relative w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-xl"
    >
      {!isPlaying ? (
        <div 
          className="relative flex flex-col items-center justify-center w-full h-[500px] bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImageSrc})` }}
        >
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
          
          <div ref={containerRef} className="relative z-10 bg-white/90 p-3 rounded-lg shadow-md mb-6">
            <Image 
              src={thumbnailSrc}
              alt={`${gameTitle} Game`}
              width={220}
              height={175}
              className="rounded"
              priority
            />
          </div>
          
          <button
            onClick={startGame}
            className="relative z-10 bg-black text-white font-bold uppercase py-3 px-10 rounded-full hover:scale-105 transition-transform duration-200 hover:bg-gray-800 shadow-lg"
          >
            Play Now
          </button>
        </div>
      ) : (
        <div className="w-full h-[500px] bg-black">
          <iframe 
            ref={iframeRef}
            src={gameUrl} 
            className="w-full h-full" 
            frameBorder="0" 
            allowFullScreen
          />
        </div>
      )}
      
      {/* Controls bar */}
      <div className="absolute bottom-0 left-0 w-full h-12 bg-black/80 flex justify-between items-center px-4">
        <div className="flex items-center text-white">
          {renderStars()}
          <span className="ml-2 font-medium">{rating.toFixed(1)}</span>
        </div>
        
        <div className="flex gap-4">
          <button 
            className="text-white hover:text-gray-300 transition-colors p-2"
            title="Comments"
          >
            💬
          </button>
          <button 
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: gameTitle,
                  url: window.location.href
                }).catch(console.error);
              } else {
                // Fallback - copy to clipboard
                navigator.clipboard.writeText(window.location.href);
                // You might want to add a toast notification here
              }
            }}
            className="text-white hover:text-gray-300 transition-colors p-2"
            title="Share"
          >
            📤
          </button>
          <button 
            onClick={toggleFullScreen}
            className="text-white hover:text-gray-300 transition-colors p-2"
            title="Fullscreen"
          >
            ⛶
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameContainer;