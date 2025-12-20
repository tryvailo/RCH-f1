"use client"

import type React from "react"

import { useState, useCallback } from "react"
import { GripVertical, ChevronUp, ChevronDown, BarChart3, PoundSterling, MapPin, ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Priority {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  weight?: number
}

interface ReportPriorityScoreProps {
  onComplete: (priorities: string[], weights: number[]) => void
}

const defaultPriorities: Priority[] = [
  {
    id: "quality",
    title: "Quality of Care",
    description: "CQC ratings, staff stability, activities, specialisations",
    icon: <BarChart3 className="w-8 h-8 text-[#4F6F52]" />,
  },
  {
    id: "cost",
    title: "Cost & Budget",
    description: "Price, value for money, hidden fees, negotiation potential",
    icon: <PoundSterling className="w-8 h-8 text-[#4F6F52]" />,
  },
  {
    id: "proximity",
    title: "Proximity to Family",
    description: "Distance, visiting ease, location accessibility",
    icon: <MapPin className="w-8 h-8 text-[#4F6F52]" />,
  },
]

const weights = [50, 30, 20]

export function ReportPriorityScore({ onComplete }: ReportPriorityScoreProps) {
  const [priorities, setPriorities] = useState<Priority[]>(defaultPriorities)
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null)
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null)
  const [isConfirmed, setIsConfirmed] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  // Detect touch device on mount
  useState(() => {
    if (typeof window !== "undefined") {
      setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0)
    }
  })

  const handleDragStart = useCallback((e: React.DragEvent, index: number) => {
    setDraggedIndex(index)
    e.dataTransfer.effectAllowed = "move"
    e.dataTransfer.setData("text/plain", index.toString())
  }, [])

  const handleDragOver = useCallback((e: React.DragEvent, index: number) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = "move"
    setDragOverIndex(index)
  }, [])

  const handleDragLeave = useCallback(() => {
    setDragOverIndex(null)
  }, [])

  const handleDrop = useCallback(
    (e: React.DragEvent, dropIndex: number) => {
      e.preventDefault()
      const dragIndex = draggedIndex

      if (dragIndex === null || dragIndex === dropIndex) {
        setDraggedIndex(null)
        setDragOverIndex(null)
        return
      }

      const newPriorities = [...priorities]
      const [draggedItem] = newPriorities.splice(dragIndex, 1)
      newPriorities.splice(dropIndex, 0, draggedItem)

      setPriorities(newPriorities)
      setDraggedIndex(null)
      setDragOverIndex(null)
    },
    [draggedIndex, priorities],
  )

  const handleDragEnd = useCallback(() => {
    setDraggedIndex(null)
    setDragOverIndex(null)
  }, [])

  // Mobile fallback: Move up/down buttons
  const moveItem = useCallback(
    (index: number, direction: "up" | "down") => {
      const newIndex = direction === "up" ? index - 1 : index + 1
      if (newIndex < 0 || newIndex >= priorities.length) return

      const newPriorities = [...priorities]
      const [movedItem] = newPriorities.splice(index, 1)
      newPriorities.splice(newIndex, 0, movedItem)
      setPriorities(newPriorities)
    },
    [priorities],
  )

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent, index: number) => {
      if (e.key === "ArrowUp" && index > 0) {
        e.preventDefault()
        moveItem(index, "up")
      } else if (e.key === "ArrowDown" && index < priorities.length - 1) {
        e.preventDefault()
        moveItem(index, "down")
      }
    },
    [moveItem, priorities.length],
  )

  const handleConfirm = useCallback(() => {
    setIsConfirmed(true)
    const priorityIds = priorities.map((p) => p.id)
    onComplete(priorityIds, weights)
  }, [priorities, onComplete])

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-centre mb-8 sm:mb-10">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-[32px] font-bold text-[#1A231E] mb-3">
            Let's Personalise This Report
          </h2>
          <p className="text-lg sm:text-xl text-[#1A231E] mb-4">What matters most to your family?</p>
          <p className="text-base text-[#1A231E]/70 max-w-xl mx-auto">
            {isTouchDevice
              ? "Use the arrows to order these three priorities. We'll use this to rank your homes specifically for you."
              : "Drag these three priorities in order of importance. We'll use this to rank your homes specifically for you."}
          </p>
        </div>

        {/* Draggable Cards */}
        <div className="space-y-3 sm:space-y-4 mb-8" role="list" aria-label="Priority order list">
          {priorities.map((priority, index) => (
            <div
              key={priority.id}
              draggable={!isTouchDevice}
              onDragStart={(e) => handleDragStart(e, index)}
              onDragOver={(e) => handleDragOver(e, index)}
              onDragLeave={handleDragLeave}
              onDrop={(e) => handleDrop(e, index)}
              onDragEnd={handleDragEnd}
              onKeyDown={(e) => handleKeyDown(e, index)}
              tabIndex={0}
              role="listitem"
              aria-label={`Draggable card: ${priority.title}, position ${index + 1} of ${priorities.length}`}
              className={`
                relative flex items-center gap-4 p-4 sm:p-5
                bg-white border rounded-lg
                transition-all duration-200 ease-out
                focus:outline-none focus:ring-2 focus:ring-[#4F6F52] focus:ring-offset-2
                ${draggedIndex === index ? "opacity-50 scale-[0.98]" : ""}
                ${dragOverIndex === index ? "border-[#4F6F52] border-2 shadow-md" : "border-[#E5E7EB]"}
                ${!isTouchDevice ? "cursor-grab active:cursor-grabbing hover:shadow-lg hover:border-[#4F6F52]/50" : ""}
              `}
            >
              {/* Position Number */}
              <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#4F6F52]/10 flex items-center justify-centre">
                <span className="text-lg sm:text-xl font-bold text-[#4F6F52]">{index + 1}</span>
              </div>

              {/* Drag Handle (Desktop) */}
              {!isTouchDevice && (
                <div className="flex-shrink-0 text-[#1A231E]/30 hover:text-[#1A231E]/60">
                  <GripVertical className="w-5 h-5" />
                </div>
              )}

              {/* Icon */}
              <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#4F6F52]/5 flex items-center justify-centre">
                {priority.icon}
              </div>

              {/* Content */}
              <div className="flex-grow min-w-0">
                <h3 className="text-base sm:text-lg font-semibold text-[#1A231E] mb-0.5">{priority.title}</h3>
                <p className="text-sm text-[#1A231E]/60 line-clamp-2">{priority.description}</p>
              </div>

              {/* Weight Badge */}
              <div className="flex-shrink-0 hidden sm:block">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#4F6F52]/10 text-[#4F6F52]">
                  {weights[index]}%
                </span>
              </div>

              {/* Mobile Move Buttons */}
              {isTouchDevice && (
                <div className="flex-shrink-0 flex flex-col gap-1">
                  <button
                    onClick={() => moveItem(index, "up")}
                    disabled={index === 0}
                    aria-label={`Move ${priority.title} up`}
                    className={`
                      p-2 rounded-lg transition-colours
                      ${
                        index === 0
                          ? "text-[#1A231E]/20 cursor-not-allowed"
                          : "text-[#1A231E]/60 hover:bg-[#4F6F52]/10 hover:text-[#4F6F52] active:bg-[#4F6F52]/20"
                      }
                    `}
                  >
                    <ChevronUp className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => moveItem(index, "down")}
                    disabled={index === priorities.length - 1}
                    aria-label={`Move ${priority.title} down`}
                    className={`
                      p-2 rounded-lg transition-colours
                      ${
                        index === priorities.length - 1
                          ? "text-[#1A231E]/20 cursor-not-allowed"
                          : "text-[#1A231E]/60 hover:bg-[#4F6F52]/10 hover:text-[#4F6F52] active:bg-[#4F6F52]/20"
                      }
                    `}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Confirmation Display */}
        <div className="bg-[#4F6F52]/5 rounded-xl p-5 sm:p-6 mb-6 sm:mb-8" aria-live="polite">
          <p className="text-base sm:text-lg text-[#1A231E] mb-3">Your priorities are set to:</p>
          <ol className="space-y-2">
            {priorities.map((priority, index) => (
              <li key={priority.id} className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-[#4F6F52] text-white text-sm font-medium flex items-center justify-centre">
                  {index + 1}
                </span>
                <span className="text-base font-medium text-[#1A231E]">{priority.title}</span>
                <span className="text-base font-semibold text-[#4F6F52]">({weights[index]}% weight)</span>
              </li>
            ))}
          </ol>
        </div>

        {/* CTA Button */}
        {!isConfirmed ? (
          <Button
            onClick={handleConfirm}
            className="w-full sm:w-auto sm:min-w-[300px] mx-auto flex items-center justify-centre gap-2 h-12 sm:h-14 px-8 bg-[#4F6F52] hover:bg-[#3d5a40] text-white text-base sm:text-lg font-semibold rounded-xl transition-all duration-200 focus:ring-2 focus:ring-[#4F6F52] focus:ring-offset-2"
          >
            Got it - Let's See Your Homes
            <ArrowRight className="w-5 h-5" />
          </Button>
        ) : (
          <div className="flex items-center justify-centre gap-2 text-[#4F6F52] animate-in fade-in duration-300">
            <Check className="w-6 h-6" />
            <span className="text-lg font-medium">Preferences saved - Scroll down to see your personalised homes</span>
          </div>
        )}

        {/* Keyboard Instructions (Desktop) */}
        {!isTouchDevice && (
          <p className="text-centre text-sm text-[#1A231E]/50 mt-4">
            Tip: Use arrow keys to reorder when a card is focused
          </p>
        )}
      </div>
    </section>
  )
}
