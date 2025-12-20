import { X, Check } from "lucide-react"

export function FundingComparisonSection() {
  const comparison = [
    {
      feature: "Time Required",
      diy: "20+ hours of research",
      calculator: "10 minutes",
    },
    {
      feature: "Understanding CHC Criteria",
      diy: "Read 80-page framework",
      calculator: "Automated assessment",
    },
    {
      feature: "Means Test Calculation",
      diy: "Complex spreadsheets",
      calculator: "Done for you",
    },
    {
      feature: "Know Exact Next Steps",
      diy: "Guess and hope",
      calculator: "Precise action plan",
    },
    {
      feature: "Property Disregard Advice",
      diy: "Conflicting information",
      calculator: "Clear guidance",
    },
    {
      feature: "Backdating Potential",
      diy: "Easy to miss",
      calculator: "Highlighted if eligible",
    },
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-centre space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#1A231E] text-balance">
            DIY Research vs Our Calculator
          </h2>
          <p className="text-lg sm:text-xl text-[#1A231E]/70 text-pretty">
            Stop wasting time on confusing government websites
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-[#FDFBF7] to-white rounded-2xl border border-[#E8E5DF] shadow-soft-xl overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-3 bg-gradient-to-r from-[#4F6F52] to-[#3A5140] text-white">
              <div className="p-4 sm:p-6 col-span-1"></div>
              <div className="p-4 sm:p-6 text-centre font-bold text-sm sm:text-base border-l border-white/20">
                DIY Research
              </div>
              <div className="p-4 sm:p-6 text-centre font-bold text-sm sm:text-base border-l border-white/20 bg-white/10">
                Our Calculator
              </div>
            </div>

            {/* Rows */}
            {comparison.map((row, index) => (
              <div
                key={index}
                className={`grid grid-cols-3 ${index !== comparison.length - 1 ? "border-b border-[#E8E5DF]" : ""}`}
              >
                <div className="p-4 sm:p-6 font-semibold text-[#1A231E] text-sm sm:text-base">{row.feature}</div>
                <div className="p-4 sm:p-6 border-l border-[#E8E5DF] text-centre">
                  <div className="flex items-center justify-centre gap-2 text-[#D17A6F]">
                    <X className="w-5 h-5 flex-shrink-0" strokeWidth={2.5} />
                    <span className="text-xs sm:text-sm">{row.diy}</span>
                  </div>
                </div>
                <div className="p-4 sm:p-6 border-l border-[#E8E5DF] bg-[#7FAD7E]/5 text-centre">
                  <div className="flex items-center justify-centre gap-2 text-[#4F6F52]">
                    <Check className="w-5 h-5 flex-shrink-0" strokeWidth={2.5} />
                    <span className="text-xs sm:text-sm font-semibold">{row.calculator}</span>
                  </div>
                </div>
              </div>
            ))}

            {/* Price Row */}
            <div className="grid grid-cols-3 bg-gradient-to-r from-[#F5F3EE] to-[#FDFBF7]">
              <div className="p-4 sm:p-6 font-bold text-[#1A231E] text-sm sm:text-base">Cost</div>
              <div className="p-4 sm:p-6 border-l border-[#E8E5DF] text-centre">
                <div className="text-lg sm:text-xl font-bold text-[#D17A6F]">Your Time</div>
                <div className="text-xs text-[#1A231E]/60">20+ hours</div>
              </div>
              <div className="p-4 sm:p-6 border-l border-[#E8E5DF] bg-gradient-to-br from-[#7FAD7E]/10 to-[#4F6F52]/10 text-centre">
                <div className="text-lg sm:text-xl font-bold text-[#4F6F52]">£19.99</div>
                <div className="text-xs text-[#1A231E]/60">One-time payment</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
