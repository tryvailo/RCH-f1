import {
  Check,
  ArrowRight,
  Database,
  Shield,
  Users,
  Heart,
  PoundSterling,
  MapPin,
  Calendar,
  ClipboardList,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const included = [
  {
    title: "3 Strategic Matches",
    description: "Safe Bet · Best Reputation · Smart Value — each matched to your priorities",
    icon: Users,
  },
  {
    title: "Well-being Index Score",
    description: "Unique area happiness rating 0-100",
    icon: Heart,
  },
  {
    title: "Funding Eligibility Check",
    description: "NHS CHC, Council & DPA probability",
    icon: PoundSterling,
  },
  {
    title: "Local Area Analysis",
    description: "Map + demographics for your postcode",
    icon: MapPin,
  },
  {
    title: "7-Day Action Plan",
    description: "Week-by-week roadmap with milestones",
    icon: Calendar,
  },
  {
    title: "Expert Checklists",
    description: "Visit prep + telephone enquiry scripts",
    icon: ClipboardList,
  },
]

export function WhyStartSection() {
  return (
    <section className="py-12 sm:py-20 lg:py-32 bg-[#FDFBF7]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-xl sm:rounded-2xl lg:rounded-[2.5rem] bg-white border-2 border-[#E8E5DF] overflow-hidden shadow-soft-lg p-4 sm:p-6 md:p-10 lg:p-16">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#4F6F52]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 relative z-10 items-center">
              <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                <div className="space-y-2 sm:space-y-4 text-center lg:text-left">
                  <div className="flex flex-col items-center lg:items-start gap-2">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center px-3 py-1 bg-[#4F6F52]/10 text-[#4F6F52] text-xs sm:text-sm font-semibold rounded-full">
                        Delivered in 10 minutes
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#C88D79]/10 text-[#C88D79] text-xs sm:text-sm font-semibold rounded-full">
                        <Database className="w-3.5 h-3.5" />
                        18 Data Points
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-2xl lg:text-4xl font-serif font-bold text-[#1A231E] break-words">
                      What's in Your Free Report
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base lg:text-lg text-[#1A231E]/70 font-sans">
                    Real data from 5 official sources. Everything you need to start your search with confidence.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 lg:gap-4">
                  {included.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-2 sm:gap-3 p-2.5 sm:p-3 lg:p-4 bg-white border border-[#E8E5DF] rounded-lg sm:rounded-xl shadow-sm"
                    >
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#4F6F52]/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#4F6F52]" />
                      </div>
                      <div className="min-w-0">
                        <span className="font-semibold text-sm sm:text-base lg:text-lg text-[#1A231E] block">
                          {item.title}
                        </span>
                        <span className="text-xs sm:text-sm text-[#1A231E]/70 block mt-1 leading-relaxed">
                          {item.description}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-center lg:justify-start gap-2 pt-2 flex-wrap">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#4F6F52]/10 rounded-full">
                    <Check className="w-3.5 h-3.5 text-[#4F6F52] stroke-[3]" />
                    <span className="text-sm font-semibold text-[#4F6F52]">Zero Commissions</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#C88D79]/10 rounded-full">
                    <Check className="w-3.5 h-3.5 text-[#C88D79] stroke-[3]" />
                    <span className="text-sm font-semibold text-[#C88D79]">100% Independent</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#7FAD7E]/10 rounded-full">
                    <Shield className="w-3.5 h-3.5 text-[#7FAD7E] stroke-[3]" />
                    <span className="text-sm font-semibold text-[#7FAD7E]">5 Official Sources</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-soft-md border border-[#E8E5DF] text-center lg:text-left">
                  <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#1A231E] mb-2">Ready to start?</h4>
                  <p className="text-[#1A231E]/70 mb-4 sm:mb-6 lg:mb-8 text-sm sm:text-base lg:text-lg">
                    It takes just 2 minutes to complete. Your shortlist arrives within 10 minutes.
                  </p>

                  <div className="space-y-2 sm:space-y-4">
                    <Button
                      asChild
                      className="w-full h-11 sm:h-12 lg:h-14 bg-[#4F6F52] hover:bg-[#3A5140] text-white text-sm sm:text-base lg:text-lg font-bold rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all group"
                    >
                      <Link href="/free-assessment">
                        <span>GET FREE SHORTLIST</span>
                        <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                    <p className="text-center text-[10px] sm:text-xs font-bold text-[#C88D79] tracking-wide sm:tracking-widest uppercase">
                      NO CREDIT CARD REQUIRED
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#E8E5DF]">
                    <p className="text-xs sm:text-sm text-[#1A231E]/60 mb-2">Need deeper analysis?</p>
                    <div className="flex items-center justify-center gap-2 text-sm">
                      <Badge className="bg-[#C88D79]/10 text-[#C88D79] border-0 font-semibold">
                        +188 more data points
                      </Badge>
                      <span className="text-[#1A231E]/50">in Professional Report</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
