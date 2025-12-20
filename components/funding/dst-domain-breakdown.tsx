"use client"

import { useState } from "react"
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    ResponsiveContainer,
    Tooltip,
} from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, ChevronUp, Info } from "lucide-react"
import { DST_DOMAINS, type DSTDomain } from "@/lib/funding-mock-data"
import * as Icons from "lucide-react"

interface DSTDomainBreakdownProps {
    domains?: DSTDomain[]
    totalScore?: number
    probability?: number
}

export function DSTDomainBreakdown({
    domains = DST_DOMAINS,
    totalScore = 62,
    probability = 85,
}: DSTDomainBreakdownProps) {
    const [isExpanded, setIsExpanded] = useState(false)
    const [selectedDomain, setSelectedDomain] = useState<string | null>(null)

    // Transform data for radar chart (using normalized 0-20 scale)
    const chartData = domains.map((domain) => ({
        category: domain.shortName,
        score: domain.score,
        fullMark: 20,
    }))

    // Group domains by level for summary
    const domainsByLevel = {
        PRIORITY: domains.filter((d) => d.level === "PRIORITY"),
        SEVERE: domains.filter((d) => d.level === "SEVERE"),
        HIGH: domains.filter((d) => d.level === "HIGH"),
        MODERATE: domains.filter((d) => d.level === "MODERATE"),
        LOW: domains.filter((d) => d.level === "LOW"),
        NO: domains.filter((d) => d.level === "NO"),
    }

    const levelColors: Record<string, { bg: string; text: string; border: string }> = {
        PRIORITY: {
            bg: "#8B0000",
            text: "white",
            border: "#8B0000",
        },
        SEVERE: {
            bg: "#D17A6F",
            text: "white",
            border: "#D17A6F",
        },
        HIGH: {
            bg: "#E8A87C",
            text: "#1A231E",
            border: "#E8A87C",
        },
        MODERATE: {
            bg: "#F5DEB3",
            text: "#1A231E",
            border: "#F5DEB3",
        },
        LOW: {
            bg: "#D3F8DC",
            text: "#1A231E",
            border: "#4F6F52",
        },
        NO: {
            bg: "#F5F3EF",
            text: "#1A231E",
            border: "#E8E5DF",
        },
    }

    const getIconComponent = (iconName: string) => {
        const Icon = Icons[iconName as keyof typeof Icons] as any
        return Icon ? <Icon className="w-5 h-5" /> : null
    }

    const notNoDomains = domains.filter((d) => d.level !== "NO")

    return (
        <Card className="border-border shadow-soft-xl bg-card overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-primary/5 to-primary/10 border-b border-border pb-6">
                <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2 flex-1">
                        <div className="flex items-center gap-3">
                            <CardTitle className="text-2xl font-bold text-foreground">
                                📋 Your Health Assessment Breakdown
                            </CardTitle>
                            <Info className="w-5 h-5 text-primary flex-shrink-0" />
                        </div>
                        <p className="text-sm text-muted-foreground">
                            How the 12 DST domains influenced your CHC probability score
                        </p>
                    </div>
                </div>
            </CardHeader>

            <CardContent className="pt-6 space-y-6">
                {/* Quick Summary Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    <div className="bg-muted/30 rounded-lg p-4 border border-border">
                        <div className="text-xs text-muted-foreground uppercase font-semibold mb-1">
                            Domains with Needs
                        </div>
                        <div className="text-2xl font-bold text-primary">{notNoDomains.length}/12</div>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-4 border border-border">
                        <div className="text-xs text-muted-foreground uppercase font-semibold mb-1">
                            Highest Level
                        </div>
                        <div className="text-lg font-bold text-destructive">
                            {domainsByLevel.SEVERE.length > 0 ? "SEVERE" : "HIGH"}
                        </div>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-4 border border-border">
                        <div className="text-xs text-muted-foreground uppercase font-semibold mb-1">
                            Total Score
                        </div>
                        <div className="text-2xl font-bold text-primary">{totalScore}</div>
                    </div>
                </div>

                {/* Radar Chart - Always Visible */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">
                        Visual Profile - Your Care Needs Across All Domains
                    </h3>
                    <div className="w-full h-[350px] sm:h-[450px] bg-card rounded-xl border border-border p-4">
                        <ResponsiveContainer width="100%" height="100%">
                            <RadarChart data={chartData}>
                                <PolarGrid stroke="oklch(var(--border))" strokeWidth={1} />
                                <PolarAngleAxis
                                    dataKey="category"
                                    tick={{
                                        fill: "oklch(var(--foreground))",
                                        fontSize: 11,
                                        fontWeight: 600,
                                    }}
                                    tickLine={false}
                                />
                                <PolarRadiusAxis
                                    angle={30}
                                    domain={[0, 20]}
                                    tick={{
                                        fill: "oklch(var(--muted-foreground))",
                                        fontSize: 9,
                                    }}
                                    tickCount={5}
                                    axisLine={false}
                                />
                                <Radar
                                    name="Your Score"
                                    dataKey="score"
                                    stroke="oklch(var(--primary))"
                                    fill="oklch(var(--primary))"
                                    fillOpacity={0.25}
                                    strokeWidth={2}
                                    dot={{
                                        r: 5,
                                        fill: "oklch(var(--primary))",
                                        strokeWidth: 0,
                                    }}
                                />
                                <Tooltip
                                    content={({ active, payload }) => {
                                        if (active && payload && payload.length) {
                                            const data = payload[0].payload
                                            return (
                                                <div className="bg-popover border-2 border-border rounded-lg p-3 shadow-lg">
                                                    <p className="font-semibold text-foreground text-sm">{data.category}</p>
                                                    <p className="text-sm text-primary font-bold">Score: {data.score}/20</p>
                                                </div>
                                            )
                                        }
                                        return null
                                    }}
                                />
                            </RadarChart>
                        </ResponsiveContainer>
                    </div>
                    <p className="text-xs text-muted-foreground">
                        Higher scores = greater health needs in that domain. Domains with scores help determine CHC
                        eligibility.
                    </p>
                </div>

                {/* Expandable Detailed Breakdown */}
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="w-full flex items-center justify-between p-4 rounded-xl hover:bg-muted/50 transition-colours border border-border"
                >
                    <span className="font-semibold text-foreground">
                        {isExpanded ? "Hide" : "View"} Detailed Domain Breakdown
                    </span>
                    {isExpanded ? (
                        <ChevronUp className="w-5 h-5 text-primary" />
                    ) : (
                        <ChevronDown className="w-5 h-5 text-primary" />
                    )}
                </button>

                {isExpanded && (
                    <div className="space-y-4 pt-4 border-t border-border">
                        {/* Level Summary Rows */}
                        {Object.entries(domainsByLevel).map(([level, domainsInLevel]) => {
                            if (domainsInLevel.length === 0) return null

                            const colours = levelColors[level]
                            return (
                                <div key={level} className="space-y-3">
                                    <div
                                        className="rounded-lg px-4 py-2 inline-block"
                                        style={{
                                            backgroundColor: colours.bg,
                                            colour: colours.text,
                                            border: `2px solid ${colours.border}`,
                                        }}
                                    >
                                        <span className="font-semibold text-sm">
                                            {level === "NO" ? "NO NEEDS" : level} ({domainsInLevel.length})
                                        </span>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {domainsInLevel.map((domain) => (
                                            <div
                                                key={domain.id}
                                                className="bg-muted/30 rounded-lg p-4 border border-border cursor-pointer hover:shadow-soft-md transition-shadow"
                                                onClick={() =>
                                                    setSelectedDomain(selectedDomain === domain.id ? null : domain.id)
                                                }
                                            >
                                                <div className="flex items-start gap-3">
                                                    <div
                                                        className="w-8 h-8 rounded-lg flex items-center justify-centre flex-shrink-0"
                                                        style={{ backgroundColor: `${domain.colour}20` }}
                                                    >
                                                        {getIconComponent(domain.icon)}
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <div className="flex items-start justify-between gap-2">
                                                            <h4 className="font-semibold text-foreground text-sm">
                                                                {domain.name}
                                                            </h4>
                                                            <Badge
                                                                className="text-xs flex-shrink-0"
                                                                style={{
                                                                    backgroundColor: domain.colour,
                                                                    colour: "white",
                                                                }}
                                                            >
                                                                {domain.score}
                                                            </Badge>
                                                        </div>
                                                        {selectedDomain === domain.id && (
                                                            <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                                                                {domain.description}
                                                            </p>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                )}

                {/* Bottom Insight */}
                <div className="bg-primary/10 rounded-xl p-4 border border-primary/20">
                    <div className="flex gap-3">
                        <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <div className="text-sm">
                            <p className="font-semibold text-foreground mb-1">Why this matters for CHC:</p>
                            <p className="text-muted-foreground">
                                Your{" "}
                                <strong>
                                    {domainsByLevel.SEVERE.length > 0
                                        ? `1 SEVERE domain (${domainsByLevel.SEVERE[0].name})`
                                        : `${domainsByLevel.HIGH.length} HIGH domains`}
                                </strong>{" "}
                                combined with{" "}
                                <strong>{notNoDomains.filter((d) => d.level === "HIGH").length} HIGH domains</strong>{" "}
                                strengthens your CHC eligibility probability to {probability}%.
                            </p>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
