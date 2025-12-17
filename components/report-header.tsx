"use client"

import { Badge } from "@/components/ui/badge"
import { Check, MapPin, Calendar, Heart } from "lucide-react"

interface ReportHeaderProps {
  recipientName?: string
  location?: string
  timeline?: string
  careType?: string[]
  budget?: string
  totalAnalysed?: number
  matchesFound?: number
  reportId?: string
  generatedAt?: string
}

export function ReportHeader({
  recipientName = "Your loved one",
  location = "Birmingham",
  timeline = "Within 3 months",
  careType = ["Nursing", "Dementia Care"],
  budget = "£5,000-7,000/month",
  totalAnalysed = 200,
  matchesFound = 3,
  reportId = "FREE-2025-01-27-ABC123",
  generatedAt = "27 January 2025 at 14:30 GMT",
}: ReportHeaderProps) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-[#FDFBF7] via-[#FDFBF7] to-[#4F6F52]/5">
      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Report metadata - top right */}
        <div className="absolute top-4 right-4 sm:top-8 sm:right-8 text-right hidden sm:block">
          <div className="text-sm text-[#1A231E]/60 space-y-1">
            <div className="font-mono">{reportId}</div>
            <div>Generated {generatedAt}</div>
          </div>
        </div>

        {/* Main title section */}
        <div className="max-w-4xl">
          <Badge className="mb-3 sm:mb-4 text-sm sm:text-base px-4 py-2 bg-[#4F6F52]/10 text-[#4F6F52] border-[#4F6F52]/20">
            YOUR FREE SHORTLIST
          </Badge>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1A231E] mb-3 sm:mb-4 leading-tight text-balance">
            Your Personalised Free Shortlist
          </h1>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-lg sm:text-xl text-[#1A231E]/70 mb-6 sm:mb-8">
            <div className="flex items-center gap-2 min-h-[48px]">
              <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-[#4F6F52] flex-shrink-0" />
              <span className="font-medium">For {recipientName}</span>
            </div>
            <span className="hidden sm:inline text-[#1A231E]/40">•</span>
            <div className="flex items-center gap-2 min-h-[48px]">
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-[#4F6F52] flex-shrink-0" />
              <span>{location}</span>
            </div>
            <span className="hidden sm:inline text-[#1A231E]/40">•</span>
            <div className="flex items-center gap-2 min-h-[48px]">
              <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-[#4F6F52] flex-shrink-0" />
              <span>{timeline}</span>
            </div>
          </div>

          {/* Report metadata - mobile */}
          <div className="sm:hidden text-base text-[#1A231E]/60 space-y-1 mb-6 p-4 bg-[#4F6F52]/5 rounded-lg">
            <div className="font-mono text-sm">{reportId}</div>
            <div className="text-sm">Generated {generatedAt}</div>
          </div>

          {/* Analysis summary box */}
          <div className="glass rounded-2xl sm:rounded-3xl border border-[#E8E5DF] p-6 sm:p-8 lg:p-10 shadow-soft-lg">
            <div className="space-y-5 sm:space-y-6">
              {/* Header stats */}
              <div className="pb-5 sm:pb-6 border-b border-[#E8E5DF]">
                <p className="text-lg sm:text-xl text-[#1A231E] font-medium mb-3 leading-relaxed">
                  We've done the forensics. Here's what we found.
                </p>
                <p className="text-base sm:text-lg text-[#1A231E]/70 leading-relaxed">
                  We analysed <span className="font-bold text-[#1A231E]">{totalAnalysed} care homes</span> in your
                  region. These <span className="font-bold text-[#1A231E]">{matchesFound} matched</span> your exact
                  criteria on:
                </p>
              </div>

              {/* Criteria grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div className="flex items-start gap-3 p-4 sm:p-5 rounded-xl bg-white/80 border border-[#E8E5DF] min-h-[70px]">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#4F6F52]/15 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-[#4F6F52]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-base font-medium text-[#1A231E]/60 mb-1">Care type</div>
                    <div className="text-lg font-semibold text-[#1A231E]">{careType.join(" + ")}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 sm:p-5 rounded-xl bg-white/80 border border-[#E8E5DF] min-h-[70px]">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#4F6F52]/15 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-[#4F6F52]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-base font-medium text-[#1A231E]/60 mb-1">Location</div>
                    <div className="text-lg font-semibold text-[#1A231E]">Within 30km</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 sm:p-5 rounded-xl bg-white/80 border border-[#E8E5DF] min-h-[70px]">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#4F6F52]/15 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-[#4F6F52]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-base font-medium text-[#1A231E]/60 mb-1">CQC rating</div>
                    <div className="text-lg font-semibold text-[#1A231E]">Good or Outstanding</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 sm:p-5 rounded-xl bg-white/80 border border-[#E8E5DF] min-h-[70px]">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#4F6F52]/15 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-[#4F6F52]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-base font-medium text-[#1A231E]/60 mb-1">Budget</div>
                    <div className="text-lg font-semibold text-[#1A231E]">{budget}</div>
                  </div>
                </div>
              </div>

              {/* Closing statement */}
              <div className="pt-5 sm:pt-6 border-t border-[#E8E5DF]">
                <div className="flex items-start gap-3 p-4 sm:p-5 rounded-xl bg-[#7FAD7E]/10 border border-[#7FAD7E]/20 min-h-[70px]">
                  <Check className="w-6 h-6 text-[#7FAD7E] flex-shrink-0 mt-0.5" />
                  <p className="text-lg font-medium text-[#1A231E] leading-relaxed">
                    All recommendations rated <span className="font-bold">GOOD</span> or{" "}
                    <span className="font-bold">OUTSTANDING</span> by CQC
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Trust signals */}
          <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-4 sm:gap-6 text-base text-[#1A231E]/60">
            <div className="flex items-center gap-2 min-h-[36px]">
              <Check className="w-5 h-5 text-[#4F6F52] flex-shrink-0" />
              <span>100% independent analysis</span>
            </div>
            <div className="flex items-center gap-2 min-h-[36px]">
              <Check className="w-5 h-5 text-[#4F6F52] flex-shrink-0" />
              <span>No commissions, no bias</span>
            </div>
            <div className="flex items-center gap-2 min-h-[36px]">
              <Check className="w-5 h-5 text-[#4F6F52] flex-shrink-0" />
              <span>Money-back guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
