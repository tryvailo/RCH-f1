"use client"

import { useState } from "react"
import {
  Calculator,
  TrendingDown,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  PoundSterling,
  FileText,
  MessageSquare,
  Copy,
  Check,
  Info,
  ArrowRight,
} from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface CostBreakdown {
  baseFee: number
  hiddenFees: {
    name: string
    amount: number
    frequency: "weekly" | "monthly" | "annually" | "one-time"
  }[]
  totalWeekly: number
  totalAnnual: number
}

interface HomeFinancials {
  name: string
  weeklyFee: number
  fairMarketRate: number
  costBreakdown: CostBreakdown
  negotiationPotential: "high" | "medium" | "low" | { level: string } | { value: string }
  savingsOpportunity: number
}

interface FairCostGapCalculatorProps {
  homes: HomeFinancials[]
  regionalAverage: number
  nationalAverage: number
  userBudget?: number
}

const SAMPLE_HOMES: HomeFinancials[] = [
  {
    name: "Greenfield Manor",
    weeklyFee: 1450,
    fairMarketRate: 1280,
    costBreakdown: {
      baseFee: 1200,
      hiddenFees: [
        { name: "Laundry Service", amount: 45, frequency: "weekly" },
        { name: "Activities Programme", amount: 35, frequency: "weekly" },
        { name: "Personal Care Extras", amount: 85, frequency: "weekly" },
        { name: "Room Enhancement", amount: 85, frequency: "weekly" },
      ],
      totalWeekly: 1450,
      totalAnnual: 75400,
    },
    negotiationPotential: "medium",
    savingsOpportunity: 8840,
  },
  {
    name: "Oakwood Lodge",
    weeklyFee: 1280,
    fairMarketRate: 1180,
    costBreakdown: {
      baseFee: 1100,
      hiddenFees: [
        { name: "Laundry Service", amount: 30, frequency: "weekly" },
        { name: "Activities Programme", amount: 50, frequency: "weekly" },
        { name: "Personal Care Extras", amount: 60, frequency: "weekly" },
        { name: "Hairdressing", amount: 40, frequency: "weekly" },
      ],
      totalWeekly: 1280,
      totalAnnual: 66560,
    },
    negotiationPotential: "high",
    savingsOpportunity: 5200,
  },
  {
    name: "Riverside Care Home",
    weeklyFee: 1150,
    fairMarketRate: 1100,
    costBreakdown: {
      baseFee: 1000,
      hiddenFees: [
        { name: "Laundry Service", amount: 35, frequency: "weekly" },
        { name: "Activities Programme", amount: 40, frequency: "weekly" },
        { name: "Transport", amount: 45, frequency: "weekly" },
        { name: "Newspapers", amount: 30, frequency: "weekly" },
      ],
      totalWeekly: 1150,
      totalAnnual: 59800,
    },
    negotiationPotential: "medium",
    savingsOpportunity: 2600,
  },
  {
    name: "Meadowbrook House",
    weeklyFee: 1320,
    fairMarketRate: 1150,
    costBreakdown: {
      baseFee: 1050,
      hiddenFees: [
        { name: "Laundry Service", amount: 50, frequency: "weekly" },
        { name: "Activities Programme", amount: 60, frequency: "weekly" },
        { name: "Personal Care Extras", amount: 100, frequency: "weekly" },
        { name: "Premium Room", amount: 60, frequency: "weekly" },
      ],
      totalWeekly: 1320,
      totalAnnual: 68640,
    },
    negotiationPotential: "high",
    savingsOpportunity: 8840,
  },
  {
    name: "Sunnydale Residence",
    weeklyFee: 980,
    fairMarketRate: 950,
    costBreakdown: {
      baseFee: 850,
      hiddenFees: [
        { name: "Laundry Service", amount: 30, frequency: "weekly" },
        { name: "Activities Programme", amount: 35, frequency: "weekly" },
        { name: "Personal Care Extras", amount: 45, frequency: "weekly" },
        { name: "Supplies", amount: 20, frequency: "weekly" },
      ],
      totalWeekly: 980,
      totalAnnual: 50960,
    },
    negotiationPotential: "low",
    savingsOpportunity: 1560,
  },
]

