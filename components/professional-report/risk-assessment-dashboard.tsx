"use client"

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { AlertTriangle, CheckCircle, AlertCircle } from "lucide-react"

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
    cqcRating: string
    altmanZScore: number
    staffTurnover: string
    googleRating: number
    complaintRate: number
    safeguardingIncidents: number
    financialTrend: "improving" | "stable" | "declining"
    occupancyRate: string
    [key: string]: any
  }
}

interface RiskCategory {
  score: number
  concerns: string[]
  verdict: "Safe" | "Monitor" | "Concern"
}

interface RiskAssessmentData {
  home_name: string
  overall_risk: "Low" | "Medium" | "High"
  risk_categories: {
    regulatory: RiskCategory
    financial: RiskCategory
    operational: RiskCategory
    reputational: RiskCategory
  }
}

interface RiskAssessmentDashboardProps {
  homes: CareHome[]
}

function calculateRiskData(home: CareHome): RiskAssessmentData {
  // Regulatory Risk (based on CQC, safeguarding, complaints)
  const regulatoryScore = Math.round(
    home.categoryScores.safety * 0.6 +
      (10 - home.metrics.safeguardingIncidents) * 0.2 +
      (10 - home.metrics.complaintRate) * 0.2,
  )
  const regulatoryConcerns: string[] = []
  if (home.metrics.cqcRating === "Requires Improvement") {
    regulatoryConcerns.push("CQC rating requires improvement")
  }
  if (home.metrics.safeguardingIncidents > 2) {
    regulatoryConcerns.push(`${home.metrics.safeguardingIncidents} safeguarding incidents reported`)
  }
  if (home.metrics.complaintRate > 5) {
    regulatoryConcerns.push("Higher than average complaint rate")
  }

  // Financial Risk (based on Altman Z-Score, financial stability)
  const financialScore = Math.round(home.categoryScores.financialStability)
  const financialConcerns: string[] = []
  if (home.metrics.altmanZScore < 1.8) {
    financialConcerns.push("Altman Z-Score indicates financial distress risk")
  }
  if (home.metrics.financialTrend === "declining") {
    financialConcerns.push("Financial performance is declining")
  }
  const occupancy = Number.parseInt(home.metrics.occupancyRate)
  if (occupancy < 80) {
    financialConcerns.push(`Low occupancy rate: ${occupancy}%`)
  }

  // Operational Risk (based on staff quality, turnover)
  const operationalScore = Math.round(home.categoryScores.staffQuality)
  const operationalConcerns: string[] = []
  const turnover = Number.parseInt(home.metrics.staffTurnover)
  if (turnover > 30) {
    operationalConcerns.push(`High staff turnover: ${turnover}%`)
  }
  if (home.categoryScores.medicalCare < 7.0) {
    operationalConcerns.push("Medical care quality below excellent standard")
  }

  // Reputational Risk (based on reviews, family satisfaction)
  const reputationalScore = Math.round(home.categoryScores.communityReputation)
  const reputationalConcerns: string[] = []
  if (home.metrics.googleRating < 4.0) {
    reputationalConcerns.push(`Low Google rating: ${home.metrics.googleRating}/5`)
  }

  const getVerdict = (score: number): "Safe" | "Monitor" | "Concern" => {
    if (score >= 8.5) return "Safe"
    if (score >= 7.0) return "Monitor"
    return "Concern"
  }

  // Calculate overall risk
  const avgRiskScore = (regulatoryScore + financialScore + operationalScore + reputationalScore) / 4
  const overall_risk: "Low" | "Medium" | "High" = avgRiskScore >= 8.5 ? "Low" : avgRiskScore >= 7.0 ? "Medium" : "High"

  return {
    home_name: home.name,
    overall_risk,
    risk_categories: {
      regulatory: {
        score: regulatoryScore,
        concerns: regulatoryConcerns,
        verdict: getVerdict(regulatoryScore),
      },
      financial: {
        score: financialScore,
        concerns: financialConcerns,
        verdict: getVerdict(financialScore),
      },
      operational: {
        score: operationalScore,
        concerns: operationalConcerns,
        verdict: getVerdict(operationalScore),
      },
      reputational: {
        score: reputationalScore,
        concerns: reputationalConcerns,
        verdict: getVerdict(reputationalScore),
      },
    },
  }
}

function RiskIcon({ verdict }: { verdict: "Safe" | "Monitor" | "Concern" }) {
  if (verdict === "Safe") {
    return <CheckCircle className="h-12 w-12 text-green-600" />
  }
  if (verdict === "Monitor") {
    return <AlertCircle className="h-12 w-12 text-amber-600" />
  }
  return <AlertTriangle className="h-12 w-12 text-red-600" />
}

