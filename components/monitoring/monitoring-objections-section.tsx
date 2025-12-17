import { HelpCircle, Check } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function MonitoringObjectionsSection() {
  const objections = [
    {
      question: "Can't I just call the care home regularly?",
      answer:
        "Of course you can call. But here's what you won't get: Financial health data isn't public. Staff review trends across 200+ sources take hours to compile. CQC reports are delayed by months. Care homes won't tell you about internal problems. By the time you notice something's wrong through phone calls, the issue has already escalated. Our monitoring catches problems weeks or months before they become visible to families.",
    },
    {
      question: "Isn't this just being paranoid?",
      answer:
        "1 in 4 care homes show financial stress signals within 12 months. 847 critical issues detected by our system this year alone. £8,500 average loss when families miss warning signs. Being prepared isn't paranoia—it's responsible care. The families who feel paranoid are the ones scrambling when a home suddenly closes.",
    },
    {
      question: "This seems expensive for what it is",
      answer:
        "Let's do the math: £15-25/month = £180-300/year. One emergency move costs £8,500+ on average. Lost deposit alone is typically £5,000+. The cost of one missed warning sign pays for 28+ years of monitoring. Plus, how do you price peace of mind and sleeping soundly at night?",
    },
    {
      question: "What if the care home finds out and doesn't like it?",
      answer:
        "Everything we monitor is publicly available information—CQC reports, Companies House filings, staff reviews, and regulatory data. We're not spying or doing anything unethical. We're simply organizing public information that families don't have time to track manually. Good care homes appreciate families who are engaged and informed.",
    },
    {
      question: "I don't have time to read monthly reports",
      answer:
        "That's exactly why we have SMS alerts. You only get notified when something actually matters. Most months, no news is good news. But when we detect financial issues, staff problems, or quality concerns, you get an instant alert with exactly what to do next. The monthly report is there if you want details, but alerts mean you never miss the critical stuff.",
    },
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#FDFBF7] to-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1A231E] mb-4 sm:mb-6 text-balance">
            Common Questions <span className="text-[#4F6F52]">Answered Honestly</span>
          </h2>
          <p className="text-lg sm:text-xl text-[#1A231E]/70 leading-relaxed">
            We get it. Here's what families really want to know:
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {objections.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-2xl shadow-soft-md border border-[#E8E5DF] px-6 py-2 hover:shadow-soft-lg transition-all duration-300 data-[state=open]:shadow-soft-lg data-[state=open]:border-[#4F6F52]/30"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6 group">
                  <div className="flex items-start gap-4 pr-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#4F6F52] to-[#3A5140] flex items-center justify-center flex-shrink-0 mt-1 group-data-[state=open]:scale-110 transition-transform">
                      <HelpCircle className="w-5 h-5 text-white" strokeWidth={2} />
                    </div>
                    <span className="text-lg sm:text-xl font-semibold text-[#1A231E] group-hover:text-[#4F6F52] transition-colors">
                      {item.question}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-2 pb-6 pl-12 pr-8">
                  <p className="text-base text-[#1A231E]/80 leading-relaxed">{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 bg-gradient-to-r from-[#4F6F52] to-[#3A5140] rounded-2xl p-8 text-center shadow-soft-xl">
            <h3 className="text-2xl font-serif font-bold text-white mb-4">Still have questions?</h3>
            <p className="text-white/90 mb-6 text-lg">
              Try it risk-free for 30 days. If monitoring doesn't give you peace of mind, we'll refund every penny.
            </p>
            <div className="flex items-center justify-center gap-3">
              <Check className="w-6 h-6 text-white" strokeWidth={2.5} />
              <span className="text-white font-semibold">30-day money-back guarantee • Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
