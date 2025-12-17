import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Check, X, Sparkles } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Pricing | RightCareHome - Free vs Professional Report",
  description:
    "Compare our Free (18 data points) and Professional (206 data points) care home assessments. Transparent pricing, no hidden fees, money-back guarantee.",
}

export default function PricingPage() {
  const comparisonData = [
    {
      category: "Care Home Matches",
      free: "3 personalised matches",
      pro: "3 personalised matches",
    },
    {
      category: "Data Points Analysed",
      free: "18 Data Points",
      pro: "206 Data Points",
      proBadge: "11x MORE",
    },
    {
      category: "Official Regulatory Ratings",
      free: true,
      pro: true,
    },
    {
      category: "Food Hygiene Data",
      free: false,
      pro: true,
      proBadge: "EXCLUSIVE",
    },
    {
      category: "Family Engagement Insights",
      free: false,
      pro: true,
      proBadge: "EXCLUSIVE",
    },
    {
      category: "Fair Cost Calculator",
      free: false,
      pro: true,
      proBadge: "EXCLUSIVE",
    },
    {
      category: "Negotiation Scripts",
      free: false,
      pro: true,
      proBadge: "EXCLUSIVE",
    },
    {
      category: "Local Authority Funding Guide",
      free: false,
      pro: true,
      proBadge: "152 COUNCILS",
    },
    {
      category: "Financial Stability Check",
      free: false,
      pro: true,
      proBadge: "EXCLUSIVE",
    },
    {
      category: "Ownership Intelligence",
      free: false,
      pro: true,
      proBadge: "EXCLUSIVE",
    },
    {
      category: "Staff Continuity Data",
      free: false,
      pro: true,
      proBadge: "EXCLUSIVE",
    },
    {
      category: "Share with Family",
      free: false,
      pro: "5 members, 30 days",
      proBadge: "UK FIRST",
    },
    {
      category: "14-Day Action Plan",
      free: "7-Day Plan",
      pro: "14-Day Action Plan",
      proBadge: "EXCLUSIVE",
    },
  ]

  return (
    <main className="min-h-screen bg-[#FDFBF7]">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-5xl text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-[#1A231E] mb-6 text-balance">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-[#5C6B5E] leading-relaxed max-w-3xl mx-auto mb-4">
            Start with our free assessment. Upgrade to Professional for exclusive data that protects your family from
            hidden risks.
          </p>
          <p className="text-base text-[#C88D79] font-semibold">
            No commissions. No hidden fees. Money-back guarantee.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <div className="bg-white rounded-2xl border-2 border-[#E8E3DB] p-8">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-[#1A231E] mb-2">Free Report</h2>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-5xl font-bold text-[#1A231E]">£0</span>
                </div>
                <p className="text-[#5C6B5E]">Perfect for getting started with your care home search</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#7FAD7E] flex-shrink-0 mt-0.5" />
                  <span className="text-[#5C6B5E]">3 Personalised Care Home Matches</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#7FAD7E] flex-shrink-0 mt-0.5" />
                  <span className="text-[#5C6B5E]">18 Data Points Analysed</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#7FAD7E] flex-shrink-0 mt-0.5" />
                  <span className="text-[#5C6B5E]">Basic Regulatory Ratings</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#7FAD7E] flex-shrink-0 mt-0.5" />
                  <span className="text-[#5C6B5E]">7-Day Action Plan</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#7FAD7E] flex-shrink-0 mt-0.5" />
                  <span className="text-[#5C6B5E]">Local Area Analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#7FAD7E] flex-shrink-0 mt-0.5" />
                  <span className="text-[#5C6B5E]">Ready in 10 minutes</span>
                </li>
              </ul>
              <Button
                asChild
                className="w-full bg-white border-2 border-[#4F6F52] text-[#4F6F52] hover:bg-[#4F6F52] hover:text-white"
                size="lg"
              >
                <Link href="/free-assessment">Start Free Assessment</Link>
              </Button>
            </div>

            {/* Professional Plan */}
            <div className="bg-[#4F6F52] rounded-2xl p-8 relative shadow-xl">
              <div className="absolute top-0 right-8 -translate-y-1/2">
                <div className="bg-[#C88D79] text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  RECOMMENDED
                </div>
              </div>
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-white mb-2">Professional Report</h2>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-5xl font-bold text-white">£119</span>
                  <span className="text-white/80">one-time</span>
                </div>
                <p className="text-white/90">Comprehensive analysis with exclusive data unavailable anywhere else</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#7FAD7E] flex-shrink-0 mt-0.5" />
                  <span className="text-white">Everything in Free, plus:</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#7FAD7E] flex-shrink-0 mt-0.5" />
                  <span className="text-white">
                    <strong>206 Data Points</strong> (11x more than Free)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#7FAD7E] flex-shrink-0 mt-0.5" />
                  <span className="text-white">Food Hygiene & Safety Data</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#7FAD7E] flex-shrink-0 mt-0.5" />
                  <span className="text-white">Family Engagement Insights</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#7FAD7E] flex-shrink-0 mt-0.5" />
                  <span className="text-white">Fair Cost Calculator + Negotiation Scripts</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#7FAD7E] flex-shrink-0 mt-0.5" />
                  <span className="text-white">Financial Stability & Ownership Check</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#7FAD7E] flex-shrink-0 mt-0.5" />
                  <span className="text-white">Your Council's Funding Guide (152 councils)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#7FAD7E] flex-shrink-0 mt-0.5" />
                  <span className="text-white">Share with 5 Family Members (30 days)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#7FAD7E] flex-shrink-0 mt-0.5" />
                  <span className="text-white">Delivered in 24 hours</span>
                </li>
              </ul>
              <Button asChild className="w-full bg-white text-[#4F6F52] hover:bg-white/90" size="lg">
                <Link href="/professional-assessment">Request Professional Report</Link>
              </Button>
              <p className="text-white/80 text-sm text-center mt-4">30-day money-back guarantee</p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Comparison Table */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-serif font-bold text-[#1A231E] mb-12 text-center">
            Detailed Feature Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-[#E8E3DB]">
                  <th className="text-left py-4 px-4 font-bold text-[#1A231E]">Feature</th>
                  <th className="text-center py-4 px-4 font-bold text-[#1A231E]">Free</th>
                  <th className="text-center py-4 px-4 font-bold text-[#1A231E]">Professional</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((item, index) => (
                  <tr key={index} className="border-b border-[#E8E3DB]">
                    <td className="py-4 px-4 font-medium text-[#1A231E]">{item.category}</td>
                    <td className="py-4 px-4 text-center">
                      {typeof item.free === "boolean" ? (
                        item.free ? (
                          <Check className="w-5 h-5 text-[#7FAD7E] mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-[#C88D79]/40 mx-auto" />
                        )
                      ) : (
                        <span className="text-[#5C6B5E]">{item.free}</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      <div className="flex items-center justify-center gap-2">
                        {typeof item.pro === "boolean" ? (
                          item.pro ? (
                            <Check className="w-5 h-5 text-[#7FAD7E]" />
                          ) : (
                            <X className="w-5 h-5 text-[#C88D79]/40" />
                          )
                        ) : (
                          <span className="text-[#5C6B5E] font-medium">{item.pro}</span>
                        )}
                        {item.proBadge && (
                          <span
                            className={`text-xs font-bold px-2 py-1 rounded-full ${
                              item.proBadge === "EXCLUSIVE"
                                ? "bg-[#C88D79] text-white"
                                : item.proBadge === "UK FIRST"
                                  ? "bg-[#7FAD7E] text-white"
                                  : item.proBadge === "152 COUNCILS"
                                    ? "bg-[#4F6F52] text-white"
                                    : "bg-[#F5F1EB] text-[#5C6B5E]"
                            }`}
                          >
                            {item.proBadge}
                          </span>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-[#F5F1EB]">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-serif font-bold text-[#1A231E] mb-12 text-center">Pricing FAQ</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-xl font-bold text-[#1A231E] mb-3">Why is the Professional Report £119?</h3>
              <p className="text-[#5C6B5E] leading-relaxed">
                We analyse 206 data points from 15 official sources, process financial data, calculate fair cost gaps
                across 15,000+ UK care homes, and provide personalised Local Authority funding guidance for all 152
                councils. The alternative is spending weeks doing this research yourself — or paying hidden £3,000
                commissions to biased directories.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-xl font-bold text-[#1A231E] mb-3">Is there a money-back guarantee?</h3>
              <p className="text-[#5C6B5E] leading-relaxed">
                Yes. If our Professional Report doesn't help you make a more informed decision about care homes, we'll
                refund you in full within 30 days. No questions asked.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-xl font-bold text-[#1A231E] mb-3">Can I upgrade from Free to Professional later?</h3>
              <p className="text-[#5C6B5E] leading-relaxed">
                Absolutely. Start with our free assessment, and if you want the full analysis, you can upgrade at any
                time.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-xl font-bold text-[#1A231E] mb-3">Do you charge commissions from care homes?</h3>
              <p className="text-[#5C6B5E] leading-relaxed">
                Never. We are 100% independent. Our only revenue comes from families who purchase our Professional
                Report. We will never accept commissions from care homes or placement agencies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-serif font-bold text-[#1A231E] mb-6">Start with Our Free Assessment</h2>
          <p className="text-xl text-[#5C6B5E] mb-8">
            Get 3 personalised care home matches in 10 minutes. No payment required.
          </p>
          <Button asChild size="lg" className="bg-[#4F6F52] hover:bg-[#3F5A42] text-white text-lg px-8 py-6">
            <Link href="/free-assessment">Start Free Assessment</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
