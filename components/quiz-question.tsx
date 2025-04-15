"use client"

import { useState } from "react"
import { submitQuizAnswer } from "@/lib/actions"

interface QuizQuestionProps {
  question: string
  questionId: string
  subheadline?: string
  options: {
    value: string
    label: string
  }[]
}

export default function QuizQuestion({ question, questionId, subheadline, options }: QuizQuestionProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null)

  const handleSubmit = (formData: FormData) => {
    formData.append("question", questionId)
    formData.append("answer", selectedOption || "")
    submitQuizAnswer(formData)
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
            disabled={!selectedOption}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-4 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-6"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  )
}
