import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Head from 'next/head';
import Breadcrumbs from './Breadcrumbs';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  title = 'Chill Guy Clicker - The Most Relaxing Idle Game',
  description = 'Play Chill Guy Clicker online for free. Click to achieve the prestigious final achievement, "You are a chill guy".'
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon/android-chrome-192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/favicon/android-chrome-512.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <header className="sticky top-0 z-50 bg-white shadow-md">
          <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Navbar />
          </nav>
        </header>
        <Breadcrumbs />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;