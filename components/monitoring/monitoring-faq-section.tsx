import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Check, HelpCircle } from "lucide-react"

export function MonitoringFaqSection() {
  const faqs = [
    {
      category: "Common Concerns",
      question: "Can't I just call the care home regularly?",
      answer:
        "Of course you can call, and we'd encourage you to do so. However, there are some things that phone calls alone won't reveal: financial health data isn't publicly available, staff review trends across 200+ sources take considerable time to compile, and CQC reports are often delayed by several months. Care homes may not always share internal concerns proactively. By the time issues become apparent through regular calls, they may have already developed. Our monitoring helps identify potential concerns weeks or months earlier, giving you more time to respond.",
    },
    {
      category: "Common Concerns",
      question: "Isn't this just being paranoid?",
      answer:
        "We understand this concern. The data shows that 1 in 4 care homes show financial stress signals within 12 months, and our system has detected 847 critical issues this year alone. The average cost when families miss warning signs is around £8,500. We see monitoring as being prepared rather than paranoid—it's about responsible care planning. Many families tell us they wish they'd had this information earlier when unexpected situations arose.",
    },
    {
      category: "Common Concerns",
      question: "This seems expensive for what it is",
      answer:
        "We appreciate that cost is an important consideration. To put it in perspective: our plans range from £15-25 per month, which works out to £180-300 per year. By comparison, one emergency move typically costs £8,500 or more, and lost deposits alone are often around £5,000. Many families find that the peace of mind and early warning our service provides is worth far more than the monthly cost.",
    },
    {
      category: "Technical",
      question: "Where do you get your data from?",
      answer:
        "We use a combination of publicly available sources and proprietary data, including CQC reports, Companies House filings, Food Standards Agency ratings, staff review platforms, and insights from our analysis algorithms. All data is legally obtained and publicly accessible.",
    },
    {
      category: "Technical",
      question: "How accurate are your predictions?",
      answer:
        "Our predictive model, trained on 5 years of data, shows 75-85% accuracy in forecasting CQC rating changes 6-12 months ahead.",
    },
    {
      category: "Privacy",
      question: "What if the care home finds out and doesn't like it?",
      answer:
        "Everything we monitor is publicly available information—CQC reports, Companies House filings, staff reviews, and regulatory data. We're simply organising information that's already in the public domain, which families often don't have time to track themselves. Most care homes appreciate when families are well-informed and engaged, as it shows genuine care and interest in their loved one's wellbeing.",
    },
    {
      category: "Privacy",
      question: "Is this legal?",
      answer:
        "Yes, absolutely. We only use legally obtained data and fully comply with all GDPR regulations. We do not use any surveillance equipment such as cameras or microphones—everything is based on publicly available information and regulatory data.",
    },
    {
      category: "Practical",
      question: "I don't have time to read monthly reports",
      answer:
        "That's exactly why we offer SMS alerts. You'll only receive notifications when something actually requires your attention. Most months, no news is good news. When we detect financial concerns, staff issues, or quality matters that need attention, you'll receive an instant alert with clear guidance on what to do next. The monthly report is available if you'd like more detail, but the alerts ensure you never miss anything important.",
    },
    {
      category: "Practical",
      question: "What happens if I want to cancel my subscription?",
      answer:
        "You can cancel your subscription at any time in your account with one click. No questions asked and no hidden fees.",
    },
    {
      category: "Practical",
      question: "What if the care home I need is not in your database?",
      answer:
        "Our database covers 99% of care homes in the UK. If your home is missing, let us know and we'll add it for monitoring within 48 hours.",
    },
  ]

  return (
    <section
      id="faq"
      className="relative py-20 md:py-28 lg:py-32 bg-gradient-to-br from-[#FAFAF9] via-white to-[#F5F3EF]/40 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#8B7355]/5 via-transparent to-transparent opacity-60" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#E8E5DF]/30 via-transparent to-transparent opacity-40" />

      <div className="container relative mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16 md:mb-20 space-y-5">
          <Badge
            variant="outline"
            className="mx-auto text-xs font-semibold tracking-wide border-[#8B7355]/20 text-[#8B7355] bg-white/60 backdrop-blur-sm px-4 py-1.5 shadow-sm"
          >
            EVERYTHING YOU NEED TO KNOW
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#1A231E] tracking-tight leading-tight">
            Questions <span className="text-[#8B7355]">Answered Clearly</span>
          </h2>
          <p className="text-lg md:text-xl text-[#1A231E]/60 max-w-2xl mx-auto leading-relaxed font-light">
            From common concerns to technical details — everything you'd like to know
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-5">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="group bg-white/70 backdrop-blur-xl border border-[#E8E5DF]/60 hover:border-[#8B7355]/40 rounded-3xl overflow-hidden shadow-[0_2px_16px_-4px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_-8px_rgba(139,115,85,0.12)] transition-all duration-500 ease-out"
              >
                <AccordionTrigger className="text-lg md:text-xl font-semibold text-[#1A231E] px-6 md:px-8 py-6 md:py-7 text-left hover:no-underline group-hover:text-[#8B7355] transition-colors duration-300 [&[data-state=open]]:text-[#8B7355]">
                  <div className="flex items-start gap-4 pr-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#8B7355] to-[#6F5D47] flex items-center justify-center flex-shrink-0 mt-1 group-data-[state=open]:scale-110 transition-transform">
                      <HelpCircle className="w-5 h-5 text-white" strokeWidth={2} />
                    </div>
                    <span className="flex-1">{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-base md:text-lg text-[#1A231E]/70 px-6 md:px-8 pb-6 md:pb-7 pl-16 md:pl-20 leading-relaxed font-light">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-16 md:mt-20 bg-gradient-to-r from-[#4F6F52] to-[#3A5140] rounded-3xl p-8 md:p-10 text-center shadow-soft-xl max-w-2xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4">Still have questions?</h3>
          <p className="text-white/90 mb-6 text-lg leading-relaxed">
            Try it risk-free for 30 days. If our monitoring service doesn't provide the peace of mind you're looking for, we'll provide a full refund.
          </p>
          <div className="flex items-center justify-center gap-3 mb-6">
            <Check className="w-6 h-6 text-white flex-shrink-0" strokeWidth={2.5} />
            <span className="text-white font-semibold">30-day money-back guarantee • Cancel anytime</span>
          </div>
          <a
            href="mailto:support@rightcarehome.co.uk"
            className="inline-flex items-center gap-2 text-white hover:text-white/80 font-semibold text-lg underline underline-offset-4 decoration-2 transition-all duration-300"
          >
            Or get in touch with our team
          </a>
        </div>
      </div>
    </section>
  )
}