const NEGOTIATION_SCRIPTS = [
  {
    id: "occupancy",
    title: "Occupancy Rate Leverage",
    situation: "When the home has vacancies",
    script: `"I understand you currently have some vacant rooms. We're very interested in [Home Name], but our budget is closer to £[Target Price] per week. Given we're ready to proceed quickly, would you be open to discussing a more competitive rate that works for both of us?"`,
    tip: "Best used when occupancy is below 90%. Check CQC reports for resident numbers vs capacity.",
  },
  {
    id: "competitor",
    title: "Competitor Comparison",
    situation: "When you have quotes from other homes",
    script: `"We've received quotes from [Competitor 1] and [Competitor 2] at £[Lower Price] per week with similar care levels. Your home is our preferred choice due to [specific reason], but we need the fee structure to be more competitive. Can you match or come closer to these rates?"`,
    tip: "Have actual quotes ready. Focus on comparable quality homes.",
  },
  {
    id: "hidden-fees",
    title: "Hidden Fees Consolidation",
    situation: "When extras significantly inflate the base price",
    script: `"Looking at your fee structure, I notice additional charges for [laundry/activities/etc.] totaling £[amount] weekly on top of the base fee. Would you consider an all-inclusive package? We'd prefer transparency and predictable costs rather than variable extras."`,
    tip: "Calculate total hidden fees beforehand. Many homes will bundle services for committed residents.",
  },
  {
    id: "long-term",
    title: "Long-Term Commitment",
    situation: "When you're confident about the placement",
    script: `"We're looking for a long-term placement and are prepared to commit. In exchange for a [6/12] month minimum stay guarantee, would you consider a reduced weekly rate? This gives you occupancy certainty whilst helping us manage costs."`,
    tip: "Only use if genuinely planning long-term stay. Some homes offer 5-10% discount for commitments.",
  },
  {
    id: "funding",
    title: "Local Authority Rate Reference",
    situation: "When self-funding at rates above LA levels",
    script: `"I understand self-funders typically pay more than local authority rates. However, the current difference of £[gap] per week seems significant. Could we discuss a rate closer to £[LA rate + reasonable premium]? We want a fair arrangement that reflects the excellent care you provide."`,
    tip: "Research local LA rates (typically £700-900/week). A 10-20% premium is reasonable for self-funders.",
  },
]

const getNegotiationPotentialString = (potential: unknown): string => {
  if (typeof potential === "string") return potential
  if (typeof potential === "object" && potential !== null) {
    if ("level" in potential) return String((potential as { level: string }).level)
    if ("value" in potential) return String((potential as { value: string }).value)
  }
  return "medium"
}

const formatCurrency = (value: number | undefined | null): string => {
  if (value === undefined || value === null || isNaN(value)) return "0"
  return value.toLocaleString()
}

