'use client';

import { useFavorites } from '@/context/FavoritesContext';
import { experiences } from '@/data/experiences';
import ExperienceCard from '@/components/ExperienceCard';
import Link from 'next/link';

export default function FavoritesPage() {
  const { favorites } = useFavorites();
  
  const favoriteExperiences = experiences.filter(exp => favorites.includes(exp.id));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Your Favorites</h1>
        <p className="text-xl text-gray-500">Places you&apos;ve saved for your next adventure.</p>
      </div>

      {favoriteExperiences.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {favoriteExperiences.map((exp) => (
            <ExperienceCard key={exp.id} experience={exp} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white rounded-3xl shadow-sm border border-gray-100 max-w-2xl mx-auto">
          <div className="bg-rose-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-rose-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">No favorites yet</h3>
          <p className="text-gray-500 mb-8 max-w-sm mx-auto">
            You haven&apos;t saved any experiences. Start exploring to find your next adventure!
          </p>
          <Link 
            href="/experiences" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-md shadow-blue-200"
          >
            Explore Experiences
          </Link>
        </div>
      )}
    </div>
  );
}
