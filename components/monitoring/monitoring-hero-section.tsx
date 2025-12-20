"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Shield, Check, ArrowRight, ShieldCheck, Clock } from "lucide-react"
import Link from "next/link"

export function MonitoringHeroSection() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // TODO: Integrate with email service
    console.log("[v0] Lead capture email:", email)
    setTimeout(() => {
      setIsSubmitting(false)
      // After guide download, offer trial
      const offerTrial = window.confirm(
        "Thank you! Check your email for the '7 Early Warning Signs' guide.\n\nWould you like to start your free 30-day monitoring trial now?"
      )
      if (offerTrial) {
        window.location.href = "#pricing"
      }
      setEmail("")
    }, 1000)
  }

  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] lg:min-h-screen overflow-hidden">
      {/* Background Image with Smart Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#FDFBF7] via-[#FDFBF7]/98 via-60% to-[#FDFBF7]/80 sm:via-[#FDFBF7]/95 sm:via-40% sm:to-[#FDFBF7]/60" />
        <img
          src="/monitoring-hero-son.png"
          alt="Adult son sitting at a kitchen table looking at a tablet with reassurance, monitoring his mother's care"
          className="w-full h-full object-cover object-left"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center min-h-[75vh] sm:min-h-[80vh]">
          {/* Left: Hero Copy */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            {/* Trust Badge */}
            <Badge
              variant="destructive"
              className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-1 sm:py-2 text-xs sm:text-base bg-[#D17A6F] hover:bg-[#D17A6F]/90 rounded-full shadow-soft-lg"
            >
              <span className="relative flex h-2 w-2 sm:h-3 sm:w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 sm:h-3 sm:w-3 bg-white"></span>
              </span>
              <span className="hidden sm:inline">TRUSTED BY 2,000+ UK FAMILIES</span>
              <span className="sm:hidden">TRUSTED BY 2,000+ FAMILIES</span>
            </Badge>

            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-[#1A231E] leading-[1.1] text-balance">
              Peace of Mind for Those You Care About. <span className="text-[#4F6F52]">Every Day.</span>
            </h1>

            <p className="text-base sm:text-xl md:text-2xl text-[#1A231E]/80 leading-relaxed text-pretty">
              Intelligent monitoring system tracks care quality, financial stability, and safety — even when you can't
              be there. You're always informed. Always confident.
            </p>

            {/* Value Proposition Highlight */}
            <div className="bg-gradient-to-r from-[#4F6F52]/10 to-[#7FAD7E]/10 rounded-2xl p-4 sm:p-6 border border-[#4F6F52]/20">
              <p className="text-sm sm:text-base text-[#1A231E]/90 font-semibold mb-2">
                💡 Catch problems <span className="text-[#4F6F52] font-bold">3-6 months before</span> they become crises.
              </p>
              <p className="text-sm sm:text-base text-[#1A231E]/90">
                Save <span className="text-[#D17A6F] font-bold">£8,500+</span> in emergency relocation costs.{" "}
                <span className="text-[#4F6F52] font-semibold">847 critical issues</span> detected this year.
              </p>
            </div>

            <ul className="space-y-2 sm:space-y-3">
              {[
                "AI-powered care quality analysis",
                "Monthly comprehensive reports",
                "Instant SMS alerts for critical issues",
              ].map((benefit, i) => (
                <li key={i} className="flex items-start gap-2 sm:gap-3">
                  <Check className="w-4 h-4 sm:w-6 sm:h-6 text-[#7FAD7E] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span className="text-sm sm:text-lg text-[#1A231E]/90">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
              <Button
                size="lg"
                asChild
                className="h-12 sm:h-14 px-4 sm:px-8 text-sm sm:text-lg bg-[#4F6F52] hover:bg-[#3A5140] text-white rounded-xl sm:rounded-2xl shadow-soft-lg hover:shadow-soft-xl hover:scale-105 transition-all duration-200 w-full sm:w-auto font-semibold"
              >
                <Link href="#pricing">
                  <span className="hidden sm:inline">Start Free 30-Day Trial</span>
                  <span className="sm:hidden">Start Free Trial</span>
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </Button>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#1A231E]/70">
                <ShieldCheck className="w-4 h-4 text-[#4F6F52]" />
                <span>No credit card required • Cancel anytime</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#1A231E]/60 flex items-center gap-2">
              <Shield className="w-4 h-4 flex-shrink-0" strokeWidth={2} />
              <span className="hidden sm:inline">Cancel anytime • No credit card required • Money-back guarantee</span>
              <span className="sm:hidden">Cancel anytime • No credit card</span>
            </p>
          </div>

          <div className="lg:flex justify-centre items-center hidden">
            <div className="max-w-md w-full">
              <div className="bg-white rounded-2xl shadow-soft-xl border border-[#E8E5DF] overflow-hidden">
                <div className="bg-gradient-to-r from-[#4F6F52] to-[#3A5140] px-6 py-5 text-white text-centre">
                  <h2 className="text-2xl font-serif font-bold">7 Early Warning Signs Your Care Home May Be in Trouble</h2>
                  <p className="mt-2 text-white/90 text-sm">Free guide: Spot problems 3-6 months before they escalate</p>
                </div>

                <div className="p-6 space-y-5">
                  <div className="flex items-center justify-centre gap-4 pb-5 border-b border-[#E8E5DF]">
                    <div className="flex -space-x-2">
                      <div className="w-9 h-9 rounded-full bg-[#4F6F52] flex items-center justify-centre text-white text-sm font-medium border-2 border-white">
                        J
                      </div>
                      <div className="w-9 h-9 rounded-full bg-[#C88D79] flex items-center justify-centre text-white text-sm font-medium border-2 border-white">
                        S
                      </div>
                      <div className="w-9 h-9 rounded-full bg-[#1A231E] flex items-center justify-centre text-white text-sm font-medium border-2 border-white">
                        M
                      </div>
                    </div>
                    <div className="text-centre">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 fill-[#F59E0B]" viewBox="0 0 20 20">
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-xs text-[#1A231E]/70 mt-1 block">2,000+ families downloaded</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <p className="text-sm text-[#1A231E]/80 text-centre font-medium">
                      Learn the warning signs our system detects:
                    </p>
                    <ul className="space-y-2.5">
                      {[
                        "Financial stress indicators (Altman Z-Score)",
                        "Staff turnover spikes & retention issues",
                        "CQC rating decline patterns",
                        "Review sentiment deterioration",
                        "Family visit pattern changes",
                        "Fee increase frequency",
                        "Ownership structure risks",
                      ].map((text, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-[#7FAD7E] flex items-center justify-centre flex-shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-white" strokeWidth={3} />
                          </div>
                          <span className="text-sm text-[#1A231E]">{text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-3 pt-2">
                    <Input
                      type="email"
                      placeholder="Your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="h-14 text-base border-[#E8E5DF] focus:border-[#4F6F52] focus:ring-[#4F6F52] rounded-xl"
                    />
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-14 text-base font-semibold bg-[#C88D79] hover:bg-[#B67D6A] text-white rounded-xl shadow-soft-md hover:shadow-soft-lg hover:scale-[1.02] transition-all duration-200"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Get My Free Warning Signs Guide
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                    <p className="text-centre text-xs text-[#1A231E]/60">
                      Instant delivery • No spam • Unsubscribe anytime
                    </p>
                  </form>

                  <div className="flex items-center justify-centre gap-6 pt-3 border-t border-[#E8E5DF]">
                    <div className="flex items-center gap-1.5 text-xs text-[#1A231E]/70">
                      <ShieldCheck className="w-4 h-4 text-[#4F6F52]" />
                      <span>100% Free</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-[#1A231E]/70">
                      <Clock className="w-4 h-4 text-[#4F6F52]" />
                      <span>Instant Access</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
