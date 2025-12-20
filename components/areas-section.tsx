import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock } from "lucide-react"
import Link from "next/link"

const areas = [
  {
    name: "Birmingham",
    status: "available",
    homes: 277,
    slug: "birmingham",
  },
  {
    name: "Manchester",
    status: "available",
    homes: 245,
    slug: "manchester",
  },
  {
    name: "London",
    status: "available",
    homes: 876,
    slug: "london",
  },
]

export function AreasSection() {
  return (
    <section className="py-20 lg:py-32 bg-[#FDFBF7]">
      <div className="container mx-auto px-4">
        <div className="text-centre max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#1A231E]">Choose Your Area</h2>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {areas.map((area, index) => (
            <Card
              key={index}
              className="p-8 bg-white border-2 border-[#E8E5DF] rounded-3xl shadow-soft-md hover:shadow-soft-xl hover-lift transition-all duration-300"
            >
              <div className="space-y-6">
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#4F6F52]/10 flex items-center justify-centre group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6 text-[#4F6F52]" />
                  </div>
                  {area.status === "available" ? (
                    <Badge className="bg-[#7FAD7E] text-white border-0">AVAILABLE NOW</Badge>
                  ) : (
                    <Badge className="bg-[#E8E5DF] text-[#1A231E]/70 border-0 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      Coming Soon
                    </Badge>
                  )}
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-bold text-[#1A231E] mb-2">{area.name}</h3>
                  {area.homes && <p className="text-base text-[#1A231E]/70">{area.homes} verified homes</p>}
                </div>
                {area.status === "available" ? (
                  <Link href={`/${area.slug}`} className="block">
                    <Button className="w-full h-12 bg-[#4F6F52] hover:bg-[#3A5140] text-white rounded-xl hover:scale-[1.02] transition-all duration-200">
                      View {area.name} Service
                    </Button>
                  </Link>
                ) : (
                  <Button
                    variant="outline"
                    disabled
                    className="w-full h-12 border-2 border-[#E8E5DF] text-[#1A231E]/50 rounded-xl bg-transparent"
                  >
                    Notify Me
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
