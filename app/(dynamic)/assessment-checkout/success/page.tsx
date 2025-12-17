import type { Metadata } from "next"
import { ProOrderConfirmation } from "@/components/pro-order-confirmation"

export const metadata: Metadata = {
  title: "Payment Successful | RightCareHome",
  description: "Your Professional Care Home Report is being prepared",
}

export default function CheckoutSuccessPage() {
  return <ProOrderConfirmation />
}
