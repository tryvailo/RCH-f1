import type { CityConfig } from "../city-config"

export const birminghamConfig: CityConfig = {
  slug: "birmingham",
  name: "Birmingham",
  available: true,
  stats: {
    totalHomes: 177,
    averageWeeklyCost: 975,
    averageCQCRating: 4.2,
    marketGrowth: "+17.6% (65+)",
    waitingListAvg: "4-8 weeks",
  },
  pricing: {
    min: 750,
    max: 2500,
    average: 975,
    description: "Birmingham care costs range from £750 for residential care to £2,500+ for luxury nursing in Edgbaston",
  },
  neighbourhoods: [
    {
      name: "Edgbaston",
      description: "Premium area with luxury nursing and specialist dementia care",
      averagePrice: 1850,
      homesCount: 23,
      rating: 4.7,
      highlights: ["Luxury nursing", "Near QE Hospital", "Specialist dementia"],
    },
    {
      name: "Sutton Coldfield",
      description: "Quiet residential hub with high-quality family-run homes",
      averagePrice: 1450,
      homesCount: 31,
      rating: 4.5,
      highlights: ["Family-run", "Suburban setting", "Good transport"],
    },
    {
      name: "Solihull",
      description: "Excellent mix of residential and dedicated nursing care",
      averagePrice: 1320,
      homesCount: 35,
      rating: 4.2,
      highlights: ["Modern facilities", "Wide care range", "Village centres"],
    },
    {
      name: "Harborne",
      description: "Vibrant neighbourhood with diverse care quality",
      averagePrice: 1280,
      homesCount: 27,
      rating: 4.3,
      highlights: ["Mixed care levels", "High street access", "Active social programmes"],
    },
    {
      name: "Kings Heath",
      description: "Established residential homes with stable pricing",
      averagePrice: 1150,
      homesCount: 34,
      rating: 4.2,
      highlights: ["Competitive value", "Experienced staff", "Community feel"],
    },
    {
      name: "Moseley",
      description: "Affordable options with strong community focus",
      averagePrice: 950,
      homesCount: 18,
      rating: 4.4,
      highlights: ["Village atmosphere", "Budget-friendly", "Arts focus"],
    },
  ],
  testimonials: [
    {
      name: "Margaret Thompson",
      relation: "Daughter",
      area: "Edgbaston",
      quote:
        "Finding a care home for my mother in Birmingham felt overwhelming until I used RightCareHome. We found a wonderful place in Edgbaston that's close to family and saved £890/month.",
      rating: 5,
      verified: true,
    },
    {
      name: "David Patel",
      relation: "Son",
      area: "Sutton Coldfield",
      quote:
        "The Birmingham-specific insights were invaluable. We learned about staffing issues at one highly-rated home and found a better option in Sutton Coldfield with excellent care standards.",
      rating: 5,
      verified: true,
    },
    {
      name: "Jennifer Clarke",
      relation: "Wife",
      area: "Solihull",
      quote:
        "As a Birmingham resident, I thought I knew the local care homes. RightCareHome's analysis revealed cost differences I never would have discovered on my own. Absolutely worth it.",
      rating: 5,
      verified: true,
    },
  ],
  faqs: [
    {
      question: "How many care homes are in Birmingham?",
      answer:
        "Birmingham has 177 registered care homes specifically for older adults (109 residential and 68 nursing). Our database includes detailed analysis of CQC ratings, pricing, and hidden risks for homes across all areas including Edgbaston and Sutton Coldfield.",
    },
    {
      question: "What is the average cost of a care home in Birmingham?",
      answer:
        "The average weekly cost starts from £750 for residential care. Nursing care typically exceeds £1,500, while luxury options in premium areas like Edgbaston can reach £2,500 per week. Our analysis ensures you find the best value for your specific care needs.",
    },
    {
      question: "What is the demand for care homes in Birmingham?",
      answer:
        "The population over 65 in Birmingham is projected to grow by 17.65% (an additional 27,000 people) by 2033. This is leading to increased competition for high-quality nursing beds, while residential demand remains stable.",
    },
    {
      question: "Which Birmingham areas have the best care homes?",
      answer:
        "Edgbaston and Sutton Coldfield are the primary hubs for premium and luxury care, consistently showing high CQC ratings. Other areas like Solihull and Harborne offer excellent mid-range options with strong local reputations.",
    },
  ],
  hero: {
    title: "Expert Analysis of Birmingham Care Homes",
    subtitle: "Navigate 177+ verified homes with local 2025 market data",
    badge: "BIRMINGHAM SPECIALIST",
    trustedBy: "Trusted by 1,240+ Birmingham families",
  },
  regionalInsights: {
    title: "Birmingham Market Analysis 2025",
    items: [
      {
        label: "Ageing Population",
        value: "+17.6%",
        description: "Projected increase in over-65s by 2033, creating high demand for beds.",
      },
      {
        label: "Quality Benchmark",
        value: "70%",
        description: "Share of older adult residential homes rated 'Good' or 'Outstanding'.",
      },
      {
        label: "Vacancy Rate",
        value: "9-10%",
        description: "Average bed availability, with nursing beds being highly competitive.",
      },
    ],
  },
  metaDescription:
    "Expert analysis of 177 Birmingham care homes. Compare costs, quality, and demand trends for 2025 across Edgbaston, Sutton Coldfield, and Solihull. Free independent report.",
  structuredData: {
    areaServed: "Birmingham, West Midlands, UK",
    priceRange: "£750-£2500 per week",
  },
}
