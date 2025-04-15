"use client"

import { useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Loader2 } from "lucide-react"

export default function FunnelRedirectPage() {
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Get all search params
    const queryParams = new URLSearchParams()

    searchParams.forEach((value, key) => {
      queryParams.append(key, value)
    })

    // Redirect to the new SPA funnel with all query params
    router.push(`/funnel/quiz?${queryParams.toString()}`)
  }, [router, searchParams])

  return (
    <div className="min-h-screen bg-[#1a4b8a] flex flex-col items-center justify-center">
      <div className="text-white text-center">
        <Loader2 className="h-12 w-12 animate-spin mx-auto mb-4" />
        <h1 className="text-xl font-bold">Loading Your Unclaimed Money Search...</h1>
        <p className="mt-2">Please wait while we prepare your experience</p>
      </div>
    </div>
  )
}
