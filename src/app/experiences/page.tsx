'use client';

import { Suspense } from 'react';
import SearchBar from '@/components/SearchBar';
import FilterBar from '@/components/FilterBar';
import ExperienceCard from '@/components/ExperienceCard';
import { useExperiences } from '@/hooks/useExperiences';

function ExperiencesContent() {
  const { filteredExperiences, uniqueDestinations } = useExperiences();

  return (
    <>
      <div className="mb-8 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <h1 className="text-3xl font-bold text-gray-900">Explore Experiences</h1>
          <SearchBar />
        </div>
        <FilterBar destinations={uniqueDestinations} />
      </div>

      {filteredExperiences.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredExperiences.map((exp) => (
            <ExperienceCard key={exp.id} experience={exp} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 mx-auto text-gray-300 mb-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="text-lg font-medium text-gray-900 mb-1">No results found</h3>
          <p className="text-gray-500">Try adjusting your filters or search term.</p>
        </div>
      )}
    </>
  );
}

export default function ExperiencesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Suspense fallback={<div className="text-center py-10">Loading explorer...</div>}>
        <ExperiencesContent />
      </Suspense>
    </div>
  );
}
