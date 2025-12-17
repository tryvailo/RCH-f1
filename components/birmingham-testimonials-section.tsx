import { Card } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Margaret Thompson",
    location: "Edgbaston, Birmingham",
    rating: 5,
    text: "Finding a care home for my mother in Birmingham felt overwhelming until I used RightCareHome. The detailed analysis of local homes helped us find a wonderful place in Edgbaston that's close to family.",
    result: "Saved £890/month compared to first choice",
  },
  {
    name: "David Patel",
    location: "Sutton Coldfield, Birmingham",
    rating: 5,
    text: "The Birmingham-specific insights were invaluable. We learned about staffing issues at one highly-rated home and found a better option in Sutton Coldfield with excellent care standards.",
    result: "Found hidden staffing red flags",
  },
  {
    name: "Jennifer Clarke",
    location: "Solihull, Birmingham",
    rating: 5,
    text: "As a Birmingham resident, I thought I knew the local care homes. RightCareHome's analysis revealed cost differences I never would have discovered on my own. Absolutely worth it.",
    result: "Discovered £1,200/month savings opportunity",
  },
]

export function BirminghamTestimonialsSection() {
  return (
    <section className="py-20 lg:py-32 bg-primary/5 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground">
            Birmingham Families Trust Us
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Real stories from families who found the right care home in Birmingham
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 bg-card border-2 border-border rounded-3xl shadow-soft hover:shadow-soft-lg transition-all relative"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/10" />
              <div className="space-y-6 relative">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-base text-muted-foreground leading-relaxed italic">"{testimonial.text}"</p>

                <div className="pt-4 border-t border-border">
                  <div className="font-semibold text-foreground text-lg">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                </div>

                <div className="bg-primary/10 rounded-xl p-4">
                  <div className="text-sm font-semibold text-primary">{testimonial.result}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
