import type { CityConfig } from "../city-config"

export const londonConfig: CityConfig = {
  slug: "london",
  name: "London",
  available: true,
  comingSoon: false,
  stats: {
    totalHomes: 876,
    averageWeeklyCost: 1850,
    averageCQCRating: 4.3,
    marketGrowth: "+8% YoY",
    waitingListAvg: "2-5 weeks",
  },
  pricing: {
    min: 1200,
    max: 3500,
    average: 1850,
    description: "London care homes range from affordable outer boroughs to premium central locations",
  },
  neighborhoods: [
    {
      name: "Kensington & Chelsea",
      description: "Premium central London with world-class facilities",
      averagePrice: 2850,
      homesCount: 45,
      rating: 4.7,
      highlights: ["Prestigious location", "Specialist care", "Excellent amenities"],
    },
    {
      name: "Richmond",
      description: "Leafy riverside borough with peaceful settings",
      averagePrice: 2200,
      homesCount: 62,
      rating: 4.6,
      highlights: ["Park views", "Village atmosphere", "Family-run homes"],
    },
    {
      name: "Hampstead",
      description: "Historic area with charming care facilities",
      averagePrice: 2400,
      homesCount: 38,
      rating: 4.5,
      highlights: ["Garden spaces", "Cultural activities", "Close to Heath"],
    },
    {
      name: "Greenwich",
      description: "Historic borough with modern care options",
      averagePrice: 1650,
      homesCount: 54,
      rating: 4.3,
      highlights: ["River views", "Good transport", "Mixed care levels"],
    },
    {
      name: "Bromley",
      description: "Suburban setting with excellent value",
      averagePrice: 1450,
      homesCount: 78,
      rating: 4.2,
      highlights: ["Green spaces", "Competitive pricing", "Modern facilities"],
    },
    {
      name: "Croydon",
      description: "Affordable care with good standards",
      averagePrice: 1350,
      homesCount: 85,
      rating: 4.1,
      highlights: ["Value for money", "Transport links", "Diverse options"],
    },
  ],
  testimonials: [
    {
      name: "Elizabeth Hartley",
      relation: "Daughter",
      area: "Kensington",
      quote:
        "The London report was invaluable. We discovered that a £3,200/week home had hidden staffing issues. Found a superior option in Richmond for £2,100/week instead.",
      rating: 5,
      verified: true,
    },
    {
      name: "Michael Chen",
      relation: "Son",
      area: "Greenwich",
      quote:
        "Navigating 876 London care homes seemed impossible. RightCareHome's analysis narrowed it to 5 perfect matches near family in Greenwich. Mum settled in within days.",
      rating: 5,
      verified: true,
    },
    {
      name: "Susan Williams",
      relation: "Wife",
      area: "Hampstead",
      quote:
        "The Fair Cost analysis revealed we were being quoted £800/week above market rate. Found exceptional care in Hampstead and saved over £40,000 annually.",
      rating: 5,
      verified: true,
    },
  ],
  faqs: [
    {
      question: "How many care homes are in London?",
      answer:
        "London has 876 registered care homes across all 32 boroughs. Our database includes detailed analysis of CQC ratings, pricing, and hidden risks for homes from central locations like Kensington to outer boroughs like Bromley and Croydon.",
    },
    {
      question: "What is the average cost of a care home in London?",
      answer:
        "The average weekly cost is £1,850, but prices range significantly from £1,200 to £3,500 depending on location and care level. Central areas like Kensington average £2,850/week while outer boroughs like Croydon offer quality care from £1,350/week.",
    },
    {
      question: "Which London areas have the best care homes?",
      answer:
        "Kensington & Chelsea has the highest CQC ratings (4.7/5) with premium facilities. Richmond and Hampstead offer excellent quality in peaceful settings. For value, Bromley and Greenwich provide strong care at more accessible prices.",
    },
    {
      question: "How long does it take to find a care home in London?",
      answer:
        "Quality London homes typically have 2-5 week waiting lists, though premium locations may be longer. Our Free Shortlist provides personalized recommendations within 48 hours, giving you time to visit without rushing.",
    },
    {
      question: "Do you cover all London boroughs?",
      answer:
        "Yes, we analyze care homes across all 32 London boroughs and surrounding areas. Whether you need care in Westminster, Camden, Southwark, or outer boroughs like Havering and Hillingdon, we have comprehensive local data.",
    },
  ],
  hero: {
    title: "876 Care Homes in London",
    subtitle: "Find the right one without the £40,000 mistake",
    badge: "LONDON SPECIALIST",
    trustedBy: "Trusted by 2,150+ London families",
  },
  metaDescription:
    "Compare all 876 London care homes with unbiased analysis. See hidden risks, fair costs, and CQC ratings across Kensington, Richmond, Greenwich & more. Free shortlist in 48hrs.",
  structuredData: {
    areaServed: "London, Greater London, UK",
    priceRange: "£1200-£3500 per week",
  },
}
