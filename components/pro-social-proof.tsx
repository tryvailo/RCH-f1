"use client"

import { Star, Quote, TrendingUp, Users, Clock, Award, CheckCircle2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { formatCurrency, formatNumber, safeArray } from "@/lib/safe-data"

interface Testimonial {
  name: string
  initials: string
  role: string
  location: string
  quote: string
  outcome: string
  savingsAmount?: number
  timeSaved?: string
  rating: number
}

interface ProSocialProofProps {
  testimonials?: Testimonial[]
  stats?: {
    totalFamilies: number
    avgSavings: number
    avgTimeSaved: string
    satisfactionRate: number
    recommendRate: number
  }
}

const DEFAULT_TESTIMONIALS: Testimonial[] = [
  {
    name: "Patricia Williams",
    initials: "PW",
    role: "Daughter",
    location: "Birmingham",
    quote:
      "The Professional Report was worth every penny. The negotiation scripts alone saved us over £8,000 in the first year. We would never have known to ask about hidden fees without this analysis.",
    outcome: "Negotiated £160/week reduction",
    savingsAmount: 8320,
    timeSaved: "Weeks",
    rating: 5,
  },
  {
    name: "David Thompson",
    initials: "DT",
    role: "Son",
    location: "Manchester",
    quote:
      "I was overwhelmed by 200+ care homes. This report narrowed it to 5 strategic options with clear reasoning. The Community Reputation analysis caught a home that looked perfect online but had concerning staff reviews.",
    outcome: "Avoided problematic care home",
    timeSaved: "Weeks",
    rating: 5,
  },
  {
    name: "Margaret Chen",
    initials: "MC",
    role: "Daughter",
    location: "London",
    quote:
      "The funding eligibility section revealed we qualified for NHS CHC. The application templates made the process straightforward. Margaret's care is now 100% NHS funded.",
    outcome: "Secured full NHS funding",
    savingsAmount: 78000,
    rating: 5,
  },
  {
    name: "Robert Harris",
    initials: "RH",
    role: "Son",
    location: "Leeds",
    quote:
      "The 102 data points per home gave us confidence in our decision. We could see exactly why one home scored higher on medical care quality. Robert's father has dementia and needed specialist support.",
    outcome: "Found specialist dementia care",
    timeSaved: "Weeks",
    rating: 5,
  },
]

const DEFAULT_STATS = {
  totalFamilies: 847,
  avgSavings: 12400,
  avgTimeSaved: "45 hours",
  satisfactionRate: 4.9,
  recommendRate: 94,
}

export function ProSocialProof({ testimonials = DEFAULT_TESTIMONIALS, stats = DEFAULT_STATS }: ProSocialProofProps) {
  const safeStats = {
    totalFamilies: stats?.totalFamilies ?? DEFAULT_STATS.totalFamilies,
    avgSavings: stats?.avgSavings ?? DEFAULT_STATS.avgSavings,
    avgTimeSaved: stats?.avgTimeSaved ?? DEFAULT_STATS.avgTimeSaved,
    satisfactionRate: stats?.satisfactionRate ?? DEFAULT_STATS.satisfactionRate,
    recommendRate: stats?.recommendRate ?? DEFAULT_STATS.recommendRate,
  }
  const safeTestimonials = safeArray(testimonials, DEFAULT_TESTIMONIALS)

  return (
    <div className="bg-[#FDFBF7] py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-centre mb-12 sm:mb-16">
          <Badge variant="secondary" className="mb-4 text-base px-5 py-2 bg-[#4F6F52]/10 text-[#4F6F52] border-0">
            Trusted by {formatNumber(safeStats.totalFamilies)}+ Families
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A231E] font-serif leading-tight mb-4">
            Families Who Made Confident Decisions
          </h2>
          <p className="text-lg sm:text-xl text-[#1A231E]/70 max-w-2xl mx-auto">
            Real outcomes from families who invested in the Professional Report
          </p>
        </div>

        {/* Stats Bar */}
        <div className="bg-gradient-to-br from-[#4F6F52] to-[#3d5741] rounded-3xl p-6 sm:p-8 md:p-10 mb-12 shadow-soft-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-white">
            <div className="text-centre">
              <div className="flex items-center justify-centre gap-2 mb-2">
                <TrendingUp className="w-6 h-6 text-white/80" />
              </div>
              <div className="text-3xl sm:text-4xl font-bold mb-1">{formatCurrency(safeStats.avgSavings)}</div>
              <div className="text-sm text-white/80">Average Savings Identified</div>
            </div>
            <div className="text-centre">
              <div className="flex items-center justify-centre gap-2 mb-2">
                <Clock className="w-6 h-6 text-white/80" />
              </div>
              <div className="text-3xl sm:text-4xl font-bold mb-1">{safeStats.avgTimeSaved}</div>
              <div className="text-sm text-white/80">Research Time Saved</div>
            </div>
            <div className="text-centre">
              <div className="flex items-center justify-centre gap-2 mb-2">
                <Star className="w-6 h-6 text-white/80" />
              </div>
              <div className="text-3xl sm:text-4xl font-bold mb-1">{safeStats.satisfactionRate}/5</div>
              <div className="text-sm text-white/80">Client Satisfaction</div>
            </div>
            <div className="text-centre">
              <div className="flex items-center justify-centre gap-2 mb-2">
                <Users className="w-6 h-6 text-white/80" />
              </div>
              <div className="text-3xl sm:text-4xl font-bold mb-1">{safeStats.recommendRate}%</div>
              <div className="text-sm text-white/80">Would Recommend</div>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {safeTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white border-2 border-[#E8E5DF] rounded-3xl p-6 sm:p-8 shadow-soft-lg hover:shadow-soft-xl transition-shadow"
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <Quote className="w-8 h-8 text-[#4F6F52]/30" />
              </div>

              {/* Quote Text */}
              <p className="text-[#1A231E]/80 leading-relaxed mb-6 text-base sm:text-lg">"{testimonial.quote}"</p>

              {/* Outcome Badge */}
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 text-sm px-3 py-1">
                  <CheckCircle2 className="w-3.5 h-3.5 mr-1.5" />
                  {testimonial.outcome}
                </Badge>
                {testimonial.savingsAmount && (
                  <Badge className="bg-[#4F6F52]/10 text-[#4F6F52] border-[#4F6F52]/20 text-sm px-3 py-1">
                    <TrendingUp className="w-3.5 h-3.5 mr-1.5" />
                    Saved {formatCurrency(testimonial.savingsAmount)}
                  </Badge>
                )}
                {testimonial.timeSaved && (
                  <Badge className="bg-blue-100 text-blue-700 border-blue-200 text-sm px-3 py-1">
                    <Clock className="w-3.5 h-3.5 mr-1.5" />
                    {testimonial.timeSaved} saved
                  </Badge>
                )}
              </div>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#4F6F52] to-[#3d5741] flex items-center justify-centre text-white font-serif font-bold">
                    {testimonial.initials}
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1A231E]">{testimonial.name}</h4>
                    <p className="text-sm text-[#1A231E]/60">
                      {testimonial.role}, {testimonial.location}
                    </p>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: testimonial.rating ?? 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-white border-2 border-[#E8E5DF] rounded-3xl p-6 sm:p-8 shadow-soft-lg">
          <h3 className="text-xl font-bold text-[#1A231E] text-centre mb-8 font-serif">
            Why Families Trust Our Analysis
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="text-centre p-4">
              <div className="w-16 h-16 rounded-2xl bg-[#4F6F52]/10 flex items-center justify-centre mx-auto mb-4">
                <Award className="w-8 h-8 text-[#4F6F52]" />
              </div>
              <h4 className="font-semibold text-[#1A231E] mb-2">100% Independent</h4>
              <p className="text-sm text-[#1A231E]/60">Zero commissions from care homes. Our only client is you.</p>
            </div>
            <div className="text-centre p-4">
              <div className="w-16 h-16 rounded-2xl bg-[#4F6F52]/10 flex items-center justify-centre mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-[#4F6F52]" />
              </div>
              <h4 className="font-semibold text-[#1A231E] mb-2">206 Data Points</h4>
              <p className="text-sm text-[#1A231E]/60">
                Comprehensive analysis from official regulatory, financial, and community sources.
              </p>
            </div>
            <div className="text-centre p-4">
              <div className="w-16 h-16 rounded-2xl bg-[#4F6F52]/10 flex items-center justify-centre mx-auto mb-4">
                <Users className="w-8 h-8 text-[#4F6F52]" />
              </div>
              <h4 className="font-semibold text-[#1A231E] mb-2">Expert-Verified</h4>
              <p className="text-sm text-[#1A231E]/60">Every report reviewed by care industry specialists.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
