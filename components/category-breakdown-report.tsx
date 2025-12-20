"use client"

import type React from "react"

import { Shield, Heart, Users, TrendingUp, Home, Trophy, AlertCircle, CheckCircle2 } from "lucide-react"
import { Card } from "@/components/ui/card"

interface HomeMetrics {
  [key: string]: string | number
}

interface CategoryHome {
  name: string
  score: number
  metrics: HomeMetrics
}

interface CategoryBreakdownReportProps {
  category: string
  icon: "shield" | "heart" | "users" | "trending-up" | "home"
  homes: CategoryHome[]
}

const ICONS = {
  shield: Shield,
  heart: Heart,
  users: Users,
  "trending-up": TrendingUp,
  home: Home,
}

const CATEGORY_DESCRIPTIONS: Record<string, string> = {
  Safety: "Comprehensive safety assessment comparing 5 care homes",
  "Medical Care": "Clinical quality and healthcare service analysis",
  "Staff Quality": "Staff training, experience, and satisfaction metrics",
  "Financial Stability": "Financial health and long-term viability assessment",
  Comfort: "Resident comfort, amenities, and quality of life analysis",
}

const CATEGORY_INSIGHTS: Record<string, string> = {
  Safety:
    "Safety is paramount in care home selection. The leader demonstrates exceptional standards with an Outstanding CQC rating and remarkably low fall incident rate. Their superior staff ratio ensures adequate supervision and rapid response to emergencies. Whilst all homes meet regulatory requirements, the data clearly shows significant variation in safety outcomes that families should carefully consider.",
  "Medical Care":
    "Medical care quality varies significantly between homes. The leader excels in nurse-to-resident ratios and maintains minimal medication errors. Their clinical staff receive regular training and demonstrate strong outcomes in managing chronic conditions. Families should prioritize homes with robust medical oversight and low error rates.",
  "Staff Quality":
    "Staff quality directly impacts resident wellbeing. The top-performing home maintains exceptional staff retention, comprehensive training programmes, and high employee satisfaction scores. Low turnover rates indicate stable relationships between carers and residents, which is crucial for person-centred care delivery.",
  "Financial Stability":
    "Financial stability ensures continuity of care. The leader shows strong financial health with positive Altman Z-Scores, healthy profit margins, and low debt levels. Financially stable homes can invest in staff, facilities, and quality improvements without compromising care standards during economic challenges.",
  Comfort:
    "Comfort and quality of life are essential for resident satisfaction. The leader offers high percentages of private rooms, extensive activity programmes, and superior facilities. These factors contribute significantly to resident happiness and family peace of mind throughout the care journey.",
}

const getScoreColor = (score: number) => {
  if (score >= 9) return "from-[#22c55e] to-[#16a34a]"
  if (score >= 8) return "from-[#84cc16] to-[#65a30d]"
  if (score >= 7) return "from-[#eab308] to-[#ca8a04]"
  if (score >= 6) return "from-[#f97316] to-[#ea580c]"
  return "from-[#ef4444] to-[#dc2626]"
}

const getScoreWidth = (score: number) => `${(score / 10) * 100}%`

