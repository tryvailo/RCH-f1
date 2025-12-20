"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Copy, CheckCircle2 } from "lucide-react"
import { useState } from "react"

interface CareHome {
  name: string
  metrics: {
    weeklyFee: number
    occupancyRate: string
    [key: string]: any
  }
  [key: string]: any
}

interface LeveragePoint {
  point: string
  category: "occupancy" | "market" | "timing" | "quality"
  strength: "strong" | "moderate" | "weak"
}

interface NegotiationStrategyProps {
  homes: CareHome[]
}

function calculateNegotiationData(home: CareHome) {
  const weeklyFee = home.metrics.weeklyFee || 950
  const occupancy = Number.parseInt(home.metrics.occupancyRate || "90")

  // Market average is typically 10% below advertised rates for negotiation
  const marketAverage = Math.round(weeklyFee * 0.95)
  const recommendedOffer = Math.round(weeklyFee * 0.92)
  const maxOffer = Math.round(weeklyFee * 0.97)

  const leveragePoints: LeveragePoint[] = []

  // Occupancy leverage
  if (occupancy < 85) {
    leveragePoints.push({
      point: `Lower occupancy rate (${occupancy}%) suggests rooms available - negotiate for move-in incentives`,
      category: "occupancy",
      strength: "strong",
    })
  } else if (occupancy < 92) {
    leveragePoints.push({
      point: `Moderate occupancy (${occupancy}%) - ask about trial stays or first month discount`,
      category: "occupancy",
      strength: "moderate",
    })
  }

  // Market leverage
  leveragePoints.push({
    point: "Compare with similar care homes in the area to justify lower rate request",
    category: "market",
    strength: "moderate",
  })

  // Timing leverage
  leveragePoints.push({
    point: "Enquiring now for future placement - request fixed rate guarantee for 12 months",
    category: "timing",
    strength: "moderate",
  })

  // Long-term commitment
  leveragePoints.push({
    point: "Express interest in long-term placement to negotiate better terms",
    category: "timing",
    strength: "strong",
  })

  return {
    weeklyFee,
    marketAverage,
    recommendedOffer,
    maxOffer,
    leveragePoints,
  }
}

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Button onClick={handleCopy} variant="outline" className="h-11 px-4 bg-transparent">
      {copied ? (
        <>
          <CheckCircle2 className="h-4 w-4 mr-2" />
          Copied
        </>
      ) : (
        <>
          <Copy className="h-4 w-4 mr-2" />
          Copy Template
        </>
      )}
    </Button>
  )
}

