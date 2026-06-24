import Link from 'next/link';
import { notFound } from 'next/navigation';
import { experiences } from '@/data/experiences';

export async function generateStaticParams() {
  return experiences.map((exp) => ({
    id: exp.id,
  }));
}

export default async function ExperienceDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const experience = experiences.find(e => e.id === id);

  if (!experience) {
    notFound();
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-6 flex items-center">
        <Link href="/experiences" className="text-blue-600 hover:text-blue-800 flex items-center transition-colors font-medium">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 mr-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Back to Explorer
        </Link>
      </div>

      <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100">
        <div className="relative h-96 w-full">
          {/* Placeholder instead of real image for the MVP */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${experience.imageUrl})` }}
          />
        </div>
        
        <div className="p-8 sm:p-12">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase">
                  {experience.category}
                </span>
                <span className="flex items-center text-gray-500 font-medium">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-1 text-gray-400">
                    <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                  </svg>
                  {experience.destination}
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
                {experience.title}
              </h1>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-1 text-amber-400">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                </svg>
                <span className="font-bold text-gray-900 text-lg">{experience.rating}</span>
                <span className="text-gray-500 ml-1">/ 5.0 rating</span>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 min-w-[250px] text-center md:text-left">
              <div className="text-sm text-gray-500 uppercase tracking-wider font-semibold mb-1">Price</div>
              <div className="text-4xl font-extrabold text-gray-900 mb-4">${experience.price} <span className="text-lg font-medium text-gray-500 lowercase">/ person</span></div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl transition-colors shadow-lg shadow-blue-200">
                Book Now
              </button>
            </div>
          </div>
          
          <div className="mt-10 pt-10 border-t border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">About this experience</h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
              {experience.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
