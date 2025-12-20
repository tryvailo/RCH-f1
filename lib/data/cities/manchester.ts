import type { CityConfig } from "../city-config"

export const manchesterConfig: CityConfig = {
  slug: "manchester",
  name: "Manchester",
  available: true,
  comingSoon: false,
  stats: {
    totalHomes: 312,
    averageWeeklyCost: 1100,
    averageCQCRating: 4.1,
    marketGrowth: "+15% YoY",
    waitingListAvg: "4-8 weeks",
  },
  pricing: {
    min: 850,
    max: 1700,
    average: 1100,
    description: "Manchester care prices range from £850 in affordable areas to £1,700 for premium nursing care in Didsbury",
  },
  neighbourhoods: [
    {
      name: "Didsbury",
      description: "Premium neighbourhoods with leafy suburbs and high-quality nursing facilities",
      averagePrice: 1320,
      homesCount: 45,
      rating: 4.3,
      highlights: ["Leafy suburbs", "Excellent transport", "Premium nursing"],
    },
    {
      name: "Chorlton",
      description: "Strong community atmosphere with a variety of residential care options",
      averagePrice: 1280,
      homesCount: 38,
      rating: 4.2,
      highlights: ["Village feel", "Strong community", "Boutique homes"],
    },
    {
      name: "Sale",
      description: "Top-rated care homes in a family-friendly suburb",
      averagePrice: 1250,
      homesCount: 42,
      rating: 4.4,
      highlights: ["Top-rated (4.4/5)", "Family-oriented", "Modern care"],
    },
    {
      name: "Altrincham",
      description: "Market town with high-end care and excellent local amenities",
      averagePrice: 1380,
      homesCount: 35,
      rating: 4.3,
      highlights: ["Market town charm", "Premium facilities", "Specialist care"],
    },
    {
      name: "Stockport",
      description: "Diverse range of affordable care homes with good accessibility",
      averagePrice: 1080,
      homesCount: 52,
      rating: 4.1,
      highlights: ["Affordable pricing", "Diverse options", "Large capacity"],
    },
    {
      name: "Prestwich",
      description: "Accessible and budget-friendly care homes with consistent quality",
      averagePrice: 1150,
      homesCount: 28,
      rating: 4.0,
      highlights: ["Good value", "Easy access", "Consistent standards"],
    },
  ],
  testimonials: [
    {
      name: "Patricia Wilson",
      relation: "Daughter",
      area: "Didsbury",
      quote:
        "The Manchester-specific analysis was exactly what we needed. Found a wonderful care home in Didsbury with excellent ratings and saved £780/month vs the initial quote.",
      rating: 5,
      verified: true,
    },
    {
      name: "James Murphy",
      relation: "Son",
      area: "Sale",
      quote:
        "RightCareHome helped us navigate over 300 care homes in Greater Manchester. Their detailed reports highlighted quality issues we would have missed.",
      rating: 5,
      verified: true,
    },
    {
      name: "Amina Khan",
      relation: "Wife",
      area: "Chorlton",
      quote:
        "As Manchester locals, we thought we knew the options. The hidden cost analysis revealed savings of over £14,000 annually at comparable quality homes.",
      rating: 5,
      verified: true,
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
        "The average weekly cost for residential care in Manchester is ~£1,100, ranging from £850 in areas like Stockport to £1,700 in premium locations like Altrincham and Didsbury.",
    },
    {
      question: "Is there a shortage of nursing beds in Manchester?",
      answer:
        "Yes, as of 2023/24, Manchester faces a significant shortage of available nursing beds. Finding high-quality nursing care requires expert local knowledge and planning.",
    },
    {
      question: "Which Manchester areas have the best care homes?",
      answer:
        "Sale, Didsbury, and Altrincham consistently show the highest CQC ratings (4.3-4.4/5). However, excellent care homes exist across all Manchester neighbourhoods at different price points.",
    },
  ],
  hero: {
    title: "312 Care Homes in Manchester",
    subtitle: "Expert 2025 analysis of every care home in Greater Manchester",
    badge: "MANCHESTER SPECIALIST",
    trustedBy: "Trusted by 340+ Manchester families",
  },
  regionalInsights: {
    title: "Manchester Market Analysis 2025",
    items: [
      {
        label: "Extra Care Provision",
        value: "21/1000",
        description: "Nearly double the national average, showcasing a focus on modern care alternatives.",
      },
      {
        label: "CQC Quality",
        value: "89%",
        description: "Manchester leads the North West in care homes rated 'Good' or 'Outstanding'.",
      },
      {
        label: "Nursing Bed Gap",
        value: "Critical",
        description: "High occupancy rates for nursing beds make early planning essential.",
      },
    ],
  },
  metaDescription:
    "Find the perfect care home in Manchester. Expert 2025 analysis of 312 verified care homes across Greater Manchester. Independent, thorough, and unbiased.",
  structuredData: {
    areaServed: "Manchester, Greater Manchester, UK",
    priceRange: "£850-£1700 per week",
  },
}
