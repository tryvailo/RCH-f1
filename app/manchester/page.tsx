import { RegionalPageBuilder } from "@/lib/regional-page-builder"
import { ManchesterStatsSection } from "@/components/manchester-stats-section"
import { ManchesterCareHomesSection } from "@/components/manchester-care-homes-section"
import { ManchesterTestimonialsSection } from "@/components/manchester-testimonials-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Care Homes in Manchester | RightCareHome",
  description:
    "Find the best care homes in Manchester. Compare 245 verified homes, transparent pricing, and local expertise. Free shortlist report.",
}

export default function ManchesterPage() {
  return (
    <RegionalPageBuilder
      region="Manchester"
      regionDisplay="Manchester"
      statsSection={<ManchesterStatsSection />}
      careHomesSection={<ManchesterCareHomesSection />}
      testimonialsSection={<ManchesterTestimonialsSection />}
    />
  )
}
