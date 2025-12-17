"use client"

import type React from "react"

import { useEffect, useState } from "react"
import {
  CheckCircle2,
  Database,
  FileSearch,
  Users,
  PoundSterling,
  Shield,
  Home,
  Clock,
  Mail,
  ArrowRight,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface DataPointCategory {
  icon: React.ElementType
  name: string
  count: number
  color: string
}

const dataCategories: DataPointCategory[] = [
  { icon: Shield, name: "Safety & Compliance", count: 15, color: "#22c55e" },
  { icon: Users, name: "Staff Quality", count: 15, color: "#3b82f6" },
  { icon: Home, name: "Medical Care", count: 12, color: "#8b5cf6" },
  { icon: PoundSterling, name: "Financial Analysis", count: 18, color: "#f59e0b" },
  { icon: Sparkles, name: "Comfort & Environment", count: 20, color: "#ec4899" },
  { icon: FileSearch, name: "Community Reputation", count: 12, color: "#06b6d4" },
]

const processingSteps = [
  "Retrieving CQC inspection history for 5 care homes",
  "Analysing 3 years of regulatory compliance data",
  "Scanning 2,400+ Google & carehome.co.uk reviews",
  "Calculating Well-being Index for each home location",
  "Computing Fair Cost Gap and negotiation opportunities",
  "Generating personalised action plan",
]

export function ProOrderConfirmation() {
  const [currentStep, setCurrentStep] = useState(0)
  const [animatedCounts, setAnimatedCounts] = useState<number[]>(dataCategories.map(() => 0))

  // Animate the data point counts
  useEffect(() => {
    const timers: NodeJS.Timeout[] = []
    dataCategories.forEach((category, index) => {
      const duration = 2000
      const steps = 30
      const increment = category.count / steps
      let current = 0

      for (let i = 0; i <= steps; i++) {
        timers.push(
          setTimeout(
            () => {
              current = Math.min(current + increment, category.count)
              setAnimatedCounts((prev) => {
                const newCounts = [...prev]
                newCounts[index] = Math.round(current)
                return newCounts
              })
            },
            (duration / steps) * i + index * 200,
          ),
        )
      }
    })

    return () => timers.forEach(clearTimeout)
  }, [])

  // Cycle through processing steps
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % processingSteps.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const totalDataPoints = dataCategories.reduce((sum, cat) => sum + cat.count, 0)
  const animatedTotal = animatedCounts.reduce((sum, count) => sum + count, 0)

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FDFBF7] to-white py-12 md:py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Success Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#4F6F52]/10 mb-6">
            <CheckCircle2 className="w-10 h-10 md:w-12 md:h-12 text-[#4F6F52]" />
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#1A231E] mb-4">
            Thank You for Your Order
          </h1>
          <p className="text-lg md:text-xl text-[#1A231E]/70 max-w-2xl mx-auto leading-relaxed">
            Your Professional Care Home Report is now being prepared by our team of analysts.
          </p>
        </div>

        {/* Delivery Timeline */}
        <div className="bg-white rounded-2xl p-6 md:p-8 border-2 border-[#4F6F52]/20 shadow-soft-lg mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#4F6F52]/10 flex items-center justify-center">
                <Clock className="w-7 h-7 text-[#4F6F52]" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-[#1A231E]">Delivered Within 2 Hours</h3>
                <p className="text-base text-[#1A231E]/60">To your email inbox</p>
              </div>
            </div>
            <div className="flex items-center gap-3 px-5 py-3 bg-[#4F6F52]/5 rounded-xl">
              <Mail className="w-5 h-5 text-[#4F6F52]" />
              <span className="text-base font-medium text-[#1A231E]">Check your inbox soon</span>
            </div>
          </div>
        </div>

        {/* Data Volume Snapshot */}
        <div className="bg-white rounded-3xl p-6 md:p-10 border border-[#E8E5DF] shadow-soft-lg mb-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#4F6F52]/10 rounded-full mb-4">
              <Database className="w-5 h-5 text-[#4F6F52]" />
              <span className="text-sm font-semibold text-[#4F6F52]">Data Being Processed</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1A231E] mb-2">Your Report Will Analyse</h2>
          </div>

          {/* Animated Total Counter */}
          <div className="text-center mb-10">
            <div className="inline-flex flex-col items-center">
              <span className="text-6xl md:text-7xl lg:text-8xl font-bold text-[#4F6F52] tabular-nums">
                {animatedTotal}
              </span>
              <span className="text-lg md:text-xl text-[#1A231E]/60 mt-2">Data Points Across 5 Care Homes</span>
            </div>
          </div>

          {/* Category Breakdown */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {dataCategories.map((category, index) => (
              <div
                key={category.name}
                className="relative p-5 md:p-6 rounded-2xl border border-[#E8E5DF] bg-[#FDFBF7]/50"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-3"
                  style={{ backgroundColor: `${category.color}15` }}
                >
                  <category.icon className="w-6 h-6" style={{ color: category.color }} />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-[#1A231E] tabular-nums mb-1">
                  {animatedCounts[index]}
                </div>
                <div className="text-sm md:text-base text-[#1A231E]/60 leading-snug">{category.name}</div>
              </div>
            ))}
          </div>

          {/* What's Being Processed */}
          <div className="mt-10 pt-8 border-t border-[#E8E5DF]">
            <h3 className="text-lg font-semibold text-[#1A231E] mb-4 text-center">Currently Processing</h3>
            <div className="relative h-16 overflow-hidden">
              {processingSteps.map((step, index) => (
                <div
                  key={step}
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
                    index === currentStep ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                >
                  <div className="flex items-center gap-3 px-6 py-3 bg-[#4F6F52]/5 rounded-xl">
                    <div className="w-2 h-2 rounded-full bg-[#4F6F52] animate-pulse" />
                    <span className="text-base md:text-lg text-[#1A231E]/80">{step}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Report Contents Preview */}
        <div className="bg-gradient-to-br from-[#4F6F52]/5 to-[#4F6F52]/10 rounded-2xl p-6 md:p-8 border border-[#4F6F52]/20 mb-8">
          <h3 className="text-xl md:text-2xl font-serif font-bold text-[#1A231E] mb-6">What You'll Receive</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "22-page comprehensive analysis",
              "5 care homes compared side-by-side",
              "Individual Well-being Index per home",
              "Fair Cost Gap Calculator",
              "Negotiation scripts ready to use",
              "14-day action plan with checklists",
              "Direct verification links",
              "Funding eligibility analysis",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#4F6F52] flex-shrink-0" />
                <span className="text-base md:text-lg text-[#1A231E]/80">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Order Details */}
        <div className="bg-white rounded-2xl p-6 md:p-8 border border-[#E8E5DF] mb-8">
          <h3 className="text-xl font-bold text-[#1A231E] mb-4">Order Details</h3>
          <div className="space-y-3 text-base text-[#1A231E]/70">
            <div className="flex justify-between">
              <span>Order Number</span>
              <span className="font-medium text-[#1A231E]">
                #RC-{Math.random().toString(36).substr(2, 8).toUpperCase()}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Date</span>
              <span className="font-medium text-[#1A231E]">{new Date().toLocaleDateString("en-GB")}</span>
            </div>
            <div className="flex justify-between">
              <span>Amount Paid</span>
              <span className="font-medium text-[#1A231E]">£119.00</span>
            </div>
            <div className="flex justify-between pt-3 border-t border-[#E8E5DF]">
              <span>Estimated Value</span>
              <span className="font-bold text-[#4F6F52]">£500+</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-base text-[#1A231E]/60 mb-4">
            While you wait, you can review your free report or return to the homepage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="outline" size="lg" className="h-14 px-8 text-lg bg-transparent">
              <Link href="/">Return to Homepage</Link>
            </Button>
            <Button asChild size="lg" className="bg-[#4F6F52] hover:bg-[#3D5A40] text-white h-14 px-8 text-lg">
              <Link href="/free-assessment/thank-you">
                View Free Report
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
