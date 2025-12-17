"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ArrowLeft, CheckCircle2, Shield } from "lucide-react"

interface Question {
  id: string
  category: "health" | "financial"
  question: string
  options?: { value: string; label: string }[]
  inputType?: "radio" | "number" | "select"
  helperText?: string
}

const questions: Question[] = [
  // Health Questions (1-8)
  {
    id: "care-needs",
    category: "health",
    question: "What level of care does your loved one require?",
    inputType: "radio",
    options: [
      { value: "basic", label: "Basic care - help with daily tasks" },
      { value: "moderate", label: "Moderate care - regular nursing support" },
      { value: "complex", label: "Complex care - 24/7 nursing supervision" },
      { value: "specialist", label: "Specialist care - complex medical needs" },
    ],
  },
  {
    id: "mobility",
    category: "health",
    question: "How would you describe their mobility?",
    inputType: "radio",
    options: [
      { value: "independent", label: "Fully independent" },
      { value: "walking-aid", label: "Uses walking aid" },
      { value: "wheelchair", label: "Wheelchair user" },
      { value: "bedbound", label: "Bedbound or very limited mobility" },
    ],
  },
  {
    id: "cognition",
    category: "health",
    question: "Do they have cognitive impairments (dementia, memory issues)?",
    inputType: "radio",
    options: [
      { value: "none", label: "No cognitive issues" },
      { value: "mild", label: "Mild memory problems" },
      { value: "moderate", label: "Moderate dementia/confusion" },
      { value: "severe", label: "Severe cognitive impairment" },
    ],
  },
  {
    id: "medical-conditions",
    category: "health",
    question: "Do they have any of these conditions? (Select the most serious)",
    inputType: "radio",
    options: [
      { value: "none", label: "None of these" },
      { value: "diabetes", label: "Diabetes, heart disease, or COPD" },
      { value: "stroke", label: "Recent stroke or Parkinson's" },
      { value: "terminal", label: "Terminal illness or multiple complex conditions" },
    ],
  },
  {
    id: "nutrition",
    category: "health",
    question: "Do they need support with eating and nutrition?",
    inputType: "radio",
    options: [
      { value: "independent", label: "Can eat independently" },
      { value: "assistance", label: "Needs encouragement or assistance" },
      { value: "peg-tube", label: "PEG tube or severe swallowing difficulties" },
    ],
  },
  {
    id: "continence",
    category: "health",
    question: "How would you describe their continence?",
    inputType: "radio",
    options: [
      { value: "continent", label: "Fully continent" },
      { value: "occasional", label: "Occasional incontinence" },
      { value: "regular", label: "Regular incontinence - uses pads" },
      { value: "catheter", label: "Catheter or complete incontinence" },
    ],
  },
  {
    id: "behaviour",
    category: "health",
    question: "Are there behavioural challenges?",
    inputType: "radio",
    options: [
      { value: "none", label: "No behavioural issues" },
      { value: "mild", label: "Occasional agitation or confusion" },
      { value: "moderate", label: "Regular challenging behaviour" },
      { value: "severe", label: "Severe aggression or risk to self/others" },
    ],
  },
  {
    id: "hospital-visits",
    category: "health",
    question: "How often have they been hospitalised in the past year?",
    inputType: "radio",
    options: [
      { value: "none", label: "Not at all" },
      { value: "once", label: "Once" },
      { value: "2-3", label: "2-3 times" },
      { value: "frequent", label: "4+ times or frequent A&E visits" },
    ],
  },

  // Financial Questions (9-15)
  {
    id: "savings",
    category: "financial",
    question: "What are their total savings and investments (excluding property)?",
    inputType: "radio",
    helperText: "Include ISAs, bonds, shares, and cash savings",
    options: [
      { value: "under-14k", label: "Under £14,250" },
      { value: "14k-23k", label: "£14,250 - £23,250" },
      { value: "23k-50k", label: "£23,250 - £50,000" },
      { value: "over-50k", label: "Over £50,000" },
    ],
  },
  {
    id: "property-ownership",
    category: "financial",
    question: "Do they own property?",
    inputType: "radio",
    options: [
      { value: "no", label: "No property owned" },
      { value: "yes-occupied", label: "Yes - occupied by spouse/partner or dependent relative" },
      { value: "yes-empty", label: "Yes - property is empty" },
      { value: "sold", label: "Already sold to fund care" },
    ],
  },
  {
    id: "property-value",
    category: "financial",
    question: "If they own property, what is its approximate value?",
    inputType: "radio",
    helperText: "This helps determine Local Authority contribution calculations",
    options: [
      { value: "not-applicable", label: "Not applicable - no property" },
      { value: "under-100k", label: "Under £100,000" },
      { value: "100k-250k", label: "£100,000 - £250,000" },
      { value: "over-250k", label: "Over £250,000" },
    ],
  },
  {
    id: "income",
    category: "financial",
    question: "What is their monthly income (pensions, benefits, etc.)?",
    inputType: "radio",
    options: [
      { value: "under-500", label: "Under £500/month" },
      { value: "500-1000", label: "£500 - £1,000/month" },
      { value: "1000-2000", label: "£1,000 - £2,000/month" },
      { value: "over-2000", label: "Over £2,000/month" },
    ],
  },
  {
    id: "benefits",
    category: "financial",
    question: "Do they currently receive any care-related benefits?",
    inputType: "radio",
    options: [
      { value: "none", label: "No benefits currently" },
      { value: "aa-pip", label: "Attendance Allowance or PIP" },
      { value: "dla", label: "Disability Living Allowance" },
      { value: "multiple", label: "Multiple care benefits" },
    ],
  },
  {
    id: "care-duration",
    category: "financial",
    question: "How long have they needed care?",
    inputType: "radio",
    options: [
      { value: "recent", label: "Less than 3 months" },
      { value: "6-months", label: "3-6 months" },
      { value: "1-year", label: "6-12 months" },
      { value: "long-term", label: "Over 1 year" },
    ],
  },
  {
    id: "postcode",
    category: "financial",
    question: "What is their postcode? (First part only, e.g., SW1A)",
    inputType: "radio",
    helperText: "This helps identify your local authority area",
    options: [
      { value: "london", label: "London (any postcode)" },
      { value: "birmingham", label: "Birmingham (B postcodes)" },
      { value: "manchester", label: "Manchester (M postcodes)" },
      { value: "other", label: "Other area" },
    ],
  },
]

