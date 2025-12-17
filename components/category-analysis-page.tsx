"use client"

import type React from "react"
import {
  Shield,
  Heart,
  Users,
  TrendingUp,
  Home,
  Trophy,
  CheckCircle2,
  AlertTriangle,
  Info,
  FileText,
  MessageSquare,
  ArrowRight,
  Phone,
} from "lucide-react"
import { Card } from "@/components/ui/card"

interface HomeMetrics {
  [key: string]: string | number
}

interface CategoryHome {
  name: string
  score: number
  metrics: HomeMetrics
}

interface MetricDetail {
  name: string
  value: string | number
  benchmark: string
  status: "excellent" | "good" | "concern"
  explanation: string
}

interface VerificationItem {
  question: string
  why: string
  redFlag: string
}

interface CategoryAnalysisPageProps {
  category: string
  homes: CategoryHome[]
  topHomeMetrics?: MetricDetail[]
  topHomeStrengths?: string[]
  topHomeConcerns?: string[]
  verificationItems?: VerificationItem[]
}

const ICONS: Record<string, React.ElementType> = {
  Safety: Shield,
  "Medical Care": Heart,
  "Staff Quality": Users,
  "Financial Stability": TrendingUp,
  Comfort: Home,
  "Community Reputation": MessageSquare,
}

const CATEGORY_COLORS: Record<string, { primary: string; light: string; gradient: string; hex: string }> = {
  Safety: {
    primary: "var(--category-safety)",
    light: "rgba(59, 130, 246, 0.1)",
    gradient: "from-[#3b82f6] to-[#2563eb]",
    hex: "#3b82f6",
  },
  "Medical Care": {
    primary: "var(--category-medical)",
    light: "rgba(236, 72, 153, 0.1)",
    gradient: "from-[#ec4899] to-[#db2777]",
    hex: "#ec4899",
  },
  "Staff Quality": {
    primary: "var(--category-staff)",
    light: "rgba(139, 92, 246, 0.1)",
    gradient: "from-[#8b5cf6] to-[#7c3aed]",
    hex: "#8b5cf6",
  },
  "Financial Stability": {
    primary: "var(--category-financial)",
    light: "rgba(16, 185, 129, 0.1)",
    gradient: "from-[#10b981] to-[#059669]",
    hex: "#10b981",
  },
  Comfort: {
    primary: "var(--category-comfort)",
    light: "rgba(245, 158, 11, 0.1)",
    gradient: "from-[#f59e0b] to-[#d97706]",
    hex: "#f59e0b",
  },
  "Community Reputation": {
    primary: "var(--category-community)",
    light: "rgba(6, 182, 212, 0.1)",
    gradient: "from-[#06b6d4] to-[#0891b2]",
    hex: "#06b6d4",
  },
}

const CATEGORY_DESCRIPTIONS: Record<string, string> = {
  Safety: "Comprehensive safety assessment comparing 5 care homes",
  "Medical Care": "Clinical quality and healthcare service analysis",
  "Staff Quality": "Staff training, experience, and satisfaction metrics",
  "Financial Stability": "Financial health and long-term viability assessment",
  Comfort: "Resident comfort, amenities, and quality of life analysis",
  "Community Reputation": "Family feedback and community standing",
}

const CATEGORY_INSIGHTS: Record<string, string> = {
  Safety:
    "Safety is paramount in care home selection. The leader demonstrates exceptional standards with an Outstanding CQC rating and remarkably low fall incident rate.",
  "Medical Care":
    "Medical care quality varies significantly between homes. The leader excels in nurse-to-resident ratios and maintains minimal medication errors.",
  "Staff Quality":
    "Staff quality directly impacts resident wellbeing. The top-performing home maintains exceptional staff retention and comprehensive training programmes.",
  "Financial Stability":
    "Financial stability ensures continuity of care. The leader shows strong financial health with positive Altman Z-Scores and healthy profit margins.",
  Comfort:
    "Comfort and quality of life are essential for resident satisfaction. The leader offers high percentages of private rooms and extensive activity programmes.",
  "Community Reputation":
    "Community reputation reflects real family experiences. The leader maintains consistently high ratings across multiple review platforms.",
}

