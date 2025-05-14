"use client"

import type React from "react"

import { useSearchParams, useRouter } from "next/navigation"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { submitPhoneForm } from "@/lib/actions"
import { Lock } from "lucide-react"
import { isValidPhone, formatPhoneNumber } from "@/lib/validation"

export default function MobileCapturePage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [tcpaConsent, setTcpaConsent] = useState(false)
  const [phone, setPhone] = useState("")
  const [phoneError, setPhoneError] = useState("")

  const validatePhone = () => {
    if (!phone) {
      setPhoneError("Phone number is required")
      return false
    }

    if (!isValidPhone(phone)) {
      setPhoneError("Please enter a valid US phone number")
      return false
    }

    setPhoneError("")
    return true
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value
    // Format the phone number as the user types
    const formattedPhone = formatPhoneNumber(input)
    setPhone(formattedPhone)

    if (phoneError && input) {
      // Clear error when user starts typing again
      setPhoneError("")
    }
  }

  const handleSubmit = async (formData: FormData) => {
    // Validate phone before submission
    if (!validatePhone()) {
      return
    }

    setIsSubmitting(true)
    // Add current URL to form data to preserve query parameters
    formData.append("currentUrl", window.location.href)
    
    try {
      // The server action will handle the redirect automatically
      // If it returns, it means there was an error (but no error was thrown)
      await submitPhoneForm(formData)
      
      // If we get here, the action didn't redirect, so we should reset the form
      setIsSubmitting(false)
    } catch (error) {
      // Handle any errors that might be thrown
      console.error("Error submitting form:", error)
      setIsSubmitting(false)
      alert("There was an error submitting the form. Please try again.")
    }
  }

  const isButtonDisabled = !tcpaConsent || isSubmitting || !phone || !!phoneError

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold text-center text-[#0a2d5e] mb-6">Get Your Guide to Claim Your Money</h2>

        <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
          <div className="bg-blue-600 h-2 rounded-full" style={{ width: "50%" }}></div>
        </div>

        <form action={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="phone" className="font-medium text-gray-700">
              Mobile Phone Number
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="(555) 555-5555"
              required
              className={`w-full mt-1 ${phoneError ? "border-red-500" : ""}`}
              value={phone}
              onChange={handlePhoneChange}
              onBlur={validatePhone}
            />
            {phoneError && <p className="text-red-500 text-xs mt-1">{phoneError}</p>}
          </div>

          <div className="space-y-4">
            <div className="flex items-start space-x-2">
              <Checkbox
                id="tcpaConsent"
                name="tcpaConsent"
                required
                className="mt-1"
                checked={tcpaConsent}
                onCheckedChange={(checked) => setTcpaConsent(checked as boolean)}
              />
              <Label htmlFor="tcpaConsent" className="text-xs text-gray-600">
                <strong>IMPORTANT:</strong> By checking this box, I agree to receive telemarketing calls and text
                messages via automated technology from unclaimedmoneyinfo.com and its{" "}
                <strong>marketing partners</strong> at the phone number provided above. I understand that consent is not
                a condition of purchase and that message and data rates may apply. I may receive up to 10 msgs/month.
                Reply STOP to cancel. Reply HELP for help. Carriers are not liable for delayed or undelivered messages.
              </Label>
            </div>
          </div>

          <button
            type="submit"
            disabled={isButtonDisabled}
            className={`w-full font-bold py-3 px-4 rounded transition-colors ${
              isButtonDisabled ? "bg-red-300 cursor-not-allowed" : "bg-red-600 hover:bg-red-700 text-white"
            }`}
          >
            {isSubmitting ? "Processing..." : "Agree & Continue"}
          </button>

          <div className="flex items-center justify-center text-xs text-gray-500">
            <Lock className="w-3 h-3 mr-1" />
            <span>Secure & Confidential</span>
          </div>
        </form>
      </div>
    </div>
  )
}
