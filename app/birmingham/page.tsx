import { RegionalPageBuilder } from "@/lib/regional-page-builder"
import { BirminghamStatsSection } from "@/components/birmingham-stats-section"
import { BirminghamCareHomesSection } from "@/components/birmingham-care-homes-section"
import { BirminghamTestimonialsSection } from "@/components/birmingham-testimonials-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Care Homes in Birmingham | RightCareHome",
  description:
    "Find the perfect care home in Birmingham. Expert analysis of 277 verified care homes across Birmingham. Independent, thorough, and unbiased.",
}

export default function BirminghamPage() {
  return (
    <RegionalPageBuilder
      region="Birmingham"
      regionDisplay="Birmingham"
      statsSection={<BirminghamStatsSection />}
      careHomesSection={<BirminghamCareHomesSection />}
      testimonialsSection={<BirminghamTestimonialsSection />}
    />
  )
}
