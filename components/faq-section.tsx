import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"

const faqs = [
  {
    question: "How quickly will I get my results?",
    answer:
      "Free Report: Within 10 minutes of completing your assessment. Professional Analysis: Delivered within 24 hours. Both include personalised care home matches based on your specific priorities and circumstances.",
  },
  {
    question: "What's included in the Free report?",
    answer:
      "Your Free report includes 3 strategic care home matches (Safe Bet, Best Reputation, Smart Value), 18 verified data points per home, a Well-being Index score for your area, funding eligibility check (NHS CHC, Council, DPA), local area analysis with map, a 7-day action plan, and expert checklists for visits and telephone enquiries.",
  },
  {
    question: "Why pay £119 when other services are free?",
    answer:
      "'Free' services aren't actually free — they're paid by care homes through commissions up to £7,000 per resident. This creates a conflict of interest: their goal is to direct you to whoever pays them most. We charge a transparent fee to guarantee our analysis is 100% independent. We work for you, not care homes. Your peace of mind, not our commission.",
  },
  {
    question: "What if the report doesn't help me?",
    answer:
      "We're confident in our analysis. If you don't find the Professional report valuable, we'll refund your £119 within 30 days — no questions asked. We've helped thousands of families, and our data has prevented costly mistakes like overpaying by £21,788 annually or choosing homes at risk of closure.",
  },
  {
    question: "Where does your data come from?",
    answer:
      "We aggregate data from 15+ authoritative sources including official regulatory bodies, government registers, financial databases, and behavioural analytics. We update our data weekly to ensure accuracy. We don't rely on care home self-reporting or paid placements — only verified, independent sources.",
  },
  {
    question: "Can I share the report with my family?",
    answer:
      "Yes! The Professional report includes Share with Family — a UK-first feature. With one click, you can give read-only access to up to 5 family members for 30 days. Everyone stays informed, reducing family disagreements and making the decision together easier.",
  },
  {
    question: "Do you cover my local council area?",
    answer:
      "We cover all 152 Local Authority areas across England. Your Professional report includes a dedicated funding guide specific to your council, with their contact details, funding thresholds, and application process. This alone can save you weeks of research.",
  },
  {
    question: "Is my information kept private?",
    answer:
      "Absolutely. We're fully GDPR compliant. Your personal information is encrypted and never shared with care homes, brokers, or third parties. We don't sell leads or take commissions. Your data is used solely to generate your personalised report.",
  },
  {
    question: "What data do I get in Free vs Professional?",
    answer:
      "FREE (18 data points): Official ratings, basic hygiene score, price indicator, area overview, location map, medical match. PROFESSIONAL (206 data points): Everything in Free plus full regulatory deep-dive, complete food safety analysis, fair cost calculator with negotiation scripts, financial stability check, staff satisfaction insights, family engagement patterns, your council's funding guide, ownership intelligence, and 14-day action plan with real contacts.",
  },
  {
    question: "Can you predict if a home might close?",
    answer:
      "Our financial model uses 5 years of company accounts data to flag bankruptcy risk 12-18 months in advance. We've helped families avoid homes that closed shortly after being recommended elsewhere.",
  },
]

function FaqSection() {
  return (
    <section
      id="faq"
      className="relative py-20 md:py-28 lg:py-32 bg-muted overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent opacity-60" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-border/30 via-transparent to-transparent opacity-40" />

      <div className="container relative mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16 md:mb-20 space-y-5">
          <Badge
            variant="outline"
            className="mx-auto text-xs font-semibold tracking-wide border-primary/20 text-primary bg-card/60 backdrop-blur-sm px-4 py-1.5 shadow-sm"
          >
            COMMON QUESTIONS
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground tracking-tight leading-tight">
            Everything You Need
            <br />
            <span className="text-primary">to Know</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
            Clear answers about our care home analysis service
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-5">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="group bg-card border border-border/60 hover:border-primary/40 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 ease-out"
              >
                <AccordionTrigger className="text-lg md:text-xl font-semibold text-foreground px-6 md:px-8 py-6 md:py-7 text-left hover:no-underline group-hover:text-primary transition-colors duration-300 [&[data-state=open]]:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base md:text-lg text-muted-foreground px-6 md:px-8 pb-6 md:pb-7 leading-relaxed font-light">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-16 md:mt-20 p-8 md:p-10 bg-card/50 backdrop-blur-sm rounded-3xl border border-border/40 shadow-sm max-w-2xl mx-auto">
          <p className="text-base md:text-lg text-muted-foreground font-light mb-3">Still have questions?</p>
          <a
            href="mailto:support@rightcarehome.co.uk"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold text-lg underline underline-offset-4 decoration-2 hover:decoration-primary/80 transition-all duration-300"
          >
            Get in touch with our team
          </a>
        </div>
      </div>
    </section>
  )
}

export { FaqSection, FaqSection as FAQSection }
