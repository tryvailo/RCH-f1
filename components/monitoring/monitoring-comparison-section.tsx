import { X, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function MonitoringComparisonSection() {
  const comparison = [
    {
      feature: "Daily financial health monitoring",
      diy: false,
      service: true,
    },
    {
      feature: "Automated CQC report tracking",
      diy: false,
      service: true,
    },
    {
      feature: "Staff review analysis (200+ sources)",
      diy: false,
      service: true,
    },
    {
      feature: "Real-time SMS alerts for issues",
      diy: false,
      service: true,
    },
    {
      feature: "Monthly quality reports",
      diy: false,
      service: true,
    },
    {
      feature: "Time investment per month",
      diy: "15+ hours",
      service: "0 hours",
    },
    {
      feature: "Stress level",
      diy: "High anxiety",
      service: "Peace of mind",
    },
    {
      feature: "Cost",
      diy: "Free (your time)",
      service: "From £15/month",
    },
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1A231E] mb-4 sm:mb-6 text-balance">
            DIY Monitoring vs <span className="text-[#4F6F52]">Professional Service</span>
          </h2>
          <p className="text-lg sm:text-xl text-[#1A231E]/70 leading-relaxed">
            You could try to monitor everything yourself. Here's what that actually looks like:
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-[#FDFBF7] to-white rounded-2xl shadow-soft-xl border border-[#E8E5DF] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-[#E8E5DF]">
                    <th className="text-left p-6 font-semibold text-[#1A231E]">What You Need</th>
                    <th className="text-center p-6 w-1/3">
                      <div className="space-y-2">
                        <div className="text-lg font-semibold text-[#1A231E]/60">DIY Approach</div>
                        <div className="text-sm text-[#1A231E]/50">Manual monitoring</div>
                      </div>
                    </th>
                    <th className="text-center p-6 w-1/3 bg-gradient-to-br from-[#4F6F52]/5 to-[#4F6F52]/10">
                      <div className="space-y-2">
                        <div className="text-lg font-semibold text-[#4F6F52]">Our Service</div>
                        <div className="text-sm text-[#4F6F52]/70">Automated AI monitoring</div>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((item, index) => (
                    <tr key={index} className="border-b border-[#E8E5DF] hover:bg-[#FDFBF7]/50 transition-colors">
                      <td className="p-6 font-medium text-[#1A231E]">{item.feature}</td>
                      <td className="p-6 text-center">
                        {typeof item.diy === "boolean" ? (
                          item.diy ? (
                            <Check className="w-6 h-6 text-green-600 mx-auto" strokeWidth={2.5} />
                          ) : (
                            <X className="w-6 h-6 text-red-500 mx-auto" strokeWidth={2.5} />
                          )
                        ) : (
                          <span className="text-[#1A231E]/70">{item.diy}</span>
                        )}
                      </td>
                      <td className="p-6 text-center bg-gradient-to-br from-[#4F6F52]/5 to-[#4F6F52]/10">
                        {typeof item.service === "boolean" ? (
                          item.service ? (
                            <Check className="w-6 h-6 text-[#4F6F52] mx-auto" strokeWidth={2.5} />
                          ) : (
                            <X className="w-6 h-6 text-red-500 mx-auto" strokeWidth={2.5} />
                          )
                        ) : (
                          <span className="text-[#4F6F52] font-semibold">{item.service}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-gradient-to-r from-[#4F6F52] to-[#3A5140] p-8 text-center">
              <p className="text-white text-lg sm:text-xl mb-6">
                The choice is clear: spend 15+ hours monthly worrying, or let us handle it for less than a coffee per
                day.
              </p>
              <Button
                size="lg"
                asChild
                className="bg-white text-[#4F6F52] hover:bg-white/90 rounded-xl shadow-soft-lg hover:shadow-soft-xl hover:scale-105 transition-all h-14 px-8 text-lg font-semibold"
              >
                <Link href="#pricing">Start 30-Day Free Trial</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
