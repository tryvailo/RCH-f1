"use client"

import { ShieldCheck, Clock, RefreshCw, AlertTriangle, CheckCircle2, Database, Globe, Lock } from "lucide-react"

interface DataSourceAccuracy {
  category: string
  description: string
  accuracy: "Very High" | "High" | "Medium"
  updateFrequency: string
  verification: string
  methodology: string
}

interface AppendixDataAccuracyProps {
  reportGeneratedDate?: string
  pageNumber?: number
}

const dataSources: DataSourceAccuracy[] = [
  {
    category: "Official Regulatory Data",
    description: "Inspection ratings, compliance history, enforcement actions, registration status",
    accuracy: "Very High",
    updateFrequency: "Daily sync",
    verification: "Government verified",
    methodology:
      "Direct integration with official government inspection databases. All ratings cross-referenced against published regulatory documentation.",
  },
  {
    category: "Food Safety & Hygiene",
    description: "Kitchen hygiene ratings, food safety compliance, inspection history",
    accuracy: "Very High",
    updateFrequency: "Weekly sync",
    verification: "Official records",
    methodology:
      "Official food safety ratings from government inspection programmes. Verified against local authority environmental health records.",
  },
  {
    category: "Financial Health & Stability",
    description: "Company accounts, financial ratios, director history, insolvency indicators",
    accuracy: "Very High",
    updateFrequency: "Monthly sync",
    verification: "Audited accounts",
    methodology:
      "Annual accounts and filing history from official corporate registries. Proprietary financial health scoring model applied.",
  },
  {
    category: "Family Visitor Insights",
    description: "Visit patterns, dwell time, repeat visitor rates, seasonal trends",
    accuracy: "High",
    updateFrequency: "Weekly sync",
    verification: "Behavioural data",
    methodology:
      "Anonymised visitor behaviour patterns from multiple location intelligence sources. Proprietary engagement scoring applied.",
  },
  {
    category: "Family Reviews & Sentiment",
    description: "Verified family reviews, sentiment analysis, satisfaction trends",
    accuracy: "High",
    updateFrequency: "Weekly sync",
    verification: "Multi-source",
    methodology:
      "Aggregated reviews from verified family visitors across multiple trusted platforms. AI-powered sentiment analysis for consistency.",
  },
  {
    category: "Workforce & Staffing",
    description: "Staff turnover rates, training levels, workforce statistics, employee satisfaction",
    accuracy: "High",
    updateFrequency: "Quarterly sync",
    verification: "Official data",
    methodology:
      "Official workforce statistics combined with employment satisfaction indicators. Regional benchmarks applied for context.",
  },
  {
    category: "Location & Accessibility",
    description: "Transport links, nearby amenities, walkability, NHS facilities proximity",
    accuracy: "Very High",
    updateFrequency: "Real-time",
    verification: "Geo-verified",
    methodology:
      "Authoritative geographic and mapping data. Precise distance calculations for healthcare, transport and amenity access.",
  },
  {
    category: "Pricing & Market Data",
    description: "Fee structures, regional benchmarks, funding eligibility, fair price analysis",
    accuracy: "High",
    updateFrequency: "Monthly sync",
    verification: "Market validated",
    methodology:
      "Proprietary pricing database built from verified fee disclosures. Regional and national benchmarking for fair price assessment.",
  },
]

const accuracyBadge = (accuracy: string) => {
  switch (accuracy) {
    case "Very High":
      return "bg-[#4F6F52]/10 text-[#4F6F52] border-[#4F6F52]/20"
    case "High":
      return "bg-[#2C5F8D]/10 text-[#2C5F8D] border-[#2C5F8D]/20"
    case "Medium":
      return "bg-[#C88D79]/10 text-[#C88D79] border-[#C88D79]/20"
    default:
      return "bg-gray-100 text-gray-600"
  }
}

