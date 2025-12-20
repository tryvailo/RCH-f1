"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface CQCRating {
  inspection_date: string
  overall_rating: string
  safe: number
  effective: number
  caring: number
  responsive: number
  well_led: number
}

interface EnforcementAction {
  date: string
  type: "Warning Notice" | "Requirement Notice" | "Prosecution" | "None"
  status: "Active" | "Resolved" | "N/A"
  description: string
  resolution_date?: string
}

interface ActionPlan {
  issue: string
  identified_date: string
  resolution_date: string | null
  status: "Resolved" | "In Progress" | "Overdue"
}

interface CQCDeepDiveProps {
  home_name: string
  current_rating: {
    overall: string
    inspection_date: string
    report_url: string
  }
  historical_ratings: CQCRating[]
  enforcement_actions: EnforcementAction[]
  action_plans: ActionPlan[]
}

export function CQCDeepDive({
  home_name,
  current_rating,
  historical_ratings,
  enforcement_actions,
  action_plans,
}: CQCDeepDiveProps) {
  const getRatingColor = (rating: string) => {
    switch (rating.toLowerCase()) {
      case "outstanding":
        return "bg-green-100 text-green-800 border-green-300"
      case "good":
        return "bg-blue-100 text-blue-800 border-blue-300"
      case "requires improvement":
        return "bg-amber-100 text-amber-800 border-amber-300"
      case "inadequate":
        return "bg-red-100 text-red-800 border-red-300"
      default:
        return "bg-gray-100 text-gray-800 border-gray-300"
    }
  }

  const getScoreColor = (score: number) => {
    if (score >= 9) return "text-green-700"
    if (score >= 7) return "text-blue-700"
    if (score >= 5) return "text-amber-700"
    return "text-red-700"
  }

  const getActionColor = (status: string) => {
    if (status === "Resolved" || status === "N/A") return "text-green-700"
    if (status === "In Progress") return "text-amber-700"
    return "text-red-700"
  }

  const hasEnforcementIssues = enforcement_actions.some((a) => a.status === "Active")

  return (
    <div className="space-y-8 mt-8 px-4 sm:px-6 lg:px-8">
      <div className="border-t-2 border-primary pt-6">
        <h3 className="text-[22px] font-bold text-foreground mb-6">CQC Regulatory History Deep Dive</h3>

        {/* Current Rating */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-3">
            <span className="text-[20px] font-semibold text-foreground">Current CQC Rating:</span>
            <Badge className={`text-[18px] px-4 py-2 ${getRatingColor(current_rating.overall)}`}>
              {current_rating.overall}
            </Badge>
          </div>
          <p className="text-[16px] text-muted-foreground">
            Inspected:{" "}
            {new Date(current_rating.inspection_date).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
          <a
            href={current_rating.report_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[16px] text-primary underline hover:no-underline mt-2 inline-block"
          >
            View full CQC inspection report
          </a>
        </div>

        {/* Historical Performance Timeline */}
        <div className="mb-8">
          <h4 className="text-[18px] font-semibold text-foreground mb-4">Historical Performance Timeline</h4>
          <p className="text-[15px] text-muted-foreground mb-6">
            Track how this home's regulatory performance has evolved over time
          </p>

          <div className="space-y-6">
            {historical_ratings.map((rating, index) => (
              <div key={index} className="flex gap-6">
                {/* Timeline node */}
                <div className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full border-4 flex items-center justify-centre font-bold text-[14px] ${getRatingColor(rating.overall_rating)}`}
                  >
                    {index + 1}
                  </div>
                  {index < historical_ratings.length - 1 && <div className="w-1 h-full bg-border min-h-[60px]" />}
                </div>

                {/* Content */}
                <div className="flex-1 pb-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[17px] font-semibold text-foreground">
                      {new Date(rating.inspection_date).toLocaleDateString("en-GB", {
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                    <Badge className={`text-[16px] px-3 py-1 ${getRatingColor(rating.overall_rating)}`}>
                      {rating.overall_rating}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-5 gap-3 mt-3">
                    <div>
                      <p className="text-[14px] text-muted-foreground mb-1">Safe</p>
                      <p className={`text-[17px] font-semibold ${getScoreColor(rating.safe)}`}>{rating.safe}/10</p>
                    </div>
                    <div>
                      <p className="text-[14px] text-muted-foreground mb-1">Effective</p>
                      <p className={`text-[17px] font-semibold ${getScoreColor(rating.effective)}`}>
                        {rating.effective}/10
                      </p>
                    </div>
                    <div>
                      <p className="text-[14px] text-muted-foreground mb-1">Caring</p>
                      <p className={`text-[17px] font-semibold ${getScoreColor(rating.caring)}`}>{rating.caring}/10</p>
                    </div>
                    <div>
                      <p className="text-[14px] text-muted-foreground mb-1">Responsive</p>
                      <p className={`text-[17px] font-semibold ${getScoreColor(rating.responsive)}`}>
                        {rating.responsive}/10
                      </p>
                    </div>
                    <div>
                      <p className="text-[14px] text-muted-foreground mb-1">Well-led</p>
                      <p className={`text-[17px] font-semibold ${getScoreColor(rating.well_led)}`}>
                        {rating.well_led}/10
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enforcement Actions */}
        <div className="mb-8">
          <h4 className="text-[18px] font-semibold text-foreground mb-4">Regulatory Enforcement Actions</h4>
          <p className="text-[15px] text-muted-foreground mb-6">Any warnings, notices, or legal actions taken by CQC</p>

          {!hasEnforcementIssues && enforcement_actions[0]?.type === "None" ? (
            <Card className="p-6 bg-green-50 border-green-200">
              <div className="flex items-start gap-3">
                <span className="text-[24px]">✓</span>
                <div>
                  <p className="text-[17px] font-semibold text-green-800">No enforcement actions in past 5 years</p>
                  <p className="text-[15px] text-green-700 mt-2">
                    This home has maintained compliance with all CQC standards without requiring formal enforcement
                    action.
                  </p>
                </div>
              </div>
            </Card>
          ) : (
            <div className="space-y-4">
              {enforcement_actions.map((action, index) => (
                <Card
                  key={index}
                  className={`p-5 ${
                    action.status === "Active"
                      ? "bg-red-50 border-red-200"
                      : action.status === "Resolved"
                        ? "bg-amber-50 border-amber-200"
                        : "bg-gray-50 border-gray-200"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-[16px] font-semibold text-foreground">{action.type}</span>
                        <Badge
                          className={`text-[14px] ${
                            action.status === "Active"
                              ? "bg-red-100 text-red-800"
                              : action.status === "Resolved"
                                ? "bg-green-100 text-green-800"
                                : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {action.status}
                        </Badge>
                      </div>
                      <p className="text-[15px] text-foreground mb-2">{action.description}</p>
                      <p className="text-[14px] text-muted-foreground">
                        Date:{" "}
                        {new Date(action.date).toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                        {action.resolution_date && (
                          <>
                            {" "}
                            • Resolved:{" "}
                            {new Date(action.resolution_date).toLocaleDateString("en-GB", {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            })}
                          </>
                        )}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* Action Plans */}
        <div>
          <h4 className="text-[18px] font-semibold text-foreground mb-4">Improvement Action Plans</h4>
          <p className="text-[15px] text-muted-foreground mb-6">How the home has addressed identified issues</p>

          {action_plans.length === 0 ? (
            <Card className="p-6 bg-green-50 border-green-200">
              <div className="flex items-start gap-3">
                <span className="text-[24px]">✓</span>
                <div>
                  <p className="text-[17px] font-semibold text-green-800">No action plans required</p>
                  <p className="text-[15px] text-green-700 mt-2">All inspection areas met or exceeded standards</p>
                </div>
              </div>
            </Card>
          ) : (
            <div className="space-y-4">
              {action_plans.map((plan, index) => (
                <Card
                  key={index}
                  className={`p-5 ${
                    plan.status === "Resolved"
                      ? "bg-green-50 border-green-200"
                      : plan.status === "In Progress"
                        ? "bg-amber-50 border-amber-200"
                        : "bg-red-50 border-red-200"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`text-[16px] font-semibold ${getActionColor(plan.status)}`}>{plan.issue}</span>
                        <Badge
                          className={`text-[14px] ${
                            plan.status === "Resolved"
                              ? "bg-green-100 text-green-800"
                              : plan.status === "In Progress"
                                ? "bg-amber-100 text-amber-800"
                                : "bg-red-100 text-red-800"
                          }`}
                        >
                          {plan.status}
                        </Badge>
                      </div>
                      <p className="text-[14px] text-muted-foreground">
                        Identified:{" "}
                        {new Date(plan.identified_date).toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                        {plan.resolution_date && (
                          <>
                            {" "}
                            • Resolved:{" "}
                            {new Date(plan.resolution_date).toLocaleDateString("en-GB", {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            })}
                          </>
                        )}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
