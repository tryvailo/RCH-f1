"use client"

import { useState } from "react"
import { Heart, Users, AlertTriangle, TrendingUp, ChevronDown, ChevronUp, Sparkles, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ReportEmpathySection() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <section className="py-14 md:py-20 px-4 sm:px-6 bg-gradient-to-br from-[#FDFBF7] via-[#FDFBF7]/30 to-[#4F6F52]/5">
      <div className="max-w-4xl mx-auto">
        {/* Main empathy message */}
        <div className="text-center mb-14 md:mb-16">
          <div className="inline-flex items-center justify-center w-18 h-18 md:w-20 md:h-20 rounded-full bg-[#4F6F52]/10 mb-6 md:mb-8">
            <Heart className="w-9 h-9 md:w-10 md:h-10 text-[#4F6F52]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] text-[#1A231E] mb-5 md:mb-6 leading-tight">
            You're Not Alone in This
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-[#1A231E]/70 max-w-2xl mx-auto leading-relaxed">
            Right now, over 354,000 people in the UK live in care homes, with 150,000–200,000 families making this
            decision each year. Research shows 84% of family carers feel more stressed after placement, and 78%
            experience significant anxiety during the selection process.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-8 mb-10 md:mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-9 border border-[#E8E5DF] shadow-soft-md">
            <div className="flex flex-col items-start gap-3 md:gap-4 mb-4">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#4F6F52]/10 flex items-center justify-center">
                <Users className="w-6 h-6 md:w-8 md:h-8 text-[#4F6F52]" />
              </div>
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#4F6F52]">354,000</div>
            </div>
            <p className="text-base md:text-lg lg:text-xl text-[#1A231E]/70 leading-relaxed">
              People currently in UK care homes
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-9 border border-[#E8E5DF] shadow-soft-md">
            <div className="flex flex-col items-start gap-3 md:gap-4 mb-4">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#C88D79]/10 flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 md:w-8 md:h-8 text-[#C88D79]" />
              </div>
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#C88D79]">2 Million</div>
            </div>
            <p className="text-base md:text-lg lg:text-xl text-[#1A231E]/70 leading-relaxed">
              People with unmet care needs in England
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-9 border border-[#E8E5DF] shadow-soft-md">
            <div className="flex flex-col items-start gap-3 md:gap-4 mb-4">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#4F6F52]/10 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 md:w-8 md:h-8 text-[#4F6F52]" />
              </div>
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#4F6F52]">84%</div>
            </div>
            <p className="text-base md:text-lg lg:text-xl text-[#1A231E]/70 leading-relaxed">
              Of family carers feel more stressed after placement
            </p>
          </div>
        </div>

        <div className="mb-10 md:mb-12">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full flex items-center justify-between bg-white/60 backdrop-blur-sm rounded-xl p-6 md:p-7 border border-[#E8E5DF] hover:bg-white/80 transition-colors min-h-[64px]"
            aria-expanded={isExpanded}
          >
            <span className="text-lg md:text-xl font-semibold text-[#1A231E]">What Makes This Decision So Hard?</span>
            {isExpanded ? (
              <ChevronUp className="w-6 h-6 md:w-7 md:h-7 text-[#4F6F52]" />
            ) : (
              <ChevronDown className="w-6 h-6 md:w-7 md:h-7 text-[#4F6F52]" />
            )}
          </button>

          {isExpanded && (
            <div className="mt-3 bg-white/60 backdrop-blur-sm rounded-xl p-7 md:p-8 border border-[#E8E5DF] space-y-5 md:space-y-6">
              <div className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 md:w-9 md:h-9 rounded-full bg-[#4F6F52]/10 flex items-center justify-center text-base md:text-lg font-medium text-[#4F6F52]">
                  1
                </span>
                <p className="text-lg md:text-xl text-[#1A231E]/80 leading-relaxed">
                  <strong>Emotional weight:</strong> You're making decisions for someone you love during an already
                  stressful time.
                </p>
              </div>
              <div className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 md:w-9 md:h-9 rounded-full bg-[#4F6F52]/10 flex items-center justify-center text-base md:text-lg font-medium text-[#4F6F52]">
                  2
                </span>
                <p className="text-lg md:text-xl text-[#1A231E]/80 leading-relaxed">
                  <strong>Information overload:</strong> CQC ratings, fees, contracts, funding options—it's
                  overwhelming.
                </p>
              </div>
              <div className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 md:w-9 md:h-9 rounded-full bg-[#4F6F52]/10 flex items-center justify-center text-base md:text-lg font-medium text-[#4F6F52]">
                  3
                </span>
                <p className="text-lg md:text-xl text-[#1A231E]/80 leading-relaxed">
                  <strong>Time pressure:</strong> Hospital discharge deadlines or deteriorating health create urgency.
                </p>
              </div>
              <div className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 md:w-9 md:h-9 rounded-full bg-[#4F6F52]/10 flex items-center justify-center text-base md:text-lg font-medium text-[#4F6F52]">
                  4
                </span>
                <p className="text-lg md:text-xl text-[#1A231E]/80 leading-relaxed">
                  <strong>Financial complexity:</strong> Understanding what's included, what's extra, and who pays for
                  what.
                </p>
              </div>
              <div className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 md:w-9 md:h-9 rounded-full bg-[#4F6F52]/10 flex items-center justify-center text-base md:text-lg font-medium text-[#4F6F52]">
                  5
                </span>
                <p className="text-lg md:text-xl text-[#1A231E]/80 leading-relaxed">
                  <strong>Fear of getting it wrong:</strong> This choice affects someone's daily life and wellbeing.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Key message */}
        <div className="bg-gradient-to-br from-[#4F6F52]/5 to-[#C88D79]/5 rounded-2xl p-9 md:p-12 border border-[#4F6F52]/20 mb-10 md:mb-12">
          <p className="text-xl sm:text-2xl md:text-[1.65rem] text-[#1A231E]/80 leading-relaxed text-center">
            <span className="font-semibold text-[#4F6F52]">You've already taken the hardest step</span> by starting your
            search. This report cuts through the confusion and gives you three strategic options chosen specifically for
            your situation.
          </p>
        </div>

        <p className="text-center text-lg md:text-xl text-[#1A231E]/70 leading-relaxed max-w-2xl mx-auto">
          This is one of the most important decisions you'll make for your family. We're here to help you make it with
          confidence, not confusion.
        </p>

        <div className="mt-10 md:mt-12 bg-gradient-to-br from-[#4F6F52]/10 via-[#4F6F52]/5 to-transparent rounded-2xl p-6 md:p-8 border border-[#4F6F52]/30">
          <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <div className="flex-shrink-0">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-[#4F6F52]/20 flex items-center justify-center">
                <Sparkles className="w-7 h-7 md:w-8 md:h-8 text-[#4F6F52]" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg md:text-xl font-semibold text-[#1A231E] mb-2">
                Want Expert Guidance Every Step of the Way?
              </h3>
              <p className="text-base md:text-lg text-[#1A231E]/70 leading-relaxed">
                Our <span className="font-semibold">Professional Report</span> includes personalised negotiation
                scripts, funding application support, and a dedicated care advisor to answer your questions.
              </p>
            </div>
            <Button
              asChild
              size="lg"
              className="bg-[#4F6F52] hover:bg-[#3D5A40] text-white h-14 px-6 text-lg whitespace-nowrap"
            >
              <a href="/premium-assessment">
                Learn More
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
