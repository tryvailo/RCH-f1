"use client"

import {
  Shield,
  Heart,
  Users,
  TrendingUp,
  Home,
  CheckCircle2,
  AlertTriangle,
  Info,
  ArrowRight,
  Clock,
  FileText,
} from "lucide-react"
import { Card } from "@/components/ui/card"

interface MetricDetail {
  name: string
  value: string | number
  benchmark: string
  status: "excellent" | "good" | "concern"
  explanation: string
}

interface VerificationItem {
  question: string
  why: string
  redFlag: string
}

interface DeepDiveHome {
  name: string
  score: number
  metrics: MetricDetail[]
  strengths: string[]
  concerns: string[]
  verificationItems: VerificationItem[]
}

interface CategoryDeepDiveReportProps {
  category: string
  icon: "shield" | "heart" | "users" | "trending-up" | "home"
  home: DeepDiveHome
}

const ICONS = {
  shield: Shield,
  heart: Heart,
  users: Users,
  "trending-up": TrendingUp,
  home: Home,
}

const getStatusColor = (status: "excellent" | "good" | "concern") => {
  switch (status) {
    case "excellent":
      return "text-[#22c55e] bg-[#22c55e]/10"
    case "good":
      return "text-[#eab308] bg-[#eab308]/10"
    case "concern":
      return "text-[#ef4444] bg-[#ef4444]/10"
  }
}

const getStatusBadge = (status: "excellent" | "good" | "concern") => {
  switch (status) {
    case "excellent":
      return { text: "Excellent", colour: "bg-[#22c55e] text-white" }
    case "good":
      return { text: "Good", colour: "bg-[#eab308] text-white" }
    case "concern":
      return { text: "Concern", colour: "bg-[#ef4444] text-white" }
  }
}

const SAMPLE_HOME: DeepDiveHome = {
  name: "Greenfield Manor",
  score: 9.5,
  metrics: [
    {
      name: "CQC Overall Rating",
      value: "Outstanding",
      benchmark: "Good or above",
      status: "excellent",
      explanation: "The highest possible CQC rating, achieved by only 4% of care homes nationally.",
    },
    {
      name: "Fall Incidents (per 100 residents/year)",
      value: 2.1,
      benchmark: "< 5.0",
      status: "excellent",
      explanation: "Significantly below the national average of 6.5, indicating excellent fall prevention protocols.",
    },
    {
      name: "Staff-to-Resident Ratio",
      value: "1:4",
      benchmark: "1:6 or better",
      status: "excellent",
      explanation: "Above industry standard, ensuring adequate supervision and personalised attention.",
    },
    {
      name: "Medication Error Rate",
      value: "0.3%",
      benchmark: "< 1.0%",
      status: "excellent",
      explanation: "Well below the acceptable threshold, demonstrating robust medication management.",
    },
    {
      name: "Emergency Response Time",
      value: "2.1 min",
      benchmark: "< 5 min",
      status: "excellent",
      explanation: "Fast response times reduce risk during medical emergencies.",
    },
  ],
  strengths: [
    "Outstanding CQC rating maintained for 3 consecutive inspections",
    "24/7 on-site nursing staff with specialist dementia training",
    "Advanced fall prevention technology including motion sensors",
    "Comprehensive infection control protocols exceeding NHS guidelines",
  ],
  concerns: ["No significant concerns identified in this category"],
  verificationItems: [
    {
      question: "Can I see your most recent CQC inspection report?",
      why: "Verifies the rating is current and identifies any areas for improvement noted by inspectors.",
      redFlag: "Reluctance to share or outdated reports (>18 months old).",
    },
    {
      question: "What is your staff-to-resident ratio during night shifts?",
      why: "Night staffing is often lower; ensure adequate coverage for emergencies.",
      redFlag: "Ratios worse than 1:8 or vague answers about night coverage.",
    },
    {
      question: "How do you handle medication management and what training do staff receive?",
      why: "Medication errors are a leading cause of adverse events in care homes.",
      redFlag: "No formal medication training programme or electronic medication system.",
    },
  ],
}

