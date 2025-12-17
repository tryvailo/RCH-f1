"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ExternalRatings {
  glassdoor: number | null
  indeed: number | null
  care_quality_commission_staff_rating: number
}

interface TurnoverAnalysis {
  annual_turnover_rate: string
  industry_average: string
  verdict: "Excellent" | "Good" | "Average" | "Concerning"
  indicator: "Low" | "Medium" | "High"
}

interface StaffReview {
  source: "Glassdoor" | "Indeed" | "CQC Staff Survey"
  sentiment: "Positive" | "Negative" | "Neutral"
  quote: string
  date: string
  role?: string
}

interface StaffQualityProps {
  home_name: string
  external_ratings: ExternalRatings
  turnover_analysis: TurnoverAnalysis
  sample_reviews: StaffReview[]
  overall_staff_quality_score: number
}

export function StaffQualityAnalysis({
  home_name,
  external_ratings,
  turnover_analysis,
  sample_reviews,
  overall_staff_quality_score,
}: StaffQualityProps) {
  const getScoreColor = (score: number) => {
    if (score >= 9) return "text-green-700"
    if (score >= 7) return "text-blue-700"
    if (score >= 5) return "text-amber-700"
    return "text-red-700"
  }

  const getScoreBadge = (score: number) => {
    if (score >= 9) return "bg-green-100 text-green-800 border-green-300"
    if (score >= 7) return "bg-blue-100 text-blue-800 border-blue-300"
    if (score >= 5) return "bg-amber-100 text-amber-800 border-amber-300"
    return "bg-red-100 text-red-800 border-red-300"
  }

  const getVerdictColor = (verdict: string) => {
    switch (verdict) {
      case "Excellent":
        return "bg-green-100 text-green-800 border-green-300"
      case "Good":
        return "bg-blue-100 text-blue-800 border-blue-300"
      case "Average":
        return "bg-amber-100 text-amber-800 border-amber-300"
      case "Concerning":
        return "bg-red-100 text-red-800 border-red-300"
      default:
        return "bg-gray-100 text-gray-800 border-gray-300"
    }
  }

  const getSentimentIcon = (sentiment: string) => {
    switch (sentiment) {
      case "Positive":
        return "✓"
      case "Negative":
        return "⚠"
      default:
        return "○"
    }
  }

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case "Positive":
        return "bg-green-50 border-green-200"
      case "Negative":
        return "bg-red-50 border-red-200"
      default:
        return "bg-gray-50 border-gray-200"
    }
  }

  const renderStars = (rating: number, size: "sm" | "lg" = "lg") => {
    const sizeClass = size === "lg" ? "text-[32px]" : "text-[20px]"
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 >= 0.5

    return (
      <div className={`flex items-center gap-1 ${sizeClass}`}>
        {[...Array(5)].map((_, index) => {
          if (index < fullStars) {
            return (
              <span key={index} className="text-amber-400">
                ★
              </span>
            )
          }
          if (index === fullStars && hasHalfStar) {
            return (
              <span key={index} className="text-amber-400">
                ★
              </span>
            )
          }
          return (
            <span key={index} className="text-gray-300">
              ★
            </span>
          )
        })}
        <span className="text-[18px] ml-2 text-foreground font-semibold">{rating.toFixed(1)}/5</span>
      </div>
    )
  }

  const getTurnoverBarWidth = (rate: string) => {
    const percentage = Number.parseInt(rate)
    return `${Math.min(percentage, 100)}%`
  }

  return (
    <div className="space-y-8 mt-8 px-4 sm:px-6 lg:px-8">
      <div className="border-t-2 border-primary pt-6">
        <h3 className="text-[22px] font-bold text-foreground mb-6">Staff Quality & Work Environment Analysis</h3>

        {/* Overall Score */}
        <div className="mb-8">
          <div className="flex items-center gap-4">
            <span className="text-[20px] font-semibold text-foreground">Overall Staff Quality Score:</span>
            <Badge className={`text-[24px] px-4 py-2 ${getScoreBadge(overall_staff_quality_score)}`}>
              {overall_staff_quality_score.toFixed(1)}/10
            </Badge>
          </div>
          <p className="text-[15px] text-muted-foreground mt-3">
            Based on external ratings, turnover analysis, and staff feedback
          </p>
        </div>

        {/* External Ratings */}
        <div className="mb-8">
          <h4 className="text-[18px] font-semibold text-foreground mb-4">External Staff Ratings</h4>
          <p className="text-[15px] text-muted-foreground mb-6">What current and former staff say about working here</p>

          <div className="grid gap-6">
            {external_ratings.glassdoor !== null && (
              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h5 className="text-[18px] font-semibold text-foreground mb-2">Glassdoor Rating</h5>
                    <p className="text-[14px] text-muted-foreground">Employee reviews and company culture</p>
                  </div>
                  <div>{renderStars(external_ratings.glassdoor)}</div>
                </div>
              </Card>
            )}

            {external_ratings.indeed !== null && (
              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h5 className="text-[18px] font-semibold text-foreground mb-2">Indeed Rating</h5>
                    <p className="text-[14px] text-muted-foreground">Work environment and job satisfaction</p>
                  </div>
                  <div>{renderStars(external_ratings.indeed)}</div>
                </div>
              </Card>
            )}

            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h5 className="text-[18px] font-semibold text-foreground mb-2">CQC Staff Survey</h5>
                  <p className="text-[14px] text-muted-foreground">Official CQC staff satisfaction rating</p>
                </div>
                <div
                  className={`text-[36px] font-bold ${getScoreColor(external_ratings.care_quality_commission_staff_rating)}`}
                >
                  {external_ratings.care_quality_commission_staff_rating.toFixed(1)}/10
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Staff Turnover */}
        <div className="mb-8">
          <h4 className="text-[18px] font-semibold text-foreground mb-4">Staff Turnover Analysis</h4>
          <p className="text-[15px] text-muted-foreground mb-6">
            Lower turnover typically indicates better staff satisfaction and more consistent care
          </p>

          <Card className="p-6">
            <div className="space-y-6">
              {/* This Home's Turnover */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <span className="text-[17px] font-semibold text-foreground">
                      This Home: {turnover_analysis.annual_turnover_rate}
                    </span>
                    <Badge className={`ml-3 text-[14px] ${getVerdictColor(turnover_analysis.verdict)}`}>
                      {turnover_analysis.indicator} - {turnover_analysis.verdict}
                    </Badge>
                  </div>
                </div>
                <div className="h-10 bg-muted rounded-lg overflow-hidden">
                  <div
                    className="h-full bg-green-500"
                    style={{ width: getTurnoverBarWidth(turnover_analysis.annual_turnover_rate) }}
                  />
                </div>
              </div>

              {/* Industry Average */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[17px] font-semibold text-muted-foreground">
                    Industry Average: {turnover_analysis.industry_average}
                  </span>
                </div>
                <div className="h-10 bg-muted rounded-lg overflow-hidden">
                  <div
                    className="h-full bg-amber-400"
                    style={{ width: getTurnoverBarWidth(turnover_analysis.industry_average) }}
                  />
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-muted rounded-lg">
              <p className="text-[15px] text-foreground">
                {turnover_analysis.indicator === "Low" && (
                  <>
                    Low turnover is excellent - it suggests staff are satisfied, well-supported, and committed to
                    providing consistent care to residents.
                  </>
                )}
                {turnover_analysis.indicator === "Medium" && (
                  <>
                    Moderate turnover is typical for the sector. While not concerning, lower turnover would indicate
                    even better staff satisfaction.
                  </>
                )}
                {turnover_analysis.indicator === "High" && (
                  <>
                    High turnover raises concerns about staff satisfaction and care consistency. This may indicate
                    management, workload, or compensation issues.
                  </>
                )}
              </p>
            </div>
          </Card>
        </div>

        {/* Staff Reviews */}
        <div>
          <h4 className="text-[18px] font-semibold text-foreground mb-4">What Staff Say</h4>
          <p className="text-[15px] text-muted-foreground mb-6">Sample reviews from current and former staff members</p>

          <div className="space-y-4">
            {sample_reviews.map((review, index) => (
              <Card key={index} className={`p-5 ${getSentimentColor(review.sentiment)}`}>
                <div className="flex items-start gap-4">
                  <div className="text-[24px] flex-shrink-0">{getSentimentIcon(review.sentiment)}</div>
                  <div className="flex-1">
                    <p className="text-[18px] text-foreground leading-relaxed mb-3">"{review.quote}"</p>
                    <div className="flex items-center gap-4 text-[14px] text-muted-foreground">
                      <span className="font-semibold">{review.source}</span>
                      {review.role && (
                        <>
                          <span>•</span>
                          <span>{review.role}</span>
                        </>
                      )}
                      <span>•</span>
                      <span>
                        {new Date(review.date).toLocaleDateString("en-GB", {
                          month: "long",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-6 p-4 bg-muted rounded-lg">
            <p className="text-[14px] text-muted-foreground italic">
              Reviews are included for balance and transparency. Both positive and constructive feedback help you
              understand the real work environment.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
