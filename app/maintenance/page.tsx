import { ShieldCheck } from "lucide-react"

export const metadata = {
  title: "Under Maintenance | RightCareHome",
  description: "We're performing scheduled maintenance to improve your experience.",
}

export default function MaintenancePage() {
  return (
    <main className="min-h-screen bg-[#FDFBF7] flex items-center justify-centre px-4">
      <div className="max-w-2xl text-centre">
        <div className="flex justify-centre mb-8">
          <div className="w-20 h-20 rounded-2xl bg-[#4F6F52] flex items-center justify-centre shadow-xl">
            <ShieldCheck className="w-12 h-12 text-white" strokeWidth={2.5} />
          </div>
        </div>
        <h1 className="text-5xl font-serif font-bold text-[#1A231E] mb-6">Under Maintenance</h1>
        <p className="text-xl text-[#5C6B5E] mb-4 leading-relaxed">
          We're performing scheduled maintenance to improve your experience.
        </p>
        <p className="text-lg text-[#5C6B5E] leading-relaxed">
          We'll be back online shortly. Thank you for your patience.
        </p>
        <div className="mt-12 pt-8 border-t border-[#E8E3DB]">
          <p className="text-[#5C6B5E]">
            Need urgent help?{" "}
            <a href="mailto:hello@rightcarehome.com" className="text-[#4F6F52] font-semibold hover:underline">
              Email us
            </a>
          </p>
        </div>
      </div>
    </main>
  )
}
