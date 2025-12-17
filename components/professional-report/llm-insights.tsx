"use client"

import { Brain, Sparkles, TrendingUp, AlertTriangle, CheckCircle2, Info } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface LLMInsight {
  category: "Recommendation" | "Caution" | "Opportunity" | "Consideration"
  title: string
  insight: string
  confidence: number
  actionable: boolean
  relatedSection?: string
}

interface LLMInsightsProps {
  recipientName: string
  topHome: string
  insights?: LLMInsight[]
}

const DEFAULT_INSIGHTS: LLMInsight[] = [
  {
    category: "Recommendation",
    title: "Prioritize Greenfield Manor for Dementia Specialization",
    insight:
      'Based on your assessment indicating dementia care needs, Greenfield Manor demonstrates the strongest capability with dedicated dementia units, specialized staff training (CQC rated "Outstanding" for Caring), and secure outdoor spaces designed for cognitive support. Their 12-year track record in dementia care significantly reduces transition risks.',
    confidence: 92,
    actionable: true,
    relatedSection: "CQC Deep Dive",
  },
  {
    category: "Caution",
    title: "Monitor Oakwood Lodge Financial Stability",
    insight:
      "While Oakwood Lodge offers competitive pricing, their Altman Z-Score of 2.1 indicates moderate financial stress. Companies House data shows declining profitability over 18 months. Consider requesting written assurance about continuity of care, or negotiate a break clause allowing relocation if ownership changes occur within 24 months.",
    confidence: 78,
    actionable: true,
    relatedSection: "Financial Stability Analysis",
  },
  {
    category: "Opportunity",
    title: "NHS CHC Funding Highly Probable",
    insight:
      "Your assessment responses indicate 72% probability for NHS Continuing Healthcare eligibility, potentially covering 100% of care costs. The cognitive impairment combined with mobility limitations meets primary health need criteria. Recommend applying immediately with GP support letter emphasizing unpredictable behavioral episodes and 24/7 supervision requirements.",
    confidence: 85,
    actionable: true,
    relatedSection: "Funding Integration",
  },
  {
    category: "Consideration",
    title: "Balance Cost vs. Specialized Care",
    insight:
      "Riverside Care Centre offers £280/week savings compared to Greenfield Manor, but lacks dedicated dementia expertise. For dementia residents, specialist environments typically reduce behavioral incidents by 40% and medication dependency by 30% according to Alzheimer's Society research. The cost premium for Greenfield Manor (£14,560/year) may be offset by reduced hospitalization risk and better quality of life outcomes.",
    confidence: 81,
    actionable: false,
    relatedSection: "Fair Cost Gap Analysis",
  },
  {
    category: "Recommendation",
    title: "Visit During Peak Activity Times",
    insight:
      "Google Places data shows Greenfield Manor has highest footfall Tuesday-Thursday 2-4pm, indicating active family engagement and activities program. Schedule your visit during these times to observe staff-resident interactions during busy periods, which reveals more about care quality than quiet morning visits.",
    confidence: 73,
    actionable: true,
    relatedSection: "Community Reputation",
  },
]

export function LLMInsights({ recipientName, topHome, insights = DEFAULT_INSIGHTS }: LLMInsightsProps) {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Recommendation":
        return CheckCircle2
      case "Caution":
        return AlertTriangle
      case "Opportunity":
        return TrendingUp
      case "Consideration":
        return Info
      default:
        return Sparkles
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Recommendation":
        return "bg-emerald-50 border-emerald-200 text-emerald-800"
      case "Caution":
        return "bg-amber-50 border-amber-200 text-amber-800"
      case "Opportunity":
        return "bg-blue-50 border-blue-200 text-blue-800"
      case "Consideration":
        return "bg-slate-50 border-slate-200 text-slate-800"
      default:
        return "bg-slate-50 border-slate-200 text-slate-800"
    }
  }

  return (
    <div className="bg-gradient-to-br from-[#FDFBF7] to-[#4F6F52]/5 py-8 md:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-[#4F6F52] to-[#3d5741] mb-4 md:mb-6">
            <Brain className="w-8 h-8 md:w-10 md:h-10 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-serif mb-4">AI-Powered Expert Insights</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Based on {recipientName ? `${recipientName}'s` : "your loved one's"} specific needs and our analysis of 200+
            data points, here are personalized recommendations to guide your decision
          </p>
        </div>

        {/* Confidence Note */}
        <div className="bg-white border-2 border-border rounded-xl md:rounded-2xl p-4 md:p-6 mb-6 md:mb-8">
          <div className="flex flex-col sm:flex-row sm:items-start gap-3 md:gap-4">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-base md:text-lg font-semibold text-foreground mb-2">How These Insights Work</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Our AI analyzes your assessment responses, care home data, and industry research to generate
                personalized recommendations. Each insight includes a confidence score based on data reliability and
                relevance to your situation. These complement—but don't replace—your own judgment and visits.
              </p>
            </div>
          </div>
        </div>

        {/* Insights List */}
        <div className="space-y-4 md:space-y-6">
          {insights.map((insight, index) => {
            const Icon = getCategoryIcon(insight.category)

            return (
              <div
                key={index}
                className="bg-white border-2 border-border rounded-xl md:rounded-2xl p-4 md:p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Header with Category and Confidence */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                  <div className="flex items-start gap-2 md:gap-3 flex-1">
                    <div
                      className={`w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${getCategoryColor(insight.category)}`}
                    >
                      <Icon className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <Badge
                        className={`${getCategoryColor(insight.category)} text-xs md:text-sm px-2 md:px-3 py-1 mb-2`}
                      >
                        {insight.category}
                      </Badge>
                      <h3 className="text-lg md:text-xl font-bold text-foreground leading-tight break-words">
                        {insight.title}
                      </h3>
                    </div>
                  </div>
                  <div className="flex flex-col items-start sm:items-end flex-shrink-0">
                    <div className="text-xs md:text-sm text-muted-foreground mb-1">Confidence</div>
                    <div className="text-xl md:text-2xl font-bold text-primary">{insight.confidence}%</div>
                  </div>
                </div>

                {/* Insight Text */}
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4 sm:pl-13 md:pl-15">
                  {insight.insight}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pl-15 pt-4 border-t border-border">
                  {insight.relatedSection && (
                    <div className="text-sm text-muted-foreground">
                      Related: <span className="font-medium text-foreground">{insight.relatedSection}</span>
                    </div>
                  )}
                  {insight.actionable && (
                    <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20">
                      Actionable Recommendation
                    </Badge>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Disclaimer */}
        <div className="mt-10 bg-slate-50 border border-slate-200 rounded-xl p-6">
          <p className="text-sm text-slate-600 leading-relaxed">
            <strong>Important:</strong> These AI-generated insights are based on available data and statistical
            analysis. They should be used alongside—not instead of—personal visits, conversations with care home staff,
            and professional advice from healthcare providers. Every situation is unique, and your own observations
            during visits remain the most important factor in your decision.
          </p>
        </div>
      </div>
    </div>
  )
}
