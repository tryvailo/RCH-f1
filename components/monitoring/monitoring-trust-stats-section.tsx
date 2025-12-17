import { Shield, Bell, Users, Clock } from "lucide-react"

export function MonitoringTrustStatsSection() {
  const stats = [
    {
      icon: Shield,
      value: "847",
      label: "Issues Detected",
      description: "Critical problems caught before they escalated",
      color: "from-[#4F6F52] to-[#3A5140]",
    },
    {
      icon: Users,
      value: "2,000+",
      label: "Families Protected",
      description: "Across England, monitoring their loved ones daily",
      color: "from-[#C88D79] to-[#B67D6A]",
    },
    {
      icon: Bell,
      value: "< 2 hrs",
      label: "Average Alert Time",
      description: "From detection to family notification",
      color: "from-[#7FAD7E] to-[#6A9B6A]",
    },
    {
      icon: Clock,
      value: "24/7",
      label: "Continuous Monitoring",
      description: "AI never sleeps, never misses a check",
      color: "from-[#1A231E] to-[#2D3832]",
    },
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-white via-[#F8F6F3] to-[#FDFBF7]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1A231E] mb-4 sm:mb-6 text-balance">
            Trusted by Families <span className="text-[#4F6F52]">Across England</span>
          </h2>
          <p className="text-lg sm:text-xl text-[#1A231E]/70 leading-relaxed">
            Real protection, measurable results, complete peace of mind.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="relative group bg-white rounded-2xl p-8 shadow-soft-md hover:shadow-soft-xl transition-all duration-300 border border-[#E8E5DF] hover:border-transparent overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />
                <div className="relative z-10">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-6 shadow-soft-md group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                  </div>
                  <div className="text-4xl sm:text-5xl font-bold text-[#1A231E] mb-2">{stat.value}</div>
                  <div className="text-xl font-semibold text-[#1A231E] mb-3">{stat.label}</div>
                  <p className="text-sm text-[#1A231E]/70 leading-relaxed">{stat.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-soft-md border border-[#E8E5DF]">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-[#4F6F52] to-[#3A5140] border-2 border-white flex items-center justify-center text-white text-xs font-medium"
                >
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <span className="text-[#1A231E]/70 font-medium">Join 2,000+ families who sleep better at night</span>
          </div>
        </div>
      </div>
    </section>
  )
}
