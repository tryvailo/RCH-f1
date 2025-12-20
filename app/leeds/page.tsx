import { RegionalPageBuilder } from "@/lib/regional-page-builder"
import { leedsConfig } from "@/lib/data/cities/leeds"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Care Homes in Leeds | RightCareHome",
    description:
        "Expert 2025 analysis of 145+ Leeds care homes. Compare costs, quality, and demand trends across Roundhay, Headingley, and Oakwood.",
}

export default function LeedsPage() {
    return <RegionalPageBuilder config={leedsConfig} />
}
