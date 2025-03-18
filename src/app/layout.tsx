import type { Metadata } from "next";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Inter } from "next/font/google";
import "./globals.css";
import Breadcrumbs from '@/components/Breadcrumbs';

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