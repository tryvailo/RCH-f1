"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertTriangle, TrendingUp, Calculator, Lightbulb } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"

interface CareHome {
  name: string
  weeklyFee: number
  additionalFees?: {
    category: "Care" | "Activities" | "Maintenance" | "Services"
    item: string
    typicalCost: string
    frequency: "Weekly" | "Monthly" | "Annual" | "One-time"
    mandatory: boolean
  }[]
}

interface CostAnalysisTabsProps {
  homes?: CareHome[]
}

const DEFAULT_HOMES: CareHome[] = [
  {
    name: "Greenfield Manor",
    weeklyFee: 1450,
    additionalFees: [
      { category: "Care", item: "Continence supplies", typicalCost: "£25/week", frequency: "Weekly", mandatory: true },
      { category: "Care", item: "Diabetes management", typicalCost: "£40/week", frequency: "Weekly", mandatory: false },
      {
        category: "Activities",
        item: "External trips",
        typicalCost: "£15/trip",
        frequency: "Monthly",
        mandatory: false,
      },
      { category: "Services", item: "Hairdressing", typicalCost: "£20/visit", frequency: "Monthly", mandatory: false },
    ],
  },
  {
    name: "Oakwood Lodge",
    weeklyFee: 1380,
    additionalFees: [
      {
        category: "Care",
        item: "Enhanced care package",
        typicalCost: "£120/week",
        frequency: "Weekly",
        mandatory: false,
      },
      {
        category: "Activities",
        item: "Activity programme",
        typicalCost: "£50/month",
        frequency: "Monthly",
        mandatory: true,
      },
      {
        category: "Maintenance",
        item: "Room TV licence",
        typicalCost: "£12/month",
        frequency: "Monthly",
        mandatory: true,
      },
    ],
  },
  {
    name: "Riverside Care",
    weeklyFee: 1520,
    additionalFees: [
      { category: "Care", item: "Personal laundry", typicalCost: "£18/week", frequency: "Weekly", mandatory: true },
      { category: "Services", item: "Chiropody", typicalCost: "£35/visit", frequency: "Monthly", mandatory: false },
    ],
  },
]

