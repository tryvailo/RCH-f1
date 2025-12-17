import { X, Check } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const problems = [
  "Scrolling through endless Rightmove, HomeTouch, Lottie listings",
  "Reading biased Google reviews (families can't post honest reviews)",
  "Guessing if a home is financially stable",
  "Comparing prices across multiple websites with hidden fees",
  "Getting sales-driven advice from directory sites that earn commission",
]

const solutions = [
  "200+ point risk audit (financial + staffing + compliance)",
  "Family engagement pattern analysis (the truth about care quality)",
  "Financial health checks (assets, debts, trends)",
  "Fee transparency report (no hidden surprises)",
  "Staff stability scores (will your loved one see the same carers?)",
  "100% independent (zero commissions, zero bias)",
]

export function ProblemSolutionSection() {
  return (
    <section
      id="comparison"
      className="py-16 sm:py-24 lg:py-32 bg-[#FDFBF7] overflow-x-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#1A231E] text-balance">
            What You're Actually Doing When You Search Google for 4 Weeks
          </h2>
        </div>

        {/* Two Column Comparison */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          <Card className="p-5 sm:p-8 lg:p-10 bg-white border-2 border-[#E8E5DF] rounded-2xl sm:rounded-3xl shadow-soft-md">
            <div className="space-y-5 sm:space-y-6">
              <div className="inline-flex items-center gap-3 mb-2 sm:mb-4">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#D17A6F]/20 flex items-center justify-center">
                  <X className="w-5 h-5 sm:w-6 sm:h-6 text-[#D17A6F]" />
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-[#1A231E]">
                  Without RightCareHome
                </h3>
              </div>

              <ul className="space-y-3 sm:space-y-4">
                {problems.map((problem, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <X className="w-5 h-5 sm:w-6 sm:h-6 text-[#D17A6F] flex-shrink-0 mt-0.5" />
                    <span className="text-base sm:text-lg text-[#1A231E]/80">{problem}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-[#E8E5DF]">
                <p className="text-sm sm:text-base text-[#1A231E]/70 font-medium">
                  <span className="font-bold">Result:</span> Weeks of research. 10+ websites. Still no idea if the care
                  home will go bust in 6 months.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-5 sm:p-8 lg:p-10 bg-[#4F6F52] border-0 rounded-2xl sm:rounded-3xl shadow-lg">
            <div className="space-y-5 sm:space-y-6">
              <div className="inline-flex items-center gap-3 mb-2 sm:mb-4">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white/20 flex items-center justify-center">
                  <Check className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-white">With RightCareHome</h3>
              </div>

              <ul className="space-y-3 sm:space-y-4">
                {solutions.map((solution, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 sm:w-6 sm:h-6 text-white flex-shrink-0 mt-0.5" />
                    <span className="text-base sm:text-lg text-white/95">{solution}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-white/20">
                <p className="text-sm sm:text-base text-white/90 font-medium">
                  <span className="font-bold">Result:</span> Full clarity. 2 days. Professional risk assessment included
                  (worth £500+).
                </p>
              </div>

              <div className="pt-4 sm:pt-6">
                <Button
                  asChild
                  className="w-full h-13 sm:h-14 bg-[#C88D79] hover:bg-[#B87D69] text-white font-semibold text-base sm:text-lg rounded-xl shadow-md transition-colors"
                >
                  <Link href="/professional-assessment">
                    <span className="sm:hidden">Get Analysis — £119</span>
                    <span className="hidden sm:inline">Get Your Analysis — £119</span>
                  </Link>
                </Button>
                <p className="text-center text-sm text-white/80 mt-3">
                  Investment: £119 • Potential Savings: £10,000+/year
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
