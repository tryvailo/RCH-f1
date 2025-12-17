import { ClipboardList, Search, FileText } from "lucide-react"

const steps = [
  {
    icon: ClipboardList,
    number: 1,
    title: "Tell Us What Matters",
    description:
      "Answer our 2-minute questionnaire: location, budget, care needs. Takes less time than reading one Google review.",
  },
  {
    icon: Search,
    number: 2,
    title: "We Do the Forensics",
    description:
      "Our team cross-references official regulatory data, operator financial records, and family engagement patterns. 200+ point audit per home.",
  },
  {
    icon: FileText,
    number: 3,
    title: "You Get Clarity",
    description:
      "Receive your report: Free Shortlist within 10 minutes, Professional Analysis within 24 hours. No jargon. No sales calls. Just honest intelligence.",
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-16 sm:py-24 lg:py-32 bg-neutral-50 overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-3 sm:space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground">
            How Our Service Works
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
            From assessment to personalised care home report
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 relative">
            {/* Connector line - hidden on mobile */}
            <div
              className="hidden md:block absolute top-12 left-0 right-0 h-px bg-border z-0"
              style={{ width: "calc(100% - 12rem)", left: "6rem" }}
            />

            {steps.map((step) => {
              const Icon = step.icon
              return (
                <div key={step.number} className="relative z-10">
                  <div className="flex flex-col items-center text-center space-y-5 sm:space-y-6">
                    <div className="relative">
                      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-background shadow-md flex items-center justify-center">
                        <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-primary" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-accent-foreground font-bold text-sm flex items-center justify-center shadow-sm">
                        {step.number}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                        {step.number}. {step.title}
                      </h3>
                      <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xs mx-auto">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
