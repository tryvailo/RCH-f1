"use client"

import { Database } from "lucide-react"

interface DataPoint {
  category: string
  subcategory: string
  metric: string
  weight: string
  home1: string | number
  home2: string | number
  home3: string | number
  home4: string | number
  home5: string | number
  source: string
}

interface AppendixFullDataTableProps {
  homeNames?: string[]
  dataPoints?: DataPoint[]
  pageNumber?: number
}

const sampleDataPoints: DataPoint[] = [
  // Safety Category (30-40 metrics)
  {
    category: "Safety",
    subcategory: "CQC Inspection",
    metric: "Overall Rating",
    weight: "15%",
    home1: "Good",
    home2: "Outstanding",
    home3: "Good",
    home4: "Requires Improvement",
    home5: "Good",
    source: "CQC API",
  },
  {
    category: "Safety",
    subcategory: "CQC Inspection",
    metric: "Safe Domain Score",
    weight: "12%",
    home1: "Good",
    home2: "Outstanding",
    home3: "Good",
    home4: "Requires Improvement",
    home5: "Good",
    source: "CQC API",
  },
  {
    category: "Safety",
    subcategory: "Food Hygiene",
    metric: "FSA Rating",
    weight: "8%",
    home1: 5,
    home2: 5,
    home3: 4,
    home4: 3,
    home5: 5,
    source: "FSA FHRS API",
  },
  {
    category: "Safety",
    subcategory: "Incidents",
    metric: "Falls per Resident (Annual)",
    weight: "6%",
    home1: 0.42,
    home2: 0.31,
    home3: 0.38,
    home4: 0.67,
    home5: 0.35,
    source: "CQC Reports",
  },
  {
    category: "Safety",
    subcategory: "Safeguarding",
    metric: "Safeguarding Alerts (12 months)",
    weight: "7%",
    home1: 2,
    home2: 0,
    home3: 1,
    home4: 5,
    home5: 1,
    source: "CQC Reports",
  },
  {
    category: "Safety",
    subcategory: "Fire Safety",
    metric: "Fire Risk Assessment Status",
    weight: "5%",
    home1: "Current",
    home2: "Current",
    home3: "Current",
    home4: "Overdue",
    home5: "Current",
    source: "CQC Reports",
  },
  // Medical Care Category (25-35 metrics)
  {
    category: "Medical Care",
    subcategory: "CQC Inspection",
    metric: "Effective Domain Score",
    weight: "14%",
    home1: "Good",
    home2: "Outstanding",
    home3: "Good",
    home4: "Requires Improvement",
    home5: "Good",
    source: "CQC API",
  },
  {
    category: "Medical Care",
    subcategory: "Staffing",
    metric: "Registered Nurses per 10 Beds",
    weight: "10%",
    home1: 2.1,
    home2: 2.8,
    home3: 2.3,
    home4: 1.6,
    home5: 2.5,
    source: "CQC Reports",
  },
  {
    category: "Medical Care",
    subcategory: "Medication",
    metric: "Medication Errors (per quarter)",
    weight: "8%",
    home1: 3,
    home2: 1,
    home3: 2,
    home4: 8,
    home5: 2,
    source: "CQC Reports",
  },
  {
    category: "Medical Care",
    subcategory: "GP Access",
    metric: "Weekly GP Visits",
    weight: "6%",
    home1: "Yes",
    home2: "Yes",
    home3: "Yes",
    home4: "Fortnightly",
    home5: "Yes",
    source: "Home Survey",
  },
  {
    category: "Medical Care",
    subcategory: "Specialist Care",
    metric: "Dementia Care Training",
    weight: "7%",
    home1: "Advanced",
    home2: "Expert",
    home3: "Intermediate",
    home4: "Basic",
    home5: "Advanced",
    source: "Skills for Care",
  },
  // Staff Quality Category (20-30 metrics)
  {
    category: "Staff Quality",
    subcategory: "CQC Inspection",
    metric: "Caring Domain Score",
    weight: "12%",
    home1: "Good",
    home2: "Outstanding",
    home3: "Good",
    home4: "Good",
    home5: "Good",
    source: "CQC API",
  },
  {
    category: "Staff Quality",
    subcategory: "Training",
    metric: "Staff Training Completion Rate",
    weight: "8%",
    home1: "94%",
    home2: "98%",
    home3: "91%",
    home4: "76%",
    home5: "95%",
    source: "CQC Reports",
  },
  {
    category: "Staff Quality",
    subcategory: "Turnover",
    metric: "Annual Staff Turnover",
    weight: "10%",
    home1: "18%",
    home2: "12%",
    home3: "22%",
    home4: "38%",
    home5: "15%",
    source: "Skills for Care",
  },
  {
    category: "Staff Quality",
    subcategory: "Employee Satisfaction",
    metric: "Glassdoor Rating",
    weight: "7%",
    home1: 4.2,
    home2: 4.6,
    home3: 3.9,
    home4: 3.1,
    home5: 4.4,
    source: "Glassdoor",
  },
  {
    category: "Staff Quality",
    subcategory: "Staffing Levels",
    metric: "Care Staff per 10 Residents (Day)",
    weight: "9%",
    home1: 3.8,
    home2: 4.5,
    home3: 3.6,
    home4: 2.9,
    home5: 4.1,
    source: "CQC Reports",
  },
  // Financial Stability Category (20-25 metrics)
  {
    category: "Financial Stability",
    subcategory: "Companies House",
    metric: "Altman Z-Score",
    weight: "15%",
    home1: 3.45,
    home2: 4.12,
    home3: 2.78,
    home4: 1.89,
    home5: 3.67,
    source: "Companies House",
  },
  {
    category: "Financial Stability",
    subcategory: "Companies House",
    metric: "Annual Revenue",
    weight: "8%",
    home1: "£2.4M",
    home2: "£3.8M",
    home3: "£1.9M",
    home4: "£1.2M",
    home5: "£2.9M",
    source: "Companies House",
  },
  {
    category: "Financial Stability",
    subcategory: "Companies House",
    metric: "Net Profit Margin",
    weight: "7%",
    home1: "7.5%",
    home2: "9.2%",
    home3: "5.1%",
    home4: "-2.3%",
    home5: "8.1%",
    source: "Companies House",
  },
  {
    category: "Financial Stability",
    subcategory: "Liquidity",
    metric: "Current Ratio",
    weight: "6%",
    home1: 1.8,
    home2: 2.3,
    home3: 1.4,
    home4: 0.9,
    home5: 1.9,
    source: "Companies House",
  },
  {
    category: "Financial Stability",
    subcategory: "Debt",
    metric: "Debt-to-Equity Ratio",
    weight: "5%",
    home1: 0.45,
    home2: 0.32,
    home3: 0.68,
    home4: 1.23,
    home5: 0.41,
    source: "Companies House",
  },
  // Comfort Category (15-20 metrics)
  {
    category: "Comfort",
    subcategory: "Facilities",
    metric: "Private Rooms Availability",
    weight: "8%",
    home1: "85%",
    home2: "100%",
    home3: "70%",
    home4: "45%",
    home5: "90%",
    source: "Home Survey",
  },
  {
    category: "Comfort",
    subcategory: "Facilities",
    metric: "Ensuite Bathrooms",
    weight: "6%",
    home1: "All rooms",
    home2: "All rooms",
    home3: "Most rooms",
    home4: "Some rooms",
    home5: "All rooms",
    source: "Home Survey",
  },
  {
    category: "Comfort",
    subcategory: "Activities",
    metric: "Weekly Activity Hours per Resident",
    weight: "5%",
    home1: 12,
    home2: 18,
    home3: 10,
    home4: 6,
    home5: 15,
    source: "Home Survey",
  },
  {
    category: "Comfort",
    subcategory: "Catering",
    metric: "Menu Choice Options",
    weight: "4%",
    home1: "3 options",
    home2: "4 options",
    home3: "2 options",
    home4: "2 options",
    home5: "3 options",
    source: "Home Survey",
  },
  {
    category: "Comfort",
    subcategory: "Environment",
    metric: "Garden Access",
    weight: "4%",
    home1: "Full access",
    home2: "Full access",
    home3: "Restricted",
    home4: "Limited",
    home5: "Full access",
    source: "Home Survey",
  },
]

