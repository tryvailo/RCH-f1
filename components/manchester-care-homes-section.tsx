import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Star } from "lucide-react"

const neighborhoods = [
  {
    name: "Didsbury",
    homes: 18,
    avgPrice: "£1,350",
    rating: 4.6,
    description: "Leafy suburbs with excellent transport links",
  },
  {
    name: "Chorlton",
    homes: 15,
    avgPrice: "£1,280",
    rating: 4.5,
    description: "Village feel with vibrant community",
  },
  {
    name: "Sale",
    homes: 22,
    avgPrice: "£1,150",
    rating: 4.4,
    description: "Family-friendly area with good amenities",
  },
  {
    name: "Altrincham",
    homes: 20,
    avgPrice: "£1,400",
    rating: 4.7,
    description: "Market town with premium care facilities",
  },
  {
    name: "Stockport",
    homes: 28,
    avgPrice: "£1,050",
    rating: 4.3,
    description: "Value-focused with great NHS links",
  },
  {
    name: "Salford Quays",
    homes: 12,
    avgPrice: "£1,320",
    rating: 4.5,
    description: "Modern waterfront developments",
  },
]

export function ManchesterCareHomesSection() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">LOCAL INSIGHTS</Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground">
            Manchester Neighborhoods
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Explore care options across Greater Manchester's most popular areas
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {neighborhoods.map((neighborhood, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-2 border-border rounded-3xl shadow-soft hover:shadow-soft-lg transition-all group"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <MapPin className="w-6 h-6 text-primary" strokeWidth={2} />
                  </div>
                  <div className="flex items-center gap-1 bg-amber-50 px-3 py-1 rounded-full">
                    <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                    <span className="text-sm font-semibold text-amber-700">{neighborhood.rating}</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-2">{neighborhood.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{neighborhood.description}</p>
                  <div className="flex items-center justify-between pt-3 border-t border-border">
                    <div>
                      <div className="text-xs text-muted-foreground">Homes Available</div>
                      <div className="text-lg font-bold text-foreground">{neighborhood.homes}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-muted-foreground">Avg. Weekly</div>
                      <div className="text-lg font-bold text-primary">{neighborhood.avgPrice}</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
