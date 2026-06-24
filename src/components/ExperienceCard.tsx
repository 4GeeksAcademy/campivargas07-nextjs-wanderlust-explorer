import Link from 'next/link';
import { Experience } from '@/data/experiences';
import { useFavorites } from '@/context/FavoritesContext';

interface Props {
  experience: Experience;
}

export default function ExperienceCard({ experience }: Props) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorite = isFavorite(experience.id);

  return (
    <div className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full">
      <div className="relative h-64 w-full overflow-hidden">
        {/* Placeholder instead of real image for the MVP without next/image domains configured */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url(${experience.imageUrl})` }}
        />
        <div className="absolute top-4 right-4 z-10">
          <button
            onClick={(e) => {
              e.preventDefault();
              toggleFavorite(experience.id);
            }}
            className="p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors shadow-sm group/btn"
            aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill={favorite ? "currentColor" : "none"} 
              stroke="currentColor" 
              className={`w-5 h-5 ${favorite ? 'text-rose-500' : 'text-gray-600 group-hover/btn:text-rose-500'}`}
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
          </button>
        </div>
        <div className="absolute top-4 left-4 z-10">
          <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-800 shadow-sm">
            {experience.category}
          </span>
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <div className="text-sm font-medium text-gray-500 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-1 text-gray-400">
              <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
            </svg>
            {experience.destination}
          </div>
          <div className="flex items-center text-sm font-bold text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-1 text-amber-400">
              <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
            </svg>
            {experience.rating}
          </div>
        </div>
        
        <Link href={`/experiences/${experience.id}`} className="group-hover:text-blue-600 transition-colors">
          <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 leading-tight">
            {experience.title}
          </h3>
        </Link>
        
        <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
          <div>
            <span className="text-lg font-bold text-gray-900">${experience.price}</span>
            <span className="text-sm text-gray-500"> / person</span>
          </div>
          <Link 
            href={`/experiences/${experience.id}`}
            className="text-sm font-semibold text-blue-600 bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-lg transition-colors"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}
