"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Search, FileText, CheckCircle, DollarSign } from "lucide-react"

interface Step {
  icon: React.ReactNode
  title: string
  description: string
}

const steps: Step[] = [
  {
    icon: <Search className="w-8 h-8 text-white" />,
    title: "Search",
    description: "Enter your information to search across multiple databases for unclaimed funds.",
  },
  {
    icon: <FileText className="w-8 h-8 text-white" />,
    title: "Verify",
    description: "Verify your identity to ensure you're the rightful owner of any found funds.",
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-white" />,
    title: "Claim",
    description: "Complete the necessary forms to claim your money from the holding agency.",
  },
  {
    icon: <DollarSign className="w-8 h-8 text-white" />,
    title: "Receive",
    description: "Receive your funds via check or direct deposit, typically within 2-12 weeks.",
  },
]

export default function ProcessSteps() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
    >
      {steps.map((step, index) => (
        <motion.div key={index} variants={itemVariants} className="flex flex-col items-center text-center">
          <div className="relative mb-6">
            <div className="bg-[#0b4d8c] rounded-full p-5 w-20 h-20 flex items-center justify-center z-10 relative">
              {step.icon}
            </div>

            {index < steps.length - 1 && (
              <div className="absolute top-1/2 left-full w-full h-1 bg-gray-200 -translate-y-1/2 hidden lg:block" />
            )}

            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <span className="text-4xl font-bold text-gray-200">{index + 1}</span>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-2 text-[#092e54]">{step.title}</h3>
          <p className="text-gray-600">{step.description}</p>
        </motion.div>
      ))}
    </motion.div>
  )
}
