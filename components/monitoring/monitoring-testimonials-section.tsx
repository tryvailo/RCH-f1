import { Quote, Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export function MonitoringTestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Thanks to RightCareHome, we learned about the care home's financial problems six months before it made the news. We managed to transfer Dad to a more reliable place without stress. This service is invaluable.",
      author: "Sarah Johnson",
      location: "Manchester",
      result: "Saved £2,400 in crisis relocation costs",
      rating: 5,
      avatar: "/british-woman-60.jpg",
    },
    {
      quote:
        "I live in another country and used to feel completely helpless. Monthly reports give me the full picture and confidence that Mum is being cared for. Finally, I sleep soundly.",
      author: "Mark Williams",
      location: "Dubai (Family in London)",
      result: "Peace of mind across 3,500 miles",
      rating: 5,
      avatar: "/british-man-45.jpg",
    },
    {
      quote:
        "Received an SMS alert about a sharp drop in hygiene rating. Immediately contacted management, and the problem was resolved within a week. Without this, we wouldn't have known.",
      author: "Emily Roberts",
      location: "London",
      result: "Caught health risk within 24 hours",
      rating: 5,
      avatar: "/british-woman-55.jpg",
    },
  ]

  return (
    <section className="py-20 lg:py-32 bg-background border-y border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-centre mb-16">
            <Badge className="mb-6 px-4 py-2 bg-primary/10 text-primary border-primary/20">Client Reviews</Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mb-4 text-balance">
              Thousands of Families Already Trust Us with What Matters Most.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 border-2 border-border hover:border-primary/30 transition-all hover:shadow-soft-lg relative"
              >
                <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/10" />

                {/* Rating stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                  ))}
                </div>

                <blockquote className="text-base text-foreground leading-relaxed mb-6 relative z-10">
                  "{testimonial.quote}"
                </blockquote>

                <div className="flex items-start gap-4 mb-4">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.author}
                    width={60}
                    height={60}
                    className="rounded-full border-2 border-border"
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                  </div>
                </div>

                <div className="bg-accent/10 rounded-xl p-4 border border-accent/20">
                  <div className="text-sm font-semibold text-accent">{testimonial.result}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Media mentions */}
          <div className="mt-16 text-centre">
            <p className="text-sm text-muted-foreground mb-6">As Featured In</p>
            <div className="flex flex-wrap justify-centre items-center gap-8 opacity-60">
              <div className="text-2xl font-serif font-bold text-foreground">BBC</div>
              <div className="text-2xl font-serif font-bold text-foreground">The Guardian</div>
              <div className="text-2xl font-serif font-bold text-foreground">Forbes</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
