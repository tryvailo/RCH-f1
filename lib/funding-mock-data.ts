/**
 * Mock Data for Funding Results Screen
 * Includes DST domains, disregards, and reference data for £19 product
 */

// ============================================
// 1. DST DOMAIN DATA
// ============================================

export interface DSTDomain {
    id: string
    name: string
    shortName: string
    description: string
    score: number // 0-20 scale
    level: "NO" | "LOW" | "MODERATE" | "HIGH" | "SEVERE" | "PRIORITY"
    colour: string // For visualization
    icon: string // lucide-react icon name
}

export const DST_DOMAINS: DSTDomain[] = [
    {
        id: "breathing",
        name: "Breathing",
        shortName: "Breathing",
        description: "Respiratory function and oxygen support",
        score: 0,
        level: "NO",
        colour: "#4F6F52", // Green
        icon: "Wind",
    },
    {
        id: "nutrition",
        name: "Nutrition & Food/Drink",
        shortName: "Nutrition",
        description: "Eating, drinking, and nutritional intake",
        score: 5,
        level: "LOW",
        colour: "#E8A87C", // Amber
        icon: "Apple",
    },
    {
        id: "continence",
        name: "Continence",
        shortName: "Continence",
        description: "Bowel and urinary continence management",
        score: 5,
        level: "LOW",
        colour: "#E8A87C",
        icon: "Droplets",
    },
    {
        id: "skin",
        name: "Skin (inc. wounds)",
        shortName: "Skin Care",
        description: "Skin integrity, wound care, pressure ulcers",
        score: 0,
        level: "NO",
        colour: "#4F6F52",
        icon: "Bandage",
    },
    {
        id: "mobility",
        name: "Mobility",
        shortName: "Mobility",
        description: "Movement and physical mobility support",
        score: 9,
        level: "HIGH",
        colour: "#D17A6F", // Red
        icon: "Activity",
    },
    {
        id: "communication",
        name: "Communication",
        shortName: "Communication",
        description: "Speech, hearing, and non-verbal communication",
        score: 5,
        level: "LOW",
        colour: "#E8A87C",
        icon: "MessageCircle",
    },
    {
        id: "psychological",
        name: "Psychological & Emotional",
        shortName: "Psychological",
        description: "Mental health, emotional well-being, coping",
        score: 9,
        level: "HIGH",
        colour: "#D17A6F",
        icon: "Brain",
    },
    {
        id: "cognition",
        name: "Cognition",
        shortName: "Cognition",
        description: "Memory, understanding, decision-making (inc. dementia)",
        score: 20,
        level: "SEVERE",
        colour: "#8B0000", // Dark red
        icon: "Lightbulb",
    },
    {
        id: "behaviour",
        name: "Behaviour",
        shortName: "Behaviour",
        description: "Challenging behaviours, agitation, aggression",
        score: 9,
        level: "HIGH",
        colour: "#D17A6F",
        icon: "AlertTriangle",
    },
    {
        id: "drug_therapies",
        name: "Drug Therapies & Medication",
        shortName: "Medication",
        description: "Complex medication management and therapies",
        score: 5,
        level: "LOW",
        colour: "#E8A87C",
        icon: "Pill",
    },
    {
        id: "altered_states",
        name: "Altered States of Consciousness",
        shortName: "Consciousness",
        description: "Seizures, coma, unconsciousness management",
        score: 0,
        level: "NO",
        colour: "#4F6F52",
        icon: "Eye",
    },
    {
        id: "other",
        name: "Other Significant Care Needs",
        shortName: "Other Needs",
        description: "Any other significant health/care requirements",
        score: 0,
        level: "NO",
        colour: "#4F6F52",
        icon: "MoreHorizontal",
    },
]

// ============================================
// 2. INCOME DISREGARDS
// ============================================

export interface IncomeDisregard {
    id: string
    name: string
    description: string
    amount?: string
    isApplicable: boolean
    icon: string
}

