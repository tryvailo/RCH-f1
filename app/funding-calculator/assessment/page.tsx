import type { Metadata } from "next"
import { FundingAssessmentOptimized } from "@/components/funding/funding-assessment-optimized"

export const metadata: Metadata = {
  title: "Funding Calculator Assessment - RightCareHome",
  description:
    "Complete our 7-step assessment to discover NHS CHC and Local Authority funding eligibility. Takes 10-16 minutes.",
}

export default function FundingAssessmentPage() {
  return (
    <main className="min-h-screen">
      <FundingAssessmentOptimized />
    </main>
  )
}
