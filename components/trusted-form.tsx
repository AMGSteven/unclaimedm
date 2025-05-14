"use client"

import { useEffect } from "react"
import { loadTrustedFormScript } from "@/lib/trusted-form"

/**
 * TrustedForm component for capturing lead certificates
 * This component ensures the TrustedForm script is only loaded once per page
 * and provides a consistent implementation across the application.
 */
export function TrustedForm() {
  useEffect(() => {
    // Load the TrustedForm script once on mount
    // The utility function ensures it's only loaded once per page
    loadTrustedFormScript()
  }, [])

  return (
    <>
      {/* Hidden input for TrustedForm */}
      <input type="hidden" id="xxTrustedFormCertUrl" name="xxTrustedFormCertUrl" />
    </>
  )
}
