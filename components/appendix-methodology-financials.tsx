"use client"

import { Calculator, TrendingUp, Database, AlertCircle, CheckCircle, XCircle } from "lucide-react"
import { formatNumber, safeArray } from "@/lib/safe-data"

interface FinancialData {
  homeName: string
  zScore: number
  verdict: "Safe" | "Grey" | "Distress"
  revenue: string
  netProfit: string
  profitMargin: string
  currentRatio: number
  debtToEquity: number
}

interface DataSource {
  name: string
  dataType: string
  apiUrl: string
  lastUpdated: string
}

interface AppendixMethodologyFinancialsProps {
  financials?: FinancialData[]
  dataSources?: DataSource[]
  pageNumber?: number
}

const sampleFinancials: FinancialData[] = [
  {
    homeName: "Greenfield Manor",
    zScore: 3.45,
    verdict: "Safe",
    revenue: "£2.4M",
    netProfit: "£180K",
    profitMargin: "7.5%",
    currentRatio: 1.8,
    debtToEquity: 0.45,
  },
  {
    homeName: "Oakwood Court",
    zScore: 4.12,
    verdict: "Safe",
    revenue: "£3.8M",
    netProfit: "£350K",
    profitMargin: "9.2%",
    currentRatio: 2.3,
    debtToEquity: 0.32,
  },
  {
    homeName: "Riverside Lodge",
    zScore: 2.78,
    verdict: "Grey",
    revenue: "£1.9M",
    netProfit: "£97K",
    profitMargin: "5.1%",
    currentRatio: 1.4,
    debtToEquity: 0.68,
  },
  {
    homeName: "Elmwood House",
    zScore: 1.89,
    verdict: "Distress",
    revenue: "£1.2M",
    netProfit: "-£28K",
    profitMargin: "-2.3%",
    currentRatio: 0.9,
    debtToEquity: 1.23,
  },
  {
    homeName: "Meadowbrook Care",
    zScore: 3.67,
    verdict: "Safe",
    revenue: "£2.9M",
    netProfit: "£235K",
    profitMargin: "8.1%",
    currentRatio: 1.9,
    debtToEquity: 0.41,
  },
]

const sampleDataSources: DataSource[] = [
  {
    name: "CQC (Care Quality Commission)",
    dataType: "Inspection ratings, compliance, safety records",
    apiUrl: "https://api.cqc.org.uk",
    lastUpdated: "Updated daily",
  },
  {
    name: "FSA (Food Standards Agency)",
    dataType: "Food hygiene ratings",
    apiUrl: "https://ratings.food.gov.uk/open-data",
    lastUpdated: "Updated weekly",
  },
  {
    name: "Companies House",
    dataType: "Financial data, directors, company health",
    apiUrl: "https://api.company-information.service.gov.uk",
    lastUpdated: "Updated monthly",
  },
  {
    name: "Google Places",
    dataType: "Reviews, ratings, visitor insights",
    apiUrl: "Google Places API",
    lastUpdated: "Real-time",
  },
  {
    name: "Glassdoor",
    dataType: "Employee reviews, working conditions",
    apiUrl: "Web scraping",
    lastUpdated: "Updated weekly",
  },
  {
    name: "Skills for Care",
    dataType: "Staff training, turnover rates",
    apiUrl: "https://www.skillsforcare.org.uk/data",
    lastUpdated: "Updated quarterly",
  },
]

