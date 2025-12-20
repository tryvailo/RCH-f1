import { FileText, CheckCircle2, TrendingUp, Users, AlertTriangle } from "lucide-react"

export function FundingReportSection() {
  const reportSections = [
    {
      icon: CheckCircle2,
      title: "CHC Eligibility Assessment",
      points: [
        "Likelihood score (Low / Medium / High)",
        "Which domains you score in",
        "Exact evidence needed for your application",
      ],
    },
    {
      icon: TrendingUp,
      title: "Local Authority Funding Analysis",
      points: [
        "Means test result based on your assets",
        "Property disregard scenarios",
        "Deferred payment agreement eligibility",
      ],
    },
    {
      icon: Users,
      title: "Your Personalised Next Steps",
      points: [
        "Exact forms to request from your ICB",
        "Timeline for the assessment process",
        "How to prepare for the MDT meeting",
      ],
    },
    {
      icon: AlertTriangle,
      title: "Financial Protection Advice",
      points: [
        "Backdating potential if you qualify",
        "How to prevent local authority charges",
        "When to involve a specialist solicitor",
      ],
    },
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-centre space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C88D79]/10 text-[#C88D79] text-sm font-semibold">
            <FileText className="w-4 h-4" />
            <span>YOUR REPORT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#1A231E] text-balance">
            What You'll Get
          </h2>
          <p className="text-lg sm:text-xl text-[#1A231E]/70 text-pretty">
            Choose your assessment level. Instant PDF delivered to your email.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12">
            <div className="rounded-xl border-2 border-[#E8E5DF] bg-white p-4 text-centre">
              <div className="text-2xl font-bold text-[#4F6F52]">£19.99</div>
              <div className="text-sm font-semibold text-[#1A231E] mt-1">Quick Assessment</div>
              <div className="text-xs text-[#1A231E]/60 mt-2">
                Instant probability • Council lookup • 48-hour support
              </div>
            </div>
            <div className="rounded-xl border-2 border-[#4F6F52] bg-gradient-to-br from-[#4F6F52]/5 to-[#7FAD7E]/5 p-4 text-centre ring-1 ring-[#4F6F52]/20">
              <div className="text-2xl font-bold text-[#4F6F52]">£119</div>
              <div className="text-sm font-semibold text-[#1A231E] mt-1">Professional Report ⭐ Recommended</div>
              <div className="text-xs text-[#1A231E]/60 mt-2">
                Everything above + appeal guidance + negotiation scripts
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {reportSections.map((section, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#FDFBF7] to-white rounded-2xl p-6 lg:p-8 border border-[#E8E5DF] shadow-soft-md hover:shadow-soft-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#4F6F52] to-[#3A5140] flex items-center justify-centre flex-shrink-0 shadow-soft-md">
                    <section.icon className="w-6 h-6 text-white" strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-bold text-[#1A231E] mt-2">{section.title}</h3>
                </div>
                <ul className="space-y-2.5 ml-16">
                  {section.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#7FAD7E] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                      <span className="text-[#1A231E]/80 text-sm leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
