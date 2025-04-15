"use client"

import { useState, useEffect } from "react"
import { ArrowRight, Star, CheckCircle, ExternalLink, ThumbsUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { trackEvent } from "@/lib/tracking"

interface EnhancedOfferWallProps {
  userData: {
    email: string
    phone: string
    firstName: string
    zipCode: string
  }
  answers: Record<string, string>
  onContinue: () => void
}

interface Offer {
  id: string
  title: string
  description: string
  icon: string
  category: string
  cta: string
  url: string
  secondary_cta?: string
  secondary_url?: string
  badge?: string
  match?: number
  rating?: number
  popular?: boolean
}

export function EnhancedOfferWall({ userData, answers, onContinue }: EnhancedOfferWallProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [isLoading, setIsLoading] = useState(false)
  const [showThankYou, setShowThankYou] = useState(false)
  const [offerInteractions, setOfferInteractions] = useState<Record<string, boolean>>({})
  const [showLocationMessage, setShowLocationMessage] = useState(false)
  const [city, setCity] = useState("your area")

  useEffect(() => {
    // Simulate getting user's location
    const cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia"]
    setCity(cities[Math.floor(Math.random() * cities.length)])

    setTimeout(() => {
      setShowLocationMessage(true)
    }, 2000)

    // Track page view
    trackEvent("offers_page_view", {
      email: userData.email,
      phone: userData.phone,
    })
  }, [userData])

  const categories = [
    { value: "all", label: "All Offers", count: offers.length },
    { value: "credit", label: "Credit", count: offers.filter((o) => o.category === "credit").length },
    { value: "loans", label: "Loans", count: offers.filter((o) => o.category === "loans").length },
    { value: "insurance", label: "Insurance", count: offers.filter((o) => o.category === "insurance").length },
    { value: "health", label: "Health", count: offers.filter((o) => o.category === "health").length },
    { value: "legal", label: "Legal", count: offers.filter((o) => o.category === "legal").length },
    { value: "benefits", label: "Benefits", count: offers.filter((o) => o.category === "benefits").length },
  ]

  // Filter offers by category
  const filteredOffers =
    selectedCategory === "all" ? offers : offers.filter((offer) => offer.category === selectedCategory)

  // Sort offers by match percentage and popularity
  const sortedOffers = [...filteredOffers].sort((a, b) => {
    if (a.popular && !b.popular) return -1
    if (!a.popular && b.popular) return 1
    return (b.match || 0) - (a.match || 0)
  })

  const handleOfferClick = (offer: Offer, action: "primary" | "secondary") => {
    const url = action === "primary" ? offer.url : offer.secondary_url || offer.url

    // Track click
    trackEvent("offer_click", {
      offer_id: offer.id,
      offer_title: offer.title,
      action: action,
      url: url,
      email: userData.email,
      phone: userData.phone,
    })

    // Mark offer as interacted
    setOfferInteractions((prev) => ({
      ...prev,
      [offer.id]: true,
    }))

    // Open in new tab
    window.open(url, "_blank")
  }

  const handleContinue = () => {
    setIsLoading(true)
    // Track that user continued to the next step
    trackEvent("offers_continue", {
      email: userData.email,
      phone: userData.phone,
      offers_viewed: Object.keys(offerInteractions).length,
    })

    // Show thank you message
    setShowThankYou(true)

    // Simulate processing
    setTimeout(() => {
      onContinue()
    }, 2000)
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
    <AnimatePresence>
      {showThankYou ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-10"
        >
          <div className="flex justify-center mb-4">
            <div className="relative w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-green-500" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-[#0a2d5e] mb-2">Thank You!</h2>
          <p className="text-gray-600 mb-6">We're preparing your unclaimed money results...</p>
          <div className="w-16 h-16 border-4 border-t-blue-600 border-blue-200 rounded-full animate-spin mx-auto"></div>
        </motion.div>
      ) : (
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <motion.div variants={itemVariants} className="text-center mb-6">
            <h2 className="text-2xl font-bold text-[#0a2d5e] mb-2">Special Offers For You</h2>
            <p className="text-sm text-gray-600">
              Based on your answers, we've selected these exclusive offers just for you.
            </p>

            {showLocationMessage && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-2 bg-blue-50 text-blue-700 text-sm py-2 px-3 rounded-md inline-block"
              >
                <span className="font-medium">People in {city}</span> who viewed these offers saved an average of{" "}
                <span className="font-bold">$1,240</span> this year!
              </motion.div>
            )}
          </motion.div>

          {/* Category Filter */}
          <motion.div variants={itemVariants} className="mb-6 overflow-x-auto scrollbar-hide">
            <div className="flex space-x-2 pb-2">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`px-3 py-2 rounded-full text-sm font-medium whitespace-nowrap flex items-center ${
                    selectedCategory === category.value
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category.label}
                  <span
                    className={`ml-1 text-xs px-1.5 py-0.5 rounded-full ${
                      selectedCategory === category.value ? "bg-white text-blue-600" : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Offers Grid */}
          <motion.div variants={itemVariants} className="space-y-4 max-h-[400px] overflow-y-auto pb-4 pr-1">
            {sortedOffers.map((offer, index) => (
              <motion.div
                key={offer.id}
                variants={itemVariants}
                custom={index}
                className={`border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all ${
                  offer.popular ? "border-orange-300 bg-orange-50" : "bg-white"
                }`}
                whileHover={{ y: -2, boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}
              >
                <div className="p-4 relative">
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
                        <div className="flex items-center space-x-2">
                          {offer.match && (
                            <span className="inline-block px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                              {offer.match}% Match
                            </span>
                          )}
                          {offer.badge && (
                            <span className="inline-block px-2 py-1 bg-orange-100 text-orange-800 text-xs font-medium rounded-full">
                              {offer.badge}
                            </span>
                          )}
                        </div>
                      </div>

                      <p className="text-sm text-gray-600 mt-1 mb-2">{offer.description}</p>

                      {offer.rating && (
                        <div className="flex items-center mb-2">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-3 h-3 ${i < offer.rating! ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                              />
                            ))}
                          </div>
                          <span className="text-xs text-gray-500 ml-1">
                            ({Math.floor(Math.random() * 500) + 100} reviews)
                          </span>
                        </div>
                      )}

                      <div className="flex flex-wrap gap-2">
                        <button
                          onClick={() => handleOfferClick(offer, "primary")}
                          className={`flex items-center justify-center py-2 px-3 ${
                            offerInteractions[offer.id]
                              ? "bg-green-600 hover:bg-green-700"
                              : "bg-red-600 hover:bg-red-700"
                          } text-white text-sm font-medium rounded transition-colors`}
                        >
                          {offerInteractions[offer.id] ? (
                            <>
                              <ThumbsUp className="w-3 h-3 mr-1" />
                              Viewed
                            </>
                          ) : (
                            <>
                              {offer.cta} <ArrowRight className="w-3 h-3 ml-1" />
                            </>
                          )}
                        </button>

                        {offer.secondary_cta && (
                          <button
                            onClick={() => handleOfferClick(offer, "secondary")}
                            className="flex items-center justify-center py-2 px-3 border border-gray-300 hover:bg-gray-50 text-gray-700 text-sm font-medium rounded transition-colors"
                          >
                            {offer.secondary_cta}
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Continue Button */}

          <motion.div variants={itemVariants} className="mt-6 flex flex-col space-y-3">
            <Button
              onClick={handleContinue}
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  Processing...
                </div>
              ) : (
                <>
                  Continue to Results
                  <ExternalLink className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>

            <p className="text-center text-xs text-gray-500">
              By continuing, I agree to the{" "}
              <a
                href="https://jmcustomerprivacy.com/terms-conditions"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                href="https://jmcustomerprivacy.com/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Privacy Policy
              </a>
              .
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Offers data with enhanced properties
const offers: Offer[] = [
  {
    id: "credit-card-1",
    title: "Guaranteed Approval Credit Card",
    description: "Build credit with no credit check required. Get approved today regardless of credit history.",
    icon: "/placeholder.svg?height=40&width=40",
    category: "credit",
    cta: "Apply Now",
    url: "https://example.com/credit-card",
    badge: "HOT OFFER",
    match: 95,
    rating: 4.2,
    popular: true,
  },
  {
    id: "auto-insurance-1",
    title: "$19/Month Auto Insurance",
    description: "Drivers are saving up to 50% on car insurance with our partners. Get an instant quote now.",
    icon: "/placeholder.svg?height=40&width=40",
    category: "insurance",
    cta: "Get Quote",
    url: "https://example.com/auto-insurance",
    match: 92,
    rating: 4.7,
  },
  {
    id: "debt-relief-1",
    title: "Debt Relief Program",
    description: "Reduce your debt by up to 50% with our debt consolidation program. Free consultation.",
    icon: "/placeholder.svg?height=40&width=40",
    category: "credit",
    cta: "Check Eligibility",
    url: "https://example.com/debt-relief",
    secondary_cta: "Learn More",
    secondary_url: "https://example.com/debt-relief-info",
    match: 88,
    rating: 4.5,
  },
  {
    id: "cash-advance-1",
    title: "$750 Cash Advance",
    description: "Fast cash with no credit check. Get money in your account today, even with bad credit.",
    icon: "/placeholder.svg?height=40&width=40",
    category: "loans",
    cta: "Get Cash",
    url: "https://example.com/cash-advance",
    badge: "INSTANT APPROVAL",
    match: 90,
    rating: 4.1,
  },
  {
    id: "mortgage-1",
    title: "Mortgage Refinance - Save $300/mo",
    description: "Homeowners are saving an average of $300/month by refinancing. Check your new rate in seconds.",
    icon: "/placeholder.svg?height=40&width=40",
    category: "loans",
    cta: "Check Rate",
    url: "https://example.com/mortgage",
    match: 87,
    rating: 4.8,
    popular: true,
  },
  {
    id: "disability-benefits-1",
    title: "Disability Benefits Check",
    description: "Find out if you qualify for disability benefits in 60 seconds. No obligation.",
    icon: "/placeholder.svg?height=40&width=40",
    category: "benefits",
    cta: "Check Eligibility",
    url: "https://example.com/disability-benefits",
    match: 82,
    rating: 4.3,
  },
  {
    id: "personal-loan-1",
    title: "Personal Loans up to $35,000",
    description: "Bad credit OK. Get funded as soon as tomorrow with rates starting at 5.99% APR.",
    icon: "/placeholder.svg?height=40&width=40",
    category: "loans",
    cta: "Apply Now",
    url: "https://example.com/personal-loan",
    secondary_cta: "Check Rate",
    secondary_url: "https://example.com/personal-loan-rate",
    match: 89,
    rating: 4.6,
  },
  {
    id: "health-insurance-1",
    title: "Health Insurance from $99/month",
    description: "Find affordable health coverage for you and your family. Plans for every budget.",
    icon: "/placeholder.svg?height=40&width=40",
    category: "health",
    cta: "Get Covered",
    url: "https://example.com/health-insurance",
    match: 84,
    rating: 4.4,
  },
  {
    id: "tax-relief-1",
    title: "IRS Tax Relief",
    description: "Settle your tax debt for less than you owe. Free consultation with tax professionals.",
    icon: "/placeholder.svg?height=40&width=40",
    category: "legal",
    cta: "Get Relief",
    url: "https://example.com/tax-relief",
    match: 81,
    rating: 4.2,
  },
  {
    id: "credit-repair-1",
    title: "Credit Repair Services",
    description: "Fix your credit score and qualify for better rates. Results in as little as 30 days.",
    icon: "/placeholder.svg?height=40&width=40",
    category: "credit",
    cta: "Fix My Credit",
    url: "https://example.com/credit-repair",
    match: 86,
    rating: 4.0,
  },
  {
    id: "legal-help-1",
    title: "Free Legal Help",
    description: "Speak with an attorney about your case at no cost. All practice areas available.",
    icon: "/placeholder.svg?height=40&width=40",
    category: "legal",
    cta: "Get Help",
    url: "https://example.com/legal-help",
    match: 79,
    rating: 4.5,
  },
  {
    id: "medicare-1",
    title: "Medicare Advantage Plans",
    description: "Find plans with $0 premiums in your area. Compare options and save.",
    icon: "/placeholder.svg?height=40&width=40",
    category: "health",
    cta: "Search Plans",
    url: "https://example.com/medicare",
    match: 83,
    rating: 4.7,
  },
]
