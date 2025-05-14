"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { isValidEmail } from "@/lib/validation"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle, AlertCircle, Users, Clock } from "lucide-react"
import { trackEvent } from "@/lib/tracking"
import { TrustedForm } from "./trusted-form"

interface EmailCaptureStepProps {
  onSubmit: (data: Record<string, string>) => void
  isLoading: boolean
  initialEmail?: string
  initialConsent?: boolean
  initialDataPolicy?: boolean
}

export function EmailCaptureStep({
  onSubmit,
  isLoading,
  initialEmail = "",
  initialConsent = false,
  initialDataPolicy = false,
}: EmailCaptureStepProps) {
  const [email, setEmail] = useState(initialEmail)
  const [consent, setConsent] = useState(initialConsent)
  const [dataPolicy, setDataPolicy] = useState(initialDataPolicy)
  const [emailError, setEmailError] = useState("")
  const [emailSuccess, setEmailSuccess] = useState(false)
  const [showSocialProof, setShowSocialProof] = useState(false)
  const [socialProofMessage, setSocialProofMessage] = useState("")
  const [timeOnPage, setTimeOnPage] = useState(0)

  // Add useEffect to validate email on initial render if it exists
  useEffect(() => {
    if (initialEmail && isValidEmail(initialEmail)) {
      setEmailSuccess(true)
    }
  }, [initialEmail])

  useEffect(() => {
    // Show social proof after 3 seconds
    const timer = setTimeout(() => {
      setShowSocialProof(true)
    }, 3000)

    // Track time on page
    const interval = setInterval(() => {
      setTimeOnPage((prev) => prev + 1)
    }, 1000)

    // Rotate social proof messages
    const messageInterval = setInterval(() => {
      const messages = [
        "Over 10,000 people have used our service this month",
        `${Math.floor(Math.random() * 5) + 2} people just started their search`,
        "Most users find their money in under 5 minutes",
        `Over $${(Math.random() * 10000 + 5000).toFixed(0)} claimed this week`,
      ]
      setSocialProofMessage(messages[Math.floor(Math.random() * messages.length)])
    }, 8000)

    return () => {
      clearTimeout(timer)
      clearInterval(interval)
      clearInterval(messageInterval)
    }
  }, [])

  // Show urgency message after 15 seconds
  useEffect(() => {
    if (timeOnPage === 15) {
      setSocialProofMessage("Limited time offer: Find your unclaimed money now!")
      setShowSocialProof(true)
    }
  }, [timeOnPage])

  const validateEmail = () => {
    if (!email) {
      setEmailError("Email is required")
      setEmailSuccess(false)
      return false
    }

    if (!isValidEmail(email)) {
      setEmailError("Please enter a valid email address")
      setEmailSuccess(false)
      return false
    }

    setEmailError("")
    setEmailSuccess(true)
    return true
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
    if (emailError && e.target.value) {
      // Clear error when user starts typing again
      setEmailError("")
    }

    // Real-time validation for positive reinforcement
    if (e.target.value && isValidEmail(e.target.value)) {
      setEmailSuccess(true)
    } else {
      setEmailSuccess(false)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Validate email before submission
    if (!validateEmail()) {
      return
    }

    // Track email capture
    trackEvent("email_capture", { email })

    // Get TrustedForm certificate URL if available
    const certificateUrl = document.getElementById('xxTrustedFormCertUrl') as HTMLInputElement

    onSubmit({
      email,
      consent: consent.toString(),
      dataPolicy: dataPolicy.toString(),
      xxTrustedFormCertUrl: certificateUrl?.value || '',
    })
  }

  const isButtonDisabled = !consent || !dataPolicy || isLoading || !email || !!emailError

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <div className="text-center mb-6">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-bold text-[#0a2d5e] mb-2"
        >
          Find Your Unclaimed Money Today
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-600"
        >
          Join thousands who have already found money that belongs to them
        </motion.p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <TrustedForm />
        <div>
          <Label htmlFor="email" className="font-medium text-gray-700">
            Email Address
          </Label>
          <div className="relative mt-1">
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="your@email.com"
              required
              className={`w-full pr-10 ${
                emailError
                  ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                  : emailSuccess
                    ? "border-green-500 focus:ring-green-500 focus:border-green-500"
                    : ""
              }`}
              value={email}
              onChange={handleEmailChange}
              onBlur={validateEmail}
            />
            <AnimatePresence>
              {emailSuccess && email && (
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
            {emailError && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="text-red-500 text-xs mt-1 flex items-center"
              >
                <AlertCircle className="w-3 h-3 mr-1" />
                {emailError}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        <div className="space-y-4">
          <div className="flex items-start space-x-2">
            <Checkbox
              id="consent"
              name="consent"
              required
              className="mt-1"
              checked={consent}
              onCheckedChange={(checked) => setConsent(checked as boolean)}
            />
            <Label htmlFor="consent" className="text-xs text-gray-600">
              By clicking "Continue", I represent that I am 18+ years of age. I understand that this site is privately
              owned, not affiliated with, nor endorsed by any government agency. I accept that the Service is provided
              "as is" without any warranties, express or implied, and agree to the{" "}
              <a
                href="https://jmcustomerprivacy.com/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Privacy Policy
              </a>{" "}
              and{" "}
              <a
                href="https://jmcustomerprivacy.com/terms-conditions"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Terms of Use
              </a>{" "}
              and agree to receive email marketing from unclaimedmoneyinfo.com and its marketing partners.
            </Label>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="dataPolicy"
              name="dataPolicy"
              required
              className="mt-1"
              checked={dataPolicy}
              onCheckedChange={(checked) => setDataPolicy(checked as boolean)}
            />
            <Label htmlFor="dataPolicy" className="text-xs text-gray-600">
              I understand the{" "}
              <Link href="/data-policies" className="text-blue-600 hover:underline">
                data policies
              </Link>{" "}
              that govern this site, how my data is used, disclosed, and shared & what I get as a user.
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
              Start My Search
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

      <AnimatePresence>
        {showSocialProof && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-4 text-xs text-gray-500 flex items-center justify-center"
          >
            {socialProofMessage.includes("people") ? (
              <Users className="w-3 h-3 mr-1 text-blue-500" />
            ) : (
              <Clock className="w-3 h-3 mr-1 text-blue-500" />
            )}
            {socialProofMessage}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-6 flex justify-center space-x-4">
        <div className="flex items-center bg-gray-100 px-2 py-1 rounded text-xs text-gray-600">
          <svg
            className="w-3 h-3 mr-1 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            ></path>
          </svg>
          <span>Secure & Protected</span>
        </div>
        <div className="flex items-center bg-gray-100 px-2 py-1 rounded text-xs text-gray-600">
          <svg
            className="w-3 h-3 mr-1 text-blue-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            ></path>
          </svg>
          <span>2M+ Users</span>
        </div>
      </div>
      {/* TrustedForm is now included as a component above */}
    </motion.div>
  )
}
