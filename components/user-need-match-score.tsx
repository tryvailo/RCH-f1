"use client"

import { Target, CheckCircle2, AlertCircle, ArrowRight, Sparkles } from "lucide-react"
import { Card } from "@/components/ui/card"

interface UserPriority {
  category: string
  importance: "critical" | "important" | "nice-to-have"
  weight: number
}

interface HomeMatch {
  name: string
  overallMatchScore: number
  categoryMatches: {
    category: string
    score: number
    userWeight: number
    weightedScore: number
    matchLevel: "excellent" | "good" | "partial" | "poor"
  }[]
  topStrengths: string[]
  potentialConcerns: string[]
}

interface AllHomeFormat {
  name: string
  overallScore: number
  safetyScore?: number
  medicalScore?: number
  staffScore?: number
  financialScore?: number
  comfortScore?: number
  communityScore?: number
  [key: string]: unknown
}

interface UserNeeds {
  safetyPriority?: number
  medicalPriority?: number
  budgetPriority?: number
  locationPriority?: number
  comfortPriority?: number
}

interface UserNeedMatchScoreProps {
  userName?: string
  userPriorities?: UserPriority[]
  homes?: HomeMatch[] | AllHomeFormat[]
  userNeeds?: UserNeeds
}

const DEFAULT_PRIORITIES: UserPriority[] = [
  { category: "Safety", importance: "critical", weight: 30 },
  { category: "Medical Care", importance: "critical", weight: 25 },
  { category: "Staff Quality", importance: "important", weight: 20 },
  { category: "Financial Stability", importance: "important", weight: 15 },
  { category: "Comfort", importance: "nice-to-have", weight: 10 },
]

const DEFAULT_HOMES: HomeMatch[] = [
  {
    name: "Greenfield Manor",
    overallMatchScore: 94,
    categoryMatches: [
      { category: "Safety", score: 9.5, userWeight: 30, weightedScore: 28.5, matchLevel: "excellent" },
      { category: "Medical Care", score: 9.0, userWeight: 25, weightedScore: 22.5, matchLevel: "excellent" },
      { category: "Staff Quality", score: 9.3, userWeight: 20, weightedScore: 18.6, matchLevel: "excellent" },
      { category: "Financial Stability", score: 8.8, userWeight: 15, weightedScore: 13.2, matchLevel: "good" },
      { category: "Comfort", score: 9.4, userWeight: 10, weightedScore: 9.4, matchLevel: "excellent" },
    ],
    topStrengths: [
      "Outstanding safety record matches your top priority",
      "Excellent nursing care for complex medical needs",
      "Low staff turnover ensures continuity of care",
    ],
    potentialConcerns: ["Premium pricing may require funding support"],
  },
  {
    name: "Oakwood Lodge",
    overallMatchScore: 87,
    categoryMatches: [
      { category: "Safety", score: 8.9, userWeight: 30, weightedScore: 26.7, matchLevel: "good" },
      { category: "Medical Care", score: 8.5, userWeight: 25, weightedScore: 21.3, matchLevel: "good" },
      { category: "Staff Quality", score: 8.8, userWeight: 20, weightedScore: 17.6, matchLevel: "good" },
      { category: "Financial Stability", score: 8.3, userWeight: 15, weightedScore: 12.5, matchLevel: "good" },
      { category: "Comfort", score: 8.9, userWeight: 10, weightedScore: 8.9, matchLevel: "good" },
    ],
    topStrengths: ["Solid safety standards with Good CQC rating", "Experienced medical team on-site"],
    potentialConcerns: ["Slightly lower scores in your critical categories"],
  },
  {
    name: "Riverside Care Home",
    overallMatchScore: 78,
    categoryMatches: [
      { category: "Safety", score: 8.1, userWeight: 30, weightedScore: 24.3, matchLevel: "partial" },
      { category: "Medical Care", score: 7.8, userWeight: 25, weightedScore: 19.5, matchLevel: "partial" },
      { category: "Staff Quality", score: 7.6, userWeight: 20, weightedScore: 15.2, matchLevel: "partial" },
      { category: "Financial Stability", score: 7.5, userWeight: 15, weightedScore: 11.3, matchLevel: "partial" },
      { category: "Comfort", score: 7.9, userWeight: 10, weightedScore: 7.9, matchLevel: "partial" },
    ],
    topStrengths: ["Good overall care with room for growth"],
    potentialConcerns: ["Lower match in safety - your critical priority", "Staff turnover higher than ideal"],
  },
]

