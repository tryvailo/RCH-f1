import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { HelpCircle } from "lucide-react"

export function FundingFaqSection() {
  const faqs = [
    {
      question: "How accurate is the calculator?",
      answer:
        "Our algorithm is based on the official NHS Decision Support Tool and Local Authority means test frameworks. We achieve 95% accuracy compared to actual ICB decisions. However, final eligibility is determined by your local Integrated Care Board (ICB) assessment.",
    },
    {
      question: "What if I don't qualify for funding?",
      answer:
        "Even if you don't qualify for CHC or LA funding, the report provides valuable information about other options like deferred payment agreements, property disregards, and how to appeal decisions. You'll know exactly where you stand financially.",
    },
    {
      question: "Is my financial information secure?",
      answer:
        "Absolutely. We use bank-level 256-bit encryption for all data. Your information is never stored after generating your report. We're fully GDPR compliant and process data in the UK only. Your privacy is our top priority.",
    },
    {
      question: "How quickly do I get the report?",
      answer:
        "Instantly. Within 60 seconds of completing payment, you'll receive a comprehensive PDF report via email. You can download and save it immediately. If you don't receive it, check your spam folder or contact our support team.",
    },
    {
      question: "Can I get a refund if I'm not satisfied?",
      answer:
        "Yes. We offer a 30-day 100% Clarity Guarantee. If our report doesn't give you complete clarity on your funding options, email us and we'll refund your payment immediately. No questions asked.",
    },
    {
      question: "Do I need to provide medical records?",
      answer:
        "No. The assessment is based on your answers to 15 simple questions about care needs, medical conditions, and financial circumstances. You don't need to upload any documents. Just answer honestly based on what you know.",
    },
    {
      question: "What's the difference between CHC and LA funding?",
      answer:
        "NHS Continuing Healthcare (CHC) is full funding for those with complex health needs — the NHS pays everything. Local Authority (LA) funding is means-tested financial support where the council contributes based on your income and assets. Our calculator assesses both.",
    },
    {
      question: "Will this work for my region?",
      answer:
        "Yes. Whilst CHC criteria are consistent across England, Local Authority means tests can vary slightly by region. Our calculator accounts for regional differences and provides guidance specific to your local authority area.",
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
        <div className="text-centre mb-16 md:mb-20 space-y-5">
          <Badge
            variant="outline"
            className="mx-auto text-xs font-semibold tracking-wide border-[#8B7355]/20 text-[#8B7355] bg-white/60 backdrop-blur-sm px-4 py-1.5 shadow-sm"
          >
            COMMON QUESTIONS
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#1A231E] tracking-tight leading-tight">
            Everything You Need
            <br />
            <span className="text-[#8B7355]">to Know</span>
          </h2>
          <p className="text-lg md:text-xl text-[#1A231E]/60 max-w-2xl mx-auto leading-relaxed font-light">
            Clear answers about the funding calculator
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
                <AccordionTrigger className="text-lg md:text-xl font-semibold text-[#1A231E] px-6 md:px-8 py-6 md:py-7 text-left hover:no-underline group-hover:text-[#8B7355] transition-colours duration-300 [&[data-state=open]]:text-[#8B7355]">
                  <div className="flex items-start gap-4 pr-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#8B7355] to-[#6F5D47] flex items-center justify-centre flex-shrink-0 mt-1 group-data-[state=open]:scale-110 transition-transform">
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

        <div className="text-centre mt-16 md:mt-20 p-8 md:p-10 bg-white/50 backdrop-blur-sm rounded-3xl border border-[#E8E5DF]/40 shadow-sm max-w-2xl mx-auto">
          <p className="text-base md:text-lg text-[#1A231E]/70 font-light mb-3">Still have questions?</p>
          <a
            href="mailto:support@rightcarehome.co.uk"
            className="inline-flex items-center gap-2 text-[#8B7355] hover:text-[#6F5D47] font-semibold text-lg underline underline-offset-4 decoration-2 hover:decoration-[#6F5D47] transition-all duration-300"
          >
            Get in touch with our team
          </a>
        </div>
      </div>
    </section>
  )
}
