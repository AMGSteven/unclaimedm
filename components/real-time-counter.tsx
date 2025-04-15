"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function RealTimeCounter() {
  const [count, setCount] = useState(generateRandomAmount())
  const [isIncrementing, setIsIncrementing] = useState(false)

  function generateRandomAmount() {
    return Math.floor(Math.random() * 50000) + 10000
  }

  useEffect(() => {
    // Periodically increment the counter
    const interval = setInterval(() => {
      const shouldIncrement = Math.random() > 0.7 // 30% chance of incrementing

      if (shouldIncrement) {
        const incrementAmount = Math.floor(Math.random() * 5000) + 1000
        setCount((prev) => prev + incrementAmount)
        setIsIncrementing(true)

        // Reset the animation state after a delay
        setTimeout(() => {
          setIsIncrementing(false)
        }, 2000)
      }
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  const formattedCount = count.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })

  return (
    <div className="bg-[#0b4d8c] text-white p-4 rounded-lg shadow-md">
      <p className="text-sm font-medium mb-1">Total Unclaimed Money Found Today</p>
      <div className="flex items-center">
        <motion.div
          animate={isIncrementing ? { scale: [1, 1.1, 1] } : {}}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold"
        >
          {formattedCount}
        </motion.div>

        {isIncrementing && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            className="ml-2 text-sm bg-green-500 text-white px-2 py-0.5 rounded"
          >
            +
          </motion.div>
        )}
      </div>
    </div>
  )
}
