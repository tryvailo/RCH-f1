"use client"

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { TreePine, Footprints, Bus, Users, Volume2, Sparkles, MapPin } from "lucide-react"

interface HomeWellbeingData {
  name: string
  address: string
  overallScore: number
  seniorCommunity: number
  greenSpaces: number
  walkability: number
  transport: number
  noiseLevel: number // dBA
}

interface ProWellbeingComparisonProps {
  homes?: HomeWellbeingData[]
  areaName?: string
}

const DEFAULT_HOMES: HomeWellbeingData[] = [
  {
    name: "Greenfield Manor",
    address: "23 Oak Avenue, B15 2TZ",
    overallScore: 85,
    seniorCommunity: 82,
    greenSpaces: 91,
    walkability: 78,
    transport: 84,
    noiseLevel: 42,
  },
  {
    name: "Oakwood Lodge",
    address: "156 Elm Street, B17 8QP",
    overallScore: 78,
    seniorCommunity: 75,
    greenSpaces: 82,
    walkability: 71,
    transport: 79,
    noiseLevel: 48,
  },
  {
    name: "Riverside Care",
    address: "8 River Road, B29 4LM",
    overallScore: 82,
    seniorCommunity: 88,
    greenSpaces: 85,
    walkability: 74,
    transport: 76,
    noiseLevel: 38,
  },
  {
    name: "Meadowbrook House",
    address: "45 Meadow Lane, B31 2NR",
    overallScore: 71,
    seniorCommunity: 68,
    greenSpaces: 79,
    walkability: 65,
    transport: 72,
    noiseLevel: 52,
  },
  {
    name: "Sunnydale Residence",
    address: "12 Sunny Close, B38 9XT",
    overallScore: 69,
    seniorCommunity: 72,
    greenSpaces: 68,
    walkability: 62,
    transport: 71,
    noiseLevel: 55,
  },
]

function getScoreColor(score: number): string {
  if (score >= 80) return "#22c55e"
  if (score >= 65) return "#f59e0b"
  return "#ef4444"
}

function getScoreLabel(score: number): string {
  if (score >= 80) return "Excellent"
  if (score >= 65) return "Good"
  if (score >= 50) return "Fair"
  return "Below Average"
}

function getNoiseLabel(dba: number): { label: string; color: string } {
  if (dba <= 40) return { label: "Very Quiet", color: "#22c55e" }
  if (dba <= 50) return { label: "Quiet", color: "#84cc16" }
  if (dba <= 55) return { label: "Moderate", color: "#f59e0b" }
  return { label: "Noisy", color: "#ef4444" }
}

function ScoreBar({ score, maxScore = 100 }: { score: number; maxScore?: number }) {
  const percentage = (score / maxScore) * 100
  const color = getScoreColor(score)

  return (
    <div className="flex items-center gap-3">
      <div className="flex-1 h-2.5 bg-[#E8E5DF] rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{ width: `${percentage}%`, backgroundColor: color }}
        />
      </div>
      <span className="text-sm font-bold tabular-nums w-8" style={{ color }}>
        {score}
      </span>
    </div>
  )
}

