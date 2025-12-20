"use client"

import type React from "react"

import {
  BarChart3,
  HelpCircle,
  Calculator,
  Target,
  TrendingUp,
  Shield,
  Heart,
  Users,
  PoundSterling,
  Home,
} from "lucide-react"

interface ScoreCategory {
  name: string
  icon: React.ReactNode
  weight: string
  description: string
  metrics: string[]
  interpretation: {
    excellent: string
    good: string
    fair: string
    poor: string
  }
}

interface AppendixUnderstandingScoresProps {
  pageNumber?: number
}

const categories: ScoreCategory[] = [
  {
    name: "Safety & Compliance",
    icon: <Shield className="w-5 h-5" />,
    weight: "30%",
    description: "Measures regulatory compliance, inspection history, and incident records from CQC and FSA.",
    metrics: [
      "CQC Overall Rating",
      "CQC Safe Domain Score",
      "Enforcement Actions (3 years)",
      "FSA Food Hygiene Rating",
      "Falls per Resident (annual)",
      "Safeguarding Alerts",
      "Fire Safety Compliance",
    ],
    interpretation: {
      excellent: "9-10: Outstanding CQC rating, zero enforcement actions, FSA 5 rating, below-average incident rates",
      good: "7-8: Good CQC rating, no recent concerns, FSA 4-5 rating, average incident rates",
      fair: "5-6: Requires Improvement rating or recent minor concerns, some areas need attention",
      poor: "Below 5: Inadequate rating, enforcement actions, or significant safety concerns",
    },
  },
  {
    name: "Medical Care & Specialisation",
    icon: <Heart className="w-5 h-5" />,
    weight: "25%",
    description: "Evaluates clinical capabilities, nursing ratios, and specialist care provisions.",
    metrics: [
      "CQC Effective Domain Score",
      "Registered Nurses per 10 Beds",
      "Medication Error Rate",
      "GP Visit Frequency",
      "Dementia Care Accreditation",
      "End-of-Life Care Rating",
      "Hospital Admission Rate",
    ],
    interpretation: {
      excellent:
        "9-10: Outstanding clinical care, high nurse ratios, specialist accreditations, low hospital admissions",
      good: "7-8: Good clinical standards, adequate staffing, regular GP access",
      fair: "5-6: Basic medical provision, some gaps in specialist care or staffing",
      poor: "Below 5: Concerns about medical care quality or staffing levels",
    },
  },
  {
    name: "Staff Quality & Stability",
    icon: <Users className="w-5 h-5" />,
    weight: "20%",
    description: "Assesses workforce stability, training levels, and employee satisfaction.",
    metrics: [
      "CQC Caring Domain Score",
      "Annual Staff Turnover Rate",
      "Training Completion Rate",
      "Care Staff per 10 Residents",
      "Employee Satisfaction (Glassdoor)",
      "Agency Staff Usage",
      "Management Stability",
    ],
    interpretation: {
      excellent: "9-10: Very low turnover (<15%), high training completion (>95%), excellent employee reviews",
      good: "7-8: Below-average turnover, good training compliance, positive workplace culture",
      fair: "5-6: Average turnover, basic training compliance, mixed employee feedback",
      poor: "Below 5: High turnover (>35%), training gaps, negative employee reviews",
    },
  },
  {
    name: "Financial Stability",
    icon: <PoundSterling className="w-5 h-5" />,
    weight: "15%",
    description: "Analyses company financial health using audited accounts from Companies House.",
    metrics: [
      "Altman Z-Score",
      "Annual Revenue Trend",
      "Net Profit Margin",
      "Current Ratio (Liquidity)",
      "Debt-to-Equity Ratio",
      "Years in Operation",
      "Parent Company Health",
    ],
    interpretation: {
      excellent: "9-10: Z-Score >3.0 (Safe Zone), healthy margins, strong liquidity, low debt",
      good: "7-8: Z-Score 2.5-3.0, stable financials, adequate reserves",
      fair: "5-6: Z-Score 1.8-2.5 (Grey Zone), some financial pressure but viable",
      poor: "Below 5: Z-Score <1.8 (Distress Zone), concerning financial indicators",
    },
  },
  {
    name: "Comfort & Environment",
    icon: <Home className="w-5 h-5" />,
    weight: "10%",
    description: "Evaluates living conditions, facilities, and quality of life factors.",
    metrics: [
      "CQC Responsive Domain Score",
      "Private Room Availability",
      "Ensuite Bathroom Provision",
      "Activity Programme Hours",
      "Garden Access",
      "Walk Score",
      "Noise Level Assessment",
    ],
    interpretation: {
      excellent: "9-10: 100% private rooms with ensuite, extensive activities, excellent location amenities",
      good: "7-8: Mostly private rooms, good activity programme, pleasant environment",
      fair: "5-6: Mixed accommodation, basic activities, adequate facilities",
      poor: "Below 5: Limited private rooms, minimal activities, poor environment",
    },
  },
]

