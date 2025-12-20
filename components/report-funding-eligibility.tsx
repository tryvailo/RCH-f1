"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertCircle, Building2, Calendar, Heart, ChevronDown, ChevronUp, Info } from "lucide-react"
import Link from "next/link"

interface FundingEligibilityProps {
  nhcProbability?: number
  councilProbability?: number
  deferredProbability?: number
  weeklyMarketCost?: number
  weeklyFairCost?: number
  medicalCondition?: string
}

export function ReportFundingEligibility({
  nhcProbability = 78,
  councilProbability = 72,
  deferredProbability = 85,
  weeklyMarketCost = 1467,
  weeklyFairCost = 1048,
  medicalCondition = "complex health needs",
}: FundingEligibilityProps) {
  const [expandedNHC, setExpandedNHC] = useState(false)
  const [expandedCouncil, setExpandedCouncil] = useState(false)
  const [expandedDeferred, setExpandedDeferred] = useState(false)

  const weeklyGap = weeklyMarketCost - weeklyFairCost
  const annualSavings = Math.round(weeklyGap * 52)
  const fiveYearSavings = Math.round(weeklyMarketCost * 52 * 5)

  const getProbabilityLevel = (prob: number) => {
    if (prob >= 80) return { label: "VERY HIGH", colour: "bg-green-600", textColor: "text-green-700" }
    if (prob >= 65) return { label: "HIGH", colour: "bg-green-500", textColor: "text-green-600" }
    if (prob >= 45) return { label: "MODERATE", colour: "bg-amber-500", textColor: "text-amber-600" }
    return { label: "LOW", colour: "bg-gray-400", textColor: "text-gray-500" }
  }

  const nhcLevel = getProbabilityLevel(nhcProbability)
  const councilLevel = getProbabilityLevel(councilProbability)
  const deferredLevel = getProbabilityLevel(deferredProbability)

  return (
    <section className="py-12 md:py-16 px-4 bg-gradient-to-br from-[#FDFBF7] via-white to-[#F8F6F3]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-centre mb-8 md:mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-3 text-[#1A231E] text-balance">
            Could the NHS or Council Help Pay?
          </h2>
          <p className="text-base md:text-lg text-[#1A231E]/70 mb-6 text-balance">
            Based on your answers, here's what might be available
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-amber-50 border border-amber-200 rounded-lg text-sm max-w-2xl">
            <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
            <span className="text-amber-900">
              These are guidance estimates. Final eligibility determined by NHS or Council assessment.
            </span>
          </div>
        </div>

        {/* Three Funding Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* NHS CHC Card */}
          <Card className="p-6 hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm border-[#4F6F52]/10">
            <div className="flex items-start gap-3 mb-4">
              <div className="p-2.5 rounded-lg bg-blue-50">
                <Heart className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-1 text-[#1A231E]">NHS Continuing Healthcare</h3>
              </div>
            </div>

            <div className="mb-4 pb-4 border-b border-[#4F6F52]/10">
              <div className="flex items-center gap-2 mb-2">
                <Badge className={`${nhcLevel.colour} text-white text-sm px-3 py-1`}>{nhcLevel.label}</Badge>
                <span className={`text-lg font-bold ${nhcLevel.textColor}`}>{nhcProbability}%</span>
              </div>
              <p className="text-sm text-[#1A231E]/70 mt-2">
                Based on your answers about <span className="font-semibold text-[#1A231E]">{medicalCondition}</span>
              </p>
            </div>

            {/* If Approved */}
            <div className="space-y-3 mb-4">
              <h4 className="font-semibold text-sm text-[#1A231E]/60 uppercase tracking-wide">
                If Approved, NHS Pays:
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-[#1A231E]/70">100% of weekly costs:</span>
                  <span className="font-semibold text-[#1A231E]">£{weeklyMarketCost.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#1A231E]/70">You pay:</span>
                  <span className="font-semibold text-[#4F6F52]">£0</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#1A231E]/70">5-year savings:</span>
                  <span className="font-semibold text-[#4F6F52]">£{fiveYearSavings.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setExpandedNHC(!expandedNHC)}
              className="flex items-center justify-between w-full p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colours text-sm"
            >
              <div className="flex items-center gap-2">
                <Info className="w-4 h-4 text-blue-600" />
                <span className="font-medium text-blue-900">Learn more about CHC</span>
              </div>
              {expandedNHC ? (
                <ChevronUp className="w-4 h-4 text-blue-600" />
              ) : (
                <ChevronDown className="w-4 h-4 text-blue-600" />
              )}
            </button>

            {expandedNHC && (
              <div className="mt-3 p-3 bg-blue-50/50 rounded-lg text-sm text-[#1A231E]/70 animate-in slide-in-from-top-2 duration-200">
                <p className="mb-2">
                  <strong>What is it?</strong> NHS-funded care for people with complex, ongoing healthcare needs.
                </p>
                <p className="mb-2">
                  <strong>Timeline:</strong> Assessment takes approximately 28 days.
                </p>
                <p>
                  <strong>Next step:</strong> Request a CHC assessment through your GP or hospital discharge team.
                </p>
              </div>
            )}
          </Card>

          {/* Council Funding Card */}
          <Card className="p-6 hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm border-[#4F6F52]/10">
            <div className="flex items-start gap-3 mb-4">
              <div className="p-2.5 rounded-lg bg-teal-50">
                <Building2 className="w-6 h-6 text-teal-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-1 text-[#1A231E]">Council Funding</h3>
              </div>
            </div>

            <div className="mb-4 pb-4 border-b border-[#4F6F52]/10">
              <div className="flex items-center gap-2 mb-2">
                <Badge className={`${councilLevel.colour} text-white text-sm px-3 py-1`}>{councilLevel.label}</Badge>
                <span className={`text-lg font-bold ${councilLevel.textColor}`}>{councilProbability}%</span>
              </div>
              <p className="text-sm text-[#1A231E]/70 mt-2">Based on your financial situation and care needs</p>
            </div>

            {/* If Approved */}
            <div className="space-y-3 mb-4">
              <h4 className="font-semibold text-sm text-[#1A231E]/60 uppercase tracking-wide">If Approved:</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-[#1A231E]/70">Council pays:</span>
                  <span className="font-semibold text-[#1A231E]">~£{weeklyFairCost.toLocaleString()}/week</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#1A231E]/70">You pay (top-up):</span>
                  <span className="font-semibold text-[#1A231E]">~£{weeklyGap}/week</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#1A231E]/70">Annual savings:</span>
                  <span className="font-semibold text-[#4F6F52]">~£{annualSavings.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setExpandedCouncil(!expandedCouncil)}
              className="flex items-center justify-between w-full p-3 bg-teal-50 rounded-lg hover:bg-teal-100 transition-colours text-sm"
            >
              <div className="flex items-center gap-2">
                <Info className="w-4 h-4 text-teal-600" />
                <span className="font-medium text-teal-900">Learn more about Council funding</span>
              </div>
              {expandedCouncil ? (
                <ChevronUp className="w-4 h-4 text-teal-600" />
              ) : (
                <ChevronDown className="w-4 h-4 text-teal-600" />
              )}
            </button>

            {expandedCouncil && (
              <div className="mt-3 p-3 bg-teal-50/50 rounded-lg text-sm text-[#1A231E]/70 animate-in slide-in-from-top-2 duration-200">
                <p className="mb-2">
                  <strong>What is it?</strong> Means-tested support from your local council for care home fees.
                </p>
                <p className="mb-2">
                  <strong>Threshold:</strong> Assets below £23,250 qualify for full support.
                </p>
                <p>
                  <strong>Timeline:</strong> Assessment typically takes 6-8 weeks.
                </p>
              </div>
            )}
          </Card>

          <Card className="p-6 hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm border-[#4F6F52]/10">
            <div className="flex items-start gap-3 mb-4">
              <div className="p-2.5 rounded-lg bg-purple-50">
                <Calendar className="w-6 h-6 text-purple-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-1 text-[#1A231E]">Deferred Payment Agreement</h3>
              </div>
            </div>

            <div className="mb-4 pb-4 border-b border-[#4F6F52]/10">
              <div className="flex items-center gap-2 mb-2">
                <Badge className={`${deferredLevel.colour} text-white text-sm px-3 py-1`}>{deferredLevel.label}</Badge>
                <span className={`text-lg font-bold ${deferredLevel.textColor}`}>{deferredProbability}%</span>
              </div>
              <p className="text-sm text-[#1A231E]/70 mt-2">If you own your home and meet asset thresholds</p>
            </div>

            {/* How It Works */}
            <div className="space-y-3 mb-4">
              <h4 className="font-semibold text-sm text-[#1A231E]/60 uppercase tracking-wide">How It Works:</h4>
              <div className="space-y-2.5 text-sm">
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 flex-shrink-0" />
                  <span className="text-[#1A231E]/80">Pay nothing upfront</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 flex-shrink-0" />
                  <span className="text-[#1A231E]/80">Council pays care fees now</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 flex-shrink-0" />
                  <span className="text-[#1A231E]/80">Repay from home sale later</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 flex-shrink-0" />
                  <span className="text-[#1A231E]/80">Keep your home during care</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setExpandedDeferred(!expandedDeferred)}
              className="flex items-center justify-between w-full p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colours text-sm"
            >
              <div className="flex items-center gap-2">
                <Info className="w-4 h-4 text-purple-600" />
                <span className="font-medium text-purple-900">Learn more about DPA</span>
              </div>
              {expandedDeferred ? (
                <ChevronUp className="w-4 h-4 text-purple-600" />
              ) : (
                <ChevronDown className="w-4 h-4 text-purple-600" />
              )}
            </button>

            {expandedDeferred && (
              <div className="mt-3 p-3 bg-purple-50/50 rounded-lg text-sm text-[#1A231E]/70 animate-in slide-in-from-top-2 duration-200">
                <p className="mb-2">
                  <strong>What is it?</strong> A loan from your council secured against your home.
                </p>
                <p className="mb-2">
                  <strong>Interest:</strong> Currently charged at around 1.5% above the market rate.
                </p>
                <p>
                  <strong>Eligibility:</strong> You must have less than £23,250 in non-housing assets.
                </p>
              </div>
            )}
          </Card>
        </div>

        <div className="bg-amber-50 border border-amber-300 rounded-xl p-4 md:p-5 mb-6">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="text-sm text-amber-900 leading-relaxed">
                <strong>Please note:</strong> These are guidance estimates based on your answers. Final eligibility is
                determined through official NHS or Council assessment. Our Professional Report includes detailed
                application templates and personalised guidance.
              </p>
            </div>
          </div>
        </div>

        {/* Subtle Professional CTA */}
        <div className="text-centre">
          <Link
            href="/professional-assessment"
            className="inline-flex items-center text-sm text-[#4F6F52] hover:text-[#3d5941] transition-colours font-medium"
          >
            Get detailed funding analysis in Professional Report →
          </Link>
        </div>
      </div>
    </section>
  )
}
