import { ShieldCheck, Search, Target, User } from "lucide-react"
import { Card } from "@/components/ui/card"

const benefits = [
  {
    icon: ShieldCheck,
    title: "100% Independent",
    description:
      "We don't take commissions from care homes. Ever. Our entire fee (£119) comes from you. That means we work for you, not them.",
  },
  {
    icon: Search,
    title: "Data No One Else Has",
    description:
      "Family visit patterns. Financial trend analysis. Staff turnover rates. This is intelligence directories can't access.",
  },
  {
    icon: Target,
    title: "Strategic, Not Generic",
    description:
      "You don't get 50 random listings. You get 3 strategic matches: 'Safe Bet,' 'Best Reputation,' 'Smart Value.' Designed for your priorities.",
  },
  {
    icon: User,
    title: "Built by Families for Families",
    description:
      "Our founder spent 6 weeks researching for their own parent and realized: families are flying blind. We built the tool we wished existed.",
  },
]

export function WhyChooseSection() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-[#F5F3EF] to-[#FDFBF7]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#1A231E]">
            Why Choose RightCareHome
          </h2>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <Card
                key={index}
                className="p-8 bg-white border-2 border-[#E8E5DF] rounded-3xl shadow-soft-md hover:shadow-soft-lg hover-lift transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#4F6F52]/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-[#4F6F52]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-[#1A231E] mb-2">{benefit.title}</h3>
                    <p className="text-base text-[#1A231E]/70 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
