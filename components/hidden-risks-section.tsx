"use client"

import { Card } from "@/components/ui/card"
import { Shield, Users, Heart, UtensilsCrossed, AlertCircle, ShieldCheck } from "lucide-react"

const riskCategories = [
  {
    label: "Financial Safety",
    question: "Is the home financially safe? (5-year outlook)",
    icon: Shield,
    colorClass: "text-[#4F6F52]",
    bgClass: "bg-[#4F6F52]/10",
  },
  {
    label: "Staff Retention",
    question: "Will your loved one see new faces every week?",
    icon: Users,
    colorClass: "text-[#2D5A4A]",
    bgClass: "bg-[#2D5A4A]/10",
  },
  {
    label: "Family Engagement Intelligence",
    question: "Do families actually visit here regularly? (Our unique insight)",
    icon: Heart,
    colorClass: "text-[#C88D79]",
    bgClass: "bg-[#C88D79]/10",
  },
  {
    label: "Food Hygiene",
    question: "Are the kitchens up to standard?",
    icon: UtensilsCrossed,
    colorClass: "text-[#B87D69]",
    bgClass: "bg-[#B87D69]/10",
  },
  {
    label: "Hidden Costs",
    question: "What surprise fees are buried in contracts?",
    icon: AlertCircle,
    colorClass: "text-[#D17A6F]",
    bgClass: "bg-[#D17A6F]/10",
  },
  {
    label: "Safety Score",
    question: "What's the real risk rating?",
    icon: ShieldCheck,
    colorClass: "text-[#7FAD7E]",
    bgClass: "bg-[#7FAD7E]/10",
  },
]

export function HiddenRisksSection() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-[#F5F1EB] overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#1A231E] mb-4">
              The{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Hidden Risks</span>
                <span className="absolute bottom-1 left-0 w-full h-2 sm:h-3 bg-[#C88D79]/30 -z-0"></span>
              </span>{" "}
              We Uncover
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-[#5C6B5E] max-w-2xl mx-auto">
              Most families only discover these problems after moving in. Our Professional Report reveals them before
              you commit.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {riskCategories.map((risk, index) => {
              const Icon = risk.icon
              return (
                <Card
                  key={index}
                  className="p-4 sm:p-6 lg:p-8 bg-white border border-[#E8E5DF] rounded-2xl transition-shadow hover:shadow-md"
                >
                  <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4">
                    <div
                      className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl ${risk.bgClass} flex items-center justify-center`}
                    >
                      <Icon className={`w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 ${risk.colorClass}`} />
                    </div>
                    <div>
                      <h4 className={`font-bold text-sm sm:text-base lg:text-lg mb-1 sm:mb-2 ${risk.colorClass}`}>
                        {risk.label}
                      </h4>
                      <p className="text-xs sm:text-sm lg:text-base text-[#5C6B5E] leading-relaxed">{risk.question}</p>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