export function ProWellbeingComparison({
  homes = DEFAULT_HOMES,
  areaName = "Birmingham",
}: ProWellbeingComparisonProps) {
  const safeHomes = homes && homes.length > 0 ? homes : DEFAULT_HOMES

  const bestHome = safeHomes.reduce((best, home) => (home.overallScore > best.overallScore ? home : best), safeHomes[0])
  const quietestHome = safeHomes.reduce((best, home) => (home.noiseLevel < best.noiseLevel ? home : best), safeHomes[0])

  return (
    <section className="py-12 md:py-16 px-4 bg-gradient-to-br from-[#FDFBF7] via-white to-[#4F6F52]/5 print:py-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-12">
          <Badge variant="secondary" className="mb-4 text-base px-5 py-2 bg-[#4F6F52]/10 text-[#4F6F52] border-0">
            Location Quality Analysis
          </Badge>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1A231E] mb-4 leading-tight">
            Well-being Index by Home Location
          </h2>
          <p className="text-lg md:text-xl text-[#1A231E]/70 max-w-3xl mx-auto leading-relaxed">
            Each care home has a unique environment. We've calculated individual Well-being scores based on each home's
            precise location in {areaName}.
          </p>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <Card className="p-6 bg-[#22c55e]/5 border-[#22c55e]/20">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#22c55e]/20 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-[#22c55e]" />
              </div>
              <div>
                <p className="text-sm text-[#1A231E]/60 mb-1">Best Overall Environment</p>
                <p className="text-xl font-bold text-[#1A231E]">{bestHome?.name ?? "N/A"}</p>
                <p className="text-base text-[#22c55e] font-semibold">Score: {bestHome?.overallScore ?? 0}/100</p>
              </div>
            </div>
          </Card>
          <Card className="p-6 bg-[#3b82f6]/5 border-[#3b82f6]/20">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#3b82f6]/20 flex items-center justify-center">
                <Volume2 className="w-6 h-6 text-[#3b82f6]" />
              </div>
              <div>
                <p className="text-sm text-[#1A231E]/60 mb-1">Quietest Location</p>
                <p className="text-xl font-bold text-[#1A231E]">{quietestHome?.name ?? "N/A"}</p>
                <p className="text-base text-[#3b82f6] font-semibold">{quietestHome?.noiseLevel ?? 0} dBA average</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Comparison Table */}
        <Card className="overflow-hidden border-2 border-[#E8E5DF] shadow-soft-lg">
          {/* Table Body */}
          <div className="divide-y divide-[#E8E5DF]">
            {safeHomes.map((home, index) => {
              const noise = getNoiseLabel(home.noiseLevel)
              const isBest = home.overallScore === bestHome.overallScore

              return (
                <div
                  key={home.name}
                  className={`p-4 md:p-6 hover:bg-[#FDFBF7] transition-colors min-h-[80px] ${isBest ? "bg-[#22c55e]/5" : ""}`}
                >
                  <div className="grid grid-cols-7 gap-4 items-center">
                    {/* Home Name */}
                    <div className="col-span-2">
                      <div className="flex items-start gap-3">
                        <div
                          className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                          style={{ backgroundColor: getScoreColor(home.overallScore) }}
                        >
                          {index + 1}
                        </div>
                        <div className="min-w-0">
                          <p className="font-bold text-[#1A231E] text-base md:text-lg truncate">
                            {home.name}
                            {isBest && (
                              <span className="ml-2 text-xs font-semibold text-[#22c55e] bg-[#22c55e]/10 px-2 py-0.5 rounded-full">
                                BEST
                              </span>
                            )}
                          </p>
                          <p className="text-sm text-[#1A231E]/50 flex items-center gap-1 truncate">
                            <MapPin className="w-3 h-3 flex-shrink-0" />
                            {home.address}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Scores - Desktop */}
                    <div className="text-center hidden md:block">
                      <span className="text-lg font-bold block" style={{ color: getScoreColor(home.seniorCommunity) }}>
                        {home.seniorCommunity}
                      </span>
                      <span className="text-sm text-[#1A231E]/50">{getScoreLabel(home.seniorCommunity)}</span>
                    </div>
                    <div className="text-center hidden md:block">
                      <span className="text-lg font-bold block" style={{ color: getScoreColor(home.greenSpaces) }}>
                        {home.greenSpaces}
                      </span>
                      <span className="text-sm text-[#1A231E]/50">{getScoreLabel(home.greenSpaces)}</span>
                    </div>
                    <div className="text-center hidden md:block">
                      <span className="text-lg font-bold block" style={{ color: getScoreColor(home.walkability) }}>
                        {home.walkability}
                      </span>
                      <span className="text-sm text-[#1A231E]/50">{getScoreLabel(home.walkability)}</span>
                    </div>
                    <div className="text-center hidden md:block">
                      <span className="text-lg font-bold block" style={{ color: getScoreColor(home.transport) }}>
                        {home.transport}
                      </span>
                      <span className="text-sm text-[#1A231E]/50">{getScoreLabel(home.transport)}</span>
                    </div>

                    {/* Overall Score */}
                    <div className="text-center">
                      <div className="inline-flex flex-col items-center">
                        <span
                          className="text-2xl md:text-3xl font-bold"
                          style={{ color: getScoreColor(home.overallScore) }}
                        >
                          {home.overallScore}
                        </span>
                        <span className="text-sm text-[#1A231E]/50">{getScoreLabel(home.overallScore)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Breakdown */}
                  <div className="md:hidden mt-4 pt-4 border-t border-[#E8E5DF]/50">
                    <div className="grid grid-cols-4 gap-3 text-center">
                      <div className="min-h-[48px] flex flex-col justify-center">
                        <Users className="w-4 h-4 mx-auto text-[#1A231E]/40 mb-1" />
                        <span className="text-sm font-bold" style={{ color: getScoreColor(home.seniorCommunity) }}>
                          {home.seniorCommunity}
                        </span>
                        <span className="text-sm text-[#1A231E]/40">{getScoreLabel(home.seniorCommunity)}</span>
                      </div>
                      <div className="min-h-[48px] flex flex-col justify-center">
                        <TreePine className="w-4 h-4 mx-auto text-[#1A231E]/40 mb-1" />
                        <span className="text-sm font-bold" style={{ color: getScoreColor(home.greenSpaces) }}>
                          {home.greenSpaces}
                        </span>
                        <span className="text-sm text-[#1A231E]/40">{getScoreLabel(home.greenSpaces)}</span>
                      </div>
                      <div className="min-h-[48px] flex flex-col justify-center">
                        <Footprints className="w-4 h-4 mx-auto text-[#1A231E]/40 mb-1" />
                        <span className="text-sm font-bold" style={{ color: getScoreColor(home.walkability) }}>
                          {home.walkability}
                        </span>
                        <span className="text-sm text-[#1A231E]/40">{getScoreLabel(home.walkability)}</span>
                      </div>
                      <div className="min-h-[48px] flex flex-col justify-center">
                        <Bus className="w-4 h-4 mx-auto text-[#1A231E]/40 mb-1" />
                        <span className="text-sm font-bold" style={{ color: getScoreColor(home.transport) }}>
                          {home.transport}
                        </span>
                        <span className="text-sm text-[#1A231E]/40">{getScoreLabel(home.transport)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Noise Level */}
                  <div className="mt-3 flex items-center gap-2 text-sm">
                    <Volume2 className="w-4 h-4 text-[#1A231E]/40" />
                    <span className="text-sm text-[#1A231E]/60">Noise Level:</span>
                    <span className="font-semibold" style={{ color: noise.color }}>
                      {home.noiseLevel} dBA ({noise.label})
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </Card>

        {/* Legend */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-[#1A231E]/60">
          <div className="flex items-center gap-2 min-h-[44px] px-4 py-2 bg-[#22c55e]/10 rounded-lg">
            <div className="w-4 h-4 rounded-full bg-[#22c55e]" aria-hidden="true" />
            <span className="font-medium text-[#22c55e]">80+ Excellent</span>
          </div>
          <div className="flex items-center gap-2 min-h-[44px] px-4 py-2 bg-[#f59e0b]/10 rounded-lg">
            <div className="w-4 h-4 rounded-full bg-[#f59e0b]" aria-hidden="true" />
            <span className="font-medium text-[#f59e0b]">65-79 Good</span>
          </div>
          <div className="flex items-center gap-2 min-h-[44px] px-4 py-2 bg-[#ef4444]/10 rounded-lg">
            <div className="w-4 h-4 rounded-full bg-[#ef4444]" aria-hidden="true" />
            <span className="font-medium text-[#ef4444]">Below 65 Fair</span>
          </div>
        </div>

        {/* Data Source */}
        <p className="mt-6 text-center text-sm text-[#1A231E]/50">
          Data sources: ONS Census 2021, OSM Green Spaces, UK Noise Map, Transport API • Calculated for each home's
          precise postcode
        </p>
      </div>
    </section>
  )
}
