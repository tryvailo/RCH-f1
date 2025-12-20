import { Shield, RotateCcw, Lock, CheckCircle2 } from "lucide-react"

export function FundingGuaranteeSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#4F6F52] to-[#3A5140] text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-centre space-y-6">
          <div className="w-20 h-20 mx-auto rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-centre shadow-soft-xl">
            <Shield className="w-10 h-10 text-white" strokeWidth={2} />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-balance">100% Clarity Guarantee</h2>

          <p className="text-xl sm:text-2xl text-white/90 leading-relaxed text-pretty max-w-2xl mx-auto">
            If our report doesn't give you complete clarity on your funding options, we'll refund every penny. No
            questions asked.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 pt-8">
            {[
              {
                icon: RotateCcw,
                title: "30-Day Refund",
                description: "Don't find it useful? Full refund within 30 days",
              },
              {
                icon: Lock,
                title: "Secure Payment",
                description: "256-bit encryption. Your data is protected",
              },
              {
                icon: CheckCircle2,
                title: "Instant Delivery",
                description: "PDF in your inbox within 60 seconds",
              },
            ].map((item, i) => (
              <div key={i} className="text-centre space-y-3">
                <div className="w-14 h-14 mx-auto rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-centre">
                  <item.icon className="w-7 h-7 text-white" strokeWidth={2} />
                </div>
                <h3 className="font-bold text-lg">{item.title}</h3>
                <p className="text-white/80 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
