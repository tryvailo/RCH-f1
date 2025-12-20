import { ClipboardList, Cpu, FileText } from "lucide-react"

export function FundingHowItWorksSection() {
  const steps = [
    {
      number: "01",
      icon: ClipboardList,
      title: "3 Minutes: Health Assessment (CHC Engine)",
      description:
        "8 DST-based health questions. Real-time probability indicator showing your domain scoring across Behaviour, Cognition, Consciousness, etc.",
    },
    {
      number: "02",
      icon: Cpu,
      title: "4 Minutes: Financial Details (LA Means Test)",
      description:
        "Capital and income assessment. Property and disregards modeling. Shows your means test category and potential weekly contribution.",
    },
    {
      number: "03",
      icon: FileText,
      title: "3 Minutes: Property & Goals (DPA Assessment)",
      description:
        "Property disregard eligibility. Maximum deferred payment loan calculation. Clarifies if your home stays protected while care is funded.",
    },
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#FDFBF7] to-[#F5F3EE]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-centre space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#7FAD7E]/10 text-[#4F6F52] text-sm font-semibold">
            <span>HOW IT WORKS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#1A231E] text-balance">
            From Confusion to Clarity in 3 Steps
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-[#7FAD7E]/20 via-[#7FAD7E]/40 to-[#7FAD7E]/20" />

          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-2xl p-8 border border-[#E8E5DF] shadow-soft-lg hover:shadow-soft-xl transition-all duration-300">
                {/* Step Number */}
                <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-gradient-to-br from-[#4F6F52] to-[#3A5140] flex items-center justify-centre text-white font-bold text-lg shadow-soft-md">
                  {step.number}
                </div>

                <div className="mt-6 space-y-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#7FAD7E] to-[#6B9D6A] flex items-center justify-centre shadow-soft-md">
                    <step.icon className="w-8 h-8 text-white" strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-bold text-[#1A231E]">{step.title}</h3>
                  <p className="text-[#1A231E]/70 leading-relaxed">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
