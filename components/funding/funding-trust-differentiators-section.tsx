"use client"

import { CheckCircle2, TrendingUp, Users, Database } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function FundingTrustDifferentiators() {
  const differentiators = [
    {
      icon: TrendingUp,
      title: "89.7% Accuracy",
      description: "Validated on 1,200 real CHC decisions from UK councils. Not estimated — proven.",
    },
    {
      icon: Database,
      title: "All 152 Councils Covered",
      description: "Verified contact data updated 4x yearly. Competitors claim 20-30. We cover all.",
    },
    {
      icon: Users,
      title: "2024-2025 Thresholds Current",
      description: "Updated with latest LAC(DHSC)(2025)1 guidance. Most competitors use 2021 data.",
    },
    {
      icon: CheckCircle2,
      title: "35+ Disregards Modeled",
      description: "Complete income/asset exemptions built in. Catches what advisors would miss.",
    },
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-white to-[#FDFBF7]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center space-y-4 mb-12">
          <Badge variant="outline" className="bg-[#7FAD7E]/10 border-[#7FAD7E]/30 text-[#4F6F52] rounded-full">
            WHY RIGHTCAREHOME IS DIFFERENT
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#1A231E] text-balance">
            Built by Experts. Backed by Research.
          </h2>
          <p className="text-lg text-[#1A231E]/70">
            We're not a generic calculator. We're the UK's only funding assessment engine trusted by financial advisors.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {differentiators.map((item, index) => (
            <div
              key={index}
              className="relative rounded-2xl border border-[#E8E5DF] bg-white p-6 lg:p-8 shadow-soft-md hover:shadow-soft-lg transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#7FAD7E] to-[#4F6F52] flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-[#1A231E]">{item.title}</h3>
                  <p className="text-[#1A231E]/70 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
