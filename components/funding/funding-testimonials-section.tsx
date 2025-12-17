import { Star } from "lucide-react"
import Image from "next/image"

export function FundingTestimonialsSection() {
  const testimonials = [
    {
      name: "James Richardson",
      location: "Independent Care Advisor, 10 years",
      image: "/professional-advisor-man.jpg",
      rating: 5,
      quote:
        "I use this with every client. The 152-council database alone saves me 3+ hours per new case. Accuracy matched official assessments 18/20 times. Now part of our standard process.",
      result: "Trusted by advisors",
      isBusiness: true,
    },
    {
      name: "Margaret Davies",
      location: "Birmingham",
      image: "/british-woman-elderly.jpg",
      rating: 5,
      quote:
        "Discovered we qualified for full CHC funding. The calculator showed 'High Likelihood' and gave me exact documents to request. Applied, got assessed, and now the NHS pays £5,800/month.",
      result: "£69,600/year saved",
    },
    {
      name: "Susan Roberts",
      location: "Leeds",
      image: "/british-woman-55.jpg",
      rating: 5,
      quote:
        "Spent 3 weeks reading government websites and got nowhere. This gave me clear answers in 10 minutes. The 'Next Steps' section told me exactly which forms to request from the ICB.",
      result: "20+ hours saved",
    },
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#F5F3EE] to-[#FDFBF7]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F59E0B]/10 text-[#D97706] text-sm font-semibold">
            <Star className="w-4 h-4 fill-current" />
            <span>REAL RESULTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#1A231E] text-balance">
            Trusted by Financial Advisors & Families
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 lg:p-8 border border-[#E8E5DF] shadow-soft-md hover:shadow-soft-xl transition-all duration-300"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#F59E0B] text-[#F59E0B]" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-[#1A231E]/80 leading-relaxed mb-6 text-sm">{testimonial.quote}</p>

              {/* Result Badge */}
              <div className="mb-6 inline-block px-4 py-2 rounded-full bg-gradient-to-r from-[#7FAD7E]/20 to-[#4F6F52]/20 text-[#4F6F52] font-bold text-sm">
                {testimonial.result}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#E8E5DF]">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-[#E8E5DF]">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <div className="font-semibold text-[#1A231E]">{testimonial.name}</div>
                  <div className="text-sm text-[#1A231E]/60">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
