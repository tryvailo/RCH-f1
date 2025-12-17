export function ReportSocialProof() {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-[#FDFBF7] via-white to-[#F8F6F3]">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1A231E] mb-3">
            Families Who've Been in Your Shoes
          </h2>
          <p className="text-base md:text-lg text-[#1A231E]/70 max-w-2xl mx-auto">
            Real stories from families who used our analysis to make confident decisions
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8">
          {/* Testimonial 1 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-[#4F6F52]/10 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#4F6F52] to-[#3d5941] flex items-center justify-center text-white font-serif text-xl flex-shrink-0">
                MR
              </div>
              <div>
                <h3 className="font-semibold text-[#1A231E] text-lg">Margaret R.</h3>
                <p className="text-sm text-[#1A231E]/60">Daughter, Birmingham</p>
              </div>
            </div>
            <p className="text-[#1A231E]/80 leading-relaxed mb-4">
              "The free report showed us three homes we'd never found on our own. The 'Safe Bet' recommendation saved us
              from a home that looked perfect but had hidden financial problems. Worth its weight in gold."
            </p>
            <div className="flex items-center gap-2 text-[#4F6F52] font-semibold">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Avoided a £15,000 mistake</span>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-[#4F6F52]/10 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#C88D79] to-[#a67360] flex items-center justify-center text-white font-serif text-xl flex-shrink-0">
                JT
              </div>
              <div>
                <h3 className="font-semibold text-[#1A231E] text-lg">James T.</h3>
                <p className="text-sm text-[#1A231E]/60">Son, Manchester</p>
              </div>
            </div>
            <p className="text-[#1A231E]/80 leading-relaxed mb-4">
              "I was overwhelmed by 50+ care homes in my area. The shortlist gave us three strategic options with clear
              reasons why each one matched Dad's needs. We visited all three and chose the 'Smart Value' option."
            </p>
            <div className="flex items-center gap-2 text-[#4F6F52] font-semibold">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Saved weeks of research</span>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="bg-gradient-to-r from-[#4F6F52] to-[#3d5941] rounded-xl p-6 md:p-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1">4.8/5</div>
              <div className="text-sm text-white/80">Average rating from 200+ families</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1">£12,400</div>
              <div className="text-sm text-white/80">Average savings identified</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1">89%</div>
              <div className="text-sm text-white/80">Choose one of our top 3 recommendations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { ReportSocialProof as default }
