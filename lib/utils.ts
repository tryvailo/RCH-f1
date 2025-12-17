export type ClassValue = string | number | boolean | undefined | null | ClassValue[] | Record<string, unknown>

function clsx(...inputs: ClassValue[]): string {
  const classes: string[] = []

  for (const input of inputs) {
    if (!input) continue

    if (typeof input === "string") {
      classes.push(input)
    } else if (typeof input === "number") {
      classes.push(String(input))
    } else if (Array.isArray(input)) {
      const inner = clsx(...input)
      if (inner) classes.push(inner)
    } else if (typeof input === "object") {
      for (const [key, value] of Object.entries(input)) {
        if (value) classes.push(key)
      }
    }
  }

  return classes.join(" ")
}

// Simplified twMerge - handles basic class deduplication
function twMerge(classString: string): string {
  const classes = classString.split(/\s+/).filter(Boolean)
  const result: string[] = []
  const seen = new Set<string>()

  // Process in reverse to keep last occurrence
  for (let i = classes.length - 1; i >= 0; i--) {
    const cls = classes[i]
    // Get base class without responsive/state prefixes for deduplication
    const base = cls.replace(/^(sm:|md:|lg:|xl:|2xl:|hover:|focus:|active:|disabled:|dark:)+/, "")

    // Simple prefix grouping for common utilities
    const prefixMatch = base.match(
      /^(p|px|py|pt|pr|pb|pl|m|mx|my|mt|mr|mb|ml|w|h|min-w|max-w|min-h|max-h|text|font|bg|border|rounded|flex|grid|gap|z|opacity|shadow|top|right|bottom|left|inset)-/,
    )
    const key = prefixMatch ? `${cls.replace(base, "")}${prefixMatch[1]}` : cls

    if (!seen.has(key)) {
      seen.add(key)
      result.unshift(cls)
    }
  }

  return result.join(" ")
}

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(...inputs))
}
