"use client"

import { useState } from "react"
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from "recharts"
import { Card } from "@/components/ui/card"
import { Eye, EyeOff } from "lucide-react"

interface HomeData {
  name: string
  color: string
  scores: {
    safety: number
    medicalCare: number
    staffQuality: number
    financialStability: number
    comfort: number
    communityReputation: number
  }
}

interface RadarComparisonChartProps {
  homes?: HomeData[]
  title?: string
  description?: string
}

const DEFAULT_HOMES: HomeData[] = [
  {
    name: "Greenfield Manor",
    color: "#22c55e",
    scores: {
      safety: 9.5,
      medicalCare: 9.0,
      staffQuality: 9.3,
      financialStability: 8.8,
      comfort: 9.4,
      communityReputation: 9.1,
    },
  },
  {
    name: "Oakwood Lodge",
    color: "#3b82f6",
    scores: {
      safety: 8.9,
      medicalCare: 8.5,
      staffQuality: 8.8,
      financialStability: 8.3,
      comfort: 8.9,
      communityReputation: 8.4,
    },
  },
  {
    name: "Riverside Care",
    color: "#eab308",
    scores: {
      safety: 8.1,
      medicalCare: 7.8,
      staffQuality: 7.6,
      financialStability: 7.5,
      comfort: 7.9,
      communityReputation: 7.2,
    },
  },
  {
    name: "Meadowbrook House",
    color: "#f97316",
    scores: {
      safety: 7.0,
      medicalCare: 7.2,
      staffQuality: 7.1,
      financialStability: 7.8,
      comfort: 7.5,
      communityReputation: 6.8,
    },
  },
  {
    name: "Sunnydale Residence",
    color: "#ef4444",
    scores: {
      safety: 6.5,
      medicalCare: 6.8,
      staffQuality: 6.4,
      financialStability: 6.2,
      comfort: 7.1,
      communityReputation: 5.4,
    },
  },
]

const CATEGORY_LABELS: Record<string, string> = {
  safety: "Safety",
  medicalCare: "Medical Care",
  staffQuality: "Staff Quality",
  financialStability: "Financial",
  comfort: "Comfort",
  communityReputation: "Reputation",
}

export function RadarComparisonChart({
  homes = DEFAULT_HOMES,
  title = "Multi-Dimensional Comparison",
  description = "Compare all 5 care homes across 6 key categories",
}: RadarComparisonChartProps) {
  const [visibleHomes, setVisibleHomes] = useState<Set<string>>(new Set(homes.map((h) => h.name)))

  const toggleHome = (homeName: string) => {
    const newVisible = new Set(visibleHomes)
    if (newVisible.has(homeName)) {
      if (newVisible.size > 1) {
        newVisible.delete(homeName)
      }
    } else {
      newVisible.add(homeName)
    }
    setVisibleHomes(newVisible)
  }

  // Transform data for Recharts
  const chartData = Object.keys(CATEGORY_LABELS).map((key) => {
    const dataPoint: Record<string, string | number> = {
      category: CATEGORY_LABELS[key],
      fullMark: 10,
    }
    homes.forEach((home) => {
      dataPoint[home.name] = home.scores[key as keyof typeof home.scores]
    })
    return dataPoint
  })

  return (
    <Card className="bg-white border-2 border-[#E8E5DF] p-6 sm:p-8 md:p-10 shadow-soft-lg rounded-3xl">
      <div className="mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A231E] font-serif mb-2">{title}</h2>
        <p className="text-base sm:text-lg text-[#1A231E]/70">{description}</p>
      </div>

      {/* Legend / Toggle Controls */}
      <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
        {homes.map((home) => {
          const isVisible = visibleHomes.has(home.name)
          return (
            <button
              key={home.name}
              onClick={() => toggleHome(home.name)}
              className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl border-2 transition-all ${
                isVisible ? "border-transparent shadow-soft-md" : "border-[#E8E5DF] opacity-50"
              }`}
              style={{
                backgroundColor: isVisible ? `${home.color}15` : "transparent",
              }}
            >
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: home.color }} />
              <span className="text-sm sm:text-base font-medium text-[#1A231E]">{home.name}</span>
              {isVisible ? (
                <Eye className="w-4 h-4 text-[#1A231E]/60" />
              ) : (
                <EyeOff className="w-4 h-4 text-[#1A231E]/40" />
              )}
            </button>
          )
        })}
      </div>

      {/* Radar Chart */}
      <div className="w-full h-[400px] sm:h-[500px] md:h-[600px]">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
            <PolarGrid stroke="#E8E5DF" strokeWidth={1} />
            <PolarAngleAxis
              dataKey="category"
              tick={{
                fill: "#1A231E",
                fontSize: 12,
                fontWeight: 600,
              }}
              tickLine={false}
            />
            <PolarRadiusAxis
              angle={30}
              domain={[0, 10]}
              tick={{
                fill: "#1A231E80",
                fontSize: 10,
              }}
              tickCount={6}
              axisLine={false}
            />
            {homes.map(
              (home) =>
                visibleHomes.has(home.name) && (
                  <Radar
                    key={home.name}
                    name={home.name}
                    dataKey={home.name}
                    stroke={home.color}
                    fill={home.color}
                    fillOpacity={0.15}
                    strokeWidth={2}
                    dot={{
                      r: 4,
                      fill: home.color,
                      strokeWidth: 0,
                    }}
                  />
                ),
            )}
            <Tooltip
              content={({ active, payload, label }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-white border-2 border-[#E8E5DF] rounded-xl p-3 shadow-lg">
                      <p className="font-bold text-[#1A231E] mb-2">{label}</p>
                      {payload.map((entry, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm">
                          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color }} />
                          <span className="text-[#1A231E]/70">{entry.name}:</span>
                          <span className="font-bold text-[#1A231E]">
                            {typeof entry.value === "number" ? entry.value.toFixed(1) : entry.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  )
                }
                return null
              }}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      {/* Quick Insights */}
      <div className="mt-6 sm:mt-8 pt-6 border-t-2 border-[#E8E5DF]">
        <h3 className="text-lg sm:text-xl font-bold text-[#1A231E] mb-4">Quick Insights</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-[#22c55e]/10 rounded-xl p-4 border border-[#22c55e]/20">
            <div className="text-sm text-[#1A231E]/60 mb-1">Most Balanced</div>
            <div className="font-bold text-[#1A231E]">{homes[0].name}</div>
            <div className="text-sm text-[#22c55e]">Consistently high across all categories</div>
          </div>
          <div className="bg-[#eab308]/10 rounded-xl p-4 border border-[#eab308]/20">
            <div className="text-sm text-[#1A231E]/60 mb-1">Biggest Gap</div>
            <div className="font-bold text-[#1A231E]">Safety Category</div>
            <div className="text-sm text-[#eab308]">3.0 point difference between top and bottom</div>
          </div>
          <div className="bg-[#3b82f6]/10 rounded-xl p-4 border border-[#3b82f6]/20">
            <div className="text-sm text-[#1A231E]/60 mb-1">Closest Competition</div>
            <div className="font-bold text-[#1A231E]">Comfort Category</div>
            <div className="text-sm text-[#3b82f6]">All homes score 7.1-9.4 range</div>
          </div>
        </div>
      </div>
    </Card>
  )
}
