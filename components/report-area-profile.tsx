"use client"

import {
  Users,
  PoundSterling,
  Percent,
  TrendingUp,
  ArrowRight,
  Info,
  TreePine,
  Footprints,
  Bus,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface AreaData {
  postcode: string
  localAuthority: string
  population65Plus: number
  population65PlusPercentage: number
  selfFundersPercentage: number
  averageWeeklyCost: number
  nationalAverageWeeklyCost: number
  careHomesInArea: number
}

interface WellbeingData {
  overallScore: number
  seniorPopulationScore: number
  greenSpaceScore: number
  walkabilityScore: number
  transportScore: number
}

interface ReportAreaProfileProps {
  areaData?: AreaData
  wellbeingData?: WellbeingData
}

const defaultAreaData: AreaData = {
  postcode: "B15 2TZ",
  localAuthority: "Birmingham",
  population65Plus: 187420,
  population65PlusPercentage: 16.4,
  selfFundersPercentage: 41,
  averageWeeklyCost: 1285,
  nationalAverageWeeklyCost: 1219,
  careHomesInArea: 127,
}

const defaultWellbeingData: WellbeingData = {
  overallScore: 72,
  seniorPopulationScore: 68,
  greenSpaceScore: 74,
  walkabilityScore: 71,
  transportScore: 76,
}

function getScoreColor(score: number): string {
  if (score >= 75) return "#27AE60" // Green - Excellent
  if (score >= 50) return "#F2994A" // Orange - Good
  return "#EB5757" // Red - Needs attention
}

function getScoreLabel(score: number): string {
  if (score >= 75) return "Excellent"
  if (score >= 60) return "Good"
  if (score >= 50) return "Fair"
  return "Below Average"
}

export function ReportAreaProfile({
  areaData = defaultAreaData,
  wellbeingData = defaultWellbeingData,
}: ReportAreaProfileProps) {
  const costDifference = areaData.averageWeeklyCost - areaData.nationalAverageWeeklyCost
  const costDifferencePercentage = ((costDifference / areaData.nationalAverageWeeklyCost) * 100).toFixed(1)
  const isAboveNational = costDifference > 0

  const scoreColor = getScoreColor(wellbeingData.overallScore)
  const scoreLabel = getScoreLabel(wellbeingData.overallScore)

  return (
    <section className="py-12 md:py-16 px-4 bg-gradient-to-br from-[#FDFBF7] via-white to-[#4F6F52]/5">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-12">
          <Badge variant="secondary" className="mb-4 text-base px-5 py-2 bg-[#4F6F52]/10 text-[#4F6F52] border-0">
            Page 3 of 10
          </Badge>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1A231E] mb-4 leading-tight">
            Your Area at a Glance
          </h2>
          <p className="text-lg md:text-xl text-[#1A231E]/70 max-w-2xl mx-auto leading-relaxed">
            Key statistics for <span className="font-semibold text-[#4F6F52]">{areaData.localAuthority}</span> (
            {areaData.postcode}) to help you understand your local care market.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 md:p-10 border border-[#E8E5DF] shadow-soft-lg mb-8">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Circular Progress Indicator */}
            <div className="relative flex-shrink-0">
              <svg className="w-48 h-48 md:w-56 md:h-56 transform -rotate-90" viewBox="0 0 120 120">
                {/* Background circle */}
                <circle cx="60" cy="60" r="52" fill="none" stroke="#E8E5DF" strokeWidth="12" />
                {/* Progress circle */}
                <circle
                  cx="60"
                  cy="60"
                  r="52"
                  fill="none"
                  stroke={scoreColor}
                  strokeWidth="12"
                  strokeLinecap="round"
                  strokeDasharray={`${(wellbeingData.overallScore / 100) * 327} 327`}
                  className="transition-all duration-1000"
                />
              </svg>
              {/* Score in center */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-5xl md:text-6xl font-bold" style={{ color: scoreColor }}>
                  {wellbeingData.overallScore}
                </span>
                <span className="text-base md:text-lg text-[#1A231E]/60 font-medium">out of 100</span>
              </div>
            </div>

            {/* Index Description and Breakdown */}
            <div className="flex-1 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-3">
                <Sparkles className="w-6 h-6 text-[#4F6F52]" />
                <h3 className="text-2xl md:text-3xl font-serif font-semibold text-[#1A231E]">Well-being Index</h3>
              </div>
              <p className="text-xl md:text-2xl font-semibold mb-4" style={{ color: scoreColor }}>
                {scoreLabel} for Senior Living
              </p>
              <p className="text-base md:text-lg text-[#1A231E]/70 leading-relaxed mb-6">
                This unique index combines ONS demographics, green space coverage, pedestrian infrastructure, and public
                transport accessibility to give you one clear number for quality of life in this area.
              </p>

              {/* Component Breakdown */}
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div className="bg-[#FDFBF7] rounded-xl p-3 md:p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <Users className="w-4 h-4 text-[#4F6F52]" />
                    <span className="text-sm text-[#1A231E]/60">65+ Community</span>
                  </div>
                  <span
                    className="text-xl md:text-2xl font-bold"
                    style={{ color: getScoreColor(wellbeingData.seniorPopulationScore) }}
                  >
                    {wellbeingData.seniorPopulationScore}/100
                  </span>
                </div>
                <div className="bg-[#FDFBF7] rounded-xl p-3 md:p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <TreePine className="w-4 h-4 text-[#4F6F52]" />
                    <span className="text-sm text-[#1A231E]/60">Green Spaces</span>
                  </div>
                  <span
                    className="text-xl md:text-2xl font-bold"
                    style={{ color: getScoreColor(wellbeingData.greenSpaceScore) }}
                  >
                    {wellbeingData.greenSpaceScore}/100
                  </span>
                </div>
                <div className="bg-[#FDFBF7] rounded-xl p-3 md:p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <Footprints className="w-4 h-4 text-[#4F6F52]" />
                    <span className="text-sm text-[#1A231E]/60">Walkability</span>
                  </div>
                  <span
                    className="text-xl md:text-2xl font-bold"
                    style={{ color: getScoreColor(wellbeingData.walkabilityScore) }}
                  >
                    {wellbeingData.walkabilityScore}/100
                  </span>
                </div>
                <div className="bg-[#FDFBF7] rounded-xl p-3 md:p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <Bus className="w-4 h-4 text-[#4F6F52]" />
                    <span className="text-sm text-[#1A231E]/60">Transport Links</span>
                  </div>
                  <span
                    className="text-xl md:text-2xl font-bold"
                    style={{ color: getScoreColor(wellbeingData.transportScore) }}
                  >
                    {wellbeingData.transportScore}/100
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Three Main Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
          {/* 65+ Population Card */}
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-[#E8E5DF] shadow-soft-md hover:shadow-soft-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-[#4F6F52]/10 flex items-center justify-center">
                <Users className="w-7 h-7 text-[#4F6F52]" />
              </div>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Info className="w-4 h-4 text-[#1A231E]/40 hover:text-[#1A231E]/60 transition-colors" />
                  </TooltipTrigger>
                  <TooltipContent className="max-w-xs">
                    <p className="text-sm">
                      Data from ONS Census 2021, representing residents aged 65 and over in {areaData.localAuthority}.
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium text-[#1A231E]/60 uppercase tracking-wide">65+ Population</p>
              <p className="text-3xl md:text-4xl font-bold text-[#1A231E]">
                {areaData.population65Plus.toLocaleString()}
              </p>
              <p className="text-base text-[#1A231E]/70">
                <span className="font-semibold text-[#4F6F52]">{areaData.population65PlusPercentage}%</span> of total
                population
              </p>
            </div>
          </div>

          {/* Self-Funders Card */}
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-[#E8E5DF] shadow-soft-md hover:shadow-soft-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-[#C88D79]/10 flex items-center justify-center">
                <Percent className="w-7 h-7 text-[#C88D79]" />
              </div>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Info className="w-4 h-4 text-[#1A231E]/40 hover:text-[#1A231E]/60 transition-colors" />
                  </TooltipTrigger>
                  <TooltipContent className="max-w-xs">
                    <p className="text-sm">
                      Percentage of care home residents who pay for their own care without local authority support.
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium text-[#1A231E]/60 uppercase tracking-wide">Self-Funders</p>
              <p className="text-3xl md:text-4xl font-bold text-[#1A231E]">{areaData.selfFundersPercentage}%</p>
              <p className="text-base text-[#1A231E]/70">pay privately in this area</p>
            </div>
          </div>

          {/* Average Care Cost Card */}
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-[#E8E5DF] shadow-soft-md hover:shadow-soft-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-[#4F6F52]/10 flex items-center justify-center">
                <PoundSterling className="w-7 h-7 text-[#4F6F52]" />
              </div>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Info className="w-4 h-4 text-[#1A231E]/40 hover:text-[#1A231E]/60 transition-colors" />
                  </TooltipTrigger>
                  <TooltipContent className="max-w-xs">
                    <p className="text-sm">
                      Average weekly cost for residential care in {areaData.localAuthority}. Nursing care typically
                      costs £200-400 more per week.
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium text-[#1A231E]/60 uppercase tracking-wide">Average Care Cost</p>
              <p className="text-3xl md:text-4xl font-bold text-[#1A231E]">
                £{areaData.averageWeeklyCost.toLocaleString()}
              </p>
              <p className="text-base text-[#1A231E]/70">per week</p>
            </div>
          </div>
        </div>

        {/* Cost Comparison Bar */}
        <div className="bg-white rounded-2xl p-6 md:p-8 border border-[#E8E5DF] shadow-soft-md mb-8">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-[#4F6F52]" />
            <h3 className="text-lg font-semibold text-[#1A231E]">How Your Area Compares</h3>
          </div>

          <div className="space-y-4">
            {/* Your Area Bar */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-base font-medium text-[#1A231E]">{areaData.localAuthority}</span>
                <span className="text-base font-bold text-[#1A231E]">£{areaData.averageWeeklyCost}/week</span>
              </div>
              <div className="h-4 bg-[#E8E5DF] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#4F6F52] rounded-full transition-all duration-1000"
                  style={{ width: `${Math.min((areaData.averageWeeklyCost / 1800) * 100, 100)}%` }}
                />
              </div>
            </div>

            {/* National Average Bar */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-base text-[#1A231E]/70">National Average</span>
                <span className="text-base text-[#1A231E]/70">£{areaData.nationalAverageWeeklyCost}/week</span>
              </div>
              <div className="h-4 bg-[#E8E5DF] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#1A231E]/30 rounded-full transition-all duration-1000"
                  style={{ width: `${Math.min((areaData.nationalAverageWeeklyCost / 1800) * 100, 100)}%` }}
                />
              </div>
            </div>
          </div>

          {/* Difference Callout */}
          <div className={`mt-6 p-4 rounded-xl ${isAboveNational ? "bg-[#C88D79]/10" : "bg-[#4F6F52]/10"}`}>
            <p className="text-base text-[#1A231E]/80">
              {isAboveNational ? (
                <>
                  Your area is{" "}
                  <span className="font-bold text-[#C88D79]">
                    £{Math.abs(costDifference)}/week ({costDifferencePercentage}%)
                  </span>{" "}
                  above the national average. This means choosing the right home could save you significant money.
                </>
              ) : (
                <>
                  Your area is{" "}
                  <span className="font-bold text-[#4F6F52]">
                    £{Math.abs(costDifference)}/week ({Math.abs(Number(costDifferencePercentage))}%)
                  </span>{" "}
                  below the national average. You have access to competitively priced care options.
                </>
              )}
            </p>
          </div>
        </div>

        {/* Care Homes Count */}
        <div className="bg-gradient-to-br from-[#4F6F52]/5 to-[#4F6F52]/10 rounded-2xl p-6 md:p-8 border border-[#4F6F52]/20 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-lg text-[#1A231E]/70 mb-1">Care homes within 10 miles of {areaData.postcode}</p>
              <p className="text-4xl md:text-5xl font-bold text-[#4F6F52]">{areaData.careHomesInArea} homes</p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-base text-[#1A231E]/60">We've analysed all of them</p>
              <p className="text-base text-[#1A231E]/60">to find your best matches</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#C88D79]/10 via-[#C88D79]/5 to-transparent rounded-2xl p-6 md:p-8 border border-[#C88D79]/30">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-serif font-semibold text-[#1A231E] mb-3">
                See the Well-being Score for Each Home
              </h3>
              <p className="text-base md:text-lg text-[#1A231E]/70 leading-relaxed">
                This Well-being Index shows the <span className="font-semibold">general area score</span>. But each care
                home has its own unique location. Our Professional Report calculates{" "}
                <span className="font-semibold text-[#C88D79]">individual Well-being Scores</span> for every home based
                on its precise address—so you can compare which homes offer the best environment for daily walks, family
                visits, and overall happiness.
              </p>
            </div>
            <Button
              size="lg"
              className="bg-[#C88D79] hover:bg-[#B87D69] text-white h-14 px-6 text-lg whitespace-nowrap"
            >
              Compare Home Scores
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>

        {/* Data Source Footer */}
        <p className="mt-6 text-center text-sm text-[#1A231E]/50">
          Data sources: ONS Census 2021, OSM Green Spaces, Transport for West Midlands, LaingBuisson Care Markets 2024 •
          Last updated: {new Date().toLocaleDateString("en-GB")}
        </p>
      </div>
    </section>
  )
}
