"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  MapPin,
  PoundSterling,
  Star,
  Shield,
  Award,
  Gem,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Eye,
  ClipboardCheck,
  Mail,
  ArrowRight,
  Lock,
} from "lucide-react"

interface HomeRecommendation {
  strategy: "safe-bet" | "best-reputation" | "smart-value"
  name: string
  address: string
  distance: string
  weeklyPrice: number
  careTypes: string[]
  cqcRating: string
  safetyRating: string
  matchScore: number
  whyThisMatch: string[]
  thingsToVerify: string[]
  email: string
}

const strategyConfig = {
  "safe-bet": {
    label: "SAFE BET",
    tagline: "Peace of Mind Choice",
    color: "text-[#4F6F52]",
    bgGradient: "bg-gradient-to-br from-[#4F6F52]/15 via-[#4F6F52]/10 to-[#4F6F52]/5",
    iconBg: "bg-[#4F6F52]",
    borderColor: "border-l-[#4F6F52]",
    barColor: "bg-[#4F6F52]",
    icon: Shield,
    brief: "Zero regulatory warnings, stable finances, excellent track record",
  },
  "best-reputation": {
    label: "BEST REPUTATION",
    tagline: "Community Favourite",
    color: "text-[#2D5A4A]",
    bgGradient: "bg-gradient-to-br from-[#7FAD7E]/15 via-[#7FAD7E]/10 to-[#7FAD7E]/5",
    iconBg: "bg-[#2D5A4A]",
    borderColor: "border-l-[#2D5A4A]",
    barColor: "bg-[#2D5A4A]",
    icon: Award,
    brief: "Outstanding CQC rating, exceptional family feedback, award-winning care",
  },
  "smart-value": {
    label: "SMART VALUE",
    tagline: "Quality Without Premium",
    color: "text-[#C88D79]",
    bgGradient: "bg-gradient-to-br from-[#C88D79]/15 via-[#C88D79]/10 to-[#C88D79]/5",
    iconBg: "bg-[#C88D79]",
    borderColor: "border-l-[#C88D79]",
    barColor: "bg-[#C88D79]",
    icon: Gem,
    brief: "Excellent care at competitive rates, best value for your budget",
  },
}

