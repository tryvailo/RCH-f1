import { Header } from "@/components/header"
import { FundingHeroSection } from "@/components/funding/funding-hero-section"
import { FundingTrustDifferentiators } from "@/components/funding/funding-trust-differentiators-section"
import { FundingProblemSection } from "@/components/funding/funding-problem-section"
import { FundingHowItWorksSection } from "@/components/funding/funding-how-it-works-section"
import { FundingReportSection } from "@/components/funding/funding-report-section"
import { FundingTestimonialsSection } from "@/components/funding/funding-testimonials-section"
import { FundingGuaranteeSection } from "@/components/funding/funding-guarantee-section"
import { FundingComparisonSection } from "@/components/funding/funding-comparison-section"
import { FundingFaqSection } from "@/components/funding/funding-faq-section"
import { FundingFinalCtaSection } from "@/components/funding/funding-final-cta-section"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "NHS Funding Calculator - Discover If You Qualify for Free Care | RightCareHome",
  description:
    "Find out if the state can fund your care home in 10 minutes. 95% accurate eligibility assessment. Save up to £76,000/year. Instant PDF report. 30-day money-back guarantee.",
}

export default function FundingCalculatorPage() {
  return (
    <main className="min-h-screen bg-[#FDFBF7]">
      <Header />
      <FundingHeroSection />
      <FundingTrustDifferentiators />
      <FundingProblemSection />
      <FundingHowItWorksSection />
      <FundingReportSection />
      <FundingTestimonialsSection />
      <FundingGuaranteeSection />
      <FundingComparisonSection />
      <FundingFaqSection />
      <FundingFinalCtaSection />
      <Footer />
    </main>
  )
}
