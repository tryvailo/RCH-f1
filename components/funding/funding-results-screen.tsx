"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Home, DollarSign, ArrowRight, Download, Mail, ChevronDown, ChevronUp } from "lucide-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { DSTDomainBreakdown } from "./dst-domain-breakdown"
import { DisregardsTable } from "./disregards-table"

interface FundingAssessmentResult {
    chc: {
        probability_percent: number
        category: "high" | "moderate" | "low"
        is_likely_eligible: boolean
    }
    la: {
        funding_category: "full_support" | "partial_support" | "self_funding"
        weekly_contribution: number
    }
    dpa: {
        is_eligible: boolean
        property_value: number
    }
    savings: {
        weekly: number
        annual: number
        five_year: number
    }
    local_authority: string
}

interface FundingResultsScreenProps {
    result: FundingAssessmentResult
}

export function FundingResultsScreen({ result }: FundingResultsScreenProps) {
    const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set())

    const toggleSection = (sectionId: string) => {
        const newSections = new Set(expandedSections)
        if (newSections.has(sectionId)) {
            newSections.delete(sectionId)
        } else {
            newSections.add(sectionId)
        }
        setExpandedSections(newSections)
    }

    return (
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-background to-muted/20">
            <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
                {/* Header */}
                <div className="text-center mb-12 space-y-4">
                    <Badge className="inline-flex items-center gap-2 bg-primary text-primary-foreground">
                        <CheckCircle2 className="w-4 h-4" />
                        Assessment Complete
                    </Badge>
                    <h1 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">Your Funding Eligibility</h1>
                    <p className="text-lg text-muted-foreground">Based on your answers, here's what you may qualify for</p>
                </div>

                {/* Results Grid */}
                <div className="space-y-6 mb-8">
                    {/* CHC Card */}
                    <Card className="border-border shadow-soft-xl bg-card overflow-hidden">
                        <Collapsible
                            open={expandedSections.has("dst-breakdown")}
                            onOpenChange={() => toggleSection("dst-breakdown")}
                        >
                            <CardHeader className="bg-gradient-to-r from-primary/5 to-primary/10 border-b border-border pb-6">
                                <div className="flex items-center justify-between">
                                    <div className="space-y-2">
                                        <CardTitle className="text-2xl font-bold text-foreground">NHS Continuing Healthcare (CHC)</CardTitle>
                                        <p className="text-sm text-muted-foreground">Full NHS funding for primary health needs</p>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-4xl font-bold text-primary">{result.chc.probability_percent}%</div>
                                        <div className="text-xs text-muted-foreground uppercase font-semibold tracking-wide">Probability</div>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="pt-6 space-y-4">
                                <div className="flex items-center gap-3">
                                    {result.chc.is_likely_eligible ? (
                                        <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                                    ) : (
                                        <div className="w-6 h-6 rounded-full border-2 border-destructive flex-shrink-0" />
                                    )}
                                    <span className="text-lg font-semibold text-foreground">
                                        {result.chc.is_likely_eligible ? "Likely Eligible" : "May Not Qualify"}
                                    </span>
                                </div>
                                <p className="text-muted-foreground leading-relaxed">
                                    {result.chc.is_likely_eligible
                                        ? "Based on your health assessment, you have strong indicators of CHC eligibility. The next step is to contact your GP to request a formal CHC assessment."
                                        : "Your current health needs may not meet the CHC threshold, but eligibility can change. Retest if circumstances change."}
                                </p>
                                <div className="pt-4">
                                    <CollapsibleTrigger asChild>
                                        <Button
                                            variant="outline"
                                            className="w-full text-primary border-primary hover:bg-primary/5 bg-transparent"
                                        >
                                            {expandedSections.has("dst-breakdown") ? "Hide" : "View"} Your Health Assessment
                                            {expandedSections.has("dst-breakdown") ? (
                                                <ChevronUp className="w-4 h-4 ml-2" />
                                            ) : (
                                                <ChevronDown className="w-4 h-4 ml-2" />
                                            )}
                                        </Button>
                                    </CollapsibleTrigger>
                                </div>
                                <CollapsibleContent className="pt-6 animate-fade-in-up">
                                    <DSTDomainBreakdown
                                        domains={undefined}
                                        totalScore={62}
                                        probability={result.chc.probability_percent}
                                    />
                                </CollapsibleContent>
                            </CardContent>
                        </Collapsible>
                    </Card>

                    {/* Financial Impact Card */}
                    <Card className="border-border shadow-soft-xl bg-card overflow-hidden">
                        <CardHeader className="bg-gradient-to-r from-secondary/5 to-secondary/10 border-b border-border pb-6">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-secondary/10 rounded-lg">
                                    <DollarSign className="w-6 h-6 text-secondary" />
                                </div>
                                <div>
                                    <CardTitle className="text-2xl font-bold text-foreground">Financial Impact</CardTitle>
                                    <p className="text-sm text-muted-foreground">Local Authority support & potential savings</p>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="pt-6">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-border">
                                {/* Local Authority Support Section */}
                                <div className="space-y-6">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-lg font-semibold text-foreground">Local Authority Support</h3>
                                        <Badge
                                            className={`font-semibold ${result.la.funding_category === "full_support"
                                                ? "bg-primary text-primary-foreground"
                                                : result.la.funding_category === "partial_support"
                                                    ? "bg-amber-400 text-amber-950"
                                                    : "bg-destructive text-destructive-foreground"
                                                }`}
                                        >
                                            {result.la.funding_category === "full_support"
                                                ? "Full Support"
                                                : result.la.funding_category === "partial_support"
                                                    ? "Partial Support"
                                                    : "Self-Funded"}
                                        </Badge>
                                    </div>

                                    <div className="bg-muted/30 rounded-xl p-5 border border-border">
                                        <div className="text-sm text-muted-foreground uppercase font-semibold tracking-wide mb-2">
                                            Your Weekly Contribution
                                        </div>
                                        <div className="text-3xl font-bold text-foreground">£{result.la.weekly_contribution.toFixed(2)}</div>
                                    </div>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {result.la.funding_category === "full_support"
                                            ? "Your capital and income fall below the lower threshold (£14,250). The Local Authority will fund your care costs in full."
                                            : result.la.funding_category === "partial_support"
                                                ? "Your capital falls between the thresholds (£14,250 - £23,250). You'll receive partial LA support and contribute the amount shown above weekly."
                                                : "Your capital exceeds the upper threshold (£23,250). You're responsible for funding your own care. No LA support available."}
                                    </p>
                                    <div className="pt-2">
                                        <Button
                                            onClick={() => toggleSection("disregards")}
                                            variant="outline"
                                            className="w-full text-secondary-foreground border-secondary hover:bg-muted/50 bg-transparent"
                                        >
                                            {expandedSections.has("disregards") ? "Hide" : "View"} Income & Asset Disregards
                                            {expandedSections.has("disregards") ? (
                                                <ChevronUp className="w-4 h-4 ml-2" />
                                            ) : (
                                                <ChevronDown className="w-4 h-4 ml-2" />
                                            )}
                                        </Button>
                                    </div>
                                </div>

                                {/* Savings Section */}
                                <div className="space-y-6 pt-6 lg:pt-0 lg:pl-8">
                                    <h3 className="text-lg font-semibold text-foreground">Potential Savings</h3>
                                    <div className="space-y-4">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
                                                <div className="text-sm text-muted-foreground mb-1">Weekly</div>
                                                <div className="text-2xl font-bold text-primary">£{result.savings.weekly}</div>
                                            </div>
                                            <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
                                                <div className="text-sm text-muted-foreground mb-1">Annual</div>
                                                <div className="text-2xl font-bold text-primary">£{result.savings.annual.toLocaleString()}</div>
                                            </div>
                                        </div>
                                        <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                                            <div className="text-sm text-muted-foreground mb-1">5-Year Savings</div>
                                            <div className="text-3xl font-bold text-primary">£{result.savings.five_year.toLocaleString()}</div>
                                        </div>
                                    </div>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        Estimated savings if you qualify for maximum funding. Actual amounts may vary based on location and care needs.
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* DPA Card */}
                    <Card className="border-border shadow-soft-xl bg-card overflow-hidden">
                        <CardHeader className="bg-gradient-to-r from-primary/5 to-primary/10 border-b border-border pb-6">
                            <div className="flex items-center justify-between">
                                <div className="space-y-2">
                                    <CardTitle className="text-2xl font-bold text-foreground">Deferred Payment Agreement (DPA)</CardTitle>
                                    <p className="text-sm text-muted-foreground">Protect your home during your lifetime</p>
                                </div>
                                {result.dpa.is_eligible && <CheckCircle2 className="w-8 h-8 text-primary flex-shrink-0" />}
                            </div>
                        </CardHeader>
                        <CardContent className="pt-6 space-y-4">
                            {result.dpa.is_eligible ? (
                                <>
                                    <p className="text-muted-foreground leading-relaxed">
                                        You're eligible for a Deferred Payment Agreement. Your property (valued at £
                                        {result.dpa.property_value.toLocaleString()}) can be disregarded from the means test. You can defer
                                        care costs and repay from your property sale after your lifetime.
                                    </p>
                                    <div className="bg-primary/10 rounded-xl p-4 border border-primary/20">
                                        <div className="text-sm font-semibold text-foreground mb-2">Maximum Loan Available</div>
                                        <div className="text-2xl font-bold text-primary">
                                            £{(result.dpa.property_value * 0.9).toLocaleString()}
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <p className="text-muted-foreground leading-relaxed">
                                    Based on your circumstances, you may not be eligible for a DPA. This typically applies if you have no
                                    property or significant liquid assets.
                                </p>
                            )}
                            <Button
                                variant="outline"
                                className="w-full text-primary border-primary hover:bg-primary/5 bg-transparent"
                            >
                                Learn More About DPA
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </CardContent>
                    </Card>




                    {/* Local Authority Card */}
                    <Card className="border-border shadow-soft-xl bg-card overflow-hidden">
                        <CardHeader className="bg-gradient-to-r from-secondary/5 to-secondary/10 border-b border-border pb-6">
                            <div className="flex items-center gap-3">
                                <Home className="w-6 h-6 text-secondary" />
                                <div>
                                    <CardTitle className="text-2xl font-bold text-foreground">{result.local_authority}</CardTitle>
                                    <p className="text-sm text-muted-foreground">Your Local Authority</p>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="pt-6 space-y-4">
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <div className="flex-shrink-0 text-secondary font-bold">📞</div>
                                    <div>
                                        <div className="text-sm text-muted-foreground">Phone</div>
                                        <a href="tel:01213031234" className="text-lg font-semibold text-primary hover:underline">
                                            0121 303 1234
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="flex-shrink-0 text-secondary font-bold">✉️</div>
                                    <div>
                                        <div className="text-sm text-muted-foreground">Email</div>
                                        <a
                                            href="mailto:acap@birmingham.gov.uk"
                                            className="text-lg font-semibold text-primary hover:underline"
                                        >
                                            acap@birmingham.gov.uk
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                                View Council Website
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Next Steps Card */}
                    <Card className="border-border shadow-soft-xl bg-card overflow-hidden">
                        <CardHeader className="bg-gradient-to-r from-destructive/5 to-destructive/10 border-b border-border pb-6">
                            <CardTitle className="text-2xl font-bold text-foreground">Recommended Next Steps</CardTitle>
                        </CardHeader>
                        <CardContent className="pt-6 space-y-4">
                            <div className="space-y-4">
                                {[
                                    {
                                        num: "1",
                                        title: "Contact Your GP",
                                        desc: "Request a CHC assessment if you're eligible",
                                    },
                                    {
                                        num: "2",
                                        title: "Reach Out to Your Council",
                                        desc: "Apply for Local Authority funding and means test assessment",
                                    },
                                    {
                                        num: "3",
                                        title: "Consider DPA",
                                        desc: "If eligible, explore Deferred Payment to protect your home",
                                    },
                                    {
                                        num: "4",
                                        title: "Get Professional Guidance",
                                        desc: "Understand appeal rights and optimize your position",
                                    },
                                ].map((step, i) => (
                                    <div key={i} className="flex gap-4 pb-4 border-b border-border last:border-0 last:pb-0">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                                            {step.num}
                                        </div>
                                        <div>
                                            <div className="font-semibold text-foreground">{step.title}</div>
                                            <div className="text-sm text-muted-foreground">{step.desc}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Expandable Deep-Dive Sections */}
                <div className="space-y-6">
                    {/* Income & Asset Disregards */}
                    {expandedSections.has("disregards") && <DisregardsTable />}
                </div>

                {/* CTA Section */}
                <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 text-primary-foreground text-center space-y-6">
                    <h3 className="text-2xl font-bold">Get Your Detailed Professional Report</h3>
                    <p className="text-lg opacity-90 max-w-2xl mx-auto">
                        Our £119 Professional Report includes personalized appeal guidance, council negotiation scripts, and
                        detailed breakdown of your eligibility scores.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-background text-primary hover:bg-background/90 font-semibold">
                            <Download className="w-5 h-5 mr-2" />
                            Download Summary PDF
                        </Button>
                        <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent">
                            <Mail className="w-5 h-5 mr-2" />
                            Email Results to Me
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
