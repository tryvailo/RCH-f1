"use client"

import { Suspense, useState } from "react"
import { useSearchParams } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ReportHeader } from "@/components/report-header"
import { ReportEmpathySection } from "@/components/report-empathy-section"

import { ReportFairCostGap } from "@/components/report-fair-cost-gap"
import { ReportHomeRecommendations } from "@/components/report-home-recommendations"
import { ReportFundingEligibility } from "@/components/report-funding-eligibility"
import { ReportActionPlan } from "@/components/report-action-plan"
import { ReportUpgradeCTA } from "@/components/report-upgrade-cta"
import { ReportVisualTeaser } from "@/components/report-visual-teaser"
import { ReportSocialProof } from "@/components/report-social-proof"
import { ReportFooter } from "@/components/report-footer"
import { ReportLoadingAnimation } from "@/components/report-loading-animation"
import { ReportAreaProfile } from "@/components/report-area-profile"
import { ReportAreaMap } from "@/components/report-area-map"
import { ReportValueSummary } from "@/components/report-value-summary"
import { ReportSaveShareBar } from "@/components/report-save-share-bar"
import { ReportExpiryBanner } from "@/components/report-expiry-banner"

function ThankYouContent() {
  const searchParams = useSearchParams()
  const reference = searchParams.get("ref") || "FREE-2025-01-27-ABC123"
  const name = searchParams.get("name") || "Valued Customer"
  const location = searchParams.get("location") || "Birmingham"
  const email = searchParams.get("email") || "your email"
  
  // Parse priorities and weights from URL params
  const prioritiesParam = searchParams.get("priorities") || "quality,cost,proximity"
  const weightsParam = searchParams.get("weights") || "50,30,20"
  const priorityOrder = prioritiesParam.split(",")
  const priorityWeights = weightsParam.split(",").map((w) => parseInt(w, 10))

  const [showReport, setShowReport] = useState(false)
  const [showSaveDialog, setShowSaveDialog] = useState(false)

  const generatedAt = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })

  if (!showReport) {
    return <ReportLoadingAnimation onComplete={() => setShowReport(true)} />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FDFBF7] via-white to-[#F8F6F3]">
      <ReportExpiryBanner reportId={reference} onSaveClick={() => setShowSaveDialog(true)} />

      <Header />

      <div className="pb-0">
        <ReportHeader
          recipientName={name}
          location={location}
          timeline="Within 3 months"
          careType={["Nursing", "Dementia Care"]}
          budget="£5,000-7,000/month"
          totalAnalysed={156}
          matchesFound={3}
          reportId={reference}
          generatedAt={generatedAt}
        />

        <ReportValueSummary matchesCount={3} location={location} />

        <ReportEmpathySection />

        <ReportHomeRecommendations priorityOrder={priorityOrder} />

        <ReportAreaProfile />

        <ReportAreaMap />

        <ReportFairCostGap
          localAuthority="Birmingham City Council"
          fairCostPerWeek={1048}
          marketAveragePerWeek={1467}
          numberOfHomes={3}
        />

        <ReportFundingEligibility
          nhcProbability={78}
          councilProbability={72}
          deferredProbability={85}
          weeklyMarketCost={1467}
          weeklyFairCost={1048}
          medicalCondition="complex health needs"
        />

        <ReportSocialProof />

        <ReportVisualTeaser />

        <ReportUpgradeCTA />

        <ReportActionPlan />

        <ReportFooter reportId={reference} generatedAt={generatedAt} />
      </div>

      <ReportSaveShareBar reportId={reference} recipientName={name} location={location} />

      <Footer />
    </div>
  )
}

export default function ThankYouPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FDFBF7] to-white">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#4F6F52] mx-auto mb-4"></div>
            <p className="text-[#1A231E]/70">Loading your personalised report...</p>
          </div>
        </div>
      }
    >
      <ThankYouContent />
    </Suspense>
  )
}
