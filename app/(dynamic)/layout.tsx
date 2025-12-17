import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Care Home Assessment | RightCareHome",
  description: "Find the perfect care home with our expert assessment service",
}

export default function DynamicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