export function CategoryDeepDiveReport({
  category = "Safety",
  icon = "shield",
  home = SAMPLE_HOME,
}: CategoryDeepDiveReportProps) {
  const IconComponent = ICONS[icon]

  return (
    <div className="min-h-screen bg-[#FDFBF7] py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8 sm:mb-12 md:mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5 mb-4 sm:mb-6">
            <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-3xl bg-gradient-to-br from-[#4F6F52] to-[#3d5741] flex items-center justify-centre shadow-soft-xl">
              <IconComponent className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 text-white" strokeWidth={2.5} />
            </div>
            <div>
              <div className="text-sm sm:text-base font-semibold text-[#4F6F52] uppercase tracking-wide mb-1">
                Deep Dive Analysis
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A231E] font-serif leading-tight">
                {home.name}: {category}
              </h1>
              <p className="text-lg sm:text-xl text-[#1A231E]/70 mt-2 font-sans">
                Detailed breakdown of {category.toLowerCase()} metrics and verification guide
              </p>
            </div>
          </div>
        </div>

        {/* Score Summary */}
        <Card className="bg-white border-2 border-[#E8E5DF] p-6 sm:p-8 mb-8 sm:mb-12 shadow-soft-lg rounded-3xl">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <div className="text-sm font-semibold text-[#1A231E]/60 uppercase tracking-wide mb-1">
                {category} Score
              </div>
              <div className="text-4xl sm:text-5xl font-bold text-[#22c55e] font-serif">{home.score.toFixed(1)}/10</div>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-[#22c55e]" />
              <span className="text-lg sm:text-xl font-semibold text-[#22c55e]">Category Leader</span>
            </div>
          </div>
        </Card>

        {/* Detailed Metrics */}
        <Card className="bg-white border-2 border-[#E8E5DF] p-6 sm:p-8 md:p-10 mb-8 sm:mb-12 shadow-soft-lg rounded-3xl">
          <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <FileText className="w-6 h-6 sm:w-7 sm:h-7 text-[#4F6F52]" strokeWidth={2.5} />
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A231E] font-serif">Detailed Metrics</h2>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {home.metrics.map((metric, index) => {
              const badge = getStatusBadge(metric.status)
              return (
                <div
                  key={index}
                  className={`p-4 sm:p-6 rounded-2xl border-2 ${metric.status === "excellent" ? "border-[#22c55e]/30 bg-[#22c55e]/5" : metric.status === "good" ? "border-[#eab308]/30 bg-[#eab308]/5" : "border-[#ef4444]/30 bg-[#ef4444]/5"}`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-bold text-[#1A231E] mb-1">{metric.name}</h3>
                      <div className="flex items-center gap-2 text-sm text-[#1A231E]/60">
                        <span>Benchmark: {metric.benchmark}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-2xl sm:text-3xl font-bold text-[#1A231E]">{metric.value}</span>
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${badge.colour}`}>
                        {badge.text}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm sm:text-base text-[#1A231E]/70 leading-relaxed">{metric.explanation}</p>
                </div>
              )
            })}
          </div>
        </Card>

        {/* Strengths & Concerns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Strengths */}
          <Card className="bg-[#22c55e]/5 border-2 border-[#22c55e]/30 p-6 sm:p-8 shadow-soft-lg rounded-3xl">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <CheckCircle2 className="w-6 h-6 text-[#22c55e]" strokeWidth={2.5} />
              <h2 className="text-xl sm:text-2xl font-bold text-[#1A231E] font-serif">Strengths</h2>
            </div>
            <ul className="space-y-3">
              {home.strengths.map((strength, index) => (
                <li key={index} className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-[#22c55e] flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-[#1A231E]/80">{strength}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Concerns */}
          <Card className="bg-[#eab308]/5 border-2 border-[#eab308]/30 p-6 sm:p-8 shadow-soft-lg rounded-3xl">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <AlertTriangle className="w-6 h-6 text-[#eab308]" strokeWidth={2.5} />
              <h2 className="text-xl sm:text-2xl font-bold text-[#1A231E] font-serif">Areas to Verify</h2>
            </div>
            <ul className="space-y-3">
              {home.concerns.map((concern, index) => (
                <li key={index} className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-[#eab308] flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-[#1A231E]/80">{concern}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* Verification Guide */}
        <Card className="bg-white border-2 border-[#E8E5DF] p-6 sm:p-8 md:p-10 mb-8 sm:mb-12 shadow-soft-lg rounded-3xl">
          <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <Clock className="w-6 h-6 sm:w-7 sm:h-7 text-[#4F6F52]" strokeWidth={2.5} />
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A231E] font-serif">
              Questions to Ask During Your Visit
            </h2>
          </div>

          <div className="space-y-6">
            {home.verificationItems.map((item, index) => (
              <div key={index} className="border-b-2 border-[#E8E5DF] pb-6 last:border-0 last:pb-0">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-[#4F6F52] flex items-center justify-centre text-white font-bold text-sm flex-shrink-0">
                    {index + 1}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#1A231E]">"{item.question}"</h3>
                </div>
                <div className="ml-11 space-y-2">
                  <div className="flex items-start gap-2">
                    <Info className="w-4 h-4 text-[#4F6F52] flex-shrink-0 mt-1" />
                    <p className="text-sm sm:text-base text-[#1A231E]/70">
                      <strong>Why ask:</strong> {item.why}
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-[#ef4444] flex-shrink-0 mt-1" />
                    <p className="text-sm sm:text-base text-[#ef4444]/80">
                      <strong>Red flag:</strong> {item.redFlag}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Expert Note */}
        <Card className="bg-gradient-to-br from-[#4F6F52] to-[#3d5741] border-none p-6 sm:p-8 md:p-10 shadow-soft-xl rounded-3xl">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/20 flex items-center justify-centre flex-shrink-0">
              <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 text-white" strokeWidth={2.5} />
            </div>
            <div className="min-w-0">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4 font-serif">
                What This Data Means for {home.name}
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-white/95 leading-relaxed font-sans">
                {home.name} demonstrates exceptional {category.toLowerCase()} standards across all measured metrics. The
                combination of outstanding regulatory ratings, low incident rates, and above-average staffing levels
                indicates a genuine commitment to resident safety rather than mere compliance. During your visit, focus
                on verifying these metrics through observation and targeted questions to the management team.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
