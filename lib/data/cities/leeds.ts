import type { CityConfig } from "../city-config"

export const leedsConfig: CityConfig = {
    slug: "leeds",
    name: "Leeds",
    available: true,
    stats: {
        totalHomes: 145,
        averageWeeklyCost: 1078,
        averageCQCRating: 4.2,
        marketGrowth: "+27% since 2021",
        waitingListAvg: "3-6 weeks",
    },
    pricing: {
        min: 900,
        max: 1800,
        average: 1078,
        description: "Leeds care costs are competitive for the North, with premium options in areas like Roundhay",
    },
    neighbourhoods: [
        {
            name: "Roundhay",
            description: "Upscale residential area with high-quality nursing and luxury care homes",
            averagePrice: 1350,
            homesCount: 18,
            rating: 4.6,
            highlights: ["Near Roundhay Park", "Luxury facilities", "Specialist nursing"],
        },
        {
            name: "Headingley",
            description: "Vibrant neighbourhood with diverse care options and excellent accessibility",
            averagePrice: 1150,
            homesCount: 22,
            rating: 4.3,
            highlights: ["Strong transport", "Regular activities", "Established homes"],
        },
        {
            name: "Oulton",
            description: "Quiet village setting with high-rated residential care facilities",
            averagePrice: 1100,
            homesCount: 12,
            rating: 4.5,
            highlights: ["Village atmosphere", "Personalised care", "Quiet settings"],
        },
        {
            name: "Armley",
            description: "Accessible care homes with a strong focus on community and value",
            averagePrice: 950,
            homesCount: 15,
            rating: 4.1,
            highlights: ["Budget-friendly", "Community focus", "Close to city centre"],
        },
        {
            name: "Oakwood",
            description: "Well-established care homes in a popular residential suburb",
            averagePrice: 1200,
            homesCount: 14,
            rating: 4.4,
            highlights: ["Popular residential", "High-quality staff", "Strong reputation"],
        },
        {
            name: "Beeston",
            description: "Affordable care options with dedicated local providers",
            averagePrice: 920,
            homesCount: 16,
            rating: 4.0,
            highlights: ["Competitive value", "Local providers", "Good accessibility"],
        },
    ],
    testimonials: [
        {
            name: "Robert Harrison",
            relation: "Son",
            area: "Roundhay",
            quote:
                "Finding a home in Leeds was easier than expected thanks to the detailed neighbourhood analysis. The Roundhay area report helped us find a premium spot for Dad.",
            rating: 5,
            verified: true,
        },
        {
            name: "Linda Smith",
            relation: "Daughter",
            area: "Headingley",
            quote:
                "The cost comparisons for Leeds were eye-opening. We found a great home in Headingley that provides better care than more expensive ones we saw.",
            rating: 5,
            verified: true,
        },
    ],
    faqs: [
        {
            question: "How many care homes are in Leeds?",
            answer:
                "Leeds has approximately 145 registered care homes. Our database includes detailed analysis of CQC ratings and pricing for homes across major areas like Roundhay, Headingley, and Beeston.",
        },
        {
            question: "What is the average cost of a care home in Leeds?",
            answer:
                "The average weekly cost is ~£1,078. While more affordable than London, costs vary by area, with Roundhay averaging £1,350 and Beeston offering value around £920.",
        },
    ],
    hero: {
        title: "Care Homes in Leeds",
        subtitle: "Independent 2025 analysis of 145+ verified homes in Leeds",
        badge: "LEEDS SPECIALIST",
        trustedBy: "Trusted by 210+ Leeds families",
    },
    regionalInsights: {
        title: "Leeds Market Analysis 2025",
        items: [
            {
                label: "Fee Increase",
                value: "+28%",
                description: "Significant rise in regional care fees since 2021 due to inflation and wage uplifts.",
            },
            {
                label: "Market Value",
                value: "£26.2bn",
                description: "The UK elder care market continues to grow, with Leeds being a key hub in the North.",
            },
            {
                label: "Development",
                value: "Roundhay",
                description: "New premium facilities are expanding the high-end market in North Leeds.",
            },
        ],
    },
    metaDescription:
        "Compare 145+ Leeds care homes with expert 2025 analysis. See fair costs, CQC ratings, and local trends across Roundhay, Headingley, and Oakwood.",
    structuredData: {
        areaServed: "Leeds, West Yorkshire, UK",
        priceRange: "£900-£1800 per week",
    },
}
