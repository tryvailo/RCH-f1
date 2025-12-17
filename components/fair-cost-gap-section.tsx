"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TrendingDown, AlertCircle, KeyRound as Pound } from "lucide-react"

interface FairCostGapSectionProps {
  region?: string
}

export function FairCostGapSection({ region }: FairCostGapSectionProps = {}) {
  const pricingData =
    region === "Birmingham"
      ? {
          privatePrice: 1250,
          councilPrice: 900,
          weeklyGap: 350,
          annualGap: 18200,
        }
      : {
          privatePrice: 1500,
          councilPrice: 1050,
          weeklyGap: 450,
          annualGap: 23400,
        }

  const percentageGap = Math.round(
    ((pricingData.privatePrice - pricingData.councilPrice) / pricingData.councilPrice) * 100,
  )

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-[#1A231E]">
      <div className="container mx-auto px-4 sm:px-6 overflow-x-hidden">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16 space-y-4">
          <Badge className="mb-4 px-4 py-2 text-sm sm:text-base bg-[#D17A6F] text-white border-0">
            FINANCIAL REALITY CHECK
          </Badge>
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white">
            Why Are You Paying £{pricingData.annualGap.toLocaleString()} More Than the Council
            {region ? ` in ${region}` : ""}?
          </h2>
          <p className="text-base sm:text-xl md:text-2xl text-white/70">
            Same room. Same care team. Same food. But private families pay {percentageGap}% more. We expose the gap and
            help you find homes that charge fairly.
          </p>
        </div>

        {/* Cost Comparison */}
        <div className="max-w-4xl mx-auto">
          <Card className="p-5 sm:p-8 lg:p-12 rounded-2xl sm:rounded-3xl shadow-xl bg-white/5 backdrop-blur-sm border-2 border-white/10">
            {/* Chart */}
            <div className="space-y-6 sm:space-y-8">
              {/* Market Average */}
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-1">
                  <span className="text-base sm:text-lg font-semibold text-white">Private Family Rate</span>
                  <span className="text-xl sm:text-2xl font-bold text-[#D17A6F]">£{pricingData.privatePrice}/week</span>
                </div>
                <div className="h-14 sm:h-16 bg-[#D17A6F] rounded-xl flex items-center justify-end px-5 sm:px-6 shadow-md">
                  <span className="text-white font-semibold text-base sm:text-lg">+{percentageGap}%</span>
                </div>
              </div>

              {/* Fair Price */}
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-1">
                  <span className="text-base sm:text-lg font-semibold text-white">Council-Funded Rate</span>
                  <span className="text-xl sm:text-2xl font-bold text-[#7FAD7E]">£{pricingData.councilPrice}/week</span>
                </div>
                <div className="h-14 sm:h-16 bg-[#7FAD7E] rounded-xl flex items-center justify-end px-5 sm:px-6 shadow-md relative w-full sm:w-[70%]">
                  <span className="text-white font-semibold text-base sm:text-lg">Same Care</span>
                  <TrendingDown className="hidden sm:block absolute -right-12 top-1/2 -translate-y-1/2 w-8 h-8 text-[#7FAD7E]" />
                </div>
              </div>
            </div>

            <div className="mt-8 sm:mt-10 p-5 sm:p-6 bg-[#D17A6F]/20 border-2 border-[#D17A6F]/40 rounded-xl sm:rounded-2xl">
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#D17A6F] flex items-center justify-center flex-shrink-0">
                  <Pound className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg sm:text-xl font-serif font-bold text-white mb-2">
                    <span className="block sm:inline">TOTAL OVERPAYMENT:</span>
                    <span className="block sm:inline"> £{pricingData.annualGap.toLocaleString()}/YEAR</span>
                  </h4>
                  <p className="text-base sm:text-lg text-white/80 leading-relaxed">
                    The council negotiates fair rates because they audit homes rigorously. You deserve the same pricing
                    intelligence.
                  </p>
                </div>
              </div>
            </div>

            {/* Alert - increased text size */}
            <div className="mt-5 sm:mt-6 flex items-start gap-3 p-4 bg-[#D17A6F]/5 rounded-xl border border-[#D17A6F]/20">
              <AlertCircle className="w-5 h-5 text-[#D17A6F] flex-shrink-0 mt-0.5" />
              <p className="text-sm sm:text-base text-white/70">
                <strong className="font-semibold text-white">Why this gap exists:</strong> Councils audit financial
                health, staffing, and CQC compliance before setting rates.
              </p>
            </div>
          </Card>

          {/* Updated CTA */}
          <div className="text-center mt-8">
            <Button className="h-14 px-8 bg-[#C88D79] hover:bg-[#B87D69] text-white font-semibold text-lg rounded-xl shadow-md transition-colors">
              See Fair-Priced Homes
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
