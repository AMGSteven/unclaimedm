"use client"

import { useState, useEffect } from "react"
import { CheckCircle, Star, ExternalLink, MapPin, Clock, AlertCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { trackEvent } from "@/lib/tracking"
import { useRouter, useSearchParams } from "next/navigation"
import { motion } from "framer-motion"

interface RelatedOffer {
  id: string
  title: string
  description: string
  cta: string
  url: string
  icon: string
  badge?: string
}

export default function ThankYouPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [processingPhase, setProcessingPhase] = useState(1)
  const [isProcessingComplete, setIsProcessingComplete] = useState(false)
  const [showLocationMessage, setShowLocationMessage] = useState(false)
  const [city, setCity] = useState("your area")
  const [offerInteractions, setOfferInteractions] = useState<Record<string, boolean>>({})
  const [showUrgencyMessage, setShowUrgencyMessage] = useState(false)
  const [resultsData, setResultsData] = useState({
    potentialMatches: Math.floor(Math.random() * 5) + 2,
    estimatedAmount: (Math.random() * 2000 + 500).toFixed(2),
    searchId: `UNCL-${Math.random().toString(36).substring(2, 10).toUpperCase()}`,
  })

  useEffect(() => {
    // Track page view
    trackEvent("thank_you_page_view", {})

    // Simulate getting user's location
    const cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia"]
    setCity(cities[Math.floor(Math.random() * cities.length)])

    // Simulate processing phases
    if (processingPhase < 4 && !isProcessingComplete) {
      const timer = setTimeout(() => {
        setProcessingPhase((prev) => prev + 1)

        if (processingPhase === 3) {
          setIsProcessingComplete(true)
          setShowLocationMessage(true)

          // Show urgency message after a delay
          setTimeout(() => {
            setShowUrgencyMessage(true)
          }, 5000)
        }
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [processingPhase, isProcessingComplete])

  const handleOfferClick = (offer: RelatedOffer) => {
    // Track click
    trackEvent("thank_you_offer_click", {
      offer_id: offer.id,
      offer_title: offer.title,
      url: offer.url,
    })

    // Mark offer as interacted
    setOfferInteractions((prev) => ({
      ...prev,
      [offer.id]: true,
    }))

    // Open in new tab
    window.open(offer.url, "_blank")
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="min-h-screen bg-[#1a4b8a] py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex justify-center mb-6">
              <div className="relative w-16 h-16">
                <Image
                  src="/images/our-unclaimed-money-logo.png"
                  alt="Our Unclaimed Money"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {!isProcessingComplete ? (
              <div className="text-center">
                <h2 className="text-xl font-bold text-[#0a2d5e] mb-4">Processing Your Unclaimed Money Search</h2>

                <div className="w-full bg-gray-200 h-2 rounded-full mb-6">
                  <motion.div
                    className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${processingPhase * 25}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center mr-3 bg-green-100">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    </div>
                    <span className="text-sm">Verifying your information...</span>
                  </div>

                  <div className="flex items-center">
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${processingPhase >= 2 ? "bg-green-100" : "bg-gray-100"}`}
                    >
                      {processingPhase >= 2 ? (
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      ) : (
                        <Clock className="w-4 h-4 text-gray-400" />
                      )}
                    </div>
                    <span className="text-sm">Searching national databases...</span>
                  </div>

                  <div className="flex items-center">
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${processingPhase >= 3 ? "bg-green-100" : "bg-gray-100"}`}
                    >
                      {processingPhase >= 3 ? (
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      ) : (
                        <Clock className="w-4 h-4 text-gray-400" />
                      )}
                    </div>
                    <span className="text-sm">Checking for matches...</span>
                  </div>

                  <div className="flex items-center">
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${processingPhase >= 4 ? "bg-green-100" : "bg-gray-100"}`}
                    >
                      {processingPhase >= 4 ? (
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      ) : (
                        <Clock className="w-4 h-4 text-gray-400" />
                      )}
                    </div>
                    <span className="text-sm">Preparing your results...</span>
                  </div>
                </div>

                <div className="animate-pulse text-sm text-gray-500">Please wait while we process your request...</div>
              </div>
            ) : (
              <motion.div variants={containerVariants} initial="hidden" animate="visible">
                <motion.div variants={itemVariants} className="text-center mb-8">
                  <div className="flex justify-center mb-4">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 10 }}
                      className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center"
                    >
                      <CheckCircle className="w-10 h-10 text-green-500" />
                    </motion.div>
                  </div>

                  <h2 className="text-2xl font-bold text-[#0a2d5e] mb-4">Great News! Your Search is Complete</h2>

                  <motion.div variants={itemVariants} className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-6">
                    <h3 className="font-bold text-blue-800 mb-2">Your Search Results</h3>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <p className="text-sm text-blue-600">Potential Matches</p>
                        <p className="text-2xl font-bold text-blue-800">{resultsData.potentialMatches}</p>
                      </div>
                      <div>
                        <p className="text-sm text-blue-600">Estimated Amount</p>
                        <p className="text-2xl font-bold text-blue-800">${resultsData.estimatedAmount}</p>
                      </div>
                    </div>
                    <div className="mt-2 text-xs text-blue-600">Search ID: {resultsData.searchId}</div>
                  </motion.div>

                  {showLocationMessage && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center justify-center text-sm text-gray-600 mb-4"
                    >
                      <MapPin className="w-4 h-4 mr-1 text-blue-500" />
                      <span>
                        <strong>{Math.floor(Math.random() * 15) + 5} people</strong> in {city} claimed their money in
                        the last 24 hours
                      </span>
                    </motion.div>
                  )}

                  <motion.p variants={itemVariants} className="text-gray-600 mb-4">
                    We've emailed your detailed guide to claiming your unclaimed money. Please check your inbox within
                    the next 15 minutes.
                  </motion.p>

                  {showUrgencyMessage && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-orange-50 border border-orange-100 rounded-md p-3 mb-6 flex items-start"
                    >
                      <AlertCircle className="w-5 h-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                      <div className="text-left">
                        <p className="text-sm font-medium text-orange-800">Important Notice</p>
                        <p className="text-xs text-orange-700">
                          Unclaimed funds may be transferred to the state's general fund if not claimed within 12
                          months. We recommend starting your claim process as soon as possible.
                        </p>
                      </div>
                    </motion.div>
                  )}

                  <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex justify-center mb-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 italic">"Found $4,210 in just 3 weeks!"</p>
                      <p className="text-xs text-gray-500 mt-2">- Lisa M.</p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex justify-center mb-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 italic">"Discovered $1,850 from an old account!"</p>
                      <p className="text-xs text-gray-500 mt-2">- Mark W.</p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex justify-center mb-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 italic">"Got $2,850 from an insurance policy!"</p>
                      <p className="text-xs text-gray-500 mt-2">- Maria T.</p>
                    </div>
                  </motion.div>
                </motion.div>

                <motion.div variants={itemVariants} className="mb-6">
                  <h3 className="font-bold text-[#0a2d5e] mb-4 text-center">Related Services You May Need</h3>

                  <div className="space-y-4">
                    {relatedOffers.map((offer) => (
                      <motion.div
                        key={offer.id}
                        variants={itemVariants}
                        className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all"
                        whileHover={{ y: -2, boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}
                      >
                        <div className="p-4 bg-white">
                          <div className="flex items-start">
                            <div className="flex-shrink-0 mr-3">
                              <div className="relative w-12 h-12 bg-gray-100 rounded-lg p-2">
                                <Image
                                  src={offer.icon || "/placeholder.svg"}
                                  alt={offer.title}
                                  fill
                                  className="object-contain p-1"
                                />
                              </div>
                            </div>

                            <div className="flex-1">
                              <div className="flex justify-between items-start">
                                <h3 className="font-bold text-[#0a2d5e]">{offer.title}</h3>
                                {offer.badge && (
                                  <span className="inline-block px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded">
                                    {offer.badge}
                                  </span>
                                )}
                              </div>
                              <p className="text-sm text-gray-600 mt-1 mb-3">{offer.description}</p>

                              <Button
                                onClick={() => handleOfferClick(offer)}
                                className={`flex items-center ${
                                  offerInteractions[offer.id]
                                    ? "bg-green-600 hover:bg-green-700"
                                    : "bg-red-600 hover:bg-red-700"
                                } text-white text-sm`}
                                size="sm"
                              >
                                {offerInteractions[offer.id] ? (
                                  <>Viewed</>
                                ) : (
                                  <>
                                    {offer.cta} <ExternalLink className="w-3 h-3 ml-1" />
                                  </>
                                )}
                              </Button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="text-center mt-6">
                  <Link href="/">
                    <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                      Return to Homepage
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

// Related offers data
const relatedOffers: RelatedOffer[] = [
  {
    id: "credit-monitoring-1",
    title: "Free Credit Monitoring",
    description: "Keep track of your credit score and get alerts when it changes. Protect your identity.",
    cta: "Activate Free Monitoring",
    url: "https://example.com/credit-monitoring",
    icon: "/placeholder.svg?height=60&width=60",
    badge: "FREE TRIAL",
  },
  {
    id: "tax-preparation-1",
    title: "Tax Preparation Services",
    description: "Get help filing your taxes and maximize your refund. Professional tax preparers ready to help.",
    cta: "Start Filing",
    url: "https://example.com/tax-preparation",
    icon: "/placeholder.svg?height=60&width=60",
  },
  {
    id: "financial-advisor-1",
    title: "Free Financial Consultation",
    description: "Speak with a financial advisor about how to best use your unclaimed funds. No obligation.",
    cta: "Book Consultation",
    url: "https://example.com/financial-advisor",
    icon: "/placeholder.svg?height=60&width=60",
  },
]
