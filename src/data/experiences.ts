export interface Experience {
  id: string;
  title: string;
  description: string;
  category: 'Adventure' | 'Culture' | 'Food' | 'Wellness' | 'Nature';
  destination: string;
  price: number;
  rating: number;
  imageUrl: string;
}

export const experiences: Experience[] = [
  {
    "id": "exp_001",
    "title": "Private Tour",
    "description": "Explore breathtaking landscapes and reconnect with nature in this exclusive tour.",
    "category": "Culture",
    "destination": "Split, Croatia",
    "price": 253,
    "rating": 4.8,
    "imageUrl": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "exp_002",
    "title": "Private Visit",
    "description": "Immerse yourself in the local culture and traditions on this unique and authentic experience.",
    "category": "Culture",
    "destination": "Bangkok, Thailand",
    "price": 272,
    "rating": 4.6,
    "imageUrl": "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "exp_003",
    "title": "Exclusive Yoga Session",
    "description": "Immerse yourself in the local culture and traditions on this unique and authentic experience.",
    "category": "Wellness",
    "destination": "Bangkok, Thailand",
    "price": 309,
    "rating": 4.9,
    "imageUrl": "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "exp_004",
    "title": "Hidden Meditation",
    "description": "A perfect blend of excitement and relaxation, designed to leave you refreshed and inspired.",
    "category": "Wellness",
    "destination": "Bangkok, Thailand",
    "price": 276,
    "rating": 4.9,
    "imageUrl": "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "exp_005",
    "title": "Authentic Tour",
    "description": "Discover the hidden gems of the city with a local expert. Unforgettable memories await.",
    "category": "Culture",
    "destination": "New York, USA",
    "price": 81,
    "rating": 4.6,
    "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "exp_006",
    "title": "Guided Experience",
    "description": "Discover the hidden gems of the city with a local expert. Unforgettable memories await.",
    "category": "Culture",
    "destination": "Cape Town, South Africa",
    "price": 98,
    "rating": 4.2,
    "imageUrl": "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "exp_007",
    "title": "Traditional Market Visit",
    "description": "A perfect blend of excitement and relaxation, designed to leave you refreshed and inspired.",
    "category": "Food",
    "destination": "Bali, Indonesia",
    "price": 218,
    "rating": 4.9,
    "imageUrl": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "exp_008",
    "title": "Guided Visit",
    "description": "Discover the hidden gems of the city with a local expert. Unforgettable memories await.",
    "category": "Culture",
    "destination": "Kyoto, Japan",
    "price": 229,
    "rating": 4.1,
    "imageUrl": "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "exp_009",
    "title": "Secret Walk",
    "description": "Immerse yourself in the local culture and traditions on this unique and authentic experience.",
    "category": "Culture",
    "destination": "Rome, Italy",
    "price": 119,
    "rating": 4.1,
    "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "exp_010",
    "title": "Authentic Street Food Tour",
    "description": "Explore breathtaking landscapes and reconnect with nature in this exclusive tour.",
    "category": "Food",
    "destination": "Cusco, Peru",
    "price": 265,
    "rating": 4.7,
    "imageUrl": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "exp_011",
    "title": "Guided Experience",
    "description": "Explore breathtaking landscapes and reconnect with nature in this exclusive tour.",
    "category": "Culture",
    "destination": "Split, Croatia",
    "price": 187,
    "rating": 4.5,
    "imageUrl": "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "exp_012",
    "title": "Ultimate Cooking Class",
    "description": "Immerse yourself in the local culture and traditions on this unique and authentic experience.",
    "category": "Food",
    "destination": "New York, USA",
    "price": 387,
    "rating": 4,
    "imageUrl": "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "exp_013",
    "title": "Amazing Safari",
    "description": "Immerse yourself in the local culture and traditions on this unique and authentic experience.",
    "category": "Adventure",
    "destination": "Cusco, Peru",
    "price": 219,
    "rating": 4.6,
    "imageUrl": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "exp_014",
    "title": "Authentic Expedition",
    "description": "Taste the finest local ingredients and learn the secrets of traditional cuisine.",
    "category": "Adventure",
    "destination": "Reykjavik, Iceland",
    "price": 438,
    "rating": 4.2,
    "imageUrl": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "exp_015",
    "title": "Guided Hot Springs",
    "description": "Explore breathtaking landscapes and reconnect with nature in this exclusive tour.",
    "category": "Wellness",
    "destination": "Marrakech, Morocco",
    "price": 420,
    "rating": 5,
    "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "exp_016",
    "title": "Amazing Expedition",
    "description": "Taste the finest local ingredients and learn the secrets of traditional cuisine.",
    "category": "Adventure",
    "destination": "Bali, Indonesia",
    "price": 256,
    "rating": 4.6,
    "imageUrl": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "exp_017",
    "title": "Amazing Eco Walk",
    "description": "A perfect blend of excitement and relaxation, designed to leave you refreshed and inspired.",
    "category": "Nature",
    "destination": "Rome, Italy",
    "price": 366,
    "rating": 4.3,
    "imageUrl": "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "exp_018",
    "title": "Secret Market Visit",
    "description": "A perfect blend of excitement and relaxation, designed to leave you refreshed and inspired.",
    "category": "Food",
    "destination": "Cape Town, South Africa",
    "price": 203,
    "rating": 4.1,
    "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "exp_019",
    "title": "Guided Cooking Class",
    "description": "Discover the hidden gems of the city with a local expert. Unforgettable memories await.",
    "category": "Food",
    "destination": "Bali, Indonesia",
    "price": 382,
    "rating": 4.4,
    "imageUrl": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "exp_020",
    "title": "Traditional Cooking Class",
    "description": "A perfect blend of excitement and relaxation, designed to leave you refreshed and inspired.",
    "category": "Food",
    "destination": "Kyoto, Japan",
    "price": 74,
    "rating": 4.3,
    "imageUrl": "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "exp_021",
    "title": "Traditional Yoga Session",
    "description": "Taste the finest local ingredients and learn the secrets of traditional cuisine.",
    "category": "Wellness",
    "destination": "Kyoto, Japan",
    "price": 208,
    "rating": 4,
    "imageUrl": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "exp_022",
    "title": "Exclusive Sailing",
    "description": "Discover the hidden gems of the city with a local expert. Unforgettable memories await.",
    "category": "Adventure",
    "destination": "Reykjavik, Iceland",
    "price": 263,
    "rating": 4.7,
    "imageUrl": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "exp_023",
    "title": "Private Camping",
    "description": "Immerse yourself in the local culture and traditions on this unique and authentic experience.",
    "category": "Nature",
    "destination": "Bali, Indonesia",
    "price": 158,
    "rating": 4.7,
    "imageUrl": "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "exp_024",
    "title": "Ultimate Yoga Session",
    "description": "Taste the finest local ingredients and learn the secrets of traditional cuisine.",
    "category": "Wellness",
    "destination": "Paris, France",
    "price": 330,
    "rating": 4.1,
    "imageUrl": "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "exp_025",
    "title": "Traditional Camping",
    "description": "Taste the finest local ingredients and learn the secrets of traditional cuisine.",
    "category": "Nature",
    "destination": "Barcelona, Spain",
    "price": 339,
    "rating": 4.7,
    "imageUrl": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "exp_026",
    "title": "Amazing Cooking Class",
    "description": "Taste the finest local ingredients and learn the secrets of traditional cuisine.",
    "category": "Food",
    "destination": "Bangkok, Thailand",
    "price": 166,
    "rating": 4.3,
    "imageUrl": "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "exp_027",
    "title": "Exclusive Hot Springs",
    "description": "Taste the finest local ingredients and learn the secrets of traditional cuisine.",
    "category": "Wellness",
    "destination": "Rome, Italy",
    "price": 348,
    "rating": 4.2,
    "imageUrl": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "exp_028",
    "title": "Private Trek",
    "description": "Immerse yourself in the local culture and traditions on this unique and authentic experience.",
    "category": "Adventure",
    "destination": "Rome, Italy",
    "price": 94,
    "rating": 4.1,
    "imageUrl": "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "exp_029",
    "title": "Amazing Hot Springs",
    "description": "Discover the hidden gems of the city with a local expert. Unforgettable memories await.",
    "category": "Wellness",
    "destination": "Cape Town, South Africa",
    "price": 265,
    "rating": 4.2,
    "imageUrl": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "exp_030",
    "title": "Private Street Food Tour",
    "description": "A perfect blend of excitement and relaxation, designed to leave you refreshed and inspired.",
    "category": "Food",
    "destination": "Bali, Indonesia",
    "price": 122,
    "rating": 4.1,
    "imageUrl": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "exp_031",
    "title": "Private Rafting",
    "description": "Taste the finest local ingredients and learn the secrets of traditional cuisine.",
    "category": "Adventure",
    "destination": "Bangkok, Thailand",
    "price": 163,
    "rating": 4.7,
    "imageUrl": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "exp_032",
    "title": "Hidden Experience",
    "description": "Explore breathtaking landscapes and reconnect with nature in this exclusive tour.",
    "category": "Culture",
    "destination": "Cape Town, South Africa",
    "price": 238,
    "rating": 4.6,
    "imageUrl": "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "exp_033",
    "title": "Exclusive Climb",
    "description": "Immerse yourself in the local culture and traditions on this unique and authentic experience.",
    "category": "Adventure",
    "destination": "Reykjavik, Iceland",
    "price": 331,
    "rating": 4.3,
    "imageUrl": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "exp_034",
    "title": "Hidden Street Food Tour",
    "description": "Explore breathtaking landscapes and reconnect with nature in this exclusive tour.",
    "category": "Food",
    "destination": "Paris, France",
    "price": 368,
    "rating": 4.8,
    "imageUrl": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "exp_035",
    "title": "Guided Workshop",
    "description": "A perfect blend of excitement and relaxation, designed to leave you refreshed and inspired.",
    "category": "Culture",
    "destination": "Split, Croatia",
    "price": 144,
    "rating": 4.2,
    "imageUrl": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "exp_036",
    "title": "Private Camping",
    "description": "Taste the finest local ingredients and learn the secrets of traditional cuisine.",
    "category": "Nature",
    "destination": "Split, Croatia",
    "price": 56,
    "rating": 4.8,
    "imageUrl": "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "exp_037",
    "title": "Exclusive Rafting",
    "description": "A perfect blend of excitement and relaxation, designed to leave you refreshed and inspired.",
    "category": "Adventure",
    "destination": "Cape Town, South Africa",
    "price": 156,
    "rating": 4.5,
    "imageUrl": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "exp_038",
    "title": "Traditional Retreat",
    "description": "A perfect blend of excitement and relaxation, designed to leave you refreshed and inspired.",
    "category": "Wellness",
    "destination": "Rome, Italy",
    "price": 199,
    "rating": 4.9,
    "imageUrl": "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "exp_039",
    "title": "Hidden Experience",
    "description": "A perfect blend of excitement and relaxation, designed to leave you refreshed and inspired.",
    "category": "Culture",
    "destination": "Bali, Indonesia",
    "price": 314,
    "rating": 4.4,
    "imageUrl": "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "exp_040",
    "title": "Ultimate Sailing",
    "description": "Explore breathtaking landscapes and reconnect with nature in this exclusive tour.",
    "category": "Adventure",
    "destination": "Cusco, Peru",
    "price": 69,
    "rating": 4.2,
    "imageUrl": "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "exp_041",
    "title": "Guided Climb",
    "description": "A perfect blend of excitement and relaxation, designed to leave you refreshed and inspired.",
    "category": "Adventure",
    "destination": "Cusco, Peru",
    "price": 128,
    "rating": 4.9,
    "imageUrl": "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "exp_042",
    "title": "Traditional Trek",
    "description": "A perfect blend of excitement and relaxation, designed to leave you refreshed and inspired.",
    "category": "Adventure",
    "destination": "Paris, France",
    "price": 157,
    "rating": 4.8,
    "imageUrl": "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "exp_043",
    "title": "Ultimate Climb",
    "description": "Discover the hidden gems of the city with a local expert. Unforgettable memories await.",
    "category": "Adventure",
    "destination": "Marrakech, Morocco",
    "price": 369,
    "rating": 4.5,
    "imageUrl": "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "exp_044",
    "title": "Secret Expedition",
    "description": "A perfect blend of excitement and relaxation, designed to leave you refreshed and inspired.",
    "category": "Adventure",
    "destination": "Barcelona, Spain",
    "price": 115,
    "rating": 5,
    "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "exp_045",
    "title": "Authentic Snorkeling",
    "description": "Explore breathtaking landscapes and reconnect with nature in this exclusive tour.",
    "category": "Nature",
    "destination": "Bali, Indonesia",
    "price": 122,
    "rating": 4.9,
    "imageUrl": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "exp_046",
    "title": "Authentic Cooking Class",
    "description": "Immerse yourself in the local culture and traditions on this unique and authentic experience.",
    "category": "Food",
    "destination": "Marrakech, Morocco",
    "price": 241,
    "rating": 5,
    "imageUrl": "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "exp_047",
    "title": "Hidden Walk",
    "description": "Discover the hidden gems of the city with a local expert. Unforgettable memories await.",
    "category": "Culture",
    "destination": "New York, USA",
    "price": 88,
    "rating": 4.1,
    "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "exp_048",
    "title": "Exclusive Walk",
    "description": "Explore breathtaking landscapes and reconnect with nature in this exclusive tour.",
    "category": "Culture",
    "destination": "Bali, Indonesia",
    "price": 163,
    "rating": 4,
    "imageUrl": "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "exp_049",
    "title": "Amazing Spa Day",
    "description": "Taste the finest local ingredients and learn the secrets of traditional cuisine.",
    "category": "Wellness",
    "destination": "Marrakech, Morocco",
    "price": 171,
    "rating": 4.2,
    "imageUrl": "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "exp_050",
    "title": "Traditional Rafting",
    "description": "A perfect blend of excitement and relaxation, designed to leave you refreshed and inspired.",
    "category": "Adventure",
    "destination": "Marrakech, Morocco",
    "price": 358,
    "rating": 4.2,
    "imageUrl": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "exp_051",
    "title": "Ultimate Eco Walk",
    "description": "Discover the hidden gems of the city with a local expert. Unforgettable memories await.",
    "category": "Nature",
    "destination": "Marrakech, Morocco",
    "price": 303,
    "rating": 4.1,
    "imageUrl": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "exp_052",
    "title": "Guided Trek",
    "description": "A perfect blend of excitement and relaxation, designed to leave you refreshed and inspired.",
    "category": "Adventure",
    "destination": "Bangkok, Thailand",
    "price": 421,
    "rating": 4.3,
    "imageUrl": "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "exp_053",
    "title": "Amazing Wine Tour",
    "description": "A perfect blend of excitement and relaxation, designed to leave you refreshed and inspired.",
    "category": "Food",
    "destination": "Marrakech, Morocco",
    "price": 265,
    "rating": 4.4,
    "imageUrl": "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "exp_054",
    "title": "Amazing Retreat",
    "description": "Discover the hidden gems of the city with a local expert. Unforgettable memories await.",
    "category": "Wellness",
    "destination": "Reykjavik, Iceland",
    "price": 92,
    "rating": 4.1,
    "imageUrl": "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "exp_055",
    "title": "Traditional Hike",
    "description": "Immerse yourself in the local culture and traditions on this unique and authentic experience.",
    "category": "Nature",
    "destination": "Bali, Indonesia",
    "price": 247,
    "rating": 4.4,
    "imageUrl": "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "exp_056",
    "title": "Private Walk",
    "description": "Immerse yourself in the local culture and traditions on this unique and authentic experience.",
    "category": "Culture",
    "destination": "Bangkok, Thailand",
    "price": 151,
    "rating": 4.5,
    "imageUrl": "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "exp_057",
    "title": "Private Sailing",
    "description": "Taste the finest local ingredients and learn the secrets of traditional cuisine.",
    "category": "Adventure",
    "destination": "Paris, France",
    "price": 138,
    "rating": 4.2,
    "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "exp_058",
    "title": "Ultimate Spa Day",
    "description": "A perfect blend of excitement and relaxation, designed to leave you refreshed and inspired.",
    "category": "Wellness",
    "destination": "Bali, Indonesia",
    "price": 66,
    "rating": 4.8,
    "imageUrl": "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "exp_059",
    "title": "Secret Sailing",
    "description": "Taste the finest local ingredients and learn the secrets of traditional cuisine.",
    "category": "Adventure",
    "destination": "Cusco, Peru",
    "price": 73,
    "rating": 4.2,
    "imageUrl": "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "exp_060",
    "title": "Ultimate Snorkeling",
    "description": "Immerse yourself in the local culture and traditions on this unique and authentic experience.",
    "category": "Nature",
    "destination": "Bali, Indonesia",
    "price": 286,
    "rating": 4.8,
    "imageUrl": "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "exp_061",
    "title": "Hidden Tasting",
    "description": "A perfect blend of excitement and relaxation, designed to leave you refreshed and inspired.",
    "category": "Food",
    "destination": "Cape Town, South Africa",
    "price": 90,
    "rating": 4,
    "imageUrl": "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "exp_062",
    "title": "Secret Meditation",
    "description": "Discover the hidden gems of the city with a local expert. Unforgettable memories await.",
    "category": "Wellness",
    "destination": "Paris, France",
    "price": 235,
    "rating": 4.6,
    "imageUrl": "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "exp_063",
    "title": "Private Walk",
    "description": "Immerse yourself in the local culture and traditions on this unique and authentic experience.",
    "category": "Culture",
    "destination": "Rome, Italy",
    "price": 281,
    "rating": 4.8,
    "imageUrl": "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "exp_064",
    "title": "Private Retreat",
    "description": "A perfect blend of excitement and relaxation, designed to leave you refreshed and inspired.",
    "category": "Wellness",
    "destination": "Barcelona, Spain",
    "price": 90,
    "rating": 4.6,
    "imageUrl": "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "exp_065",
    "title": "Secret Climb",
    "description": "Explore breathtaking landscapes and reconnect with nature in this exclusive tour.",
    "category": "Adventure",
    "destination": "Cusco, Peru",
    "price": 394,
    "rating": 4.2,
    "imageUrl": "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "exp_066",
    "title": "Secret Tour",
    "description": "Immerse yourself in the local culture and traditions on this unique and authentic experience.",
    "category": "Culture",
    "destination": "Bali, Indonesia",
    "price": 93,
    "rating": 4.7,
    "imageUrl": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "exp_067",
    "title": "Guided Climb",
    "description": "Immerse yourself in the local culture and traditions on this unique and authentic experience.",
    "category": "Adventure",
    "destination": "New York, USA",
    "price": 231,
    "rating": 4.2,
    "imageUrl": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "exp_068",
    "title": "Hidden Wildlife Tour",
    "description": "Explore breathtaking landscapes and reconnect with nature in this exclusive tour.",
    "category": "Nature",
    "destination": "Kyoto, Japan",
    "price": 281,
    "rating": 4.9,
    "imageUrl": "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "exp_069",
    "title": "Ultimate Retreat",
    "description": "A perfect blend of excitement and relaxation, designed to leave you refreshed and inspired.",
    "category": "Wellness",
    "destination": "Cape Town, South Africa",
    "price": 384,
    "rating": 4,
    "imageUrl": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "exp_070",
    "title": "Private Wildlife Tour",
    "description": "Taste the finest local ingredients and learn the secrets of traditional cuisine.",
    "category": "Nature",
    "destination": "Kyoto, Japan",
    "price": 282,
    "rating": 4.1,
    "imageUrl": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "exp_071",
    "title": "Secret Retreat",
    "description": "A perfect blend of excitement and relaxation, designed to leave you refreshed and inspired.",
    "category": "Wellness",
    "destination": "Bangkok, Thailand",
    "price": 222,
    "rating": 4,
    "imageUrl": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "exp_072",
    "title": "Exclusive Retreat",
    "description": "Immerse yourself in the local culture and traditions on this unique and authentic experience.",
    "category": "Wellness",
    "destination": "Kyoto, Japan",
    "price": 191,
    "rating": 4.6,
    "imageUrl": "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "exp_073",
    "title": "Authentic Market Visit",
    "description": "Discover the hidden gems of the city with a local expert. Unforgettable memories await.",
    "category": "Food",
    "destination": "Cusco, Peru",
    "price": 229,
    "rating": 4.5,
    "imageUrl": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "exp_074",
    "title": "Authentic Camping",
    "description": "Explore breathtaking landscapes and reconnect with nature in this exclusive tour.",
    "category": "Nature",
    "destination": "Bali, Indonesia",
    "price": 173,
    "rating": 4.1,
    "imageUrl": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "exp_075",
    "title": "Secret Hike",
    "description": "A perfect blend of excitement and relaxation, designed to leave you refreshed and inspired.",
    "category": "Nature",
    "destination": "New York, USA",
    "price": 379,
    "rating": 4.2,
    "imageUrl": "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "exp_076",
    "title": "Ultimate Wildlife Tour",
    "description": "Discover the hidden gems of the city with a local expert. Unforgettable memories await.",
    "category": "Nature",
    "destination": "Split, Croatia",
    "price": 82,
    "rating": 4.3,
    "imageUrl": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "exp_077",
    "title": "Ultimate Spa Day",
    "description": "A perfect blend of excitement and relaxation, designed to leave you refreshed and inspired.",
    "category": "Wellness",
    "destination": "Split, Croatia",
    "price": 444,
    "rating": 4.9,
    "imageUrl": "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "exp_078",
    "title": "Private Rafting",
    "description": "Taste the finest local ingredients and learn the secrets of traditional cuisine.",
    "category": "Adventure",
    "destination": "Barcelona, Spain",
    "price": 241,
    "rating": 4.2,
    "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "exp_079",
    "title": "Hidden Eco Walk",
    "description": "Discover the hidden gems of the city with a local expert. Unforgettable memories await.",
    "category": "Nature",
    "destination": "Bali, Indonesia",
    "price": 146,
    "rating": 4.1,
    "imageUrl": "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "exp_080",
    "title": "Ultimate Safari",
    "description": "Discover the hidden gems of the city with a local expert. Unforgettable memories await.",
    "category": "Adventure",
    "destination": "Rome, Italy",
    "price": 52,
    "rating": 4.1,
    "imageUrl": "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "exp_081",
    "title": "Hidden Experience",
    "description": "Explore breathtaking landscapes and reconnect with nature in this exclusive tour.",
    "category": "Culture",
    "destination": "Reykjavik, Iceland",
    "price": 270,
    "rating": 4.5,
    "imageUrl": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "exp_082",
    "title": "Secret Tour",
    "description": "A perfect blend of excitement and relaxation, designed to leave you refreshed and inspired.",
    "category": "Culture",
    "destination": "Bangkok, Thailand",
    "price": 439,
    "rating": 4.7,
    "imageUrl": "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "exp_083",
    "title": "Hidden Wine Tour",
    "description": "Taste the finest local ingredients and learn the secrets of traditional cuisine.",
    "category": "Food",
    "destination": "Kyoto, Japan",
    "price": 432,
    "rating": 4.4,
    "imageUrl": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "exp_084",
    "title": "Traditional Workshop",
    "description": "Taste the finest local ingredients and learn the secrets of traditional cuisine.",
    "category": "Culture",
    "destination": "Cusco, Peru",
    "price": 238,
    "rating": 4.3,
    "imageUrl": "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "exp_085",
    "title": "Hidden Wine Tour",
    "description": "Explore breathtaking landscapes and reconnect with nature in this exclusive tour.",
    "category": "Food",
    "destination": "Marrakech, Morocco",
    "price": 312,
    "rating": 4.1,
    "imageUrl": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "exp_086",
    "title": "Exclusive Hot Springs",
    "description": "Discover the hidden gems of the city with a local expert. Unforgettable memories await.",
    "category": "Wellness",
    "destination": "Barcelona, Spain",
    "price": 106,
    "rating": 4.3,
    "imageUrl": "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "exp_087",
    "title": "Authentic Hike",
    "description": "Taste the finest local ingredients and learn the secrets of traditional cuisine.",
    "category": "Nature",
    "destination": "Reykjavik, Iceland",
    "price": 431,
    "rating": 4.8,
    "imageUrl": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "exp_088",
    "title": "Exclusive Experience",
    "description": "Discover the hidden gems of the city with a local expert. Unforgettable memories await.",
    "category": "Culture",
    "destination": "Kyoto, Japan",
    "price": 296,
    "rating": 4.1,
    "imageUrl": "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "exp_089",
    "title": "Amazing Camping",
    "description": "A perfect blend of excitement and relaxation, designed to leave you refreshed and inspired.",
    "category": "Nature",
    "destination": "Paris, France",
    "price": 123,
    "rating": 4.3,
    "imageUrl": "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "exp_090",
    "title": "Private Safari",
    "description": "Immerse yourself in the local culture and traditions on this unique and authentic experience.",
    "category": "Adventure",
    "destination": "Paris, France",
    "price": 448,
    "rating": 4.5,
    "imageUrl": "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "exp_091",
    "title": "Guided Visit",
    "description": "Explore breathtaking landscapes and reconnect with nature in this exclusive tour.",
    "category": "Culture",
    "destination": "Split, Croatia",
    "price": 358,
    "rating": 4.5,
    "imageUrl": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "exp_092",
    "title": "Hidden Camping",
    "description": "Taste the finest local ingredients and learn the secrets of traditional cuisine.",
    "category": "Nature",
    "destination": "Cape Town, South Africa",
    "price": 163,
    "rating": 4.7,
    "imageUrl": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "exp_093",
    "title": "Authentic Hot Springs",
    "description": "Immerse yourself in the local culture and traditions on this unique and authentic experience.",
    "category": "Wellness",
    "destination": "Cape Town, South Africa",
    "price": 100,
    "rating": 4.8,
    "imageUrl": "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "exp_094",
    "title": "Authentic Yoga Session",
    "description": "Immerse yourself in the local culture and traditions on this unique and authentic experience.",
    "category": "Wellness",
    "destination": "Rome, Italy",
    "price": 325,
    "rating": 4.1,
    "imageUrl": "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "exp_095",
    "title": "Amazing Camping",
    "description": "Immerse yourself in the local culture and traditions on this unique and authentic experience.",
    "category": "Nature",
    "destination": "Split, Croatia",
    "price": 270,
    "rating": 4.7,
    "imageUrl": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "exp_096",
    "title": "Secret Rafting",
    "description": "Discover the hidden gems of the city with a local expert. Unforgettable memories await.",
    "category": "Adventure",
    "destination": "Kyoto, Japan",
    "price": 317,
    "rating": 4.7,
    "imageUrl": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "exp_097",
    "title": "Amazing Market Visit",
    "description": "Explore breathtaking landscapes and reconnect with nature in this exclusive tour.",
    "category": "Food",
    "destination": "Marrakech, Morocco",
    "price": 429,
    "rating": 4.9,
    "imageUrl": "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "exp_098",
    "title": "Traditional Safari",
    "description": "Discover the hidden gems of the city with a local expert. Unforgettable memories await.",
    "category": "Adventure",
    "destination": "Bali, Indonesia",
    "price": 331,
    "rating": 4.4,
    "imageUrl": "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "exp_099",
    "title": "Secret Climb",
    "description": "Immerse yourself in the local culture and traditions on this unique and authentic experience.",
    "category": "Adventure",
    "destination": "Rome, Italy",
    "price": 165,
    "rating": 4.5,
    "imageUrl": "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "exp_100",
    "title": "Hidden Tour",
    "description": "Explore breathtaking landscapes and reconnect with nature in this exclusive tour.",
    "category": "Culture",
    "destination": "Kyoto, Japan",
    "price": 429,
    "rating": 4.9,
    "imageUrl": "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=800"
  }
];
