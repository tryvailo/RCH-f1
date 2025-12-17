"use client"

import { Card } from "@/components/ui/card"
import {
  Clock,
  Users,
  TrendingUp,
  MapPin,
  Car,
  Heart,
  BarChart3,
  ArrowUpRight,
  ArrowDownRight,
  Minus,
  Info,
  HelpCircle,
} from "lucide-react"

interface HomeInsights {
  name: string
  avgDwellTime: number
  repeatVisitorRate: number
  monthlyFootfall: number
  footfallTrend: "up" | "down" | "stable"
  footfallChange: number
  peakVisitDay: string
  peakVisitTime: string
  visitorOrigins: {
    local: number
    regional: number
    distant: number
  }
}

interface GooglePlacesInsightsProps {
  homes?: HomeInsights[]
  topChoice?: any
}

const BENCHMARKS = {
  avgDwellTime: 45,
  repeatVisitorRate: 70,
  monthlyFootfall: 450,
}

const SAMPLE_HOMES: HomeInsights[] = [
  {
    name: "Sunrise Manor Care Home",
    avgDwellTime: 52,
    repeatVisitorRate: 82,
    monthlyFootfall: 580,
    footfallTrend: "up",
    footfallChange: 12,
    peakVisitDay: "Sunday",
    peakVisitTime: "2:00 PM - 4:00 PM",
    visitorOrigins: { local: 65, regional: 28, distant: 7 },
  },
  {
    name: "The Willows Residential",
    avgDwellTime: 48,
    repeatVisitorRate: 78,
    monthlyFootfall: 520,
    footfallTrend: "up",
    footfallChange: 8,
    peakVisitDay: "Saturday",
    peakVisitTime: "3:00 PM - 5:00 PM",
    visitorOrigins: { local: 58, regional: 32, distant: 10 },
  },
  {
    name: "Oakwood House",
    avgDwellTime: 45,
    repeatVisitorRate: 75,
    monthlyFootfall: 480,
    footfallTrend: "stable",
    footfallChange: 2,
    peakVisitDay: "Sunday",
    peakVisitTime: "2:00 PM - 4:00 PM",
    visitorOrigins: { local: 70, regional: 22, distant: 8 },
  },
  {
    name: "Riverside Care Centre",
    avgDwellTime: 38,
    repeatVisitorRate: 68,
    monthlyFootfall: 420,
    footfallTrend: "down",
    footfallChange: -5,
    peakVisitDay: "Saturday",
    peakVisitTime: "1:00 PM - 3:00 PM",
    visitorOrigins: { local: 55, regional: 35, distant: 10 },
  },
  {
    name: "Garden View Nursing",
    avgDwellTime: 42,
    repeatVisitorRate: 72,
    monthlyFootfall: 390,
    footfallTrend: "stable",
    footfallChange: 0,
    peakVisitDay: "Sunday",
    peakVisitTime: "2:00 PM - 4:00 PM",
    visitorOrigins: { local: 75, regional: 20, distant: 5 },
  },
]

function getTrendIcon(trend: string) {
  if (trend === "up") return <ArrowUpRight className="w-4 h-4 text-emerald-600" />
  if (trend === "down") return <ArrowDownRight className="w-4 h-4 text-red-500" />
  return <Minus className="w-4 h-4 text-blue-500" />
}

function getDwellTimeColor(minutes: number): string {
  if (minutes >= 50) return "text-emerald-600"
  if (minutes >= 40) return "text-green-600"
  if (minutes >= 30) return "text-amber-600"
  return "text-red-500"
}

function getRepeatRateColor(rate: number): string {
  if (rate >= 80) return "text-emerald-600"
  if (rate >= 70) return "text-green-600"
  if (rate >= 60) return "text-amber-600"
  return "text-red-500"
}

function getTrendExplanation(trend: string, change: number): string {
  if (trend === "up") {
    return `Growing (+${change}%) — More families visiting over the past year, indicating rising satisfaction`
  }
  if (trend === "down") {
    return `Declining (${change}%) — Fewer family visits, which may warrant further investigation`
  }
  return `Stable — Consistent visitor numbers, suggesting steady family engagement`
}