const getMatchLevel = (score: number): "excellent" | "good" | "partial" | "poor" => {
  if (score >= 9.0) return "excellent"
  if (score >= 8.0) return "good"
  if (score >= 7.0) return "partial"
  return "poor"
}

const transformToHomeMatch = (home: AllHomeFormat, priorities: UserPriority[]): HomeMatch => {
  const categoryMatches = priorities.map((priority) => {
    let score = 8.0
    switch (priority.category) {
      case "Safety":
        score = home.safetyScore ?? 8.0
        break
      case "Medical Care":
        score = home.medicalScore ?? 8.0
        break
      case "Staff Quality":
        score = home.staffScore ?? 8.0
        break
      case "Financial Stability":
        score = home.financialScore ?? 8.0
        break
      case "Comfort":
        score = home.comfortScore ?? 8.0
        break
    }
    return {
      category: priority.category,
      score: score / 10, // Convert from 0-100 to 0-10 scale
      userWeight: priority.weight,
      weightedScore: (score / 10) * (priority.weight / 100) * 100,
      matchLevel: getMatchLevel(score / 10),
    }
  })

  const overallMatchScore = categoryMatches.reduce((sum, m) => sum + m.weightedScore, 0)

  const topStrengths: string[] = []
  const potentialConcerns: string[] = []

  categoryMatches.forEach((match) => {
    if (match.matchLevel === "excellent") {
      topStrengths.push(`Strong ${match.category.toLowerCase()} aligns with your priorities`)
    } else if (match.matchLevel === "partial" || match.matchLevel === "poor") {
      potentialConcerns.push(`${match.category} may need further consideration`)
    }
  })

  if (topStrengths.length === 0) {
    topStrengths.push("Balanced performance across all categories")
  }
  if (potentialConcerns.length === 0) {
    potentialConcerns.push("No significant concerns identified")
  }

  return {
    name: home.name,
    overallMatchScore: Math.round(overallMatchScore),
    categoryMatches,
    topStrengths: topStrengths.slice(0, 3),
    potentialConcerns: potentialConcerns.slice(0, 2),
  }
}

const isAllHomeFormat = (home: HomeMatch | AllHomeFormat): home is AllHomeFormat => {
  return "overallScore" in home && !("categoryMatches" in home)
}

const getMatchLevelColor = (level: "excellent" | "good" | "partial" | "poor") => {
  switch (level) {
    case "excellent":
      return "text-[#22c55e] bg-[#22c55e]/10 border-[#22c55e]/30"
    case "good":
      return "text-[#84cc16] bg-[#84cc16]/10 border-[#84cc16]/30"
    case "partial":
      return "text-[#eab308] bg-[#eab308]/10 border-[#eab308]/30"
    case "poor":
      return "text-[#ef4444] bg-[#ef4444]/10 border-[#ef4444]/30"
  }
}

const getOverallMatchColor = (score: number) => {
  if (score >= 90) return "text-[#22c55e]"
  if (score >= 80) return "text-[#84cc16]"
  if (score >= 70) return "text-[#eab308]"
  return "text-[#ef4444]"
}

const getOverallMatchBg = (score: number) => {
  if (score >= 90) return "from-[#22c55e] to-[#16a34a]"
  if (score >= 80) return "from-[#84cc16] to-[#65a30d]"
  if (score >= 70) return "from-[#eab308] to-[#ca8a04]"
  return "from-[#ef4444] to-[#dc2626]"
}

const getImportanceBadge = (importance: "critical" | "important" | "nice-to-have") => {
  switch (importance) {
    case "critical":
      return { text: "Critical", colour: "bg-[#ef4444] text-white" }
    case "important":
      return { text: "Important", colour: "bg-[#eab308] text-white" }
    case "nice-to-have":
      return { text: "Nice to Have", colour: "bg-[#4F6F52] text-white" }
  }
}

