import { Card } from "@/components/ui/card"
import { TrendingUp, Home, Star, DollarSign } from "lucide-react"

const stats = [
  {
    icon: Home,
    value: "876",
    label: "Verified Care Homes",
    description: "Across all 32 London boroughs",
  },
  {
    icon: Star,
    value: "4.3/5",
    label: "Average Quality Rating",
    description: "Based on CQC inspections",
  },
  {
    icon: DollarSign,
    value: "£1,850",
    label: "Average Weekly Cost",
    description: "For residential care in London",
  },
  {
    icon: TrendingUp,
    value: "22%",
    label: "Price Variation",
    description: "Between similar quality homes",
  },
]

export function LondonStatsSection() {
  return (
    <section className="py-16 lg:py-24 bg-primary/5 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground">
            London Care Home Market
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Understanding the capital's diverse landscape helps you make better decisions
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-2 border-border rounded-2xl shadow-soft hover:shadow-soft-md transition-all"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-primary" strokeWidth={2} />
                </div>
                <div>
                  <div className="text-3xl font-serif font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-base font-semibold text-foreground mb-1">{stat.label}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{stat.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
