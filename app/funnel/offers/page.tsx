"use client"

import { useSearchParams, useRouter } from "next/navigation"
import { useState } from "react"
import { ArrowRight, CreditCard, Umbrella, DollarSign, PiggyBank, Briefcase } from "lucide-react"
import { skipToThankYou } from "@/lib/actions"

export default function OffersPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSkip = async (formData: FormData) => {
    setIsSubmitting(true)
    formData.append("currentUrl", window.location.href)
    const result = await skipToThankYou(formData)

    if (result?.redirect) {
      router.push(result.redirect)
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-[#0a2d5e] mb-2">Special Offers For You</h2>
        <p className="text-center text-gray-600 mb-8">Based on your answers, we've selected these exclusive offers</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-blue-50 p-4 flex items-center">
              <CreditCard className="w-10 h-10 text-blue-600 mr-3" />
              <h3 className="font-bold text-lg">Secured Credit Card</h3>
            </div>
            <div className="p-4">
              <p className="text-gray-600 mb-4">
                <strong>GUARANTEED APPROVAL</strong> - Get approved with poor or no credit. Build your credit score with
                responsible use.
              </p>
              <a
                href="https://example.com/credit-card-offer"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                APPLY NOW <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>

          <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-blue-50 p-4 flex items-center">
              <Umbrella className="w-10 h-10 text-blue-600 mr-3" />
              <h3 className="font-bold text-lg">$19/Month Car Insurance</h3>
            </div>
            <div className="p-4">
              <p className="text-gray-600 mb-4">
                <strong>SAVE UP TO 50%</strong> - Find low-cost insurance options that fit your budget. Rates from
                $19/month!
              </p>
              <a
                href="https://example.com/insurance-offer"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                GET QUOTE <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>

          <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-blue-50 p-4 flex items-center">
              <DollarSign className="w-10 h-10 text-blue-600 mr-3" />
              <h3 className="font-bold text-lg">Debt Relief Program</h3>
            </div>
            <div className="p-4">
              <p className="text-gray-600 mb-4">
                <strong>REDUCE DEBT BY 50%</strong> - Free consultation with debt relief specialists. No upfront fees!
              </p>
              <a
                href="https://example.com/debt-relief-offer"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                GET RELIEF <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>

          <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-blue-50 p-4 flex items-center">
              <PiggyBank className="w-10 h-10 text-blue-600 mr-3" />
              <h3 className="font-bold text-lg">$750 Cash Advance</h3>
            </div>
            <div className="p-4">
              <p className="text-gray-600 mb-4">
                <strong>GET CASH NOW</strong> - Up to $750 instantly. No credit check, no interest, just a small fee.
              </p>
              <a
                href="https://example.com/cash-advance-offer"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                GET CASH <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>

          <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow md:col-span-2">
            <div className="bg-blue-50 p-4 flex items-center">
              <Briefcase className="w-10 h-10 text-blue-600 mr-3" />
              <h3 className="font-bold text-lg">Make $500+ Weekly From Home</h3>
            </div>
            <div className="p-4">
              <p className="text-gray-600 mb-4">
                <strong>WORK REMOTELY</strong> - Flexible hours, no experience needed. Start earning today!
              </p>
              <a
                href="https://example.com/work-from-home-offer"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                START EARNING <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center">
          <form action={handleSkip}>
            <button
              type="submit"
              disabled={isSubmitting}
              className="text-gray-400 text-sm hover:text-gray-600 font-medium"
            >
              {isSubmitting ? "Processing..." : "Skip this step"}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