export function UserNeedMatchScore({
  userName = "Margaret",
  userPriorities,
  homes,
  userNeeds,
}: UserNeedMatchScoreProps) {
  const priorities: UserPriority[] =
    userPriorities ??
    (userNeeds
      ? [
          {
            category: "Safety",
            importance:
              userNeeds.safetyPriority && userNeeds.safetyPriority >= 8
                ? "critical"
                : userNeeds.safetyPriority && userNeeds.safetyPriority >= 6
                  ? "important"
                  : "nice-to-have",
            weight: (userNeeds.safetyPriority ?? 5) * 4,
          },
          {
            category: "Medical Care",
            importance:
              userNeeds.medicalPriority && userNeeds.medicalPriority >= 8
                ? "critical"
                : userNeeds.medicalPriority && userNeeds.medicalPriority >= 6
                  ? "important"
                  : "nice-to-have",
            weight: (userNeeds.medicalPriority ?? 5) * 4,
          },
          { category: "Staff Quality", importance: "important", weight: 20 },
          {
            category: "Financial Stability",
            importance:
              userNeeds.budgetPriority && userNeeds.budgetPriority >= 8
                ? "critical"
                : userNeeds.budgetPriority && userNeeds.budgetPriority >= 6
                  ? "important"
                  : "nice-to-have",
            weight: (userNeeds.budgetPriority ?? 5) * 3,
          },
          {
            category: "Comfort",
            importance:
              userNeeds.comfortPriority && userNeeds.comfortPriority >= 8
                ? "critical"
                : userNeeds.comfortPriority && userNeeds.comfortPriority >= 6
                  ? "important"
                  : "nice-to-have",
            weight: (userNeeds.comfortPriority ?? 5) * 2,
          },
        ]
      : DEFAULT_PRIORITIES)

  const totalWeight = priorities.reduce((sum, p) => sum + p.weight, 0)
  const normalizedPriorities = priorities.map((p) => ({
    ...p,
    weight: Math.round((p.weight / totalWeight) * 100),
  }))

  const homesList = homes ?? DEFAULT_HOMES
  const transformedHomes: HomeMatch[] =
    homesList.length > 0
      ? homesList.map((home) => (isAllHomeFormat(home) ? transformToHomeMatch(home, normalizedPriorities) : home))
      : DEFAULT_HOMES

  const sortedHomes = [...transformedHomes].sort((a, b) => b.overallMatchScore - a.overallMatchScore).slice(0, 3)

  const topMatch = sortedHomes[0] ?? DEFAULT_HOMES[0]

  return (
    <div className="min-h-screen bg-[#FDFBF7] py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8 sm:mb-12 md:mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5 mb-4 sm:mb-6">
            <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-3xl bg-gradient-to-br from-[#4F6F52] to-[#3d5741] flex items-center justify-centre shadow-soft-xl">
              <Target className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 text-white" strokeWidth={2.5} />
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#1A231E] font-serif leading-tight">
                Your Personal Match Score
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-[#1A231E]/70 mt-2 sm:mt-3 font-sans leading-relaxed">
                How each home aligns with {userName}&apos;s specific needs and priorities
              </p>
            </div>
          </div>
        </div>

        {/* Your Priorities Summary */}
        <Card className="bg-white border border-[#E8E5DF] p-6 sm:p-8 mb-8 sm:mb-12 shadow-soft-lg rounded-3xl">
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <Sparkles className="w-6 h-6 text-[#4F6F52]" strokeWidth={2.5} />
            <h2 className="text-xl sm:text-2xl font-bold text-[#1A231E] font-serif">Your Priorities</h2>
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {normalizedPriorities.map((priority) => {
              const badge = getImportanceBadge(priority.importance)
              return (
                <div
                  key={priority.category}
                  className="flex items-center gap-2 bg-[#FDFBF7] rounded-xl px-3 sm:px-4 py-2 border border-[#E8E5DF]"
                >
                  <span className={`px-2 py-0.5 rounded-md text-xs font-semibold ${badge.colour}`}>{badge.text}</span>
                  <span className="text-sm sm:text-base font-medium text-[#1A231E]">{priority.category}</span>
                  <span className="text-xs sm:text-sm text-[#1A231E]/60">({priority.weight}%)</span>
                </div>
              )
            })}
          </div>
        </Card>

        {/* Match Score Cards */}
        <div className="space-y-6 sm:space-y-8 mb-8 sm:mb-12">
          {sortedHomes.map((home, index) => (
            <Card
              key={home.name}
              className={`bg-white border ${index === 0 ? "border-[#22c55e]/50" : "border-[#E8E5DF]"} p-6 sm:p-8 shadow-soft-lg rounded-3xl`}
            >
              {/* Home Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 sm:mb-8 pb-6 border-b border-[#E8E5DF]">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#4F6F52]/10 flex items-center justify-centre text-lg sm:text-xl font-bold text-[#4F6F52]">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1A231E] font-serif">{home.name}</h3>
                    {index === 0 && (
                      <span className="text-sm font-semibold text-[#22c55e]">Best Match for Your Needs</span>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <div className="text-xs sm:text-sm text-[#1A231E]/60 uppercase tracking-wide">Match Score</div>
                    <div className={`text-4xl sm:text-5xl font-bold ${getOverallMatchColor(home.overallMatchScore)}`}>
                      {home.overallMatchScore}%
                    </div>
                  </div>
                  <div
                    className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${getOverallMatchBg(home.overallMatchScore)} flex items-center justify-centre`}
                  >
                    <Target className="w-8 h-8 sm:w-10 sm:h-10 text-white" strokeWidth={2} />
                  </div>
                </div>
              </div>

              {/* Category Breakdown */}
              <div className="mb-6 sm:mb-8">
                <h4 className="text-base sm:text-lg font-bold text-[#1A231E] mb-4">Category Match Breakdown</h4>
                <div className="space-y-3">
                  {(home.categoryMatches ?? []).map((match) => (
                    <div key={match.category} className="flex items-center gap-3 sm:gap-4">
                      <div className="w-28 sm:w-36 text-sm sm:text-base font-medium text-[#1A231E]">
                        {match.category}
                      </div>
                      <div className="flex-1 h-6 sm:h-8 bg-[#E8E5DF] rounded-lg overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${getOverallMatchBg(match.score * 10)} transition-all duration-500`}
                          style={{ width: `${match.score * 10}%` }}
                        />
                      </div>
                      <div className="w-16 sm:w-20 text-right">
                        <span className="text-sm sm:text-base font-bold text-[#1A231E]">{match.score.toFixed(1)}</span>
                        <span className="text-xs sm:text-sm text-[#1A231E]/60">/10</span>
                      </div>
                      <div
                        className={`hidden sm:block px-2 py-1 rounded-md text-xs font-semibold border ${getMatchLevelColor(match.matchLevel)}`}
                      >
                        {match.matchLevel.charAt(0).toUpperCase() + match.matchLevel.slice(1)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Strengths & Concerns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="bg-[#22c55e]/5 rounded-2xl p-4 sm:p-6 border border-[#22c55e]/20">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle2 className="w-5 h-5 text-[#22c55e]" />
                    <span className="text-sm sm:text-base font-bold text-[#1A231E]">Matches Your Priorities</span>
                  </div>
                  <ul className="space-y-2">
                    {(home.topStrengths ?? []).map((strength, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-[#1A231E]/80">
                        <ArrowRight className="w-4 h-4 text-[#22c55e] flex-shrink-0 mt-0.5" />
                        {strength}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-[#eab308]/5 rounded-2xl p-4 sm:p-6 border border-[#eab308]/20">
                  <div className="flex items-center gap-2 mb-3">
                    <AlertCircle className="w-5 h-5 text-[#eab308]" />
                    <span className="text-sm sm:text-base font-bold text-[#1A231E]">Consider Further</span>
                  </div>
                  <ul className="space-y-2">
                    {(home.potentialConcerns ?? []).map((concern, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-[#1A231E]/80">
                        <ArrowRight className="w-4 h-4 text-[#eab308] flex-shrink-0 mt-0.5" />
                        {concern}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Expert Note */}
        <Card className="bg-gradient-to-br from-[#4F6F52] to-[#3d5741] border-none p-6 sm:p-8 md:p-10 shadow-soft-xl rounded-3xl">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/20 flex items-center justify-centre flex-shrink-0">
              <Target className="w-7 h-7 sm:w-8 sm:h-8 text-white" strokeWidth={2.5} />
            </div>
            <div className="min-w-0">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4 font-serif">
                How We Calculate Your Match Score
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-white/95 leading-relaxed font-sans">
                Your Match Score is personalised based on the priorities you set during your assessment. Categories you
                marked as &quot;Critical&quot; carry more weight than those marked &quot;Nice to Have&quot;. This means{" "}
                {topMatch.name}&apos;s {topMatch.overallMatchScore}% match reflects strong alignment with what matters
                most to you, not just overall quality ratings.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
