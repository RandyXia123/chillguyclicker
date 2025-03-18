import type { Metadata } from "next";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Inter } from "next/font/google";
import "./globals.css";
import Breadcrumbs from '@/components/Breadcrumbs';
import Script from 'next/script'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chill Guy Clicker - The Most Relaxing Idle Game",
  description: "Play Chill Guy Clicker online for free. Click to achieve the prestigious final achievement, 'You are a chill guy'.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WY9FG5J0C6"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-WY9FG5J0C6');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <header className="sticky top-0 z-50 bg-white shadow-md">
            <Navbar />
          </header>
          
          <Breadcrumbs />
          
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}