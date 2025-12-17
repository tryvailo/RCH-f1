"use client"

import {
  Phone,
  MapPin,
  Star,
  TrendingUp,
  Clock,
  CheckCircle,
  ArrowRight,
  FileText,
  Home,
  PoundSterling,
  Clock3,
  Users,
  Shield,
} from "lucide-react"
import { formatCurrency, safeArray, safeFirst } from "@/lib/safe-data"

interface CareHomeRecommendation {
  rank: number
  name: string
  overallScore: number
  topStrength: string
  strengthDetail: string
  phoneNumber?: string
  waitingList?: string
  weeklyFee: number
  address?: string
}

interface ProExecutiveSummaryProps {
  recommendations?: CareHomeRecommendation[]
  userName?: string
  location?: string
  topActionTitle?: string
  topActionDetail?: string
  homesCount?: number
  dataPoints?: number
  pages?: number
}

const DEFAULT_RECOMMENDATION = {
  rank: 1,
  name: "Care Home",
  overallScore: 0,
  topStrength: "Quality Care",
  strengthDetail: "Details pending",
  phoneNumber: "",
  waitingList: "",
  weeklyFee: 0,
  address: "",
}

export function ProExecutiveSummary({
  recommendations = [
    {
      rank: 1,
      name: "Greenfield Manor",
      overallScore: 91,
      topStrength: "Highest Safety Score",
      strengthDetail: "Zero CQC concerns, 98% medication accuracy",
      phoneNumber: "0121 456 7890",
      waitingList: "2-3 weeks typical",
      weeklyFee: 1250,
      address: "123 Oak Lane, Birmingham B15 2TT",
    },
    {
      rank: 2,
      name: "Oakwood Lodge",
      overallScore: 86,
      topStrength: "Best Staff Quality",
      strengthDetail: "4.8 Glassdoor rating, 12% turnover (vs 30% avg)",
      phoneNumber: "0121 789 0123",
      waitingList: "1-2 weeks",
      weeklyFee: 1180,
      address: "45 Maple Avenue, Birmingham B16 9QR",
    },
    {
      rank: 3,
      name: "Riverside Care Home",
      overallScore: 77,
      topStrength: "Best Value",
      strengthDetail: "15% below regional average, no hidden fees",
      phoneNumber: "0121 234 5678",
      waitingList: "Available now",
      weeklyFee: 980,
      address: "78 River Road, Birmingham B17 0AB",
    },
  ],
  userName = "your family",
  location = "Birmingham",
  topActionTitle = "Your Next Step",
  topActionDetail = "Call Greenfield Manor today to schedule a visit",
  homesCount = 5,
  dataPoints = 102,
  pages = 24,
}: ProExecutiveSummaryProps) {
  const safeRecommendations = safeArray(recommendations, [DEFAULT_RECOMMENDATION])
  const topRecommendation = safeFirst(safeRecommendations, DEFAULT_RECOMMENDATION)

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-[#27AE60]"
    if (score >= 60) return "text-[#F2994A]"
    return "text-[#EB5757]"
  }

  const getScoreBgColor = (score: number) => {
    if (score >= 80) return "bg-[#27AE60]"
    if (score >= 60) return "bg-[#F2994A]"
    return "bg-[#EB5757]"
  }

  const getRankBadge = (rank: number) => {
    switch (rank) {
      case 1:
        return { bg: "bg-[#FFD700]", text: "text-[#1A231E]", label: "Top Choice" }
      case 2:
        return { bg: "bg-[#C0C0C0]", text: "text-[#1A231E]", label: "Runner-up" }
      case 3:
        return { bg: "bg-[#CD7F32]", text: "text-white", label: "Alternative" }
      default:
        return { bg: "bg-[#E8E5DF]", text: "text-[#1A231E]", label: `#${rank}` }
    }
  }

  const valueSummaryItems = [
    { icon: Home, label: `${homesCount} Care Homes Compared`, value: "In-depth" },
    { icon: FileText, label: `${dataPoints} Data Points`, value: "Per home" },
    { icon: PoundSterling, label: "£5,000–£7,000", value: "Consultancy value" },
    { icon: Clock3, label: "6+ Weeks", value: "Research saved" },
    { icon: Users, label: "Expert Analysis", value: "By specialists" },
  ]

  return (
    <div className="w-full p-6 sm:p-8 md:p-12 lg:p-16 font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-r from-[#4F6F52]/10 via-[#4F6F52]/5 to-[#4F6F52]/10 rounded-2xl p-5 sm:p-6 mb-8 border border-[#4F6F52]/20">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#4F6F52]/20 flex items-center justify-center flex-shrink-0">
              <Shield className="w-6 h-6 text-[#4F6F52]" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-semibold text-[#1A231E] mb-1">Peace of Mind for Your Family</h2>
              <p className="text-[#5A6D7A] text-sm sm:text-base">
                Finding the right care is one of the most important decisions you'll make. This report gives you the
                clarity and confidence to move forward, knowing you've explored every option thoroughly.
              </p>
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 bg-[#4F6F52]/10 text-[#4F6F52] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <CheckCircle className="w-4 h-4" />
            Analysis Complete
          </div>
          <h1 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-[#1A231E] mb-3">
            Your Top 3 Recommendations
          </h1>
          <p className="text-lg sm:text-xl text-[#5A6D7A] max-w-2xl mx-auto">
            We've carefully analysed {homesCount} care homes in {location} to find the best options for your loved one's
            comfort and wellbeing
          </p>
        </div>

        {/* Top Action Box */}
        <div className="bg-[#4F6F52] rounded-2xl p-5 sm:p-6 md:p-8 mb-8 md:mb-10 shadow-lg">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-white/80 text-sm font-medium uppercase tracking-wider mb-1">{topActionTitle}</div>
                <div className="text-white text-xl sm:text-2xl font-bold">
                  Arrange a Visit to {topRecommendation.name}
                </div>
                <p className="text-white/80 text-sm mt-1">
                  A visit helps you get a feel for the atmosphere and meet the care team
                </p>
                {topRecommendation.phoneNumber && (
                  <div className="text-white/90 text-lg mt-2">{topRecommendation.phoneNumber}</div>
                )}
              </div>
            </div>
            {topRecommendation.waitingList && (
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg">
                <Clock className="w-5 h-5 text-white" />
                <span className="text-white text-sm font-medium">Waiting list: {topRecommendation.waitingList}</span>
              </div>
            )}
          </div>
        </div>

        {/* Top 3 Recommendations Cards */}
        <div className="space-y-4 md:space-y-6 mb-8 md:mb-10">
          {safeRecommendations.slice(0, 3).map((home) => {
            const rankBadge = getRankBadge(home.rank)
            const isTopChoice = home.rank === 1

            return (
              <div
                key={home.name}
                className={`relative rounded-2xl border ${
                  isTopChoice ? "border-[#4F6F52] bg-[#4F6F52]/5" : "border-[#E8E5DF] bg-white"
                } p-5 sm:p-6 md:p-8 transition-all hover:shadow-lg`}
              >
                {/* Rank Badge */}
                <div
                  className={`absolute -top-3 left-6 ${rankBadge.bg} ${rankBadge.text} px-3 py-1 rounded-full text-sm font-bold shadow-md`}
                >
                  {rankBadge.label}
                </div>

                <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6 mt-2">
                  {/* Score Circle */}
                  <div className="flex items-center gap-4 lg:gap-6">
                    <div
                      className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full ${getScoreBgColor(home.overallScore)} flex items-center justify-center flex-shrink-0`}
                    >
                      <span className="text-white text-2xl sm:text-3xl font-bold">{home.overallScore}</span>
                    </div>

                    {/* Name and Strength */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl sm:text-2xl font-bold text-[#1A231E] mb-1">{home.name}</h3>
                      <div className="flex items-center gap-2 text-[#4F6F52] font-semibold">
                        <Star className="w-4 h-4 fill-current" />
                        <span>{home.topStrength}</span>
                      </div>
                      <p className="text-[#5A6D7A] text-sm mt-1">{home.strengthDetail}</p>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="flex flex-wrap items-center gap-4 lg:gap-6 lg:ml-auto">
                    <div className="text-center">
                      <div className="text-sm text-[#5A6D7A] uppercase tracking-wider mb-1">Weekly Fee</div>
                      <div className="text-lg font-bold text-[#1A231E]">{formatCurrency(home.weeklyFee)}</div>
                    </div>

                    {home.waitingList && (
                      <div className="text-center">
                        <div className="text-sm text-[#5A6D7A] uppercase tracking-wider mb-1">Availability</div>
                        <div className="text-sm font-semibold text-[#4F6F52]">{home.waitingList}</div>
                      </div>
                    )}

                    {home.phoneNumber && (
                      <a
                        href={`tel:${home.phoneNumber.replace(/\s/g, "")}`}
                        className="flex items-center gap-2 bg-[#4F6F52] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#3d5741] transition-colors min-h-[44px]"
                      >
                        <Phone className="w-4 h-4" />
                        <span className="hidden sm:inline">Call</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Address */}
                {home.address && (
                  <div className="flex items-center gap-2 text-[#5A6D7A] text-sm mt-4 pt-4 border-t border-[#E8E5DF]">
                    <MapPin className="w-4 h-4 flex-shrink-0" />
                    <span>{home.address}</span>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Quick Comparison Summary */}
        <div className="bg-[#F8F9FA] rounded-2xl p-5 sm:p-6 md:p-8 border border-[#E8E5DF] mb-8">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-[#4F6F52]" />
            <h3 className="text-lg font-bold text-[#1A231E]">Quick Comparison</h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[500px]">
              <thead>
                <tr className="border-b border-[#E8E5DF]">
                  <th className="text-left py-3 text-sm font-semibold text-[#5A6D7A] uppercase tracking-wider">
                    Care Home
                  </th>
                  <th className="text-center py-3 text-sm font-semibold text-[#5A6D7A] uppercase tracking-wider">
                    Score
                  </th>
                  <th className="text-center py-3 text-sm font-semibold text-[#5A6D7A] uppercase tracking-wider">
                    Weekly Fee
                  </th>
                  <th className="text-center py-3 text-sm font-semibold text-[#5A6D7A] uppercase tracking-wider">
                    Best For
                  </th>
                  <th className="text-center py-3 text-sm font-semibold text-[#5A6D7A] uppercase tracking-wider">
                    Availability
                  </th>
                </tr>
              </thead>
              <tbody>
                {safeRecommendations.slice(0, 3).map((home) => (
                  <tr key={home.name} className="border-b border-[#E8E5DF] last:border-b-0">
                    <td className="py-4 font-semibold text-[#1A231E]">{home.name}</td>
                    <td className={`py-4 text-center font-bold ${getScoreColor(home.overallScore)}`}>
                      {home.overallScore}/100
                    </td>
                    <td className="py-4 text-center text-[#1A231E]">{formatCurrency(home.weeklyFee)}</td>
                    <td className="py-4 text-center text-[#5A6D7A] text-sm">{home.topStrength}</td>
                    <td className="py-4 text-center text-[#4F6F52] font-medium text-sm">{home.waitingList || "-"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 sm:p-6 border border-[#E8E5DF] mb-8">
          <h3 className="text-sm font-bold text-[#5A6D7A] uppercase tracking-wider mb-4">What's In This Report</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {valueSummaryItems.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center p-3 rounded-xl bg-[#F8F9FA]">
                <item.icon className="w-5 h-5 text-[#4F6F52] mb-2" />
                <div className="text-sm font-bold text-[#1A231E]">{item.label}</div>
                <div className="text-sm text-[#5A6D7A]">{item.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Continue Reading */}
        <div className="text-center">
          <a
            href="#full-analysis"
            className="inline-flex items-center gap-2 text-lg font-semibold text-[#4F6F52] hover:text-[#3d5741] hover:underline transition-all group min-h-[44px]"
          >
            Continue to full analysis
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  )
}
