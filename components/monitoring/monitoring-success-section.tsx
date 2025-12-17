import { CheckCircle2, Mail, Calendar, Shield } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function MonitoringSuccessSection() {
  const deliverables = [
    {
      icon: Mail,
      title: "Welcome Email",
      description: "Detailed setup guide in your inbox within minutes",
    },
    {
      icon: Calendar,
      title: "First Report",
      description: "Comprehensive care home analysis within 7 days",
    },
    {
      icon: Shield,
      title: "24/7 Monitoring",
      description: "Immediate SMS alerts for any issues detected",
    },
  ]

  return (
    <section className="py-20 bg-accent/5 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/20 mb-6">
              <CheckCircle2 className="w-12 h-12 text-accent" strokeWidth={2.5} />
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Welcome to Peace of Mind
            </h2>

            <p className="text-lg text-muted-foreground mb-8">
              You've made an excellent decision. Here's exactly what happens next:
            </p>

            <Badge className="bg-accent/10 text-accent border-accent/20 px-6 py-2 text-base">
              Your monitoring starts immediately
            </Badge>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {deliverables.map((item, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 border-2 border-border hover:border-accent/50 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-accent" strokeWidth={2} />
                </div>

                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-primary/5 rounded-xl border-2 border-primary/20 text-center">
            <p className="text-base text-foreground">
              <span className="font-semibold">No buyer's remorse guarantee:</span> If you're not completely satisfied
              within 30 days, we'll refund every penny. No questions asked.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
