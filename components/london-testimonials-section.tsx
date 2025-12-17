import { Card } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Elizabeth Hartley",
    location: "Kensington, London",
    rating: 5,
    text: "The London report was invaluable. We discovered that a £3,200/week home had hidden staffing issues. Found a superior option in Richmond for £2,100/week instead.",
    result: "Saved £1,100/week vs initial choice",
  },
  {
    name: "Michael Chen",
    location: "Greenwich, London",
    rating: 5,
    text: "Navigating 876 London care homes seemed impossible. RightCareHome's analysis narrowed it to 5 perfect matches near family in Greenwich. Mum settled in within days.",
    result: "Found 5 perfect matches from 876 homes",
  },
  {
    name: "Susan Williams",
    location: "Hampstead, London",
    rating: 5,
    text: "The Fair Cost analysis revealed we were being quoted £800/week above market rate. Found exceptional care in Hampstead and saved over £40,000 annually.",
    result: "Discovered £40,000/year savings",
  },
]

export function LondonTestimonialsSection() {
  return (
    <section className="py-20 lg:py-32 bg-primary/5 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground">
            London Families Trust Us
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Real stories from families who found the right care home in London
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
