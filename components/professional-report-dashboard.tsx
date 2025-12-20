"use client"

import { Lightbulb, ArrowRight, Star, Quote } from "lucide-react"

interface CategoryScore {
  category: string
  score: number
  verdict: string
}

interface DashboardTestimonial {
  name: string
  initials: string
  role: string
  quote: string
  rating: number
}

interface ProfessionalReportDashboardProps {
  homeName?: string
  overallScore?: number
  categoryScores?: CategoryScore[]
  keyTakeaway?: string
  reportId?: string
  testimonial?: DashboardTestimonial
}

export function ProfessionalReportDashboard({
  homeName = "Oakwood Manor Care Home",
  overallScore = 8.7,
  categoryScores = [
    { category: "Safety", score: 9.2, verdict: "Excellent" },
    { category: "Medical Care", score: 8.5, verdict: "Very Good" },
    { category: "Staff Quality", score: 8.8, verdict: "Excellent" },
    { category: "Financial Stability", score: 8.3, verdict: "Very Good" },
    { category: "Comfort", score: 8.9, verdict: "Excellent" },
  ],
  keyTakeaway = "Oakwood Manor demonstrates exceptional care standards with strong financial backing and experienced staff. Their recent CQC inspection showed significant improvements in medication management, and family satisfaction scores are above regional average.",
  reportId = "PROF-2025-01-27-XYZ789",
  testimonial = {
    name: "Patricia Williams",
    initials: "PW",
    role: "Daughter, Birmingham",
    quote:
      "The Professional Report was worth every penny. The negotiation scripts alone saved us over £8,000 in the first year.",
    rating: 5,
  },
}: ProfessionalReportDashboardProps) {
  const getScoreColor = (score: number) => {
    if (score >= 8.0) return "#27AE60"
    if (score >= 6.0) return "#F2994A"
    return "#EB5757"
  }

  const getOverallVerdict = (score: number) => {
    if (score >= 8.0) return "(Excellent)"
    if (score >= 6.0) return "(Good)"
    return "(Needs Improvement)"
  }

  const getIndicatorColor = (score: number) => {
    if (score >= 8.0) return "#27AE60"
    if (score >= 6.0) return "#F2994A"
    return "#EB5757"
  }

  const getTakeawayBgColor = (score: number) => {
    if (score >= 8.0) return "bg-[#E8F5E9]"
    if (score >= 6.0) return "bg-[#FFF3E0]"
    return "bg-[#FFEBEE]"
  }

  const getTakeawayBorderColor = (score: number) => {
    if (score >= 8.0) return "border-[#A5D6A7]"
    if (score >= 6.0) return "border-[#FFB74D]"
    return "border-[#EF5350]"
  }

  return (
    <div className="w-full p-4 sm:p-6 md:p-10 lg:p-14 xl:p-16 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* [B] Main Verdict */}
        <div className="mb-8 sm:mb-10">
          <h1 className="font-serif font-bold text-[28pt] sm:text-[32pt] md:text-[36pt] leading-tight text-[#1A231E] mb-2 sm:mb-3">
            Our Verdict
          </h1>
          <h2 className="text-[18pt] sm:text-[20pt] md:text-[22pt] text-[#1A231E]/70 leading-relaxed font-sans">
            {homeName} is our top recommendation for your family
          </h2>
        </div>

        {/* Main Content - 2 Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-10">
          {/* [C] Overall Score Component */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 flex flex-col items-center justify-centre border border-[#E8E5DF] shadow-soft-lg">
            <div className="text-[14pt] sm:text-[16pt] font-bold text-[#5A6D7A] tracking-widest mb-4 sm:mb-6 uppercase">
              Overall Score
            </div>
            <div
              className="font-black leading-none mb-3 sm:mb-4"
              style={{
                fontSize: "clamp(64pt, 15vw, 96pt)",
                colour: getScoreColor(overallScore),
              }}
            >
              {overallScore.toFixed(1)}
            </div>
            <div className="text-[20pt] sm:text-[24pt] text-[#5A6D7A] mb-3 sm:mb-4 font-light">/ 10</div>
            <div
              className="text-[20pt] sm:text-[24pt] font-semibold"
              style={{
                colour: getScoreColor(overallScore),
              }}
            >
              {getOverallVerdict(overallScore)}
            </div>
          </div>

          {/* [D] Traffic Light Summary */}
          <div className="flex flex-col justify-centre bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E5DF] shadow-soft-lg">
            <div className="text-[14pt] sm:text-[16pt] font-bold text-[#1A231E] mb-4 sm:mb-5 uppercase tracking-wide">
              Category Scores
            </div>
            <div className="space-y-0">
              {categoryScores.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-3 sm:gap-4 py-3 sm:py-4 ${
                    index !== categoryScores.length - 1 ? "border-b border-[#E8E5DF]" : ""
                  }`}
                >
                  <div
                    className="w-3 h-3 sm:w-4 sm:h-4 rounded-full flex-shrink-0"
                    style={{ backgroundColor: getIndicatorColor(item.score) }}
                  />
                  <span
                    className="text-xs font-medium uppercase tracking-wide w-16 hidden sm:inline-block"
                    style={{ colour: getIndicatorColor(item.score) }}
                  >
                    {item.score >= 8.0 ? "Good" : item.score >= 6.0 ? "Fair" : "Low"}
                  </span>
                  <div className="font-bold text-[14pt] sm:text-[16pt] text-[#1A231E] font-sans flex-1 min-w-0">
                    {item.category}
                  </div>
                  <div className="text-[14pt] sm:text-[16pt] text-[#5A6D7A] text-right font-medium whitespace-nowrap">
                    {item.score.toFixed(1)}/10
                  </div>
                  <div
                    className="text-[14pt] sm:text-[16pt] font-bold text-right whitespace-nowrap hidden md:block"
                    style={{ colour: getScoreColor(item.score) }}
                  >
                    {item.verdict}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* [E] Key Takeaway Box */}
        <div
          className={`${getTakeawayBgColor(overallScore)} rounded-2xl p-4 sm:p-6 border ${getTakeawayBorderColor(overallScore)} mb-6 sm:mb-8 shadow-soft-md`}
        >
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="flex-shrink-0 mt-1">
              <Lightbulb className="w-6 h-6 sm:w-7 sm:h-7 text-[#1A231E]" strokeWidth={2} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[12pt] sm:text-[14pt] font-bold text-[#1A231E] tracking-widest mb-2 sm:mb-3 uppercase">
                Key Takeaway
              </div>
              <p className="text-[14pt] sm:text-[16pt] text-[#1A231E] leading-relaxed font-sans">{keyTakeaway}</p>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="bg-white rounded-2xl p-5 sm:p-6 border border-[#E8E5DF] shadow-soft-lg mb-6 sm:mb-8">
          <div className="flex items-start gap-4">
            <Quote className="w-8 h-8 text-[#4F6F52]/30 flex-shrink-0" />
            <div className="flex-1">
              <p className="text-[14pt] sm:text-[16pt] text-[#1A231E]/80 leading-relaxed mb-4 italic">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#4F6F52] to-[#3d5741] flex items-center justify-centre text-white font-serif font-bold text-sm">
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-[#1A231E] text-sm">{testimonial.name}</p>
                    <p className="text-xs text-[#1A231E]/60">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* [F] CTA Link */}
        <div className="text-centre">
          <a
            href="#full-analysis"
            className="inline-flex items-center gap-2 sm:gap-3 text-[16pt] sm:text-[18pt] font-bold text-[#4F6F52] hover:text-[#3d5741] hover:underline transition-all group min-h-[44px]"
          >
            Dive into the details: Full Analysis
            <ArrowRight
              className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform"
              strokeWidth={2.5}
            />
          </a>
        </div>
      </div>
    </div>
  )
}