export function AppendixUnderstandingScores({ pageNumber = 2 }: AppendixUnderstandingScoresProps) {
  return (
    <div className="w-full bg-white p-6 md:p-10 font-sans">
      {/* Header */}
      <div className="flex items-center justify-between mb-8 pb-4 border-b-2 border-[#1A231E]/10">
        <div className="flex items-center gap-3">
          <BarChart3 className="w-6 h-6 text-[#4F6F52]" />
          <h1 className="text-2xl font-bold text-[#1A231E]">Appendix B: Understanding Your Scores</h1>
        </div>
        <div className="text-sm text-[#1A231E]/50">Page A-{pageNumber}</div>
      </div>

      {/* Introduction */}
      <section className="mb-10">
        <p className="text-lg text-[#1A231E] leading-relaxed mb-6">
          Each care home in this report receives an <strong>Overall Score (0-10)</strong> calculated from five weighted
          categories. This guide explains what each score means and how to interpret the results.
        </p>

        {/* Overall Score Scale */}
        <div className="bg-[#F8F9FA] rounded-xl p-6 border border-[#E8E5DF] mb-8">
          <h3 className="text-lg font-bold text-[#1A231E] mb-4 flex items-center gap-2">
            <Target className="w-5 h-5 text-[#4F6F52]" />
            Overall Score Interpretation
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-centre p-4 bg-[#4F6F52]/10 rounded-lg border border-[#4F6F52]/20">
              <div className="text-2xl font-black text-[#4F6F52]">9-10</div>
              <div className="text-sm font-semibold text-[#4F6F52]">Excellent</div>
              <div className="text-xs text-[#5A6D7A] mt-1">Top tier, exceptional quality</div>
            </div>
            <div className="text-centre p-4 bg-[#2C5F8D]/10 rounded-lg border border-[#2C5F8D]/20">
              <div className="text-2xl font-black text-[#2C5F8D]">7-8</div>
              <div className="text-sm font-semibold text-[#2C5F8D]">Good</div>
              <div className="text-xs text-[#5A6D7A] mt-1">Above average, reliable choice</div>
            </div>
            <div className="text-centre p-4 bg-[#C88D79]/10 rounded-lg border border-[#C88D79]/20">
              <div className="text-2xl font-black text-[#C88D79]">5-6</div>
              <div className="text-sm font-semibold text-[#C88D79]">Fair</div>
              <div className="text-xs text-[#5A6D7A] mt-1">Average, some concerns</div>
            </div>
            <div className="text-centre p-4 bg-[#E63946]/10 rounded-lg border border-[#E63946]/20">
              <div className="text-2xl font-black text-[#E63946]">Below 5</div>
              <div className="text-sm font-semibold text-[#E63946]">Poor</div>
              <div className="text-xs text-[#5A6D7A] mt-1">Significant concerns</div>
            </div>
          </div>
        </div>

        {/* Weighting Explanation */}
        <div className="bg-[#F8F9FA] rounded-xl p-6 border border-[#E8E5DF]">
          <h3 className="text-lg font-bold text-[#1A231E] mb-4 flex items-center gap-2">
            <Calculator className="w-5 h-5 text-[#4F6F52]" />
            How Weights Are Applied
          </h3>
          <p className="text-base text-[#1A231E] leading-relaxed mb-4">
            The base weights shown below may be adjusted based on your assessment responses. For example, if you
            indicated high medical needs, the Medical Care weight increases whilst others decrease proportionally.
          </p>
          <div className="flex flex-wrap gap-3">
            {categories.map((cat, idx) => (
              <div key={idx} className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-[#E8E5DF]">
                <span className="text-[#4F6F52]">{cat.icon}</span>
                <span className="text-sm font-medium text-[#1A231E]">{cat.name}</span>
                <span className="text-sm font-bold text-[#4F6F52]">{cat.weight}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Details */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-[#1A231E] mb-6">Category Breakdown</h2>

        <div className="space-y-6">
          {categories.map((category, idx) => (
            <div key={idx} className="bg-[#F8F9FA] rounded-xl p-6 border border-[#E8E5DF]">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#4F6F52]/10 flex items-center justify-centre text-[#4F6F52]">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#1A231E]">{category.name}</h3>
                    <p className="text-sm text-[#5A6D7A]">{category.description}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-black text-[#4F6F52]">{category.weight}</div>
                  <div className="text-xs text-[#5A6D7A]">base weight</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Metrics */}
                <div>
                  <h4 className="text-sm font-bold text-[#1A231E] mb-2 flex items-center gap-1">
                    <TrendingUp className="w-4 h-4 text-[#4F6F52]" />
                    Key Metrics Included
                  </h4>
                  <ul className="space-y-1">
                    {category.metrics.map((metric, mIdx) => (
                      <li key={mIdx} className="text-sm text-[#5A6D7A] flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#4F6F52]"></span>
                        {metric}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Interpretation */}
                <div>
                  <h4 className="text-sm font-bold text-[#1A231E] mb-2 flex items-center gap-1">
                    <HelpCircle className="w-4 h-4 text-[#4F6F52]" />
                    Score Interpretation
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#4F6F52] mt-1.5 flex-shrink-0"></span>
                      <span className="text-[#5A6D7A]">{category.interpretation.excellent}</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#2C5F8D] mt-1.5 flex-shrink-0"></span>
                      <span className="text-[#5A6D7A]">{category.interpretation.good}</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#C88D79] mt-1.5 flex-shrink-0"></span>
                      <span className="text-[#5A6D7A]">{category.interpretation.fair}</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#E63946] mt-1.5 flex-shrink-0"></span>
                      <span className="text-[#5A6D7A]">{category.interpretation.poor}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Page Footer */}
      <div className="mt-10 pt-4 border-t border-[#E8E5DF] flex items-center justify-between text-xs text-[#5A6D7A]">
        <div>RightCareHome Professional Report</div>
        <div>Confidential</div>
      </div>
    </div>
  )
}
