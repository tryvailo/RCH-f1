import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    console.log("[v0] Received free assessment submission:", body)

    // Validate required fields
    const required = ["location_postcode", "care_type", "contact_name", "contact_email"]
    for (const field of required) {
      if (!body[field]) {
        console.log("[v0] Missing field:", field)
        return NextResponse.json({ error: `Missing required field: ${field}` }, { status: 400 })
      }
    }

    // Generate reference number
    const date = new Date()
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, "0")
    const day = String(date.getDate()).padStart(2, "0")
    const random = Math.random().toString(36).substring(2, 8).toUpperCase()
    const reference = `FREE-${year}-${month}-${day}-${random}`

    console.log("[v0] Generated reference:", reference)
    console.log("[v0] Assessment data:", { reference, ...body })

    // Return success response
    const response = {
      success: true,
      reference,
      message: "Assessment submitted successfully",
    }

    console.log("[v0] Sending response:", response)
    return NextResponse.json(response)
  } catch (error) {
    console.error("[v0] Free assessment error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
