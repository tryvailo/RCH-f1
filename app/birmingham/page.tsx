import { RegionalPageBuilder } from "@/lib/regional-page-builder"
import { birminghamConfig } from "@/lib/data/cities/birmingham"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Care Homes in Birmingham | RightCareHome",
  description:
    "Expert analysis of 177 Birmingham care homes. Compare costs, quality, and demand trends for 2025. Independent, thorough, and unbiased.",
}

export default function BirminghamPage() {
  return <RegionalPageBuilder config={birminghamConfig} />
}
