"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Check,
  Shield,
  TrendingUp,
  Clock,
  Lock,
  ArrowRight,
  UtensilsCrossed,
  Users,
  Share2,
  MapPin,
} from "lucide-react"
import Link from "next/link"

export function ReportUpgradeCTA() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-br from-[#FDFBF7] via-[#FDFBF7] to-[#4F6F52]/5 overflow-hidden">
      <div className="max-w-[1100px] mx-auto">
        <Card className="p-6 sm:p-9 md:p-12 glass border-[#E8E5DF] shadow-soft-xl rounded-2xl sm:rounded-3xl">
          <div className="text-centre mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#1A231E] mb-3 sm:mb-4 leading-tight px-2">
              Complete Peace of Mind
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#1A231E]/70 max-w-2xl mx-auto leading-relaxed px-2">
              For £119, receive comprehensive analysis with data you simply cannot find anywhere else
            </p>
            <div className="mt-4 flex items-center justify-centre gap-3 flex-wrap">
              <Badge className="bg-[#E8E5DF] text-[#1A231E]/70 border-0 px-3 py-1.5 text-sm">
                Free: 18 data points
              </Badge>
              <ArrowRight className="w-4 h-4 text-[#4F6F52]" />
              <Badge className="bg-[#4F6F52] text-white border-0 px-3 py-1.5 text-sm font-bold">
                Professional: 206 data points (+188)
              </Badge>
            </div>
          </div>

          <div className="mb-8 sm:mb-10">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-5 sm:mb-7">
              {/* Cost */}
              <div className="bg-gradient-to-br from-[#4F6F52]/10 to-[#4F6F52]/5 rounded-xl sm:rounded-2xl p-5 sm:p-7 border border-[#4F6F52]/20 text-centre">
                <div className="text-sm sm:text-base text-[#1A231E]/60 mb-2">Investment</div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#4F6F52] mb-1">£119</div>
                <div className="text-sm sm:text-base text-[#1A231E]/50">One-time payment</div>
              </div>

              <div className="bg-gradient-to-br from-[#7FAD7E]/15 to-[#7FAD7E]/5 rounded-xl sm:rounded-2xl p-5 sm:p-7 border border-[#7FAD7E] text-centre">
                <div className="text-sm sm:text-base text-[#1A231E]/60 mb-2">Typical Annual Saving</div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#7FAD7E] mb-1">£5,000+</div>
                <div className="text-sm sm:text-base text-[#1A231E]/50">From fee negotiation</div>
              </div>

              <div className="bg-gradient-to-br from-[#C88D79]/10 to-[#C88D79]/5 rounded-xl sm:rounded-2xl p-5 sm:p-7 border border-[#C88D79]/20 text-centre">
                <div className="text-sm sm:text-base text-[#1A231E]/60 mb-2">Return</div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#C88D79] mb-1">42x</div>
                <div className="text-sm sm:text-base text-[#1A231E]/50">Typical first-year return</div>
              </div>
            </div>

            <div className="bg-[#7FAD7E]/10 rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-[#7FAD7E]/30">
              <p className="text-sm sm:text-base md:text-lg text-[#1A231E] text-centre flex items-center justify-centre gap-3 flex-wrap leading-relaxed">
                <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-[#7FAD7E] flex-shrink-0" />
                <span>Most clients identify savings within a fortnight through our negotiation guidance</span>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 mb-8 sm:mb-10">
            {/* What's Included - Added exclusive USPs */}
            <div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#1A231E] mb-4 sm:mb-5">
                What's Included:
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {[
                  { text: "5 homes matched in depth", badge: null },
                  { text: "200+ data points per report", badge: null },
                  { text: "Food Hygiene Data", badge: "EXCLUSIVE" },
                  { text: "Family Engagement Insights", badge: "EXCLUSIVE" },
                  { text: "Fair Cost Calculator (15,000+ UK homes)", badge: "EXCLUSIVE" },
                  { text: "Fee negotiation scripts (word-for-word)", badge: "EXCLUSIVE" },
                  { text: "Financial Stability Check", badge: "EXCLUSIVE" },
                  { text: "Ownership Intelligence (closure risk)", badge: "EXCLUSIVE" },
                  { text: "Staff Continuity Data", badge: "EXCLUSIVE" },
                  { text: "Local Authority Funding Guide", badge: "152 COUNCILS" },
                  { text: "Share with 5 family members", badge: "UK FIRST" },
                  { text: "14-Day Action Plan with phone numbers", badge: "EXCLUSIVE" },
                  { text: "Email support throughout your decision", badge: null },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 sm:gap-4">
                    <Check className="w-5 h-5 md:w-6 md:h-6 text-[#7FAD7E] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span className="text-base sm:text-lg md:text-xl text-[#1A231E]/80 leading-relaxed">
                      {item.text}
                      {item.badge && (
                        <Badge
                          className={`ml-2 ${
                            item.badge === "EXCLUSIVE"
                              ? "bg-[#C88D79]/20 text-[#C88D79]"
                              : item.badge === "UK FIRST"
                                ? "bg-[#7FAD7E]/20 text-[#7FAD7E]"
                                : "bg-[#4F6F52]/20 text-[#4F6F52]"
                          } border-0 text-[10px] px-2 py-0.5 font-bold`}
                        >
                          {item.badge}
                        </Badge>
                      )}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Case Study */}
            <div className="bg-[#FDFBF7] rounded-xl p-5 sm:p-7 border border-[#E8E5DF]">
              <div className="text-base sm:text-lg md:text-xl font-bold text-[#1A231E] mb-3 flex items-center gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#4F6F52]/10 flex items-center justify-centre text-lg sm:text-xl">
                  📊
                </div>
                Real Client Example
              </div>
              <p className="text-base sm:text-lg md:text-xl text-[#1A231E]/70 mb-5 leading-relaxed">
                The Brown family used our fair cost data and negotiation script to reduce their weekly fee by £150.
              </p>
              <div className="space-y-3 text-base sm:text-lg md:text-xl">
                <div className="flex justify-between">
                  <span className="text-[#1A231E]/60">Original quote:</span>
                  <span className="font-semibold">£1,600/week</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#1A231E]/60">Negotiated rate:</span>
                  <span className="font-semibold text-[#7FAD7E]">£1,450/week</span>
                </div>
                <div className="border-t pt-3 mt-3">
                  <div className="flex justify-between">
                    <span className="text-[#1A231E]/80 font-semibold">Annual saving:</span>
                    <span className="font-bold text-[#7FAD7E] text-xl sm:text-2xl">£7,800</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8 sm:mb-10 p-5 sm:p-6 bg-gradient-to-r from-[#C88D79]/10 to-[#4F6F52]/10 rounded-xl border border-[#C88D79]/20">
            <h4 className="text-base sm:text-lg font-bold text-[#1A231E] mb-4 text-centre">
              Data You Won't Find Anywhere Else in the UK
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-centre">
                <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-[#C88D79]/20 flex items-center justify-centre">
                  <UtensilsCrossed className="w-5 h-5 text-[#C88D79]" />
                </div>
                <div className="text-sm font-semibold text-[#1A231E]">FSA Food Safety</div>
                <div className="text-xs text-[#1A231E]/60">Kitchen hygiene scores</div>
              </div>
              <div className="text-centre">
                <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-[#4F6F52]/20 flex items-center justify-centre">
                  <Users className="w-5 h-5 text-[#4F6F52]" />
                </div>
                <div className="text-sm font-semibold text-[#1A231E]">Family Engagement</div>
                <div className="text-xs text-[#1A231E]/60">Real visit patterns</div>
              </div>
              <div className="text-centre">
                <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-[#7FAD7E]/20 flex items-center justify-centre">
                  <Share2 className="w-5 h-5 text-[#7FAD7E]" />
                </div>
                <div className="text-sm font-semibold text-[#1A231E]">Family Sharing</div>
                <div className="text-xs text-[#1A231E]/60">Up to 5 members</div>
              </div>
              <div className="text-centre">
                <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-[#2D5A4A]/20 flex items-center justify-centre">
                  <MapPin className="w-5 h-5 text-[#2D5A4A]" />
                </div>
                <div className="text-sm font-semibold text-[#1A231E]">152 Councils</div>
                <div className="text-xs text-[#1A231E]/60">Local funding rules</div>
              </div>
            </div>
          </div>

          <div className="text-centre mb-5 sm:mb-7">
            <Link href="/professional-assessment">
              <Button
                size="lg"
                className="w-full sm:w-auto sm:min-w-[360px] md:min-w-[450px] h-14 sm:h-16 text-base sm:text-lg md:text-xl font-semibold bg-[#4F6F52] hover:bg-[#3A5140] shadow-soft-lg hover:shadow-soft-xl transition-all duration-200 rounded-xl"
              >
                Request Your Professional Report
                <ArrowRight className="ml-3 h-5 w-5 sm:h-6 sm:w-6" />
              </Button>
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-centre gap-4 sm:gap-6 text-sm sm:text-base md:text-lg text-[#1A231E]/60 mb-6 sm:mb-8">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-[#7FAD7E]" />
              <span>30-day money-back guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 sm:w-5 sm:h-5 text-[#4F6F52]" />
              <span>Secure payment</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#C88D79]" />
              <span>Delivered within 24 hours</span>
            </div>
          </div>

          {/* Comparison table - Updated with exclusive features */}
          <div>
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#1A231E] mb-4 sm:mb-5 text-centre">
              Free vs Professional
            </h3>
            <div className="overflow-x-auto -mx-2 px-2">
              <table className="w-full text-left text-base sm:text-lg border-collapse min-w-[320px]">
                <thead>
                  <tr className="border-b border-[#E8E5DF]">
                    <th className="py-3 px-3 sm:px-4 font-semibold text-[#1A231E]">Feature</th>
                    <th className="py-3 px-3 sm:px-4 font-semibold text-[#1A231E] text-centre">Free</th>
                    <th className="py-3 px-3 sm:px-4 font-semibold text-[#4F6F52] text-centre bg-[#4F6F52]/5">
                      Professional
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Homes matched", free: "3", pro: "5" },
                    { feature: "Data points", free: "Basic", pro: "200+" },
                    { feature: "Food Hygiene Data", free: "—", pro: "✓", badge: "EXCLUSIVE" },
                    { feature: "Family Engagement Insights", free: "—", pro: "✓", badge: "EXCLUSIVE" },
                    { feature: "Fair Cost Calculator", free: "—", pro: "✓", badge: "EXCLUSIVE" },
                    { feature: "Negotiation Scripts", free: "—", pro: "✓", badge: "EXCLUSIVE" },
                    { feature: "Financial Stability Check", free: "—", pro: "✓", badge: "EXCLUSIVE" },
                    { feature: "Staff Continuity Data", free: "—", pro: "✓", badge: "EXCLUSIVE" },
                    { feature: "Local Authority Guide", free: "—", pro: "✓", badge: "152 COUNCILS" },
                    { feature: "Share with Family", free: "—", pro: "✓ (5)", badge: "UK FIRST" },
                    { feature: "14-Day Action Plan", free: "—", pro: "✓", badge: "EXCLUSIVE" },
                    { feature: "Email support", free: "—", pro: "✓" },
                  ].map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "" : "bg-[#FDFBF7]/50"}>
                      <td className="py-3 px-3 sm:px-4 text-[#1A231E]/80">
                        {row.feature}
                        {row.badge && (
                          <Badge
                            className={`ml-2 ${
                              row.badge === "EXCLUSIVE"
                                ? "bg-[#C88D79]/20 text-[#C88D79]"
                                : row.badge === "UK FIRST"
                                  ? "bg-[#7FAD7E]/20 text-[#7FAD7E]"
                                  : "bg-[#4F6F52]/20 text-[#4F6F52]"
                            } border-0 text-[9px] px-1.5 py-0`}
                          >
                            {row.badge}
                          </Badge>
                        )}
                      </td>
                      <td className="py-3 px-3 sm:px-4 text-centre text-[#1A231E]/60">{row.free}</td>
                      <td className="py-3 px-3 sm:px-4 text-centre text-[#4F6F52] font-medium bg-[#4F6F52]/5">
                        {row.pro}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="text-centre mt-5 sm:mt-7">
            <p className="text-sm sm:text-base md:text-lg text-[#1A231E]/50">
              Or continue with your free report • No obligation
            </p>
          </div>
        </Card>
      </div>
    </section>
  )
}
