"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const pageHeight = document.body.scrollHeight
      const windowHeight = window.innerHeight
      const scrollPercentage = (scrollPosition / (pageHeight - windowHeight)) * 100

      if (scrollPercentage > 50 && !isDismissed) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isDismissed])

  const handleDismiss = () => {
    setIsDismissed(true)
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          className="fixed bottom-4 right-4 z-40 md:right-8 md:bottom-8"
        >
          <div className="bg-white rounded-lg shadow-lg p-4 max-w-xs">
            <button
              onClick={handleDismiss}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
              aria-label="Dismiss"
            >
              <X size={16} />
            </button>

            <div className="text-center">
              <h3 className="font-bold text-[#092e54] mb-2">Ready to find your money?</h3>
              <p className="text-sm text-gray-600 mb-3">It only takes 60 seconds to search for your unclaimed funds.</p>
              <Link href="/funnel">
                <Button className="w-full bg-[#f9b000] hover:bg-[#e0a000] text-black font-bold">
                  Start My Free Search
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
