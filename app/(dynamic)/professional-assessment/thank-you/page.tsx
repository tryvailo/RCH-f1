import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Phone, Mail, Clock, FileText, Shield, Database, TrendingUp } from "lucide-react"
import Link from "next/link"
import { Suspense } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Thank You | Professional Assessment",
  description: "Your professional assessment has been submitted",
}

function ThankYouContent({ searchParams }: { searchParams: { ref?: string; name?: string; location?: string } }) {
  const reference = searchParams.ref
  const name = searchParams.name
  const location = searchParams.location

  if (!reference || !name || !location) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-gradient-to-br from-[#FDFBF7] via-white to-[#4F6F52]/5 py-16 px-4">
          <div className="max-w-2xl mx-auto text-centre">
            <h1 className="text-3xl font-serif font-bold text-[#1A231E] mb-4">Invalid Access</h1>
            <p className="text-lg text-[#1A231E]/70 mb-8">
              This page can only be accessed after completing a professional assessment.
            </p>
            <Button asChild size="lg" className="bg-[#4F6F52] hover:bg-[#3A5140]">
              <Link href="/professional-assessment">Start Professional Assessment</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-[#FDFBF7] via-white to-[#4F6F52]/5 py-8 sm:py-12 lg:py-16 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Success Icon */}
          <div className="text-centre mb-6 sm:mb-8">
            <div className="inline-flex items-center justify-centre w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#7FAD7E]/20 mb-4 sm:mb-6">
              <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 text-[#7FAD7E]" />
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#1A231E] mb-3 sm:mb-4 leading-tight px-4">
              Thank You, {name}!
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-[#1A231E]/70 max-w-xl mx-auto leading-relaxed px-4">
              Your Professional Assessment for {location} has been submitted successfully.
            </p>
          </div>

          {/* Reference Number */}
          <div className="bg-[#4F6F52]/10 rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 text-centre border border-[#4F6F52]/20">
            <p className="text-sm sm:text-base text-[#1A231E]/60 mb-1 sm:mb-2">Your Reference Number</p>
            <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#4F6F52] font-mono">{reference}</p>
            <p className="text-sm text-[#1A231E]/50 mt-2">Please save this for your records</p>
          </div>

          {/* What We're Analysing */}
          <div className="bg-gradient-to-br from-[#7FAD7E]/10 to-[#4F6F52]/10 rounded-2xl p-5 sm:p-6 mb-6 sm:mb-8 border border-[#4F6F52]/20">
            <div className="flex items-center gap-2 mb-4">
              <Database className="w-5 h-5 sm:w-6 sm:h-6 text-[#4F6F52]" />
              <h3 className="text-lg sm:text-xl font-bold text-[#1A231E]">What We're Analysing for You</h3>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-lg mx-auto">
              <div className="bg-white/60 backdrop-blur rounded-xl p-4 sm:p-5 border border-[#4F6F52]/10">
                <div className="text-3xl sm:text-4xl font-bold text-[#4F6F52] mb-1">800+</div>
                <div className="text-sm sm:text-base text-[#1A231E]/70">Total Data Points</div>
              </div>
              <div className="bg-white/60 backdrop-blur rounded-xl p-4 sm:p-5 border border-[#4F6F52]/10">
                <div className="text-3xl sm:text-4xl font-bold text-[#4F6F52] mb-1">15+</div>
                <div className="text-sm sm:text-base text-[#1A231E]/70">Independent Sources</div>
              </div>
            </div>
            <div className="mt-4 flex items-start gap-2 bg-white/40 rounded-lg p-3 border border-[#7FAD7E]/20">
              <TrendingUp className="w-5 h-5 text-[#7FAD7E] flex-shrink-0 mt-0.5" />
              <p className="text-sm text-[#1A231E]/80 leading-relaxed">
                Our team will cross-reference regulatory compliance, financial stability, staff quality, food safety
                standards, and family engagement patterns across all suitable homes in {location}.
              </p>
            </div>
          </div>

          {/* What Happens Next */}
          <div className="bg-white rounded-2xl sm:rounded-3xl border border-[#E8E5DF] shadow-soft-lg p-5 sm:p-6 lg:p-8 mb-6 sm:mb-8">
            <h3 className="text-lg sm:text-xl font-bold text-[#1A231E] mb-4 sm:mb-6 flex items-center gap-2">
              <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-[#4F6F52]" />
              Your Report Timeline
            </h3>
            <div className="space-y-4 sm:space-y-5">
              {[
                {
                  icon: FileText,
                  title: "Within 24 hours",
                  desc: "Your comprehensive 20+ page Professional Report will be delivered to your email with analysis of 800+ data points across 15+ independent sources",
                },
                {
                  icon: Mail,
                  title: "Email confirmation",
                  desc: "You'll receive a detailed report with regulatory compliance, financial stability, staff quality, and personalised recommendations",
                },
                {
                  icon: Phone,
                  title: "Follow-up support",
                  desc: "Within 48 hours of delivery, we'll reach out to discuss findings, answer questions, and help you plan your next steps",
                },
              ].map((step, idx) => (
                <div key={idx} className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#4F6F52]/10 flex items-center justify-centre">
                    <step.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#4F6F52]" />
                  </div>
                  <div className="flex-1 min-w-0 pt-1">
                    <div className="font-semibold text-base sm:text-lg text-[#1A231E] mb-1">{step.title}</div>
                    <p className="text-sm sm:text-base text-[#1A231E]/70 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 sm:mb-8">
            <div className="bg-white rounded-xl p-4 sm:p-5 border border-[#E8E5DF]">
              <Phone className="w-6 h-6 text-[#4F6F52] mb-3" />
              <h4 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">Need to speak with us?</h4>
              <p className="text-sm sm:text-base text-[#1A231E]/70">Call us at 0800 123 4567</p>
            </div>
            <div className="bg-white rounded-xl p-4 sm:p-5 border border-[#E8E5DF]">
              <Mail className="w-6 h-6 text-[#4F6F52] mb-3" />
              <h4 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">Questions about your report?</h4>
              <p className="text-sm sm:text-base text-[#1A231E]/70">Email support@rightcarehome.co.uk</p>
            </div>
          </div>

          {/* Trust Signal */}
          <div className="bg-[#7FAD7E]/10 rounded-xl p-4 sm:p-5 border border-[#7FAD7E]/20 mb-6 sm:mb-8">
            <div className="flex items-center gap-3">
              <Shield className="w-6 h-6 text-[#7FAD7E] flex-shrink-0" />
              <p className="text-sm sm:text-base text-[#1A231E]/80">
                Your data is protected and will only be used to prepare your personalised report.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-centre">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto h-12 sm:h-14 text-base sm:text-lg px-6 sm:px-8 bg-[#4F6F52] hover:bg-[#3A5140]"
            >
              <Link href="/">Return to Homepage</Link>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default function ProfessionalAssessmentThankYouPage({
  searchParams,
}: {
  searchParams: { ref?: string; name?: string; location?: string }
}) {
  return (
    <Suspense>
      <ThankYouContent searchParams={searchParams} />
    </Suspense>
  )
}
