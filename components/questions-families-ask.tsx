import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { HelpCircle, ArrowRight, Shield, PoundSterling, Users } from "lucide-react"
import Link from "next/link"

const questions = [
  {
    question: "Will Mum be safe there?",
    subtext: "We analyse financial stability, staff retention and safety records",
    icon: Shield,
    colour: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    question: "Can we actually afford this?",
    subtext: "We check NHS & Council funding eligibility and find hidden costs",
    icon: PoundSterling,
    colour: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    question: "How do I know it's the right choice?",
    subtext: "We compare 200+ data points so you can decide with confidence",
    icon: HelpCircle,
    colour: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    question: "What if the family disagrees?",
    subtext: "Share your report with up to 5 family members for joint decisions",
    icon: Users,
    colour: "text-primary",
    bgColor: "bg-primary/10",
  },
]

export function QuestionsFamiliesAsk() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-muted">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-centre max-w-3xl mx-auto mb-10 sm:mb-16 space-y-3 sm:space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground">
            The Questions Every Family Asks
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            We understand what keeps you up at night. Our analysis answers these questions.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto mb-10 sm:mb-12">
          {questions.map((item, i) => {
            const Icon = item.icon
            return (
              <Card
                key={i}
                className="p-6 sm:p-8 rounded-2xl bg-card border border-border/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl ${item.bgColor} flex items-center justify-centre flex-shrink-0`}
                  >
                    <Icon className={`w-6 h-6 ${item.colour}`} />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-serif font-bold text-foreground mb-2">"{item.question}"</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">{item.subtext}</p>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        <div className="text-centre">
          <Button
            size="lg"
            asChild
            className="h-14 px-8 text-lg bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl shadow-lg shadow-primary/20 transition-all hover:scale-105"
          >
            <Link href="/free-assessment">
              Get Answers Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <p className="text-sm text-muted-foreground mt-3">Free assessment. No obligation.</p>
        </div>
      </div>
    </section>
  )
}
