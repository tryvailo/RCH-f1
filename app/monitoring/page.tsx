import { Header } from "@/components/header"
import { MonitoringHeroSection } from "@/components/monitoring/monitoring-hero-section"
import { MonitoringProblemSection } from "@/components/monitoring/monitoring-problem-section"
import { MonitoringHowItWorksSection } from "@/components/monitoring/monitoring-how-it-works-section"
import { MonitoringPricingSection } from "@/components/monitoring/monitoring-pricing-section"
import { MonitoringTestimonialsSection } from "@/components/monitoring/monitoring-testimonials-section"
import { MonitoringFaqSection } from "@/components/monitoring/monitoring-faq-section"
import { MonitoringFinalCTASection } from "@/components/monitoring/monitoring-final-cta-section"
import { Footer } from "@/components/footer"
import { StickyMobileCTA } from "@/components/sticky-mobile-cta"
import { MonitoringWhyMattersSection } from "@/components/monitoring/monitoring-why-matters-section"
import { MonitoringComparisonSection } from "@/components/monitoring/monitoring-comparison-section"
import { MonitoringTrustStatsSection } from "@/components/monitoring/monitoring-trust-stats-section"
import { MonitoringTrustStatsAnimated } from "@/components/monitoring/monitoring-trust-stats-animated"
import { MonitoringSampleReport } from "@/components/monitoring/monitoring-sample-report"
import { MonitoringDashboardPreview } from "@/components/monitoring/monitoring-dashboard-preview"
import { MonitoringCaseStudySection } from "@/components/monitoring/monitoring-case-study-section"
import { MonitoringRiskCalculator } from "@/components/monitoring/monitoring-risk-calculator"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "24/7 Care Home Monitoring | Family Care by RightCareHome",
  description:
    "Gain peace of mind with AI-powered monitoring from RightCareHome. We track financial risks, care quality, and staff reviews 24/7. Try 30 days free!",
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "RightCareHome",
    title: "24/7 Care Home Monitoring | Family Care by RightCareHome",
    description: "AI-powered monitoring for your loved ones in care. 30 days free trial.",
  },
}

export default function MonitoringPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <MonitoringHeroSection />
      <MonitoringDashboardPreview />
      <MonitoringWhyMattersSection />
      <MonitoringProblemSection />
      <MonitoringComparisonSection />
      <MonitoringTrustStatsAnimated />
      <MonitoringHowItWorksSection />
      <MonitoringCaseStudySection />
      <MonitoringRiskCalculator />
      <MonitoringSampleReport />
      <MonitoringPricingSection />
      <MonitoringTestimonialsSection />
      <MonitoringFaqSection />
      <MonitoringFinalCTASection />
      <Footer />
      <StickyMobileCTA />
    </main>
  )
}
