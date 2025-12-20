import type { CityConfig } from "../city-config"

export const londonConfig: CityConfig = {
  slug: "london",
  name: "London",
  available: true,
  comingSoon: false,
  stats: {
    totalHomes: 1191,
    averageWeeklyCost: 1600,
    averageCQCRating: 4.3,
    marketGrowth: "+50% of new builds",
    waitingListAvg: "2-5 weeks",
  },
  pricing: {
    min: 1200,
    max: 3500,
    average: 1600,
    description: "London care costs are the highest in the UK, ranging from £1,200 in outer boroughs to £3,500+ in central locations",
  },
  neighbourhoods: [
    {
      name: "Kensington & Chelsea",
      description: "Premium central London with world-class facilities and high occupancy",
      averagePrice: 2850,
      homesCount: 45,
      rating: 4.7,
      highlights: ["Prestigious location", "High occupancy (93%)", "Luxury amenities"],
    },
    {
      name: "Richmond",
      description: "Leafy riverside borough with peaceful settings and high-quality family homes",
      averagePrice: 2200,
      homesCount: 62,
      rating: 4.6,
      highlights: ["Park views", "Village atmosphere", "Top-rated homes"],
    },
    {
      name: "Hampstead",
      description: "Historic area with charming care facilities and strong cultural focus",
      averagePrice: 2400,
      homesCount: 38,
      rating: 4.5,
      highlights: ["Garden spaces", "Cultural activities", "Near the Heath"],
    },
    {
      name: "Greenwich",
      description: "Historic borough with modern care options and excellent transport links",
      averagePrice: 1650,
      homesCount: 54,
      rating: 4.3,
      highlights: ["River views", "Good transport", "Modern facilities"],
    },
    {
      name: "Bromley",
      description: "Suburban setting offering excellent value and modern care standards",
      averagePrice: 1450,
      homesCount: 78,
      rating: 4.2,
      highlights: ["Green spaces", "Competitive value", "Family-friendly"],
    },
    {
      name: "Croydon",
      description: "Affordable care with good standards and diverse facility options",
      averagePrice: 1350,
      homesCount: 85,
      rating: 4.1,
      highlights: ["Budget-friendly", "Transport hub", "Diverse options"],
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
        "Navigating 1,191 London care homes seemed impossible. RightCareHome's analysis narrowed it to 5 perfect matches near family in Greenwich. Mum settled in within days.",
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
        "London has approximately 1,191 registered care homes across all 32 boroughs. However, London has the fewest beds per 100,000 population aged 65+ in England, leading to very high occupancy rates.",
    },
    {
      question: "What is the average cost of a care home in London?",
      answer:
        "The average weekly cost is ~£1,600, but prices range significantly from £1,200 to £3,500. London is the most expensive region in the UK for care, with central boroughs commanding significant premiums.",
    },
    {
      question: "Why is it so difficult to find a bed in London?",
      answer:
        "London has a persistent occupancy rate of around 93%, significantly higher than the national average. Additionally, there has been a 19% fall in residential places over the last decade, making early planning critical.",
    },
    {
      question: "Which London areas have the best care homes?",
      answer:
        "Kensington & Chelsea has the highest CQC ratings (4.7/5) but also the highest costs. Richmond and Hampstead offer excellent quality in peaceful settings. For better value, Bromley and Greenwich provide strong care at more accessible price points.",
    },
  ],
  hero: {
    title: "1,191 Care Homes in London",
    subtitle: "Expert 2025 analysis of the UK's most competitive care market",
    badge: "LONDON SPECIALIST",
    trustedBy: "Trusted by 2,150+ London families",
  },
  regionalInsights: {
    title: "London Market Analysis 2025",
    items: [
      {
        label: "Market Occupancy",
        value: "93%",
        description: "Consistently high demand makes finding a bed in preferred boroughs challenging.",
      },
      {
        label: "Supply Trend",
        value: "-19%",
        description: "Decrease in residential places over the last 10 years, tightening the market.",
      },
      {
        label: "New Development",
        value: "50%",
        description: "Half of all new UK care home developments are concentrated in London and the South East.",
      },
    ],
  },
  metaDescription:
    "Expert 2025 analysis of all 1,191 London care homes. See hidden risks, fair costs, and CQC ratings across Kensington, Richmond, and Greenwich. Free shortlist.",
  structuredData: {
    areaServed: "London, Greater London, UK",
    priceRange: "£1200-£3500 per week",
  },
}
