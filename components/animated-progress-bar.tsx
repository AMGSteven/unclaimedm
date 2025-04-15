"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface AnimatedProgressBarProps {
  progress: number
  totalSteps: number
  currentStep: number
}

export function AnimatedProgressBar({ progress, totalSteps, currentStep }: AnimatedProgressBarProps) {
  const [showHotStreak, setShowHotStreak] = useState(false)

  useEffect(() => {
    // Show hot streak message after completing 3 questions
    if (currentStep > 3 && currentStep < totalSteps - 1) {
      setShowHotStreak(true)
      const timer = setTimeout(() => setShowHotStreak(false), 3000)
      return () => clearTimeout(timer)
    }
  }, [currentStep, totalSteps])

  return (
    <div className="relative">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-semibold text-[#092e54]">Find Your Unclaimed Money</span>
        <div className="flex items-center">
          {showHotStreak && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mr-3 bg-orange-100 text-orange-600 text-xs font-medium px-2 py-1 rounded-full"
            >
              You're on a roll! 🔥
            </motion.div>
          )}
          <span className="text-sm font-medium text-gray-500">{progress}% Complete</span>
        </div>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
        <motion.div
          className="bg-gradient-to-r from-[#f9b000] to-[#f97316] h-2.5 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>
      <div className="flex justify-between mt-1">
        <div className="flex items-center">
          <span className="text-xs text-gray-500">
            Step {currentStep} of {totalSteps}
          </span>
        </div>
        <div className="flex items-center">
          {currentStep > 1 && (
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex space-x-1">
              {Array.from({ length: Math.min(currentStep - 1, 5) }).map((_, i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-green-500"></div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}
