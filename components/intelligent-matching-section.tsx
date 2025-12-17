import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { X, Check, Brain, TrendingUp, Shield } from "lucide-react"

export function IntelligentMatchingSection() {
  const directoryFeatures = [
    "Photos of building",
    "Regulatory rating (often 18+ months old)",
    "Generic care home descriptions",
    "Price (no fee breakdown)",
    "Location on a map",
  ]

  const rightCareHomeFeatures = [
    "200+ point risk audit (financial + staffing + compliance)",
    "Family visit pattern analysis (engagement intelligence)",
    "Staff turnover rates & agency reliance scores",
    "Fee transparency report (no hidden costs)",
    "Financial health check (assets, debts, trends over 3 years)",
    "Personalised matching based on medical needs, personality, budget",
  ]

  const steps = [
    {
      icon: Brain,
      title: "Intelligent Questionnaire",
      description:
        "We don't just ask \"What's your budget?\" We ask about personality, mobility needs, social preferences, medical conditions. Because matching is about more than location.",
    },
    {
      icon: Shield,
      title: "Risk-Weighted Scoring",
      description:
        "Each home gets a composite score: Financial Stability (30%), Staff Turnover (25%), Family Engagement (25%), Regulatory Compliance (20%). Not all factors are equal.",
    },
    {
      icon: TrendingUp,
      title: "Strategic Shortlist",
      description:
        'You get 3 matches: "Safe Bet" (highest safety), "Best Reputation" (community favourite), "Smart Value" (price vs quality). Not just the closest 10 homes.',
    },
  ]

  return (
    <section className="py-12 sm:py-20 lg:py-32 bg-white overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-16 space-y-3 sm:space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#1A231E] text-balance">
            This Isn't a Directory Search. It's an Intelligent Matching System.
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#1A231E]/70">
            Here's what separates us from Rightmove-style care home listings:
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid lg:grid-cols-2 gap-4 sm:gap-8 max-w-6xl mx-auto mb-12 sm:mb-20">
          {/* Directories */}
          <Card className="p-4 sm:p-6 lg:p-8 bg-[#F5F3EF] border-2 border-[#E8E5DF] rounded-2xl sm:rounded-3xl">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#D17A6F]/20 flex items-center justify-center">
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-[#D17A6F]" strokeWidth={2.5} />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-serif font-bold text-[#1A231E]">
                Care Home Directories
              </h3>
            </div>

            <ul className="space-y-2 sm:space-y-3">
              {directoryFeatures.map((feature, i) => (
                <li key={i} className="flex items-start gap-2 sm:gap-3">
                  <X className="w-4 h-4 sm:w-5 sm:h-5 text-[#D17A6F] flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-[#1A231E]/70">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-white/60 rounded-xl border border-[#E8E5DF]">
              <p className="text-xs sm:text-sm text-[#1A231E]/60 italic">
                Result: You're left Googling each home individually, cross-referencing CQC reports, and hoping the
                reviews are honest.
              </p>
            </div>
          </Card>

          {/* RightCareHome */}
          <Card className="p-4 sm:p-6 lg:p-8 bg-[#4F6F52] border-0 rounded-2xl sm:rounded-3xl text-white">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/20 flex items-center justify-center">
                <Check className="w-5 h-5 sm:w-6 sm:h-6 text-white" strokeWidth={2.5} />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-serif font-bold">RightCareHome Intelligence</h3>
            </div>

            <ul className="space-y-2 sm:space-y-3">
              {rightCareHomeFeatures.map((feature, i) => (
                <li key={i} className="flex items-start gap-2 sm:gap-3">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-white/95">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-white/10 rounded-xl border border-white/20">
              <p className="text-xs sm:text-sm text-white/90 italic">
                Result: Full transparency. Risk assessment included. Strategic matches tailored to your needs.
              </p>
            </div>
          </Card>
        </div>

        {/* How It Works - 3 Steps */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-[#1A231E] text-center mb-6 sm:mb-12">
            Our 3-Step Matching Process
          </h3>

          <div className="space-y-4 sm:space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <Card
                  key={index}
                  className="p-4 sm:p-6 lg:p-8 bg-gradient-to-r from-[#F5F3EF] to-white border-2 border-[#E8E5DF] rounded-xl sm:rounded-2xl shadow-soft-md hover:shadow-soft-lg transition-all"
                >
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-[#4F6F52]/10 flex items-center justify-center relative">
                        <Icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-[#4F6F52]" />
                        <Badge className="absolute -top-1.5 -right-1.5 sm:-top-2 sm:-right-2 w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 rounded-full bg-[#C88D79] text-white border-0 flex items-center justify-center text-xs sm:text-sm font-bold p-0">
                          {index + 1}
                        </Badge>
                      </div>
                    </div>

                    <div className="flex-1">
                      <h4 className="text-lg sm:text-xl lg:text-2xl font-serif font-bold text-[#1A231E] mb-2 sm:mb-3">
                        {step.title}
                      </h4>
                      <p className="text-sm sm:text-base text-[#1A231E]/70 leading-relaxed">{step.description}</p>
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