export function AppendixDataAccuracy({
  reportGeneratedDate = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }),
  pageNumber = 1,
}: AppendixDataAccuracyProps) {
  return (
    <div className="w-full max-w-6xl mx-auto bg-white p-6 sm:p-8 md:p-12 font-sans">
      {/* Header */}
      <div className="flex items-center justify-between mb-8 pb-4 border-b-2 border-[#1A231E]/10">
        <div className="flex items-center gap-3">
          <ShieldCheck className="w-6 h-6 text-[#4F6F52]" />
          <h1 className="text-2xl md:text-3xl font-bold font-serif text-[#1A231E]">
            Appendix A: Our Data & Methodology
          </h1>
        </div>
        <div className="text-sm text-[#1A231E]/50">Page A-{pageNumber}</div>
      </div>

      {/* Introduction - Emphasize proprietary methodology */}
      <section className="mb-10">
        <p className="text-lg text-[#1A231E] leading-relaxed mb-4">
          Your report is built on <strong>8 categories of verified data</strong>, comprising over{" "}
          <strong>200 individual data points</strong> for each care home. Our proprietary methodology combines official
          government sources with exclusive datasets not available elsewhere.
        </p>

        <div className="bg-[#1A231E]/5 rounded-xl p-5 border border-[#1A231E]/10 mb-6">
          <div className="flex items-start gap-3">
            <Lock className="w-5 h-5 text-[#1A231E] flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-[#1A231E] mb-1">Proprietary Data Advantage</h3>
              <p className="text-sm text-[#5A6D7A]">
                Our analysis includes exclusive data sources and scoring models developed over years of research. This
                gives you insights that simply aren't available on public comparison websites or directory listings.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-[#F8F9FA] rounded-xl p-5 border border-[#E8E5DF]">
            <div className="flex items-center gap-2 mb-2">
              <Database className="w-5 h-5 text-[#4F6F52]" />
              <span className="text-sm font-semibold text-[#1A231E]">Data Points</span>
            </div>
            <div className="text-3xl font-black text-[#4F6F52]">200+</div>
            <div className="text-sm text-[#5A6D7A]">per care home analysed</div>
          </div>

          <div className="bg-[#F8F9FA] rounded-xl p-5 border border-[#E8E5DF]">
            <div className="flex items-center gap-2 mb-2">
              <Globe className="w-5 h-5 text-[#2C5F8D]" />
              <span className="text-sm font-semibold text-[#1A231E]">Data Categories</span>
            </div>
            <div className="text-3xl font-black text-[#2C5F8D]">8</div>
            <div className="text-sm text-[#5A6D7A]">verified data streams</div>
          </div>

          <div className="bg-[#F8F9FA] rounded-xl p-5 border border-[#E8E5DF]">
            <div className="flex items-center gap-2 mb-2">
              <RefreshCw className="w-5 h-5 text-[#C88D79]" />
              <span className="text-sm font-semibold text-[#1A231E]">Report Generated</span>
            </div>
            <div className="text-xl font-black text-[#C88D79]">{reportGeneratedDate}</div>
            <div className="text-sm text-[#5A6D7A]">latest available data</div>
          </div>
        </div>
      </section>

      {/* Data Categories - Show categories not specific sources */}
      <section className="mb-10">
        <h2 className="text-xl font-bold font-serif text-[#1A231E] mb-6">Data Categories & Verification</h2>

        <div className="space-y-4">
          {dataSources.map((source, idx) => (
            <div key={idx} className="bg-[#F8F9FA] rounded-xl p-5 border border-[#E8E5DF]">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-3">
                <div>
                  <h3 className="text-lg font-bold text-[#1A231E]">{source.category}</h3>
                  <p className="text-sm text-[#5A6D7A]">{source.description}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold border ${accuracyBadge(source.accuracy)}`}
                  >
                    {source.accuracy} Accuracy
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#5A6D7A]" />
                  <span className="text-[#5A6D7A]">Update frequency: </span>
                  <span className="font-medium text-[#1A231E]">{source.updateFrequency}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4F6F52]" />
                  <span className="text-[#5A6D7A]">Verification: </span>
                  <span className="font-medium text-[#1A231E]">{source.verification}</span>
                </div>
              </div>

              <p className="text-sm text-[#5A6D7A] mt-3">{source.methodology}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Accuracy Commitment */}
      <section className="mb-8">
        <div className="bg-[#4F6F52]/5 rounded-xl p-6 border border-[#4F6F52]/20">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-[#C88D79] flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-bold font-serif text-[#1A231E] mb-2">Our Accuracy Commitment</h3>
              <ul className="space-y-2 text-base text-[#1A231E] leading-relaxed">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4F6F52] flex-shrink-0 mt-1" />
                  <span>
                    All regulatory data is sourced directly from official government databases and verified against
                    published reports
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4F6F52] flex-shrink-0 mt-1" />
                  <span>Financial assessments use audited accounts and established analytical models</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4F6F52] flex-shrink-0 mt-1" />
                  <span>Family feedback is aggregated across multiple sources to ensure balanced representation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4F6F52] flex-shrink-0 mt-1" />
                  <span>We always recommend independent verification during visits — see our Verification Guide</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Page Footer */}
      <div className="mt-10 pt-4 border-t border-[#E8E5DF] flex items-center justify-between text-xs text-[#5A6D7A]">
        <div>RightCareHome Professional Report</div>
        <div>Confidential</div>
      </div>
    </div>
  )
}
