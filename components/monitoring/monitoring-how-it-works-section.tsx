import { Shield, Zap, TrendingUp, Award, CloudRain, Smile } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function MonitoringHowItWorksSection() {
  const transformationStages = [
    {
      icon: Zap,
      title: "Week 1: Quick Win",
      description: "Immediate clarity",
      details:
        "Within days, you'll receive your first comprehensive report showing exactly what's happening at the care home. No more guessing, no more anxiety.",
      timeline: "Day 1-7",
    },
    {
      icon: TrendingUp,
      title: "Month 1: Compound Benefits",
      description: "Patterns emerge",
      details:
        "After your first month, our AI identifies trends invisible to the human eye. You'll spot issues before they become problems.",
      timeline: "Week 2-4",
    },
    {
      icon: Shield,
      title: "Quarter 1: Sustained Advantage",
      description: "Complete confidence",
      details:
        "Three months in, you'll have a comprehensive understanding of care quality. You'll make informed decisions backed by data, not emotion.",
      timeline: "Month 2-3",
    },
    {
      icon: Award,
      title: "Year 1: 10x Peace of Mind",
      description: "Total transformation",
      details:
        "A year of monitoring means you've prevented crises, saved money, and ensured your loved one receives the best possible care. Priceless.",
      timeline: "Month 4-12",
    },
  ]

  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-centre mb-16">
            <Badge className="mb-6 px-4 py-2 bg-primary/10 text-primary border-primary/20">Your Journey</Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
              From Anxiety to Confidence. Your Transformation Timeline.
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              See how families move from constant worry to complete peace of mind in just four stages.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {transformationStages.map((stage, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 border-2 border-border hover:border-primary transition-all hover:shadow-soft-lg relative"
              >
                {/* Timeline badge */}
                <Badge className="absolute -top-3 left-6 bg-primary text-primary-foreground px-4 py-1.5">
                  {stage.timeline}
                </Badge>

                <div className="flex items-start gap-6 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-centre flex-shrink-0">
                    <stage.icon className="w-7 h-7 text-primary" strokeWidth={2} />
                  </div>

                  <div>
                    <h3 className="text-xl font-serif font-bold text-foreground mb-1">{stage.title}</h3>
                    <p className="text-sm text-accent font-semibold mb-3">{stage.description}</p>
                    <p className="text-base text-muted-foreground leading-relaxed">{stage.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Before Card */}
            <div className="bg-gradient-to-br from-destructive/5 to-destructive/10 border-2 border-destructive/20 rounded-2xl p-8 hover:shadow-soft-lg transition-all">
              <div className="flex items-center justify-centre w-16 h-16 rounded-2xl bg-destructive/10 mx-auto mb-6">
                <CloudRain className="w-8 h-8 text-destructive" strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-4 text-centre">Before</h3>
              <p className="text-muted-foreground text-centre leading-relaxed">
                Constant worry, sleepless nights, feeling helpless and uncertain about your loved one's care quality.
              </p>
            </div>

            {/* After Card */}
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/20 rounded-2xl p-8 hover:shadow-soft-lg transition-all">
              <div className="flex items-center justify-centre w-16 h-16 rounded-2xl bg-primary/10 mx-auto mb-6">
                <Smile className="w-8 h-8 text-primary" strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-4 text-centre">After</h3>
              <p className="text-muted-foreground text-centre leading-relaxed">
                Complete confidence, peaceful sleep, empowered with data to ensure your loved one receives excellent
                care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