export const INCOME_DISREGARDS: IncomeDisregard[] = [
    {
        id: "war_pensions",
        name: "War Disablement Pension",
        description: "Pensions paid under any scheme for disablement or war injury",
        isApplicable: true,
        icon: "Shield",
    },
    {
        id: "war_widow",
        name: "War Widow/Widower Pension",
        description: "Pensions for surviving spouses of service personnel",
        isApplicable: false,
        icon: "Heart",
    },
    {
        id: "armed_forces",
        name: "Armed Forces Compensation Scheme",
        description: "Lump sum compensation for armed forces injuries",
        isApplicable: false,
        icon: "Award",
    },
    {
        id: "personal_injury",
        name: "Personal Injury Trust",
        description: "Income from settlements of personal injury claims",
        isApplicable: false,
        icon: "Briefcase",
    },
    {
        id: "charitable",
        name: "Charitable Trust Payment",
        description: "Regular payments from charities to the person",
        isApplicable: false,
        icon: "Heart",
    },
    {
        id: "child_benefit",
        name: "Child Benefit",
        description: "Child benefit received for dependent children",
        isApplicable: false,
        icon: "Baby",
    },
    {
        id: "disability_living_allowance",
        name: "Disability Living Allowance (DLA)",
        description: "Care component, mobility component (fully disregarded)",
        amount: "£102/week",
        isApplicable: true,
        icon: "Accessibility",
    },
    {
        id: "personal_independence",
        name: "Personal Independence Payment (PIP)",
        description: "Daily living component (fully disregarded)",
        amount: "£100-190/week",
        isApplicable: true,
        icon: "Users",
    },
    {
        id: "attendance_allowance",
        name: "Attendance Allowance (AA)",
        description: "Care allowance for over 65s (fully disregarded)",
        amount: "£95-195/week",
        isApplicable: true,
        icon: "Clock",
    },
    {
        id: "constant_attendance",
        name: "Constant Attendance Allowance",
        description: "Allowance paid with industrial injuries benefit",
        isApplicable: false,
        icon: "Hand",
    },
    {
        id: "housing_benefit",
        name: "Housing Benefit/Council Tax Rebate",
        description: "Local Housing Allowance (fully disregarded)",
        isApplicable: false,
        icon: "Home",
    },
    {
        id: "carer_allowance",
        name: "Carer's Allowance",
        description: "Paid to persons caring for disabled people",
        isApplicable: false,
        icon: "Heart",
    },
    {
        id: "mobility_supplements",
        name: "Mobility Supplements",
        description: "War pensions mobility supplements (fully disregarded)",
        isApplicable: false,
        icon: "Navigation",
    },
    {
        id: "foster_allowance",
        name: "Foster Care Allowance",
        description: "Allowance for fostering children",
        isApplicable: false,
        icon: "Users",
    },
    {
        id: "student_grants",
        name: "Student Grants/Loans",
        description: "Educational support for students",
        isApplicable: false,
        icon: "BookOpen",
    },
    {
        id: "maintenance_support",
        name: "Maintenance Payments",
        description: "Child maintenance or spousal support",
        isApplicable: false,
        icon: "DollarSign",
    },
    {
        id: "employment_support",
        name: "Employment Support Allowance",
        description: "Support for those unable to work",
        isApplicable: false,
        icon: "Briefcase",
    },
    {
        id: "income_support",
        name: "Income Support",
        description: "Basic income support payments",
        isApplicable: false,
        icon: "TrendingUp",
    },
    {
        id: "universal_credit",
        name: "Universal Credit",
        description: "Combined benefits system",
        isApplicable: false,
        icon: "CreditCard",
    },
    {
        id: "sure_start",
        name: "Sure Start Maternity Grant",
        description: "One-off payment for new babies",
        isApplicable: false,
        icon: "Baby",
    },
]

// ============================================
// 3. ASSET DISREGARDS
// ============================================

export interface AssetDisregard {
    id: string
    name: string
    description: string
    disregardedAmount?: string
    isApplicable: boolean
    icon: string
}