export function AppendixFullDataTable({
  homeNames = ["Greenfield Manor", "Oakwood Court", "Riverside Lodge", "Elmwood House", "Meadowbrook Care"],
  dataPoints = sampleDataPoints,
  pageNumber = 1,
}: AppendixFullDataTableProps) {
  return (
    <div className="w-full bg-white p-4 sm:p-6 md:p-8 lg:p-12 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 mb-6 sm:mb-8 pb-3 sm:pb-4 border-b-2 border-[#1A231E]/10">
        <div className="flex items-center gap-2 sm:gap-3">
          <Database className="w-5 h-5 sm:w-6 sm:h-6 text-[#4F6F52]" />
          <h1 className="text-xl sm:text-2xl font-bold text-[#1A231E]">Appendix A: Complete Data Table</h1>
        </div>
        <div className="text-xs sm:text-sm text-[#1A231E]/50">Page A-{pageNumber}</div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto -mx-2 sm:-mx-4">
        <div className="inline-block min-w-full align-middle px-2 sm:px-4">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead className="sticky top-0 bg-[#4F6F52]/5">
              <tr>
                <th className="px-3 py-3 text-sm font-bold text-[#1A231E] border-b-2 border-[#4F6F52]/20 whitespace-nowrap">
                  Category
                </th>
                <th className="px-3 py-3 text-sm font-bold text-[#1A231E] border-b-2 border-[#4F6F52]/20 whitespace-nowrap">
                  Subcategory
                </th>
                <th className="px-3 py-3 text-sm font-bold text-[#1A231E] border-b-2 border-[#4F6F52]/20 whitespace-nowrap">
                  Metric
                </th>
                <th className="px-3 py-3 text-sm font-bold text-[#1A231E] border-b-2 border-[#4F6F52]/20 whitespace-nowrap text-centre">
                  Weight
                </th>
                {homeNames.map((name, idx) => (
                  <th
                    key={idx}
                    className="px-3 py-3 text-sm font-bold text-[#1A231E] border-b-2 border-[#4F6F52]/20 whitespace-nowrap text-centre"
                  >
                    {name}
                  </th>
                ))}
                <th className="px-3 py-3 text-sm font-bold text-[#1A231E] border-b-2 border-[#4F6F52]/20 whitespace-nowrap">
                  Source
                </th>
              </tr>
            </thead>
            <tbody>
              {dataPoints.map((point, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-[#F8F9FA]"}>
                  <td className="px-3 py-2 text-sm text-[#1A231E] border-b border-[#E8E5DF] font-medium">
                    {point.category}
                  </td>
                  <td className="px-3 py-2 text-sm text-[#5A6D7A] border-b border-[#E8E5DF]">{point.subcategory}</td>
                  <td className="px-3 py-2 text-sm text-[#1A231E] border-b border-[#E8E5DF]">{point.metric}</td>
                  <td className="px-3 py-2 text-sm text-[#5A6D7A] border-b border-[#E8E5DF] text-centre font-medium">
                    {point.weight}
                  </td>
                  <td className="px-3 py-2 text-sm text-[#1A231E] border-b border-[#E8E5DF] text-centre">
                    {point.home1}
                  </td>
                  <td className="px-3 py-2 text-sm text-[#1A231E] border-b border-[#E8E5DF] text-centre">
                    {point.home2}
                  </td>
                  <td className="px-3 py-2 text-sm text-[#1A231E] border-b border-[#E8E5DF] text-centre">
                    {point.home3}
                  </td>
                  <td className="px-3 py-2 text-sm text-[#1A231E] border-b border-[#E8E5DF] text-centre">
                    {point.home4}
                  </td>
                  <td className="px-3 py-2 text-sm text-[#1A231E] border-b border-[#E8E5DF] text-centre">
                    {point.home5}
                  </td>
                  <td className="px-3 py-2 text-sm text-[#4F6F52] border-b border-[#E8E5DF] whitespace-nowrap">
                    {point.source}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer Note */}
      <div className="mt-4 sm:mt-6 text-xs sm:text-sm text-[#5A6D7A] italic">
        Note: This table shows a subset of all 200+ data points used in our analysis. Full data available upon request.
      </div>

      {/* Page Footer */}
      <div className="mt-8 sm:mt-12 pt-3 sm:pt-4 border-t border-[#E8E5DF] flex items-center justify-between text-xs sm:text-sm text-[#5A6D7A]">
        <div>RightCareHome Professional Report</div>
        <div>Confidential</div>
      </div>
    </div>
  )
}
