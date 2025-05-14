"use client"

import { useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { submitQuizAnswer } from "@/lib/actions"

interface MonetizableQuestionProps {
  question: string
  questionId: string
  subheadline?: string
  options: {
    value: string
    label: string
  }[]
}

export default function MonetizableQuestion({ question, questionId, subheadline, options }: MonetizableQuestionProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const searchParams = useSearchParams()
  const router = useRouter()

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true)
    formData.append("question", questionId)
    formData.append("answer", selectedOption || "")
    formData.append("currentUrl", window.location.href)

    try {
      // The server action will handle the redirect automatically
      // If it returns, it means there was an error (but no error was thrown)
      await submitQuizAnswer(formData)
      
      // If we get here, the action didn't redirect, so we should reset the form
      setIsSubmitting(false)
    } catch (error) {
      // Handle any errors that might be thrown
      console.error("Error submitting answer:", error)
      setIsSubmitting(false)
      alert("There was an error submitting your answer. Please try again.")
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-[#0a2d5e] mb-4">{question}</h2>

        {subheadline && <p className="text-center text-gray-600 mb-6">{subheadline}</p>}

        <form action={handleSubmit} className="space-y-4">
          <div className="space-y-3">
            {options.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => setSelectedOption(option.value)}
                className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                  selectedOption === option.value
                    ? "border-blue-600 bg-blue-50"
                    : "border-gray-300 hover:border-blue-300"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>

          <button
            type="submit"
            disabled={!selectedOption || isSubmitting}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-4 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-6"
          >
            {isSubmitting ? "Processing..." : "Continue"}
          </button>
        </form>
      </div>
    </div>
  )
}
