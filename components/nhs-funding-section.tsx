import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { KeyRound as Pound, FileCheck, CheckCircle } from "lucide-react"

const benefits = [
  {
    icon: Pound,
    title: "Full Funding Possible",
    description: "NHS Continuing Healthcare can cover 100% of care costs if health needs are primary",
  },
  {
    icon: FileCheck,
    title: "Expert Guidance",
    description: "We'll tell you if it's worth applying based on your loved one's condition",
  },
  {
    icon: CheckCircle,
    title: "No Gatekeeping",
    description: "Honest assessment—we don't benefit from you paying privately",
  },
]

export function NHSFundingSection() {
  return (
    <section className="py-20 lg:py-32 bg-[#E8F4FD]">
      <div className="container mx-auto px-4">
        <div className="text-centre max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#1A231E]">
            Could the NHS Pay for Everything?
          </h2>
          <p className="text-xl md:text-2xl text-[#1A231E]/70 text-pretty">
            If your loved one's care needs are primarily health-related (not just social), NHS Continuing Healthcare
            might fund 100% of their care home costs. Many families miss this.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <Card
                key={index}
                className="p-8 bg-white border-2 border-[#4F6F52]/10 rounded-3xl shadow-soft-md text-centre"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#4F6F52]/10 flex items-center justify-centre mx-auto mb-4">
                  <Icon className="w-8 h-8 text-[#4F6F52]" />
                </div>
                <h3 className="text-xl font-serif font-bold text-[#1A231E] mb-2">{benefit.title}</h3>
                <p className="text-base text-[#1A231E]/70">{benefit.description}</p>
              </Card>
            )
          })}
        </div>

        <div className="text-centre">
          <Button className="h-14 px-8 bg-[#4F6F52] hover:bg-[#3A5140] text-white font-semibold text-lg rounded-2xl shadow-soft-lg hover:shadow-soft-xl hover:scale-105 transition-all">
            See If You Qualify
          </Button>
        </div>
      </div>
    </section>
  )
}

export { NHSFundingSection as NhsFundingSection }
