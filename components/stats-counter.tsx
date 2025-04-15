"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"

interface StatsCounterProps {
  value: number
  prefix?: string
  suffix?: string
  duration?: number
  decimals?: number
}

export default function StatsCounter({
  value,
  prefix = "",
  suffix = "",
  duration = 2,
  decimals = 0,
}: StatsCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      let startTime: number
      let animationFrame: number

      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)

        setCount(Math.floor(progress * value))

        if (progress < 1) {
          animationFrame = requestAnimationFrame(step)
        } else {
          setCount(value)
        }
      }

      animationFrame = requestAnimationFrame(step)

      return () => cancelAnimationFrame(animationFrame)
    }
  }, [isInView, value, duration])

  const formattedCount = count.toLocaleString(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })

  return (
    <motion.span ref={ref} className="font-bold tabular-nums">
      {prefix}
      {formattedCount}
      {suffix}
    </motion.span>
  )
}
