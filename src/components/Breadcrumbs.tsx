"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/24/solid';

export default function Breadcrumbs() {
  const pathname = usePathname();
  
  // Skip rendering breadcrumbs on homepage
  if (pathname === '/') return null;
  
  // Generate breadcrumb segments
  const segments = pathname
    .split('/')
    .filter(Boolean)
    .map((segment) => {
      // Convert slug format to display format (e.g., "hot-games" to "Hot Games")
      return segment.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ');
    });
  
  // Create path segments for links
  const pathSegments = pathname.split('/').filter(Boolean);
  
  return (
    <nav className="bg-gray-50 py-2 px-4">
      <div className="container mx-auto">
        <ol className="flex flex-wrap items-center text-sm text-gray-600">
          <li className="flex items-center">
            <Link href="/" className="flex items-center hover:text-[#d19a53] transition-colors">
              <HomeIcon className="w-4 h-4 mr-1" />
              <span>Home</span>
            </Link>
          </li>
          
          {segments.map((segment, index) => {
            // Build the href for this breadcrumb
            const href = `/${pathSegments.slice(0, index + 1).join('/')}`;
            
            return (
              <li key={index} className="flex items-center">
                <ChevronRightIcon className="w-4 h-4 mx-2 text-gray-400" />
                {index === segments.length - 1 ? (
                  // Last item (current page) - not clickable
                  <span className="font-medium text-[#d19a53]">{segment}</span>
                ) : (
                  // Parent paths - clickable
                  <Link href={href} className="hover:text-[#d19a53] transition-colors">
                    {segment}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
} 