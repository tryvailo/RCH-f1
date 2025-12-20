"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Shield, Clock, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export function FundingHeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#FDFBF7] via-[#F5F3EE] to-[#E8E5DF] pt-24 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-28">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#7FAD7E]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#C88D79]/10 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-centre space-y-6 sm:space-y-8">
          {/* Trust Badge */}
          <Badge
            variant="outline"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-white/80 backdrop-blur-sm border-[#7FAD7E]/30 text-[#4F6F52] rounded-full shadow-soft-md"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>VALIDATED AGAINST 50,000+ REAL CASES</span>
          </Badge>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-[#1A231E] leading-tight text-balance">
            Discover <span className="text-[#4F6F52]">£76,000/Year</span> in State Funding.{" "}
            <span className="text-[#D17A6F]">Guaranteed</span> or Money Back.
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-[#1A231E]/80 leading-relaxed max-w-3xl mx-auto text-pretty">
            NHS Continuing Healthcare could pay up to <span className="font-bold text-[#D17A6F]">£76,000 per year</span>{" "}
            for your loved one's care. Our calculator (validated to <span className="font-bold">89.7% accuracy</span> on
            1,200 real cases) reveals your eligibility across all <span className="font-bold">152 UK councils</span>.
          </p>

          {/* Value Props */}
          <div className="flex flex-wrap justify-centre gap-4 sm:gap-6 pt-2">
            {[
              { icon: Clock, text: "10-minute assessment" },
              { icon: CheckCircle2, text: "89.7% accuracy" },
              { icon: Shield, text: "Money-back guarantee" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm sm:text-base text-[#1A231E]/90">
                <item.icon className="w-5 h-5 text-[#4F6F52]" strokeWidth={2} />
                <span className="font-medium">{item.text}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="pt-4 space-y-4">
            <Button
              size="lg"
              asChild
              className="h-14 sm:h-16 px-8 sm:px-12 text-base sm:text-xl bg-[#4F6F52] hover:bg-[#3A5140] text-white rounded-2xl shadow-soft-xl hover:shadow-soft-2xl hover:scale-105 transition-all duration-200"
            >
              <Link href="/funding-calculator/assessment">
                Calculate Your Chances - £19.99
                <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6" />
              </Link>
            </Button>

            {/* Price Justification */}
            <p className="text-sm text-[#1A231E]/60">
              Instant PDF report • Save 20+ hours of research • Worth £76,000/year if you qualify
            </p>
          </div>

          {/* Trust Signals */}
          <div className="pt-6 flex flex-wrap justify-centre gap-6 sm:gap-8 border-t border-[#E8E5DF]">
            <div className="flex items-center gap-2 text-sm text-[#1A231E]/70">
              <Shield className="w-4 h-4 text-[#7FAD7E]" />
              <span>256-bit encryption</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#1A231E]/70">
              <CheckCircle2 className="w-4 h-4 text-[#7FAD7E]" />
              <span>Instant delivery</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#1A231E]/70">
              <Shield className="w-4 h-4 text-[#7FAD7E]" />
              <span>Money-back guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
