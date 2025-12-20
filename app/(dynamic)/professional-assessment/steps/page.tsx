"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import {
  ChevronLeft,
  ChevronRight,
  Check,
  MapPin,
  Heart,
  PoundSterling,
  Clock,
  User,
  Home,
  Brain,
  Stethoscope,
  HelpCircle,
  Coins,
  Building2,
  Calendar,
  Shield,
  AlertTriangle,
  Pill,
  Accessibility,
  UtensilsCrossed,
  Phone,
  Mail,
  UserPlus,
  Target,
  Activity,
  HeartPulse,
  Eye,
  Ear,
  Bed,
  Car,
  Scale,
  Apple,
  Leaf,
  Wheat,
  Cookie,
  CircleOff,
  Moon,
  Users,
} from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PrioritiesStep } from "@/components/professional-assessment/priorities-step"

export type ProfessionalAssessmentData = {
  // Contact
  full_name: string
  email: string
  phone: string
  emergency_contact: string

  // Location
  preferred_location: string
  max_distance: string
  placement_timeline: string

  // Medical
  care_types: string[]
  medical_conditions: string[]
  mobility_level: string
  medication_management: string
  special_equipment: string[]

  // Safety
  fall_history: string
  major_allergies: string[]
  dietary_requirements: string[]
  behavioral_concerns: string[]

  // Budget
  monthly_budget: string

  // Priorities
  priority_order?: string[]
  priority_weights?: number[]
}

const STEPS = [
  {
    id: "name",
    label: "Your Name",
    icon: User,
    category: "Contact",
    reinforcement: "Thank you. Let's continue with your details.",
  },
  {
    id: "email",
    label: "Email",
    icon: Mail,
    category: "Contact",
    reinforcement: "Perfect. We'll send your report here.",
  },
  {
    id: "phone",
    label: "Phone",
    icon: Phone,
    category: "Contact",
    reinforcement: "Great. We may call to clarify details.",
  },
  {
    id: "emergency",
    label: "Emergency",
    icon: UserPlus,
    category: "Contact",
    reinforcement: "Important contact noted.",
  },
  {
    id: "location",
    label: "Location",
    icon: MapPin,
    category: "Location",
    reinforcement: "Excellent. Now we know where to search.",
  },
  {
    id: "distance",
    label: "Distance",
    icon: Target,
    category: "Location",
    reinforcement: "Understood. We'll focus on this area.",
  },
  {
    id: "timeline",
    label: "Timeline",
    icon: Calendar,
    category: "Location",
    reinforcement: "Timing noted. We'll prioritise accordingly.",
  },
  {
    id: "care_type",
    label: "Care Type",
    icon: Heart,
    category: "Medical",
    reinforcement: "This helps us find specialist homes.",
  },
  {
    id: "conditions",
    label: "Conditions",
    icon: Activity,
    category: "Medical",
    reinforcement: "We'll match homes with appropriate support.",
  },
  {
    id: "mobility",
    label: "Mobility",
    icon: Accessibility,
    category: "Medical",
    reinforcement: "Accessibility requirements noted.",
  },
  {
    id: "medication",
    label: "Medication",
    icon: Pill,
    category: "Medical",
    reinforcement: "We'll ensure proper medication management.",
  },
  {
    id: "equipment",
    label: "Equipment",
    icon: Bed,
    category: "Medical",
    reinforcement: "Special equipment needs recorded.",
  },
  {
    id: "falls",
    label: "Fall Risk",
    icon: AlertTriangle,
    category: "Safety",
    reinforcement: "Safety history is crucial. Thank you.",
  },
  {
    id: "allergies",
    label: "Allergies",
    icon: Shield,
    category: "Safety",
    reinforcement: "Allergy information saved.",
  },
  { id: "dietary", label: "Dietary", icon: UtensilsCrossed, category: "Safety", reinforcement: "Dietary needs noted." },
  {
    id: "behavioral",
    label: "Behaviour",
    icon: Users,
    category: "Safety",
    reinforcement: "Nearly there — just one more question.",
  },
  { id: "budget", label: "Budget", icon: PoundSterling, category: "Budget", reinforcement: "" },
  { id: "priorities", label: "Priorities", icon: Target, category: "Priorities", reinforcement: "" },
]

const CATEGORIES = ["Contact", "Location", "Medical", "Safety", "Budget", "Priorities"]

const TOTAL_STEPS = STEPS.length

interface OptionCardProps {
  value: string
  label: string
  description?: string
  icon: React.ElementType
  colour: string
  bgColor: string
  selected: boolean
  onClick: () => void
}

