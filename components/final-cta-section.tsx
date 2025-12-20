import { Button } from "@/components/ui/button"
import { ArrowRight, ShieldCheck, Heart } from "lucide-react"
import Link from "next/link"

export function FinalCTASection() {
  return (
    <section className="py-20 lg:py-32 bg-[#1A231E] relative overflow-hidden">
      <div className="container mx-auto px-3 sm:px-4 relative z-10 overflow-x-hidden">
        <div className="max-w-4xl mx-auto text-centre space-y-6 sm:space-y-8">
          <div className="inline-flex items-center justify-centre w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-[#4F6F52]/20 mb-2 sm:mb-4">
            <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-[#4F6F52]" />
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-white">
            One Less Thing to Worry About
          </h2>

          <p className="text-base sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            You've got enough on your plate. Let us handle the research so you can focus on what matters — spending time
            with your loved one.
          </p>

          <div className="flex flex-wrap items-center justify-centre gap-4 sm:gap-6 text-white/60 text-sm">
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#4F6F52]" />
              100% Independent
            </span>
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#4F6F52]" />
              Money-Back Guarantee
            </span>
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#4F6F52]" />
              Delivered Within 24 Hours
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-centre gap-3 sm:gap-4 pt-4 sm:pt-8">
            <Button
              size="lg"
              asChild
              className="w-full sm:w-auto h-14 sm:h-16 px-6 sm:px-8 text-base sm:text-lg bg-[#4F6F52] hover:bg-[#3A5140] text-white rounded-xl sm:rounded-2xl shadow-soft-lg hover:shadow-soft-xl hover:scale-105 transition-all"
            >
              <Link href="/free-assessment">
                <span className="sm:hidden">See My Care Home Options</span>
                <span className="hidden sm:inline">See My Care Home Options</span>
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export { FinalCTASection as FinalCtaSection }
