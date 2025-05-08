"use server"

import { cookies } from "next/headers"
import { isValidEmail, isValidPhone } from "./validation"

// Helper function to safely manage cookies in Next.js 15, which returns a Promise
async function setCookie(name: string, value: string) {
  const cookieStore = await cookies();
  cookieStore.set(name, value);
}

// Helper function to safely get cookie value
async function getCookie(name: string): Promise<string> {
  const cookieStore = await cookies();
  return cookieStore.get(name)?.value || '';
}

// Helper to send data to compliance engine
async function sendToComplianceEngine(data: any) {
  console.log('📤 Attempting to send data to compliance engine:', {
    time: new Date().toISOString(),
    certificateUrl: data.certificateUrl || 'NOT_PROVIDED',
    source: data.source
  });
  
  try {
    // For testing - log the full payload being sent
    console.log('Compliance payload:', JSON.stringify(data, null, 2));
    
    const response = await fetch('https://compliance.juicedmedia.io/api/leads', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Api-Key': process.env.COMPLIANCE_API_KEY || 'YOUR_API_KEY'
      },
      body: JSON.stringify(data)
    });
    
    const result = await response.json();
    console.log('✅ Compliance API response:', result);
    return result;
  } catch (error) {
    console.error('❌ Error sending to compliance engine:', error);
    return null; // Don't block form submission on compliance API error
  }
}

// Store user data in cookies for demo purposes
// In production, you would store this in a database
export async function submitEmailForm(formData: FormData) {
  const email = formData.get("email") as string
  const consent = formData.get("consent") === "on"
  const dataPolicy = formData.get("dataPolicy") === "on"

  if (!email || !consent || !dataPolicy) {
    return { error: "All fields are required" }
  }

  // Server-side validation
  if (!isValidEmail(email)) {
    return { error: "Please enter a valid email address" }
  }

  // Store data in cookies
  await setCookie("userEmail", email)

  // Get query parameters to preserve them
  const searchParams = new URL(formData.get("currentUrl") as string).searchParams
  const queryString = searchParams.toString() ? `?${searchParams.toString()}` : ""

  // Return the redirect URL instead of redirecting directly
  return { redirect: `/funnel/quiz${queryString}` }
}

export async function submitPhoneForm(formData: FormData) {
  const phone = formData.get("phone") as string
  const tcpaConsent = formData.get("tcpaConsent") === "on"

  if (!phone || !tcpaConsent) {
    return { error: "Phone number and consent are required" }
  }

  // Server-side validation
  if (!isValidPhone(phone)) {
    return { error: "Please enter a valid US phone number" }
  }

  // Store data in cookies
  await setCookie("userPhone", phone)

  // Get query parameters to preserve them
  const searchParams = new URL(formData.get("currentUrl") as string).searchParams
  const queryString = searchParams.toString() ? `?${searchParams.toString()}` : ""

  // Return the redirect URL instead of redirecting directly
  return { redirect: `/funnel/quiz${queryString}` }
}

// Update the submitQuizAnswer function to handle FormData properly:
export async function submitQuizAnswer(formData: FormData) {
  const question = formData.get("question") as string
  const answer = formData.get("answer") as string

  if (!question || !answer) {
    return { error: "Question and answer are required" }
  }

  // Store answer in cookies
  await setCookie(`quiz_${question}`, answer)

  // Get query parameters to preserve them
  const currentUrl = formData.get("currentUrl") as string
  const searchParams = new URL(currentUrl).searchParams
  const queryString = searchParams.toString() ? `?${searchParams.toString()}` : ""

  // Determine next page based on current question
  const nextPage = "/funnel/quiz"

  // Return the redirect URL instead of redirecting directly
  return { redirect: `${nextPage}${queryString}` }
}

export async function skipToThankYou(formData: FormData) {
  // Get query parameters to preserve them
  const searchParams = new URL(formData.get("currentUrl") as string).searchParams
  const queryString = searchParams.toString() ? `?${searchParams.toString()}` : ""

  // Return the redirect URL instead of redirecting directly
  return { redirect: `/funnel/thank-you${queryString}` }
}

// Submit first step of lead capture form and send data to compliance engine
export async function submitStep1(formData: FormData) {
  const email = formData.get("email") as string
  const firstName = formData.get("firstName") as string
  const certificateUrl = formData.get("xxTrustedFormCertUrl") as string

  if (!email || !firstName) {
    return { error: "All fields are required" }
  }

  // Store in cookies
  await setCookie("email", email)
  await setCookie("firstName", firstName)
  
  // Send data to compliance engine
  await sendToComplianceEngine({
    firstName,
    lastName: '',
    email,
    phone: '',
    source: 'lead-capture-step1',
    certificateUrl
  })

  return { redirect: "/lead-capture/step2" }
}

// Submit second step of lead capture form and send complete data to compliance engine
export async function submitStep2(formData: FormData) {
  const zipCode = formData.get("zipCode") as string
  const state = formData.get("state") as string
  const phone = formData.get("phone") as string | null
  const certificateUrl = formData.get("xxTrustedFormCertUrl") as string

  if (!zipCode || !state) {
    return { error: "Zip code and state are required" }
  }

  // Store in cookies
  await setCookie("zipCode", zipCode)
  await setCookie("state", state)
  if (phone) {
    await setCookie("phone", phone)
  }

  // Get previously stored user information
  const email = await getCookie("email")
  const firstName = await getCookie("firstName")

  // Send data to compliance engine
  await sendToComplianceEngine({
    firstName,
    lastName: '',
    email,
    phone: phone || '',
    state,
    zipCode,
    source: 'lead-capture-step2',
    certificateUrl
  })

  return { redirect: "/lead-capture/thank-you" }
}
