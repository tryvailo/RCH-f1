"use client"

import { useState } from "react"
import { Award, Heart, Shield, Clock, ChevronDown, ChevronUp, CheckCircle2, Sparkles } from "lucide-react"

export function ProEmpathySection() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <section className="py-8 md:py-12 px-4 sm:px-6 bg-gradient-to-br from-[#FDFBF7] via-[#FDFBF7]/50 to-[#4F6F52]/5 print:py-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-centre mb-8 md:mb-10">
          <div className="inline-flex items-center justify-centre w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#4F6F52]/10 mb-6">
            <Sparkles className="w-8 h-8 md:w-10 md:h-10 text-[#4F6F52]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1A231E] mb-5 leading-tight">
            Peace of Mind for the Journey Ahead
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-[#1A231E]/70 max-w-2xl mx-auto leading-relaxed">
            Finding the right care home is one of life's most important decisions. By taking the time to research
            properly, you're showing extraordinary care for your loved one's wellbeing and comfort.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 md:p-8 border border-[#E8E5DF] shadow-soft-lg mb-8">
          <h3 className="text-xl md:text-2xl font-bold text-[#1A231E] mb-6 text-centre">What This Report Gives You</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                icon: Shield,
                title: "Confidence in Your Choice",
                description: "Every option thoroughly researched so you can feel certain about your decision",
              },
              {
                icon: Heart,
                title: "Understanding of Care Quality",
                description: "Real insights into how residents are looked after, beyond the brochure",
              },
              {
                icon: Clock,
                title: "Time to Focus on What Matters",
                description: "Less time researching means more time with your loved one during this transition",
              },
              {
                icon: Award,
                title: "Fair Pricing Knowledge",
                description: "The information you need to ensure you're not paying more than necessary",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-[#FDFBF7] rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-[#4F6F52]/10 flex items-center justify-centre flex-shrink-0">
                  <item.icon className="w-5 h-5 text-[#4F6F52]" />
                </div>
                <div>
                  <h4 className="font-bold text-base text-[#1A231E] mb-1">{item.title}</h4>
                  <p className="text-base text-[#1A231E]/60">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Expandable Section */}
        <div className="mb-8">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full flex items-center justify-between bg-white rounded-xl p-5 md:p-6 border border-[#E8E5DF] hover:bg-[#FDFBF7] transition-colours min-h-[56px]"
            aria-expanded={isExpanded}
          >
            <span className="text-lg md:text-xl font-semibold text-[#1A231E]">The Difference This Makes</span>
            {isExpanded ? (
              <ChevronUp className="w-6 h-6 text-[#4F6F52]" />
            ) : (
              <ChevronDown className="w-6 h-6 text-[#4F6F52]" />
            )}
          </button>

          {isExpanded && (
            <div className="mt-3 bg-white rounded-xl p-6 md:p-8 border border-[#E8E5DF] space-y-4">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-[#4F6F52] flex-shrink-0 mt-0.5" />
                <p className="text-base md:text-lg text-[#1A231E]/80 leading-relaxed">
                  <strong>Time for what matters:</strong> Families typically spend 6+ weeks researching care homes. This
                  report gives you that clarity in a single document, freeing you to focus on supporting your loved one.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-[#4F6F52] flex-shrink-0 mt-0.5" />
                <p className="text-base md:text-lg text-[#1A231E]/80 leading-relaxed">
                  <strong>Financial peace of mind:</strong> Our Fair Cost analysis helps families ensure they're paying
                  a fair rate, with average negotiated savings of £2,400 per year.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-[#4F6F52] flex-shrink-0 mt-0.5" />
                <p className="text-base md:text-lg text-[#1A231E]/80 leading-relaxed">
                  <strong>Reduced anxiety:</strong> No more second-guessing or wondering "what if". You have the
                  information to make a confident, well-informed choice.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-[#4F6F52] flex-shrink-0 mt-0.5" />
                <p className="text-base md:text-lg text-[#1A231E]/80 leading-relaxed">
                  <strong>Getting it right first time:</strong> 23% of families move their loved one within the first
                  year. Thorough research now helps avoid that disruption later.
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="bg-gradient-to-br from-[#4F6F52]/10 to-[#4F6F52]/5 rounded-2xl p-6 md:p-8 border border-[#4F6F52]/20 text-centre">
          <p className="text-xl sm:text-2xl md:text-[1.5rem] text-[#1A231E]/80 leading-relaxed mb-4">
            <span className="font-semibold text-[#4F6F52]">Take your time with this report.</span>
          </p>
          <p className="text-lg text-[#1A231E]/70 leading-relaxed">
            There's no rush. Read through each section at your own pace, use the checklists during your visits, and know
            that whatever you decide, you've done your very best for your loved one. That care and dedication is what
            truly matters.
          </p>
        </div>
      </div>
    </section>
  )
}
