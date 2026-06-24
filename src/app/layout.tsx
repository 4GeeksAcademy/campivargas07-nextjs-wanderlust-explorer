import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FavoritesProvider } from "@/context/FavoritesContext";
import Navbar from "@/components/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wanderlust Explorer",
  description: "Discover and save unique experiences around the world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased bg-gray-50 text-gray-900 min-h-screen flex flex-col font-sans`}
      >
        <FavoritesProvider>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
        </FavoritesProvider>
      </body>
    </html>
  );
}
