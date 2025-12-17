import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Star, Shield, DollarSign } from "lucide-react"

const neighborhoods = [
  {
    name: "Kensington & Chelsea",
    homes: 45,
    avgCost: "£2,850",
    avgRating: 4.7,
    highlight: "Premium central",
  },
  {
    name: "Richmond",
    homes: 62,
    avgCost: "£2,200",
    avgRating: 4.6,
    highlight: "Riverside setting",
  },
  {
    name: "Hampstead",
    homes: 38,
    avgCost: "£2,400",
    avgRating: 4.5,
    highlight: "Historic charm",
  },
  {
    name: "Greenwich",
    homes: 54,
    avgCost: "£1,650",
    avgRating: 4.3,
    highlight: "Heritage location",
  },
  {
    name: "Bromley",
    homes: 78,
    avgCost: "£1,450",
    avgRating: 4.2,
    highlight: "Great value",
  },
  {
    name: "Croydon",
    homes: 85,
    avgCost: "£1,350",
    avgRating: 4.1,
    highlight: "Affordable quality",
  },
]

export function LondonCareHomesSection() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge className="bg-accent text-accent-foreground border-0 px-4 py-2 text-sm font-semibold">
            LOCAL EXPERTISE
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground">
            Care Homes by London Borough
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            We've analyzed every care home across London's boroughs to help you find the perfect location
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {neighborhoods.map((area, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-2 border-border rounded-2xl shadow-soft hover:shadow-soft-md transition-all group"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6 text-primary" strokeWidth={2} />
                  </div>
                  <Badge className="bg-primary/10 text-primary border-0">{area.highlight}</Badge>
                </div>

                <div>
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-1">{area.name}</h3>
                  <p className="text-sm text-muted-foreground">{area.homes} care homes available</p>
                </div>

                <div className="space-y-2 pt-2 border-t border-border">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground flex items-center gap-1">
                      <DollarSign className="w-4 h-4" />
                      Avg. Weekly Cost
                    </span>
                    <span className="font-semibold text-foreground">{area.avgCost}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      Avg. Rating
                    </span>
                    <span className="font-semibold text-foreground flex items-center gap-1">
                      {area.avgRating}
                      <span className="text-muted-foreground">/5</span>
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 max-w-3xl mx-auto bg-primary/5 border-2 border-primary/20 rounded-2xl p-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
              <Shield className="w-6 h-6 text-primary-foreground" strokeWidth={2} />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-serif font-bold text-foreground">All 876 Homes Verified</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Every care home in our London database has been verified against CQC records, with up-to-date inspection
                reports, staffing levels, and pricing information across all 32 boroughs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
