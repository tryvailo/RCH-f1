"use client"

import { Check, FileText, MapPin, PoundSterling, ClipboardList, Home, Heart } from "lucide-react"

interface ReportValueSummaryProps {
  matchesCount?: number
  location?: string
}

export function ReportValueSummary({ matchesCount = 3, location = "Birmingham" }: ReportValueSummaryProps) {
  const valueItems = [
    {
      icon: Home,
      title: `${matchesCount} Matched Care Homes`,
      description: "Ranked by safety, reviews & value",
      color: "#4F6F52",
    },
    {
      icon: Heart,
      title: "Well-being Index Score",
      description: "Your area's quality of life rating",
      color: "#2A7A7A",
    },
    {
      icon: PoundSterling,
      title: "Funding Eligibility Check",
      description: "NHS & Council support analysis",
      color: "#C88D79",
    },
    {
      icon: MapPin,
      title: "Local Area Analysis",
      description: "Amenities, transport & green spaces",
      color: "#4F6F52",
    },
    {
      icon: ClipboardList,
      title: "Action Plan & Checklists",
      description: "Week-by-week roadmap + visit scripts",
      color: "#2A7A7A",
    },
    {
      icon: FileText,
      title: "Cost Comparison Report",
      description: "Fair pricing vs market rates",
      color: "#C88D79",
    },
  ]

  return (
    <section className="py-8 sm:py-12 bg-gradient-to-b from-[#FDFBF7] to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#4F6F52]/10 rounded-full mb-4">
            <Check className="w-5 h-5 text-[#4F6F52]" />
            <span className="text-sm sm:text-base font-semibold text-[#4F6F52]">Your Free Report Includes</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#1A231E] mb-2">
            Everything You're Getting Today
          </h2>
          <p className="text-base sm:text-lg text-[#1A231E]/70 max-w-2xl mx-auto">
            A comprehensive analysis tailored specifically for care homes in {location}
          </p>
        </div>

        {/* Value Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {valueItems.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-5 sm:p-6 bg-white rounded-xl sm:rounded-2xl border border-[#E8E5DF] shadow-sm hover:shadow-md transition-shadow"
            >
              <div
                className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: `${item.color}15` }}
              >
                <item.icon className="w-6 h-6 sm:w-7 sm:h-7" style={{ color: item.color }} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base sm:text-lg font-bold text-[#1A231E] mb-1 leading-snug">{item.title}</h3>
                <p className="text-sm sm:text-base text-[#1A231E]/70 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Value Anchor */}
        <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-[#4F6F52]/5 rounded-xl sm:rounded-2xl border border-[#4F6F52]/10 text-center">
          <p className="text-base sm:text-lg text-[#1A231E]/80 leading-relaxed">
            <span className="font-bold text-[#4F6F52]">Total Value: £150+</span>
            <span className="mx-2 text-[#1A231E]/40">•</span>
            <span className="font-semibold">Yours completely FREE</span>
            <span className="mx-2 text-[#1A231E]/40">•</span>
            <span>No credit card required</span>
          </p>
        </div>
      </div>
    </section>
  )
}
