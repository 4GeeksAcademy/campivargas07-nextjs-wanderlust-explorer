'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

export default function SearchBar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  const searchTerm = searchParams.get('search') || '';

  const handleSearch = useCallback(
    (term: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (term) {
        params.set('search', term);
      } else {
        params.delete('search');
      }
      
      // If we are not on the experiences page, navigate there
      if (pathname !== '/experiences') {
        router.push(`/experiences?${params.toString()}`);
      } else {
        router.push(`${pathname}?${params.toString()}`, { scroll: false });
      }
    },
    [pathname, router, searchParams]
  );

  return (
    <div className="relative w-full max-w-xl">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-400">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
      </div>
      <input
        type="text"
        className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:text-sm transition-all shadow-sm"
        placeholder="Search experiences (e.g. Sailing, Food tour...)"
        value={searchTerm}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      />
    </div>
  );
}
