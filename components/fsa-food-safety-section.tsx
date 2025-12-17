"use client"

import { Card } from "@/components/ui/card"
import {
  UtensilsCrossed,
  ClipboardCheck,
  Building2,
  Users,
  Calendar,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  Info,
  Star,
} from "lucide-react"

interface FSAHome {
  name: string
  overallRating: number
  scores: {
    hygiene: number
    structural: number
    management: number
  }
  inspectionDate: string
  previousRating?: number
  trend: "improving" | "stable" | "declining"
  rightToReply?: string
  localAuthorityName: string
}

interface FSAFoodSafetySectionProps {
  homes?: FSAHome[]
  userHasDietary?: boolean
  dietaryNeeds?: string[]
}

const SAMPLE_HOMES: FSAHome[] = [
  {
    name: "Sunrise Manor Care Home",
    overallRating: 5,
    scores: { hygiene: 5, structural: 5, management: 5 },
    inspectionDate: "2024-09-15",
    previousRating: 5,
    trend: "stable",
    localAuthorityName: "Manchester City Council",
  },
  {
    name: "The Willows Residential",
    overallRating: 5,
    scores: { hygiene: 5, structural: 4, management: 5 },
    inspectionDate: "2024-07-22",
    previousRating: 4,
    trend: "improving",
    localAuthorityName: "Manchester City Council",
  },
  {
    name: "Oakwood House",
    overallRating: 4,
    scores: { hygiene: 5, structural: 4, management: 4 },
    inspectionDate: "2024-11-03",
    previousRating: 4,
    trend: "stable",
    localAuthorityName: "Manchester City Council",
  },
  {
    name: "Riverside Care Centre",
    overallRating: 4,
    scores: { hygiene: 4, structural: 4, management: 4 },
    inspectionDate: "2024-05-18",
    previousRating: 3,
    trend: "improving",
    localAuthorityName: "Manchester City Council",
  },
  {
    name: "Garden View Nursing",
    overallRating: 3,
    scores: { hygiene: 4, structural: 3, management: 3 },
    inspectionDate: "2024-08-29",
    previousRating: 4,
    trend: "declining",
    localAuthorityName: "Manchester City Council",
  },
]

function getRatingColor(rating: number): string {
  if (rating >= 5) return "text-emerald-600"
  if (rating >= 4) return "text-green-600"
  if (rating >= 3) return "text-amber-600"
  if (rating >= 2) return "text-orange-500"
  return "text-red-600"
}

function getRatingBg(rating: number): string {
  if (rating >= 5) return "bg-emerald-50 border-emerald-200"
  if (rating >= 4) return "bg-green-50 border-green-200"
  if (rating >= 3) return "bg-amber-50 border-amber-200"
  if (rating >= 2) return "bg-orange-50 border-orange-200"
  return "bg-red-50 border-red-200"
}

function getTrendIcon(trend: string) {
  if (trend === "improving") return <TrendingUp className="w-4 h-4 text-emerald-600" />
  if (trend === "declining") return <AlertTriangle className="w-4 h-4 text-red-500" />
  return <CheckCircle2 className="w-4 h-4 text-blue-500" />
}

function getTrendLabel(trend: string): string {
  if (trend === "improving") return "Improving"
  if (trend === "declining") return "Declining"
  return "Stable"
}

function formatInspectionDate(dateStr: string): string {
  const date = new Date(dateStr)
  return date.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })
}

function getMonthsSinceInspection(dateStr: string): number {
  const inspection = new Date(dateStr)
  const now = new Date()
  return Math.floor((now.getTime() - inspection.getTime()) / (1000 * 60 * 60 * 24 * 30))
}

