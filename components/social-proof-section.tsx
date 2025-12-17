"use client"

import { Card } from "@/components/ui/card"
import { Star, Quote, MapPin } from "lucide-react"

const testimonials = [
  {
    name: "Margaret T.",
    location: "Birmingham",
    rating: 5,
    text: "Saved me weeks of worry. The financial health check spotted issues I would never have found myself. Worth every penny.",
    avatar: "M",
  },
  {
    name: "David R.",
    location: "Manchester",
    rating: 5,
    text: "We nearly chose a home that went into administration 4 months later. RightCareHome's analysis prevented a nightmare.",
    avatar: "D",
  },
  {
    name: "Eleanor P.",
    location: "Surrey",
    rating: 5,
    text: "Finding the right home for Mum with dementia was terrifying. This gave our whole family confidence in our decision.",
    avatar: "E",
  },
  {
    name: "James W.",
    location: "Bristol",
    rating: 5,
    text: "The funding guidance alone saved us over £6,000 in the first year. I only wish I'd found this service sooner.",
    avatar: "J",
  },
  {
    name: "Patricia H.",
    location: "Leeds",
    rating: 5,
    text: "Brilliantly thorough. The family visit patterns data showed us which homes truly care, not just which ones have nice brochures.",
    avatar: "P",
  },
  {
    name: "Robert S.",
    location: "Edinburgh",
    rating: 5,
    text: "After Dad's stroke, we needed answers quickly. RightCareHome delivered a proper, comprehensive analysis within hours.",
    avatar: "R",
  },
]

export function SocialProofSection() {
  return (
    <section id="reviews" className="py-16 sm:py-24 lg:py-32 bg-[#FDFBF7] relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-3 sm:space-y-4">
          <div className="flex items-center justify-center gap-1 sm:gap-2 mb-3 sm:mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 fill-[#C88D79] text-[#C88D79]" />
            ))}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#1A231E]">
            Real Families. Real Peace of Mind.
          </h2>
          <p className="text-base sm:text-lg text-[#1A231E]/70">
            Trusted by families across England, Wales and Scotland
          </p>
        </div>

        {/* Testimonials Grid - Updated to 6 testimonials */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto mb-10 sm:mb-16">
          {testimonials.map((testimonial, i) => (
            <Card key={i} className="p-6 sm:p-8 rounded-2xl shadow-soft-md bg-white border-2 border-[#E8E5DF]">
              <div className="space-y-4 sm:space-y-5">
                <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-[#4F6F52]/20" />

                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-[#C88D79] text-[#C88D79]" />
                  ))}
                </div>

                <p className="text-base sm:text-lg text-[#1A231E]/80 leading-relaxed">"{testimonial.text}"</p>

                <div className="flex items-center gap-3 pt-4 border-t border-[#E8E5DF]">
                  <div className="w-12 h-12 rounded-full bg-[#4F6F52] flex items-center justify-center text-white font-semibold text-base">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-base text-[#1A231E]">{testimonial.name}</div>
                    <div className="text-sm text-[#1A231E]/60 flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Trust Stats - Updated with UK-specific stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {[
            { number: "2,000+", label: "Families Helped" },
            { number: "147", label: "Local Authorities" },
            { number: "£5,000+", label: "Avg. Savings Found" },
            { number: "97%", label: "Would Recommend" },
          ].map((stat, i) => (
            <div key={i} className="text-center p-4 sm:p-6 lg:p-8 bg-white border-2 border-[#E8E5DF] rounded-2xl shadow-soft-sm">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#4F6F52] mb-2">{stat.number}</div>
              <div className="text-xs sm:text-sm lg:text-base font-medium text-[#1A231E]/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