export function NegotiationStrategy({ homes }: NegotiationStrategyProps) {
  const topHomes = homes.sort((a, b) => b.overallScore - a.overallScore).slice(0, 3)

  const emailTemplate1 = `Subject: Care Home Enquiry - [Your Name]

Dear [Care Home Name],

I am currently researching care homes in [Location] for my [relation/loved one]. Based on my research, your home appears to offer excellent care standards with [mention specific strength from report, e.g., "Outstanding CQC rating" or "excellent staff retention"].

I would like to arrange a visit to discuss:
• Current availability and waiting times
• Weekly fee structure and included services
• Trial stay options
• Any current promotions or new resident incentives

Could we arrange a convenient time for a visit in the next two weeks?

I look forward to hearing from you.

Best regards,
[Your Name]
[Your Phone Number]
[Your Email]`

  const emailTemplate2 = `Subject: Fee Discussion - [Your Name]

Dear [Care Home Manager Name],

Thank you for the informative visit to [Care Home Name] on [Date]. We were impressed by [specific positive aspect].

I am writing to discuss the weekly fee of £[Amount]. Given that:
• We are planning a long-term placement
• We can commit to moving in by [Date]
• [Add relevant leverage point from your research]

Would you be able to offer a reduced weekly rate of £[Your Offer]? This would make the decision much easier for our family.

I would also appreciate clarification on:
• What services are included in the weekly fee
• Historical fee increase patterns
• Any available funding support assistance

I look forward to discussing this further.

Best regards,
[Your Name]`

  const emailTemplate3 = `Subject: Contract Review Questions - [Your Name]

Dear [Care Home Manager Name],

Before signing the contract, I would like clarification on the following points:

Fee Structure:
• Are there any additional charges not included in the weekly fee?
• What is your policy on fee increases (frequency and notice period)?
• What happens if care needs increase significantly?

Notice Periods:
• What notice period is required if we need to leave?
• Are fees refundable if moving out mid-month?

Care Provisions:
• What happens if the home can no longer meet care needs?
• Is there a formal care plan review process?
• What is the complaints procedure?

I would appreciate written responses to these questions before proceeding.

Thank you for your time.

Best regards,
[Your Name]`

  const contractRedFlags = [
    "Automatic fee increases without consultation or justification",
    "Long notice periods (more than 4 weeks) or non-refundable deposits",
    "Vague descriptions of 'additional care charges' or 'extras'",
    "No clear process for care plan reviews or escalating concerns",
    "Lack of clarity on what happens if care needs exceed the home's capabilities",
    "Penalties for early departure or short trial stays",
    "No mention of CQC compliance or quality standards",
    "Unclear refund policy for unused services or deposits",
  ]

  return (
    <div className="space-y-12 px-4 sm:px-6 lg:px-8">
      <div className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground">Negotiation Strategy Guide</h1>
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
          Care home fees are often negotiable, especially if you have leverage points like long-term commitment, lower
          occupancy rates, or competing offers. This guide provides email templates, negotiation tactics, and contract
          review checklists to help you secure the best possible terms.
        </p>
      </div>

      <div className="space-y-8">
        {topHomes.map((home, homeIdx) => {
          const negData = calculateNegotiationData(home)

          return (
            <Card key={homeIdx} className="p-4 md:p-8 space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">{home.name}</h2>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-base md:text-lg">
                  <div className="text-base md:text-lg">
                    <span className="text-muted-foreground">Current Fee:</span>
                    <span className="font-bold text-foreground ml-2">£{negData.weeklyFee}/week</span>
                  </div>
                  <div className="text-base md:text-lg">
                    <span className="text-muted-foreground">Market Average:</span>
                    <span className="font-semibold text-foreground ml-2">£{negData.marketAverage}/week</span>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4 md:p-6 space-y-3">
                <h3 className="text-lg md:text-xl font-semibold text-foreground">Negotiation Recommendations</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-base md:text-lg text-muted-foreground mb-1">Start your negotiation at:</p>
                    <p className="text-3xl font-bold text-green-700">£{negData.recommendedOffer}/week</p>
                    <p className="text-sm md:text-base text-muted-foreground mt-1">8% below asking price</p>
                  </div>
                  <div>
                    <p className="text-base md:text-lg text-muted-foreground mb-1">Maximum you should pay:</p>
                    <p className="text-3xl font-bold text-amber-700">£{negData.maxOffer}/week</p>
                    <p className="text-sm md:text-base text-muted-foreground mt-1">3% below asking price</p>
                  </div>
                </div>
                <p className="text-base md:text-lg text-muted-foreground">
                  Potential annual savings at recommended offer:{" "}
                  <span className="font-semibold text-foreground">
                    £{(negData.weeklyFee - negData.recommendedOffer) * 52}
                  </span>
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-semibold text-foreground">Your Leverage Points</h3>
                <div className="space-y-3">
                  {negData.leveragePoints.map((leverage, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 bg-muted rounded-lg">
                      <Badge
                        variant={
                          leverage.strength === "strong"
                            ? "default"
                            : leverage.strength === "moderate"
                              ? "secondary"
                              : "outline"
                        }
                        className="mt-0.5"
                      >
                        {leverage.strength}
                      </Badge>
                      <p className="text-base md:text-lg text-foreground flex-1">{leverage.point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          )
        })}
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">Email Templates</h2>
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
          Copy and customize these templates for your communications. Replace the bracketed text with your specific
          information.
        </p>

        <Card className="p-4 md:p-6 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
            <h3 className="text-xl md:text-2xl font-semibold text-foreground">Template 1: Initial Inquiry</h3>
            <CopyButton text={emailTemplate1} />
          </div>
          <pre className="bg-muted p-4 md:p-6 rounded-lg overflow-x-auto text-sm md:text-base font-mono leading-relaxed whitespace-pre-wrap break-words">
            {emailTemplate1}
          </pre>
        </Card>

        <Card className="p-4 md:p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl md:text-2xl font-semibold text-foreground">Template 2: Fee Negotiation</h3>
            <CopyButton text={emailTemplate2} />
          </div>
          <pre className="bg-muted p-4 md:p-6 rounded-lg overflow-x-auto text-sm md:text-base font-mono leading-relaxed whitespace-pre-wrap break-words">
            {emailTemplate2}
          </pre>
        </Card>

        <Card className="p-4 md:p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl md:text-2xl font-semibold text-foreground">Template 3: Contract Review Questions</h3>
            <CopyButton text={emailTemplate3} />
          </div>
          <pre className="bg-muted p-4 md:p-6 rounded-lg overflow-x-auto text-sm md:text-base font-mono leading-relaxed whitespace-pre-wrap break-words">
            {emailTemplate3}
          </pre>
        </Card>
      </div>

      <Card className="p-6 space-y-4 bg-red-50 border-2 border-red-200">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">Contract Red Flags Checklist</h2>
        <p className="text-base md:text-lg text-muted-foreground">
          Watch out for these concerning clauses when reviewing the contract. If you spot any, request clarification or
          amendments before signing.
        </p>
        <ul className="space-y-3">
          {contractRedFlags.map((flag, idx) => (
            <li key={idx} className="flex items-start gap-3 text-base md:text-lg">
              <div className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-centre flex-shrink-0 mt-0.5 font-semibold">
                !
              </div>
              <span className="text-foreground">{flag}</span>
            </li>
          ))}
        </ul>
      </Card>

      <div className="bg-muted rounded-lg p-6 space-y-3">
        <h3 className="text-xl md:text-2xl font-semibold text-foreground">Negotiation Best Practices</h3>
        <ul className="space-y-2 text-base md:text-lg text-muted-foreground leading-relaxed">
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold mt-1">1.</span>
            <span>Always negotiate in writing via email so you have a record of agreements</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold mt-1">2.</span>
            <span>Visit multiple homes and mention you're comparing options - this creates competition</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold mt-1">3.</span>
            <span>Be polite but firm - care homes expect some negotiation</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold mt-1">4.</span>
            <span>Ask for any agreements in writing before signing the main contract</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold mt-1">5.</span>
            <span>Don't rush - take time to review contracts with family or a solicitor</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
