"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, X, Target } from "lucide-react"

interface CareHome {
  name: string
  overallScore: number
  categoryScores: {
    safety: number
    medicalCare: number
    staffQuality: number
    financialStability: number
    comfort: number
    communityReputation: number
  }
  metrics: {
    weeklyFee: number
    cqcRating: string
    nursesPerBed: string
    staffTurnover: string
    privateRooms: string
    googleRating: number
  }
}

interface UserPriority {
  name: string
  importance: number
  category: "safety" | "medical" | "staff" | "financial" | "comfort" | "location"
}

interface PrioritiesMatchMatrixProps {
  userPriorities: UserPriority[]
  homes: CareHome[]
}

function calculateMatchScore(
  priority: UserPriority,
  home: CareHome,
): {
  match_score: number
  meets_requirement: boolean
  details: string
} {
  const categoryMap: Record<string, keyof typeof home.categoryScores> = {
    safety: "safety",
    medical: "medicalCare",
    staff: "staffQuality",
    financial: "financialStability",
    comfort: "comfort",
    location: "communityReputation",
  }

  const categoryKey = categoryMap[priority.category]
  const score = home.categoryScores[categoryKey] || 0
  const matchScore = Math.round((score / 10) * 100)

  const threshold = priority.importance >= 8 ? 85 : priority.importance >= 6 ? 75 : 65
  const meetsRequirement = matchScore >= threshold

  let details = ""
  if (priority.category === "safety") {
    details = `CQC Overall: ${home.metrics.cqcRating || "Good"}`
  } else if (priority.category === "medical") {
    details = `Nursing ratio: ${home.metrics.nursesPerBed || "1:12"} residents per nurse`
  } else if (priority.category === "staff") {
    details = `Staff retention: ${home.metrics.staffTurnover || "18%"} turnover`
  } else if (priority.category === "financial") {
    details = `Weekly fee: £${home.metrics.weeklyFee || 950}`
  } else if (priority.category === "comfort") {
    details = `Private rooms: ${home.metrics.privateRooms || "85%"}`
  } else if (priority.category === "location") {
    details = `Google rating: ${home.metrics.googleRating || "4.5"} stars`
  }

  return {
    match_score: matchScore,
    meets_requirement: meetsRequirement,
    details: details,
  }
}

export function PrioritiesMatchMatrix({ userPriorities, homes }: PrioritiesMatchMatrixProps) {
  const topHomes = homes.sort((a, b) => b.overallScore - a.overallScore).slice(0, 3)

  return (
    <div className="space-y-12 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-primary/10 flex items-center justify-centre">
            <Target className="w-7 h-7 md:w-8 md:h-8 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">Your Priorities Match Matrix</h1>
          </div>
        </div>
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
          This matrix shows how each care home matches your specific priorities. Green checkmarks indicate the home
          meets your threshold for that priority, while red crosses show areas that fall short. Use this to quickly
          identify which homes best align with what matters most to you.
        </p>
      </div>

      {/* Priority Legend */}
      <Card className="p-4 md:p-6 bg-muted/50 border-2">
        <h3 className="text-lg md:text-xl font-semibold text-foreground mb-4">Priority Importance Levels</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm md:text-base">
          <div className="flex items-center gap-2">
            <Badge variant="destructive" className="px-3 py-1">
              Critical
            </Badge>
            <span className="text-muted-foreground">Requires 85%+ match</span>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="px-3 py-1">
              Important
            </Badge>
            <span className="text-muted-foreground">Requires 75%+ match</span>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="px-3 py-1">
              Nice to Have
            </Badge>
            <span className="text-muted-foreground">Requires 65%+ match</span>
          </div>
        </div>
      </Card>

      {/* Home Cards */}
      {topHomes.map((home, homeIdx) => (
        <Card key={home.name} className="p-4 md:p-8 space-y-6 border-2">
          {/* Home Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b-2 border-border">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-centre text-lg md:text-xl font-bold text-primary">
                {homeIdx + 1}
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">{home.name}</h2>
                <p className="text-base md:text-lg text-muted-foreground">
                  Overall Score: {Math.round(home.overallScore * 10)}/100
                </p>
              </div>
            </div>
          </div>

          {/* Priority Matches */}
          <div className="space-y-4">
            {userPriorities.map((priority) => {
              const { match_score, meets_requirement, details } = calculateMatchScore(priority, home)

              // Determine priority badge
              const importanceBadge =
                priority.importance >= 8
                  ? { variant: "destructive" as const, text: "Critical" }
                  : priority.importance >= 6
                    ? { variant: "secondary" as const, text: "Important" }
                    : { variant: "outline" as const, text: "Nice to Have" }

              return (
                <div
                  key={priority.name}
                  className={`flex flex-col sm:flex-row sm:items-center gap-4 p-4 rounded-xl border-2 ${
                    meets_requirement ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"
                  }`}
                >
                  {/* Status Icon */}
                  <div className="flex items-center gap-3 flex-shrink-0">
                    {meets_requirement ? (
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-green-600 flex items-center justify-centre">
                        <Check className="w-6 h-6 md:w-7 md:h-7 text-white" strokeWidth={3} />
                      </div>
                    ) : (
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-red-600 flex items-center justify-centre">
                        <X className="w-6 h-6 md:w-7 md:h-7 text-white" strokeWidth={3} />
                      </div>
                    )}
                  </div>

                  {/* Priority Info */}
                  <div className="flex-1 space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge {...importanceBadge} className="px-3 py-1">
                        {importanceBadge.text}
                      </Badge>
                      <h3 className="text-lg md:text-xl font-semibold text-foreground">{priority.name}</h3>
                    </div>
                    <p className="text-sm md:text-base text-muted-foreground">{details}</p>
                  </div>

                  {/* Match Score */}
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <div className="text-right">
                      <div
                        className={`text-3xl md:text-4xl font-bold ${
                          meets_requirement ? "text-green-700" : "text-red-700"
                        }`}
                      >
                        {match_score}%
                      </div>
                      <div className="text-xs md:text-sm text-muted-foreground">
                        {meets_requirement ? "Meets threshold" : "Below threshold"}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Summary */}
          <div className="pt-4 border-t-2 border-border">
            <div className="flex items-center justify-between text-base md:text-lg">
              <span className="text-muted-foreground font-medium">Priorities Met:</span>
              <span className="text-2xl md:text-3xl font-bold text-primary">
                {userPriorities.filter((p) => calculateMatchScore(p, home).meets_requirement).length} /{" "}
                {userPriorities.length}
              </span>
            </div>
          </div>
        </Card>
      ))}

      {/* Help Section */}
      <Card className="p-6 bg-blue-50 border-2 border-blue-200">
        <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4">How to Use This Matrix</h3>
        <ul className="space-y-3 text-base md:text-lg text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold mt-1">1.</span>
            <span>Focus on homes that meet your "Critical" priorities - these are non-negotiable for your needs</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold mt-1">2.</span>
            <span>For homes missing "Important" priorities, prepare questions to ask during your visit</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold mt-1">3.</span>
            <span>"Nice to Have" priorities can be compromised if the home excels in critical areas</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold mt-1">4.</span>
            <span>A home meeting 4/5 priorities is typically a strong match worth visiting</span>
          </li>
        </ul>
      </Card>
    </div>
  )
}
