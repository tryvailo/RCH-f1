import { RegionalPageBuilder } from "@/lib/regional-page-builder"
import { liverpoolConfig } from "@/lib/data/cities/liverpool"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Care Homes in Liverpool | RightCareHome",
    description:
        "Expert 2025 analysis of 109+ Liverpool care homes. Compare costs, quality, and demand trends across Old Swan, Wavertree, and Woolton.",
}

export default function LiverpoolPage() {
    return <RegionalPageBuilder config={liverpoolConfig} />
}
