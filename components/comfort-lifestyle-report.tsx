"use client"

import { Home, MapPin, Volume2, Footprints, TreePine, Bus, ShoppingBag, Building2, Sun, Moon, Info } from "lucide-react"
import { Card } from "@/components/ui/card"

interface LifestyleMetrics {
  walkScore: number
  noiseLevel: "quiet" | "moderate" | "busy"
  noiseDBA: number
  greenSpaceAccess: number
  transportScore: number
  shopsNearby: number
  healthcareNearby: number
  communityRating: number
}

interface HomeLifestyle {
  name: string
  comfortScore: number
  lifestyle: LifestyleMetrics
  privateRooms: string
  activityHours: number
  outdoorSpace: string
  diningOptions: string
}

interface ComfortLifestyleReportProps {
  homes: HomeLifestyle[]
}

const SAMPLE_HOMES: HomeLifestyle[] = [
  {
    name: "Greenfield Manor",
    comfortScore: 9.4,
    lifestyle: {
      walkScore: 82,
      noiseLevel: "quiet",
      noiseDBA: 42,
      greenSpaceAccess: 95,
      transportScore: 78,
      shopsNearby: 12,
      healthcareNearby: 3,
      communityRating: 4.8,
    },
    privateRooms: "100%",
    activityHours: 18,
    outdoorSpace: "2.5 acres landscaped gardens",
    diningOptions: "3 meal choices + snack bar",
  },
  {
    name: "Oakwood Lodge",
    comfortScore: 8.9,
    lifestyle: {
      walkScore: 74,
      noiseLevel: "quiet",
      noiseDBA: 45,
      greenSpaceAccess: 88,
      transportScore: 72,
      shopsNearby: 8,
      healthcareNearby: 2,
      communityRating: 4.6,
    },
    privateRooms: "90%",
    activityHours: 15,
    outdoorSpace: "1.5 acres with sensory garden",
    diningOptions: "2 meal choices",
  },
  {
    name: "Riverside Care Home",
    comfortScore: 7.9,
    lifestyle: {
      walkScore: 68,
      noiseLevel: "moderate",
      noiseDBA: 52,
      greenSpaceAccess: 72,
      transportScore: 65,
      shopsNearby: 15,
      healthcareNearby: 4,
      communityRating: 4.2,
    },
    privateRooms: "70%",
    activityHours: 10,
    outdoorSpace: "Courtyard garden",
    diningOptions: "Set menu",
  },
  {
    name: "Meadowbrook House",
    comfortScore: 7.5,
    lifestyle: {
      walkScore: 56,
      noiseLevel: "moderate",
      noiseDBA: 55,
      greenSpaceAccess: 65,
      transportScore: 58,
      shopsNearby: 6,
      healthcareNearby: 2,
      communityRating: 4.0,
    },
    privateRooms: "85%",
    activityHours: 12,
    outdoorSpace: "Patio area",
    diningOptions: "2 meal choices",
  },
  {
    name: "Sunnydale Residence",
    comfortScore: 7.1,
    lifestyle: {
      walkScore: 45,
      noiseLevel: "busy",
      noiseDBA: 62,
      greenSpaceAccess: 48,
      transportScore: 82,
      shopsNearby: 22,
      healthcareNearby: 5,
      communityRating: 3.5,
    },
    privateRooms: "45%",
    activityHours: 6,
    outdoorSpace: "Shared balcony",
    diningOptions: "Set menu only",
  },
]

const getWalkScoreLabel = (score: number) => {
  if (score >= 90) return { label: "Walker's Paradise", color: "text-[#22c55e]" }
  if (score >= 70) return { label: "Very Walkable", color: "text-[#22c55e]" }
  if (score >= 50) return { label: "Somewhat Walkable", color: "text-[#eab308]" }
  if (score >= 25) return { label: "Car-Dependent", color: "text-[#f97316]" }
  return { label: "Almost All Errands Require a Car", color: "text-[#ef4444]" }
}

const getNoiseColor = (level: "quiet" | "moderate" | "busy") => {
  switch (level) {
    case "quiet":
      return "text-[#22c55e] bg-[#22c55e]/10"
    case "moderate":
      return "text-[#eab308] bg-[#eab308]/10"
    case "busy":
      return "text-[#ef4444] bg-[#ef4444]/10"
  }
}

const getNoiseIcon = (level: "quiet" | "moderate" | "busy") => {
  switch (level) {
    case "quiet":
      return Moon
    case "moderate":
      return Sun
    case "busy":
      return Volume2
  }
}

