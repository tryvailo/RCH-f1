import { Card } from "@/components/ui/card"
import { Quote, Star } from "lucide-react"

const testimonials = [
  {
    name: "David & Christine M.",
    location: "Didsbury",
    text: "Finding a home for my mother in Manchester felt overwhelming. RightCareHome's local knowledge was invaluable - they knew which homes had the best dementia care teams in South Manchester.",
    rating: 5,
  },
  {
    name: "Patricia L.",
    location: "Altrincham",
    text: "The detailed report highlighted concerns about staff turnover at two homes I was considering. We chose a third option and it's been perfect. Worth every penny.",
    rating: 5,
  },
  {
    name: "James & Susan T.",
    location: "Sale",
    text: "As a Manchester family, we appreciated the focus on local transport links and NHS partnerships. Made visiting dad so much easier.",
    rating: 5,
  },
]

export function ManchesterTestimonialsSection() {
  return (
    <section className="py-20 lg:py-32 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground">
            Manchester Families Trust Us
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Real stories from families across Greater Manchester
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 bg-card border-2 border-border rounded-3xl shadow-soft hover:shadow-soft-md transition-all"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <Quote className="w-10 h-10 text-primary/20" />
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
                    ))}
                  </div>
                </div>
                <p className="text-base text-muted-foreground leading-relaxed italic">"{testimonial.text}"</p>
                <div className="pt-4 border-t border-border">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}, Manchester</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
