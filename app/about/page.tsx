import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ShieldCheck, Heart, Users, TrendingUp, Ban, Award } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "About Us | RightCareHome",
  description:
    "Learn why RightCareHome is different: independent, data-driven, and committed to helping British families find the best care for their loved ones.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FDFBF7]">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-[#1A231E] mb-6 text-balance">
            We Built This Because
            <br />
            Families Deserve Better
          </h1>
          <p className="text-xl text-[#5C6B5E] leading-relaxed max-w-3xl mx-auto">
            RightCareHome was founded to solve a problem every British family faces: finding quality care without being
            misled by biased directories or paying hidden commissions.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold text-[#1A231E] mb-6">Our Mission</h2>
              <p className="text-lg text-[#5C6B5E] leading-relaxed mb-4">
                Every year, tens of thousands of British families spend weeks researching care homes, only to discover
                hidden risks months later: financial instability, poor food safety, or care homes that can't afford to
                retain quality staff.
              </p>
              <p className="text-lg text-[#5C6B5E] leading-relaxed mb-4">
                Traditional care home directories earn commissions (up to £3,000 per placement) from the homes they
                recommend. We don't. We analyse over 200 data points from official sources to give you the truth, not a
                sales pitch.
              </p>
              <p className="text-lg font-semibold text-[#4F6F52]">Your family's wellbeing comes first. Always.</p>
            </div>
            <div className="bg-[#F5F1EB] p-8 rounded-2xl">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#4F6F52] flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[#1A231E] mb-2">Independent</h3>
                    <p className="text-[#5C6B5E]">No commissions from care homes. Ever.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#4F6F52] flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[#1A231E] mb-2">Data-Driven</h3>
                    <p className="text-[#5C6B5E]">206 data points from official UK sources</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#4F6F52] flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[#1A231E] mb-2">Family-First</h3>
                    <p className="text-[#5C6B5E]">Built by people who've been through this</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why We're Different Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-serif font-bold text-[#1A231E] mb-12 text-center">Why We're Different</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border-2 border-[#E8E3DB]">
              <div className="w-14 h-14 rounded-xl bg-[#C88D79] flex items-center justify-center mb-6">
                <Ban className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1A231E] mb-4">No Hidden Commissions</h3>
              <p className="text-[#5C6B5E] leading-relaxed">
                Unlike traditional directories (Care Home Selector, carehome.co.uk), we don't earn £3,000+ per
                placement. Our only revenue is from families who choose our Professional Report.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border-2 border-[#E8E3DB]">
              <div className="w-14 h-14 rounded-xl bg-[#7FAD7E] flex items-center justify-center mb-6">
                <Award className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1A231E] mb-4">Real Data, Not Marketing</h3>
              <p className="text-[#5C6B5E] leading-relaxed">
                We analyse food safety records, financial stability, staff retention risk, and family engagement
                patterns — data care homes don't publish on their websites.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border-2 border-[#E8E3DB]">
              <div className="w-14 h-14 rounded-xl bg-[#4F6F52] flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1A231E] mb-4">Built for Families</h3>
              <p className="text-[#5C6B5E] leading-relaxed">
                Share reports with up to 5 family members. Get negotiation scripts. Access Local Authority funding
                guides for all 152 councils. We solve real family problems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-[#F5F1EB]">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-serif font-bold text-[#1A231E] mb-6">Our Values</h2>
          <div className="space-y-6 text-left">
            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-xl font-bold text-[#1A231E] mb-3">Transparency Above All</h3>
              <p className="text-[#5C6B5E] leading-relaxed">
                We show you exactly where our data comes from and how to verify it yourself. No black boxes, no "trust
                us" — just facts.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-xl font-bold text-[#1A231E] mb-3">Independence Matters</h3>
              <p className="text-[#5C6B5E] leading-relaxed">
                We will never accept commissions from care homes, care home operators, or placement agencies. Our
                loyalty is to families, not providers.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-xl font-bold text-[#1A231E] mb-3">Data-Driven Decisions</h3>
              <p className="text-[#5C6B5E] leading-relaxed">
                We believe families deserve the same analytical tools that investment analysts use to assess companies —
                applied to care home selection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-serif font-bold text-[#1A231E] mb-6">Ready to Find the Right Care Home?</h2>
          <p className="text-xl text-[#5C6B5E] mb-8 max-w-2xl mx-auto">
            Start with our free assessment and get 3 personalised care home matches in 10 minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#4F6F52] hover:bg-[#3F5A42] text-white text-lg px-8 py-6">
              <Link href="/free-assessment">Start Free Assessment</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-[#4F6F52] text-[#4F6F52] hover:bg-[#4F6F52] hover:text-white text-lg px-8 py-6 bg-transparent"
            >
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
