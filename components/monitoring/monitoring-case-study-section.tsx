import { Quote, TrendingUp, AlertTriangle, Check } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function MonitoringCaseStudySection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-centre max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1A231E] mb-4 sm:mb-6 text-balance">
            Real Stories, <span className="text-[#4F6F52]">Real Prevention</span>
          </h2>
          <p className="text-lg sm:text-xl text-[#1A231E]/70 leading-relaxed">
            How monitoring saved one family from disaster
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Timeline Visualization */}
          <div className="mb-12 bg-gradient-to-br from-[#FDFBF7] to-white rounded-2xl p-8 border border-[#E8E5DF] shadow-soft-lg">
            <h3 className="text-2xl font-serif font-bold text-[#1A231E] mb-8 text-centre">The Timeline That Saved £11,400</h3>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#4F6F52] via-[#7FAD7E] to-[#4F6F52]"></div>
              
              {/* Timeline Items */}
              <div className="space-y-8">
                {/* March */}
                <div className="relative pl-20">
                  <div className="absolute left-0 top-0 w-16 h-16 rounded-full bg-[#D17A6F] flex items-center justify-centre border-4 border-white shadow-lg z-10">
                    <span className="text-white font-bold text-sm">Mar</span>
                  </div>
                  <div className="bg-white rounded-xl p-6 border-2 border-[#D17A6F]/20 shadow-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertTriangle className="w-5 h-5 text-[#D17A6F]" />
                      <span className="font-semibold text-[#1A231E]">Alert Detected</span>
                    </div>
                    <p className="text-sm text-[#1A231E]/70 mb-2">
                      Financial stress detected. Staff turnover spiked from <span className="font-semibold">15% to 38%</span> within 2 months.
                    </p>
                    <Badge className="bg-[#D17A6F] text-white">3 months early warning</Badge>
                  </div>
                </div>

                {/* April-May */}
                <div className="relative pl-20">
                  <div className="absolute left-0 top-0 w-16 h-16 rounded-full bg-[#7FAD7E] flex items-center justify-centre border-4 border-white shadow-lg z-10">
                    <span className="text-white font-bold text-xs">Apr-May</span>
                  </div>
                  <div className="bg-white rounded-xl p-6 border-2 border-[#7FAD7E]/20 shadow-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-5 h-5 text-[#7FAD7E]" />
                      <span className="font-semibold text-[#1A231E]">Action Taken</span>
                    </div>
                    <p className="text-sm text-[#1A231E]/70 mb-2">
                      Started searching for alternatives. <span className="font-semibold">3 homes shortlisted</span> with availability confirmed and deposits secured.
                    </p>
                    <Badge className="bg-[#7FAD7E] text-white">Time to plan</Badge>
                  </div>
                </div>

                {/* June */}
                <div className="relative pl-20">
                  <div className="absolute left-0 top-0 w-16 h-16 rounded-full bg-[#4F6F52] flex items-center justify-centre border-4 border-white shadow-lg z-10">
                    <span className="text-white font-bold text-sm">Jun</span>
                  </div>
                  <div className="bg-white rounded-xl p-6 border-2 border-[#4F6F52]/20 shadow-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <Check className="w-5 h-5 text-[#4F6F52]" />
                      <span className="font-semibold text-[#1A231E]">Crisis Averted</span>
                    </div>
                    <p className="text-sm text-[#1A231E]/70 mb-2">
                      Home announced closure. Moved mum within <span className="font-semibold">48 hours</span>. Zero stress, zero financial loss.
                    </p>
                    <Badge className="bg-[#4F6F52] text-white">Zero crisis impact</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#FDFBF7] to-white rounded-2xl shadow-soft-xl border border-[#E8E5DF] overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="p-8 lg:p-10">
                <div className="flex items-start gap-3 mb-6">
                  <Quote className="w-10 h-10 text-[#4F6F52] flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-[#1A231E] mb-2">
                      "We caught it 3 months before closure"
                    </h3>
                    <p className="text-[#1A231E]/70">Sarah M., daughter of care home resident</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-centre flex-shrink-0">
                      <AlertTriangle className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#1A231E] mb-1">The Alert</h4>
                      <p className="text-[#1A231E]/70 text-sm leading-relaxed">
                        Our system detected unusual financial patterns at mum's care home in March. Staff turnover
                        spiked from 15% to 38% within 2 months.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-centre flex-shrink-0">
                      <TrendingUp className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#1A231E] mb-1">The Action</h4>
                      <p className="text-[#1A231E]/70 text-sm leading-relaxed">
                        We immediately started searching for alternatives. Had 3 shortlisted care homes ready with
                        availability confirmed and deposits secured.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-centre flex-shrink-0">
                      <Check className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#1A231E] mb-1">The Outcome</h4>
                      <p className="text-[#1A231E]/70 text-sm leading-relaxed">
                        When the home announced closure in June, we moved mum within 48 hours. Zero stress, zero
                        financial loss. Other families scrambled for months.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-[#E8E5DF]">
                  <div className="bg-gradient-to-r from-[#4F6F52]/10 to-[#7FAD7E]/10 rounded-xl p-6">
                    <p className="text-[#1A231E] font-medium mb-2">Total Savings</p>
                    <div className="text-4xl font-bold text-[#4F6F52]">£11,400</div>
                    <p className="text-sm text-[#1A231E]/70 mt-2">
                      Avoided moving costs, lost deposits, emergency placement fees, and 3 months of anxiety
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#4F6F52] to-[#3A5140] p-8 lg:p-10 text-white flex flex-col justify-centre">
                <h3 className="text-2xl font-serif font-bold mb-6">What Made The Difference</h3>
                <ul className="space-y-4">
                  {[
                    "Early warning system caught financial stress 3 months early",
                    "Monthly reports showed declining staff satisfaction scores",
                    "Automated alerts meant no manual checking required",
                    "Time to plan meant better choice of alternative homes",
                    "Family avoided £11,400 in crisis-driven costs",
                  ].map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-6 h-6 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                      <span className="text-white/95 leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-8 border-t border-white/20">
                  <p className="text-lg text-white/90 italic">
                    "The £25/month monitoring service paid for itself 456 times over. But more importantly, mum never
                    knew there was a crisis. That's priceless."
                  </p>
                  <p className="mt-4 text-white/80 font-medium">— Sarah M., Manchester</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