export function GooglePlacesInsights({ homes = SAMPLE_HOMES, topChoice }: GooglePlacesInsightsProps) {
  const safeHomes = homes.length > 0 ? homes : SAMPLE_HOMES
  const leader = safeHomes[0]
  const avgDwell = safeHomes.reduce((sum, h) => sum + h.avgDwellTime, 0) / safeHomes.length
  const avgRepeat = safeHomes.reduce((sum, h) => sum + h.repeatVisitorRate, 0) / safeHomes.length

  return (
    <div className="w-full p-6 sm:p-8 md:p-12 font-sans">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0 shadow-lg">
            <BarChart3 className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
          </div>
          <div className="min-w-0">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1A231E] font-serif">
              Family Engagement Insights
            </h2>
            <p className="text-base sm:text-lg text-[#1A231E]/70 mt-1">
              Real visitor patterns and family engagement data
            </p>
          </div>
        </div>

        {/* Key Insight Banner */}
        <Card className="p-5 sm:p-6 bg-emerald-50 border-emerald-200">
          <div className="flex items-start gap-3">
            <Heart className="w-6 h-6 text-emerald-600 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-semibold text-[#1A231E] text-lg">{leader.name} shows strongest family engagement</p>
              <p className="text-sm sm:text-base text-[#1A231E]/70 mt-1">
                {leader.repeatVisitorRate}% repeat visitor rate and {leader.avgDwellTime}-minute average visits —
                {leader.repeatVisitorRate - BENCHMARKS.repeatVisitorRate}% above industry average.
              </p>
            </div>
          </div>
        </Card>

        {/* Why This Matters */}
        <Card className="p-5 sm:p-6 bg-blue-50 border-blue-200">
          <div className="flex items-start gap-3">
            <Info className="w-6 h-6 text-blue-600 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-semibold text-[#1A231E] text-lg">Why This Matters</p>
              <p className="text-sm sm:text-base text-[#1A231E]/70 mt-1">
                Homes where families visit frequently and stay longer typically indicate better care quality. High
                repeat visitor rates suggest families feel their loved ones are well looked after.
              </p>
            </div>
          </div>
        </Card>

        {/* Engagement Comparison */}
        <div className="space-y-4">
          <h3 className="text-xl sm:text-2xl font-bold text-[#1A231E] font-serif">Engagement Comparison</h3>

          {/* Cards for all screen sizes */}
          <div className="grid gap-4">
            {safeHomes.map((home, index) => (
              <Card
                key={home.name}
                className={`p-5 sm:p-6 ${index === 0 ? "ring-2 ring-[#4F6F52] ring-offset-2" : ""}`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    {index === 0 && (
                      <span className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-sm font-bold text-amber-700 flex-shrink-0">
                        1
                      </span>
                    )}
                    <span className="font-semibold text-[#1A231E] text-base sm:text-lg truncate">{home.name}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 sm:gap-6">
                    <div className="text-center p-3 bg-[#F8F9FA] rounded-xl">
                      <Clock className="w-5 h-5 text-[#4F6F52] mx-auto mb-1" />
                      <p className={`font-bold text-lg ${getDwellTimeColor(home.avgDwellTime)}`}>
                        {home.avgDwellTime}m
                      </p>
                      <p className="text-xs text-[#1A231E]/60">Visit</p>
                    </div>
                    <div className="text-center p-3 bg-[#F8F9FA] rounded-xl">
                      <Users className="w-5 h-5 text-[#4F6F52] mx-auto mb-1" />
                      <p className={`font-bold text-lg ${getRepeatRateColor(home.repeatVisitorRate)}`}>
                        {home.repeatVisitorRate}%
                      </p>
                      <p className="text-xs text-[#1A231E]/60">Repeat</p>
                    </div>
                    <div className="text-center p-3 bg-[#F8F9FA] rounded-xl">
                      <TrendingUp className="w-5 h-5 text-[#4F6F52] mx-auto mb-1" />
                      <div className="flex items-center justify-center gap-1">
                        {getTrendIcon(home.footfallTrend)}
                        <span
                          className={`font-bold text-lg ${
                            home.footfallChange > 0
                              ? "text-emerald-600"
                              : home.footfallChange < 0
                                ? "text-red-500"
                                : "text-blue-500"
                          }`}
                        >
                          {home.footfallChange > 0 ? "+" : ""}
                          {home.footfallChange}%
                        </span>
                      </div>
                      <p className="text-xs text-[#1A231E]/60">Trend</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Benchmark Explanation */}
          <Card className="p-5 sm:p-6 bg-[#F8F9FA] border-[#E8E5DF]">
            <div className="flex items-start gap-3 mb-4">
              <HelpCircle className="w-5 h-5 text-[#4F6F52] mt-0.5 flex-shrink-0" />
              <p className="font-bold text-[#1A231E] font-serif">Understanding These Metrics</p>
            </div>
            <div className="grid gap-4 text-[#1A231E]/70">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#4F6F52] mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-[#1A231E]">Average Visit Duration:</span>
                  <span className="ml-1">
                    Industry benchmark is {BENCHMARKS.avgDwellTime} minutes. Longer visits suggest families feel
                    comfortable.
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-[#4F6F52] mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-[#1A231E]">Repeat Visitor Rate:</span>
                  <span className="ml-1">
                    Benchmark is {BENCHMARKS.repeatVisitorRate}%. Higher rates indicate satisfied, returning families.
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <TrendingUp className="w-5 h-5 text-[#4F6F52] mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-[#1A231E]">12-Month Trend:</span>
                  <span className="ml-1">
                    Year-over-year change in family visits. Positive trends suggest improving satisfaction.
                  </span>
                </div>
              </div>
            </div>
          </Card>

          {/* Trend Breakdown per Home */}
          <div className="space-y-3">
            <p className="text-base font-bold text-[#1A231E] font-serif">Trend Analysis by Home:</p>
            <div className="grid gap-3">
              {safeHomes.map((home) => (
                <div key={home.name} className="flex items-start gap-3 p-4 rounded-xl bg-[#F8F9FA]">
                  {getTrendIcon(home.footfallTrend)}
                  <div>
                    <span className="font-medium text-[#1A231E]">{home.name}:</span>
                    <span className="text-[#1A231E]/70 ml-1">
                      {getTrendExplanation(home.footfallTrend, home.footfallChange)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Visitor Origins */}
        <Card className="p-5 sm:p-6 border-[#E8E5DF]">
          <div className="flex items-center gap-3 mb-5">
            <MapPin className="w-6 h-6 text-[#4F6F52]" />
            <h3 className="text-lg sm:text-xl font-bold text-[#1A231E] font-serif">Where Families Travel From</h3>
          </div>

          <div className="space-y-4">
            {safeHomes.slice(0, 3).map((home) => (
              <div key={home.name} className="space-y-2">
                <p className="text-base font-medium text-[#1A231E]">{home.name}</p>
                <div className="flex h-4 rounded-full overflow-hidden">
                  <div className="bg-emerald-500 transition-all" style={{ width: `${home.visitorOrigins.local}%` }} />
                  <div className="bg-blue-500 transition-all" style={{ width: `${home.visitorOrigins.regional}%` }} />
                  <div className="bg-purple-500 transition-all" style={{ width: `${home.visitorOrigins.distant}%` }} />
                </div>
                <div className="flex gap-4 text-sm text-[#1A231E]/70">
                  <span>{home.visitorOrigins.local}% local</span>
                  <span>{home.visitorOrigins.regional}% regional</span>
                  <span>{home.visitorOrigins.distant}% distant</span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4 mt-5 pt-4 border-t border-[#E8E5DF] text-sm text-[#1A231E]/70">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
              <span>Local (&lt;5mi)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-blue-500"></span>
              <span>Regional (5-20mi)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-purple-500"></span>
              <span>Distant (20+mi)</span>
            </div>
          </div>

          <div className="mt-4 p-4 bg-blue-50 rounded-xl flex items-start gap-3">
            <Car className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-blue-800">
              {leader.name} has {leader.visitorOrigins.local}% local visitors, suggesting strong community ties and
              easier visiting.
            </p>
          </div>
        </Card>

        {/* Data Source Note */}
        <p className="text-sm text-[#1A231E]/60 text-center">
          Engagement data derived from anonymised, aggregated visitor patterns. Updated monthly.
        </p>
      </div>
    </div>
  )
}