const getScoreColor = (score: number, max = 100) => {
  const percentage = (score / max) * 100
  if (percentage >= 80) return "from-[#22c55e] to-[#16a34a]"
  if (percentage >= 60) return "from-[#84cc16] to-[#65a30d]"
  if (percentage >= 40) return "from-[#eab308] to-[#ca8a04]"
  return "from-[#f97316] to-[#ea580c]"
}

export function ComfortLifestyleReport({ homes = SAMPLE_HOMES }: ComfortLifestyleReportProps) {
  const safeHomes = homes && homes.length > 0 ? homes : SAMPLE_HOMES
  const leader = safeHomes[0]

  const formatScore = (score: number | undefined | null): string => {
    if (score === undefined || score === null || isNaN(score)) return "0.0"
    return score.toFixed(1)
  }

  return (
    <div className="min-h-screen bg-[#FDFBF7] py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8 sm:mb-12 md:mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5 mb-4 sm:mb-6">
            <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-3xl bg-gradient-to-br from-[#4F6F52] to-[#3d5741] flex items-center justify-center shadow-soft-xl">
              <Home className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 text-white" strokeWidth={2.5} />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A231E] font-serif leading-tight">
                Comfort & Lifestyle Analysis
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-[#1A231E]/70 mt-2 sm:mt-3 font-sans leading-relaxed">
                Walk Score, Noise Levels & Quality of Life Metrics
              </p>
            </div>
          </div>
        </div>

        {/* Leader Highlight */}
        <Card className="bg-gradient-to-br from-[#FEF9C3] to-[#FEF08A] border-2 border-[#EAB308] p-6 sm:p-8 mb-8 sm:mb-12 shadow-soft-xl rounded-3xl">
          <div className="flex flex-col lg:flex-row lg:items-center gap-6">
            <div className="flex-1">
              <div className="text-sm font-semibold text-[#854D0E] uppercase tracking-wide mb-2">
                Best Lifestyle Score
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-[#1A231E] font-serif mb-2">
                {leader?.name ?? "N/A"} - {formatScore(leader?.comfortScore)}/10
              </div>
              <p className="text-[#854D0E]">
                Highest Walk Score ({leader?.lifestyle?.walkScore ?? 0}), quietest environment, and best green space
                access
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#854D0E]">{leader?.lifestyle?.walkScore ?? 0}</div>
                <div className="text-xs text-[#854D0E]/70">Walk Score</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#854D0E]">{leader?.lifestyle?.noiseDBA ?? 0}dB</div>
                <div className="text-xs text-[#854D0E]/70">Noise Level</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#854D0E]">{leader?.lifestyle?.greenSpaceAccess ?? 0}%</div>
                <div className="text-xs text-[#854D0E]/70">Green Access</div>
              </div>
            </div>
          </div>
        </Card>

        {/* Walk Score Comparison */}
        <Card className="bg-white border-2 border-[#E8E5DF] p-6 sm:p-8 md:p-10 mb-8 sm:mb-12 shadow-soft-lg rounded-3xl">
          <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <Footprints className="w-6 h-6 sm:w-7 sm:h-7 text-[#4F6F52]" strokeWidth={2.5} />
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A231E] font-serif">Walk Score Comparison</h2>
          </div>

          <div className="space-y-6">
            {safeHomes.map((home, index) => {
              const walkLabel = getWalkScoreLabel(home?.lifestyle?.walkScore ?? 0)
              return (
                <div key={home?.name ?? index}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#4F6F52]/10 flex items-center justify-center text-sm font-bold text-[#4F6F52]">
                        {index + 1}
                      </div>
                      <span className="font-semibold text-[#1A231E]">{home?.name ?? "Unknown"}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`text-sm font-semibold ${walkLabel.color}`}>{walkLabel.label}</span>
                      <span className="text-2xl font-bold text-[#1A231E]">{home?.lifestyle?.walkScore ?? 0}</span>
                    </div>
                  </div>
                  <div className="relative h-8 bg-[#4F6F52]/5 rounded-lg overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${getScoreColor(home?.lifestyle?.walkScore ?? 0)} transition-all duration-1000 rounded-lg`}
                      style={{ width: `${home?.lifestyle?.walkScore ?? 0}%` }}
                    />
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-8 p-4 bg-[#4F6F52]/5 rounded-xl">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-[#4F6F52] flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-[#1A231E]/70">
                  <strong>What is Walk Score?</strong> Walk Score measures walkability on a 0-100 scale based on walking
                  routes to nearby amenities. Higher scores mean more errands can be accomplished on foot, which is
                  important for resident independence and family visits.
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Noise Level Analysis */}
        <Card className="bg-white border-2 border-[#E8E5DF] p-6 sm:p-8 md:p-10 mb-8 sm:mb-12 shadow-soft-lg rounded-3xl">
          <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <Volume2 className="w-6 h-6 sm:w-7 sm:h-7 text-[#4F6F52]" strokeWidth={2.5} />
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A231E] font-serif">Noise Level Analysis</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {safeHomes.map((home) => {
              const NoiseIcon = getNoiseIcon(home?.lifestyle?.noiseLevel ?? "quiet")
              return (
                <div
                  key={home?.name ?? "Unknown"}
                  className={`p-5 rounded-2xl border-2 ${home?.lifestyle?.noiseLevel === "quiet" ? "border-[#22c55e]/30 bg-[#22c55e]/5" : home?.lifestyle?.noiseLevel === "moderate" ? "border-[#eab308]/30 bg-[#eab308]/5" : "border-[#ef4444]/30 bg-[#ef4444]/5"}`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-[#1A231E]">{home?.name ?? "Unknown"}</h3>
                    <div className={`p-2 rounded-xl ${getNoiseColor(home?.lifestyle?.noiseLevel ?? "quiet")}`}>
                      <NoiseIcon className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-[#1A231E]/60">Noise Level</span>
                      <span
                        className={`font-semibold capitalize ${home?.lifestyle?.noiseLevel === "quiet" ? "text-[#22c55e]" : home?.lifestyle?.noiseLevel === "moderate" ? "text-[#eab308]" : "text-[#ef4444]"}`}
                      >
                        {home?.lifestyle?.noiseLevel ?? "Unknown"}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-[#1A231E]/60">Average dB</span>
                      <span className="font-bold text-[#1A231E]">{home?.lifestyle?.noiseDBA ?? 0} dBA</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 bg-[#22c55e]/10 rounded-xl border-2 border-[#22c55e]/30">
              <div className="flex items-center gap-2 mb-2">
                <Moon className="w-4 h-4 text-[#22c55e]" />
                <span className="text-sm font-semibold text-[#22c55e]">Quiet (Below 50 dBA)</span>
              </div>
              <p className="text-xs text-[#1A231E]/60">Peaceful environment, ideal for rest and relaxation</p>
            </div>
            <div className="p-4 bg-[#eab308]/10 rounded-xl border-2 border-[#eab308]/30">
              <div className="flex items-center gap-2 mb-2">
                <Sun className="w-4 h-4 text-[#eab308]" />
                <span className="text-sm font-semibold text-[#eab308]">Moderate (50-60 dBA)</span>
              </div>
              <p className="text-xs text-[#1A231E]/60">Normal ambient noise, acceptable for most residents</p>
            </div>
            <div className="p-4 bg-[#ef4444]/10 rounded-xl border-2 border-[#ef4444]/30">
              <div className="flex items-center gap-2 mb-2">
                <Volume2 className="w-4 h-4 text-[#ef4444]" />
                <span className="text-sm font-semibold text-[#ef4444]">Busy (Above 60 dBA)</span>
              </div>
              <p className="text-xs text-[#1A231E]/60">Higher noise levels, may affect sleep quality</p>
            </div>
          </div>
        </Card>

        {/* Environment & Amenities Grid */}
        <Card className="bg-white border-2 border-[#E8E5DF] p-6 sm:p-8 md:p-10 mb-8 sm:mb-12 shadow-soft-lg rounded-3xl">
          <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <MapPin className="w-6 h-6 sm:w-7 sm:h-7 text-[#4F6F52]" strokeWidth={2.5} />
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A231E] font-serif">Environment & Local Amenities</h2>
          </div>

          <div className="overflow-x-auto -mx-2 sm:mx-0">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-[#4F6F52]/20">
                  <th className="text-left py-3 px-2 sm:px-4 text-sm font-bold text-[#1A231E]">Care Home</th>
                  <th className="text-center py-3 px-2 sm:px-4 text-sm font-bold text-[#1A231E]">
                    <div className="flex flex-col items-center gap-1">
                      <TreePine className="w-4 h-4 text-[#22c55e]" />
                      <span>Green Space</span>
                    </div>
                  </th>
                  <th className="text-center py-3 px-2 sm:px-4 text-sm font-bold text-[#1A231E]">
                    <div className="flex flex-col items-center gap-1">
                      <Bus className="w-4 h-4 text-[#3b82f6]" />
                      <span>Transport</span>
                    </div>
                  </th>
                  <th className="text-center py-3 px-2 sm:px-4 text-sm font-bold text-[#1A231E]">
                    <div className="flex flex-col items-center gap-1">
                      <ShoppingBag className="w-4 h-4 text-[#f97316]" />
                      <span>Shops</span>
                    </div>
                  </th>
                  <th className="text-center py-3 px-2 sm:px-4 text-sm font-bold text-[#1A231E]">
                    <div className="flex flex-col items-center gap-1">
                      <Building2 className="w-4 h-4 text-[#ef4444]" />
                      <span>Healthcare</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {safeHomes.map((home, index) => (
                  <tr
                    key={home?.name ?? index}
                    className={`border-b-2 border-[#4F6F52]/10 ${index === 0 ? "bg-[#4F6F52]/5" : ""}`}
                  >
                    <td className="py-4 px-2 sm:px-4 font-semibold text-[#1A231E]">{home?.name ?? "Unknown"}</td>
                    <td className="text-center py-4 px-2 sm:px-4">
                      <div className="flex flex-col items-center">
                        <span className="text-lg font-bold text-[#22c55e]">
                          {home?.lifestyle?.greenSpaceAccess ?? 0}%
                        </span>
                        <span className="text-xs text-[#1A231E]/60">access</span>
                      </div>
                    </td>
                    <td className="text-center py-4 px-2 sm:px-4">
                      <div className="flex flex-col items-center">
                        <span className="text-lg font-bold text-[#3b82f6]">{home?.lifestyle?.transportScore ?? 0}</span>
                        <span className="text-xs text-[#1A231E]/60">score</span>
                      </div>
                    </td>
                    <td className="text-center py-4 px-2 sm:px-4">
                      <div className="flex flex-col items-center">
                        <span className="text-lg font-bold text-[#f97316]">{home?.lifestyle?.shopsNearby ?? 0}</span>
                        <span className="text-xs text-[#1A231E]/60">nearby</span>
                      </div>
                    </td>
                    <td className="text-center py-4 px-2 sm:px-4">
                      <div className="flex flex-col items-center">
                        <span className="text-lg font-bold text-[#ef4444]">
                          {home?.lifestyle?.healthcareNearby ?? 0}
                        </span>
                        <span className="text-xs text-[#1A231E]/60">facilities</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Facility Comparison */}
        <Card className="bg-white border-2 border-[#E8E5DF] p-6 sm:p-8 md:p-10 shadow-soft-lg rounded-3xl">
          <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <Home className="w-6 h-6 sm:w-7 sm:h-7 text-[#4F6F52]" strokeWidth={2.5} />
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A231E] font-serif">Facility Comparison</h2>
          </div>

          <div className="space-y-4">
            {safeHomes.map((home, index) => (
              <div
                key={home?.name ?? index}
                className={`p-5 rounded-2xl border-2 ${index === 0 ? "border-[#4F6F52] bg-[#4F6F52]/5" : "border-[#E8E5DF]"}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-[#1A231E]">{home?.name ?? "Unknown"}</h3>
                  <span className="text-2xl font-bold text-[#4F6F52]">{formatScore(home?.comfortScore)}/10</span>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  <div>
                    <span className="text-xs text-[#1A231E]/60 uppercase tracking-wide">Private Rooms</span>
                    <p className="text-lg font-bold text-[#1A231E]">{home?.privateRooms ?? "N/A"}</p>
                  </div>
                  <div>
                    <span className="text-xs text-[#1A231E]/60 uppercase tracking-wide">Activity Hours</span>
                    <p className="text-lg font-bold text-[#1A231E]">{home?.activityHours ?? 0} hrs/week</p>
                  </div>
                  <div>
                    <span className="text-xs text-[#1A231E]/60 uppercase tracking-wide">Outdoor Space</span>
                    <p className="text-lg font-bold text-[#1A231E]">{home?.outdoorSpace ?? "N/A"}</p>
                  </div>
                  <div>
                    <span className="text-xs text-[#1A231E]/60 uppercase tracking-wide">Dining</span>
                    <p className="text-lg font-bold text-[#1A231E]">{home?.diningOptions ?? "N/A"}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}
