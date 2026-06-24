'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

const CATEGORIES = ['All', 'Adventure', 'Culture', 'Food', 'Wellness', 'Nature'];

interface Props {
  destinations: string[]; // Pass destinations dynamically based on dataset
}

export default function FilterBar({ destinations }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const category = searchParams.get('category') || 'All';
  const destination = searchParams.get('destination') || 'All';

  const updateFilters = useCallback(
    (newCategory: string, newDestination: string) => {
      const params = new URLSearchParams(searchParams.toString());
      
      if (newCategory !== 'All') {
        params.set('category', newCategory);
      } else {
        params.delete('category');
      }

      if (newDestination !== 'All') {
        params.set('destination', newDestination);
      } else {
        params.delete('destination');
      }

      router.push(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [pathname, router, searchParams]
  );

  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-8 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
      <div className="flex-1">
        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
          Category
        </label>
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                updateFilters(cat, destination);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                category === cat
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-200'
                  : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
      
      <div className="flex-1 sm:max-w-xs border-t sm:border-t-0 sm:border-l border-gray-100 pt-4 sm:pt-0 sm:pl-4">
        <label htmlFor="destination-filter" className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
          Destination
        </label>
        <select
          id="destination-filter"
          value={destination}
          onChange={(e) => {
            updateFilters(category, e.target.value);
          }}
          className="block w-full bg-gray-50 border border-gray-200 text-gray-700 py-2.5 px-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm appearance-none cursor-pointer"
        >
          <option value="All">All Destinations</option>
          {destinations.map((dest) => (
            <option key={dest} value={dest}>
              {dest}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
