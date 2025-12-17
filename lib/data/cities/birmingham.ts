import type { CityConfig } from "../city-config"

export const birminghamConfig: CityConfig = {
  slug: "birmingham",
  name: "Birmingham",
  available: true,
  stats: {
    totalHomes: 277,
    averageWeeklyCost: 1250,
    averageCQCRating: 4.2,
    marketGrowth: "+12% YoY",
    waitingListAvg: "3-6 weeks",
  },
  pricing: {
    min: 900,
    max: 1800,
    average: 1250,
    description: "Birmingham care home costs vary significantly by area and care level",
  },
  neighborhoods: [
    {
      name: "Edgbaston",
      description: "Premium area with excellent medical facilities",
      averagePrice: 1650,
      homesCount: 23,
      rating: 4.7,
      highlights: ["Near QE Hospital", "Large gardens", "Specialist dementia care"],
    },
    {
      name: "Sutton Coldfield",
      description: "Peaceful suburban setting",
      averagePrice: 1450,
      homesCount: 31,
      rating: 4.5,
      highlights: ["Family-run homes", "Park views", "Good transport links"],
    },
    {
      name: "Moseley",
      description: "Village atmosphere with modern care",
      averagePrice: 1350,
      homesCount: 18,
      rating: 4.4,
      highlights: ["Community feel", "Arts & culture", "Boutique homes"],
    },
    {
      name: "Harborne",
      description: "Vibrant area with diverse care options",
      averagePrice: 1280,
      homesCount: 27,
      rating: 4.3,
      highlights: ["High street nearby", "Mixed care levels", "Regular activities"],
    },
    {
      name: "Kings Heath",
      description: "Affordable quality care",
      averagePrice: 1150,
      homesCount: 34,
      rating: 4.2,
      highlights: ["Value for money", "Experienced staff", "Local amenities"],
    },
    {
      name: "Northfield",
      description: "Budget-friendly with good standards",
      averagePrice: 950,
      homesCount: 42,
      rating: 4.0,
      highlights: ["Competitive pricing", "Modern facilities", "Transport access"],
    },
  ],
  testimonials: [
    {
      name: "Sarah Mitchell",
      relation: "Daughter",
      area: "Edgbaston",
      quote:
        "The Birmingham report showed us red flags in 3 homes we were considering. We chose Oaklands in Edgbaston instead - Mum has been there 18 months and thriving.",
      rating: 5,
      verified: true,
    },
    {
      name: "James Patterson",
      relation: "Son",
      area: "Sutton Coldfield",
      quote:
        "Living in London, I needed help finding care for Dad in Birmingham. The local insights were invaluable - saved us from a £300/week overcharge.",
      rating: 5,
      verified: true,
    },
    {
      name: "Eleanor Hughes",
      relation: "Wife",
      area: "Harborne",
      quote:
        "The Fair Cost analysis revealed we were about to pay £15,000 more than necessary. Found excellent care in Harborne for £1,280/week instead.",
      rating: 5,
      verified: true,
    },
  ],
  faqs: [
    {
      question: "How many care homes are in Birmingham?",
      answer:
        "Birmingham has 277 registered care homes. Our database includes detailed analysis of CQC ratings, pricing, and hidden risks for homes across all areas including Edgbaston, Sutton Coldfield, Moseley, and Harborne.",
    },
    {
      question: "What is the average cost of a care home in Birmingham?",
      answer:
        "The average weekly cost is £1,250, but prices range from £900 to £1,800 depending on location and care level. Edgbaston tends to be premium (£1,650/week) while Northfield offers good value (£950/week). Our Fair Cost analysis ensures you pay market rate, not inflated prices.",
    },
    {
      question: "Which Birmingham areas have the best care homes?",
      answer:
        "Edgbaston has the highest average CQC ratings (4.7/5) with excellent medical facilities nearby. Sutton Coldfield offers peaceful suburban settings with strong family-run homes. Moseley and Harborne provide good quality at mid-range prices. Our neighborhood analysis helps you choose based on your priorities.",
    },
    {
      question: "How long does it take to find a care home in Birmingham?",
      answer:
        "Average waiting lists are 3-6 weeks for quality homes. Our Free Shortlist service provides your personalized recommendations within 48 hours, giving you time to visit and decide without rushing into the wrong home.",
    },
    {
      question: "Do you cover all Birmingham postcodes?",
      answer:
        "Yes, we analyze care homes across all Birmingham areas: B1-B44 postcodes. Whether you need care in central Birmingham, Edgbaston (B15-B17), Sutton Coldfield (B72-B76), or any other area, we have comprehensive local data.",
    },
  ],
  hero: {
    title: "277 Care Homes in Birmingham",
    subtitle: "Find the right one without the £15,000 mistake",
    badge: "BIRMINGHAM SPECIALIST",
    trustedBy: "Trusted by 1,240+ Birmingham families",
  },
  metaDescription:
    "Compare all 277 Birmingham care homes with unbiased analysis. See hidden risks, fair costs, and CQC ratings across Edgbaston, Sutton Coldfield, Moseley & more. Free shortlist in 48hrs.",
  structuredData: {
    areaServed: "Birmingham, West Midlands, UK",
    priceRange: "£900-£1800 per week",
  },
}
