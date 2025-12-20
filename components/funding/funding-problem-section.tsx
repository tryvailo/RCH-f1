import { AlertCircle, FileQuestion, Clock, Frown } from "lucide-react"

export function FundingProblemSection() {
  const problems = [
    {
      icon: FileQuestion,
      title: "Buried in Bureaucracy",
      description:
        "The official NHS Continuing Healthcare Framework is 80+ pages of legal jargon. The application process is deliberately complex to discourage claims.",
    },
    {
      icon: Clock,
      title: "Time You Don't Have",
      description:
        "Researching eligibility requirements takes 20+ hours of reading contradictory guidance across multiple government websites — while your loved one needs care now.",
    },
    {
      icon: Frown,
      title: "£76,000/Year Lost",
      description:
        "Thousands of families pay privately when they qualify for full NHS funding. Without proper assessment, you'll never know if the state should be paying.",
    },
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-centre space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D17A6F]/10 text-[#D17A6F] text-sm font-semibold">
            <AlertCircle className="w-4 h-4" />
            <span>THE PROBLEM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#1A231E] text-balance">
            Funding Confusion is Costing You Thousands
          </h2>
          <p className="text-lg sm:text-xl text-[#1A231E]/70 text-pretty">
            The government makes it deliberately difficult to discover your entitlements
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-white to-[#F5F3EE] rounded-2xl p-6 lg:p-8 border border-[#E8E5DF] shadow-soft-md hover:shadow-soft-xl transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#D17A6F] to-[#C17A6E] flex items-center justify-centre mb-5 shadow-soft-md group-hover:scale-110 transition-transform duration-300">
                <problem.icon className="w-7 h-7 text-white" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-[#1A231E] mb-3">{problem.title}</h3>
              <p className="text-[#1A231E]/70 leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
