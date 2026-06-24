import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=2000')",
        }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
      </div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 drop-shadow-lg">
          Discover Your Next <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">Adventure</span>
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-gray-100 max-w-2xl mx-auto mb-10 drop-shadow-md">
          Explore curated, unique experiences around the globe. From hidden culinary gems to breathtaking nature trails.
        </p>
        <div className="flex justify-center">
          <Link
            href="/experiences"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full text-gray-900 bg-white hover:bg-gray-50 hover:scale-105 transition-all shadow-xl hover:shadow-2xl"
          >
            Start Exploring
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 ml-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
