import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Check, X, AlertCircle, Users, TrendingDown, PoundSterling, Target, ShieldAlert } from "lucide-react"
import Link from "next/link"

const comparisonRows = [
  {
    category: "Who Pays Them?",
    icon: PoundSterling,
    free: "Care homes (commission)",
    rightCareHome: "You only (transparent fee)",
    highlight: true,
  },
  {
    category: "Payment Size",
    icon: TrendingDown,
    free: "£5,000–£7,000 per placement",
    rightCareHome: "£119 transparent fee",
    highlight: true,
  },
  {
    category: "Main Incentive",
    icon: Target,
    free: "Place you in highest-paying home",
    rightCareHome: "Find safest, best-value home",
    highlight: false,
  },
  {
    category: "Conflict of Interest",
    icon: ShieldAlert,
    free: "HUGE",
    rightCareHome: "ZERO",
    highlight: true,
  },
  {
    category: "Advice Based On",
    icon: Users,
    free: "Commission size",
    rightCareHome: "15+ independent data sources",
    highlight: false,
  },
  {
    category: "Independence",
    icon: AlertCircle,
    free: false,
    rightCareHome: true,
    highlight: false,
  },
]

export function IndependenceComparisonSection() {
  return (
    <section className="relative py-20 md:py-28 lg:py-32 bg-[#FDFBF7] overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#D17A6F]/5 via-transparent to-transparent opacity-60" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#4F6F52]/5 via-transparent to-transparent opacity-40" />

      <div className="container relative mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="text-centre mb-16 md:mb-20 space-y-5">
          <Badge
            variant="outline"
            className="mx-auto text-xs font-semibold tracking-wide border-[#D17A6F]/30 text-[#D17A6F] bg-white/60 backdrop-blur-sm px-4 py-1.5 shadow-sm"
          >
            THE TRUTH ABOUT 'FREE' SERVICES
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#1A231E] tracking-tight leading-tight">
            Why Our £119 Report Beats
            <br />
            <span className="text-[#D17A6F]">'Free' Advice</span>
          </h2>
          <p className="text-lg md:text-xl text-[#1A231E]/70 max-w-3xl mx-auto leading-relaxed font-light">
            Most "free" services aren't actually free—they're paid substantial commissions by care homes. Here's what
            that means for you.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-[0_8px_32px_-8px_rgba(0,0,0,0.1)] border border-[#E8E5DF]/60 overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-12 gap-0 border-b border-[#E8E5DF]/60">
              <div className="col-span-12 md:col-span-5 p-6 md:p-8 bg-[#F5F3EF]/50">
                <span className="text-sm font-bold uppercase tracking-wider text-[#1A231E]/60">Comparison</span>
              </div>
              <div className="col-span-6 md:col-span-3 p-6 md:p-8 text-centre border-l border-[#E8E5DF]/60 bg-[#FEF2F2]">
                <div className="font-serif font-bold text-lg md:text-xl text-[#1A231E] mb-1">'Free' Services</div>
                <Badge className="bg-[#D17A6F] text-white border-0 text-xs">Commission-Based</Badge>
              </div>
              <div className="col-span-6 md:col-span-4 p-6 md:p-8 text-centre border-l border-[#E8E5DF]/60 bg-[#4F6F52]/5 relative">
                <Badge className="absolute top-3 right-3 bg-[#4F6F52] text-white border-0 text-xs px-2 py-1">
                  100% INDEPENDENT
                </Badge>
                <div className="font-serif font-bold text-lg md:text-xl text-[#4F6F52] mb-1">RightCareHome</div>
                <Badge className="bg-[#4F6F52]/10 text-[#4F6F52] border border-[#4F6F52]/20 text-xs">
                  No Commissions
                </Badge>
              </div>
            </div>

            {/* Table Rows */}
            {comparisonRows.map((row, index) => {
              const Icon = row.icon
              return (
                <div
                  key={index}
                  className={`grid grid-cols-12 gap-0 border-b border-[#E8E5DF]/40 last:border-0 ${
                    row.highlight ? "bg-[#FFFBF5]" : "bg-white/50"
                  }`}
                >
                  <div className="col-span-12 md:col-span-5 p-4 md:p-6 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#F5F3EF] flex items-center justify-centre flex-shrink-0">
                      <Icon className="w-5 h-5 text-[#8B7355]" />
                    </div>
                    <span className="font-semibold text-sm md:text-base text-[#1A231E]">{row.category}</span>
                  </div>
                  <div className="col-span-6 md:col-span-3 p-4 md:p-6 flex items-center justify-centre text-centre border-l border-[#E8E5DF]/60">
                    {typeof row.free === "boolean" ? (
                      row.free ? (
                        <div className="w-8 h-8 rounded-full bg-[#4F6F52] flex items-center justify-centre">
                          <Check className="w-5 h-5 text-white stroke-[2.5]" />
                        </div>
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-[#D17A6F] flex items-center justify-centre">
                          <X className="w-5 h-5 text-white stroke-[2.5]" />
                        </div>
                      )
                    ) : (
                      <span className="text-sm md:text-base text-[#1A231E]/80">{row.free}</span>
                    )}
                  </div>
                  <div className="col-span-6 md:col-span-4 p-4 md:p-6 flex items-center justify-centre text-centre border-l border-[#E8E5DF]/60 bg-[#4F6F52]/5">
                    {typeof row.rightCareHome === "boolean" ? (
                      row.rightCareHome ? (
                        <div className="w-8 h-8 rounded-full bg-[#4F6F52] flex items-center justify-centre">
                          <Check className="w-5 h-5 text-white stroke-[2.5]" />
                        </div>
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-[#D17A6F] flex items-center justify-centre">
                          <X className="w-5 h-5 text-white stroke-[2.5]" />
                        </div>
                      )
                    ) : (
                      <span className="text-sm md:text-base font-semibold text-[#4F6F52]">{row.rightCareHome}</span>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Car Salesman Analogy */}
        <div className="max-w-3xl mx-auto mb-16 p-8 md:p-10 bg-gradient-to-br from-[#FEF2F2] to-white rounded-3xl border-2 border-[#D17A6F]/20 shadow-soft-lg">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-[#D17A6F]/10 flex items-center justify-centre flex-shrink-0">
              <AlertCircle className="w-6 h-6 text-[#D17A6F]" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-serif font-bold text-[#1A231E] mb-3">Think About It</h3>
              <p className="text-base md:text-lg text-[#1A231E]/80 leading-relaxed">
                Would you trust a car salesman to give you objective advice on which car to buy? Of course not. He'll
                simply sell you the one with the biggest commission. So why trust a decision worth{" "}
                <span className="font-bold text-[#D17A6F]">£50,000 per year</span>—and more importantly, your loved
                one's wellbeing—to a consultant working on the same model?
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-centre">
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
            <Button
              asChild
              size="lg"
              className="h-14 px-8 text-lg bg-[#4F6F52] hover:bg-[#3A5140] text-white rounded-2xl shadow-soft-lg hover:shadow-soft-xl hover:scale-105 transition-all duration-200"
            >
              <Link href="/professional-assessment">
                Get Your Independent Report — £119
                <Check className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <p className="text-sm text-[#1A231E]/60">100% Independent • Money-Back Guarantee</p>
          </div>
        </div>
      </div>
    </section>
  )
}
