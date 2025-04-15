"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { trackEvent } from "@/lib/tracking"

interface OfferWallProps {
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
}

export function OfferWall({ userData, answers, onContinue }: OfferWallProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [isLoading, setIsLoading] = useState(false)

  const categories = [
    { value: "all", label: "All Offers" },
    { value: "credit", label: "Credit" },
    { value: "loans", label: "Loans" },
    { value: "insurance", label: "Insurance" },
    { value: "health", label: "Health" },
    { value: "legal", label: "Legal" },
    { value: "benefits", label: "Benefits" },
  ]

  // Offers data
  const offers: Offer[] = [
    {
      id: "credit-card-1",
      title: "Guaranteed Approval Credit Card",
      description: "Build credit with no credit check required. Get approved today!",
      icon: "/placeholder.svg?height=40&width=40",
      category: "credit",
      cta: "Apply Now",
      url: "https://example.com/credit-card",
      badge: "HOT OFFER",
    },
    {
      id: "auto-insurance-1",
      title: "$19/Month Auto Insurance",
      description: "Drivers are saving up to 50% on car insurance with our partners.",
      icon: "/placeholder.svg?height=40&width=40",
      category: "insurance",
      cta: "Get Quote",
      url: "https://example.com/auto-insurance",
    },
    {
      id: "debt-relief-1",
      title: "Debt Relief Program",
      description: "Reduce your debt by up to 50% with our debt consolidation program.",
      icon: "/placeholder.svg?height=40&width=40",
      category: "credit",
      cta: "Check Eligibility",
      url: "https://example.com/debt-relief",
      secondary_cta: "Learn More",
      secondary_url: "https://example.com/debt-relief-info",
    },
    {
      id: "cash-advance-1",
      title: "$750 Cash Advance",
      description: "Fast cash with no credit check. Get money in your account today.",
      icon: "/placeholder.svg?height=40&width=40",
      category: "loans",
      cta: "Get Cash",
      url: "https://example.com/cash-advance",
      badge: "INSTANT APPROVAL",
    },
    {
      id: "work-from-home-1",
      title: "Make $500+ Weekly From Home",
      description: "Flexible hours, no experience needed. Start earning today!",
      icon: "/placeholder.svg?height=40&width=40",
      category: "benefits",
      cta: "Start Earning",
      url: "https://example.com/work-from-home",
    },
    {
      id: "disability-benefits-1",
      title: "Disability Benefits Check",
      description: "Find out if you qualify for disability benefits in 60 seconds.",
      icon: "/placeholder.svg?height=40&width=40",
      category: "benefits",
      cta: "Check Eligibility",
      url: "https://example.com/disability-benefits",
    },
    {
      id: "personal-loan-1",
      title: "Personal Loans up to $35,000",
      description: "Bad credit OK. Get funded as soon as tomorrow.",
      icon: "/placeholder.svg?height=40&width=40",
      category: "loans",
      cta: "Apply Now",
      url: "https://example.com/personal-loan",
      secondary_cta: "Check Rate",
      secondary_url: "https://example.com/personal-loan-rate",
    },
    {
      id: "health-insurance-1",
      title: "Health Insurance from $99/month",
      description: "Find affordable health coverage for you and your family.",
      icon: "/placeholder.svg?height=40&width=40",
      category: "health",
      cta: "Get Covered",
      url: "https://example.com/health-insurance",
    },
    {
      id: "tax-relief-1",
      title: "IRS Tax Relief",
      description: "Settle your tax debt for less than you owe. Free consultation.",
      icon: "/placeholder.svg?height=40&width=40",
      category: "legal",
      cta: "Get Relief",
      url: "https://example.com/tax-relief",
    },
    {
      id: "credit-repair-1",
      title: "Credit Repair Services",
      description: "Fix your credit score and qualify for better rates.",
      icon: "/placeholder.svg?height=40&width=40",
      category: "credit",
      cta: "Fix My Credit",
      url: "https://example.com/credit-repair",
    },
    {
      id: "legal-help-1",
      title: "Free Legal Help",
      description: "Speak with an attorney about your case at no cost.",
      icon: "/placeholder.svg?height=40&width=40",
      category: "legal",
      cta: "Get Help",
      url: "https://example.com/legal-help",
    },
    {
      id: "medicare-1",
      title: "Medicare Advantage Plans",
      description: "Find plans with $0 premiums in your area.",
      icon: "/placeholder.svg?height=40&width=40",
      category: "health",
      cta: "Search Plans",
      url: "https://example.com/medicare",
    },
  ]

  // Filter offers by category
  const filteredOffers =
    selectedCategory === "all" ? offers : offers.filter((offer) => offer.category === selectedCategory)

  const handleOfferClick = (offer: Offer, action: "primary" | "secondary") => {
    const url = action === "primary" ? offer.url : offer.secondary_url || offer.url

    // Track click
    trackEvent("offer_click", {
      offer_id: offer.id,
      offer_title: offer.title,
      action: action,
      url: url,
    })

    // Open in new tab
    window.open(url, "_blank")
  }

  const handleContinue = () => {
    setIsLoading(true)
    // Track that user continued to the next step
    trackEvent("offers_continue", {})

    // Simulate processing
    setTimeout(() => {
      onContinue()
    }, 1000)
  }

  return (
    <div>
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-[#0a2d5e] mb-2">Special Offers For You</h2>
        <p className="text-sm text-gray-600">
          Based on your answers, we've selected these exclusive offers just for you.
        </p>
      </div>

      {/* Category Filter */}
      <div className="mb-6 overflow-x-auto scrollbar-hide">
        <div className="flex space-x-2 pb-2">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              className={`px-3 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                selectedCategory === category.value
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      {/* Offers Grid */}
      <div className="space-y-4 max-h-[400px] overflow-y-auto pb-4 pr-1">
        {filteredOffers.map((offer) => (
          <div key={offer.id} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="p-4 bg-white relative">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <div className="relative w-10 h-10">
                    <Image src={offer.icon || "/placeholder.svg"} alt={offer.title} fill className="object-contain" />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-[#0a2d5e]">{offer.title}</h3>
                    {offer.badge && (
                      <span className="inline-block px-2 py-1 bg-orange-100 text-orange-800 text-xs font-medium rounded">
                        {offer.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mt-1 mb-3">{offer.description}</p>

                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => handleOfferClick(offer, "primary")}
                      className="flex items-center justify-center py-2 px-3 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded transition-colors"
                    >
                      {offer.cta} <ArrowRight className="w-3 h-3 ml-1" />
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
          </div>
        ))}
      </div>

      {/* Continue Button */}
      <div className="mt-6 flex flex-col space-y-3">
        <Button
          onClick={handleContinue}
          className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium"
          disabled={isLoading}
        >
          {isLoading ? "Processing..." : "Continue to Results"}
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
      </div>
    </div>
  )
}
