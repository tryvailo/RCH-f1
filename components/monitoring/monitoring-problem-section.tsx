import { TrendingDown, Users, AlertCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function MonitoringProblemSection() {
  const problems = [
    {
      icon: AlertCircle,
      title: "Hidden Financial Risks",
      description:
        "30% of care homes in the UK are in financial distress. Sudden closure can be devastating for your family. We analyse financial reports to warn you 6-12 months in advance.",
    },
    {
      icon: Users,
      title: "Staff Turnover & Burnout",
      description:
        "High staff turnover directly correlates with declining care quality. We track employee reviews and staff morale to identify early warning signs of problems.",
    },
    {
      icon: TrendingDown,
      title: "Infrequent & Outdated Inspections",
      description:
        "Official inspections are rare and their results reflect the past. Our AI model analyses data in real-time to predict future quality of care.",
    },
  ]

  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-centre mb-16">
            <Badge className="mb-6 px-4 py-2 bg-destructive/10 text-destructive border-destructive/20">
              Important to Know
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
              You Trust the Care Home with Your Most Precious. But Are You 100% Sure?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 border-2 border-border hover:border-primary/30 transition-all hover:shadow-soft-lg group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-centre mb-6 group-hover:scale-110 transition-transform">
                  <problem.icon className="w-7 h-7 text-primary" strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-serif font-bold text-foreground mb-4">{problem.title}</h3>
                <p className="text-base text-muted-foreground leading-relaxed">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
