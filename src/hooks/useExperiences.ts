import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';
import { experiences } from '@/data/experiences';

export function useExperiences() {
  const searchParams = useSearchParams();

  const filteredExperiences = useMemo(() => {
    let result = [...experiences];
    
    const search = searchParams.get('search');
    const category = searchParams.get('category');
    const destination = searchParams.get('destination');

    if (search) {
      const searchRegex = new RegExp(search, 'i');
      result = result.filter(exp => searchRegex.test(exp.title));
    }

    if (category) {
      result = result.filter(exp => exp.category === category);
    }

    if (destination) {
      result = result.filter(exp => exp.destination === destination);
    }

    return result;
  }, [searchParams]);

  // Extract unique destinations for the filter dropdown
  const uniqueDestinations = useMemo(() => {
    return Array.from(new Set(experiences.map(exp => exp.destination))).sort();
  }, []);

  return {
    filteredExperiences,
    uniqueDestinations,
    allExperiences: experiences,
  };
}
