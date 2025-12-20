/**
 * Centralized utility functions for safe data access
 * Prevents undefined errors across all report components
 */

// Safe number formatting with fallback
export function formatNumber(value: unknown, decimals = 0): string {
  if (value === null || value === undefined || value === "") {
    return "0"
  }
  const num = typeof value === "number" ? value : Number(value)
  if (isNaN(num)) {
    return "0"
  }
  return decimals > 0 ? num.toFixed(decimals) : num.toString()
}

// Safe currency formatting
export function formatCurrency(value: unknown, showPence = false): string {
  if (value === null || value === undefined || value === "") {
    return "£0"
  }
  const num = typeof value === "number" ? value : Number(value)
  if (isNaN(num)) {
    return "£0"
  }
  if (showPence) {
    return `£${num.toLocaleString("en-GB", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
  }
  return `£${num.toLocaleString("en-GB")}`
}

// Safe percentage formatting
export function formatPercent(value: unknown, decimals = 0): string {
  if (value === null || value === undefined || value === "") {
    return "0%"
  }
  const num = typeof value === "number" ? value : Number(value)
  if (isNaN(num)) {
    return "0%"
  }
  return `${num.toFixed(decimals)}%`
}

// Safe array access with fallback
export function safeArray<T>(arr: T[] | undefined | null, fallback: T[] = []): T[] {
  if (!arr || !Array.isArray(arr)) {
    return fallback
  }
  return arr
}

// Safe first element access
export function safeFirst<T>(arr: T[] | undefined | null, fallback: T): T {
  if (!arr || !Array.isArray(arr) || arr.length === 0) {
    return fallback
  }
  return arr[0]
}

// Safe string access
export function safeString(value: unknown, fallback = ""): string {
  if (value === null || value === undefined) {
    return fallback
  }
  if (typeof value === "string") {
    return value
  }
  if (typeof value === "object" && value !== null) {
    // Handle objects with level/value properties
    const obj = value as Record<string, unknown>
    if ("level" in obj && typeof obj.level === "string") return obj.level
    if ("value" in obj && typeof obj.value === "string") return obj.value
    return fallback
  }
  return String(value)
}

// Safe nested object access
export function safeGet<T>(obj: unknown, path: string, fallback: T): T {
  if (obj === null || obj === undefined) {
    return fallback
  }

  const keys = path.split(".")
  let current: unknown = obj

  for (const key of keys) {
    if (current === null || current === undefined || typeof current !== "object") {
      return fallback
    }
    current = (current as Record<string, unknown>)[key]
  }

  return (current ?? fallback) as T
}

// Safe score formatting (0-100 or 0-10 scale)
export function formatScore(value: unknown, decimals = 1): string {
  if (value === null || value === undefined || value === "") {
    return "0.0"
  }
  const num = typeof value === "number" ? value : Number(value)
  if (isNaN(num)) {
    return "0.0"
  }
  return num.toFixed(decimals)
}

// Get score colour based on value
export function getScoreColor(score: number | undefined | null): string {
  const s = score ?? 0
  if (s >= 8) return "text-[#27AE60]"
  if (s >= 6) return "text-[#F2994A]"
  return "text-[#EB5757]"
}

// Get score background colour
export function getScoreBgColor(score: number | undefined | null): string {
  const s = score ?? 0
  if (s >= 8) return "bg-[#27AE60]"
  if (s >= 6) return "bg-[#F2994A]"
  return "bg-[#EB5757]"
}

// Get score label
export function getScoreLabel(score: number | undefined | null): string {
  const s = score ?? 0
  if (s >= 8) return "Excellent"
  if (s >= 6) return "Good"
  return "Fair"
}