export function AppendixMethodologyFinancials({
  financials = sampleFinancials,
  dataSources = sampleDataSources,
  pageNumber = 2,
}: AppendixMethodologyFinancialsProps) {
  const safeFinancials = safeArray(financials, sampleFinancials)
  const safeDataSources = safeArray(dataSources, sampleDataSources)

  const getZScoreColor = (verdict: string) => {
    switch (verdict) {
      case "Safe":
        return "text-[#4F6F52]"
      case "Grey":
        return "text-[#C88D79]"
      case "Distress":
        return "text-[#E63946]"
      default:
        return "text-[#1A231E]"
    }
  }

  const getZScoreIcon = (verdict: string) => {
    switch (verdict) {
      case "Safe":
        return <CheckCircle className="w-5 h-5 text-[#4F6F52]" />
      case "Grey":
        return <AlertCircle className="w-5 h-5 text-[#C88D79]" />
      case "Distress":
        return <XCircle className="w-5 h-5 text-[#E63946]" />
      default:
        return null
    }
  }

  return (
    <div className="w-full bg-white p-8 md:p-12 font-sans">
      {/* Header */}
      <div className="flex items-center justify-between mb-8 pb-4 border-b-2 border-[#1A231E]/10">
        <div className="flex items-center gap-3">
          <Calculator className="w-6 h-6 text-[#4F6F52]" />
          <h1 className="text-2xl font-bold text-[#1A231E]">Appendix B: Methodology & Financial Analysis</h1>
        </div>
        <div className="text-sm text-[#1A231E]/50">Page A-{pageNumber}</div>
      </div>

      {/* Section 1: How We Calculate Scores */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-[#1A231E] mb-4">How We Calculate Scores</h2>

        <div className="space-y-4 text-base text-[#1A231E] leading-relaxed">
          <p>
            The overall score for each care home is calculated as a weighted sum of assessments across five key
            categories. Each category has a predetermined weight based on priorities indicated in your assessment
            questionnaire.
          </p>

          <div className="bg-[#F8F9FA] rounded-lg p-6 my-6">
            <h3 className="text-sm font-bold text-[#1A231E] mb-3 tracking-wider">BASE CATEGORY WEIGHTS</h3>
            <ul className="space-y-2 text-base">
              <li className="flex justify-between">
                <span>Safety:</span>
                <span className="font-semibold">30%</span>
              </li>
              <li className="flex justify-between">
                <span>Medical Care:</span>
                <span className="font-semibold">25%</span>
              </li>
              <li className="flex justify-between">
                <span>Staff Quality:</span>
                <span className="font-semibold">20%</span>
              </li>
              <li className="flex justify-between">
                <span>Financial Stability:</span>
                <span className="font-semibold">15%</span>
              </li>
              <li className="flex justify-between">
                <span>Comfort & Quality of Life:</span>
                <span className="font-semibold">10%</span>
              </li>
            </ul>
          </div>

          <p>
            These weights may be adjusted based on your responses. For example, if you indicated high-level medical
            needs, the Medical Care category weight increases to 35%, whilst other categories are proportionally
            reduced.
          </p>

          <div className="bg-[#F8F9FA] rounded-lg p-6 my-6 font-mono text-sm">
            <div className="text-xs font-bold text-[#1A231E] mb-3 tracking-wider font-sans">CALCULATION FORMULA</div>
            <code className="text-[#1A231E]">
              Overall Score = <br />
              &nbsp;&nbsp;(Safety Score × Safety Weight) + <br />
              &nbsp;&nbsp;(Medical Score × Medical Weight) + <br />
              &nbsp;&nbsp;(Staff Score × Staff Weight) + <br />
              &nbsp;&nbsp;(Financial Score × Financial Weight) + <br />
              &nbsp;&nbsp;(Comfort Score × Comfort Weight)
            </code>
          </div>

          <p>
            Each category is assessed on a scale from 0 to 10 based on analysis of 20 to 40 individual metrics sourced
            from official databases, inspection reports, and verified third-party data.
          </p>
        </div>
      </section>

      {/* Section 2: Detailed Financial Analysis */}
      <section className="mb-12">
        <div className="flex items-center gap-2 mb-6">
          <TrendingUp className="w-5 h-5 text-[#4F6F52]" />
          <h2 className="text-xl font-bold text-[#1A231E]">Detailed Financial Analysis</h2>
        </div>

        <p className="text-base text-[#1A231E] leading-relaxed mb-6">
          In-depth analysis of financial stability for each care home using the Altman Z-Score model and data from
          Companies House.
        </p>

        <div className="space-y-6">
          {safeFinancials.map((home, idx) => (
            <div key={idx} className="bg-[#F8F9FA] rounded-lg p-6 border border-[#E8E5DF]">
              <h3 className="text-lg font-bold text-[#1A231E] mb-4">{home.homeName}</h3>

              <div className="flex items-center gap-3 mb-4">
                {getZScoreIcon(home.verdict)}
                <div>
                  <div className="text-sm text-[#5A6D7A]">Altman Z-Score</div>
                  <div className={`text-2xl font-black ${getZScoreColor(home.verdict)}`}>
                    {formatNumber(home.zScore, 2)} ({home.verdict} Zone)
                  </div>
                </div>
              </div>

              <p className="text-sm text-[#1A231E] mb-4 italic leading-relaxed">
                {home.verdict === "Safe" &&
                  "Z-Score above 2.99 indicates low bankruptcy risk within the next 2 years. This home demonstrates healthy financial indicators."}
                {home.verdict === "Grey" &&
                  "Z-Score between 1.8 and 2.99 indicates moderate risk. Financial health should be monitored carefully."}
                {home.verdict === "Distress" &&
                  "Z-Score below 1.8 indicates high financial distress risk. Serious concerns about long-term viability."}
              </p>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-[#5A6D7A] mb-1">Annual Revenue:</div>
                  <div className="font-semibold text-[#1A231E]">{home.revenue}</div>
                </div>
                <div>
                  <div className="text-[#5A6D7A] mb-1">Net Profit:</div>
                  <div className="font-semibold text-[#1A231E]">{home.netProfit}</div>
                </div>
                <div>
                  <div className="text-[#5A6D7A] mb-1">Profit Margin:</div>
                  <div className="font-semibold text-[#1A231E]">{home.profitMargin}</div>
                </div>
                <div>
                  <div className="text-[#5A6D7A] mb-1">Current Ratio:</div>
                  <div className="font-semibold text-[#1A231E]">{formatNumber(home.currentRatio, 1)}</div>
                </div>
                <div className="col-span-2">
                  <div className="text-[#5A6D7A] mb-1">Debt-to-Equity Ratio:</div>
                  <div className="font-semibold text-[#1A231E]">{formatNumber(home.debtToEquity, 2)}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Data Sources */}
      <section className="mb-8">
        <div className="flex items-center gap-2 mb-6">
          <Database className="w-5 h-5 text-[#4F6F52]" />
          <h2 className="text-xl font-bold text-[#1A231E]">Data Sources & APIs</h2>
        </div>

        <p className="text-base text-[#1A231E] leading-relaxed mb-6">
          Complete list of all data sources used in this report, with API endpoints and update frequencies.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-[#4F6F52]/5">
              <tr>
                <th className="px-4 py-3 text-xs font-bold text-[#1A231E] border-b-2 border-[#4F6F52]/20">Source</th>
                <th className="px-4 py-3 text-xs font-bold text-[#1A231E] border-b-2 border-[#4F6F52]/20">Data Type</th>
                <th className="px-4 py-3 text-xs font-bold text-[#1A231E] border-b-2 border-[#4F6F52]/20">API / URL</th>
                <th className="px-4 py-3 text-xs font-bold text-[#1A231E] border-b-2 border-[#4F6F52]/20">
                  Last Updated
                </th>
              </tr>
            </thead>
            <tbody>
              {safeDataSources.map((source, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-[#F8F9FA]"}>
                  <td className="px-4 py-3 text-sm font-semibold text-[#1A231E] border-b border-[#E8E5DF]">
                    {source.name}
                  </td>
                  <td className="px-4 py-3 text-sm text-[#5A6D7A] border-b border-[#E8E5DF]">{source.dataType}</td>
                  <td className="px-4 py-3 text-xs text-[#4F6F52] border-b border-[#E8E5DF] font-mono">
                    {source.apiUrl}
                  </td>
                  <td className="px-4 py-3 text-sm text-[#5A6D7A] border-b border-[#E8E5DF]">{source.lastUpdated}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Page Footer */}
      <div className="mt-12 pt-4 border-t border-[#E8E5DF] flex items-center justify-between text-xs text-[#5A6D7A]">
        <div>RightCareHome Professional Report</div>
        <div>Confidential</div>
      </div>
    </div>
  )
}
