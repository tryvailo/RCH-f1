"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { TrendingUp, GraduationCap, Home, Check, Heart, Users, ChevronDown, ChevronUp, Lightbulb } from "lucide-react"

interface FairCostGapProps {
  localAuthority?: string
  nursingFairCost?: number
  nursingMarketAverage?: number
  residentialFairCost?: number
  residentialMarketAverage?: number
  careType?: "nursing" | "residential"
  numberOfHomes?: number
}

export function ReportFairCostGap({
  localAuthority = "Birmingham City Council",
  nursingFairCost = 1048,
  nursingMarketAverage = 1467,
  residentialFairCost = 876,
  residentialMarketAverage = 1205,
  careType = "nursing",
  numberOfHomes = 3,
}: FairCostGapProps) {
  const [whyExpanded, setWhyExpanded] = useState(false)
  const [whatExpanded, setWhatExpanded] = useState(false)

  // Calculate gaps
  const nursingWeeklyGap = nursingMarketAverage - nursingFairCost
  const nursingYearlyGap = nursingWeeklyGap * 52
  const residentialWeeklyGap = residentialMarketAverage - residentialFairCost
  const residentialYearlyGap = residentialWeeklyGap * 52

  // User's specific gap based on care type
  const userWeeklyGap = careType === "nursing" ? nursingWeeklyGap : residentialWeeklyGap
  const userYearlyGap = userWeeklyGap * 52
  const userFiveYearGap = userYearlyGap * 5

  return (
    <section className="bg-background py-12 md:py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-centre mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4 text-charcoal">
            Understanding Care Home Costs
          </h2>
          <p className="text-lg md:text-xl text-charcoal/70 mb-3">
            The difference between what councils pay and what private families pay
          </p>
          <p className="text-base md:text-lg text-charcoal/80 max-w-2xl mx-auto">
            This isn't about being overcharged — it's about understanding the market so you can make informed decisions.
          </p>
        </div>

        <Card className="p-6 md:p-8 mb-8 md:mb-12 overflow-x-auto">
          <h3 className="text-xl md:text-2xl font-serif font-bold mb-6 text-charcoal">
            {localAuthority} Fair Cost Comparison
          </h3>
          <table className="w-full min-w-[500px]">
            <thead>
              <tr className="border-b-2 border-muted">
                <th className="text-left py-3 px-4 text-base md:text-lg font-semibold text-charcoal">Care Type</th>
                <th className="text-centre py-3 px-4 text-base md:text-lg font-semibold text-charcoal">
                  Council Rate
                  <div className="text-sm font-normal text-muted-foreground">per week</div>
                </th>
                <th className="text-centre py-3 px-4 text-base md:text-lg font-semibold text-charcoal">
                  Market Average
                  <div className="text-sm font-normal text-muted-foreground">per week</div>
                </th>
                <th className="text-centre py-3 px-4 text-base md:text-lg font-semibold text-primary">
                  The Gap
                  <div className="text-sm font-normal text-primary/70">per year</div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className={`border-b ${careType === "nursing" ? "bg-primary/5" : ""}`}>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-2">
                    <span className="text-base md:text-lg font-medium text-charcoal">Nursing Care</span>
                    {careType === "nursing" && (
                      <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full font-medium">
                        Your selection
                      </span>
                    )}
                  </div>
                </td>
                <td className="text-centre py-4 px-4 text-lg md:text-xl font-semibold">
                  £{nursingFairCost.toLocaleString()}
                </td>
                <td className="text-centre py-4 px-4 text-lg md:text-xl font-semibold">
                  £{nursingMarketAverage.toLocaleString()}
                </td>
                <td className="text-centre py-4 px-4 text-lg md:text-xl font-bold text-primary">
                  £{nursingYearlyGap.toLocaleString()}
                </td>
              </tr>
              <tr className={careType === "residential" ? "bg-primary/5" : ""}>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-2">
                    <span className="text-base md:text-lg font-medium text-charcoal">Residential Care</span>
                    {careType === "residential" && (
                      <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full font-medium">
                        Your selection
                      </span>
                    )}
                  </div>
                </td>
                <td className="text-centre py-4 px-4 text-lg md:text-xl font-semibold">
                  £{residentialFairCost.toLocaleString()}
                </td>
                <td className="text-centre py-4 px-4 text-lg md:text-xl font-semibold">
                  £{residentialMarketAverage.toLocaleString()}
                </td>
                <td className="text-centre py-4 px-4 text-lg md:text-xl font-bold text-primary">
                  £{residentialYearlyGap.toLocaleString()}
                </td>
              </tr>
            </tbody>
          </table>
          <p className="text-sm text-muted-foreground mt-4">
            Source: MSIF (Minimum Standard Income Floor) data 2025-2026 for {localAuthority}
          </p>
        </Card>

        {/* Your Situation Breakdown - PROMINENT */}
        <Card className="p-6 md:p-8 mb-8 md:mb-12 bg-gradient-to-br from-primary/10 to-primary/20 border-primary/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-16 -mt-16" />
          <div className="relative">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-6 h-6 md:w-7 md:h-7 text-primary" />
              <h3 className="text-xl md:text-2xl font-serif font-bold text-charcoal">Your Situation</h3>
            </div>
            <p className="text-base md:text-lg text-charcoal/80 mb-6">
              Based on {careType === "nursing" ? "nursing" : "residential"} care in your area, here's what the gap means
              for you:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-centre md:text-left">
                <div className="text-sm uppercase tracking-wide text-primary/80 mb-1">Weekly Difference</div>
                <div className="text-4xl md:text-5xl font-bold text-primary">£{userWeeklyGap.toLocaleString()}</div>
              </div>
              <div className="text-centre md:text-left">
                <div className="text-sm uppercase tracking-wide text-primary/80 mb-1">Annual Difference</div>
                <div className="text-4xl md:text-5xl font-bold text-primary">£{userYearlyGap.toLocaleString()}</div>
              </div>
              <div className="text-centre md:text-left">
                <div className="text-sm uppercase tracking-wide text-primary/80 mb-1">Over 5 Years</div>
                <div className="text-4xl md:text-5xl font-bold text-primary">£{userFiveYearGap.toLocaleString()}</div>
              </div>
            </div>
          </div>
        </Card>

        {/* What This Represents */}
        <Card className="p-6 md:p-8 mb-8 md:mb-12 bg-white/80 backdrop-blur-sm border-sage/20">
          <h3 className="text-xl md:text-2xl font-serif font-bold mb-6 text-charcoal">
            What £{userWeeklyGap}/Week Could Mean for Your Family
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-sage/10 flex items-center justify-centre">
                <Heart className="w-6 h-6 md:w-7 md:h-7 text-sage" />
              </div>
              <div>
                <div className="font-semibold text-base md:text-lg mb-1 text-charcoal">
                  Additional private care for your parents
                </div>
                <div className="text-base text-charcoal/70">
                  £{userWeeklyGap}/week could fund companion visits or therapy
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-sage/10 flex items-center justify-centre">
                <GraduationCap className="w-6 h-6 md:w-7 md:h-7 text-sage" />
              </div>
              <div>
                <div className="font-semibold text-base md:text-lg mb-1 text-charcoal">
                  Grandchildren's education fund
                </div>
                <div className="text-base text-charcoal/70">
                  £{userYearlyGap.toLocaleString()} annually toward their future
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-sage/10 flex items-center justify-centre">
                <Users className="w-6 h-6 md:w-7 md:h-7 text-sage" />
              </div>
              <div>
                <div className="font-semibold text-base md:text-lg mb-1 text-charcoal">Family emergency fund</div>
                <div className="text-base text-charcoal/70">
                  £{userFiveYearGap.toLocaleString()} security over 5 years
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-sage/10 flex items-center justify-centre">
                <Home className="w-6 h-6 md:w-7 md:h-7 text-sage" />
              </div>
              <div>
                <div className="font-semibold text-base md:text-lg mb-1 text-charcoal">
                  Home adaptations for ageing in place
                </div>
                <div className="text-base text-charcoal/70">Making your home safer for longer independence</div>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6 md:p-8 mb-8 md:mb-12">
          <button
            onClick={() => setWhyExpanded(!whyExpanded)}
            className="w-full flex items-center justify-between text-left"
          >
            <h3 className="text-xl md:text-2xl font-serif font-bold text-charcoal">Why Does This Happen?</h3>
            {whyExpanded ? (
              <ChevronUp className="w-6 h-6 text-muted-foreground flex-shrink-0" />
            ) : (
              <ChevronDown className="w-6 h-6 text-muted-foreground flex-shrink-0" />
            )}
          </button>

          {whyExpanded && (
            <div className="mt-6 space-y-4">
              {[
                {
                  title: "Councils conduct rigorous audits",
                  desc: "Local authorities analyse staffing costs, property expenses, and operational overheads before setting rates.",
                },
                {
                  title: "They negotiate based on volume",
                  desc: "Councils place multiple residents, giving them leverage that individual families don't have.",
                },
                {
                  title: "Private families often lack information",
                  desc: "Without knowing the council rate, families have no benchmark for negotiation.",
                },
                {
                  title: "Care homes cross-subsidise",
                  desc: "Low government rates are sometimes offset by charging private payers more — this is legal and common.",
                },
                {
                  title: "This isn't about greed",
                  desc: "It's a market structure issue. Care homes operate on thin margins and must balance their books.",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-muted flex items-center justify-centre text-base font-semibold">
                    {index + 1}
                  </div>
                  <div className="pt-0.5">
                    <div className="font-semibold text-base md:text-lg text-charcoal">{item.title}</div>
                    <p className="text-base text-muted-foreground mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Card>

        <Card className="p-6 md:p-8 mb-8 md:mb-12 bg-gradient-to-br from-sage/5 to-sage/10 border-sage/30">
          <button
            onClick={() => setWhatExpanded(!whatExpanded)}
            className="w-full flex items-center justify-between text-left"
          >
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-sage/20 flex items-center justify-centre">
                <Check className="w-6 h-6 md:w-7 md:h-7 text-sage" />
              </div>
              <h3 className="text-xl md:text-2xl font-serif font-bold text-charcoal">What You Can Do About This</h3>
            </div>
            {whatExpanded ? (
              <ChevronUp className="w-6 h-6 text-muted-foreground flex-shrink-0" />
            ) : (
              <ChevronDown className="w-6 h-6 text-muted-foreground flex-shrink-0" />
            )}
          </button>

          {whatExpanded && (
            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-sage flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-base md:text-lg text-charcoal mb-1">
                    Negotiate on your first visit
                  </div>
                  <div className="text-base text-charcoal/70">
                    Don't accept the first price. Most care homes expect negotiation — it's normal and expected.
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-sage flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-base md:text-lg text-charcoal mb-1">
                    Reference fair cost data in discussions
                  </div>
                  <div className="text-base text-charcoal/70">
                    Care homes know the council rates — mentioning you're aware of them signals you're informed.
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-sage flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-base md:text-lg text-charcoal mb-1">
                    Review the contract carefully
                  </div>
                  <div className="text-base text-charcoal/70">
                    Check for annual fee increase clauses, notice periods, and additional charges before signing.
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-sage flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-base md:text-lg text-charcoal mb-1">
                    Apply for government funding
                  </div>
                  <div className="text-base text-charcoal/70">
                    NHS Continuing Healthcare could cover 100% of costs if health needs qualify. Council support is also
                    available.
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-sage flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-base md:text-lg text-charcoal mb-1">
                    Consider a professional analysis
                  </div>
                  <div className="text-base text-charcoal/70">
                    Our{" "}
                    <a
                      href="/professional-assessment"
                      className="text-primary underline hover:no-underline font-medium"
                    >
                      £119 Professional Report
                    </a>{" "}
                    includes negotiation scripts and funding application support.
                  </div>
                </div>
              </div>
            </div>
          )}
        </Card>

        <Card className="p-6 md:p-8 bg-gradient-to-r from-sage/10 to-transparent border-l-4 border-sage">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-sage/20 flex items-center justify-centre">
              <Lightbulb className="w-6 h-6 text-sage" />
            </div>
            <div>
              <h4 className="font-semibold text-lg md:text-xl text-charcoal mb-2">The Good News</h4>
              <p className="text-base md:text-lg text-charcoal/80 leading-relaxed">
                Families who understand this cost structure and negotiate effectively typically save{" "}
                <strong className="text-primary">£500–2,000 per month</strong> compared to those who accept the first
                quoted price. Knowledge is leverage — and you now have it.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
