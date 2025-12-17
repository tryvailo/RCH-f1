"use client"

import { useState } from "react"
import Link from "next/link"
import { Check, ArrowRight, TrendingUp, Users, PoundSterling } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function ReportVisualTeaser() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const mockups = [
    {
      id: 1,
      title: "Financial Stability Forecast (5-Year Outlook)",
      icon: TrendingUp,
      overlayText: "Full analysis in Professional...",
      chartType: "line" as const,
    },
    {
      id: 2,
      title: "Team Stability & Culture Insights",
      icon: Users,
      overlayText: "12+ data sources analysed...",
      chartType: "table" as const,
    },
    {
      id: 3,
      title: "Competitive Pricing Intelligence",
      icon: PoundSterling,
      overlayText: "Includes negotiation templates...",
      chartType: "bar" as const,
    },
  ]

  const freeFeatures = ["CQC inspection ratings", "Basic pricing data", "3 homes compared", "Quick recommendations"]

  const professionalFeatures = [
    { text: "200+ data points per report", badge: null },
    { text: "Food Hygiene Data", badge: "EXCLUSIVE" },
    { text: "Family Engagement Insights", badge: "EXCLUSIVE" },
    { text: "Fair Cost Calculator (15,000+ homes)", badge: "EXCLUSIVE" },
    { text: "Negotiation Scripts (word-for-word)", badge: "EXCLUSIVE" },
    { text: "Financial Stability Check", badge: "EXCLUSIVE" },
    { text: "Ownership Intelligence", badge: "EXCLUSIVE" },
    { text: "Staff Continuity Data", badge: "EXCLUSIVE" },
    { text: "Local Authority Funding Guide", badge: "152 COUNCILS" },
    { text: "Share with 5 Family Members", badge: "UK FIRST" },
    { text: "14-Day Action Plan", badge: "EXCLUSIVE" },
  ]

  return (
    <section className="py-18 sm:py-22 lg:py-28 bg-gradient-to-b from-white to-[#FDFBF7]">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-14 md:mb-16">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A231E] mb-5 md:mb-6">
            What's Inside Your Professional Report?
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-[#1A231E]/70 leading-relaxed">
            Data you simply won't find anywhere else in the UK
          </p>
        </div>

        {/* Blurred Mockups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 lg:gap-9 mb-14 md:mb-16">
          {mockups.map((mockup) => (
            <div
              key={mockup.id}
              className="relative bg-white rounded-xl border border-[#E5E7EB] overflow-hidden transition-all duration-200 hover:shadow-lg hover:scale-[1.02]"
              onMouseEnter={() => setHoveredCard(mockup.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Sharp Title */}
              <div className="p-5 md:p-6 border-b border-[#E5E7EB] bg-[#FDFBF7]">
                <div className="flex items-center gap-3">
                  <mockup.icon className="w-6 h-6 md:w-7 md:h-7 text-[#4F6F52]" />
                  <h3 className="font-semibold text-base md:text-lg text-[#1A231E] leading-tight">{mockup.title}</h3>
                </div>
              </div>

              {/* Blurred Chart Area */}
              <div className="relative h-56 sm:h-60 md:h-64">
                <div className="absolute inset-0 p-4 filter blur-[8px]">
                  {mockup.chartType === "line" && (
                    <svg viewBox="0 0 300 180" className="w-full h-full">
                      <line x1="40" y1="20" x2="40" y2="150" stroke="#E5E7EB" strokeWidth="1" />
                      <line x1="40" y1="150" x2="280" y2="150" stroke="#E5E7EB" strokeWidth="1" />
                      <path
                        d="M 50 130 Q 100 120 130 100 T 180 80 T 230 50 T 270 35"
                        fill="none"
                        stroke="#4F6F52"
                        strokeWidth="3"
                      />
                      <path
                        d="M 50 130 Q 100 120 130 100 T 180 80 T 230 50 T 270 35 L 270 150 L 50 150 Z"
                        fill="#4F6F52"
                        fillOpacity="0.1"
                      />
                      <text x="15" y="35" fontSize="10" fill="#666">
                        500
                      </text>
                      <text x="15" y="90" fontSize="10" fill="#666">
                        300
                      </text>
                      <text x="15" y="150" fontSize="10" fill="#666">
                        100
                      </text>
                      <text x="60" y="165" fontSize="10" fill="#666">
                        Y1
                      </text>
                      <text x="120" y="165" fontSize="10" fill="#666">
                        Y2
                      </text>
                      <text x="180" y="165" fontSize="10" fill="#666">
                        Y3
                      </text>
                      <text x="240" y="165" fontSize="10" fill="#666">
                        Y4
                      </text>
                    </svg>
                  )}

                  {mockup.chartType === "table" && (
                    <div className="space-y-2">
                      <div className="grid grid-cols-3 gap-2 text-xs font-medium text-[#1A231E] border-b pb-2">
                        <span>Metric</span>
                        <span>This Home</span>
                        <span>UK Average</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-xs text-[#1A231E]/70 py-1.5 border-b border-[#E5E7EB]">
                        <span>Staff Retention</span>
                        <span className="text-[#4F6F52] font-medium">89%</span>
                        <span>76%</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-xs text-[#1A231E]/70 py-1.5 border-b border-[#E5E7EB]">
                        <span>Training Hours</span>
                        <span className="text-[#4F6F52] font-medium">142 hrs</span>
                        <span>95 hrs</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-xs text-[#1A231E]/70 py-1.5 border-b border-[#E5E7EB]">
                        <span>Satisfaction</span>
                        <span className="text-[#4F6F52] font-medium">4.6/5</span>
                        <span>3.8/5</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-xs text-[#1A231E]/70 py-1.5">
                        <span>Turnover Rate</span>
                        <span className="text-[#4F6F52] font-medium">8%</span>
                        <span>24%</span>
                      </div>
                    </div>
                  )}

                  {mockup.chartType === "bar" && (
                    <svg viewBox="0 0 300 180" className="w-full h-full">
                      <line x1="50" y1="20" x2="50" y2="150" stroke="#E5E7EB" strokeWidth="1" />
                      <line x1="50" y1="150" x2="280" y2="150" stroke="#E5E7EB" strokeWidth="1" />
                      <rect x="70" y="60" width="50" height="90" fill="#4F6F52" rx="4" />
                      <rect x="140" y="40" width="50" height="110" fill="#C8A96B" rx="4" />
                      <rect x="210" y="25" width="50" height="125" fill="#E5E7EB" rx="4" />
                      <text x="95" y="170" fontSize="9" fill="#666" textAnchor="middle">
                        This Home
                      </text>
                      <text x="165" y="170" fontSize="9" fill="#666" textAnchor="middle">
                        Local Avg
                      </text>
                      <text x="235" y="170" fontSize="9" fill="#666" textAnchor="middle">
                        Market High
                      </text>
                      <text x="95" y="55" fontSize="10" fill="#4F6F52" textAnchor="middle" fontWeight="bold">
                        £1,450
                      </text>
                      <text x="165" y="35" fontSize="10" fill="#C8A96B" textAnchor="middle" fontWeight="bold">
                        £1,595
                      </text>
                      <text x="235" y="20" fontSize="10" fill="#666" textAnchor="middle">
                        £1,750
                      </text>
                    </svg>
                  )}
                </div>

                {/* Overlay with text */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/50 to-transparent flex items-end justify-center pb-5">
                  <span className="text-base md:text-lg text-[#1A231E]/50 italic">{mockup.overlayText}</span>
                </div>

                {/* Lock icon indicator */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#4F6F52]/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#4F6F52]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Comparison - Updated with exclusive badges */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-9 mb-12 md:mb-14">
          {/* Free Report Features */}
          <div className="bg-white rounded-xl p-7 md:p-8 border border-[#E5E7EB]">
            <h3 className="font-semibold text-[#1A231E] mb-5 md:mb-6 text-xl md:text-2xl">Your Free Report</h3>
            <ul className="space-y-4">
              {freeFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 text-[#1A231E]/70 text-lg md:text-xl">
                  <Check className="w-6 h-6 text-[#7FAD7E] flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Professional Report Features */}
          <div className="bg-gradient-to-br from-[#4F6F52]/5 to-[#4F6F52]/10 rounded-xl p-7 md:p-8 border border-[#4F6F52]/20">
            <h3 className="font-semibold text-[#1A231E] mb-5 md:mb-6 text-xl md:text-2xl">Your Professional Report</h3>
            <ul className="space-y-4">
              {professionalFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 text-[#1A231E]/80 text-lg md:text-xl">
                  <Check className="w-6 h-6 text-[#4F6F52] flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    {feature.text}
                    {feature.badge && (
                      <Badge
                        className={`ml-2 ${
                          feature.badge === "EXCLUSIVE"
                            ? "bg-[#C88D79]/20 text-[#C88D79]"
                            : feature.badge === "UK FIRST"
                              ? "bg-[#7FAD7E]/20 text-[#7FAD7E]"
                              : "bg-[#4F6F52]/20 text-[#4F6F52]"
                        } border-0 text-[10px] px-2 py-0.5 font-bold`}
                      >
                        {feature.badge}
                      </Badge>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link href="/professional-assessment">
            <Button
              size="lg"
              className="h-14 sm:h-16 px-10 sm:px-12 text-lg sm:text-xl font-semibold bg-[#4F6F52] hover:bg-[#3d5a40] text-white rounded-xl w-full sm:w-auto"
            >
              Request Your Professional Report — £119
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
          </Link>
          <p className="text-base sm:text-lg text-[#1A231E]/50 mt-4">
            Delivered within 24 hours • 30-day money-back guarantee
          </p>

          {/* Soft Exit */}
          <p className="text-base md:text-lg text-[#1A231E]/40 italic mt-5">
            Or continue with your free report <ArrowRight className="inline w-4 h-4" />
          </p>
        </div>
      </div>
    </section>
  )
}
