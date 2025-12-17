"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ArrowLeft } from "lucide-react"

export function FundingAssessmentSimple() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})

  const steps = [
    { title: "Your Health Journey", desc: "Understanding core needs" },
    { title: "Health Assessment", desc: "Care needs" },
    { title: "Financial Details", desc: "Income and savings" },
    { title: "Property Status", desc: "Home ownership" },
  ]

  const handleNext = () => {
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1)
  }

  const handleBack = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1)
  }

  return (
    <div className="py-16 px-4 bg-background min-h-screen">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-sm text-muted-foreground mb-2">
                Step {currentStep + 1} of {steps.length}
              </p>
              <h1 className="text-3xl font-bold mb-2">{steps[currentStep].title}</h1>
              <p className="text-muted-foreground">{steps[currentStep].desc}</p>
            </div>
            <Badge>~{Math.max(10 - currentStep * 2, 2)}min left</Badge>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-300"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            />
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Question {currentStep + 1}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              {["Option A", "Option B", "Option C"].map((option) => (
                <label
                  key={option}
                  className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-muted transition"
                >
                  <input type="radio" name="answer" value={option} className="w-4 h-4" />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-between mt-8">
          <Button onClick={handleBack} disabled={currentStep === 0} variant="outline">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          {currentStep === steps.length - 1 ? (
            <Button onClick={() => (window.location.href = "/funding-calculator/results")}>Get Results</Button>
          ) : (
            <Button onClick={handleNext}>
              Next
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