// Default deep dive data
const DEFAULT_METRICS: MetricDetail[] = [
  {
    name: "CQC Overall Rating",
    value: "Outstanding",
    benchmark: "Good or above",
    status: "excellent",
    explanation: "The highest possible CQC rating, achieved by only 4% of care homes nationally.",
  },
  {
    name: "Fall Incidents (per 100 residents/year)",
    value: 2.1,
    benchmark: "< 5.0",
    status: "excellent",
    explanation: "Significantly below the national average of 6.5, indicating excellent fall prevention protocols.",
  },
  {
    name: "Staff-to-Resident Ratio",
    value: "1:4",
    benchmark: "1:6 or better",
    status: "excellent",
    explanation: "Above industry standard, ensuring adequate supervision and personalised attention.",
  },
]

const DEFAULT_STRENGTHS = [
  "Outstanding CQC rating maintained for 3 consecutive inspections",
  "24/7 on-site nursing staff with specialist dementia training",
  "Advanced fall prevention technology including motion sensors",
]

const DEFAULT_CONCERNS = ["No significant concerns identified in this category"]

const DEFAULT_VERIFICATION: VerificationItem[] = [
  {
    question: "Can I see your most recent CQC inspection report?",
    why: "Verifies the rating is current and identifies any areas for improvement.",
    redFlag: "Reluctance to share or outdated reports (>18 months old).",
  },
  {
    question: "What is your staff-to-resident ratio during night shifts?",
    why: "Night staffing is often lower; ensure adequate coverage for emergencies.",
    redFlag: "Ratios worse than 1:8 or vague answers about night coverage.",
  },
]

const CATEGORY_EMOTIONAL_SUBHEADLINES: Record<string, string> = {
  Safety: "Will Mum be safe here?",
  "Medical Care": "Will they manage Mum's health needs properly?",
  "Staff Quality": "Who will be caring for your loved one every day?",
  "Financial Stability": "Will this home still be here in 5 years?",
  Comfort: "Will Mum feel at home here?",
  "Community Reputation": "What do other families really think?",
}

const CATEGORY_NEXT_ACTIONS: Record<string, { action: string; detail: string; cta: string }> = {
  Safety: {
    action: "Book a safety walkthrough",
    detail: "Ask to see fire exits, handrails, and the medication storage room during your visit.",
    cta: "Ring to arrange a visit",
  },
  "Medical Care": {
    action: "Request a care plan meeting",
    detail: "Ask to meet the lead nurse and discuss how they would manage your loved one's specific conditions.",
    cta: "Ring to speak with the care team",
  },
  "Staff Quality": {
    action: "Visit at different times",
    detail: "Pop in during morning, afternoon, and evening to see different staff and observe consistency.",
    cta: "Ring to arrange multiple visits",
  },
  "Financial Stability": {
    action: "Request the fee schedule",
    detail: "Ask for a full breakdown of costs, including any extras, and their policy on annual fee increases.",
    cta: "Ring to request pricing details",
  },
  Comfort: {
    action: "Stay for lunch",
    detail: "Ask if you can join residents for a meal to experience the food quality and dining atmosphere.",
    cta: "Ring to book a lunch visit",
  },
  "Community Reputation": {
    action: "Speak with other families",
    detail: "Ask the home if they can connect you with families of current residents for honest feedback.",
    cta: "Ring to request family references",
  },
}

const getScoreColor = (score: number) => {
  if (score >= 9) return "from-[#22c55e] to-[#16a34a]"
  if (score >= 8) return "from-[#84cc16] to-[#65a30d]"
  if (score >= 7) return "from-[#eab308] to-[#ca8a04]"
  if (score >= 6) return "from-[#f97316] to-[#ea580c]"
  return "from-[#ef4444] to-[#dc2626]"
}

const getScoreLabel = (score: number) => {
  if (score >= 9) return "Excellent"
  if (score >= 8) return "Very Good"
  if (score >= 7) return "Good"
  if (score >= 6) return "Fair"
  return "Needs Review"
}

const getScoreWidth = (score: number) => `${(score / 10) * 100}%`

const getStatusBadge = (status: "excellent" | "good" | "concern") => {
  switch (status) {
    case "excellent":
      return { text: "Excellent", color: "bg-[#22c55e] text-white" }
    case "good":
      return { text: "Good", color: "bg-[#eab308] text-white" }
    case "concern":
      return { text: "Concern", color: "bg-[#ef4444] text-white" }
  }
}

