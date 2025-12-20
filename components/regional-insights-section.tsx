import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Info, BarChart3, Users, Layout } from "lucide-react"

interface RegionalInsightsSectionProps {
    title: string
    items: {
        label: string
        value: string
        description: string
    }[]
}

const icons = [Users, BarChart3, Layout, Info]

export function RegionalInsightsSection({ title, items }: RegionalInsightsSectionProps) {
    return (
        <section className="py-20 lg:py-32 bg-primary/5">
            <div className="container mx-auto px-4">
                <div className="text-centre max-w-3xl mx-auto mb-16 space-y-4">
                    <Badge className="bg-primary/10 text-primary border-0 px-4 py-2 text-sm font-semibold">
                        EXPERT ANALYSIS
                    </Badge>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground">
                        {title}
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                        Data-driven insights to help you understand the local care landscape
                    </p>
                </div>

                <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
                    {items.map((item, index) => {
                        const Icon = icons[index % icons.length]
                        return (
                            <Card
                                key={index}
                                className="p-8 bg-card border-2 border-border rounded-3xl shadow-soft hover:shadow-soft-lg transition-all"
                            >
                                <div className="space-y-6">
                                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-centre">
                                        <Icon className="w-8 h-8 text-primary" strokeWidth={2} />
                                    </div>
                                    <div className="space-y-2">
                                        <div className="text-sm font-bold text-primary uppercase tracking-wider">{item.label}</div>
                                        <div className="text-4xl font-serif font-bold text-foreground">{item.value}</div>
                                        <p className="text-base text-muted-foreground leading-relaxed">{item.description}</p>
                                    </div>
                                </div>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
