import { FundingResultsScreen } from "@/components/funding/funding-results-screen"

const mockResult = {
  chc: {
    probability_percent: 85,
    category: "high" as const,
    is_likely_eligible: true,
  },
  la: {
    funding_category: "partial_support" as const,
    weekly_contribution: 250.5,
  },
  dpa: {
    is_eligible: true,
    property_value: 280000,
  },
  savings: {
    weekly: 150,
    annual: 7800,
    five_year: 39000,
  },
  local_authority: "Birmingham City Council",
}

export default function FundingResultsDemoPage() {
  return <FundingResultsScreen result={mockResult} />
}
