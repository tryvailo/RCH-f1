import { RegionalPageBuilder } from "@/lib/regional-page-builder"
import { londonConfig } from "@/lib/data/cities/london"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Care Homes in London | RightCareHome",
  description:
    "Expert 2025 analysis of 1,191 London care homes. Compare costs, quality, and demand trends across all 32 boroughs.",
}

export default function LondonPage() {
  return <RegionalPageBuilder config={londonConfig} />
}
