"use client"

import React from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const comparisonData = [
  {
    feature: "Homes Matched",
    free: "3 Options",
    pro: "5 Detailed Audits",
    type: "text" as const,
  },
  {
    feature: "Data Depth",
    free: "18 Data Points",
    pro: "206 Data Points",
    type: "text" as const,
  },
  {
    feature: "Food Hygiene Data",
    badge: "EXCLUSIVE",
    free: "dash",
    pro: "check",
    type: "icon" as const,
  },
  {
    feature: "Family Engagement Insights",
    badge: "EXCLUSIVE",
    free: "dash",
    pro: "check",
    type: "icon" as const,
  },
  {
    feature: "Fair Cost Calculator",
    badge: "EXCLUSIVE",
    free: "dash",
    pro: "check",
    type: "icon" as const,
  },
  {
    feature: "Negotiation Scripts",
    badge: "EXCLUSIVE",
    free: "dash",
    pro: "check",
    type: "icon" as const,
  },
  {
    feature: "Financial Stability Check",
    badge: "EXCLUSIVE",
    free: "dash",
    pro: "check",
    type: "icon" as const,
  },
  {
    feature: "Ownership Intelligence",
    badge: "EXCLUSIVE",
    free: "dash",
    pro: "check",
    type: "icon" as const,
  },
  {
    feature: "Staff Continuity Data",
    badge: "EXCLUSIVE",
    free: "dash",
    pro: "check",
    type: "icon" as const,
  },
  {
    feature: "Local Authority Funding Guide",
    badge: "152 COUNCILS",
    free: "dash",
    pro: "check",
    type: "icon" as const,
  },
  {
    feature: "Share with Family",
    badge: "UK FIRST",
    free: "dash",
    pro: "check",
    type: "icon" as const,
  },
  {
    feature: "14-Day Action Plan",
    badge: "EXCLUSIVE",
    free: "dash",
    pro: "check",
    type: "icon" as const,
  },
  {
    feature: "Peace of Mind",
    free: "Good Start",
    pro: "Complete Confidence",
    type: "text" as const,
  },
]