export function FSAFoodSafetySection({
  homes = SAMPLE_HOMES,
  userHasDietary = true,
  dietaryNeeds = ["Diabetic diet management", "Soft food preparation"],
}: FSAFoodSafetySectionProps) {
  const safeHomes = homes.length > 0 ? homes : SAMPLE_HOMES
  const leader = safeHomes[0]
  const avgRating = safeHomes.reduce((sum, h) => sum + h.overallRating, 0) / safeHomes.length
  const fiveStarCount = safeHomes.filter((h) => h.overallRating === 5).length

  return (
    <div className="w-full p-6 sm:p-8 md:p-12 font-sans">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center flex-shrink-0 shadow-lg">
            <UtensilsCrossed className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
          </div>
          <div className="min-w-0">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1A231E] font-serif">
              Food Safety & Hygiene
            </h2>
            <p className="text-base sm:text-lg text-[#1A231E]/70 mt-1">Official Food Hygiene Ratings</p>
          </div>
        </div>

        {/* Key Insight Banner */}
        <Card
          className={`p-5 sm:p-6 ${fiveStarCount >= 2 ? "bg-emerald-50 border-emerald-200" : "bg-amber-50 border-amber-200"}`}
        >
          <div className="flex items-start gap-3">
            <CheckCircle2
              className={`w-6 h-6 mt-0.5 flex-shrink-0 ${fiveStarCount >= 2 ? "text-emerald-600" : "text-amber-600"}`}
            />
            <div>
              <p className="font-semibold text-[#1A231E] text-lg">
                {fiveStarCount} of {safeHomes.length} homes have a 5-star rating
              </p>
              <p className="text-sm sm:text-base text-[#1A231E]/70 mt-1">
                Average: {avgRating.toFixed(1)}/5 — {avgRating >= 4.2 ? "Above" : "At"} the national average of 4.2
              </p>
            </div>
          </div>
        </Card>

        {/* Dietary Needs Alert */}
        {userHasDietary && (
          <Card className="p-5 sm:p-6 bg-blue-50 border-blue-200">
            <div className="flex items-start gap-3">
              <Info className="w-6 h-6 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-[#1A231E] text-lg">Important for Your Dietary Requirements</p>
                <p className="text-sm sm:text-base text-[#1A231E]/70 mt-1">
                  Based on your needs ({dietaryNeeds.join(", ")}), food safety ratings are particularly relevant.
                </p>
              </div>
            </div>
          </Card>
        )}

        {/* Rating Comparison */}
        <div className="space-y-4">
          <h3 className="text-xl sm:text-2xl font-bold text-[#1A231E] font-serif">Food Safety Rating Comparison</h3>

          <div className="grid gap-4">
            {safeHomes.map((home, index) => (
              <Card
                key={home.name}
                className={`p-5 sm:p-6 border ${index === 0 ? "ring-2 ring-[#4F6F52] ring-offset-2" : ""}`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    {index === 0 && (
                      <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                        <span className="text-amber-700 text-sm font-bold">1</span>
                      </div>
                    )}
                    <div className="min-w-0">
                      <p className="font-semibold text-[#1A231E] text-base sm:text-lg truncate">{home.name}</p>
                      <p className="text-sm text-[#1A231E]/60">Inspected {formatInspectionDate(home.inspectionDate)}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div
                      className={`flex items-center gap-2 px-4 py-2 rounded-xl border ${getRatingBg(home.overallRating)}`}
                    >
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`w-5 h-5 ${star <= home.overallRating ? "text-amber-500 fill-amber-500" : "text-gray-300"}`}
                          />
                        ))}
                      </div>
                      <span className={`font-bold text-lg ${getRatingColor(home.overallRating)}`}>
                        {home.overallRating}/5
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-sm min-w-[100px]">
                      {getTrendIcon(home.trend)}
                      <span className="text-[#1A231E]/70">{getTrendLabel(home.trend)}</span>
                    </div>
                  </div>
                </div>

                {/* Breakdown for top home */}
                {index === 0 && (
                  <div className="mt-5 pt-5 border-t border-gray-100">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-[#F8F9FA] rounded-xl">
                        <ClipboardCheck className="w-5 h-5 text-[#4F6F52] mx-auto mb-2" />
                        <p className="text-sm text-[#1A231E]/70">Hygiene</p>
                        <p className={`text-xl font-bold ${getRatingColor(home.scores.hygiene)}`}>
                          {home.scores.hygiene}/5
                        </p>
                      </div>
                      <div className="text-center p-4 bg-[#F8F9FA] rounded-xl">
                        <Building2 className="w-5 h-5 text-[#4F6F52] mx-auto mb-2" />
                        <p className="text-sm text-[#1A231E]/70">Structure</p>
                        <p className={`text-xl font-bold ${getRatingColor(home.scores.structural)}`}>
                          {home.scores.structural}/5
                        </p>
                      </div>
                      <div className="text-center p-4 bg-[#F8F9FA] rounded-xl">
                        <Users className="w-5 h-5 text-[#4F6F52] mx-auto mb-2" />
                        <p className="text-sm text-[#1A231E]/70">Management</p>
                        <p className={`text-xl font-bold ${getRatingColor(home.scores.management)}`}>
                          {home.scores.management}/5
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* Understanding Food Safety Ratings */}
        <Card className="p-5 sm:p-6 bg-[#F8F9FA] border-[#E8E5DF]">
          <h3 className="text-lg sm:text-xl font-bold text-[#1A231E] font-serif mb-4">
            Understanding Food Safety Ratings
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <p className="font-medium text-[#1A231E] mb-3">What inspectors check:</p>
              <ul className="space-y-2 text-[#1A231E]/70">
                <li className="flex items-start gap-3">
                  <ClipboardCheck className="w-5 h-5 text-[#4F6F52] mt-0.5 flex-shrink-0" />
                  <span>
                    <strong className="text-[#1A231E]">Hygiene:</strong> Food handling & storage
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Building2 className="w-5 h-5 text-[#4F6F52] mt-0.5 flex-shrink-0" />
                  <span>
                    <strong className="text-[#1A231E]">Structure:</strong> Cleanliness & facilities
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-[#4F6F52] mt-0.5 flex-shrink-0" />
                  <span>
                    <strong className="text-[#1A231E]">Management:</strong> Training & procedures
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-[#1A231E] mb-3">Rating scale:</p>
              <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-[#1A231E]/70">
                <div className="flex items-center gap-2">
                  <span className="w-6 text-center font-bold text-emerald-600">5</span>
                  <span>Very Good</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-6 text-center font-bold text-green-600">4</span>
                  <span>Good</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-6 text-center font-bold text-amber-600">3</span>
                  <span>Satisfactory</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-6 text-center font-bold text-orange-500">2</span>
                  <span>Needs Improvement</span>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Inspection Recency */}
        <Card className="p-5 sm:p-6 border-[#E8E5DF]">
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="w-6 h-6 text-[#4F6F52]" />
            <h3 className="text-lg sm:text-xl font-bold text-[#1A231E] font-serif">Inspection Recency</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {safeHomes.map((home) => {
              const months = getMonthsSinceInspection(home.inspectionDate)
              const isRecent = months <= 12
              return (
                <div key={home.name} className="flex items-center justify-between py-3 px-4 rounded-xl bg-[#F8F9FA]">
                  <span className="text-[#1A231E]/70 truncate">{home.name}</span>
                  <span
                    className={`font-semibold flex-shrink-0 ml-2 ${isRecent ? "text-emerald-600" : "text-amber-600"}`}
                  >
                    {months}mo ago
                  </span>
                </div>
              )
            })}
          </div>
        </Card>
      </div>
    </div>
  )
}
