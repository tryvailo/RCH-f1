import { AlertTriangle, TrendingDown, Users, ShieldAlert } from "lucide-react"

export function MonitoringWhyMattersSection() {
  const stats = [
    {
      icon: AlertTriangle,
      value: "1 in 4",
      label: "Care homes have financial issues",
      description: "Without monitoring, you won't know until it's too late",
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
    {
      icon: TrendingDown,
      value: "£8,500",
      label: "Average family loss from closures",
      description: "Moving costs, deposits, and emotional toll add up fast",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      icon: Users,
      value: "40%",
      label: "Staff turnover in struggling homes",
      description: "High turnover directly impacts quality of care",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
    },
    {
      icon: ShieldAlert,
      value: "68%",
      label: "Families miss warning signs",
      description: "Issues are invisible until a crisis happens",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#FDFBF7] to-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1A231E] mb-4 sm:mb-6 text-balance">
            Why This <span className="text-[#4F6F52]">Really Matters</span>
          </h2>
          <p className="text-lg sm:text-xl text-[#1A231E]/70 leading-relaxed text-pretty">
            Without professional monitoring, families face devastating surprises. Here's what the data shows:
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-soft-md hover:shadow-soft-lg transition-all duration-300 border border-[#E8E5DF] hover:border-[#4F6F52]/30 group"
              >
                <div className={`w-14 h-14 rounded-2xl ${stat.bgColor} flex items-center justify-center mb-4`}>
                  <Icon className={`w-7 h-7 ${stat.color}`} strokeWidth={2} />
                </div>
                <div className="mb-2">
                  <div className={`text-4xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                  <div className="text-lg font-semibold text-[#1A231E]">{stat.label}</div>
                </div>
                <p className="text-sm text-[#1A231E]/70 leading-relaxed">{stat.description}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-12 sm:mt-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#4F6F52] to-[#3A5140] rounded-2xl p-8 sm:p-10 text-white text-center shadow-soft-xl">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold mb-4">The Cost of Waiting</h3>
            <p className="text-lg sm:text-xl text-white/90 mb-6 leading-relaxed">
              By the time most families notice problems, they've already lost thousands of pounds and months of peace of
              mind. Professional monitoring catches issues early—when they're still fixable.
            </p>
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
              <ShieldAlert className="w-5 h-5" />
              <span className="font-semibold">Don't wait for a crisis. Start monitoring today.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
