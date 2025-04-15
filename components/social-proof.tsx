"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Users, Clock, MapPin, DollarSign } from "lucide-react"

interface SocialProofProps {
  questionId: string
}

export function SocialProof({ questionId }: SocialProofProps) {
  const [message, setMessage] = useState<string | null>(null)
  const [city, setCity] = useState<string>("your area")

  useEffect(() => {
    // Simulate getting user's location
    const cities = [
      "New York",
      "Los Angeles",
      "Chicago",
      "Houston",
      "Phoenix",
      "Philadelphia",
      "San Antonio",
      "San Diego",
    ]
    setCity(cities[Math.floor(Math.random() * cities.length)])

    // Different messages for different questions
    const messages = {
      email: `Over 10,000 people from ${city} have used our service`,
      phone: "93% of users complete this step to get their results",
      "credit-debt": "People with debt often find unclaimed funds to help pay it down",
      "home-ownership": "Homeowners have found an average of $1,200 in unclaimed funds",
      insurance: "Users checking insurance often find money from old policies",
      income: "Users across all income levels have found unclaimed money",
      "auto-insurance": "Many users find enough to cover 6+ months of car insurance",
      mortgage: "Homeowners often discover unclaimed property tax refunds",
      "credit-cards": "Users have found forgotten security deposits and refunds",
      loans: "Many users find enough unclaimed money to pay off small loans",
      default: `People in ${city} find an average of $800 in unclaimed funds`,
    }

    setMessage(messages[questionId as keyof typeof messages] || messages.default)

    // Rotate messages
    const interval = setInterval(() => {
      const timeMessages = [
        `${Math.floor(Math.random() * 5) + 2} people claimed money in the last hour`,
        `${Math.floor(Math.random() * 10) + 15} people from ${city} searching now`,
        "Most users find their money in under 5 minutes",
        `Over $${(Math.random() * 10000 + 5000).toFixed(0)} claimed this week`,
      ]
      setMessage(timeMessages[Math.floor(Math.random() * timeMessages.length)])
    }, 8000)

    return () => clearInterval(interval)
  }, [questionId, city])

  if (!message) return null

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={message}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.5 }}
        className="mt-2 text-xs text-gray-500 flex items-center justify-center"
      >
        {message.includes("people") ? (
          <Users className="w-3 h-3 mr-1 text-blue-500" />
        ) : message.includes("hour") || message.includes("minutes") ? (
          <Clock className="w-3 h-3 mr-1 text-blue-500" />
        ) : message.includes("from") ? (
          <MapPin className="w-3 h-3 mr-1 text-blue-500" />
        ) : (
          <DollarSign className="w-3 h-3 mr-1 text-green-500" />
        )}
        {message}
      </motion.div>
    </AnimatePresence>
  )
}