export function FundingAssessmentForm() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const currentQuestion = questions[currentStep]
  const progress = ((currentStep + 1) / questions.length) * 100
  const isLastQuestion = currentStep === questions.length - 1

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [currentQuestion.id]: value })
  }

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    // Here you would integrate with Stripe and generate PDF report
    console.log("[v0] Assessment answers:", answers)
    // Redirect to checkout
    window.location.href = "/funding-calculator/checkout"
  }

  const canProceed = answers[currentQuestion.id] !== undefined

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#FDFBF7] to-[#F5F3EF]">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-semibold text-[#1A231E]">
              Question {currentStep + 1} of {questions.length}
            </span>
            <Badge variant="outline" className="bg-white border-[#4F6F52] text-[#4F6F52]">
              {currentQuestion.category === "health" ? "Health Assessment" : "Financial Assessment"}
            </Badge>
          </div>
          <div className="h-3 bg-[#E8E5DF] rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#4F6F52] to-[#3A5140] transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <Card className="border-[#E8E5DF] shadow-soft-xl bg-white">
          <CardHeader className="space-y-3">
            <CardTitle className="text-2xl sm:text-3xl font-serif text-[#1A231E] text-balance">
              {currentQuestion.question}
            </CardTitle>
            {currentQuestion.helperText && (
              <CardDescription className="text-base text-[#1A231E]/60">{currentQuestion.helperText}</CardDescription>
            )}
          </CardHeader>
          <CardContent className="space-y-6">
            <RadioGroup value={answers[currentQuestion.id] || ""} onValueChange={handleAnswer} className="space-y-3">
              {currentQuestion.options?.map((option) => (
                <label
                  key={option.value}
                  className={`flex items-start gap-4 p-5 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                    answers[currentQuestion.id] === option.value
                      ? "border-[#4F6F52] bg-[#4F6F52]/5 shadow-sm"
                      : "border-[#E8E5DF] hover:border-[#4F6F52]/40 hover:bg-[#FDFBF7]"
                  }`}
                >
                  <RadioGroupItem value={option.value} id={option.value} className="mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <Label
                      htmlFor={option.value}
                      className="text-base font-medium text-[#1A231E] cursor-pointer leading-relaxed"
                    >
                      {option.label}
                    </Label>
                  </div>
                  {answers[currentQuestion.id] === option.value && (
                    <CheckCircle2 className="w-5 h-5 text-[#4F6F52] flex-shrink-0 mt-1" />
                  )}
                </label>
              ))}
            </RadioGroup>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between gap-4 pt-6 border-t border-[#E8E5DF]">
              <Button
                variant="outline"
                onClick={handleBack}
                disabled={currentStep === 0}
                className="border-[#E8E5DF] hover:bg-[#FDFBF7] bg-transparent"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>

              {!isLastQuestion ? (
                <Button
                  onClick={handleNext}
                  disabled={!canProceed}
                  className="bg-gradient-to-r from-[#4F6F52] to-[#3A5140] hover:from-[#3A5140] hover:to-[#4F6F52] text-white shadow-soft-lg"
                >
                  Next Question
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  disabled={!canProceed || isSubmitting}
                  className="bg-gradient-to-r from-[#8B7355] to-[#6F5D47] hover:from-[#6F5D47] hover:to-[#8B7355] text-white shadow-soft-lg"
                >
                  {isSubmitting ? "Processing..." : "Get My Report - £19.99"}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              )}
            </div>

            {/* Trust Signals */}
            {isLastQuestion && (
              <div className="flex items-center justify-center gap-6 pt-4 text-sm text-[#1A231E]/60">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[#4F6F52]" />
                  <span>Secure Payment</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4F6F52]" />
                  <span>Instant Report</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4F6F52]" />
                  <span>30-Day Guarantee</span>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