export function CostAnalysisTabs({ homes = DEFAULT_HOMES }: CostAnalysisTabsProps) {
  const [activeTab, setActiveTab] = useState("overview")

  // Calculate 5-year projections
  const calculateFiveYearProjection = (home: CareHome) => {
    if (!home.weeklyFee || typeof home.weeklyFee !== "number") {
      return []
    }

    const inflationRate = 0.055 // 5.5% average for care homes
    const years = []
    let cumulativeCost = 0

    for (let year = 1; year <= 5; year++) {
      const yearlyFee = home.weeklyFee * Math.pow(1 + inflationRate, year - 1)
      const annualCost = yearlyFee * 52
      cumulativeCost += annualCost

      years.push({
        year: `Year ${year}`,
        weeklyFee: Math.round(yearlyFee),
        annualCost: Math.round(annualCost),
        cumulativeCost: Math.round(cumulativeCost),
      })
    }

    return years
  }

  // Calculate hidden fees
  const calculateHiddenFees = (home: CareHome) => {
    if (!home.additionalFees) return { weeklyTotal: 0, annualTotal: 0, transparencyScore: 10 }

    let weeklyTotal = 0
    home.additionalFees.forEach((fee) => {
      if (fee.mandatory) {
        const amount = Number.parseFloat(fee.typicalCost.replace(/[£,]/g, ""))
        if (fee.frequency === "Weekly") weeklyTotal += amount
        else if (fee.frequency === "Monthly") weeklyTotal += amount / 4.33
        else if (fee.frequency === "Annual") weeklyTotal += amount / 52
      }
    })

    const annualTotal = weeklyTotal * 52
    const transparencyScore = 10 - Math.min(home.additionalFees.length, 10)

    return { weeklyTotal: Math.round(weeklyTotal), annualTotal: Math.round(annualTotal), transparencyScore }
  }

  // Generate funding scenarios
  const generateFundingScenarios = (home: CareHome) => {
    const weeklyFee = home.weeklyFee
    const hiddenFees = calculateHiddenFees(home)
    const totalWeekly = weeklyFee + hiddenFees.weeklyTotal

    return {
      bestCase: {
        description: "Full NHS CHC funding approved",
        chcFunding: totalWeekly,
        laContribution: 0,
        personalContribution: 0,
        totalWeekly: 0,
      },
      expected: {
        description: "Council funding with personal contribution",
        chcFunding: 0,
        laContribution: Math.round(totalWeekly * 0.65),
        personalContribution: Math.round(totalWeekly * 0.35),
        totalWeekly: Math.round(totalWeekly * 0.35),
      },
      worstCase: {
        description: "Self-funding (no support)",
        chcFunding: 0,
        laContribution: 0,
        personalContribution: totalWeekly,
        totalWeekly: totalWeekly,
      },
    }
  }

  return (
    <div className="w-full bg-card px-4 md:px-6 lg:px-8 py-8 md:py-12 font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6 md:mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-serif mb-3">In-Depth Cost Analysis</h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Understanding the true cost over time with hidden fees, projections, and funding scenarios
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto gap-2 bg-transparent">
            <TabsTrigger
              value="overview"
              className="text-sm md:text-base py-2 md:py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Overview
            </TabsTrigger>
            <TabsTrigger
              value="hidden-fees"
              className="text-sm md:text-base py-2 md:py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Hidden Fees
            </TabsTrigger>
            <TabsTrigger
              value="5-year"
              className="text-sm md:text-base py-2 md:py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              5-Year Projection
            </TabsTrigger>
            <TabsTrigger
              value="scenarios"
              className="text-sm md:text-base py-2 md:py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Funding Scenarios
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="mt-6 space-y-6">
            <Card className="p-6 bg-muted/30 border-border">
              <div className="flex items-start gap-4">
                <Calculator className="w-7 h-7 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Why Cost Analysis Matters</h3>
                  <p className="text-base text-muted-foreground leading-relaxed mb-4">
                    Care home fees can rise 5-6% annually, hidden extras can add £2,000-5,000/year, and funding
                    scenarios dramatically change your out-of-pocket costs. This section helps you plan for the true
                    financial commitment.
                  </p>
                  <p className="text-sm text-muted-foreground italic">
                    Use the tabs above to explore hidden fees, 5-year projections, and funding scenarios for each home.
                  </p>
                </div>
              </div>
            </Card>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {homes.map((home) => {
                const hiddenFees = calculateHiddenFees(home)
                const fiveYear = calculateFiveYearProjection(home)
                const totalFiveYear = fiveYear[4]?.cumulativeCost || 0

                return (
                  <Card key={home.name} className="p-6 bg-card border-border">
                    <h4 className="font-bold text-foreground mb-4 text-lg md:text-xl">{home.name}</h4>
                    <div className="space-y-3 text-base md:text-sm">
                      <div>
                        <p className="text-sm md:text-base text-muted-foreground">Advertised Weekly Fee</p>
                        <p className="text-2xl md:text-xl font-bold text-foreground">
                          £{(home.weeklyFee || 0).toLocaleString()}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm md:text-base text-muted-foreground">+ Mandatory Extras</p>
                        <p className="text-lg md:text-xl font-semibold text-amber-600">
                          +£{hiddenFees.weeklyTotal}/week
                        </p>
                      </div>
                      <div className="pt-2 border-t border-border">
                        <p className="text-sm md:text-base text-muted-foreground">True Weekly Cost</p>
                        <p className="text-xl md:text-2xl font-bold text-foreground">
                          £{((home.weeklyFee || 0) + hiddenFees.weeklyTotal).toLocaleString()}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm md:text-base text-muted-foreground">5-Year Total Cost</p>
                        <p className="text-lg md:text-xl font-semibold text-muted-foreground">
                          £{totalFiveYear.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </Card>
                )
              })}
            </div>
          </TabsContent>

          {/* Hidden Fees Tab */}
          <TabsContent value="hidden-fees" className="mt-6 space-y-6">
            <Card className="p-6 bg-amber-50 border-amber-200">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-7 h-7 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Hidden Fees Detector</h3>
                  <p className="text-base text-foreground/80 leading-relaxed">
                    Many care homes advertise a base fee but charge extras for continence supplies, activities, laundry,
                    and enhanced care. These can add £1,500-£3,000 per year. Below is what we've identified for each
                    home.
                  </p>
                </div>
              </div>
            </Card>

            {homes.map((home) => {
              const hiddenFees = calculateHiddenFees(home)
              const mandatoryFees = home.additionalFees?.filter((f) => f.mandatory) || []
              const optionalFees = home.additionalFees?.filter((f) => !f.mandatory) || []

              return (
                <Card key={home.name} className="p-4 md:p-6 bg-card border-border">
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="font-bold text-foreground text-lg md:text-xl">{home.name}</h4>
                    <Badge variant={hiddenFees.transparencyScore >= 8 ? "default" : "destructive"}>
                      Transparency: {hiddenFees.transparencyScore}/10
                    </Badge>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
                    {/* Mandatory */}
                    <div>
                      <h5 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-500" />
                        Mandatory Extras ({mandatoryFees.length})
                      </h5>
                      {mandatoryFees.length > 0 ? (
                        <div className="space-y-2">
                          {mandatoryFees.map((fee, idx) => (
                            <div key={idx} className="p-3 bg-muted/50 rounded-lg text-sm md:text-base">
                              <div className="flex items-start justify-between mb-1">
                                <span className="font-medium text-foreground">{fee.item}</span>
                                <span className="text-red-600 font-semibold">{fee.typicalCost}</span>
                              </div>
                              <span className="text-xs md:text-sm text-muted-foreground">
                                {fee.frequency} • {fee.category}
                              </span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-sm md:text-base text-muted-foreground italic">No mandatory extras found</p>
                      )}
                    </div>

                    {/* Optional */}
                    <div>
                      <h5 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-amber-500" />
                        Optional Extras ({optionalFees.length})
                      </h5>
                      {optionalFees.length > 0 ? (
                        <div className="space-y-2">
                          {optionalFees.map((fee, idx) => (
                            <div key={idx} className="p-3 bg-muted/50 rounded-lg text-sm md:text-base">
                              <div className="flex items-start justify-between mb-1">
                                <span className="font-medium text-foreground">{fee.item}</span>
                                <span className="text-amber-600 font-semibold">{fee.typicalCost}</span>
                              </div>
                              <span className="text-xs md:text-sm text-muted-foreground">
                                {fee.frequency} • {fee.category}
                              </span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-sm md:text-base text-muted-foreground italic">No optional extras found</p>
                      )}
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-border">
                    <div className="grid grid-cols-3 gap-2 md:gap-4 text-centre">
                      <div>
                        <p className="text-sm md:text-base text-muted-foreground mb-1">Base Fee</p>
                        <p className="text-xl md:text-2xl font-bold text-foreground">£{home.weeklyFee}</p>
                      </div>
                      <div>
                        <p className="text-sm md:text-base text-muted-foreground mb-1">+ Mandatory</p>
                        <p className="text-xl md:text-2xl font-bold text-red-600">+£{hiddenFees.weeklyTotal}</p>
                      </div>
                      <div>
                        <p className="text-sm md:text-base text-muted-foreground mb-1">True Weekly</p>
                        <p className="text-2xl md:text-3xl font-bold text-foreground">
                          £{home.weeklyFee + hiddenFees.weeklyTotal}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              )
            })}
          </TabsContent>

          {/* 5-Year Projection Tab */}
          <TabsContent value="5-year" className="mt-6 space-y-6">
            <Card className="p-6 bg-blue-50 border-blue-200">
              <div className="flex items-start gap-4">
                <TrendingUp className="w-7 h-7 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">5-Year Cost Projection</h3>
                  <p className="text-base text-foreground/80 leading-relaxed">
                    Care home fees typically rise 5-6% annually (higher than general inflation). Below shows projected
                    costs for each home over 5 years, assuming 5.5% annual increases.
                  </p>
                </div>
              </div>
            </Card>

            {homes.map((home) => {
              const fiveYearData = calculateFiveYearProjection(home)

              return (
                <Card key={home.name} className="p-4 md:p-6 bg-card border-border">
                  <h4 className="font-bold text-foreground text-lg md:text-xl mb-6">{home.name}</h4>

                  <div className="mb-6 h-[250px] md:h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={fiveYearData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="year" />
                        <YAxis />
                        <Tooltip formatter={(value) => `£${Number(value).toLocaleString()}`} />
                        <Legend />
                        <Line
                          type="monotone"
                          dataKey="weeklyFee"
                          stroke="hsl(var(--primary))"
                          strokeWidth={2}
                          name="Weekly Fee"
                        />
                        <Line
                          type="monotone"
                          dataKey="annualCost"
                          stroke="hsl(var(--chart-2))"
                          strokeWidth={2}
                          name="Annual Cost"
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-sm md:text-base min-w-[500px]">
                      <thead>
                        <tr className="border-b border-border bg-muted/50">
                          <th className="text-left p-4 font-semibold text-foreground">Year</th>
                          <th className="text-right p-4 font-semibold text-foreground">Weekly Fee</th>
                          <th className="text-right p-4 font-semibold text-foreground">Annual Cost</th>
                          <th className="text-right p-4 font-semibold text-foreground">Cumulative</th>
                        </tr>
                      </thead>
                      <tbody>
                        {fiveYearData.map((yearData, idx) => (
                          <tr key={idx} className="border-b border-border hover:bg-muted/30 min-h-[56px]">
                            <td className="p-4 font-medium text-foreground">{yearData.year}</td>
                            <td className="p-4 text-right text-foreground">
                              £{(yearData.weeklyFee || 0).toLocaleString()}
                            </td>
                            <td className="p-4 text-right text-foreground">
                              £{(yearData.annualCost || 0).toLocaleString()}
                            </td>
                            <td className="p-4 text-right font-semibold text-foreground">
                              £{(yearData.cumulativeCost || 0).toLocaleString()}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="md:hidden bg-muted p-2 mt-2 text-centre text-xs text-muted-foreground rounded">
                    Scroll horizontally to see all columns →
                  </div>

                  <p className="text-sm md:text-base text-muted-foreground mt-4 italic">
                    Total 5-year cost: £{fiveYearData[4]?.cumulativeCost.toLocaleString()}. Assumes 5.5% annual increase
                    (industry average).
                  </p>
                </Card>
              )
            })}
          </TabsContent>

          {/* Funding Scenarios Tab */}
          <TabsContent value="scenarios" className="mt-6 space-y-6">
            <Card className="p-6 bg-emerald-50 border-emerald-200">
              <div className="flex items-start gap-4">
                <Lightbulb className="w-7 h-7 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Funding Scenarios Comparison</h3>
                  <p className="text-base text-foreground/80 leading-relaxed">
                    Your out-of-pocket costs vary dramatically based on funding approval. Below shows Best Case (full
                    NHS CHC), Expected (council with contribution), and Worst Case (self-funding) for each home.
                  </p>
                </div>
              </div>
            </Card>

            {homes.map((home) => {
              const scenarios = generateFundingScenarios(home)
              const savingsBestVsWorst = (scenarios.worstCase.totalWeekly - scenarios.bestCase.totalWeekly) * 52

              return (
                <Card key={home.name} className="p-6 bg-card border-border">
                  <div className="flex items-start justify-between mb-6">
                    <h4 className="font-bold text-foreground text-lg md:text-xl">{home.name}</h4>
                    <Badge variant="outline" className="text-emerald-600 border-emerald-600">
                      Potential savings: £{savingsBestVsWorst.toLocaleString()}/year
                    </Badge>
                  </div>

                  <div className="space-y-4">
                    {/* Best Case */}
                    <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200">
                      <div className="flex items-center justify-between mb-3">
                        <h5 className="font-bold text-foreground">Best Case Scenario</h5>
                        <Badge className="bg-emerald-600 text-white">Your cost: £0/week</Badge>
                      </div>
                      <p className="text-sm md:text-base text-muted-foreground mb-3">
                        {scenarios.bestCase.description}
                      </p>
                      <div className="grid grid-cols-4 gap-2 text-sm md:text-base">
                        <div>
                          <p className="text-muted-foreground text-xs md:text-sm">NHS CHC</p>
                          <p className="font-semibold text-foreground">£{scenarios.bestCase.chcFunding}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground text-xs md:text-sm">Council</p>
                          <p className="font-semibold text-foreground">£{scenarios.bestCase.laContribution}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground text-xs md:text-sm">You Pay</p>
                          <p className="font-semibold text-emerald-600">£{scenarios.bestCase.personalContribution}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground text-xs md:text-sm">Annual Saving</p>
                          <p className="font-semibold text-emerald-600">
                            £{(scenarios.bestCase.chcFunding * 52).toLocaleString()}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Expected */}
                    <div className="p-4 bg-amber-50 rounded-xl border border-amber-200">
                      <div className="flex items-center justify-between mb-3">
                        <h5 className="font-bold text-foreground">Expected Scenario</h5>
                        <Badge className="bg-amber-600 text-white">
                          Your cost: £{scenarios.expected.totalWeekly}/week
                        </Badge>
                      </div>
                      <p className="text-sm md:text-base text-muted-foreground mb-3">
                        {scenarios.expected.description}
                      </p>
                      <div className="grid grid-cols-4 gap-2 text-sm md:text-base">
                        <div>
                          <p className="text-muted-foreground text-xs md:text-sm">NHS CHC</p>
                          <p className="font-semibold text-foreground">£{scenarios.expected.chcFunding}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground text-xs md:text-sm">Council</p>
                          <p className="font-semibold text-foreground">£{scenarios.expected.laContribution}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground text-xs md:text-sm">You Pay</p>
                          <p className="font-semibold text-amber-600">£{scenarios.expected.personalContribution}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground text-xs md:text-sm">Annual Cost</p>
                          <p className="font-semibold text-amber-600">
                            £{(scenarios.expected.totalWeekly * 52).toLocaleString()}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Worst Case */}
                    <div className="p-4 bg-red-50 rounded-xl border border-red-200">
                      <div className="flex items-center justify-between mb-3">
                        <h5 className="font-bold text-foreground">Worst Case Scenario</h5>
                        <Badge className="bg-red-600 text-white">
                          Your cost: £{scenarios.worstCase.totalWeekly}/week
                        </Badge>
                      </div>
                      <p className="text-sm md:text-base text-muted-foreground mb-3">
                        {scenarios.worstCase.description}
                      </p>
                      <div className="grid grid-cols-4 gap-2 text-sm md:text-base">
                        <div>
                          <p className="text-muted-foreground text-xs md:text-sm">NHS CHC</p>
                          <p className="font-semibold text-foreground">£{scenarios.worstCase.chcFunding}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground text-xs md:text-sm">Council</p>
                          <p className="font-semibold text-foreground">£{scenarios.worstCase.laContribution}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground text-xs md:text-sm">You Pay</p>
                          <p className="font-semibold text-red-600">£{scenarios.worstCase.personalContribution}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground text-xs md:text-sm">Annual Cost</p>
                          <p className="font-semibold text-red-600">
                            £{(scenarios.worstCase.totalWeekly * 52).toLocaleString()}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              )
            })}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