function OptionCard({ value, label, description, icon: Icon, colour, bgColor, selected, onClick }: OptionCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
        selected
          ? "border-[#4F6F52] bg-[#4F6F52]/5 shadow-md"
          : "border-border hover:border-[#4F6F52]/50 hover:bg-muted/50"
      }`}
    >
      <div className="flex items-start gap-3">
        <div className={`p-2.5 rounded-xl ${selected ? "bg-[#4F6F52]/20" : bgColor}`}>
          <Icon className={`w-5 h-5 ${selected ? "text-[#4F6F52]" : colour}`} />
        </div>
        <div className="flex-1 min-w-0">
          <p className={`font-medium ${selected ? "text-[#4F6F52]" : "text-foreground"}`}>{label}</p>
          {description && <p className="text-sm text-muted-foreground mt-0.5">{description}</p>}
        </div>
        {selected && (
          <div className="w-6 h-6 rounded-full bg-[#4F6F52] flex items-center justify-centre flex-shrink-0">
            <Check className="w-4 h-4 text-white" />
          </div>
        )}
      </div>
    </button>
  )
}

interface CheckboxOptionProps {
  value: string
  label: string
  description?: string
  icon: React.ElementType
  colour: string
  bgColor: string
  checked: boolean
  onChange: (checked: boolean) => void
}

function CheckboxOption({
  value,
  label,
  description,
  icon: Icon,
  colour,
  bgColor,
  checked,
  onChange,
}: CheckboxOptionProps) {
  return (
    <label
      className={`flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
        checked
          ? "border-[#4F6F52] bg-[#4F6F52]/5 shadow-md"
          : "border-border hover:border-[#4F6F52]/50 hover:bg-muted/50"
      }`}
    >
      <div className={`p-2 rounded-xl ${checked ? "bg-[#4F6F52]/20" : bgColor}`}>
        <Icon className={`w-5 h-5 ${checked ? "text-[#4F6F52]" : colour}`} />
      </div>
      <div className="flex-1 min-w-0">
        <p className={`font-medium ${checked ? "text-[#4F6F52]" : "text-foreground"}`}>{label}</p>
        {description && <p className="text-sm text-muted-foreground mt-0.5">{description}</p>}
      </div>
      <Checkbox checked={checked} onCheckedChange={onChange} className="mt-1" />
    </label>
  )
}

// Care type options
const careTypeOptions = [
  {
    value: "residential_care",
    label: "Residential Care",
    description: "Help with daily living activities",
    icon: Home,
    colour: "text-[#4F6F52]",
    bgColor: "bg-[#4F6F52]/10",
  },
  {
    value: "dementia_care",
    label: "Dementia Care",
    description: "Specialist memory care support",
    icon: Brain,
    colour: "text-[#7C6A9A]",
    bgColor: "bg-[#7C6A9A]/10",
  },
  {
    value: "nursing_care",
    label: "Nursing Care",
    description: "24-hour nursing support",
    icon: Stethoscope,
    colour: "text-[#4A90A4]",
    bgColor: "bg-[#4A90A4]/10",
  },
  {
    value: "palliative_care",
    label: "Palliative Care",
    description: "End-of-life comfort care",
    icon: HeartPulse,
    colour: "text-[#C7A17A]",
    bgColor: "bg-[#C7A17A]/10",
  },
  {
    value: "respite_care",
    label: "Respite Care",
    description: "Short-term care breaks",
    icon: Calendar,
    colour: "text-[#6B8E6B]",
    bgColor: "bg-[#6B8E6B]/10",
  },
]

// Medical conditions options
const medicalConditionsOptions = [
  {
    value: "dementia",
    label: "Dementia / Alzheimer's",
    icon: Brain,
    colour: "text-[#7C6A9A]",
    bgColor: "bg-[#7C6A9A]/10",
  },
  {
    value: "parkinsons",
    label: "Parkinson's Disease",
    icon: Activity,
    colour: "text-[#4A90A4]",
    bgColor: "bg-[#4A90A4]/10",
  },
  { value: "stroke", label: "Stroke Recovery", icon: HeartPulse, colour: "text-[#C7A17A]", bgColor: "bg-[#C7A17A]/10" },
  { value: "heart", label: "Heart Conditions", icon: Heart, colour: "text-red-500", bgColor: "bg-red-500/10" },
  { value: "diabetes", label: "Diabetes", icon: Activity, colour: "text-[#4F6F52]", bgColor: "bg-[#4F6F52]/10" },
  { value: "arthritis", label: "Arthritis", icon: Accessibility, colour: "text-[#6B8E6B]", bgColor: "bg-[#6B8E6B]/10" },
  { value: "vision", label: "Visual Impairment", icon: Eye, colour: "text-[#4A90A4]", bgColor: "bg-[#4A90A4]/10" },
  { value: "hearing", label: "Hearing Impairment", icon: Ear, colour: "text-[#7C6A9A]", bgColor: "bg-[#7C6A9A]/10" },
  { value: "none", label: "None of the above", icon: CircleOff, colour: "text-muted-foreground", bgColor: "bg-muted" },
]

// Mobility options
const mobilityOptions = [
  {
    value: "independent",
    label: "Fully Independent",
    description: "Walks without assistance",
    icon: User,
    colour: "text-[#4F6F52]",
    bgColor: "bg-[#4F6F52]/10",
  },
  {
    value: "walking_aid",
    label: "Uses Walking Aid",
    description: "Stick, frame, or walker",
    icon: Accessibility,
    colour: "text-[#6B8E6B]",
    bgColor: "bg-[#6B8E6B]/10",
  },
  {
    value: "wheelchair",
    label: "Wheelchair User",
    description: "Requires wheelchair most of the time",
    icon: Accessibility,
    colour: "text-[#4A90A4]",
    bgColor: "bg-[#4A90A4]/10",
  },
  {
    value: "bed_bound",
    label: "Bed Bound",
    description: "Limited to bed or chair",
    icon: Bed,
    colour: "text-[#C7A17A]",
    bgColor: "bg-[#C7A17A]/10",
  },
]

// Medication options
const medicationOptions = [
  {
    value: "self_manage",
    label: "Self-Managed",
    description: "Can manage own medication",
    icon: User,
    colour: "text-[#4F6F52]",
    bgColor: "bg-[#4F6F52]/10",
  },
  {
    value: "reminders",
    label: "Needs Reminders",
    description: "Reminders to take medication",
    icon: Clock,
    colour: "text-[#6B8E6B]",
    bgColor: "bg-[#6B8E6B]/10",
  },
  {
    value: "administration",
    label: "Full Administration",
    description: "Staff to administer medication",
    icon: Pill,
    colour: "text-[#4A90A4]",
    bgColor: "bg-[#4A90A4]/10",
  },
  {
    value: "complex",
    label: "Complex Medication",
    description: "Injections or special handling",
    icon: Stethoscope,
    colour: "text-[#C7A17A]",
    bgColor: "bg-[#C7A17A]/10",
  },
]

// Equipment options
const equipmentOptions = [
  {
    value: "none",
    label: "No Special Equipment",
    icon: CircleOff,
    colour: "text-muted-foreground",
    bgColor: "bg-muted",
  },
  {
    value: "hospital_bed",
    label: "Hospital-Style Bed",
    icon: Bed,
    colour: "text-[#4A90A4]",
    bgColor: "bg-[#4A90A4]/10",
  },
  { value: "hoist", label: "Hoist / Lift", icon: Accessibility, colour: "text-[#6B8E6B]", bgColor: "bg-[#6B8E6B]/10" },
  { value: "oxygen", label: "Oxygen Equipment", icon: Activity, colour: "text-[#C7A17A]", bgColor: "bg-[#C7A17A]/10" },
  {
    value: "pressure_mattress",
    label: "Pressure Relief Mattress",
    icon: Bed,
    colour: "text-[#7C6A9A]",
    bgColor: "bg-[#7C6A9A]/10",
  },
]

// Fall history options
const fallHistoryOptions = [
  {
    value: "none",
    label: "No Falls",
    description: "No falls in the past year",
    icon: Check,
    colour: "text-[#4F6F52]",
    bgColor: "bg-[#4F6F52]/10",
  },
  {
    value: "occasional",
    label: "Occasional Falls",
    description: "1-2 falls in the past year",
    icon: AlertTriangle,
    colour: "text-[#C7A17A]",
    bgColor: "bg-[#C7A17A]/10",
  },
  {
    value: "frequent",
    label: "Frequent Falls",
    description: "3+ falls in the past year",
    icon: AlertTriangle,
    colour: "text-red-500",
    bgColor: "bg-red-500/10",
  },
  {
    value: "recent",
    label: "Recent Serious Fall",
    description: "Required hospital treatment",
    icon: Stethoscope,
    colour: "text-[#4A90A4]",
    bgColor: "bg-[#4A90A4]/10",
  },
]

// Allergy options
const allergyOptions = [
  { value: "none", label: "No Known Allergies", icon: Check, colour: "text-[#4F6F52]", bgColor: "bg-[#4F6F52]/10" },
  {
    value: "penicillin",
    label: "Penicillin / Antibiotics",
    icon: Pill,
    colour: "text-[#C7A17A]",
    bgColor: "bg-[#C7A17A]/10",
  },
  { value: "latex", label: "Latex", icon: Shield, colour: "text-[#4A90A4]", bgColor: "bg-[#4A90A4]/10" },
  {
    value: "food",
    label: "Food Allergies",
    icon: UtensilsCrossed,
    colour: "text-[#7C6A9A]",
    bgColor: "bg-[#7C6A9A]/10",
  },
  { value: "other", label: "Other Allergies", icon: AlertTriangle, colour: "text-red-500", bgColor: "bg-red-500/10" },
]

// Dietary options
const dietaryOptions = [
  { value: "none", label: "No Special Requirements", icon: Check, colour: "text-[#4F6F52]", bgColor: "bg-[#4F6F52]/10" },
  { value: "vegetarian", label: "Vegetarian", icon: Leaf, colour: "text-[#6B8E6B]", bgColor: "bg-[#6B8E6B]/10" },
  { value: "vegan", label: "Vegan", icon: Apple, colour: "text-[#4F6F52]", bgColor: "bg-[#4F6F52]/10" },
  { value: "halal", label: "Halal", icon: UtensilsCrossed, colour: "text-[#C7A17A]", bgColor: "bg-[#C7A17A]/10" },
  { value: "kosher", label: "Kosher", icon: UtensilsCrossed, colour: "text-[#4A90A4]", bgColor: "bg-[#4A90A4]/10" },
  { value: "diabetic", label: "Diabetic Diet", icon: Scale, colour: "text-[#7C6A9A]", bgColor: "bg-[#7C6A9A]/10" },
  { value: "soft", label: "Soft / Pureed Food", icon: Cookie, colour: "text-[#6B8E6B]", bgColor: "bg-[#6B8E6B]/10" },
  { value: "gluten_free", label: "Gluten Free", icon: Wheat, colour: "text-[#C7A17A]", bgColor: "bg-[#C7A17A]/10" },
]

// Behavioral options
const behavioralOptions = [
  {
    value: "none",
    label: "No Concerns",
    description: "No behavioral issues",
    icon: Check,
    colour: "text-[#4F6F52]",
    bgColor: "bg-[#4F6F52]/10",
  },
  {
    value: "wandering",
    label: "Wandering Risk",
    description: "May wander or get lost",
    icon: MapPin,
    colour: "text-[#C7A17A]",
    bgColor: "bg-[#C7A17A]/10",
  },
  {
    value: "aggression",
    label: "Aggression Risk",
    description: "May become agitated",
    icon: AlertTriangle,
    colour: "text-red-500",
    bgColor: "bg-red-500/10",
  },
  {
    value: "sundowning",
    label: "Sundowning",
    description: "Evening confusion/agitation",
    icon: Moon,
    colour: "text-[#7C6A9A]",
    bgColor: "bg-[#7C6A9A]/10",
  },
  {
    value: "depression",
    label: "Depression / Anxiety",
    description: "Mental health support needed",
    icon: Heart,
    colour: "text-[#4A90A4]",
    bgColor: "bg-[#4A90A4]/10",
  },
]

// Distance options
const distanceOptions = [
  {
    value: "5",
    label: "Within 5 miles",
    description: "Very close to home",
    icon: Target,
    colour: "text-[#4F6F52]",
    bgColor: "bg-[#4F6F52]/10",
  },
  {
    value: "10",
    label: "Within 10 miles",
    description: "Short drive away",
    icon: Car,
    colour: "text-[#6B8E6B]",
    bgColor: "bg-[#6B8E6B]/10",
  },
  {
    value: "25",
    label: "Within 25 miles",
    description: "Wider search area",
    icon: MapPin,
    colour: "text-[#4A90A4]",
    bgColor: "bg-[#4A90A4]/10",
  },
  {
    value: "any",
    label: "Anywhere suitable",
    description: "Best match regardless of distance",
    icon: Target,
    colour: "text-[#C7A17A]",
    bgColor: "bg-[#C7A17A]/10",
  },
]

// Timeline options
const timelineOptions = [
  {
    value: "urgent",
    label: "Urgent (Within 2 weeks)",
    description: "Immediate placement needed",
    icon: AlertTriangle,
    colour: "text-red-500",
    bgColor: "bg-red-500/10",
  },
  {
    value: "soon",
    label: "Soon (1-2 months)",
    description: "Planning ahead",
    icon: Calendar,
    colour: "text-[#C7A17A]",
    bgColor: "bg-[#C7A17A]/10",
  },
  {
    value: "planning",
    label: "Planning (3-6 months)",
    description: "Researching options",
    icon: Clock,
    colour: "text-[#4F6F52]",
    bgColor: "bg-[#4F6F52]/10",
  },
  {
    value: "future",
    label: "Future Planning",
    description: "6+ months away",
    icon: Calendar,
    colour: "text-[#6B8E6B]",
    bgColor: "bg-[#6B8E6B]/10",
  },
]

// Budget options
const budgetOptions = [
  {
    value: "under_1000",
    label: "Under £1,000/week",
    description: "Council-funded rate",
    icon: PoundSterling,
    colour: "text-[#6B8E6B]",
    bgColor: "bg-[#6B8E6B]/10",
  },
  {
    value: "1000_1500",
    label: "£1,000 - £1,500/week",
    description: "Standard private rate",
    icon: Coins,
    colour: "text-[#4F6F52]",
    bgColor: "bg-[#4F6F52]/10",
  },
  {
    value: "1500_2000",
    label: "£1,500 - £2,000/week",
    description: "Premium care homes",
    icon: Building2,
    colour: "text-[#4A90A4]",
    bgColor: "bg-[#4A90A4]/10",
  },
  {
    value: "over_2000",
    label: "Over £2,000/week",
    description: "Luxury care homes",
    icon: Home,
    colour: "text-[#C7A17A]",
    bgColor: "bg-[#C7A17A]/10",
  },
  {
    value: "unsure",
    label: "Not Sure Yet",
    description: "Help me understand costs",
    icon: HelpCircle,
    colour: "text-muted-foreground",
    bgColor: "bg-muted",
  },
]

export default function ProfessionalAssessmentStepsPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(0)
  const [showReinforcement, setShowReinforcement] = useState(false)
  const [formData, setFormData] = useState<ProfessionalAssessmentData>({
    full_name: "",
    email: "",
    phone: "",
    emergency_contact: "",
    preferred_location: "",
    max_distance: "",
    placement_timeline: "",
    care_types: [],
    medical_conditions: [],
    mobility_level: "",
    medication_management: "",
    special_equipment: [],
    fall_history: "",
    major_allergies: [],
    dietary_requirements: [],
    behavioral_concerns: [],
    monthly_budget: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Load saved data
  useEffect(() => {
    const saved = localStorage.getItem("professional-assessment-v3")
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        setFormData(parsed.data)
        setCurrentStep(parsed.step || 0)
      } catch (e) {
        console.error("Failed to restore draft", e)
      }
    }
  }, [])

  // Save on change
  useEffect(() => {
    localStorage.setItem("professional-assessment-v3", JSON.stringify({ data: formData, step: currentStep }))
  }, [formData, currentStep])

  const currentStepData = STEPS[currentStep]
  const currentCategory = currentStepData?.category

  // Get category progress
  const getCategorySteps = () => {
    const categories: { [key: string]: number[] } = {}
    STEPS.forEach((step, index) => {
      if (!categories[step.category]) categories[step.category] = []
      categories[step.category].push(index)
    })
    return categories
  }

  const categorySteps = getCategorySteps()

  // Validation for each step
  const validateCurrentStep = (): boolean => {
    const newErrors: Record<string, string> = {}
    const stepId = STEPS[currentStep].id

    switch (stepId) {
      case "name":
        if (!formData.full_name.trim()) newErrors.full_name = "Please enter your full name"
        break
      case "email":
        if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          newErrors.email = "Please enter a valid email address"
        }
        break
      case "phone":
        if (!formData.phone.trim()) newErrors.phone = "Please enter a contact number"
        break
      case "emergency":
        if (!formData.emergency_contact.trim()) newErrors.emergency_contact = "Please enter an emergency contact"
        break
      case "location":
        if (!formData.preferred_location.trim()) newErrors.preferred_location = "Please enter a location or postcode"
        break
      case "distance":
        if (!formData.max_distance) newErrors.max_distance = "Please select a distance"
        break
      case "timeline":
        if (!formData.placement_timeline) newErrors.placement_timeline = "Please select a timeline"
        break
      case "care_type":
        if (formData.care_types.length === 0) newErrors.care_types = "Please select at least one care type"
        break
      case "conditions":
        if (formData.medical_conditions.length === 0) newErrors.medical_conditions = "Please select at least one option"
        break
      case "mobility":
        if (!formData.mobility_level) newErrors.mobility_level = "Please select mobility level"
        break
      case "medication":
        if (!formData.medication_management) newErrors.medication_management = "Please select medication needs"
        break
      case "equipment":
        if (formData.special_equipment.length === 0) newErrors.special_equipment = "Please select at least one option"
        break
      case "falls":
        if (!formData.fall_history) newErrors.fall_history = "Please select fall history"
        break
      case "allergies":
        if (formData.major_allergies.length === 0) newErrors.major_allergies = "Please select at least one option"
        break
      case "dietary":
        if (formData.dietary_requirements.length === 0)
          newErrors.dietary_requirements = "Please select at least one option"
        break
      case "behavioral":
        if (formData.behavioral_concerns.length === 0)
          newErrors.behavioral_concerns = "Please select at least one option"
        break
      case "budget":
        if (!formData.monthly_budget) newErrors.monthly_budget = "Please select a budget range"
        break
      case "priorities":
        // Priorities step is always valid - has defaults
        break
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Handle single select with auto-advance
  const handleSingleSelect = (field: keyof ProfessionalAssessmentData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    setErrors({})

    // Show reinforcement and auto-advance
    setTimeout(() => {
      setShowReinforcement(true)
      setTimeout(() => {
        setShowReinforcement(false)
        if (currentStep < TOTAL_STEPS - 1) {
          setCurrentStep((prev) => prev + 1)
          window.scrollTo({ top: 0, behavior: "smooth" })
        }
      }, 1200)
    }, 300)
  }

  // Handle multi-select (no auto-advance)
  const handleMultiSelect = (field: keyof ProfessionalAssessmentData, value: string, checked: boolean) => {
    setFormData((prev) => {
      const currentValues = prev[field] as string[]
      if (checked) {
        // If selecting "none" type options, clear others
        if (value === "none") {
          return { ...prev, [field]: [value] }
        }
        // If selecting other options, remove "none"
        const filtered = currentValues.filter((v) => v !== "none")
        return { ...prev, [field]: [...filtered, value] }
      } else {
        return { ...prev, [field]: currentValues.filter((v) => v !== value) }
      }
    })
    setErrors({})
  }

  // Handle text input
  const handleTextInput = (field: keyof ProfessionalAssessmentData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    setErrors({})
  }

  // Handle next
  const handleNext = () => {
    if (validateCurrentStep()) {
      if (currentStep < TOTAL_STEPS - 1) {
        setShowReinforcement(true)
        setTimeout(() => {
          setShowReinforcement(false)
          setCurrentStep((prev) => prev + 1)
          window.scrollTo({ top: 0, behavior: "smooth" })
        }, 1200)
      } else {
        handleSubmit()
      }
    }
  }

  // Handle back
  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  // Handle submit
  const handleSubmit = async () => {
    if (!validateCurrentStep()) return
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/assessments/professional", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!response.ok) throw new Error("Submission failed")

      const result = await response.json()
      localStorage.removeItem("professional-assessment-v3")

      const queryParams = new URLSearchParams({
        ref: result.reference,
        name: formData.full_name,
        location: formData.preferred_location,
      })

      router.push(`/assessment-checkout?${queryParams.toString()}`)
    } catch (error) {
      console.error("Submission error:", error)
      setErrors({ submit: "Something went wrong. Please try again." })
    } finally {
      setIsSubmitting(false)
    }
  }

  // Render step content
  const handlePrioritiesComplete = (priorities: string[], weights: number[]) => {
    setFormData((prev) => ({
      ...prev,
      priority_order: priorities,
      priority_weights: weights,
    }))
    setErrors({})
    // Auto-advance after priorities are confirmed
    setTimeout(() => {
      if (currentStep < TOTAL_STEPS - 1) {
        setCurrentStep((prev) => prev + 1)
        window.scrollTo({ top: 0, behavior: "smooth" })
      } else {
        handleSubmit()
      }
    }, 1000)
  }

  const renderStepContent = () => {
    const stepId = STEPS[currentStep].id

    switch (stepId) {
      case "name":
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="full_name" className="text-base font-medium">
                What is the full name of the person who needs care?
              </Label>
              <p className="text-sm text-muted-foreground mt-1">This helps us personalise your report</p>
            </div>
            <Input
              id="full_name"
              value={formData.full_name}
              onChange={(e) => handleTextInput("full_name", e.target.value)}
              placeholder="e.g. Margaret Smith"
              className={`h-14 text-lg ${errors.full_name ? "border-destructive" : ""}`}
              autoFocus
            />
            {errors.full_name && <p className="text-sm text-destructive">{errors.full_name}</p>}
          </div>
        )

      case "email":
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="email" className="text-base font-medium">
                Your email address
              </Label>
              <p className="text-sm text-muted-foreground mt-1">We'll send your professional report here</p>
            </div>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleTextInput("email", e.target.value)}
              placeholder="e.g. you@example.com"
              className={`h-14 text-lg ${errors.email ? "border-destructive" : ""}`}
              autoFocus
            />
            {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
          </div>
        )

      case "phone":
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="phone" className="text-base font-medium">
                Your contact phone number
              </Label>
              <p className="text-sm text-muted-foreground mt-1">We may call to clarify care requirements</p>
            </div>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleTextInput("phone", e.target.value)}
              placeholder="e.g. 07700 900123"
              className={`h-14 text-lg ${errors.phone ? "border-destructive" : ""}`}
              autoFocus
            />
            {errors.phone && <p className="text-sm text-destructive">{errors.phone}</p>}
          </div>
        )

      case "emergency":
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="emergency_contact" className="text-base font-medium">
                Emergency contact name and phone
              </Label>
              <p className="text-sm text-muted-foreground mt-1">A family member or friend we can contact if needed</p>
            </div>
            <Input
              id="emergency_contact"
              value={formData.emergency_contact}
              onChange={(e) => handleTextInput("emergency_contact", e.target.value)}
              placeholder="e.g. John Smith - 07700 900456"
              className={`h-14 text-lg ${errors.emergency_contact ? "border-destructive" : ""}`}
              autoFocus
            />
            {errors.emergency_contact && <p className="text-sm text-destructive">{errors.emergency_contact}</p>}
          </div>
        )

      case "location":
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="preferred_location" className="text-base font-medium">
                What area are you looking in?
              </Label>
              <p className="text-sm text-muted-foreground mt-1">Enter a town, city, or postcode</p>
            </div>
            <Input
              id="preferred_location"
              value={formData.preferred_location}
              onChange={(e) => handleTextInput("preferred_location", e.target.value)}
              placeholder="e.g. Birmingham or B15 2TT"
              className={`h-14 text-lg ${errors.preferred_location ? "border-destructive" : ""}`}
              autoFocus
            />
            {errors.preferred_location && <p className="text-sm text-destructive">{errors.preferred_location}</p>}
          </div>
        )

      case "distance":
        return (
          <div className="space-y-4">
            <div>
              <p className="text-base font-medium">How far from this location are you willing to search?</p>
              <p className="text-sm text-muted-foreground mt-1">A wider area gives more options</p>
            </div>
            <div className="grid gap-3">
              {distanceOptions.map((option) => (
                <OptionCard
                  key={option.value}
                  {...option}
                  selected={formData.max_distance === option.value}
                  onClick={() => handleSingleSelect("max_distance", option.value)}
                />
              ))}
            </div>
            {errors.max_distance && <p className="text-sm text-destructive">{errors.max_distance}</p>}
          </div>
        )

      case "timeline":
        return (
          <div className="space-y-4">
            <div>
              <p className="text-base font-medium">How soon do you need care?</p>
              <p className="text-sm text-muted-foreground mt-1">This helps us prioritise your search</p>
            </div>
            <div className="grid gap-3">
              {timelineOptions.map((option) => (
                <OptionCard
                  key={option.value}
                  {...option}
                  selected={formData.placement_timeline === option.value}
                  onClick={() => handleSingleSelect("placement_timeline", option.value)}
                />
              ))}
            </div>
            {errors.placement_timeline && <p className="text-sm text-destructive">{errors.placement_timeline}</p>}
          </div>
        )

      case "care_type":
        return (
          <div className="space-y-4">
            <div>
              <p className="text-base font-medium">What type of care is needed?</p>
              <p className="text-sm text-muted-foreground mt-1">Select all that apply</p>
            </div>
            <div className="grid gap-3">
              {careTypeOptions.map((option) => (
                <CheckboxOption
                  key={option.value}
                  {...option}
                  checked={formData.care_types.includes(option.value)}
                  onChange={(checked) => handleMultiSelect("care_types", option.value, checked)}
                />
              ))}
            </div>
            {errors.care_types && <p className="text-sm text-destructive">{errors.care_types}</p>}
          </div>
        )

      case "conditions":
        return (
          <div className="space-y-4">
            <div>
              <p className="text-base font-medium">Are there any medical conditions we should know about?</p>
              <p className="text-sm text-muted-foreground mt-1">Select all that apply</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {medicalConditionsOptions.map((option) => (
                <CheckboxOption
                  key={option.value}
                  value={option.value}
                  label={option.label}
                  icon={option.icon}
                  colour={option.colour}
                  bgColor={option.bgColor}
                  checked={formData.medical_conditions.includes(option.value)}
                  onChange={(checked) => handleMultiSelect("medical_conditions", option.value, checked)}
                />
              ))}
            </div>
            {errors.medical_conditions && <p className="text-sm text-destructive">{errors.medical_conditions}</p>}
          </div>
        )

      case "mobility":
        return (
          <div className="space-y-4">
            <div>
              <p className="text-base font-medium">What is the current mobility level?</p>
              <p className="text-sm text-muted-foreground mt-1">This affects room and facility requirements</p>
            </div>
            <div className="grid gap-3">
              {mobilityOptions.map((option) => (
                <OptionCard
                  key={option.value}
                  {...option}
                  selected={formData.mobility_level === option.value}
                  onClick={() => handleSingleSelect("mobility_level", option.value)}
                />
              ))}
            </div>
            {errors.mobility_level && <p className="text-sm text-destructive">{errors.mobility_level}</p>}
          </div>
        )

      case "medication":
        return (
          <div className="space-y-4">
            <div>
              <p className="text-base font-medium">What level of medication support is needed?</p>
              <p className="text-sm text-muted-foreground mt-1">This ensures proper care planning</p>
            </div>
            <div className="grid gap-3">
              {medicationOptions.map((option) => (
                <OptionCard
                  key={option.value}
                  {...option}
                  selected={formData.medication_management === option.value}
                  onClick={() => handleSingleSelect("medication_management", option.value)}
                />
              ))}
            </div>
            {errors.medication_management && <p className="text-sm text-destructive">{errors.medication_management}</p>}
          </div>
        )

      case "equipment":
        return (
          <div className="space-y-4">
            <div>
              <p className="text-base font-medium">Is any special equipment required?</p>
              <p className="text-sm text-muted-foreground mt-1">Select all that apply</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {equipmentOptions.map((option) => (
                <CheckboxOption
                  key={option.value}
                  value={option.value}
                  label={option.label}
                  icon={option.icon}
                  colour={option.colour}
                  bgColor={option.bgColor}
                  checked={formData.special_equipment.includes(option.value)}
                  onChange={(checked) => handleMultiSelect("special_equipment", option.value, checked)}
                />
              ))}
            </div>
            {errors.special_equipment && <p className="text-sm text-destructive">{errors.special_equipment}</p>}
          </div>
        )

      case "falls":
        return (
          <div className="space-y-4">
            <div>
              <p className="text-base font-medium">Has there been any history of falls?</p>
              <p className="text-sm text-muted-foreground mt-1">This is important for safety planning</p>
            </div>
            <div className="grid gap-3">
              {fallHistoryOptions.map((option) => (
                <OptionCard
                  key={option.value}
                  {...option}
                  selected={formData.fall_history === option.value}
                  onClick={() => handleSingleSelect("fall_history", option.value)}
                />
              ))}
            </div>
            {errors.fall_history && <p className="text-sm text-destructive">{errors.fall_history}</p>}
          </div>
        )

      case "allergies":
        return (
          <div className="space-y-4">
            <div>
              <p className="text-base font-medium">Are there any known allergies?</p>
              <p className="text-sm text-muted-foreground mt-1">Select all that apply</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {allergyOptions.map((option) => (
                <CheckboxOption
                  key={option.value}
                  value={option.value}
                  label={option.label}
                  icon={option.icon}
                  colour={option.colour}
                  bgColor={option.bgColor}
                  checked={formData.major_allergies.includes(option.value)}
                  onChange={(checked) => handleMultiSelect("major_allergies", option.value, checked)}
                />
              ))}
            </div>
            {errors.major_allergies && <p className="text-sm text-destructive">{errors.major_allergies}</p>}
          </div>
        )

      case "dietary":
        return (
          <div className="space-y-4">
            <div>
              <p className="text-base font-medium">Any dietary requirements?</p>
              <p className="text-sm text-muted-foreground mt-1">Select all that apply</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {dietaryOptions.map((option) => (
                <CheckboxOption
                  key={option.value}
                  value={option.value}
                  label={option.label}
                  icon={option.icon}
                  colour={option.colour}
                  bgColor={option.bgColor}
                  checked={formData.dietary_requirements.includes(option.value)}
                  onChange={(checked) => handleMultiSelect("dietary_requirements", option.value, checked)}
                />
              ))}
            </div>
            {errors.dietary_requirements && <p className="text-sm text-destructive">{errors.dietary_requirements}</p>}
          </div>
        )

      case "behavioral":
        return (
          <div className="space-y-4">
            <div>
              <p className="text-base font-medium">Are there any behavioural considerations?</p>
              <p className="text-sm text-muted-foreground mt-1">Select all that apply — this is confidential</p>
            </div>
            <div className="grid gap-3">
              {behavioralOptions.map((option) => (
                <CheckboxOption
                  key={option.value}
                  value={option.value}
                  label={option.label}
                  description={option.description}
                  icon={option.icon}
                  colour={option.colour}
                  bgColor={option.bgColor}
                  checked={formData.behavioral_concerns.includes(option.value)}
                  onChange={(checked) => handleMultiSelect("behavioral_concerns", option.value, checked)}
                />
              ))}
            </div>
            {errors.behavioral_concerns && <p className="text-sm text-destructive">{errors.behavioral_concerns}</p>}
          </div>
        )

      case "budget":
        return (
          <div className="space-y-4">
            <div>
              <p className="text-base font-medium">What is your approximate weekly budget for care?</p>
              <p className="text-sm text-muted-foreground mt-1">This helps us find homes within your range</p>
            </div>
            <div className="grid gap-3">
              {budgetOptions.map((option) => (
                <OptionCard
                  key={option.value}
                  {...option}
                  selected={formData.monthly_budget === option.value}
                  onClick={() => {
                    setFormData((prev) => ({ ...prev, monthly_budget: option.value }))
                    setErrors({})
                  }}
                />
              ))}
            </div>
            {errors.monthly_budget && <p className="text-sm text-destructive">{errors.monthly_budget}</p>}
            </div>
            )

            case "priorities":
            return <PrioritiesStep onComplete={handlePrioritiesComplete} />

            default:
            return null
            }
            }

  // Check if current step has multi-select (needs Continue button)
  const isMultiSelectStep = currentStepData ? ["care_type", "conditions", "equipment", "allergies", "dietary", "behavioral"].includes(
    currentStepData.id,
  ) : false
  const isTextInputStep = currentStepData ? ["name", "email", "phone", "emergency", "location"].includes(currentStepData.id) : false
  const isSingleSelectStep = currentStepData ? ["distance", "timeline", "mobility", "medication", "falls", "budget"].includes(
    currentStepData.id,
  ) : false
  const isPrioritiesStep = currentStepData?.id === "priorities"
  const needsContinueButton = (isMultiSelectStep || isTextInputStep || isSingleSelectStep) && !isPrioritiesStep

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-[#4F6F52]/5 to-background">
        <div className="max-w-2xl mx-auto px-4 py-6 sm:py-8">
          {/* Header with price badge */}
          <div className="text-centre mb-6">
            <div className="inline-flex items-center gap-2 mb-2">
              <h1 className="text-xl sm:text-2xl font-serif font-bold text-foreground">Professional Assessment</h1>
              <span className="px-2 py-1 bg-[#4F6F52] text-white text-xs font-medium rounded">£119</span>
            </div>
            <p className="text-sm text-muted-foreground">17 questions · 8-12 minutes · 48hr delivery</p>
          </div>

          <div className="mb-8">
            <div className="flex items-center justify-between gap-1 sm:gap-2 mb-4">
              {CATEGORIES.map((category, index) => {
                const categoryStepIndices = categorySteps[category]
                const isActive = category === currentCategory
                const isCompleted = categoryStepIndices.every((i) => i < currentStep)
                const isFuture = categoryStepIndices.every((i) => i > currentStep)

                const categoryIcons: { [key: string]: React.ElementType } = {
                   Contact: User,
                   Location: MapPin,
                   Medical: Heart,
                   Safety: Shield,
                   Budget: PoundSterling,
                   Priorities: Target,
                 }
                 const Icon = categoryIcons[category]

                return (
                  <div key={category} className="flex-1 flex flex-col items-center">
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-centre transition-all ${
                        isCompleted
                          ? "bg-[#4F6F52] text-white"
                          : isActive
                            ? "bg-[#4F6F52]/20 text-[#4F6F52] ring-2 ring-[#4F6F52]"
                            : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {isCompleted ? <Check className="w-5 h-5" /> : <Icon className="w-5 h-5" />}
                    </div>
                    <span
                      className={`text-[10px] sm:text-xs mt-1.5 font-medium ${
                        isActive ? "text-[#4F6F52]" : isCompleted ? "text-[#4F6F52]" : "text-muted-foreground"
                      }`}
                    >
                      {category}
                    </span>
                    {index < CATEGORIES.length - 1 && (
                      <div
                        className={`hidden sm:block absolute h-0.5 w-full top-5 left-1/2 -z-10 ${
                          isCompleted ? "bg-[#4F6F52]" : "bg-muted"
                        }`}
                      />
                    )}
                  </div>
                )
              })}
            </div>

            {/* Step counter */}
            <div className="text-centre">
              <span className="text-sm text-muted-foreground">
                Question {currentStep + 1} of {TOTAL_STEPS}
              </span>
            </div>
          </div>

          {showReinforcement && currentStepData.reinforcement && (
            <div className="mb-6 p-4 bg-[#4F6F52]/10 border border-[#4F6F52]/20 rounded-xl text-centre animate-in fade-in duration-300">
              <p className="text-[#4F6F52] font-medium">{currentStepData.reinforcement}</p>
            </div>
          )}

          {/* Step content */}
          <div className="bg-white rounded-2xl border shadow-sm p-6 sm:p-8 mb-6">
            <div className="transition-all duration-300">{renderStepContent()}</div>

            {errors.submit && (
              <div className="mt-6 p-4 bg-destructive/10 border border-destructive/20 rounded-xl">
                <p className="text-sm text-destructive">{errors.submit}</p>
              </div>
            )}
          </div>

          {/* Navigation buttons */}
          <div className="flex items-center justify-between gap-4">
            <Button
              variant="outline"
              size="lg"
              onClick={handleBack}
              disabled={currentStep === 0 || isSubmitting}
              className="h-12 px-6 bg-transparent"
            >
              <ChevronLeft className="w-5 h-5 mr-1" />
              Back
            </Button>

            {needsContinueButton && (
              <Button
                size="lg"
                onClick={handleNext}
                disabled={isSubmitting}
                className="h-12 px-8 bg-[#4F6F52] hover:bg-[#3d5a40] text-white"
              >
                {isSubmitting ? (
                  "Processing..."
                ) : currentStep === TOTAL_STEPS - 1 ? (
                  <>
                    Continue to Payment
                    <ChevronRight className="w-5 h-5 ml-1" />
                  </>
                ) : (
                  <>
                    Continue
                    <ChevronRight className="w-5 h-5 ml-1" />
                  </>
                )}
              </Button>
            )}
          </div>

          {/* Trust signals */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-centre gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#4F6F52]" />
              <span>Your data is secure and confidential</span>
            </div>
            <span className="hidden sm:inline">·</span>
            <span>Pay only after completing questionnaire</span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
