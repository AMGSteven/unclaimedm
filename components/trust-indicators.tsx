"use client"

import { Shield, Users, CheckCircle, Lock } from "lucide-react"
import { motion } from "framer-motion"

export function TrustIndicators() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="flex flex-wrap justify-center items-center gap-3 mt-4 mb-2"
    >
      <div className="flex items-center bg-gray-100 px-2 py-1 rounded text-xs text-gray-600">
        <Shield className="w-3 h-3 mr-1 text-green-600" />
        <span>Secure & Protected</span>
      </div>
      <div className="flex items-center bg-gray-100 px-2 py-1 rounded text-xs text-gray-600">
        <Users className="w-3 h-3 mr-1 text-blue-600" />
        <span>2M+ Users</span>
      </div>
      <div className="flex items-center bg-gray-100 px-2 py-1 rounded text-xs text-gray-600">
        <CheckCircle className="w-3 h-3 mr-1 text-green-600" />
        <span>Verified Service</span>
      </div>
      <div className="flex items-center bg-gray-100 px-2 py-1 rounded text-xs text-gray-600">
        <Lock className="w-3 h-3 mr-1 text-blue-600" />
        <span>256-bit Encryption</span>
      </div>
    </motion.div>
  )
}
