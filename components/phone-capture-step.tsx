"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { CheckCircle, AlertCircle, Shield } from "lucide-react"
import { isValidPhone, formatPhoneNumber } from "@/lib/validation"
import { motion, AnimatePresence } from "framer-motion"
import { trackEvent } from "@/lib/tracking"

// Update the component props to accept initial checkbox state
interface PhoneCaptureStepProps {
  onSubmit: (data: Record<string, string>) => void
  isLoading: boolean
  email: string
  initialPhone?: string
  initialTcpaConsent?: boolean
}

// Update the component to use the initial checkbox state
export function PhoneCaptureStep({
  onSubmit,
  isLoading,
  email,
  initialPhone = "",
  initialTcpaConsent = false,
}: PhoneCaptureStepProps) {
  const [phone, setPhone] = useState(initialPhone)
  const [tcpaConsent, setTcpaConsent] = useState(initialTcpaConsent)
  const [phoneError, setPhoneError] = useState("")
  const [phoneSuccess, setPhoneSuccess] = useState(false)
  const [showUrgencyMessage, setShowUrgencyMessage] = useState(false)

  // Add useEffect to validate phone on initial render if it exists
  useEffect(() => {
    if (initialPhone && isValidPhone(initialPhone)) {
      setPhoneSuccess(true)
    }
  }, [initialPhone])

  useEffect(() => {
    // Show urgency message after 5 seconds
    const timer = setTimeout(() => {
      setShowUrgencyMessage(true)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  const validatePhone = () => {
    if (!phone) {
      setPhoneError("Phone number is required")
      setPhoneSuccess(false)
      return false
    }

    if (!isValidPhone(phone)) {
      setPhoneError("Please enter a valid US phone number")
      setPhoneSuccess(false)
      return false
    }

    setPhoneError("")
    setPhoneSuccess(true)
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

    // Real-time validation for positive reinforcement
    if (formattedPhone && isValidPhone(formattedPhone)) {
      setPhoneSuccess(true)
    } else {
      setPhoneSuccess(false)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Validate phone before submission
    if (!validatePhone()) {
      return
    }

    // Track phone capture
    trackEvent("phone_capture", { phone, email })

    onSubmit({
      phone,
      tcpaConsent: tcpaConsent.toString(),
    })
  }

  const isButtonDisabled = !tcpaConsent || isLoading || !phone || !!phoneError

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <div className="text-center mb-6">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-bold text-[#0a2d5e] mb-2"
        >
          You're Almost There!
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-600"
        >
          Add your phone to get your unclaimed money results
        </motion.p>
      </div>

      <div className="flex items-center justify-center mb-4 mt-3">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
          className="flex items-center bg-green-100 px-3 py-1 rounded"
        >
          <CheckCircle className="text-green-500 w-4 h-4 mr-2" />
          <span className="text-sm text-green-800">Email Confirmed</span>
        </motion.div>
      </div>

      <AnimatePresence>
        {showUrgencyMessage && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-4 bg-blue-50 border border-blue-100 rounded-md p-3"
          >
            <div className="flex items-start">
              <Shield className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-blue-800">Almost there!</p>
                <p className="text-xs text-blue-700">
                  People who complete this step are 3x more likely to find their unclaimed money. We'll send you a text
                  with your results.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="phone" className="font-medium text-gray-700">
            Mobile Phone Number
          </Label>
          <div className="relative mt-1">
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="(555) 555-5555"
              required
              className={`w-full pr-10 ${
                phoneError
                  ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                  : phoneSuccess
                    ? "border-green-500 focus:ring-green-500 focus:border-green-500"
                    : ""
              }`}
              value={phone}
              onChange={handlePhoneChange}
              onBlur={validatePhone}
            />
            <AnimatePresence>
              {phoneSuccess && phone && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                >
                  <CheckCircle className="w-5 h-5 text-green-500" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <AnimatePresence>
            {phoneError && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="text-red-500 text-xs mt-1 flex items-center"
              >
                <AlertCircle className="w-3 h-3 mr-1" />
                {phoneError}
              </motion.p>
            )}
          </AnimatePresence>
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
              <strong>IMPORTANT:</strong> By checking this box, I agree to receive telemarketing calls and text messages
              via automated technology from unclaimedmoneyinfo.com and its <strong>marketing partners</strong> at the
              phone number provided above. I understand that consent is not a condition of purchase and that message and
              data rates may apply. I may receive up to 10 msgs/month. Reply STOP to cancel. Reply HELP for help.
              Carriers are not liable for delayed or undelivered messages.
            </Label>
          </div>
        </div>

        <motion.button
          type="submit"
          disabled={isButtonDisabled}
          className={`w-full font-bold py-3 px-4 rounded-lg transition-all flex items-center justify-center ${
            isButtonDisabled
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white shadow-md hover:shadow-lg"
          }`}
          whileHover={!isButtonDisabled ? { scale: 1.02 } : {}}
          whileTap={!isButtonDisabled ? { scale: 0.98 } : {}}
        >
          {isLoading ? (
            <div className="flex items-center">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
              Processing...
            </div>
          ) : (
            <>
              Continue to Find My Money
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-2"
                initial={{ x: 0 }}
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, repeatDelay: 1.5, duration: 1 }}
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </motion.svg>
            </>
          )}
        </motion.button>
      </form>
    </motion.div>
  )
}
