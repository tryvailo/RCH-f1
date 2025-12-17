"use client"

import { Search, AlertTriangle, TrendingDown, Calendar, UtensilsCrossed } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function InteractivePreviewSection() {
  const benefits = [
    {
      number: 1,
      title: "Family Engagement Intelligence",
      description:
        "We track family visit patterns: Home A sees families 3x/week. Home B? Families visit 0.8x/month. Why? Because residents aren't happy.",
    },
    {
      number: 2,
      title: "Financial Forensics",
      description:
        "See if a home's assets dropped 40% last year. If they can't pay suppliers, how safe is your £80k deposit?",
    },
    {
      number: 3,
      title: "Staff Stability Deep-Dive",
      description:
        "35% turnover = new faces every month. High agency staff reliance = inconsistent care. We show you the data directories hide.",
    },
  ]

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-[#FDFBF7] overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left Column: Text & Benefits */}
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-foreground">
                See What Others Miss
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed">
                While directories show you "beautiful gardens" and "friendly staff," we show you financial spreadsheets,
                family visit patterns, and staff turnover rates. Our 200+ point audit reveals what matters.
              </p>
            </div>

            <div className="space-y-5 sm:space-y-6">
              {benefits.map((benefit) => (
                <div key={benefit.number} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border-2 border-primary shadow-sm flex items-center justify-center">
                    <span className="text-primary font-bold text-base sm:text-lg">{benefit.number}</span>
                  </div>

                  <div className="space-y-1 pt-1">
                    <h4 className="font-bold text-base sm:text-lg text-foreground">{benefit.title}</h4>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual / The Sneak Peek */}
          <div className="relative px-4 sm:px-6 lg:px-8 order-1 lg:order-2">
            <div className="absolute inset-0 bg-white/50 blur-3xl rounded-full" />

            <div className="relative">
              <div className="aspect-[4/5] sm:aspect-[3/4] bg-white rounded-xl shadow-2xl border border-border overflow-hidden">
                <div className="p-4 sm:p-6 lg:p-8 space-y-3 sm:space-y-4 blur-[1px] opacity-40">
                  <div className="h-5 sm:h-6 bg-gray-200 rounded w-3/4" />
                  <div className="h-3 sm:h-4 bg-gray-200 rounded w-1/2" />

                  <div className="space-y-2 mt-4 sm:mt-6">
                    <div className="h-2 sm:h-3 bg-gray-200 rounded w-full" />
                    <div className="h-2 sm:h-3 bg-gray-200 rounded w-full" />
                    <div className="h-2 sm:h-3 bg-gray-200 rounded w-5/6" />
                  </div>

                  <div className="h-20 sm:h-32 bg-gray-200 rounded-lg mt-4 sm:mt-6" />

                  <div className="space-y-2 mt-4 sm:mt-6">
                    <div className="h-2 sm:h-3 bg-gray-200 rounded w-full" />
                    <div className="h-2 sm:h-3 bg-gray-200 rounded w-full" />
                    <div className="h-2 sm:h-3 bg-gray-200 rounded w-4/6" />
                  </div>

                  <div className="grid grid-cols-2 gap-2 sm:gap-3 mt-4 sm:mt-6">
                    <div className="h-12 sm:h-16 bg-gray-200 rounded" />
                    <div className="h-12 sm:h-16 bg-gray-200 rounded" />
                  </div>
                </div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/90 flex items-center justify-center shadow-lg">
                    <Search className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                </div>

                <div className="absolute top-[15%] sm:top-[20%] left-2 sm:left-4 lg:left-2 z-30 max-w-[140px] sm:max-w-[180px] lg:max-w-[200px]">
                  <div className="bg-white rounded-lg shadow-xl border-l-4 border-[#E8A87C] p-2 sm:p-3">
                    <div className="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-2">
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-[#E8A87C] flex-shrink-0" />
                      <span className="text-[10px] sm:text-xs font-bold text-[#E8A87C] uppercase tracking-wide">
                        Concern
                      </span>
                    </div>
                    <div className="font-bold text-foreground mb-0.5 sm:mb-1 text-xs sm:text-sm">Low Family Visits</div>
                    <div className="text-[10px] sm:text-xs text-muted-foreground">0.8 visits/month avg</div>
                  </div>
                </div>

                {/* Financial Risk - top right (existing, repositioned) */}
                <div className="absolute top-[15%] sm:top-[20%] right-2 sm:right-4 lg:right-2 z-30 max-w-[140px] sm:max-w-[180px] lg:max-w-[200px]">
                  <div className="bg-white rounded-lg shadow-xl border-l-4 border-[#D17A6F] p-2 sm:p-3">
                    <div className="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-2">
                      <AlertTriangle className="w-3 h-3 sm:w-4 sm:h-4 text-[#D17A6F] flex-shrink-0" />
                      <span className="text-[10px] sm:text-xs font-bold text-[#D17A6F] uppercase tracking-wide">
                        Risk
                      </span>
                    </div>
                    <div className="font-bold text-foreground mb-0.5 sm:mb-1 text-xs sm:text-sm">Financial: Poor</div>
                    <div className="text-[10px] sm:text-xs text-muted-foreground">Assets -40% in 2024</div>
                  </div>
                </div>

                {/* Staff Turnover - bottom left (existing) */}
                <div className="absolute bottom-[25%] sm:bottom-[30%] left-2 sm:left-4 lg:left-2 z-30 max-w-[140px] sm:max-w-[180px] lg:max-w-[200px]">
                  <div className="bg-white rounded-lg shadow-xl border-l-4 border-[#B87D69] p-2 sm:p-3">
                    <div className="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-2">
                      <TrendingDown className="w-3 h-3 sm:w-4 sm:h-4 text-[#B87D69] flex-shrink-0" />
                      <span className="text-[10px] sm:text-xs font-bold text-[#B87D69] uppercase tracking-wide">
                        Warning
                      </span>
                    </div>
                    <div className="font-bold text-foreground mb-0.5 sm:mb-1 text-xs sm:text-sm">Turnover: 35%</div>
                    <div className="text-[10px] sm:text-xs text-muted-foreground">High agency reliance</div>
                  </div>
                </div>

                <div className="absolute bottom-[25%] sm:bottom-[30%] right-2 sm:right-4 lg:right-2 z-30 max-w-[140px] sm:max-w-[180px] lg:max-w-[200px]">
                  <div className="bg-white rounded-lg shadow-xl border-l-4 border-[#DFA857] p-2 sm:p-3">
                    <div className="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-2">
                      <UtensilsCrossed className="w-3 h-3 sm:w-4 sm:h-4 text-[#DFA857] flex-shrink-0" />
                      <span className="text-[10px] sm:text-xs font-bold text-[#DFA857] uppercase tracking-wide">
                        Alert
                      </span>
                    </div>
                    <div className="font-bold text-foreground mb-0.5 sm:mb-1 text-xs sm:text-sm">Food Hygiene: 3/5</div>
                    <div className="text-[10px] sm:text-xs text-muted-foreground">Below national average</div>
                  </div>
                </div>
              </div>

              <div className="text-center mt-4 sm:mt-6">
                <p className="text-xs sm:text-sm text-muted-foreground uppercase tracking-widest mb-4">
                  Sample of Professional Analysis Report
                </p>
                <Button
                  asChild
                  className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl shadow-lg h-12 px-6"
                >
                  <Link href="/professional-assessment">Request Your Professional Analysis — £119</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
