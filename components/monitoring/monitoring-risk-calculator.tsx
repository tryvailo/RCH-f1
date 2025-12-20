"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { AlertTriangle, Shield, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

export function MonitoringRiskCalculator() {
  const [answers, setAnswers] = useState({
    duration: "",
    changes: "",
    visits: "",
  })
  const [riskLevel, setRiskLevel] = useState<"low" | "moderate" | "high" | null>(null)
  const [riskScore, setRiskScore] = useState(0)

  const calculateRisk = () => {
    let score = 0

    // Duration scoring
    if (answers.duration === "less-6") score += 10
    else if (answers.duration === "6-12") score += 5
    else if (answers.duration === "12-24") score += 3
    else if (answers.duration === "24-plus") score += 1

    // Changes scoring
    if (answers.changes === "many") score += 15
    else if (answers.changes === "some") score += 8
    else if (answers.changes === "few") score += 4
    else if (answers.changes === "none") score += 1

    // Visits scoring
    if (answers.visits === "rarely") score += 12
    else if (answers.visits === "monthly") score += 6
    else if (answers.visits === "weekly") score += 3
    else if (answers.visits === "daily") score += 1

    setRiskScore(score)

    if (score >= 25) setRiskLevel("high")
    else if (score >= 15) setRiskLevel("moderate")
    else setRiskLevel("low")
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (answers.duration && answers.changes && answers.visits) {
      calculateRisk()
    }
  }

  const getRiskColor = () => {
    if (riskLevel === "high") return "text-red-600 bg-red-50 border-red-200"
    if (riskLevel === "moderate") return "text-orange-600 bg-orange-50 border-orange-200"
    return "text-green-600 bg-green-50 border-green-200"
  }

  const getRiskMessage = () => {
    if (riskLevel === "high")
      return "Your risk level is HIGH. Professional monitoring could reduce your risk by 75% and save you thousands in emergency costs."
    if (riskLevel === "moderate")
      return "Your risk level is MODERATE. Professional monitoring could reduce your risk by 68% and provide early warning of issues."
    return "Your risk level is LOW. Professional monitoring provides peace of mind and catches issues before they become problems."
  }

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#FDFBF7] via-white to-[#F5F3EF]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-centre max-w-3xl mx-auto mb-12 sm:mb-16">
          <Badge className="mb-4 px-4 py-2 bg-[#4F6F52]/10 text-[#4F6F52] border-[#4F6F52]/20">
            RISK ASSESSMENT
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1A231E] mb-4 sm:mb-6 text-balance">
            What's Your <span className="text-[#4F6F52]">Risk Level?</span>
          </h2>
          <p className="text-lg sm:text-xl text-[#1A231E]/70 leading-relaxed">
            Quick assessment to understand your exposure to care home risks
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="p-6 sm:p-8 bg-white border-2 border-[#E8E5DF] rounded-2xl shadow-soft-xl">
            {!riskLevel ? (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label className="block text-lg font-semibold text-[#1A231E] mb-4">
                    1. How long has your loved one been at this care home?
                  </label>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      { value: "less-6", label: "Less than 6 months" },
                      { value: "6-12", label: "6-12 months" },
                      { value: "12-24", label: "1-2 years" },
                      { value: "24-plus", label: "2+ years" },
                    ].map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => setAnswers({ ...answers, duration: option.value })}
                        className={`p-4 rounded-xl border-2 text-left transition-all ${
                          answers.duration === option.value
                            ? "border-[#4F6F52] bg-[#4F6F52]/10"
                            : "border-[#E8E5DF] hover:border-[#4F6F52]/50"
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-lg font-semibold text-[#1A231E] mb-4">
                    2. Have you noticed any concerning changes recently?
                  </label>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      { value: "many", label: "Many changes" },
                      { value: "some", label: "Some changes" },
                      { value: "few", label: "Few changes" },
                      { value: "none", label: "No changes" },
                    ].map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => setAnswers({ ...answers, changes: option.value })}
                        className={`p-4 rounded-xl border-2 text-left transition-all ${
                          answers.changes === option.value
                            ? "border-[#4F6F52] bg-[#4F6F52]/10"
                            : "border-[#E8E5DF] hover:border-[#4F6F52]/50"
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-lg font-semibold text-[#1A231E] mb-4">
                    3. How often do you visit or check on the care home?
                  </label>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      { value: "rarely", label: "Rarely (monthly or less)" },
                      { value: "monthly", label: "Monthly" },
                      { value: "weekly", label: "Weekly" },
                      { value: "daily", label: "Daily or multiple times/week" },
                    ].map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => setAnswers({ ...answers, visits: option.value })}
                        className={`p-4 rounded-xl border-2 text-left transition-all ${
                          answers.visits === option.value
                            ? "border-[#4F6F52] bg-[#4F6F52]/10"
                            : "border-[#E8E5DF] hover:border-[#4F6F52]/50"
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={!answers.duration || !answers.changes || !answers.visits}
                  className="w-full h-14 bg-[#4F6F52] hover:bg-[#3A5140] text-white rounded-xl text-lg font-semibold"
                >
                  Calculate My Risk Level
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            ) : (
              <div className="space-y-6">
                <div className={`rounded-xl p-6 border-2 ${getRiskColor()}`}>
                  <div className="flex items-center gap-3 mb-4">
                    {riskLevel === "high" ? (
                      <AlertTriangle className="w-8 h-8 text-red-600" />
                    ) : riskLevel === "moderate" ? (
                      <Shield className="w-8 h-8 text-orange-600" />
                    ) : (
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    )}
                    <div>
                      <div className="text-sm font-semibold mb-1">Your Risk Level</div>
                      <div className="text-3xl font-bold">
                        {riskLevel === "high" ? "HIGH" : riskLevel === "moderate" ? "MODERATE" : "LOW"}
                      </div>
                    </div>
                  </div>
                  <Progress value={(riskScore / 37) * 100} className="h-3 mb-4" />
                  <p className="text-base leading-relaxed">{getRiskMessage()}</p>
                </div>

                <div className="bg-gradient-to-r from-[#4F6F52]/10 to-[#7FAD7E]/10 rounded-xl p-6 border border-[#4F6F52]/20">
                  <h4 className="font-semibold text-[#1A231E] mb-3">Recommended Action</h4>
                  <p className="text-sm text-[#1A231E]/70 mb-4">
                    Professional monitoring provides 24/7 oversight, early warning alerts, and comprehensive monthly
                    reports to protect your loved one.
                  </p>
                  <Button asChild className="w-full h-12 bg-[#4F6F52] hover:bg-[#3A5140] text-white rounded-xl">
                    <Link href="#pricing">Start Free 30-Day Trial</Link>
                  </Button>
                </div>

                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setAnswers({ duration: "", changes: "", visits: "" })
                    setRiskLevel(null)
                    setRiskScore(0)
                  }}
                  className="w-full"
                >
                  Retake Assessment
                </Button>
              </div>
            )}
          </Card>
        </div>
      </div>
    </section>
  )
}



