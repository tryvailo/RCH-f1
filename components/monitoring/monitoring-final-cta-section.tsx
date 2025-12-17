import { Button } from "@/components/ui/button"
import { Shield } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function MonitoringFinalCTASection() {
  const familyAvatars = [
    "/british-woman-senior.jpg",
    "/british-man-senior.jpg",
    "/british-woman-middle-aged.jpg",
    "/british-man-middle-aged.jpg",
  ]

  return (
    <section className="py-20 lg:py-32 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6 -space-x-4">
            {familyAvatars.map((avatar, i) => (
              <Image
                key={i}
                src={avatar || "/placeholder.svg"}
                alt="Family member"
                width={48}
                height={48}
                className="rounded-full border-4 border-primary"
              />
            ))}
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-6 text-balance">
            Ready to Protect Your Loved One with Confidence?
          </h2>

          <p className="text-lg sm:text-xl mb-8 leading-relaxed opacity-90 text-pretty">
            Join 2,000+ families who sleep soundly knowing their loved ones are safe. Try the full functionality of our
            Premium plan for 30 days absolutely free. If you don't feel more confident, simply cancel.
          </p>

          <Button
            asChild
            size="lg"
            className="h-16 px-12 bg-white hover:bg-white/90 text-primary font-bold text-lg rounded-xl shadow-soft-xl hover:scale-[1.02] transition-all mb-6"
          >
            <Link href="#pricing">Get 30 Days of Peace Free</Link>
          </Button>

          <div className="flex items-center justify-center gap-3 text-sm opacity-90">
            <Shield className="w-5 h-5" />
            <span>30-day peace of mind guarantee. 100% free. Cancel anytime.</span>
          </div>
        </div>
      </div>
    </section>
  )
}
