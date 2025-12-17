import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from "lucide-react"
import Link from "next/link"

export function FundingFinalCtaSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-white via-[#F5F3EE] to-[#E8E5DF]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#4F6F52] to-[#3A5140] rounded-3xl p-8 sm:p-12 lg:p-16 shadow-soft-2xl text-white relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />

            <div className="relative z-10 text-center space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-balance">
                Stop Guessing. Get Answers in 10 Minutes.
              </h2>

              <p className="text-lg sm:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto text-pretty">
                Backed by analysis of 50,000+ real funding assessments
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <ul className="space-y-2 text-left">
                  {[
                    "89.7% accuracy guarantee",
                    "Instant PDF delivery",
                    "30-day money-back guarantee",
                    "Secure encrypted payment",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-white/90">
                      <Check className="w-5 h-5 text-[#7FAD7E]" strokeWidth={2.5} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6">
                <Button
                  size="lg"
                  asChild
                  className="h-14 sm:h-16 px-8 sm:px-12 text-base sm:text-xl bg-white text-[#4F6F52] hover:bg-white/90 rounded-2xl shadow-soft-xl hover:shadow-soft-2xl hover:scale-105 transition-all duration-200"
                >
                  <Link href="/funding-calculator/assessment">
                    Calculate Your Chances - £19.99
                    <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6" />
                  </Link>
                </Button>
              </div>

              <p className="text-sm text-white/70 pt-2">
                One-time payment • Worth £76,000/year if you qualify • Risk-free guarantee
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
