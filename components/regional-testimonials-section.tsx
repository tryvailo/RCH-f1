import { Card } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import type { CityTestimonial } from "@/lib/data/city-config"

interface RegionalTestimonialsSectionProps {
    region: string
    testimonials: CityTestimonial[]
}

export function RegionalTestimonialsSection({ region, testimonials }: RegionalTestimonialsSectionProps) {
    return (
        <section className="py-20 lg:py-32 bg-primary/5 border-y border-border">
            <div className="container mx-auto px-4">
                <div className="text-centre max-w-3xl mx-auto mb-16 space-y-4">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground">
                        {region} Families Trust Us
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                        Real stories from families who found the right care home in {region}
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

                                <p className="text-base text-muted-foreground leading-relaxed italic">"{testimonial.quote}"</p>

                                <div className="pt-4 border-t border-border">
                                    <div className="font-semibold text-foreground text-lg">{testimonial.name}</div>
                                    <div className="text-sm text-muted-foreground">
                                        {testimonial.relation}, {testimonial.area}
                                    </div>
                                </div>

                                {testimonial.verified && (
                                    <div className="bg-primary/10 rounded-xl p-4">
                                        <div className="text-sm font-semibold text-primary">Verified Review</div>
                                    </div>
                                )}
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
