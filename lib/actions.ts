"use server"

import { cookies } from "next/headers"
import { isValidEmail, isValidPhone } from "./validation"

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
  cookies().set("userEmail", email)

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
  cookies().set("userPhone", phone)

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
  cookies().set(`quiz_${question}`, answer)

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

export async function submitStep1(formData: FormData) {
  const email = formData.get("email") as string
  const firstName = formData.get("firstName") as string

  if (!email || !firstName) {
    return { error: "All fields are required" }
  }

  cookies().set("email", email)
  cookies().set("firstName", firstName)

  return { redirect: "/lead-capture/step2" }
}

export async function submitStep2(formData: FormData) {
  const zipCode = formData.get("zipCode") as string
  const state = formData.get("state") as string
  const phone = formData.get("phone") as string | null

  if (!zipCode || !state) {
    return { error: "Zip code and state are required" }
  }

  cookies().set("zipCode", zipCode)
  cookies().set("state", state)
  if (phone) {
    cookies().set("phone", phone)
  }

  return { redirect: "/lead-capture/thank-you" }
}
