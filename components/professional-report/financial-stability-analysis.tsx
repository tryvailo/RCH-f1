"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface AltmanZScore {
  current: number
  interpretation: "Safe Zone" | "Grey Zone" | "Distress Zone"
  components: {
    working_capital: number
    retained_earnings: number
    ebit: number
    market_value: number
    sales: number
  }
}

interface CompaniesHouseData {
  year: number
  total_assets: number
  total_liabilities: number
  net_profit: number
  revenue: number
}

interface TrendAnalysis {
  direction: "Improving" | "Stable" | "Declining"
  confidence: "High" | "Medium" | "Low"
  explanation: string
}

interface FinancialStabilityProps {
  home_name: string
  altman_z_score: AltmanZScore
  companies_house_data: CompaniesHouseData[]
  trend_analysis: TrendAnalysis
  stability_verdict: "Financially Secure" | "Stable" | "Monitor Closely" | "Concerning"
}

export function FinancialStabilityAnalysis({
  home_name,
  altman_z_score,
  companies_house_data,
  trend_analysis,
  stability_verdict,
}: FinancialStabilityProps) {
  const getVerdictColor = (verdict: string) => {
    switch (verdict) {
      case "Financially Secure":
        return "bg-green-100 text-green-800 border-green-300"
      case "Stable":
        return "bg-blue-100 text-blue-800 border-blue-300"
      case "Monitor Closely":
        return "bg-amber-100 text-amber-800 border-amber-300"
      case "Concerning":
        return "bg-red-100 text-red-800 border-red-300"
      default:
        return "bg-gray-100 text-gray-800 border-gray-300"
    }
  }

  const getZoneColor = (interpretation: string) => {
    switch (interpretation) {
      case "Safe Zone":
        return "text-green-700"
      case "Grey Zone":
        return "text-amber-700"
      case "Distress Zone":
        return "text-red-700"
      default:
        return "text-gray-700"
    }
  }

  const getTrendIcon = (direction: string) => {
    switch (direction) {
      case "Improving":
        return "↑"
      case "Declining":
        return "↓"
      default:
        return "→"
    }
  }

  const getTrendColor = (direction: string) => {
    switch (direction) {
      case "Improving":
        return "text-green-700"
      case "Declining":
        return "text-red-700"
      default:
        return "text-amber-700"
    }
  }

  const formatCurrency = (value: number) => {
    if (value >= 1000000) {
      return `£${(value / 1000000).toFixed(1)}M`
    }
    if (value >= 1000) {
      return `£${(value / 1000).toFixed(0)}K`
    }
    return `£${value.toFixed(0)}`
  }

  // Calculate gauge position (0-100%)
  const getGaugePosition = (score: number) => {
    if (score >= 3.0) return 90 // Safe zone
    if (score >= 1.8) return 50 // Grey zone
    return 20 // Distress zone
  }

  const gaugePosition = getGaugePosition(altman_z_score.current)

  return (
    <div className="space-y-8 mt-8 px-4 sm:px-6 lg:px-8">
      <div className="border-t-2 border-primary pt-6">
        <h3 className="text-[22px] font-bold text-foreground mb-6">Financial Stability Deep Analysis</h3>

        {/* Financial Verdict */}
        <div className="mb-8">
          <div className="flex items-center gap-4">
            <span className="text-[20px] font-semibold text-foreground">Financial Status:</span>
            <Badge className={`text-[18px] px-4 py-2 ${getVerdictColor(stability_verdict)}`}>{stability_verdict}</Badge>
          </div>
          <p className="text-[15px] text-muted-foreground mt-3">
            Based on Altman Z-Score analysis and 3-year Companies House financial data
          </p>
        </div>

        {/* Altman Z-Score Gauge */}
        <div className="mb-8">
          <h4 className="text-[18px] font-semibold text-foreground mb-4">Altman Z-Score: Bankruptcy Risk Indicator</h4>
          <p className="text-[15px] text-muted-foreground mb-6">
            Industry-standard metric for predicting financial distress within 2 years
          </p>

          <Card className="p-6">
            {/* Score display */}
            <div className="text-centre mb-6">
              <div className={`text-[36px] font-bold ${getZoneColor(altman_z_score.interpretation)}`}>
                {altman_z_score.current.toFixed(2)}
              </div>
              <div className={`text-[18px] font-semibold ${getZoneColor(altman_z_score.interpretation)} mt-2`}>
                {altman_z_score.interpretation}
              </div>
            </div>

            {/* Visual gauge */}
            <div className="relative h-12 mb-6">
              {/* Background zones */}
              <div className="absolute inset-0 flex rounded-lg overflow-hidden">
                <div className="flex-1 bg-red-200" style={{ width: "30%" }} />
                <div className="flex-1 bg-amber-200" style={{ width: "40%" }} />
                <div className="flex-1 bg-green-200" style={{ width: "30%" }} />
              </div>

              {/* Score indicator */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-foreground"
                style={{ left: `${gaugePosition}%`, transform: "translateX(-50%)" }}
              />
              <div
                className="absolute top-[-8px] w-4 h-4 bg-foreground rounded-full"
                style={{ left: `${gaugePosition}%`, transform: "translateX(-50%)" }}
              />
            </div>

            {/* Legend */}
            <div className="grid grid-cols-3 gap-4 text-centre text-[14px]">
              <div>
                <div className="font-semibold text-red-700">&lt; 1.8</div>
                <div className="text-muted-foreground">Distress Zone</div>
              </div>
              <div>
                <div className="font-semibold text-amber-700">1.8 - 3.0</div>
                <div className="text-muted-foreground">Grey Zone</div>
              </div>
              <div>
                <div className="font-semibold text-green-700">&gt; 3.0</div>
                <div className="text-muted-foreground">Safe Zone</div>
              </div>
            </div>

            {/* Interpretation */}
            <div className="mt-6 p-4 bg-muted rounded-lg">
              <p className="text-[15px] text-foreground">
                {altman_z_score.interpretation === "Safe Zone" && (
                  <>
                    Strong financial health with low bankruptcy risk. The home demonstrates solid working capital,
                    profitability, and asset management.
                  </>
                )}
                {altman_z_score.interpretation === "Grey Zone" && (
                  <>
                    Moderate financial health. The home is stable but should be monitored for trends. Not in immediate
                    distress.
                  </>
                )}
                {altman_z_score.interpretation === "Distress Zone" && (
                  <>
                    Financial concerns detected. This score suggests potential financial difficulties within the next 2
                    years. Recommend closer scrutiny.
                  </>
                )}
              </p>
            </div>
          </Card>
        </div>

        {/* 3-Year Financial Performance */}
        <div className="mb-8">
          <h4 className="text-[18px] font-semibold text-foreground mb-4">3-Year Financial Performance</h4>
          <p className="text-[15px] text-muted-foreground mb-6">Data from Companies House annual filings</p>

          <Card className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-[16px]">
                <thead>
                  <tr className="bg-muted">
                    <th className="text-left p-4 font-semibold">Year</th>
                    <th className="text-right p-4 font-semibold">Total Assets</th>
                    <th className="text-right p-4 font-semibold">Total Liabilities</th>
                    <th className="text-right p-4 font-semibold">Net Profit</th>
                    <th className="text-right p-4 font-semibold">Revenue</th>
                  </tr>
                </thead>
                <tbody>
                  {companies_house_data.map((row, index) => (
                    <tr key={row.year} className={index % 2 === 0 ? "bg-background" : "bg-muted/50"}>
                      <td className="p-4 font-semibold">{row.year}</td>
                      <td className="text-right p-4">{formatCurrency(row.total_assets)}</td>
                      <td className="text-right p-4">{formatCurrency(row.total_liabilities)}</td>
                      <td className={`text-right p-4 ${row.net_profit >= 0 ? "text-green-700" : "text-red-700"}`}>
                        {formatCurrency(row.net_profit)}
                      </td>
                      <td className="text-right p-4">{formatCurrency(row.revenue)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>

        {/* Trend Analysis */}
        <div>
          <h4 className="text-[18px] font-semibold text-foreground mb-4">Financial Trend Analysis</h4>

          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className={`text-[48px] ${getTrendColor(trend_analysis.direction)}`}>
                {getTrendIcon(trend_analysis.direction)}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`text-[20px] font-bold ${getTrendColor(trend_analysis.direction)}`}>
                    {trend_analysis.direction}
                  </span>
                  <Badge
                    className={`text-[14px] ${
                      trend_analysis.confidence === "High"
                        ? "bg-green-100 text-green-800"
                        : trend_analysis.confidence === "Medium"
                          ? "bg-amber-100 text-amber-800"
                          : "bg-red-100 text-red-800"
                    }`}
                  >
                    {trend_analysis.confidence} Confidence
                  </Badge>
                </div>
                <p className="text-[16px] text-foreground leading-relaxed">{trend_analysis.explanation}</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
