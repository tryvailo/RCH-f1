"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, X, TrendingUp } from "lucide-react"
import Link from "next/link"

export function MonitoringPricingSection() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annually">("monthly")

  const tiers = [
    {
      name: "Essential",
      monthlyPrice: 19,
      annualPrice: 182,
      description: "Core safety & quality monitoring",
      totalValue: 450,
      features: [
        { name: "Monthly comprehensive reports", included: true },
        { name: "CQC safety ratings tracking (6 key areas)", included: true },
        { name: "Food hygiene ratings (FSA official data)", included: true },
        { name: "Fall incident monitoring & trends", included: true },
        { name: "Infection rate tracking", included: true },
        { name: "Emergency response time monitoring", included: true },
        { name: "Financial stability alerts", included: false },
        { name: "Staff turnover & retention analysis", included: false },
        { name: "Family review sentiment analysis", included: false },
        { name: "Proactive SMS alerts for critical issues", included: false },
        { name: "Medical care quality tracking", included: false },
        { name: "Weekly reports", included: false },
        { name: "Expert phone support", included: false },
      ],
      cta: "Choose Essential",
      popular: false,
    },
    {
      name: "Premium",
      monthlyPrice: 29,
      annualPrice: 278,
      description: "Complete protection & early warning",
      totalValue: 890,
      features: [
        { name: "Monthly comprehensive reports", included: true },
        { name: "CQC safety ratings tracking (6 key areas)", included: true },
        { name: "Food hygiene ratings (FSA official data)", included: true },
        { name: "Fall incident monitoring & trends", included: true },
        { name: "Infection rate tracking", included: true },
        { name: "Emergency response time monitoring", included: true },
        { name: "Financial stability alerts", included: true },
        { name: "Staff turnover & retention analysis", included: true },
        { name: "Family review sentiment analysis", included: true },
        { name: "Proactive SMS alerts for critical issues", included: true },
        { name: "Medical care quality tracking", included: true },
        { name: "Bankruptcy risk assessment (Altman Z-Score)", included: true },
        { name: "Staff training & qualification monitoring", included: true },
        { name: "Medication error rate tracking", included: true },
        { name: "Weekly reports", included: false },
        { name: "Expert phone support", included: false },
      ],
      cta: "Start 30-Day Trial",
      popular: true,
    },
    {
      name: "Professional",
      monthlyPrice: 49,
      annualPrice: 470,
      description: "Maximum protection with expert support",
      totalValue: 1450,
      features: [
        { name: "Monthly comprehensive reports", included: true },
        { name: "CQC safety ratings tracking (6 key areas)", included: true },
        { name: "Food hygiene ratings (FSA official data)", included: true },
        { name: "Fall incident monitoring & trends", included: true },
        { name: "Infection rate tracking", included: true },
        { name: "Emergency response time monitoring", included: true },
        { name: "Financial stability alerts", included: true },
        { name: "Staff turnover & retention analysis", included: true },
        { name: "Family review sentiment analysis", included: true },
        { name: "Proactive SMS alerts for critical issues", included: true },
        { name: "Medical care quality tracking", included: true },
        { name: "Bankruptcy risk assessment (Altman Z-Score)", included: true },
        { name: "Staff training & qualification monitoring", included: true },
        { name: "Medication error rate tracking", included: true },
        { name: "Weekly reports (instead of monthly)", included: true },
        { name: "Family visit pattern insights", included: true },
        { name: "Community engagement tracking", included: true },
        { name: "Expert phone support", included: true },
        { name: "Priority alert response", included: true },
      ],
      cta: "Choose Professional",
      popular: false,
    },
  ]

  return (
    <section id="pricing" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Cost Comparison - Enhanced */}
          <div className="text-center max-w-4xl mx-auto mb-12">
            <Badge className="mb-6 px-4 py-2 bg-[#D17A6F]/10 text-[#D17A6F] border-[#D17A6F]/20">
              THE REAL COST COMPARISON
            </Badge>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 border-2 border-red-200">
                <div className="text-sm text-red-700 mb-2 font-semibold">❌ Cost of One Crisis</div>
                <div className="text-4xl font-bold text-red-600 mb-2">£8,500+</div>
                <ul className="text-sm text-red-700 space-y-1 text-left mt-4">
                  <li>• Emergency relocation: £3,500</li>
                  <li>• Lost deposit: £5,000</li>
                  <li>• Stress & anxiety: Priceless</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-[#4F6F52]/10 to-[#7FAD7E]/10 rounded-2xl p-8 border-2 border-[#4F6F52]/20">
                <div className="text-sm text-[#4F6F52] mb-2 font-semibold">✅ Professional Monitoring</div>
                <div className="text-4xl font-bold text-[#4F6F52] mb-2">From £15/month</div>
                <div className="text-sm text-[#4F6F52]/80 mt-4">
                  <div className="font-semibold mb-2">ROI Calculator:</div>
                  <div className="text-lg">
                    One prevented crisis = <span className="font-bold">283 months</span> of monitoring
                  </div>
                </div>
              </div>
            </div>
            
            {/* Urgency Badge */}
            <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-soft-md border-2 border-[#4F6F52]/20 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4F6F52] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4F6F52]"></span>
              </span>
              <span className="text-sm font-semibold text-[#1A231E]">
                ⚡ Limited Time: 30-Day Free Trial • 🎁 Annual Plans: Save 20%
              </span>
            </div>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mb-4 text-balance">
              Choose Your Plan. Invest in Peace of Mind.
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Join <span className="font-semibold text-[#4F6F52]">127 families</span> who joined this week
            </p>

            <div className="inline-flex items-center gap-3 bg-card rounded-xl p-2 border-2 border-border shadow-soft-sm">
              <button
                onClick={() => setBillingPeriod("monthly")}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  billingPeriod === "monthly"
                    ? "bg-primary text-primary-foreground shadow-soft-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingPeriod("annually")}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  billingPeriod === "annually"
                    ? "bg-primary text-primary-foreground shadow-soft-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Annually
                <Badge className="ml-2 bg-accent text-accent-foreground">Save 20%</Badge>
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {tiers.map((tier, index) => (
              <div
                key={index}
                className={`bg-card rounded-2xl p-8 border-2 transition-all relative ${
                  tier.popular
                    ? "border-primary shadow-soft-xl scale-105 md:scale-110"
                    : "border-border hover:border-primary/50 hover:shadow-soft-lg"
                }`}
              >
                {tier.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-6 py-1.5 shadow-soft-md">
                    Most Popular
                  </Badge>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-2">{tier.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{tier.description}</p>
                  {tier.name === "Essential" && (
                    <p className="text-xs text-muted-foreground/80">
                      Perfect for families who want basic safety oversight
                    </p>
                  )}
                  {tier.name === "Premium" && (
                    <p className="text-xs text-muted-foreground/80">
                      Best value: Complete protection with early warning alerts
                    </p>
                  )}
                  {tier.name === "Professional" && (
                    <p className="text-xs text-muted-foreground/80">
                      For families who want maximum peace of mind & expert guidance
                    </p>
                  )}
                </div>

                <div className="mb-4 p-4 bg-accent/10 rounded-xl border border-accent/20">
                  <div className="flex items-center gap-2 mb-1">
                    <TrendingUp className="w-4 h-4 text-accent" />
                    <span className="text-sm font-semibold text-accent">Total Value</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-foreground">£{tier.totalValue}</span>
                    <span className="text-sm text-muted-foreground line-through">worth/year</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    You save £
                    {tier.totalValue - (billingPeriod === "monthly" ? tier.monthlyPrice * 12 : tier.annualPrice)}
                  </p>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-foreground">
                      £{billingPeriod === "monthly" ? tier.monthlyPrice : tier.annualPrice}
                    </span>
                    <span className="text-muted-foreground">/{billingPeriod === "monthly" ? "mo" : "yr"}</span>
                  </div>
                  {billingPeriod === "annually" && (
                    <p className="text-sm text-muted-foreground mt-2">
                      £{Math.round(tier.annualPrice / 12)}/month billed annually
                    </p>
                  )}
                </div>

                <Button
                  asChild
                  className={`w-full h-12 mb-6 rounded-xl font-semibold ${
                    tier.popular
                      ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                      : "bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                  }`}
                >
                  <Link href="/monitoring/subscribe">{tier.cta}</Link>
                </Button>

                <div className="space-y-4">
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                    What You'll Monitor
                  </div>
                  <ul className="space-y-2.5">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        {feature.included ? (
                          <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                        ) : (
                          <X className="w-4 h-4 text-muted-foreground/30 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                        )}
                        <span
                          className={`text-sm leading-relaxed ${
                            feature.included ? "text-foreground" : "text-muted-foreground/60 line-through"
                          }`}
                        >
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