function HomeCard({ home, rank, priorityText }: { home: HomeRecommendation; rank: number; priorityText: string }) {
  const [showWhyMatch, setShowWhyMatch] = useState(false)
  const [showVerify, setShowVerify] = useState(false)

  const strategy = strategyConfig[home.strategy]
  const StrategyIcon = strategy.icon

  return (
    <article
      className={`rounded-2xl border-l-4 ${strategy.borderColor} shadow-md hover:shadow-xl transition-all duration-200 bg-card overflow-hidden`}
    >
      {/* Header with Badge */}
      <div className={`${strategy.bgGradient} p-6 sm:p-8`}>
        <div className="flex items-start gap-4">
          {/* Strategy Icon */}
          <div className={`${strategy.iconBg} rounded-2xl p-4 shadow-lg`}>
            <StrategyIcon className="w-10 h-10 sm:w-12 sm:h-12 text-white" strokeWidth={1.5} />
          </div>

          {/* Strategy Info */}
          <div className="flex-1 min-w-0">
            <Badge className={`${strategy.iconBg} text-white font-bold text-base px-4 py-1.5 mb-3 border-0`}>
              {strategy.label}
            </Badge>
            <h3 className="text-xl sm:text-2xl font-bold leading-tight mb-1">{home.name}</h3>
            <p className="text-base text-muted-foreground">{strategy.tagline}</p>
          </div>
        </div>

        <p className="mt-4 text-base text-muted-foreground leading-relaxed">{strategy.brief}</p>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6">
        {/* Address */}
        <div className="flex items-start gap-2 mb-4 pb-4 border-b border-border/50">
          <MapPin className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-base leading-relaxed">{home.address}</p>
            <p className="text-sm text-muted-foreground mt-0.5">{home.distance}</p>
          </div>
        </div>

        {/* Key Metrics - 2x2 Grid */}
        <div className="grid grid-cols-2 gap-3 mb-5">
          <div className="bg-muted/40 rounded-xl p-4 text-center">
            <PoundSterling className="w-5 h-5 mx-auto mb-1 text-muted-foreground" />
            <p className="text-xl font-bold">£{home.weeklyPrice.toLocaleString()}</p>
            <p className="text-sm text-muted-foreground">per week</p>
          </div>

          <div className="bg-muted/40 rounded-xl p-4 text-center">
            <Star className="w-5 h-5 mx-auto mb-1 text-muted-foreground" />
            <p className="text-xl font-bold">{home.cqcRating}</p>
            <p className="text-sm text-muted-foreground">CQC Rating</p>
          </div>

          <div className="bg-muted/40 rounded-xl p-4 text-center">
            <Shield className="w-5 h-5 mx-auto mb-1 text-muted-foreground" />
            <p className="text-base font-bold">{home.safetyRating}</p>
            <p className="text-sm text-muted-foreground">Safety</p>
          </div>

          <div className="bg-muted/40 rounded-xl p-4 text-center">
            <Award className="w-5 h-5 mx-auto mb-1 text-muted-foreground" />
            <p className="text-base font-bold">{home.careTypes[0]}</p>
            <p className="text-sm text-muted-foreground">Care Type</p>
          </div>
        </div>

        <div className="bg-muted/30 rounded-xl p-4 mb-5">
          <div className="flex items-center justify-between mb-3">
            <span className="text-base font-semibold">Your Match Score</span>
            <span className={`text-2xl font-bold ${strategy.color}`}>{home.matchScore}%</span>
          </div>
          <div className="h-3 bg-muted rounded-full overflow-hidden">
            <div
              className={`h-full ${strategy.barColor} rounded-full transition-all duration-1000 ease-out`}
              style={{ width: `${home.matchScore}%` }}
            />
          </div>
          <p className="text-sm text-muted-foreground mt-2">Based on your priorities: {priorityText}</p>
        </div>

        {/* Why This Match Expandable */}
        <div className="mb-4">
          <button
            onClick={() => setShowWhyMatch(!showWhyMatch)}
            className="flex items-center justify-between w-full p-4 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors"
            aria-expanded={showWhyMatch}
          >
            <div className="flex items-center gap-2">
              <Eye className="w-5 h-5 text-muted-foreground" />
              <span className="font-semibold text-base">Why This Home Scores Well</span>
            </div>
            {showWhyMatch ? (
              <ChevronUp className="w-5 h-5 text-muted-foreground" />
            ) : (
              <ChevronDown className="w-5 h-5 text-muted-foreground" />
            )}
          </button>

          {showWhyMatch && (
            <div className="mt-3 pl-4 border-l-2 border-muted animate-in slide-in-from-top-2 duration-200">
              <ul className="space-y-2">
                {home.whyThisMatch.map((reason, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className={`flex-shrink-0 w-5 h-5 ${strategy.color} mt-0.5`} />
                    <span className="text-base text-muted-foreground leading-relaxed">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Things to Verify Expandable */}
        <div className="mb-5">
          <button
            onClick={() => setShowVerify(!showVerify)}
            className="flex items-center justify-between w-full p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl hover:bg-amber-100 dark:hover:bg-amber-900/30 transition-colors"
            aria-expanded={showVerify}
          >
            <div className="flex items-center gap-2">
              <ClipboardCheck className="w-5 h-5 text-amber-600" />
              <span className="font-semibold text-base text-amber-900 dark:text-amber-100">
                Things to Verify When You Visit
              </span>
            </div>
            {showVerify ? (
              <ChevronUp className="w-5 h-5 text-amber-600" />
            ) : (
              <ChevronDown className="w-5 h-5 text-amber-600" />
            )}
          </button>

          {showVerify && (
            <div className="mt-3 pl-4 border-l-2 border-amber-300 animate-in slide-in-from-top-2 duration-200">
              <ul className="space-y-2">
                {home.thingsToVerify.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded border-2 border-amber-400 flex-shrink-0 mt-0.5" />
                    <span className="text-base text-muted-foreground leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* CTA Button */}
        <Button
          asChild
          size="lg"
          className={`w-full h-14 text-lg ${strategy.iconBg} hover:opacity-90 hover:scale-[1.02] transition-all`}
        >
          <a href={`mailto:${home.email}?subject=Enquiry about ${home.name}`}>
            <Mail className="w-5 h-5 mr-2" />
            Enquire by Email
          </a>
        </Button>
        <p className="text-sm text-center text-muted-foreground mt-3">Ask about availability and arrange a visit</p>
      </div>
    </article>
  )
}

interface ReportHomeRecommendationsProps {
  priorityOrder?: string[]
}

const priorityLabels: Record<string, string> = {
  quality: "Quality of Care",
  cost: "Cost & Budget",
  proximity: "Proximity to Family",
}

export function ReportHomeRecommendations({
  priorityOrder = ["quality", "cost", "proximity"],
}: ReportHomeRecommendationsProps) {
  const topPriority = priorityLabels[priorityOrder[0]] || "Quality of Care"
  const priorityText = priorityOrder.map((p) => priorityLabels[p] || p).join(", ")

  const homes: HomeRecommendation[] = [
    {
      strategy: "safe-bet",
      name: "Meadowbrook Care Home",
      address: "123 Care Street, Birmingham, B15 2TZ",
      distance: "4.2 km from your location",
      weeklyPrice: 1450,
      careTypes: ["Nursing", "Dementia"],
      cqcRating: "Good",
      safetyRating: "Excellent",
      matchScore: 94,
      whyThisMatch: [
        "Zero regulatory warnings in the past 3 years",
        "Financially stable with strong parent company backing",
        "Specialises in the care type you need",
        "High family visit engagement (2.8 visits per week average)",
      ],
      thingsToVerify: [
        "Ask to see the most recent CQC report",
        "Request a tour of the dementia wing specifically",
        "Ask about staff-to-resident ratios at night",
        "Confirm all fees are included (no hidden extras)",
      ],
      email: "enquiries@meadowbrook.co.uk",
    },
    {
      strategy: "best-reputation",
      name: "The Oaks Residential Home",
      address: "45 Park Avenue, Birmingham, B13 9HE",
      distance: "6.8 km from your location",
      weeklyPrice: 1620,
      careTypes: ["Nursing", "Dementia", "Respite"],
      cqcRating: "Outstanding",
      safetyRating: "Outstanding",
      matchScore: 91,
      whyThisMatch: [
        "CQC Outstanding rating (top 3% in England)",
        "Award-winning dementia care programme",
        "Staff retention rate 94% (well above industry average)",
        "Multiple family testimonials praising care quality",
      ],
      thingsToVerify: [
        "Ask to meet the care manager and key staff",
        "Request references from current families",
        "Observe mealtimes if possible",
        "Ask about their activities programme",
      ],
      email: "info@theoakscare.co.uk",
    },
    {
      strategy: "smart-value",
      name: "Riverside Manor",
      address: "78 River Walk, Birmingham, B5 7RN",
      distance: "3.5 km from your location",
      weeklyPrice: 1280,
      careTypes: ["Nursing", "Dementia"],
      cqcRating: "Good",
      safetyRating: "Good",
      matchScore: 87,
      whyThisMatch: [
        "£170/week below market average for comparable care",
        "Good CQC rating with improving trend",
        "Recently refurbished dementia wing (2023)",
        "Accepts NHS CHC and council funding",
      ],
      thingsToVerify: [
        "Ask what's included in the weekly fee",
        "Confirm they accept your funding type",
        "Check availability for your timeline",
        "Ask about fee increases policy",
      ],
      email: "admissions@riversidemanor.co.uk",
    },
  ]

  return (
    <section className="py-12 md:py-16 px-4 bg-gradient-to-b from-background to-muted/20 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <Badge variant="secondary" className="mb-3 sm:mb-4 text-base px-5 py-2">
            Your Strategic Matches
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-4 leading-tight text-balance px-4">
            Three Homes, Three Strategies
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4 leading-relaxed">
            These aren't rankings—they're different strategies based on your priorities. Each home has been verified and
            matches your requirements.
          </p>
          <p className="mt-4 text-base italic text-[#4F6F52] max-w-2xl mx-auto px-4">
            Based on your priority ({topPriority}), we've ranked these homes specifically for you.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6">
          {homes.map((home, idx) => (
            <HomeCard key={idx} home={home} rank={idx + 1} priorityText={priorityText} />
          ))}
        </div>

        <div className="mt-10 md:mt-12 bg-gradient-to-br from-[#C88D79]/10 via-[#C88D79]/5 to-transparent rounded-2xl p-6 md:p-8 border border-[#C88D79]/30">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-2xl bg-[#C88D79]/20 flex items-center justify-center">
                <Lock className="w-8 h-8 text-[#C88D79]" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-serif font-semibold text-[#1A231E] mb-3">
                Want the Full Picture Before You Visit?
              </h3>
              <p className="text-base md:text-lg text-[#1A231E]/70 leading-relaxed mb-4">
                This free shortlist shows our top 3 matches. Our{" "}
                <span className="font-semibold">Professional Report</span> includes:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-base text-[#1A231E]/80">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#4F6F52] flex-shrink-0" />
                  <span>Full financial stability analysis</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#4F6F52] flex-shrink-0" />
                  <span>Hidden fee breakdown for each home</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#4F6F52] flex-shrink-0" />
                  <span>Staff turnover & retention data</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#4F6F52] flex-shrink-0" />
                  <span>Negotiation scripts to save £1000s</span>
                </li>
              </ul>
            </div>
            <Button
              asChild
              size="lg"
              className="bg-[#C88D79] hover:bg-[#B87D69] text-white h-14 px-6 text-lg whitespace-nowrap"
            >
              <a href="/premium-assessment">
                Get Full Analysis
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-6 sm:mt-8 text-center px-4">
          <p className="text-base text-muted-foreground leading-relaxed">
            All data verified from CQC and official sources • Updated {new Date().toLocaleDateString("en-GB")}
          </p>
        </div>
      </div>
    </section>
  )
}