function RiskCategoryCard({
  title,
  category,
}: {
  title: string
  category: RiskCategory
}) {
  const bgColor =
    category.verdict === "Safe" ? "bg-green-50" : category.verdict === "Monitor" ? "bg-amber-50" : "bg-red-50"

  const borderColor =
    category.verdict === "Safe"
      ? "border-green-200"
      : category.verdict === "Monitor"
        ? "border-amber-200"
        : "border-red-200"

  return (
    <Card className={`p-6 ${bgColor} ${borderColor} border-2`}>
      <div className="flex items-start gap-4">
        <RiskIcon verdict={category.verdict} />
        <div className="flex-1 space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-foreground">{title}</h3>
            <Badge
              variant={
                category.verdict === "Safe" ? "default" : category.verdict === "Monitor" ? "secondary" : "destructive"
              }
              className="text-base px-4 py-1"
            >
              {category.verdict}
            </Badge>
          </div>

          <div className="text-lg font-medium text-muted-foreground">Risk Score: {category.score}/10</div>

          {category.concerns.length > 0 ? (
            <div className="space-y-2">
              <p className="text-base font-medium text-foreground">Concerns identified:</p>
              <ul className="space-y-1.5">
                {category.concerns.map((concern, idx) => (
                  <li key={idx} className="text-base text-muted-foreground flex items-start gap-2">
                    <span className="text-red-600 mt-1">•</span>
                    <span>{concern}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p className="text-base text-muted-foreground">No significant concerns identified in this category.</p>
          )}
        </div>
      </div>
    </Card>
  )
}

export function RiskAssessmentDashboard({ homes }: RiskAssessmentDashboardProps) {
  const topHomes = homes.sort((a, b) => b.overallScore - a.overallScore).slice(0, 3)

  return (
    <div className="space-y-12 px-4 sm:px-6 lg:px-8">
      <div className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground">Risk Assessment Dashboard</h1>
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
          This assessment evaluates potential risks across four critical categories for your top three care home
          recommendations. We analyse regulatory compliance, financial stability, operational quality, and community
          reputation to help you make an informed decision.
        </p>
      </div>

      <div className="space-y-3 bg-blue-50 border-2 border-blue-200 rounded-lg p-4 md:p-6">
        <h2 className="text-lg md:text-xl font-semibold text-foreground flex items-center gap-2">
          <AlertCircle className="h-5 w-5 md:h-6 md:w-6 text-blue-600" />
          Understanding Risk Levels
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm md:text-base">
          <div className="flex items-start gap-3">
            <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-foreground">Safe (8.5-10)</p>
              <p className="text-muted-foreground">No significant concerns identified</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <AlertCircle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-foreground">Monitor (7.0-8.4)</p>
              <p className="text-muted-foreground">Minor concerns, verify during visit</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-foreground">Concern (&lt;7.0)</p>
              <p className="text-muted-foreground">Significant issues require investigation</p>
            </div>
          </div>
        </div>
      </div>

      {topHomes.map((home, homeIdx) => {
        const riskData = calculateRiskData(home)

        return (
          <div key={homeIdx} className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b-2 border-border pb-4">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">{riskData.home_name}</h2>
                <p className="text-base md:text-lg text-muted-foreground mt-1">
                  Overall Match Score: {Math.round(home.overallScore * 10)}/100
                </p>
              </div>
              <Badge
                variant={
                  riskData.overall_risk === "Low"
                    ? "default"
                    : riskData.overall_risk === "Medium"
                      ? "secondary"
                      : "destructive"
                }
                className="text-lg md:text-xl px-4 md:px-6 py-2 self-start sm:self-auto"
              >
                {riskData.overall_risk} Risk
              </Badge>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <RiskCategoryCard title="Regulatory & Safety" category={riskData.risk_categories.regulatory} />
              <RiskCategoryCard title="Financial Stability" category={riskData.risk_categories.financial} />
              <RiskCategoryCard title="Operational Quality" category={riskData.risk_categories.operational} />
              <RiskCategoryCard title="Community Reputation" category={riskData.risk_categories.reputational} />
            </div>
          </div>
        )
      })}

      <div className="bg-muted rounded-lg p-6 space-y-3">
        <h3 className="text-xl font-semibold text-foreground">What to do next</h3>
        <ul className="space-y-2 text-base text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold mt-1">1.</span>
            <span>For homes marked "Safe", proceed with confidence to arrange visits</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold mt-1">2.</span>
            <span>For homes marked "Monitor", prepare specific questions about flagged concerns during your visit</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold mt-1">3.</span>
            <span>For homes marked "Concern", seek clarification from the care home management before proceeding</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
