import { Card } from "@/components/ui/card"
import { TrendingUp, Home, DollarSign, Award } from "lucide-react"

const stats = [
  {
    icon: Home,
    value: "245",
    label: "Verified Homes",
    description: "Across Greater Manchester",
  },
  {
    icon: DollarSign,
    value: "£1,180",
    label: "Average Weekly Cost",
    description: "Residential Care",
  },
  {
    icon: TrendingUp,
    value: "12%",
    label: "Price Increase",
    description: "Year-on-year growth",
  },
  {
    icon: Award,
    value: "87%",
    label: "Good or Outstanding",
    description: "CQC Ratings",
  },
]

export function ManchesterStatsSection() {
  return (
    <section className="py-16 lg:py-24 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground">
            Manchester Care Market Overview
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Understanding the local care landscape helps you make informed decisions
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
                  <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm font-semibold text-foreground mb-1">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.description}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
