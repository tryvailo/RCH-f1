"use client"

import { FileText, PoundSterling, Home, Shield, MessageSquare, Award, Clock, Check } from "lucide-react"

interface ProValueSummaryProps {
  homesCount?: number
  location?: string
  dataPoints?: number
  pages?: number
}

export function ProValueSummary({
  homesCount = 5,
  location = "Birmingham",
  dataPoints = 102,
  pages = 25,
}: ProValueSummaryProps) {
  const valueItems = [
    {
      icon: Home,
      title: `${homesCount} Care Homes Compared`,
      color: "#4F6F52",
    },
    {
      icon: Shield,
      title: `${dataPoints} Data Points Per Home`,
      color: "#22c55e",
    },
    {
      icon: PoundSterling,
      title: "Fair Cost Gap Calculator",
      color: "#f59e0b",
    },
    {
      icon: MessageSquare,
      title: "Negotiation Scripts",
      color: "#3b82f6",
    },
    {
      icon: Award,
      title: "14-Day Action Plan",
      color: "#C88D79",
    },
  ]

  return (
    <section className="py-10 sm:py-14 bg-gradient-to-b from-[#FDFBF7] to-white print:py-6">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#4F6F52]/10 rounded-full mb-4">
            <Award className="w-5 h-5 text-[#4F6F52]" />
            <span className="text-sm sm:text-base font-semibold text-[#4F6F52]">Professional Report</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#1A231E] mb-3">
            What's Inside Your {pages}-Page Report
          </h2>
          <p className="text-base sm:text-lg text-[#1A231E]/70 max-w-2xl mx-auto">
            A comprehensive analysis of {homesCount} care homes in {location}, backed by {dataPoints}+ verified data
            points per home.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-5 mb-8 sm:mb-10">
          {valueItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-5 py-4 bg-white rounded-2xl border-2 border-[#E8E5DF] shadow-soft-md hover:shadow-soft-lg transition-shadow"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${item.color}15` }}
              >
                <item.icon className="w-5 h-5" style={{ color: item.color }} />
              </div>
              <span className="text-base sm:text-lg font-semibold text-[#1A231E]">{item.title}</span>
            </div>
          ))}
        </div>

        <div className="p-6 sm:p-8 bg-white rounded-2xl border-2 border-[#E8E5DF] shadow-soft-lg">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#4F6F52]/10 flex items-center justify-center">
                <FileText className="w-7 h-7 text-[#4F6F52]" />
              </div>
              <div>
                <p className="text-lg sm:text-xl font-bold text-[#1A231E]">
                  Comparable Consultancy Value: <span className="text-[#4F6F52]">£5,000–£7,000</span>
                </p>
                <p className="text-sm sm:text-base text-[#1A231E]/60">Based on typical care placement agency fees</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <div className="flex items-center gap-2 px-4 py-2 bg-[#FDFBF7] rounded-xl border border-[#E8E5DF]">
                <Clock className="w-5 h-5 text-[#C88D79]" />
                <span className="text-sm font-medium text-[#1A231E]">Saves 6+ weeks of research</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-[#FDFBF7] rounded-xl border border-[#E8E5DF]">
                <Check className="w-5 h-5 text-[#4F6F52]" />
                <span className="text-sm font-medium text-[#1A231E]">100% Independent</span>
              </div>
            </div>
          </div>

          <div className="mt-5 pt-5 border-t border-[#E8E5DF] text-center">
            <p className="text-base text-[#1A231E]/70">
              Families using our analysis discover average savings of{" "}
              <span className="font-bold text-[#4F6F52]">£10,000+/year</span> on care fees
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
