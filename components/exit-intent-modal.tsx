"use client"

import { useState, useEffect } from "react"
import { X, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

export default function ExitIntentModal() {
  const [showModal, setShowModal] = useState(false)
  const [hasTriggered, setHasTriggered] = useState(false)

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger once and when mouse leaves the top of the page
      if (!hasTriggered && e.clientY <= 0) {
        setShowModal(true)
        setHasTriggered(true)
      }
    }

    // Wait a bit before adding the event listener to avoid triggering immediately
    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave)
    }, 3000)

    return () => {
      clearTimeout(timer)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [hasTriggered])

  return (
    <AnimatePresence>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-lg shadow-xl max-w-md w-full overflow-hidden"
          >
            <div className="relative">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#f9b000] to-[#f97316]"></div>
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                aria-label="Close"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-6 pt-10">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <DollarSign className="w-8 h-8 text-blue-600" />
                </div>
              </div>

              <h2 className="text-2xl font-bold text-center text-[#092e54] mb-2">Wait! Don't Miss Your Money!</h2>

              <p className="text-center text-gray-600 mb-4">
                Americans have over <span className="font-bold">$49 billion</span> in unclaimed funds. You could be owed
                some of this money!
              </p>

              <div className="bg-blue-50 border border-blue-100 rounded-md p-3 mb-6">
                <p className="text-sm text-blue-800 font-medium text-center">
                  The average claim is worth <span className="font-bold">$1,780</span>
                </p>
              </div>

              <div className="flex justify-center">
                <Link href="/funnel">
                  <Button size="lg" className="bg-[#f9b000] hover:bg-[#e0a000] text-black font-bold px-8">
                    Find My Unclaimed Money
                  </Button>
                </Link>
              </div>

              <p className="text-xs text-center text-gray-500 mt-4">
                It's 100% free to search. No credit card required.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
