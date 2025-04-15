"use client"

import { motion } from "framer-motion"

export function LoadingOverlay() {
  return (
    <motion.div
      className="fixed inset-0 bg-white bg-opacity-80 z-50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 border-4 border-t-blue-600 border-b-blue-600 border-l-transparent border-r-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-blue-600 font-medium">Processing your information...</p>
      </div>
    </motion.div>
  )
}
