import type { CityConfig } from "../city-config"

export const liverpoolConfig: CityConfig = {
    slug: "liverpool",
    name: "Liverpool",
    available: true,
    stats: {
        totalHomes: 109,
        averageWeeklyCost: 1100,
        averageCQCRating: 4.1,
        marketGrowth: "Stable Demand",
        waitingListAvg: "2-4 weeks",
    },
    pricing: {
        min: 1050,
        max: 1600,
        average: 1100,
        description: "Liverpool care costs are relatively stable, with nursing homes costing slightly more than residential care",
    },
    neighbourhoods: [
        {
            name: "Old Swan",
            description: "Established residential area with well-regarded nursing and residential homes",
            averagePrice: 1080,
            homesCount: 15,
            rating: 4.2,
            highlights: ["Central accessibility", "Long-standing homes", "Good local services"],
        },
        {
            name: "Wavertree",
            description: "Quiet residential neighbourhood with several high-quality care facilities",
            averagePrice: 1120,
            homesCount: 12,
            rating: 4.3,
            highlights: ["Quiet residential", "High-rated homes", "Modern facilities"],
        },
        {
            name: "Knotty Ash",
            description: "Community-focused area with a variety of residential care options",
            averagePrice: 1090,
            homesCount: 10,
            rating: 4.1,
            highlights: ["Strong community", "Varied care", "Accessible"],
        },
        {
            name: "Woolton",
            description: "Premium residential borough with high-end care facilities",
            averagePrice: 1350,
            homesCount: 8,
            rating: 4.5,
            highlights: ["Premium location", "Luxury care", "Historic setting"],
        },
        {
            name: "Toxteth",
            description: "Central location with diverse care services and affordable options",
            averagePrice: 1050,
            homesCount: 14,
            rating: 4.0,
            highlights: ["City access", "Diverse services", "Budget-friendly"],
        },
    ],
    testimonials: [
        {
            name: "Ann Davies",
            relation: "Wife",
            area: "Old Swan",
            quote:
                "The Liverpool market analysis helped us find a nursing home in Old Swan that perfectly fits our budget and care needs. Highly recommended.",
            rating: 5,
            verified: true,
        },
    ],
    faqs: [
        {
            question: "How many care homes are in Liverpool?",
            answer:
                "There are 109 registered care homes in Liverpool, with 52 specifically providing nursing care. 61% of these homes are rated 'Good' or above by the CQC.",
        },
        {
            question: "What is the average cost of a care home in Liverpool?",
            answer:
                "The average weekly cost in Liverpool is ~£1,100. This is very competitive compared to the national average of £1,298 for residential care.",
        },
    ],
    hero: {
        title: "Care Homes in Liverpool",
        subtitle: "Navigate 109+ verified Liverpool homes with expert 2025 analysis",
        badge: "LIVERPOOL SPECIALIST",
        trustedBy: "Trusted by 180+ Liverpool families",
    },
    regionalInsights: {
        title: "Liverpool Market Analysis 2025",
        items: [
            {
                label: "Quality Rating",
                value: "61%",
                description: "Majority of Liverpool care homes are rated 'Good' or above by the CQC.",
            },
            {
                label: "Cost Stability",
                value: "High",
                description: "Local market focus on stabilising costs against inflation for 2025.",
            },
            {
                label: "Nursing Focus",
                value: "48%",
                description: "Nearly half of Liverpool care homes provide dedicated nursing care services.",
            },
        ],
    },
    metaDescription:
        "Compare 109+ Liverpool care homes with expert 2025 market analysis. See fair costs, CQC ratings, and local trends across Old Swan, Wavertree, and Woolton.",
    structuredData: {
        areaServed: "Liverpool, Merseyside, UK",
        priceRange: "£1050-£1600 per week",
    },
}
