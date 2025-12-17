"use client"

import { useState } from "react"
import { use } from "react"
import {
  Shield,
  Star,
  Phone,
  MapPin,
  Clock,
  CheckCircle,
  TrendingUp,
  Heart,
  FileText,
  Download,
  ArrowRight,
  Users,
  Lock,
  Eye,
  AlertCircle,
} from "lucide-react"

interface PageProps {
  params: Promise<{ id: string }>
}

export default function SharedReportPage({ params }: PageProps) {
  const resolvedParams = use(params)
  const reportId = resolvedParams.id

  const [isExpired] = useState(false)
  const [viewCount] = useState(3)

  // Mock data - in production this would come from API based on reportId
  const reportData = {
    sharedBy: "Margaret Thompson",
    sharedFor: "John Thompson",
    location: "Birmingham",
    createdAt: new Date("2024-12-01"),
    expiresAt: new Date("2024-12-31"),
    recommendations: [
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
    categoryScores: [
      { name: "Safety & Compliance", score: 92, color: "#3B82F6" },
      { name: "Medical Care", score: 88, color: "#EC4899" },
      { name: "Staff Quality", score: 85, color: "#8B5CF6" },
      { name: "Financial Stability", score: 90, color: "#10B981" },
      { name: "Comfort & Lifestyle", score: 82, color: "#F59E0B" },
      { name: "Community Reputation", score: 87, color: "#06B6D4" },
    ],
    keyFindings: [
      {
        category: "Safety",
        finding: "All three recommended homes have 'Good' or 'Outstanding' CQC ratings",
        icon: Shield,
      },
      {
        category: "Cost",
        finding: "Potential savings of £10,000+ annually compared to regional average",
        icon: TrendingUp,
      },
      {
        category: "Availability",
        finding: "Greenfield Manor has typical waiting list of 2-3 weeks - early contact advised",
        icon: Clock,
      },
    ],
  }

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

  const daysRemaining = Math.ceil((reportData.expiresAt.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))

  if (isExpired) {
    return (
      <div className="min-h-screen bg-[#F8F9FA] flex items-center justify-center p-6">
        <div className="bg-white rounded-2xl p-8 max-w-md text-center shadow-lg border border-[#E8E5DF]">
          <div className="w-16 h-16 rounded-full bg-[#EB5757]/10 flex items-center justify-center mx-auto mb-4">
            <Lock className="w-8 h-8 text-[#EB5757]" />
          </div>
          <h1 className="text-2xl font-bold text-[#1A231E] mb-2">Report Link Expired</h1>
          <p className="text-[#5A6D7A] mb-6">
            This shared report link has expired. Please contact the person who shared it with you to request a new link.
          </p>
          <a href="/" className="inline-flex items-center gap-2 text-[#4F6F52] font-semibold hover:underline">
            Visit RightCareHome
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      {/* Header Banner */}
      <div className="bg-[#4F6F52] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="flex items-center gap-3">
              <Users className="w-5 h-5" />
              <span className="text-sm sm:text-base">
                Shared by <strong>{reportData.sharedBy}</strong>
              </span>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <Eye className="w-4 h-4" />
                <span>Viewed {viewCount} times</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{daysRemaining} days remaining</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Read-Only Notice */}
        <div className="bg-[#4F6F52]/5 border border-[#4F6F52]/20 rounded-xl p-4 mb-8 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-[#4F6F52] flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-[#1A231E] font-medium">This is a read-only view of the care home report</p>
            <p className="text-sm text-[#5A6D7A] mt-1">
              You can review the findings and recommendations below. For the complete report with negotiation guides and
              action plans, please speak with {reportData.sharedBy}.
            </p>
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-[#4F6F52]/10 text-[#4F6F52] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Heart className="w-4 h-4" />
            Care Home Research for {reportData.sharedFor}
          </div>
          <h1 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-[#1A231E] mb-3">
            Top 3 Recommendations
          </h1>
          <p className="text-lg text-[#5A6D7A] max-w-2xl mx-auto">
            Based on comprehensive analysis of care homes in {reportData.location}
          </p>
        </div>

        {/* Top 3 Recommendations */}
        <div className="space-y-4 mb-10">
          {reportData.recommendations.map((home) => {
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
                      <div className="text-xs text-[#5A6D7A] uppercase tracking-wider mb-1">Weekly Fee</div>
                      <div className="text-lg font-bold text-[#1A231E]">£{home.weeklyFee.toLocaleString()}</div>
                    </div>

                    {home.waitingList && (
                      <div className="text-center">
                        <div className="text-xs text-[#5A6D7A] uppercase tracking-wider mb-1">Availability</div>
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

        {/* Category Scores Overview */}
        <div className="bg-white rounded-2xl border border-[#E8E5DF] p-6 sm:p-8 mb-10">
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="w-5 h-5 text-[#4F6F52]" />
            <h2 className="text-xl font-bold text-[#1A231E]">Category Scores (Top Choice)</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {reportData.categoryScores.map((category) => (
              <div key={category.name} className="bg-[#F8F9FA] rounded-xl p-4 border border-[#E8E5DF]">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: category.color }} />
                  <span className="text-sm font-medium text-[#5A6D7A]">{category.name}</span>
                </div>
                <div className={`text-2xl font-bold ${getScoreColor(category.score)}`}>{category.score}/100</div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Findings */}
        <div className="bg-white rounded-2xl border border-[#E8E5DF] p-6 sm:p-8 mb-10">
          <div className="flex items-center gap-2 mb-6">
            <CheckCircle className="w-5 h-5 text-[#4F6F52]" />
            <h2 className="text-xl font-bold text-[#1A231E]">Key Findings</h2>
          </div>

          <div className="space-y-4">
            {reportData.keyFindings.map((finding, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-[#F8F9FA] rounded-xl border border-[#E8E5DF]">
                <div className="w-10 h-10 rounded-full bg-[#4F6F52]/10 flex items-center justify-center flex-shrink-0">
                  <finding.icon className="w-5 h-5 text-[#4F6F52]" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#4F6F52] uppercase tracking-wider mb-1">
                    {finding.category}
                  </div>
                  <p className="text-[#1A231E]">{finding.finding}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Download PDF Summary */}
        <div className="bg-gradient-to-r from-[#4F6F52]/10 via-[#4F6F52]/5 to-[#4F6F52]/10 rounded-2xl p-6 sm:p-8 border border-[#4F6F52]/20 mb-10">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-[#4F6F52]/20 flex items-center justify-center flex-shrink-0">
              <FileText className="w-7 h-7 text-[#4F6F52]" />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-lg font-bold text-[#1A231E] mb-1">Download PDF Summary</h3>
              <p className="text-sm text-[#5A6D7A]">A 4-page summary perfect for family discussions or printing</p>
            </div>
            <button className="flex items-center gap-2 bg-[#4F6F52] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#3d5741] transition-colors min-h-[48px]">
              <Download className="w-5 h-5" />
              Download PDF
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-sm text-[#5A6D7A] border-t border-[#E8E5DF] pt-8">
          <p className="mb-2">This report was prepared by RightCareHome for {reportData.sharedBy}</p>
          <p>
            Need your own personalised report?{" "}
            <a href="/" className="text-[#4F6F52] font-semibold hover:underline">
              Get started free
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
