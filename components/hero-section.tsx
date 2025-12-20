"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ShieldCheck, ArrowRight, Check, Clock, TrendingUp, Heart, MapPin, Database } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

interface HeroSectionProps {
  region?: string
}

export function HeroSection({ region }: HeroSectionProps = {}) {
  const router = useRouter()
  const [postcode, setPostcode] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const getHeroImage = () => {
    switch (region) {
      case "Birmingham":
        return {
          src: "/hero-new-manchester.png", // Using Manchester image for Birmingham as requested (similar vibe)
          alt: "Compassionate care - warm home setting",
        }
      case "London":
        return {
          src: "/hero-new-london.png",
          alt: "London care home diversity",
        }
      case "Manchester":
      case "manchester":
        return {
          src: "/hero-new-manchester.png",
          alt: "Manchester care home excellence",
        }
      default:
        return {
          src: "/hero-new-default.png",
          alt: "Professional British caregiver providing compassionate care to elderly couple",
        }
    }
  }

  const heroImage = getHeroImage()

  const headline = region
    ? `Find the Right Care Home in ${region}`
    : "Find the right care home for Mum. The full picture."

  const subheadline = region
    ? `We've analysed all ${region === "Birmingham" ? "277" : region === "Manchester" ? "245" : region === "London" ? "312" : ""} care homes in ${region} — financial health, staff stability, and family visit patterns.`
    : "Staff quality, financial stability, fair pricing, and real family visit patterns. All analysed so you can choose with absolute confidence."

  const benefits = [
    { icon: Heart, text: "Peace of mind for the family" },
    { icon: TrendingUp, text: "Financial health intelligence" },
    { icon: MapPin, text: "Local Authority guidance" },
  ]

  // Reverting to original benefits list for the form card
  const formBenefits = [
    "Top 3 care homes — Ranked by safety, reviews & value",
    "Free funding check — NHS & Council eligibility",
    "Local area insights — Your postcode analysed",
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    if (postcode) {
      sessionStorage.setItem("assessment_postcode", postcode)
    }
    // Simulate short delay for feel
    setTimeout(() => {
      router.push("/free-assessment")
    }, 400)
  }

  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-background">
      {/* Background Image with Cinematic Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 via-50% to-background/20 sm:to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
        <img
          src={heroImage.src || "/placeholder.svg"}
          alt={heroImage.alt}
          className="w-full h-full object-cover object-centre opacity-90"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 py-12 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* Left: Editorial Copy - Kept the improved typography */}
          <div className="lg:col-span-7 space-y-8 max-w-3xl">
            {/* Trust Badge - Static & Authoritative */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm">
              <ShieldCheck className="w-4 h-4 text-primary" strokeWidth={2} />
              <span className="text-sm font-semibold text-primary tracking-wide uppercase">100% Independent Analysis</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] font-serif font-bold text-foreground leading-[1.05] tracking-tight text-balance shadow-black drop-shadow-sm">
              {region ? (
                <>
                  Find the Right Care Home in <span className="text-primary italic relative">
                    {region}
                    <svg className="absolute w-full h-3 -bottom-1 left-0 text-secondary/30 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                      <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                    </svg>
                  </span>
                </>
              ) : (
                <>
                  Find the right care home for Mum. <br className="hidden lg:block" />
                  <span className="text-primary">The full picture.</span>
                </>
              )}
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-foreground/80 leading-relaxed max-w-2xl text-pretty font-light">
              {subheadline}
            </p>

            <div className="flex flex-wrap gap-x-8 gap-y-4 pt-2">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-border flex items-center justify-centre text-primary">
                    <benefit.icon className="w-5 h-5" strokeWidth={2} />
                  </div>
                  <span className="text-base font-medium text-foreground">{benefit.text}</span>
                </div>
              ))}
            </div>

            {/* Mobile Only CTA */}
            <div className="lg:hidden pt-6">
              <Button
                size="lg"
                className="w-full h-14 text-lg bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 rounded-xl"
                onClick={() => router.push("/free-assessment")}
              >
                Find Care Homes Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Right: RESTORED Lead Magnet Layout */}
          <div className="hidden lg:flex justify-centre items-center lg:col-span-5">
            <div className="max-w-md w-full relative">
              {/* Subtle glow behind */}
              <div className="absolute -inset-4 bg-primary/20 blur-2xl rounded-full opacity-0 hover:opacity-100 transition-opacity duration-500" />

              <div className="relative bg-white rounded-xl shadow-lg border border-border overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-primary to-primary h-16 flex items-center justify-centre text-primary-foreground">
                  <p className="text-2xl font-serif font-bold text-centre">3 Recommended Homes — Free</p>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-5">
                  {/* Trust indicators */}
                  <div className="flex items-center justify-centre gap-3 pb-4 border-b border-border">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-[#F59E0B] fill-[#F59E0B]" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                      <span className="text-sm text-foreground/70 ml-1">Trusted across England & Wales</span>
                    </div>
                  </div>

                  {/* Benefits List */}
                  <div className="space-y-3">
                    <ul className="space-y-2.5">
                      {formBenefits.map((text, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-centre flex-shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-primary" strokeWidth={3} />
                          </div>
                          <span className="text-base text-foreground">{text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <Input
                      id="postcode"
                      type="text"
                      placeholder="Your postcode (e.g. B15 2TT)"
                      value={postcode}
                      onChange={(e) => setPostcode(e.target.value.toUpperCase())}
                      className="h-14 text-lg text-centre border-border focus:border-primary focus:ring-primary rounded-xl"
                    />
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-14 text-lg font-semibold bg-secondary hover:bg-secondary/90 text-white rounded-xl shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-200"
                    >
                      {isSubmitting ? (
                        "Starting..."
                      ) : (
                        <>
                          See My Care Home Options
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                    <div className="flex items-center justify-centre gap-2 pt-1">
                      <Database className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium text-primary">18 verified data points</span>
                    </div>
                    <p className="text-centre text-sm text-foreground/60">
                      One less thing to worry about. Delivered in 10 minutes.
                    </p>
                  </form>

                  {/* Footer */}
                  <div className="flex items-center justify-centre gap-6 pt-3 border-t border-border">
                    <div className="flex items-center gap-1.5 text-sm text-foreground/70">
                      <ShieldCheck className="w-4 h-4 text-primary" />
                      <span>100% Free</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-sm text-foreground/70">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>10 min Delivery</span>
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
