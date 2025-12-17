"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Info, Trophy, AlertTriangle, TrendingUp } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface HomeData {
  name: string
  scores: {
    safety: number
    medicalCare: number
    staffQuality: number
    financialStability: number
    comfort: number
    communityReputation: number
  }
  overall: number
}

interface DotMatrixComparisonProps {
  homes?: HomeData[]
  title?: string
  description?: string
}

const DEFAULT_HOMES: HomeData[] = [
  {
    name: "Greenfield Manor",
    scores: {
      safety: 9.5,
      medicalCare: 9.0,
      staffQuality: 9.3,
      financialStability: 8.8,
      comfort: 9.4,
      communityReputation: 9.1,
    },
    overall: 91,
  },
  {
    name: "Oakwood Lodge",
    scores: {
      safety: 8.9,
      medicalCare: 8.5,
      staffQuality: 8.8,
      financialStability: 8.3,
      comfort: 8.9,
      communityReputation: 8.4,
    },
    overall: 86,
  },
  {
    name: "Riverside Care",
    scores: {
      safety: 8.1,
      medicalCare: 7.8,
      staffQuality: 7.6,
      financialStability: 7.5,
      comfort: 7.9,
      communityReputation: 7.2,
    },
    overall: 77,
  },
  {
    name: "Meadowbrook House",
    scores: {
      safety: 7.0,
      medicalCare: 7.2,
      staffQuality: 7.1,
      financialStability: 7.8,
      comfort: 7.5,
      communityReputation: 6.8,
    },
    overall: 72,
  },
  {
    name: "Sunnydale Residence",
    scores: {
      safety: 6.5,
      medicalCare: 6.8,
      staffQuality: 6.4,
      financialStability: 6.2,
      comfort: 7.1,
      communityReputation: 5.4,
    },
    overall: 64,
  },
]

const CATEGORIES = [
  { key: "safety", label: "Safety", description: "CQC compliance, incident history" },
  { key: "medicalCare", label: "Medical", description: "Nursing capability, specialist care" },
  { key: "staffQuality", label: "Staff", description: "Training, retention, ratios" },
  { key: "financialStability", label: "Financial", description: "Business health, pricing fairness" },
  { key: "comfort", label: "Comfort", description: "Facilities, environment, amenities" },
  { key: "communityReputation", label: "Reputation", description: "Reviews, family feedback" },
]

function NumericScore({ score }: { score: number }) {
  const getColor = (score: number): string => {
    if (score >= 8) return "#22c55e" // green
    if (score >= 6) return "#f59e0b" // amber
    return "#ef4444" // red
  }

  const getBgColor = (score: number): string => {
    if (score >= 8) return "rgba(34, 197, 94, 0.1)"
    if (score >= 6) return "rgba(245, 158, 11, 0.1)"
    return "rgba(239, 68, 68, 0.1)"
  }

  const getLabel = (score: number): string => {
    if (score >= 8) return "Excellent"
    if (score >= 6) return "Good"
    return "Fair"
  }

  return (
    <div
      className="px-3 py-2 rounded-lg font-bold text-base md:text-lg min-w-[64px] min-h-[44px] text-center flex flex-col items-center justify-center"
      style={{
        backgroundColor: getBgColor(score),
        color: getColor(score),
      }}
      aria-label={`Score: ${score.toFixed(1)} - ${getLabel(score)}`}
    >
      <span>{score.toFixed(1)}</span>
      <span className="text-xs font-medium opacity-80">{getLabel(score)}</span>
    </div>
  )
}

function getOverallColor(score: number): string {
  if (score >= 85) return "#22c55e"
  if (score >= 70) return "#f59e0b"
  return "#ef4444"
}

