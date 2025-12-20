import { ArrowRight, Building2, Users, PoundSterling } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function HiddenCommissionModelSection() {
  return (
    <section className="relative py-20 md:py-28 lg:py-32 bg-gradient-to-br from-white via-[#FDFBF7] to-[#F5F3EF]/30 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_var(--tw-gradient-stops))] from-[#D17A6F]/5 via-transparent to-transparent opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,_var(--tw-gradient-stops))] from-[#4F6F52]/5 via-transparent to-transparent opacity-40" />

      <div className="container relative mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="text-centre mb-16 md:mb-20 space-y-4">
          <Badge
            variant="outline"
            className="mx-auto text-xs font-semibold tracking-wide border-[#D17A6F]/30 text-[#D17A6F] bg-white/60 backdrop-blur-sm px-4 py-1.5 shadow-sm"
          >
            FOLLOW THE MONEY
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#1A231E] tracking-tight leading-tight">
            The Hidden Commission Model
          </h2>
          <p className="text-lg md:text-xl text-[#1A231E]/70 max-w-3xl mx-auto leading-relaxed">
            Understanding how 'free' consultants get paid reveals why their advice may not serve your interests.
          </p>
        </div>

        {/* Visual Comparison */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Free Consultant Model - LEFT PATH */}
          <div className="relative">
            <div className="absolute -top-3 -right-3 w-24 h-24 bg-[#D17A6F]/10 rounded-full blur-2xl" />

            <div className="relative bg-gradient-to-br from-[#FEF2F2] to-white rounded-3xl p-8 md:p-10 border-2 border-[#D17A6F]/20 shadow-soft-lg">
              <div className="mb-6">
                <Badge className="bg-[#D17A6F] text-white border-0 mb-3">COMMISSION-BASED</Badge>
                <h3 className="text-2xl font-serif font-bold text-[#1A231E] mb-2">'Free' Consultant</h3>
                <p className="text-sm text-[#1A231E]/60">How they actually get paid</p>
              </div>

              {/* Money Flow Visualization */}
              <div className="space-y-6">
                {/* Step 1: Care Home */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#D17A6F]/10 flex items-center justify-centre flex-shrink-0">
                    <Building2 className="w-7 h-7 text-[#D17A6F]" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-[#1A231E] mb-1">Care Home</div>
                    <div className="text-sm text-[#1A231E]/70">Pays commission for referrals</div>
                  </div>
                </div>

                {/* Arrow Down */}
                <div className="flex justify-centre">
                  <div className="w-12 h-12 rounded-full bg-[#D17A6F]/10 flex items-center justify-centre">
                    <ArrowRight className="w-6 h-6 text-[#D17A6F] rotate-90" />
                  </div>
                </div>

                {/* Step 2: Commission Amount */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#D17A6F]/10 flex items-center justify-centre flex-shrink-0">
                    <PoundSterling className="w-7 h-7 text-[#D17A6F]" />
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-2xl text-[#D17A6F] mb-1">£5,000–£7,000</div>
                    <div className="text-sm text-[#1A231E]/70">Per placement commission</div>
                  </div>
                </div>

                {/* Arrow Down */}
                <div className="flex justify-centre">
                  <div className="w-12 h-12 rounded-full bg-[#D17A6F]/10 flex items-center justify-centre">
                    <ArrowRight className="w-6 h-6 text-[#D17A6F] rotate-90" />
                  </div>
                </div>

                {/* Step 3: Consultant Gets Paid */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#D17A6F]/10 flex items-center justify-centre flex-shrink-0">
                    <Users className="w-7 h-7 text-[#D17A6F]" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-[#1A231E] mb-1">'Free' Consultant</div>
                    <div className="text-sm text-[#1A231E]/70">Earns commission, not fee from you</div>
                  </div>
                </div>
              </div>

              {/* Warning Box */}
              <div className="mt-6 p-4 bg-[#D17A6F]/10 rounded-xl border border-[#D17A6F]/20">
                <p className="text-sm font-semibold text-[#D17A6F] text-centre">
                  ⚠️ Their incentive: Highest-paying home, not best home
                </p>
              </div>
            </div>
          </div>

          {/* RightCareHome Model - RIGHT PATH */}
          <div className="relative">
            <div className="absolute -top-3 -left-3 w-24 h-24 bg-[#4F6F52]/10 rounded-full blur-2xl" />

            <div className="relative bg-gradient-to-br from-[#F0F4F1] to-white rounded-3xl p-8 md:p-10 border-2 border-[#4F6F52]/30 shadow-soft-lg">
              <div className="mb-6">
                <Badge className="bg-[#4F6F52] text-white border-0 mb-3">100% INDEPENDENT</Badge>
                <h3 className="text-2xl font-serif font-bold text-[#1A231E] mb-2">RightCareHome</h3>
                <p className="text-sm text-[#1A231E]/60">How we get paid</p>
              </div>

              {/* Money Flow Visualization */}
              <div className="space-y-6">
                {/* Step 1: You Pay */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#4F6F52]/10 flex items-center justify-centre flex-shrink-0">
                    <Users className="w-7 h-7 text-[#4F6F52]" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-[#1A231E] mb-1">You</div>
                    <div className="text-sm text-[#1A231E]/70">The only person who pays us</div>
                  </div>
                </div>

                {/* Arrow Down */}
                <div className="flex justify-centre">
                  <div className="w-12 h-12 rounded-full bg-[#4F6F52]/10 flex items-center justify-centre">
                    <ArrowRight className="w-6 h-6 text-[#4F6F52] rotate-90" />
                  </div>
                </div>

                {/* Step 2: Transparent Fee */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#4F6F52]/10 flex items-center justify-centre flex-shrink-0">
                    <PoundSterling className="w-7 h-7 text-[#4F6F52]" />
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-2xl text-[#4F6F52] mb-1">£119</div>
                    <div className="text-sm text-[#1A231E]/70">Transparent, one-time fee</div>
                  </div>
                </div>

                {/* Arrow Down */}
                <div className="flex justify-centre">
                  <div className="w-12 h-12 rounded-full bg-[#4F6F52]/10 flex items-center justify-centre">
                    <ArrowRight className="w-6 h-6 text-[#4F6F52] rotate-90" />
                  </div>
                </div>

                {/* Step 3: Independent Analysis */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#4F6F52]/10 flex items-center justify-centre flex-shrink-0">
                    <Building2 className="w-7 h-7 text-[#4F6F52]" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-[#1A231E] mb-1">Independent Report</div>
                    <div className="text-sm text-[#1A231E]/70">Zero ties to care homes</div>
                  </div>
                </div>
              </div>

              {/* Trust Box */}
              <div className="mt-6 p-4 bg-[#4F6F52]/10 rounded-xl border border-[#4F6F52]/20">
                <p className="text-sm font-semibold text-[#4F6F52] text-centre">
                  ✓ Our incentive: Find the safest, best-value home for you
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Insight */}
        <div className="max-w-3xl mx-auto mt-16 text-centre">
          <p className="text-lg md:text-xl text-[#1A231E]/80 leading-relaxed">
            When you work with RightCareHome, you're our only client. We have{" "}
            <span className="font-bold text-[#4F6F52]">zero financial ties</span> to any care home, which means our
            analysis is based purely on data, not commissions.
          </p>
        </div>
      </div>
    </section>
  )
}
