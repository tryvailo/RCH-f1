import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Merriweather } from "next/font/google"
import "./globals.css"

// Load Inter for body text and Merriweather for headings
const _inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const _merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})

// Optimized metadata for RightCareHome SEO
export const metadata: Metadata = {
  title: "RightCareHome — Find the Perfect Care Home with Confidence",
  description:
    "Don't choose the wrong care home. Get a free, expert analysis of 156+ data points to avoid costly mistakes and find the best care for your loved ones. Trusted by UK families.",
  keywords: ["care home", "elderly care", "nursing home", "care home finder", "UK care homes", "care home comparison"],
  authors: [{ name: "RightCareHome" }],
  creator: "RightCareHome",
  publisher: "RightCareHome",
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "RightCareHome",
    title: "RightCareHome — Find the Perfect Care Home with Confidence",
    description: "Expert care home analysis. Avoid the £15,000 mistake.",
  },
  twitter: {
    card: "summary_large_image",
    title: "RightCareHome — Find the Perfect Care Home",
    description: "Expert care home analysis. Avoid the £15,000 mistake.",
  },
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

// Viewport optimized for 55+ audience (no pinch-zoom restriction)
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FDFBF7" },
    { media: "(prefers-color-scheme: dark)", color: "#1A231E" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-GB" className="scroll-smooth" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>{children}</body>
    </html>
  )
}
