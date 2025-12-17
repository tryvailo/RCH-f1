import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProblemSolutionSection } from "@/components/problem-solution-section"
import { InteractivePreviewSection } from "@/components/interactive-preview-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { WhyStartSection } from "@/components/why-start-section"
import { FairCostGapSection } from "@/components/fair-cost-gap-section"
import { NHSFundingSection } from "@/components/nhs-funding-section"
import { FamilyVisitPatternsSection } from "@/components/family-visit-patterns-section"
import { IntelligentMatchingSection } from "@/components/intelligent-matching-section"
import { PricingComparisonSection } from "@/components/pricing-comparison-section"
import { AreasSection } from "@/components/areas-section"
import { WhyChooseSection } from "@/components/why-choose-section"
import { SocialProofSection } from "@/components/social-proof-section"
import { FaqSection } from "@/components/faq-section"
import { FinalCTASection } from "@/components/final-cta-section"
import { Footer } from "@/components/footer"
import { StickyMobileCTA } from "@/components/sticky-mobile-cta"
import { IndependenceComparisonSection } from "@/components/independence-comparison-section"
import { HiddenCommissionModelSection } from "@/components/hidden-commission-model-section"
import { QuestionsFamiliesAsk } from "@/components/questions-families-ask"
import { HiddenRisksSection } from "@/components/hidden-risks-section"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#FDFBF7]">
      <Header />
      {/* PHASE 1: Hook & Free Value */}
      <HeroSection />
      <WhyStartSection />
      <HowItWorksSection />

      {/* PHASE 2: Problem Agitation */}
      <ProblemSolutionSection />
      <QuestionsFamiliesAsk />
      <FairCostGapSection />
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

      {/* PHASE 7: Local Relevance */}
      <AreasSection />

      {/* PHASE 8: Final Objection Handling */}
      <WhyChooseSection />
      <FaqSection />

      {/* PHASE 9: Final Conversion */}
      <FinalCTASection />
      <Footer />
      <StickyMobileCTA />
    </main>
  )
}
