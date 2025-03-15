"use client";

import Image from 'next/image';
import Link from 'next/link';

interface GameCardProps {
  title: string;
  imageSrc: string;
  slug: string;
}

export default function GameCard({ title, imageSrc, slug }: GameCardProps) {
  // Force absolute path by using the full URL path
  const href = slug === '/' ? '/' : `/games/${slug}`;

  return (
    <Link 
      href={href}
      className="block group"
    >
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
        <div className="relative h-36 w-full">
          <Image 
            src={imageSrc} 
            alt={title} 
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-2 text-center">
          <h3 className="font-medium text-gray-800 text-sm group-hover:text-orange-500 transition-colors">{title}</h3>
        </div>
      </div>
    </Link>
  );
}