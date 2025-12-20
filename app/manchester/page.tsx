import { RegionalPageBuilder } from "@/lib/regional-page-builder"
import { manchesterConfig } from "@/lib/data/cities/manchester"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Care Homes in Manchester | RightCareHome",
  description:
    "Expert 2025 analysis of 312 Manchester care homes. Compare costs, quality, and demand trends across Greater Manchester.",
}

export default function ManchesterPage() {
  return <RegionalPageBuilder config={manchesterConfig} />
}
