import type { CityConfig } from "../city-config"

export const manchesterConfig: CityConfig = {
  slug: "manchester",
  name: "Manchester",
  available: true,
  comingSoon: false,
  stats: {
    totalHomes: 312,
    averageWeeklyCost: 1180,
    averageCQCRating: 4.1,
    marketGrowth: "+15% YoY",
    waitingListAvg: "4-8 weeks",
  },
  pricing: {
    min: 850,
    max: 1700,
    average: 1180,
    description: "Manchester care home market offers diverse options across Greater Manchester",
  },
  neighborhoods: [
    {
      name: "Didsbury",
      careHomesCount: 45,
      averageWeeklyCost: 1320,
      averageRating: 4.3,
      highlight: "Leafy suburbs, excellent transport links",
    },
    {
      name: "Chorlton",
      careHomesCount: 38,
      averageWeeklyCost: 1280,
      averageRating: 4.2,
      highlight: "Village feel, strong community",
    },
    {
      name: "Sale",
      careHomesCount: 42,
      averageWeeklyCost: 1250,
      averageRating: 4.4,
      highlight: "Family-friendly, great facilities",
    },
    {
      name: "Altrincham",
      careHomesCount: 35,
      averageWeeklyCost: 1380,
      averageRating: 4.3,
      highlight: "Premium market town location",
    },
    {
      name: "Prestwich",
      careHomesCount: 28,
      averageWeeklyCost: 1150,
      averageRating: 4.0,
      highlight: "Good value, accessible",
    },
    {
      name: "Stockport",
      careHomesCount: 52,
      averageWeeklyCost: 1080,
      averageRating: 4.1,
      highlight: "Affordable, diverse options",
    },
  ],
  testimonials: [
    {
      name: "Patricia Wilson",
      location: "Didsbury, Manchester",
      rating: 5,
      text: "The Manchester-specific analysis was exactly what we needed. Found a wonderful care home in Didsbury with excellent ratings and reasonable costs.",
      outcome: "Saved £780/month vs initial quote",
    },
    {
      name: "James Murphy",
      location: "Sale, Manchester",
      rating: 5,
      text: "RightCareHome helped us navigate over 300 care homes in Greater Manchester. Their detailed reports highlighted quality issues we would have missed.",
      outcome: "Avoided care home with staffing problems",
    },
    {
      name: "Amina Khan",
      location: "Chorlton, Manchester",
      rating: 5,
      text: "As Manchester locals, we thought we knew the options. The hidden cost analysis revealed savings of over £14,000 annually at comparable quality homes.",
      outcome: "£1,200/month cost reduction achieved",
    },
  ],
  faqs: [
    {
      question: "How many care homes are in Manchester?",
      answer:
        "There are 312 registered care homes across Greater Manchester. Our database covers all CQC-registered facilities in Manchester city centre, Trafford, Stockport, and surrounding boroughs.",
    },
    {
      question: "What's the average cost of a care home in Manchester?",
      answer:
        "The average weekly cost for residential care in Manchester is £1,180, ranging from £850 in areas like Stockport to £1,700 in premium locations like Altrincham and Didsbury.",
    },
    {
      question: "Which Manchester areas have the best care homes?",
      answer:
        "Sale, Didsbury, and Altrincham consistently show the highest CQC ratings (4.3-4.4/5). However, excellent care homes exist across all Manchester neighborhoods at different price points.",
    },
  ],
  hero: {
    title: "312 Care Homes in Manchester",
    subtitle:
      "Expert analysis of every care home across Greater Manchester. Independent, thorough, and unbiased reviews to help you find the perfect fit.",
    badge: "MANCHESTER SPECIALIST",
    trustedBy: "Trusted by 340+ Manchester families",
  },
  metaDescription:
    "Find the perfect care home in Manchester. Expert analysis of 312 verified care homes across Greater Manchester. Independent, thorough, and unbiased.",
  structuredData: {
    areaServed: "Manchester, Greater Manchester, UK",
    priceRange: "£850-£1700 per week",
  },
}
