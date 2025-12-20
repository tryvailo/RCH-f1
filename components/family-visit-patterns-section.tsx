import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Users, TrendingUp, TrendingDown, AlertTriangle, CheckCircle2, Eye } from "lucide-react"

export function FamilyVisitPatternsSection() {
  return (
    <section className="py-16 lg:py-32 bg-[#FDFBF7]">
      <div className="container mx-auto px-3 sm:px-4 overflow-x-hidden">
        <div className="text-centre max-w-4xl mx-auto mb-12 lg:mb-16 space-y-4 sm:space-y-6">
          <Badge className="px-3 sm:px-6 py-2 sm:py-3 text-xs sm:text-base bg-[#C88D79] text-white border-0 shadow-soft-md whitespace-normal max-w-[90%] mx-auto">
            UNIQUE INSIGHT YOU WON'T FIND ELSEWHERE
          </Badge>
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#1A231E] px-2">
            The Data Point No One Else Tracks: Family Visit Patterns
          </h2>
          <p className="text-base sm:text-xl md:text-2xl text-[#1A231E]/70 leading-relaxed">
            Here's what directories won't tell you: If families visit often, residents are happy. If they don't… there's
            usually a reason.
          </p>
        </div>

        {/* Two Column Comparison */}
        <div className="grid lg:grid-cols-2 gap-4 sm:gap-8 max-w-6xl mx-auto mb-12 lg:mb-16">
          {/* Home A - Good */}
          <Card className="p-4 sm:p-8 bg-white border-2 border-[#4F6F52] rounded-2xl sm:rounded-3xl shadow-soft-lg">
            <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-[#4F6F52]/10 flex items-center justify-centre flex-shrink-0">
                <CheckCircle2 className="w-5 h-5 sm:w-8 sm:h-8 text-[#4F6F52]" strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#1A231E] mb-1 sm:mb-2">Home A</h3>
                <Badge className="bg-[#4F6F52]/10 text-[#4F6F52] border-[#4F6F52]/20 text-xs sm:text-sm">
                  High Engagement
                </Badge>
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 sm:p-4 bg-[#E5EBE6] rounded-lg sm:rounded-xl gap-1">
                <span className="font-semibold text-[#1A231E] text-sm sm:text-base">Family Visits</span>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-[#4F6F52]" />
                  <span className="text-xl sm:text-2xl font-bold text-[#4F6F52]">2.8×/week</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 sm:p-4 bg-[#E5EBE6] rounded-lg sm:rounded-xl gap-1">
                <span className="font-semibold text-[#1A231E] text-sm sm:text-base">Events Attendance</span>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[#4F6F52]" />
                  <span className="text-xl sm:text-2xl font-bold text-[#4F6F52]">78%</span>
                </div>
              </div>
            </div>

            <div className="p-3 sm:p-4 bg-[#4F6F52]/5 rounded-lg sm:rounded-xl border border-[#4F6F52]/20">
              <p className="text-xs sm:text-sm text-[#1A231E]/70">
                <strong className="text-[#4F6F52] font-semibold">What this tells us:</strong> Families feel welcome.
                Residents are engaged.
              </p>
            </div>
          </Card>

          {/* Home B - Poor */}
          <Card className="p-4 sm:p-8 bg-white border-2 border-[#D17A6F] rounded-2xl sm:rounded-3xl shadow-soft-lg">
            <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-[#D17A6F]/10 flex items-center justify-centre flex-shrink-0">
                <AlertTriangle className="w-5 h-5 sm:w-8 sm:h-8 text-[#D17A6F]" strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#1A231E] mb-1 sm:mb-2">Home B</h3>
                <Badge className="bg-[#D17A6F]/10 text-[#D17A6F] border-[#D17A6F]/20 text-xs sm:text-sm">
                  Low Engagement
                </Badge>
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 sm:p-4 bg-[#FFE5E5] rounded-lg sm:rounded-xl gap-1">
                <span className="font-semibold text-[#1A231E] text-sm sm:text-base">Family Visits</span>
                <div className="flex items-center gap-2">
                  <TrendingDown className="w-4 h-4 sm:w-5 sm:h-5 text-[#D17A6F]" />
                  <span className="text-xl sm:text-2xl font-bold text-[#D17A6F]">0.7×/week</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 sm:p-4 bg-[#FFE5E5] rounded-lg sm:rounded-xl gap-1">
                <span className="font-semibold text-[#1A231E] text-sm sm:text-base">Events Attendance</span>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[#D17A6F]" />
                  <span className="text-xl sm:text-2xl font-bold text-[#D17A6F]">23%</span>
                </div>
              </div>
            </div>

            <div className="p-3 sm:p-4 bg-[#D17A6F]/5 rounded-lg sm:rounded-xl border border-[#D17A6F]/20">
              <p className="text-xs sm:text-sm text-[#1A231E]/70">
                <strong className="text-[#D17A6F] font-semibold">Red flag:</strong> Families avoid visiting. We
                investigate before recommending.
              </p>
            </div>
          </Card>
        </div>

        {/* Why This Matters */}
        <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
          <div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1A231E] mb-4 sm:mb-6 text-centre">
              Why This Matters
            </h3>
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
              <Card className="p-4 sm:p-6 bg-white border border-[#E8E5DF] rounded-xl sm:rounded-2xl shadow-soft-md">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-[#4F6F52]/10 flex items-center justify-centre flex-shrink-0">
                    <Eye className="w-4 h-4 sm:w-5 sm:h-5 text-[#4F6F52]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1A231E] mb-1 sm:mb-2 text-sm sm:text-base">
                      Honest Quality Signal
                    </h4>
                    <p className="text-xs sm:text-sm text-[#1A231E]/70">
                      CQC ratings can be outdated. Google reviews can be fake. But families voting with their feet?
                      That's real.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 sm:p-6 bg-white border border-[#E8E5DF] rounded-xl sm:rounded-2xl shadow-soft-md">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-[#4F6F52]/10 flex items-center justify-centre flex-shrink-0">
                    <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[#4F6F52]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1A231E] mb-1 sm:mb-2 text-sm sm:text-base">
                      Predicts Satisfaction
                    </h4>
                    <p className="text-xs sm:text-sm text-[#1A231E]/70">
                      High family engagement = 4x fewer complaints and 2x better resident wellbeing.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* How We Use This Intelligence */}
          <div className="bg-[#4F6F52] p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl text-centre">
            <h3 className="text-xl sm:text-3xl font-serif font-bold text-white mb-3 sm:mb-4">
              How We Use This Intelligence
            </h3>
            <p className="text-sm sm:text-lg text-white/90 leading-relaxed max-w-2xl mx-auto">
              We correlate family visit patterns with financial stability, staff turnover, and CQC inspection notes. A
              home might have a "Good" rating—but if families rarely visit, we dig deeper.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
