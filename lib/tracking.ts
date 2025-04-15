// Enhanced tracking utility to track user events and monetization metrics

/**
 * Track an event for analytics and monetization
 */
export function trackEvent(eventName: string, data: Record<string, any> = {}) {
  // Add common data to all events
  const eventData = {
    ...data,
    timestamp: new Date().toISOString(),
    page: typeof window !== "undefined" ? window.location.pathname : "",
    sessionId: getSessionId(),
    visitorId: getVisitorId(),
    referrer: typeof document !== "undefined" ? document.referrer : "",
    userAgent: typeof navigator !== "undefined" ? navigator.userAgent : "",
    screenWidth: typeof window !== "undefined" ? window.innerWidth : 0,
    screenHeight: typeof window !== "undefined" ? window.innerHeight : 0,
  }

  // Log event to console in development
  if (process.env.NODE_ENV === "development") {
    console.log(`📊 TRACK EVENT: ${eventName}`, eventData)
  }

  // In production, this would send data to your analytics system
  // Examples: Google Analytics, Segment, custom endpoint, etc.

  // Simulation of firing a pixel for this event (for monetization/tracking partners)
  fireTrackingPixel(eventName, eventData)

  // Simulation of sending to a data warehouse
  sendToDataWarehouse(eventName, eventData)

  return true
}

/**
 * Get or create a unique session ID
 */
function getSessionId(): string {
  if (typeof window === "undefined") return "server-side"

  // Try to get existing session ID from sessionStorage
  let sessionId = sessionStorage.getItem("funnel_session_id")

  // If no session ID exists, create one
  if (!sessionId) {
    sessionId = `${Date.now()}-${Math.random().toString(36).substring(2, 12)}`
    sessionStorage.setItem("funnel_session_id", sessionId)
  }

  return sessionId
}

/**
 * Get or create a persistent visitor ID
 */
function getVisitorId(): string {
  if (typeof window === "undefined") return "server-side"

  // Try to get existing visitor ID from localStorage
  let visitorId = localStorage.getItem("visitor_id")

  // If no visitor ID exists, create one
  if (!visitorId) {
    visitorId = `VID-${Date.now()}-${Math.random().toString(36).substring(2, 12)}`
    localStorage.setItem("visitor_id", visitorId)
  }

  return visitorId
}

/**
 * Simulate firing a tracking pixel to partners
 */
function fireTrackingPixel(eventName: string, data: Record<string, any>) {
  if (typeof window === "undefined") return

  // This is a simulation of firing tracking pixels to ad networks and monetization partners
  // In a real implementation, you would have actual pixel URLs from your partners

  // Example tracking pixel URLs (these are dummy URLs)
  const trackingUrls: Record<string, string> = {
    offer_click: "https://track.example.com/pixel?event=click&offer_id={offer_id}",
    thank_you_offer_click: "https://track.example.com/pixel?event=click&page=thank_you&offer_id={offer_id}",
    "answer_debt-level": "https://track.example.com/pixel?event=answer&question=debt_level&answer={value}",
    "answer_home-ownership": "https://track.example.com/pixel?event=answer&question=home_ownership&answer={value}",
    "answer_insurance-status": "https://track.example.com/pixel?event=answer&question=insurance_status&answer={value}",
    "answer_auto-insurance": "https://track.example.com/pixel?event=answer&question=auto_insurance&answer={value}",
    answer_mortgage: "https://track.example.com/pixel?event=answer&question=mortgage&answer={value}",
    "answer_credit-cards": "https://track.example.com/pixel?event=answer&question=credit_cards&answer={value}",
    answer_loans: "https://track.example.com/pixel?event=answer&question=loans&answer={value}",
    offers_continue: "https://track.example.com/pixel?event=offers_viewed",
    thank_you_page_view: "https://track.example.com/pixel?event=thank_you_view",
    email_capture: "https://track.example.com/pixel?event=email_capture&email={email}",
    phone_capture: "https://track.example.com/pixel?event=phone_capture&phone={phone}",
  }

  // If we have a tracking pixel URL for this event
  if (trackingUrls[eventName]) {
    let pixelUrl = trackingUrls[eventName]

    // Replace placeholders with actual data
    Object.keys(data).forEach((key) => {
      pixelUrl = pixelUrl.replace(`{${key}}`, encodeURIComponent(data[key] || ""))
    })

    // Create and fire the pixel
    const pixel = new Image()
    pixel.src = pixelUrl
    pixel.style.display = "none"

    if (process.env.NODE_ENV === "development") {
      console.log(`🔥 FIRED PIXEL: ${pixelUrl}`)
    }
  }

  // Fire retargeting pixels for specific events
  if (eventName === "email_capture" || eventName === "phone_capture") {
    fireRetargetingPixels(data)
  }
}

/**
 * Simulate sending data to a data warehouse
 */
function sendToDataWarehouse(eventName: string, data: Record<string, any>) {
  if (process.env.NODE_ENV === "development") {
    console.log(`📦 SENDING TO DATA WAREHOUSE: ${eventName}`, data)
  }

  // In a real implementation, this would send data to your data warehouse
  // Examples: Segment, Snowflake, BigQuery, etc.
}

/**
 * Simulate firing retargeting pixels
 */
function fireRetargetingPixels(data: Record<string, any>) {
  if (typeof window === "undefined") return

  // Example retargeting pixel URLs (these are dummy URLs)
  const retargetingPixels = [
    "https://retargeting.example.com/pixel?type=facebook&id=123456789",
    "https://retargeting.example.com/pixel?type=google&id=987654321",
    "https://retargeting.example.com/pixel?type=tiktok&id=abcdef123456",
  ]

  // Fire all retargeting pixels
  retargetingPixels.forEach((pixelUrl) => {
    const pixel = new Image()
    pixel.src = pixelUrl
    pixel.style.display = "none"

    if (process.env.NODE_ENV === "development") {
      console.log(`🎯 FIRED RETARGETING PIXEL: ${pixelUrl}`)
    }
  })
}
