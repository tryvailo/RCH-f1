import { RegionalPageBuilder } from "@/lib/regional-page-builder"
import { LondonStatsSection } from "@/components/london-stats-section"
import { LondonCareHomesSection } from "@/components/london-care-homes-section"
import { LondonTestimonialsSection } from "@/components/london-testimonials-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Care Homes in London | RightCareHome",
  description:
    "Find the perfect care home in London. Expert analysis of 876 verified care homes across all 32 boroughs. Independent, thorough, and unbiased.",
}

export default function LondonPage() {
  return (
    <RegionalPageBuilder
      region="London"
      regionDisplay="London"
      statsSection={<LondonStatsSection />}
      careHomesSection={<LondonCareHomesSection />}
      testimonialsSection={<LondonTestimonialsSection />}
    />
  )
}