export function CategoryAnalysisPage({
  category,
  homes,
  topHomeMetrics = DEFAULT_METRICS,
  topHomeStrengths = DEFAULT_STRENGTHS,
  topHomeConcerns = DEFAULT_CONCERNS,
  verificationItems = DEFAULT_VERIFICATION,
}: CategoryAnalysisPageProps) {
  const IconComponent = ICONS[category] || Shield
  const safeHomes = homes?.length > 0 ? homes : [{ name: "No data available", score: 0, metrics: {} }]
  const leader = safeHomes[0]
  const description = CATEGORY_DESCRIPTIONS[category] || "Detailed analysis across key metrics"
  const insight = CATEGORY_INSIGHTS[category] || "Analysis based on comprehensive data assessment."
  const emotionalSubheadline = CATEGORY_EMOTIONAL_SUBHEADLINES[category] || "What you need to know"
  const nextAction = CATEGORY_NEXT_ACTIONS[category] || {
    action: "Take the next step",
    detail: "Contact the care home to discuss your needs.",
    cta: "Ring to enquire",
  }

  const colors = CATEGORY_COLORS[category] || CATEGORY_COLORS.Safety

  const formatScore = (score: number | undefined | null): string => {
    if (score === undefined || score === null || isNaN(score)) return "0.0"
    return score.toFixed(1)
  }

  return (
    <div className="min-h-screen bg-[#FDFBF7] section-padding px-4 sm:px-6 print:py-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6 sm:mb-8">
          {/* Category Color Bar - Strong Visual Accent */}
          <div className="h-2 w-full rounded-full mb-6" style={{ backgroundColor: colors.hex }} />

          <div className="flex items-center gap-4 mb-3">
            <div
              className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center shadow-lg print:shadow-none`}
            >
              <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-white" strokeWidth={2.5} />
            </div>
            <div>
              {/* Category Badge */}
              <div
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-white mb-2"
                style={{ backgroundColor: colors.hex }}
              >
                <IconComponent className="w-3 h-3" />
                {category}
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-[#1A231E] font-serif leading-tight">
                {emotionalSubheadline}
              </h1>
              <p className="text-base sm:text-lg text-[#1A231E]/70 font-sans">{description}</p>
            </div>
          </div>
        </div>

        {/* Winner Callout - With category color border */}
        <Card
          className="bg-gradient-to-br from-[#FEF9C3] to-[#FEF08A] card-padding mb-6 shadow-lg rounded-2xl avoid-break print-card"
          style={{ borderWidth: "2px", borderColor: colors.hex }}
        >
          <div className="flex items-center gap-4">
            <div
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center shadow-md flex-shrink-0"
              style={{ backgroundColor: colors.hex }}
            >
              <Trophy className="w-6 h-6 sm:w-7 sm:h-7 text-white" strokeWidth={2.5} />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-xs font-semibold uppercase tracking-wide mb-0.5" style={{ color: colors.hex }}>
                Category Leader
              </div>
              <div className="text-xl sm:text-2xl font-bold text-[#1A231E] font-serif">
                {leader.name} — {formatScore(leader.score)}/10
              </div>
            </div>
          </div>
        </Card>

        {/* Two Column Layout: Scores + Key Finding */}
        <div className="grid grid-cols-1 lg:grid-cols-2 stack-lg mb-6">
          {/* Score Comparison - With category accent */}
          <Card
            className="bg-white card-padding shadow-md rounded-2xl avoid-break print-card"
            style={{ borderWidth: "2px", borderColor: `${colors.hex}30` }}
          >
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-5 h-5" style={{ color: colors.hex }} strokeWidth={2.5} />
              <h2 className="text-xl font-bold text-[#1A231E] font-serif">Score Comparison</h2>
            </div>

            <div className="space-y-3">
              {safeHomes.map((home, index) => (
                <div key={home.name} className="group">
                  <div className="flex items-center justify-between mb-1.5 gap-2">
                    <div className="flex items-center gap-2 flex-1 min-w-0">
                      <div
                        className="w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                        style={{ backgroundColor: colors.hex }}
                      >
                        {index + 1}
                      </div>
                      <span className="text-sm font-semibold text-[#1A231E] truncate">{home.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-[#1A231E] font-serif">{formatScore(home.score)}</span>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                          (home.score ?? 0) >= 8
                            ? "bg-[#22c55e]/15 text-[#15803d]"
                            : (home.score ?? 0) >= 6
                              ? "bg-[#eab308]/15 text-[#854d0e]"
                              : "bg-[#ef4444]/15 text-[#b91c1c]"
                        }`}
                      >
                        {getScoreLabel(home.score ?? 0)}
                      </span>
                    </div>
                  </div>
                  <div className="relative h-6 bg-[#E8E5DF]/50 rounded-lg overflow-hidden print-score-bar">
                    <div
                      className={`h-full bg-gradient-to-r ${getScoreColor(home.score ?? 0)} transition-all duration-700 ease-out rounded-lg`}
                      style={{ width: getScoreWidth(home.score ?? 0) }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Key Finding - Already uses category gradient */}
          <Card
            className={`bg-gradient-to-br ${colors.gradient} border-none card-padding shadow-lg rounded-2xl avoid-break print-card`}
          >
            <div className="flex items-start gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                <Info className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <h2 className="text-xl font-bold text-white font-serif">Key Finding</h2>
            </div>
            <p className="text-base text-white/95 leading-relaxed font-sans mb-4">{insight}</p>

            {/* Quick Strengths */}
            <div className="space-y-2">
              {topHomeStrengths.slice(0, 2).map((strength, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-white/80 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white/90">{strength}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Detailed Metrics for Top Home - With category accent */}
        <Card
          className="bg-white card-padding mb-6 shadow-md rounded-2xl avoid-break print-card"
          style={{ borderWidth: "2px", borderColor: `${colors.hex}30` }}
        >
          <div className="flex items-center gap-2 mb-4">
            <FileText className="w-5 h-5" style={{ color: colors.hex }} strokeWidth={2.5} />
            <h2 className="text-xl font-bold text-[#1A231E] font-serif">{leader.name}: Detailed Metrics</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 stack-sm">
            {topHomeMetrics.map((metric, index) => {
              const badge = getStatusBadge(metric.status)
              return (
                <div
                  key={index}
                  className={`p-4 rounded-xl border ${
                    metric.status === "excellent"
                      ? "border-[#22c55e]/30 bg-[#22c55e]/5"
                      : metric.status === "good"
                        ? "border-[#eab308]/30 bg-[#eab308]/5"
                        : "border-[#ef4444]/30 bg-[#ef4444]/5"
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-sm font-semibold text-[#1A231E] leading-tight">{metric.name}</h3>
                    <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${badge.color} whitespace-nowrap`}>
                      {badge.text}
                    </span>
                  </div>
                  <div className="text-2xl font-bold text-[#1A231E] mb-1">{metric.value}</div>
                  <div className="text-xs text-[#1A231E]/60">Benchmark: {metric.benchmark}</div>
                </div>
              )
            })}
          </div>
        </Card>

        {/* Verification Questions - With category accent */}
        <Card
          className="bg-[#FEF9E7] card-padding mb-6 shadow-md rounded-2xl avoid-break print-card"
          style={{ borderWidth: "2px", borderColor: `${colors.hex}40` }}
        >
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle className="w-5 h-5" style={{ color: colors.hex }} strokeWidth={2.5} />
            <h2 className="text-xl font-bold text-[#1A231E] font-serif">Questions to Ask During Visit</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 stack-md">
            {verificationItems.map((item, index) => (
              <div key={index} className="bg-white/80 rounded-xl p-4 border border-[#E8E5DF]">
                <div className="flex items-start gap-2 mb-2">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0"
                    style={{ backgroundColor: colors.hex }}
                  >
                    {index + 1}
                  </div>
                  <h3 className="text-sm font-bold text-[#1A231E] leading-tight">"{item.question}"</h3>
                </div>
                <div className="ml-8 space-y-1.5">
                  <p className="text-xs text-[#1A231E]/70">
                    <strong>Why:</strong> {item.why}
                  </p>
                  <p className="text-xs text-[#ef4444]/80">
                    <strong>Red flag:</strong> {item.redFlag}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card
          className="card-padding shadow-lg rounded-2xl avoid-break print-card"
          style={{
            backgroundColor: colors.hex,
            border: "none",
          }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                <ArrowRight className="w-6 h-6 text-white" strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white font-serif mb-1">
                  What to Do Next: {nextAction.action}
                </h3>
                <p className="text-sm text-white/90 leading-relaxed">{nextAction.detail}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 sm:flex-shrink-0">
              <div className="flex items-center gap-2 bg-white rounded-xl px-4 py-3 shadow-md">
                <Phone className="w-5 h-5 text-[#1A231E]" strokeWidth={2.5} />
                <div>
                  <div className="text-xs text-[#1A231E]/60 font-medium">{nextAction.cta}</div>
                  <div className="text-base font-bold text-[#1A231E]">0800 123 4567</div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