export const ASSET_DISREGARDS: AssetDisregard[] = [
    {
        id: "main_residence",
        name: "Main Home (12-week Rule)",
        description:
            "Home is disregarded for first 12 weeks if permanent resident. Extended if property sale pending.",
        disregardedAmount: "Full value",
        isApplicable: true,
        icon: "Home",
    },
    {
        id: "qualifying_relative",
        name: "Home with Qualifying Relative",
        description:
            "Home is fully disregarded if occupied by: spouse/partner, relative 60+, disabled relative, child under 18",
        disregardedAmount: "Full value",
        isApplicable: true,
        icon: "Users",
    },
    {
        id: "personal_injury",
        name: "Personal Injury Trust",
        description: "Lump sum from personal injury settlement (fully disregarded)",
        disregardedAmount: "Full value",
        isApplicable: false,
        icon: "Briefcase",
    },
    {
        id: "disability_trust",
        name: "Disability Trust Fund",
        description: "Trusts established for disabled person's benefit",
        disregardedAmount: "Full value",
        isApplicable: false,
        icon: "Shield",
    },
    {
        id: "personal_effects",
        name: "Personal Effects & Household Goods",
        description: "Furniture, clothing, jewellery (reasonable amounts)",
        disregardedAmount: "Full value",
        isApplicable: true,
        icon: "Sofa",
    },
    {
        id: "life_insurance",
        name: "Life Insurance Policies",
        description: "Endowment and whole-life policies (surrender value)",
        disregardedAmount: "Dependent on policy",
        isApplicable: false,
        icon: "Shield",
    },
    {
        id: "car",
        name: "One Car/Motorbike",
        description: "One vehicle used for transport (fully disregarded)",
        disregardedAmount: "Full value",
        isApplicable: false,
        icon: "Car",
    },
    {
        id: "arrears_housing",
        name: "Housing Arrears Compensation",
        description: "Payments for wrongful housing benefit overpayment",
        disregardedAmount: "Full value (12 months)",
        isApplicable: false,
        icon: "AlertTriangle",
    },
    {
        id: "trust_income",
        name: "Trust Income (Certain Trusts)",
        description: "Income from disability/personal injury trusts",
        disregardedAmount: "Full value",
        isApplicable: false,
        icon: "FileText",
    },
    {
        id: "charitable_trust",
        name: "Charitable Trust Payments",
        description: "Capital from registered charities for disabled persons",
        disregardedAmount: "Full value",
        isApplicable: false,
        icon: "Heart",
    },
    {
        id: "business_assets",
        name: "Business Assets",
        description: "Assets in trading or professional business",
        disregardedAmount: "Full value (in use)",
        isApplicable: false,
        icon: "TrendingUp",
    },
    {
        id: "childcare_trust",
        name: "Childcare Trust Funds",
        description: "Money set aside in trust for children",
        disregardedAmount: "Full value",
        isApplicable: false,
        icon: "Baby",
    },
    {
        id: "council_tax_rebate",
        name: "Council Tax Rebate/Refund",
        description: "Refunded council tax (12 months disregard)",
        disregardedAmount: "Full value (12 months)",
        isApplicable: false,
        icon: "Home",
    },
    {
        id: "compensation",
        name: "Ex Gratia Payments",
        description: "One-off compensation from government or authority",
        disregardedAmount: "Full value",
        isApplicable: false,
        icon: "Award",
    },
    {
        id: "wartime_compensation",
        name: "Wartime Compensation Schemes",
        description: "WWII and Holocaust compensation payments",
        disregardedAmount: "Full value",
        isApplicable: false,
        icon: "Shield",
    },
]

// ============================================
// 4. HELPER FUNCTIONS
// ============================================

export function getDomainByLevel(
    level: "NO" | "LOW" | "MODERATE" | "HIGH" | "SEVERE" | "PRIORITY"
) {
    return DST_DOMAINS.filter((d) => d.level === level)
}

export function getTotalDomainScore() {
    return DST_DOMAINS.reduce((sum, d) => sum + d.score, 0)
}

export function getApplicableDisregards() {
    const applicable = {
        income: INCOME_DISREGARDS.filter((d) => d.isApplicable),
        assets: ASSET_DISREGARDS.filter((d) => d.isApplicable),
    }
    return applicable
}

export function calculateTotalDisregardedIncome() {
    // Example: DLA + PIP + AA
    return (102 + 145 + 143) / 7 // Weekly equivalent
}
