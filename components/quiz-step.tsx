"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle, AlertCircle } from "lucide-react"
import { SocialProof } from "./social-proof"
import { TrustIndicators } from "./trust-indicators"

interface QuizOption {
  value: string
  label: string
  icon?: React.ReactNode
  description?: string
  highlight?: boolean
}

interface QuizStepProps {
  question: string
  questionId: string
  icon?: React.ReactNode
  subheading?: string
  options: QuizOption[]
  onSubmit: (answer: string) => void
  isLoading: boolean
  initialAnswer?: string // Add this prop
}

export function QuizStep({
  question,
  questionId,
  icon,
  subheading,
  options,
  onSubmit,
  isLoading,
  initialAnswer = null, // Use initialAnswer with default null
}: QuizStepProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(initialAnswer)
  // If there's an initial answer, we should show the validation message
  const [validationMessage, setValidationMessage] = useState<string | null>(
    initialAnswer ? "Great choice! Click continue to proceed." : null,
  )
  // If there's an initial answer, we should show the continue message
  const [showContinueMessage, setShowContinueMessage] = useState(!!initialAnswer)

  useEffect(() => {
    if (selectedOption) {
      setValidationMessage("Great choice! Click continue to proceed.")
      const timer = setTimeout(() => {
        setShowContinueMessage(true)
      }, 1500)
      return () => clearTimeout(timer)
    }
  }, [selectedOption])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (selectedOption) {
      onSubmit(selectedOption)
    } else {
      setValidationMessage("Please select an option to continue")
    }
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={questionId}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="relative"
      >
        <div className="text-center mb-6">
          {icon && <div className="flex justify-center mb-4">{icon}</div>}

          <motion.h2 variants={itemVariants} className="text-xl font-bold text-[#0a2d5e] mb-2">
            {question}
          </motion.h2>

          {subheading && (
            <motion.p variants={itemVariants} className="text-sm text-gray-600">
              {subheading}
            </motion.p>
          )}
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-3">
            {options.map((option, index) => (
              <motion.button
                key={option.value}
                variants={itemVariants}
                custom={index}
                type="button"
                onClick={() => setSelectedOption(option.value)}
                className={`w-full p-4 text-left rounded-lg border-2 transition-all flex items-start ${
                  selectedOption === option.value
                    ? "border-blue-600 bg-blue-50"
                    : option.highlight
                      ? "border-orange-300 bg-orange-50 hover:border-orange-400"
                      : "border-gray-300 hover:border-blue-300"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex-1">
                  <div className="flex items-center">
                    {option.icon && <span className="mr-3">{option.icon}</span>}
                    <span className="font-medium">{option.label}</span>
                    {option.highlight && (
                      <span className="ml-2 text-xs bg-orange-200 text-orange-800 px-2 py-0.5 rounded-full">
                        Recommended
                      </span>
                    )}
                  </div>
                  {option.description && <p className="text-xs text-gray-500 mt-1 ml-8">{option.description}</p>}
                </div>
                {selectedOption === option.value && (
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="ml-2 flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  </motion.div>
                )}
              </motion.button>
            ))}
          </div>

          {validationMessage && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className={`text-sm ${
                validationMessage.includes("Great") ? "text-green-600" : "text-red-500"
              } flex items-center justify-center`}
            >
              {validationMessage.includes("Great") ? (
                <CheckCircle className="w-4 h-4 mr-1" />
              ) : (
                <AlertCircle className="w-4 h-4 mr-1" />
              )}
              {validationMessage}
            </motion.div>
          )}

          <motion.button
            type="submit"
            disabled={!selectedOption || isLoading}
            className={`w-full bg-gradient-to-r from-red-600 to-red-700 text-white font-bold py-4 px-4 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-6 flex items-center justify-center shadow-md hover:shadow-lg`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isLoading ? (
              <div className="flex items-center">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                Processing...
              </div>
            ) : (
              <>
                {showContinueMessage ? "Continue to Next Step" : "Continue"}
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

        <SocialProof questionId={questionId} />
        <TrustIndicators />
      </motion.div>
    </AnimatePresence>
  )
}