export function DotMatrixComparison({
  homes = DEFAULT_HOMES,
  title = "At-a-Glance Comparison",
  description = "Compare all 5 care homes across 6 key categories at a glance",
}: DotMatrixComparisonProps) {
  const safeHomes = homes && homes.length > 0 ? homes : DEFAULT_HOMES

  const bestHome = safeHomes.reduce((best, home) => (home.overall > best.overall ? home : best), safeHomes[0])
  const lowestHome = safeHomes.reduce((lowest, home) => (home.overall < lowest.overall ? home : lowest), safeHomes[0])

  // Find best and worst categories
  const categoryAverages = CATEGORIES.map((cat) => {
    const avg =
      safeHomes.reduce((sum, home) => sum + (home.scores?.[cat.key as keyof typeof home.scores] ?? 0), 0) /
      safeHomes.length
    return { ...cat, avg }
  })
  const bestCategory = categoryAverages.reduce((best, cat) => (cat.avg > best.avg ? cat : best), categoryAverages[0])
  const worstCategory = categoryAverages.reduce(
    (worst, cat) => (cat.avg < worst.avg ? cat : worst),
    categoryAverages[0],
  )

  const formatScore = (score: number | undefined | null): string => {
    if (score === undefined || score === null || isNaN(score)) return "0.0"
    return score.toFixed(1)
  }

  return (
    <Card className="bg-white border-2 border-[#E8E5DF] p-6 sm:p-8 md:p-10 shadow-soft-lg rounded-3xl">
      <div className="mb-6 sm:mb-8">
        <Badge variant="secondary" className="mb-3 text-sm px-4 py-1.5 bg-[#4F6F52]/10 text-[#4F6F52] border-0">
          Quick Overview
        </Badge>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A231E] font-serif mb-2">{title}</h2>
        <p className="text-base sm:text-lg text-[#1A231E]/70">{description}</p>
      </div>

      <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-6 pb-6 border-b border-[#E8E5DF]">
        <span className="text-sm font-medium text-[#1A231E]/70">Score Guide:</span>
        <div className="flex items-center gap-2 min-h-[44px] px-3 py-2 bg-[#22c55e]/10 rounded-lg">
          <span className="text-[#22c55e] text-sm font-bold">8.0+</span>
          <span className="text-sm text-[#1A231E]/70">=</span>
          <span className="text-sm font-semibold text-[#22c55e]">Excellent</span>
        </div>
        <div className="flex items-center gap-2 min-h-[44px] px-3 py-2 bg-[#f59e0b]/10 rounded-lg">
          <span className="text-[#f59e0b] text-sm font-bold">6.0-7.9</span>
          <span className="text-sm text-[#1A231E]/70">=</span>
          <span className="text-sm font-semibold text-[#f59e0b]">Good</span>
        </div>
        <div className="flex items-center gap-2 min-h-[44px] px-3 py-2 bg-[#ef4444]/10 rounded-lg">
          <span className="text-[#ef4444] text-sm font-bold">&lt;6.0</span>
          <span className="text-sm text-[#1A231E]/70">=</span>
          <span className="text-sm font-semibold text-[#ef4444]">Fair</span>
        </div>
      </div>

      {/* Matrix Table */}
      <div className="overflow-x-auto -mx-6 px-6 sm:mx-0 sm:px-0">
        <table className="w-full min-w-[700px]">
          <thead>
            <tr className="border-b-2 border-[#E8E5DF]">
              <th className="text-left py-4 pr-4 text-sm font-semibold text-[#1A231E]/60 w-44">Care Home</th>
              {CATEGORIES.map((cat) => (
                <th key={cat.key} className="text-center py-4 px-2">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="text-sm font-semibold text-[#1A231E] flex items-center justify-center gap-1">
                        {cat.label}
                        <Info className="w-3 h-3 text-[#1A231E]/40" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="text-sm">{cat.description}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </th>
              ))}
              <th className="text-center py-4 pl-4 text-sm font-semibold text-[#1A231E]">Overall</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#E8E5DF]">
            {safeHomes.map((home, index) => {
              const isBest = home.name === bestHome?.name

              return (
                <tr
                  key={home.name}
                  className={`hover:bg-[#FDFBF7] transition-colors ${isBest ? "bg-[#22c55e]/5" : ""}`}
                >
                  <td className="py-4 pr-4">
                    <div className="flex items-center gap-3">
                      <span
                        className="w-7 h-7 rounded-lg flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                        style={{ backgroundColor: getOverallColor(home.overall) }}
                      >
                        {index + 1}
                      </span>
                      <span className="font-semibold text-[#1A231E] text-sm md:text-base">
                        {home.name}
                        {isBest && <Trophy className="w-4 h-4 text-[#22c55e] inline ml-2" />}
                      </span>
                    </div>
                  </td>
                  {CATEGORIES.map((cat) => (
                    <td key={cat.key} className="py-4 px-2">
                      <div className="flex justify-center">
                        <NumericScore score={home.scores[cat.key as keyof typeof home.scores]} />
                      </div>
                    </td>
                  ))}
                  <td className="py-4 pl-4 text-center">
                    <span className="text-xl md:text-2xl font-bold" style={{ color: getOverallColor(home.overall) }}>
                      {home.overall}
                    </span>
                    <span className="text-sm text-[#1A231E]/50 block">/100</span>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      {/* Insights */}
      <div className="mt-8 pt-6 border-t-2 border-[#E8E5DF]">
        <h3 className="text-lg font-bold text-[#1A231E] mb-4">Key Insights</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 bg-[#22c55e]/10 rounded-xl border border-[#22c55e]/20">
            <div className="flex items-center gap-2 mb-2">
              <Trophy className="w-5 h-5 text-[#22c55e]" />
              <span className="text-sm font-semibold text-[#1A231E]">Best Overall</span>
            </div>
            <p className="text-base font-bold text-[#1A231E]">{bestHome?.name ?? "N/A"}</p>
            <p className="text-sm text-[#22c55e]">Score: {bestHome?.overall ?? 0}/100</p>
          </div>
          <div className="p-4 bg-[#3b82f6]/10 rounded-xl border border-[#3b82f6]/20">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 text-[#3b82f6]" />
              <span className="text-sm font-semibold text-[#1A231E]">Strongest Category</span>
            </div>
            <p className="text-base font-bold text-[#1A231E]">{bestCategory?.label ?? "N/A"}</p>
            <p className="text-sm text-[#3b82f6]">Avg: {formatScore(bestCategory?.avg)}/10</p>
          </div>
          <div className="p-4 bg-[#f59e0b]/10 rounded-xl border border-[#f59e0b]/20">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="w-5 h-5 text-[#f59e0b]" />
              <span className="text-sm font-semibold text-[#1A231E]">Area to Watch</span>
            </div>
            <p className="text-base font-bold text-[#1A231E]">{worstCategory?.label ?? "N/A"}</p>
            <p className="text-sm text-[#f59e0b]">Avg: {formatScore(worstCategory?.avg)}/10</p>
          </div>
        </div>
      </div>
    </Card>
  )
}
