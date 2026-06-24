'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useFavorites } from '@/context/FavoritesContext';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const { favorites } = useFavorites();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Explore', href: '/experiences' },
    { name: 'Favorites', href: '/favorites' },
    { name: 'Profile', href: '/profile' },
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">
              Wanderlust
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (pathname.startsWith('/experiences') && link.href === '/experiences');
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'border-blue-500 text-gray-900'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }`}
                >
                  {link.name}
                  {link.name === 'Favorites' && favorites.length > 0 && (
                    <span className="ml-2 bg-rose-100 text-rose-600 py-0.5 px-2 rounded-full text-xs">
                      {favorites.length}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg className="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      {isMobileMenuOpen && (
        <div className="sm:hidden border-t border-gray-100 bg-white">
          <div className="pt-2 pb-3 space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (pathname.startsWith('/experiences') && link.href === '/experiences');
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                    isActive
                      ? 'bg-blue-50 border-blue-500 text-blue-700'
                      : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
                  }`}
                >
                  <div className="flex items-center">
                    {link.name}
                    {link.name === 'Favorites' && favorites.length > 0 && (
                      <span className="ml-2 bg-rose-100 text-rose-600 py-0.5 px-2 rounded-full text-xs">
                        {favorites.length}
                      </span>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