export function FairCostGapCalculator({
  homes: propHomes,
  regionalAverage = 1180,
  nationalAverage = 1050,
  userBudget,
}: FairCostGapCalculatorProps) {
  const homes = propHomes && propHomes.length > 0 ? propHomes : SAMPLE_HOMES

  const [selectedHome, setSelectedHome] = useState<HomeFinancials>(homes[0])
  const [copiedScript, setCopiedScript] = useState<string | null>(null)
  const [showAllScripts, setShowAllScripts] = useState(false)

  const totalPotentialSavings = homes.reduce((sum, home) => sum + (home.savingsOpportunity ?? 0), 0)
  const avgOverpayment =
    homes.length > 0
      ? homes.reduce((sum, home) => sum + ((home.weeklyFee ?? 0) - (home.fairMarketRate ?? 0)), 0) / homes.length
      : 0

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopiedScript(id)
    setTimeout(() => setCopiedScript(null), 2000)
  }

  const getGapColor = (gap: number) => {
    if (gap <= 50) return "text-[#22c55e]"
    if (gap <= 150) return "text-[#eab308]"
    return "text-[#ef4444]"
  }

  const getNegotiationColor = (potential: string) => {
    switch (potential) {
      case "high":
        return "bg-[#22c55e] text-white"
      case "medium":
        return "bg-[#eab308] text-white"
      case "low":
        return "bg-[#ef4444]/80 text-white"
    }
  }

  return (
    <div className="min-h-screen bg-[#FDFBF7] py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8 sm:mb-12 md:mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5 mb-4 sm:mb-6">
            <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-3xl bg-gradient-to-br from-[#4F6F52] to-[#3d5741] flex items-center justify-center shadow-soft-xl">
              <Calculator className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 text-white" strokeWidth={2.5} />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A231E] font-serif leading-tight">
                Fair Cost Gap Analysis
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-[#1A231E]/70 mt-2 sm:mt-3 font-sans leading-relaxed">
                Identify overpayment risks and negotiation opportunities
              </p>
            </div>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          <Card className="bg-white border-2 border-[#E8E5DF] p-6 shadow-soft-lg rounded-3xl">
            <div className="flex items-center gap-3 mb-3">
              <TrendingDown className="w-6 h-6 text-[#22c55e]" />
              <span className="text-sm font-semibold text-[#1A231E]/60 uppercase tracking-wide">
                Total Savings Potential
              </span>
            </div>
            <div className="text-3xl sm:text-4xl font-bold text-[#22c55e] font-serif">
              £{formatCurrency(totalPotentialSavings)}
            </div>
            <p className="text-sm text-[#1A231E]/60 mt-1">Annually across all homes</p>
          </Card>

          <Card className="bg-white border-2 border-[#E8E5DF] p-6 shadow-soft-lg rounded-3xl">
            <div className="flex items-center gap-3 mb-3">
              <AlertTriangle className="w-6 h-6 text-[#eab308]" />
              <span className="text-sm font-semibold text-[#1A231E]/60 uppercase tracking-wide">Avg Overpayment</span>
            </div>
            <div className="text-3xl sm:text-4xl font-bold text-[#eab308] font-serif">
              £{formatCurrency(Math.round(avgOverpayment))}/week
            </div>
            <p className="text-sm text-[#1A231E]/60 mt-1">vs fair market rate</p>
          </Card>

          <Card className="bg-white border-2 border-[#E8E5DF] p-6 shadow-soft-lg rounded-3xl">
            <div className="flex items-center gap-3 mb-3">
              <PoundSterling className="w-6 h-6 text-[#4F6F52]" />
              <span className="text-sm font-semibold text-[#1A231E]/60 uppercase tracking-wide">Regional Average</span>
            </div>
            <div className="text-3xl sm:text-4xl font-bold text-[#4F6F52] font-serif">
              £{formatCurrency(regionalAverage)}/week
            </div>
            <p className="text-sm text-[#1A231E]/60 mt-1">National: £{formatCurrency(nationalAverage)}/week</p>
          </Card>
        </div>

        {/* Cost Comparison Table */}
        <Card className="bg-white border-2 border-[#E8E5DF] p-6 sm:p-8 md:p-10 mb-8 sm:mb-12 shadow-soft-lg rounded-3xl">
          <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 text-[#4F6F52]" strokeWidth={2.5} />
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A231E] font-serif">Cost Comparison</h2>
          </div>

          <div className="overflow-x-auto -mx-2 sm:mx-0">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-[#4F6F52]/20">
                  <th className="text-left py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base font-bold text-[#1A231E]">
                    Care Home
                  </th>
                  <th className="text-center py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base font-bold text-[#1A231E]">
                    Quoted Fee
                  </th>
                  <th className="text-center py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base font-bold text-[#1A231E]">
                    Fair Rate
                  </th>
                  <th className="text-center py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base font-bold text-[#1A231E]">
                    Gap
                  </th>
                  <th className="text-center py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base font-bold text-[#1A231E]">
                    Negotiation
                  </th>
                  <th className="text-center py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base font-bold text-[#1A231E]">
                    Annual Savings
                  </th>
                </tr>
              </thead>
              <tbody>
                {homes.map((home, index) => {
                  const gap = (home.weeklyFee ?? 0) - (home.fairMarketRate ?? 0)
                  return (
                    <tr
                      key={home.name}
                      className={`border-b-2 border-[#4F6F52]/10 cursor-pointer transition-colors ${selectedHome?.name === home.name ? "bg-[#4F6F52]/10" : "hover:bg-[#4F6F52]/5"}`}
                      onClick={() => setSelectedHome(home)}
                    >
                      <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base font-semibold text-[#1A231E]">
                        {home.name}
                      </td>
                      <td className="text-center py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base font-bold text-[#1A231E]">
                        £{formatCurrency(home.weeklyFee)}
                      </td>
                      <td className="text-center py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base font-semibold text-[#4F6F52]">
                        £{formatCurrency(home.fairMarketRate)}
                      </td>
                      <td
                        className={`text-center py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base font-bold ${getGapColor(gap)}`}
                      >
                        +£{gap}
                      </td>
                      <td className="text-center py-3 sm:py-4 px-2 sm:px-4">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs sm:text-sm font-semibold ${getNegotiationColor(getNegotiationPotentialString(home.negotiationPotential))}`}
                        >
                          {getNegotiationPotentialString(home.negotiationPotential).charAt(0).toUpperCase() +
                            getNegotiationPotentialString(home.negotiationPotential).slice(1)}
                        </span>
                      </td>
                      <td className="text-center py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base font-bold text-[#22c55e]">
                        £{formatCurrency(home.savingsOpportunity)}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Selected Home Cost Breakdown */}
        {selectedHome && (
          <Card className="bg-white border-2 border-[#E8E5DF] p-6 sm:p-8 md:p-10 mb-8 sm:mb-12 shadow-soft-lg rounded-3xl">
            <div className="flex items-center justify-between mb-6 sm:mb-8">
              <div className="flex items-center gap-3 sm:gap-4">
                <FileText className="w-6 h-6 sm:w-7 sm:h-7 text-[#4F6F52]" strokeWidth={2.5} />
                <h2 className="text-2xl sm:text-3xl font-bold text-[#1A231E] font-serif">
                  {selectedHome.name}: Fee Breakdown
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {/* Fee Structure */}
              <div>
                <h3 className="text-lg font-bold text-[#1A231E] mb-4">Fee Structure</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-4 bg-[#4F6F52]/5 rounded-xl">
                    <span className="font-semibold text-[#1A231E]">Base Fee</span>
                    <span className="text-xl font-bold text-[#1A231E]">
                      £{formatCurrency(selectedHome.costBreakdown?.baseFee)}/week
                    </span>
                  </div>
                  {(selectedHome.costBreakdown?.hiddenFees ?? []).map((fee, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-[#eab308]/5 rounded-xl border-l-4 border-[#eab308]"
                    >
                      <div>
                        <span className="font-semibold text-[#1A231E]">{fee.name}</span>
                        <span className="text-xs text-[#1A231E]/60 ml-2">({fee.frequency})</span>
                      </div>
                      <span className="text-lg font-bold text-[#eab308]">+£{fee.amount ?? 0}</span>
                    </div>
                  ))}
                  <div className="flex items-center justify-between p-4 bg-[#1A231E] rounded-xl mt-4">
                    <span className="font-bold text-white">Total Weekly</span>
                    <span className="text-2xl font-bold text-white">
                      £{formatCurrency(selectedHome.costBreakdown?.totalWeekly)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Savings Analysis */}
              <div>
                <h3 className="text-lg font-bold text-[#1A231E] mb-4">Savings Analysis</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-[#22c55e]/10 rounded-xl border-2 border-[#22c55e]/30">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle2 className="w-5 h-5 text-[#22c55e]" />
                      <span className="font-bold text-[#1A231E]">Potential Savings</span>
                    </div>
                    <div className="text-3xl font-bold text-[#22c55e]">
                      £{formatCurrency(selectedHome.savingsOpportunity)}/year
                    </div>
                    <p className="text-sm text-[#1A231E]/60 mt-1">
                      Based on negotiating to fair market rate of £{formatCurrency(selectedHome.fairMarketRate)}/week
                    </p>
                  </div>

                  <div className="p-4 bg-[#FDFBF7] rounded-xl">
                    <div className="flex items-center gap-2 mb-3">
                      <Info className="w-5 h-5 text-[#4F6F52]" />
                      <span className="font-bold text-[#1A231E]">Hidden Fees Total</span>
                    </div>
                    <div className="text-2xl font-bold text-[#eab308]">
                      £
                      {formatCurrency(
                        (selectedHome.costBreakdown?.hiddenFees ?? []).reduce((sum, fee) => sum + (fee.amount ?? 0), 0),
                      )}
                      /week
                    </div>
                    <p className="text-sm text-[#1A231E]/60 mt-1">
                      {selectedHome.costBreakdown?.totalWeekly
                        ? Math.round(
                            ((selectedHome.costBreakdown?.hiddenFees ?? []).reduce(
                              (sum, fee) => sum + (fee.amount ?? 0),
                              0,
                            ) /
                              selectedHome.costBreakdown.totalWeekly) *
                              100,
                          )
                        : 0}
                      % of total fee in extras
                    </p>
                  </div>

                  <div
                    className={`p-4 rounded-xl ${getNegotiationPotentialString(selectedHome.negotiationPotential) === "high" ? "bg-[#22c55e]/10 border-2 border-[#22c55e]/30" : getNegotiationPotentialString(selectedHome.negotiationPotential) === "medium" ? "bg-[#eab308]/10 border-2 border-[#eab308]/30" : "bg-[#ef4444]/10 border-2 border-[#ef4444]/30"}`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <MessageSquare className="w-5 h-5" />
                      <span className="font-bold text-[#1A231E]">Negotiation Potential</span>
                    </div>
                    <div
                      className={`text-xl font-bold ${getNegotiationPotentialString(selectedHome.negotiationPotential) === "high" ? "text-[#22c55e]" : getNegotiationPotentialString(selectedHome.negotiationPotential) === "medium" ? "text-[#eab308]" : "text-[#ef4444]"}`}
                    >
                      {getNegotiationPotentialString(selectedHome.negotiationPotential).charAt(0).toUpperCase() +
                        getNegotiationPotentialString(selectedHome.negotiationPotential).slice(1)}{" "}
                      Likelihood of Success
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        )}

        {/* Negotiation Scripts */}
        <Card className="bg-white border-2 border-[#E8E5DF] p-6 sm:p-8 md:p-10 shadow-soft-lg rounded-3xl">
          <div className="flex items-center justify-between mb-6 sm:mb-8">
            <div className="flex items-center gap-3 sm:gap-4">
              <MessageSquare className="w-6 h-6 sm:w-7 sm:h-7 text-[#4F6F52]" strokeWidth={2.5} />
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A231E] font-serif">Negotiation Scripts</h2>
            </div>
            <Button
              variant="outline"
              onClick={() => setShowAllScripts(!showAllScripts)}
              className="text-[#4F6F52] border-[#4F6F52]"
            >
              {showAllScripts ? "Show Less" : "Show All Scripts"}
            </Button>
          </div>

          <p className="text-[#1A231E]/70 mb-6">
            Use these professionally-crafted scripts during your fee discussions. Click to copy and personalise with
            your specific details.
          </p>

          <div className="space-y-4">
            {(showAllScripts ? NEGOTIATION_SCRIPTS : NEGOTIATION_SCRIPTS.slice(0, 3)).map((script) => (
              <div key={script.id} className="border-2 border-[#E8E5DF] rounded-2xl overflow-hidden">
                <div className="bg-[#4F6F52]/5 p-4 sm:p-5 border-b-2 border-[#E8E5DF]">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-bold text-[#1A231E]">{script.title}</h3>
                      <p className="text-sm text-[#1A231E]/60 mt-1">Best for: {script.situation}</p>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => copyToClipboard(script.script, script.id)}
                      className="flex items-center gap-2 flex-shrink-0"
                    >
                      {copiedScript === script.id ? (
                        <>
                          <Check className="w-4 h-4" />
                          Copied
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          Copy
                        </>
                      )}
                    </Button>
                  </div>
                </div>
                <div className="p-4 sm:p-5">
                  <div className="bg-[#FDFBF7] p-4 rounded-xl mb-4">
                    <p className="text-[#1A231E] italic leading-relaxed">{script.script}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-[#4F6F52] flex-shrink-0 mt-1" />
                    <p className="text-sm text-[#4F6F52]">
                      <strong>Pro tip:</strong> {script.tip}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}
