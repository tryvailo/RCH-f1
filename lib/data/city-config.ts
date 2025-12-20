export interface CityStats {
  totalHomes: number
  averageWeeklyCost: number
  averageCQCRating: number
  marketGrowth: string
  waitingListAvg: string
}

export interface PricingRange {
  min: number
  max: number
  average: number
  description: string
}

export interface Neighbourhood {
  name: string
  description: string
  averagePrice: number
  homesCount: number
  rating: number
  highlights: string[]
}

export interface CityTestimonial {
  name: string
  relation: string
  area: string
  quote: string
  rating: number
  verified: boolean
}

export interface CityFAQ {
  question: string
  answer: string
}

export interface CityHeroContent {
  title: string
  subtitle: string
  badge: string
  trustedBy: string
}

export interface CityConfig {
  slug: string
  name: string
  available: boolean
  comingSoon?: boolean
  stats: CityStats
  pricing: PricingRange
  neighbourhoods: Neighbourhood[]
  testimonials: CityTestimonial[]
  faqs: CityFAQ[]
  hero: CityHeroContent
  regionalInsights?: {
    title: string
    items: {
      label: string
      value: string
      description: string
    }[]
  }
  metaDescription: string
  structuredData?: {
    areaServed: string
    priceRange: string
  }
}
