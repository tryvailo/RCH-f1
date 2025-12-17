"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Check, ShieldCheck, Clock } from "lucide-react"

export function MonitoringLeadCapture() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // TODO: Integrate with email service
    console.log("[v0] Lead capture email:", email)
    setTimeout(() => {
      setIsSubmitting(false)
      alert("Thank you! Check your email for the monitoring checklist.")
      setEmail("")
    }, 1000)
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#FDFBF7] via-white to-[#F8F6F3]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-soft-xl border border-[#E8E5DF] overflow-hidden">
            <div className="bg-gradient-to-r from-[#4F6F52] to-[#3A5140] px-6 py-5 text-white text-center">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold">
                Get Your Free Care Home Monitoring Checklist
              </h2>
              <p className="mt-2 text-white/90 text-sm sm:text-base">See what professional monitors check daily</p>
            </div>

            <div className="p-6 sm:p-8 lg:p-10 space-y-6">
              <div className="flex items-center justify-center gap-4 pb-6 border-b border-[#E8E5DF]">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-[#4F6F52] flex items-center justify-center text-white text-sm font-medium border-2 border-white">
                    J
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#C88D79] flex items-center justify-center text-white text-sm font-medium border-2 border-white">
                    S
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#1A231E] flex items-center justify-center text-white text-sm font-medium border-2 border-white">
                    M
                  </div>
                </div>
                <div className="text-center">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-[#F59E0B]" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-[#1A231E]/70 mt-1 block">Trusted by 2,000+ families</span>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "156-point daily monitoring checklist",
                  "Financial red flags guide",
                  "Staff turnover warning signs",
                  "Quality indicators to watch",
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#7FAD7E] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-white" strokeWidth={3} />
                    </div>
                    <span className="text-base text-[#1A231E]">{text}</span>
                  </div>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 pt-4">
                <Input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-14 text-lg border-[#E8E5DF] focus:border-[#4F6F52] focus:ring-[#4F6F52] rounded-xl"
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 text-lg font-semibold bg-[#C88D79] hover:bg-[#B67D6A] text-white rounded-xl shadow-soft-md hover:shadow-soft-lg hover:scale-[1.02] transition-all duration-200"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Me The Free Checklist
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
                <p className="text-center text-sm text-[#1A231E]/60">
                  Instant delivery • No spam • Unsubscribe anytime
                </p>
              </form>

              <div className="flex items-center justify-center gap-8 pt-4 border-t border-[#E8E5DF]">
                <div className="flex items-center gap-2 text-sm text-[#1A231E]/70">
                  <ShieldCheck className="w-5 h-5 text-[#4F6F52]" />
                  <span>100% Free</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#1A231E]/70">
                  <Clock className="w-5 h-5 text-[#4F6F52]" />
                  <span>Instant Access</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