export function PricingComparisonSection() {
  const [hoveredCTA, setHoveredCTA] = useState<string | null>(null)

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-background to-muted/30 overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-centre max-w-3xl mx-auto mb-8 sm:mb-16 space-y-3 sm:space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground text-balance">
            Peace of Mind for Your Family
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground text-pretty">
            Choose the level of insight that's right for you
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="hidden lg:block rounded-3xl overflow-hidden border border-border shadow-xl">
            <div className="grid grid-cols-12 gap-0">
              <div className="col-span-5 bg-muted/50 p-6 border-b border-border">
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">FEATURES</span>
              </div>
              <div className="col-span-3 bg-card p-6 text-centre border-b border-l border-border">
                <div className="font-serif font-bold text-xl text-card-foreground mb-1">Free Shortlist</div>
                <div className="text-3xl font-bold text-primary">£0</div>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">Within 10 minutes</p>
              </div>
              <div className="col-span-4 bg-primary/5 p-6 text-centre border-b border-l border-border relative">
                <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground border-0 text-[10px] px-2 py-0.5">
                  RECOMMENDED
                </Badge>
                <div className="font-serif font-bold text-xl text-primary mb-1">Professional</div>
                <div className="text-3xl font-bold text-primary">£119</div>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">Delivered within 24 hours</p>
              </div>

              {comparisonData.map((row, index) => (
                <React.Fragment key={`row-${index}`}>
                  <div
                    className="col-span-5 p-6 bg-card border-b border-border flex items-center gap-2"
                  >
                    <span className="font-medium text-card-foreground">{row.feature}</span>
                    {row.badge && (
                      <Badge
                        className={`${row.badge === "EXCLUSIVE" ? "bg-[#C88D79]/20 text-[#C88D79]" : row.badge === "UK FIRST" ? "bg-[#7FAD7E]/20 text-[#7FAD7E]" : row.badge === "152 COUNCILS" ? "bg-[#4F6F52]/20 text-[#4F6F52]" : "bg-primary/10 text-primary"} border-0 text-[10px] px-2 py-0.5 font-bold`}
                      >
                        {row.badge}
                      </Badge>
                    )}
                  </div>
                  <div
                    className="col-span-3 p-6 bg-card text-centre border-b border-l border-border flex items-center justify-centre"
                  >
                    {row.type === "text" && <span className="text-muted-foreground">{row.free}</span>}
                    {row.type === "icon" && row.free === "dash" && (
                      <span className="text-muted-foreground/50 text-xl">—</span>
                    )}
                  </div>
                  <div
                    className="col-span-4 p-6 bg-primary/5 text-centre border-b border-l border-border flex items-center justify-centre relative"
                  >
                    {row.type === "text" && <span className="font-bold text-primary">{row.pro}</span>}
                    {row.type === "icon" && row.pro === "check" && (
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-centre">
                        <Check className="w-5 h-5 text-primary-foreground stroke-[2.5]" />
                      </div>
                    )}
                    {hoveredCTA === "professional" && (
                      <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-2 rounded-lg shadow-lg text-sm whitespace-nowrap animate-in fade-in slide-in-from-bottom-2 duration-200 z-10">
                        Includes 188 additional data points
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-primary rotate-45" />
                      </div>
                    )}
                  </div>
                </React.Fragment>
              ))}

              <div className="col-span-5 bg-muted/50 p-6"></div>
              <div className="col-span-3 bg-card p-6 border-l border-border">
                <Button asChild variant="ghost" className="w-full h-12 text-primary hover:bg-primary/5">
                  <Link href="/free-assessment">See My Options Free</Link>
                </Button>
              </div>
              <div className="col-span-4 bg-primary/5 p-6 border-l border-border relative">
                <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground border-0 text-[10px] px-2 py-0.5">
                  RECOMMENDED
                </Badge>
                <Button
                  asChild
                  className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl shadow-lg"
                >
                  <Link href="/professional-assessment">Request Professional Report</Link>
                </Button>
                {hoveredCTA === "professional" && (
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-2 rounded-lg shadow-lg text-sm whitespace-nowrap animate-in fade-in slide-in-from-bottom-2 duration-200 z-10">
                    Includes 188 additional data points
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-primary rotate-45" />
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="lg:hidden space-y-4 sm:space-y-6">
            <Card className="p-4 sm:p-6 bg-card border-2 border-border rounded-2xl sm:rounded-3xl shadow-soft-md">
              <div className="text-centre mb-4 sm:mb-6">
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-foreground mb-2">Free Shortlist</h3>
                <div className="text-3xl sm:text-4xl font-bold text-primary">£0</div>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">Within 10 minutes</p>
              </div>
              <ul className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                {comparisonData.map((item, index) => (
                  <li key={index} className="flex items-center justify-between gap-2">
                    <span className="text-xs sm:text-sm text-foreground flex-1">
                      {item.feature}
                      {item.badge && (
                        <Badge
                          className={`ml-1 sm:ml-2 ${item.badge === "EXCLUSIVE" ? "bg-[#C88D79]/20 text-[#C88D79]" : item.badge === "UK FIRST" ? "bg-[#7FAD7E]/20 text-[#7FAD7E]" : item.badge === "152 COUNCILS" ? "bg-[#4F6F52]/20 text-[#4F6F52]" : "bg-primary/10 text-primary"} border-0 text-[8px] sm:text-[10px] px-1.5 sm:px-2 py-0.5`}
                        >
                          {item.badge}
                        </Badge>
                      )}
                    </span>
                    {item.type === "text" ? (
                      <span className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">{item.free}</span>
                    ) : (
                      <span className="text-muted-foreground text-base sm:text-lg">—</span>
                    )}
                  </li>
                ))}
              </ul>
              <Button
                asChild
                variant="ghost"
                className="w-full h-10 sm:h-12 text-sm sm:text-base text-primary hover:bg-primary/5"
              >
                <Link href="/free-assessment">See My Options Free</Link>
              </Button>
            </Card>

            <Card className="p-4 sm:p-6 bg-primary/5 border-4 border-primary rounded-2xl sm:rounded-3xl shadow-soft-xl relative">
              <Badge className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-accent text-accent-foreground border-0 text-[10px] sm:text-xs">
                RECOMMENDED
              </Badge>
              <div className="text-centre mb-4 sm:mb-6">
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-foreground mb-2">
                  Professional Report
                </h3>
                <div className="text-3xl sm:text-4xl font-bold text-primary">£119</div>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">Delivered within 24 hours</p>
              </div>
              <ul className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                {comparisonData.map((item, index) => (
                  <li key={index} className="flex items-center justify-between gap-2">
                    <span className="text-xs sm:text-sm text-foreground font-medium flex-1">
                      {item.feature}
                      {item.badge && (
                        <Badge
                          className={`ml-1 sm:ml-2 ${item.badge === "EXCLUSIVE" ? "bg-[#C88D79]/20 text-[#C88D79]" : item.badge === "UK FIRST" ? "bg-[#7FAD7E]/20 text-[#7FAD7E]" : item.badge === "152 COUNCILS" ? "bg-[#4F6F52]/20 text-[#4F6F52]" : "bg-primary/10 text-primary"} border-0 text-[8px] sm:text-[10px] px-1.5 sm:px-2 py-0.5`}
                        >
                          {item.badge}
                        </Badge>
                      )}
                    </span>
                    {item.type === "text" ? (
                      <span className="text-xs sm:text-sm font-semibold text-foreground whitespace-nowrap">
                        {item.pro}
                      </span>
                    ) : (
                      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary flex items-center justify-centre flex-shrink-0">
                        <Check className="w-3 h-3 sm:w-4 sm:h-4 text-primary-foreground" />
                      </div>
                    )}
                  </li>
                ))}
              </ul>
              <div
                className="relative"
                onMouseEnter={() => setHoveredCTA("professional-mobile")}
                onMouseLeave={() => setHoveredCTA(null)}
              >
                <Button
                  asChild
                  className="w-full h-10 sm:h-12 text-sm sm:text-base bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl shadow-lg"
                >
                  <Link href="/professional-assessment">Request Professional Report</Link>
                </Button>
                {hoveredCTA === "professional-mobile" && (
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-2 rounded-lg shadow-lg text-xs sm:text-sm whitespace-nowrap animate-in fade-in slide-in-from-bottom-2 duration-200 z-10">
                    Includes 188 additional data points
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-primary rotate-45" />
                  </div>
                )}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
