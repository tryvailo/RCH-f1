import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProblemSolutionSection } from "@/components/problem-solution-section"
import { InteractivePreviewSection } from "@/components/interactive-preview-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { WhyStartSection } from "@/components/why-start-section"
import { FairCostGapSection } from "@/components/fair-cost-gap-section"
import { NHSFundingSection } from "@/components/nhs-funding-section"
import { PricingComparisonSection } from "@/components/pricing-comparison-section"
import { WhyChooseSection } from "@/components/why-choose-section"
import { SocialProofSection } from "@/components/social-proof-section"
import { FAQSection } from "@/components/faq-section"
import { FinalCTASection } from "@/components/final-cta-section"
import { Footer } from "@/components/footer"
import { StickyMobileCTA } from "@/components/sticky-mobile-cta"
import { QuestionsFamiliesAsk } from "@/components/questions-families-ask"
import { HiddenRisksSection } from "@/components/hidden-risks-section"
import { IntelligentMatchingSection } from "@/components/intelligent-matching-section"
import { FamilyVisitPatternsSection } from "@/components/family-visit-patterns-section"
import { IndependenceComparisonSection } from "@/components/independence-comparison-section"
import { HiddenCommissionModelSection } from "@/components/hidden-commission-model-section"
import { RegionalStatsSection } from "@/components/regional-stats-section"
import { RegionalNeighbourhoodsSection } from "@/components/regional-neighbourhoods-section"
import { RegionalTestimonialsSection } from "@/components/regional-testimonials-section"
import { RegionalInsightsSection } from "@/components/regional-insights-section"
import type { CityConfig } from "./data/city-config"

interface RegionalPageProps {
  config: CityConfig
}

export function RegionalPageBuilder({ config }: RegionalPageProps) {
  const { name, stats, neighbourhoods, testimonials, regionalInsights } = config

  return (
    <main className="min-h-screen bg-[#FDFBF7]">
      <Header />
      {/* PHASE 1: Hook & Free Value */}
      <HeroSection region={name} />
      <WhyStartSection />
      <HowItWorksSection />

      {/* PHASE 2: Problem Agitation */}
      <ProblemSolutionSection />
      <QuestionsFamiliesAsk />
      <FairCostGapSection region={name} />
      <HiddenRisksSection />

      {/* PHASE 3: Product Demonstration */}
      <InteractivePreviewSection />
      <IntelligentMatchingSection />
      <FamilyVisitPatternsSection />

      {/* PHASE 4: Trust & Social Proof */}
      <SocialProofSection />

      {/* PHASE 5: Positioning & Differentiation */}
      <IndependenceComparisonSection />
      <HiddenCommissionModelSection />

      {/* PHASE 6: Pricing & Conversion */}
      <PricingComparisonSection />
      <NHSFundingSection />

      {/* PHASE 7: Local Relevance - {region} Specific */}
      <RegionalStatsSection region={name} stats={stats} />

      {regionalInsights && <RegionalInsightsSection title={regionalInsights.title} items={regionalInsights.items} />}

      <RegionalNeighbourhoodsSection region={name} neighbourhoods={neighbourhoods} totalHomes={stats.totalHomes} />

      {/* PHASE 8: Final Objection Handling */}
      <RegionalTestimonialsSection region={name} testimonials={testimonials} />
      <WhyChooseSection />
      <FAQSection />

      {/* PHASE 9: Final Conversion */}
      <FinalCTASection />
      <Footer />
      <StickyMobileCTA />
    </main>
  )
}