export function CategoryBreakdownReport({ category, icon, homes }: CategoryBreakdownReportProps) {
  const IconComponent = ICONS[icon]
  const leader = homes[0]
  const description = CATEGORY_DESCRIPTIONS[category] || "Detailed analysis across key metrics"
  const insight = CATEGORY_INSIGHTS[category] || "Analysis based on comprehensive data assessment."

  const metricKeys = Object.keys(leader.metrics)

  return (
    <div className="min-h-screen bg-[#FDFBF7] py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Category Header */}
        <div className="mb-8 sm:mb-12 md:mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5 mb-4 sm:mb-6">
            <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-3xl bg-gradient-to-br from-[#4F6F52] to-[#3d5741] flex items-center justify-centre shadow-soft-xl">
              <IconComponent className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 text-white" strokeWidth={2.5} />
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#1A231E] font-serif leading-tight">
                {category} Analysis
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-[#1A231E]/70 mt-2 sm:mt-3 font-sans leading-relaxed">
                {description}
              </p>
            </div>
          </div>
        </div>

        {/* Winner Callout Box */}
        <Card className="bg-gradient-to-br from-[#FEF9C3] to-[#FEF08A] border-2 border-[#EAB308] p-6 sm:p-8 md:p-10 mb-8 sm:mb-12 md:mb-16 shadow-soft-xl rounded-3xl">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5">
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-2xl bg-[#EAB308] flex items-center justify-centre shadow-lg flex-shrink-0">
              <Trophy className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 text-white" strokeWidth={2.5} />
            </div>
            <div className="min-w-0">
              <div className="text-sm sm:text-base font-semibold text-[#854D0E] uppercase tracking-wide mb-1 sm:mb-2">
                Category Leader
              </div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A231E] font-serif mb-1 sm:mb-2">
                {leader.name} - {leader.score.toFixed(1)}/10
              </div>
              <p className="text-[#854D0E] text-base sm:text-lg md:text-xl leading-relaxed">
                Exceptional {category.toLowerCase()} standards with outstanding performance across all metrics
              </p>
            </div>
          </div>
        </Card>

        {/* Category Score Comparison Chart */}
        <Card className="bg-white border-2 border-[#E8E5DF] p-6 sm:p-8 md:p-10 mb-8 sm:mb-12 md:mb-16 shadow-soft-lg rounded-3xl">
          <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 md:mb-10">
            <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#4F6F52]" strokeWidth={2.5} />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A231E] font-serif">
              {category} Score Comparison
            </h2>
          </div>

          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            {homes.map((home, index) => (
              <div key={home.name} className="group">
                <div className="flex items-center justify-between mb-2 sm:mb-3 gap-2">
                  <div className="flex items-center gap-2 sm:gap-3 md:gap-4 flex-1 min-w-0">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-xl bg-[#4F6F52]/10 flex items-center justify-centre text-sm sm:text-base font-bold text-[#4F6F52] flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-base sm:text-lg md:text-xl font-semibold text-[#1A231E] font-sans truncate">
                      {home.name}
                    </span>
                  </div>
                  <span className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1A231E] font-serif whitespace-nowrap">
                    {home.score.toFixed(1)}/10
                  </span>
                </div>
                <div className="relative h-10 sm:h-12 bg-[#4F6F52]/5 rounded-xl overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${getScoreColor(home.score)} transition-all duration-1000 ease-out rounded-xl shadow-soft-sm`}
                    style={{ width: getScoreWidth(home.score) }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Key Metrics Table */}
        <Card className="bg-white border-2 border-[#E8E5DF] p-6 sm:p-8 md:p-10 mb-8 sm:mb-12 md:mb-16 shadow-soft-lg rounded-3xl">
          <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 md:mb-10">
            <CheckCircle2 className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#4F6F52]" strokeWidth={2.5} />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A231E] font-serif">
              Key {category} Metrics
            </h2>
          </div>

          <div className="overflow-x-auto -mx-2 sm:mx-0">
            <div className="inline-block min-w-full align-middle">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-[#4F6F52]/20">
                    <th className="text-left py-3 sm:py-4 md:py-5 px-2 sm:px-3 md:px-5 text-base sm:text-lg md:text-xl font-bold text-[#1A231E] font-sans whitespace-nowrap">
                      Care Home
                    </th>
                    {metricKeys.map((key) => (
                      <th
                        key={key}
                        className="text-centre py-3 sm:py-4 md:py-5 px-2 sm:px-3 md:px-5 text-base sm:text-lg md:text-xl font-bold text-[#1A231E] font-sans whitespace-nowrap"
                      >
                        {formatMetricName(key)}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {homes.map((home, index) => (
                    <tr
                      key={home.name}
                      className={`border-b-2 border-[#4F6F52]/10 ${index === 0 ? "bg-[#4F6F52]/5" : "hover:bg-[#4F6F52]/5"} transition-colours`}
                    >
                      <td className="py-3 sm:py-4 md:py-5 px-2 sm:px-3 md:px-5 text-sm sm:text-base md:text-lg font-semibold text-[#1A231E] font-sans whitespace-nowrap">
                        {home.name}
                      </td>
                      {metricKeys.map((key) => (
                        <td key={key} className="text-centre py-3 sm:py-4 md:py-5 px-2 sm:px-3 md:px-5">
                          {formatMetricValue(key, home.metrics[key])}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Card>

        {/* Expert Insight Box */}
        <Card className="bg-gradient-to-br from-[#4F6F52] to-[#3d5741] border-none p-6 sm:p-8 md:p-10 shadow-soft-xl rounded-3xl">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/20 flex items-center justify-centre flex-shrink-0">
              <AlertCircle className="w-7 h-7 sm:w-8 sm:h-8 text-white" strokeWidth={2.5} />
            </div>
            <div className="min-w-0">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4 md:mb-5 font-serif">
                Expert {category} Insight
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-white/95 leading-relaxed font-sans">{insight}</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

function formatMetricName(key: string): string {
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (str) => str.toUpperCase())
    .trim()
}

function formatMetricValue(key: string, value: string | number): React.ReactNode {
  // Special formatting for CQC ratings
  if (key === "cqcRating" && typeof value === "string") {
    return (
      <span
        className={`inline-block px-2 sm:px-3 md:px-4 py-1 sm:py-2 rounded-xl text-xs sm:text-sm md:text-base font-semibold whitespace-nowrap ${
          value === "Outstanding"
            ? "bg-[#22c55e]/20 text-[#15803d]"
            : value === "Good"
              ? "bg-[#84cc16]/20 text-[#3f6212]"
              : "bg-[#f97316]/20 text-[#9a3412]"
        }`}
      >
        {value}
      </span>
    )
  }

  // Regular text display
  return <span className="text-sm sm:text-base md:text-lg font-semibold text-[#1A231E]">{value}</span>
}
