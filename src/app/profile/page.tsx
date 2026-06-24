'use client';

import { useFavorites } from '@/context/FavoritesContext';

export default function ProfilePage() {
  const { favorites } = useFavorites();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="h-32 bg-gradient-to-r from-blue-500 to-teal-400"></div>
        <div className="px-8 pb-8">
          <div className="relative flex justify-between items-end -mt-12 mb-8">
            <div className="w-24 h-24 rounded-full border-4 border-white bg-gray-200 overflow-hidden shadow-md flex items-center justify-center text-4xl font-bold text-gray-400">
              {/* Initials placeholder */}
              LM
            </div>
            <button className="bg-white border border-gray-200 text-gray-700 font-medium py-2 px-6 rounded-full hover:bg-gray-50 transition-colors shadow-sm">
              Edit Profile
            </button>
          </div>
          
          <div className="mb-10">
            <h1 className="text-3xl font-extrabold text-gray-900 mb-1">Lea Moreau</h1>
            <p className="text-gray-500 font-medium">Product Manager @ Wanderlust Labs</p>
            <p className="mt-4 text-gray-600 max-w-2xl">
              Passionate about discovering hidden gems, local food scenes, and connecting with cultures around the world. Always planning the next big adventure!
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-gray-100">
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Saved Experiences</div>
              <div className="text-4xl font-extrabold text-blue-600">{favorites.length}</div>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Places Visited</div>
              <div className="text-4xl font-extrabold text-gray-900">14</div>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Reviews Left</div>
              <div className="text-4xl font-extrabold text-gray-900">8</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
