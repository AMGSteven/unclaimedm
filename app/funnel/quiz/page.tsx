"use client"

import { Button } from "@/components/ui/button"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { useRouter, useSearchParams } from "next/navigation"
import {
  Check,
  X,
  Clock,
  AlertCircle,
  Home,
  DollarSign,
  CreditCard,
  Briefcase,
  Car,
  Heart,
  Umbrella,
  FileText,
} from "lucide-react"
import { trackEvent } from "@/lib/tracking"
import { QuizStep } from "@/components/quiz-step"
import { EmailCaptureStep } from "@/components/email-capture-step"
import { PhoneCaptureStep } from "@/components/phone-capture-step"
import { LoadingOverlay } from "@/components/loading-overlay"
import { EnhancedOfferWall } from "@/components/enhanced-offer-wall"
import { submitQuizAnswer, submitEmailForm, submitPhoneForm } from "@/lib/actions"
import { AnimatedProgressBar } from "@/components/animated-progress-bar"
import { motion } from "framer-motion"

// Quiz Step Types
type StepType =
  | "email"
  | "phone"
  | "debt-level"
  | "home-ownership"
  | "insurance-status"
  | "income-level"
  | "auto-insurance"
  | "mortgage"
  | "credit-cards"
  | "loans"
  | "retirement"
  | "investments"
  | "tax-debt"
  | "medical-bills"
  | "education"
  | "offers"

export default function QuizFunnel() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [currentStep, setCurrentStep] = useState<StepType>("email")
  const [isLoading, setIsLoading] = useState(false)
  // Add checkbox state to the component state
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [userData, setUserData] = useState({
    email: "",
    phone: "",
    firstName: "",
    zipCode: "",
  })
  // Add these new state variables for checkboxes
  const [emailConsent, setEmailConsent] = useState(false)
  const [emailDataPolicy, setEmailDataPolicy] = useState(false)
  const [phoneTcpaConsent, setPhoneTcpaConsent] = useState(false)
  const [progress, setProgress] = useState(5)
  const [showExitIntent, setShowExitIntent] = useState(false)
  const [stepHistory, setStepHistory] = useState<StepType[]>(["email"])
  const [showEngagementPrompt, setShowEngagementPrompt] = useState(false)
  const [timeOnPage, setTimeOnPage] = useState(0)

  // Total number of steps in the funnel
  const totalSteps = 12

  // Define quiz paths based on answers
  const getNextStep = useCallback((currentStep: StepType, answer: string): StepType => {
    // Define the flow logic based on user answers
    // First fixed steps
    if (currentStep === "email") return "phone"
    if (currentStep === "phone") return "debt-level"

    // Branching logic
    if (currentStep === "debt-level") {
      if (answer === "high" || answer === "medium") return "tax-debt"
      return "home-ownership"
    }

    if (currentStep === "home-ownership") {
      if (answer === "own") return "mortgage"
      return "insurance-status"
    }

    if (currentStep === "insurance-status") {
      if (answer === "none" || answer === "inadequate") return "auto-insurance"
      return "income-level"
    }

    if (currentStep === "tax-debt") return "medical-bills"
    if (currentStep === "medical-bills") return "credit-cards"
    if (currentStep === "mortgage") return "retirement"
    if (currentStep === "auto-insurance") return "loans"
    if (currentStep === "income-level") return "investments"
    if (currentStep === "retirement") return "investments"
    if (currentStep === "loans") return "education"
    if (currentStep === "credit-cards") return "education"
    if (currentStep === "investments") return "education"
    if (currentStep === "education") return "offers"

    // Default to offers page if no specific path
    return "offers"
  }, [])

  // Calculate progress percentage
  useEffect(() => {
    const currentIndex = stepHistory.length - 1
    const newProgress = Math.min(Math.round((currentIndex / totalSteps) * 100), 100)
    setProgress(newProgress)
  }, [stepHistory, totalSteps])

  // Handle mouse exit to show exit intent popup
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !showExitIntent && currentStep !== "offers") {
        setShowExitIntent(true)
      }
    }

    document.addEventListener("mouseleave", handleMouseLeave)
    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [showExitIntent, currentStep])

  // Time on page tracking for engagement prompts
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeOnPage((prev) => prev + 1)
    }, 1000)

    // Show engagement prompt after 30 seconds if user is still on an early question
    if (timeOnPage > 30 && stepHistory.length < 4 && !showEngagementPrompt) {
      setShowEngagementPrompt(true)
    }

    return () => clearInterval(timer)
  }, [timeOnPage, stepHistory.length, showEngagementPrompt])

  // Update the handleStepSubmit function to store checkbox states
  const handleStepSubmit = async (stepId: string, value: string | Record<string, string>) => {
    setIsLoading(true)
    setShowEngagementPrompt(false)

    // Track the answer
    trackEvent(`answer_${stepId}`, { value })

    try {
      // Handle different step types
      if (stepId === "email") {
        const emailData = value as Record<string, string>
        // Store checkbox states
        setEmailConsent(emailData.consent === "true")
        setEmailDataPolicy(emailData.dataPolicy === "true")

        // Create a FormData object for the server action
        const formData = new FormData()
        Object.entries(emailData).forEach(([key, val]) => {
          formData.append(key, val)
        })
        formData.append("currentUrl", window.location.href)

        await submitEmailForm(formData)
        setUserData((prev) => ({ ...prev, email: emailData.email }))
      } else if (stepId === "phone") {
        const phoneData = value as Record<string, string>
        // Store checkbox state
        setPhoneTcpaConsent(phoneData.tcpaConsent === "true")

        // Create a FormData object for the server action
        const formData = new FormData()
        Object.entries(phoneData).forEach(([key, val]) => {
          formData.append(key, val)
        })
        formData.append("currentUrl", window.location.href)

        await submitPhoneForm(formData)
        setUserData((prev) => ({ ...prev, phone: phoneData.phone }))
      } else {
        // Regular quiz question
        const answer = value as string
        setAnswers((prev) => ({ ...prev, [stepId]: answer }))

        // Create a FormData object for the server action
        const formData = new FormData()
        formData.append("question", stepId)
        formData.append("answer", answer)
        formData.append("currentUrl", window.location.href)

        await submitQuizAnswer(formData)
      }

      // Get next step
      const nextStep = getNextStep(currentStep as StepType, value as string)

      // Update step history for back button support
      setStepHistory((prev) => [...prev, nextStep])

      // Show animation then change step
      setTimeout(() => {
        setCurrentStep(nextStep)
        setIsLoading(false)
        // Scroll to top of container
        window.scrollTo(0, 0)
      }, 500)
    } catch (error) {
      console.error("Error submitting step:", error)
      setIsLoading(false)
    }
  }

  const handleBack = () => {
    if (stepHistory.length > 1) {
      const newHistory = [...stepHistory]
      newHistory.pop() // Remove current step
      const previousStep = newHistory[newHistory.length - 1]
      setStepHistory(newHistory)
      setCurrentStep(previousStep)
      setIsLoading(false) // Ensure loading state is reset
    }
  }

  const closeExitIntent = () => {
    setShowExitIntent(false)
  }

  const closeEngagementPrompt = () => {
    setShowEngagementPrompt(false)
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#1a4b8a] to-[#0d2e54] pb-10">
      {/* Progress Bar - Always Visible */}
      <div className="sticky top-0 left-0 w-full bg-white shadow-md z-10">
        <div className="container mx-auto px-4 py-3">
          <AnimatedProgressBar progress={progress} totalSteps={totalSteps} currentStep={stepHistory.length} />
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-4 flex justify-center">
            <div className="relative w-16 h-16">
              <Image
                src="/images/our-unclaimed-money-logo.png"
                alt="Our Unclaimed Money"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Main Quiz Container */}
          <div className="px-6 pb-6">
            {/* Email Step */}
            {currentStep === "email" && (
              <EmailCaptureStep
                onSubmit={(data) => handleStepSubmit("email", data)}
                isLoading={isLoading}
                initialEmail={userData.email} // Pass the stored email
                initialConsent={emailConsent}
                initialDataPolicy={emailDataPolicy}
              />
            )}

            {/* Phone Step */}
            {currentStep === "phone" && (
              <PhoneCaptureStep
                onSubmit={(data) => handleStepSubmit("phone", data)}
                isLoading={isLoading}
                email={userData.email}
                initialPhone={userData.phone} // Pass the stored phone
                initialTcpaConsent={phoneTcpaConsent}
              />
            )}

            {/* Debt Level Question */}
            {currentStep === "debt-level" && (
              <QuizStep
                question="What is your current debt level?"
                questionId="debt-level"
                icon={<CreditCard className="w-10 h-10 text-red-500" />}
                options={[
                  {
                    value: "high",
                    label: "High ($15,000+)",
                    description: "Credit cards, loans, or other significant debt",
                    icon: <DollarSign className="w-5 h-5 text-red-500" />,
                  },
                  {
                    value: "medium",
                    label: "Medium ($5,000-$15,000)",
                    description: "Some credit card debt or loans",
                    icon: <DollarSign className="w-5 h-5 text-orange-500" />,
                  },
                  {
                    value: "low",
                    label: "Low (Under $5,000)",
                    description: "Minimal debt or pay off monthly",
                    icon: <DollarSign className="w-5 h-5 text-green-500" />,
                  },
                  {
                    value: "none",
                    label: "No Debt",
                    description: "Completely debt-free",
                    icon: <Check className="w-5 h-5 text-green-500" />,
                  },
                ]}
                onSubmit={(answer) => handleStepSubmit("debt-level", answer)}
                isLoading={isLoading}
                initialAnswer={answers["debt-level"]} // Pass the stored answer
              />
            )}

            {/* Home Ownership Question */}
            {currentStep === "home-ownership" && (
              <QuizStep
                question="Do you own or rent your home?"
                questionId="home-ownership"
                icon={<Home className="w-10 h-10 text-blue-500" />}
                options={[
                  {
                    value: "own",
                    label: "I own my home",
                    description: "With or without a mortgage",
                    highlight: true,
                    icon: <Home className="w-5 h-5 text-blue-500" />,
                  },
                  {
                    value: "rent",
                    label: "I rent",
                    description: "Apartment, house, or other rental",
                    icon: <Home className="w-5 h-5 text-gray-500" />,
                  },
                  {
                    value: "other",
                    label: "Other living situation",
                    description: "Living with family, etc.",
                    icon: <AlertCircle className="w-5 h-5 text-yellow-500" />,
                  },
                ]}
                onSubmit={(answer) => handleStepSubmit("home-ownership", answer)}
                isLoading={isLoading}
                initialAnswer={answers["home-ownership"]} // Pass the stored answer
              />
            )}

            {/* Insurance Status Question */}
            {currentStep === "insurance-status" && (
              <QuizStep
                question="What is your current insurance coverage status?"
                questionId="insurance-status"
                icon={<Umbrella className="w-10 h-10 text-purple-500" />}
                options={[
                  {
                    value: "comprehensive",
                    label: "Comprehensive Coverage",
                    description: "Auto, home/renters, health, and life insurance",
                    icon: <Check className="w-5 h-5 text-green-500" />,
                  },
                  {
                    value: "partial",
                    label: "Partial Coverage",
                    description: "Some but not all types of insurance",
                    icon: <AlertCircle className="w-5 h-5 text-yellow-500" />,
                  },
                  {
                    value: "inadequate",
                    label: "Inadequate Coverage",
                    description: "Need better or more affordable insurance",
                    highlight: true,
                    icon: <AlertCircle className="w-5 h-5 text-orange-500" />,
                  },
                  {
                    value: "none",
                    label: "No Insurance",
                    description: "Currently uninsured",
                    icon: <X className="w-5 h-5 text-red-500" />,
                  },
                ]}
                onSubmit={(answer) => handleStepSubmit("insurance-status", answer)}
                isLoading={isLoading}
                initialAnswer={answers["insurance-status"]} // Pass the stored answer
              />
            )}

            {/* Income Level Question */}
            {currentStep === "income-level" && (
              <QuizStep
                question="What is your annual household income?"
                questionId="income-level"
                icon={<Briefcase className="w-10 h-10 text-green-500" />}
                options={[
                  {
                    value: "low",
                    label: "Under $30,000",
                    icon: <DollarSign className="w-5 h-5 text-gray-500" />,
                  },
                  {
                    value: "medium_low",
                    label: "$30,000 - $50,000",
                    icon: <DollarSign className="w-5 h-5 text-blue-500" />,
                  },
                  {
                    value: "medium",
                    label: "$50,000 - $75,000",
                    icon: <DollarSign className="w-5 h-5 text-green-500" />,
                  },
                  {
                    value: "medium_high",
                    label: "$75,000 - $100,000",
                    icon: <DollarSign className="w-5 h-5 text-yellow-500" />,
                  },
                  {
                    value: "high",
                    label: "Over $100,000",
                    icon: <DollarSign className="w-5 h-5 text-orange-500" />,
                  },
                ]}
                onSubmit={(answer) => handleStepSubmit("income-level", answer)}
                isLoading={isLoading}
                initialAnswer={answers["income-level"]} // Pass the stored answer
              />
            )}

            {/* Auto Insurance Question */}
            {currentStep === "auto-insurance" && (
              <QuizStep
                question="Are you satisfied with your current auto insurance rate?"
                questionId="auto-insurance"
                icon={<Car className="w-10 h-10 text-blue-500" />}
                subheading="Drivers save an average of $500/year by comparing rates"
                options={[
                  {
                    value: "not_satisfied",
                    label: "No, I want better rates",
                    description: "I'm paying too much for auto insurance",
                    highlight: true,
                    icon: <DollarSign className="w-5 h-5 text-green-500" />,
                  },
                  {
                    value: "satisfied",
                    label: "Yes, I'm satisfied",
                    description: "My current rates are good",
                    icon: <Check className="w-5 h-5 text-blue-500" />,
                  },
                  {
                    value: "no_auto",
                    label: "I don't have a car",
                    description: "Not applicable to me",
                    icon: <X className="w-5 h-5 text-gray-500" />,
                  },
                ]}
                onSubmit={(answer) => handleStepSubmit("auto-insurance", answer)}
                isLoading={isLoading}
                initialAnswer={answers["auto-insurance"]} // Pass the stored answer
              />
            )}

            {/* Mortgage Question */}
            {currentStep === "mortgage" && (
              <QuizStep
                question="Do you currently have a mortgage?"
                questionId="mortgage"
                icon={<Home className="w-10 h-10 text-purple-500" />}
                subheading="Homeowners are saving $300+ per month by refinancing"
                options={[
                  {
                    value: "yes_high_rate",
                    label: "Yes, with a high rate",
                    description: "Interest rate above 5%",
                    highlight: true,
                    icon: <DollarSign className="w-5 h-5 text-red-500" />,
                  },
                  {
                    value: "yes_good_rate",
                    label: "Yes, with a good rate",
                    description: "Interest rate below 5%",
                    icon: <DollarSign className="w-5 h-5 text-green-500" />,
                  },
                  {
                    value: "no_paid_off",
                    label: "No, my home is paid off",
                    icon: <Check className="w-5 h-5 text-green-500" />,
                  },
                  {
                    value: "no_other",
                    label: "No, other situation",
                    icon: <AlertCircle className="w-5 h-5 text-gray-500" />,
                  },
                ]}
                onSubmit={(answer) => handleStepSubmit("mortgage", answer)}
                isLoading={isLoading}
                initialAnswer={answers["mortgage"]} // Pass the stored answer
              />
            )}

            {/* Credit Cards Question */}
            {currentStep === "credit-cards" && (
              <QuizStep
                question="What is your credit card situation?"
                questionId="credit-cards"
                icon={<CreditCard className="w-10 h-10 text-red-500" />}
                options={[
                  {
                    value: "high_interest",
                    label: "High interest credit cards",
                    description: "Paying high interest rates on balances",
                    highlight: true,
                    icon: <DollarSign className="w-5 h-5 text-red-500" />,
                  },
                  {
                    value: "low_limit",
                    label: "Low credit limits",
                    description: "Need higher limits or better cards",
                    icon: <AlertCircle className="w-5 h-5 text-yellow-500" />,
                  },
                  {
                    value: "no_card",
                    label: "No credit card",
                    description: "Unable to get approved or choose not to have one",
                    icon: <X className="w-5 h-5 text-gray-500" />,
                  },
                  {
                    value: "good_standing",
                    label: "Good standing",
                    description: "Pay off monthly or have good rates",
                    icon: <Check className="w-5 h-5 text-green-500" />,
                  },
                ]}
                onSubmit={(answer) => handleStepSubmit("credit-cards", answer)}
                isLoading={isLoading}
                initialAnswer={answers["credit-cards"]} // Pass the stored answer
              />
            )}

            {/* Loans Question */}
            {currentStep === "loans" && (
              <QuizStep
                question="Are you interested in a personal loan?"
                questionId="loans"
                icon={<DollarSign className="w-10 h-10 text-green-500" />}
                subheading="Loans available from $500 - $35,000"
                options={[
                  {
                    value: "yes_small",
                    label: "Yes, under $5,000",
                    description: "For smaller expenses or debt consolidation",
                    icon: <DollarSign className="w-5 h-5 text-green-500" />,
                  },
                  {
                    value: "yes_medium",
                    label: "Yes, $5,000 - $15,000",
                    description: "For medium expenses or debt consolidation",
                    highlight: true,
                    icon: <DollarSign className="w-5 h-5 text-blue-500" />,
                  },
                  {
                    value: "yes_large",
                    label: "Yes, over $15,000",
                    description: "For major expenses or debt consolidation",
                    icon: <DollarSign className="w-5 h-5 text-purple-500" />,
                  },
                  {
                    value: "no",
                    label: "No, not interested",
                    icon: <X className="w-5 h-5 text-gray-500" />,
                  },
                ]}
                onSubmit={(answer) => handleStepSubmit("loans", answer)}
                isLoading={isLoading}
                initialAnswer={answers["loans"]} // Pass the stored answer
              />
            )}

            {/* Retirement Question */}
            {currentStep === "retirement" && (
              <QuizStep
                question="How would you describe your retirement savings?"
                questionId="retirement"
                icon={<Briefcase className="w-10 h-10 text-blue-500" />}
                options={[
                  {
                    value: "on_track",
                    label: "On track",
                    description: "Saving regularly with a good plan",
                    icon: <Check className="w-5 h-5 text-green-500" />,
                  },
                  {
                    value: "behind",
                    label: "Behind schedule",
                    description: "Not saving enough or started late",
                    highlight: true,
                    icon: <Clock className="w-5 h-5 text-orange-500" />,
                  },
                  {
                    value: "not_started",
                    label: "Haven't started",
                    description: "No retirement savings yet",
                    icon: <AlertCircle className="w-5 h-5 text-red-500" />,
                  },
                  {
                    value: "retired",
                    label: "Already retired",
                    icon: <Briefcase className="w-5 h-5 text-blue-500" />,
                  },
                ]}
                onSubmit={(answer) => handleStepSubmit("retirement", answer)}
                isLoading={isLoading}
                initialAnswer={answers["retirement"]} // Pass the stored answer
              />
            )}

            {/* Investments Question */}
            {currentStep === "investments" && (
              <QuizStep
                question="What is your investment experience level?"
                questionId="investments"
                icon={<DollarSign className="w-10 h-10 text-green-500" />}
                options={[
                  {
                    value: "experienced",
                    label: "Experienced investor",
                    description: "Regularly invest in stocks, bonds, etc.",
                    icon: <Check className="w-5 h-5 text-green-500" />,
                  },
                  {
                    value: "beginner",
                    label: "Beginner investor",
                    description: "Just starting to invest",
                    highlight: true,
                    icon: <Clock className="w-5 h-5 text-blue-500" />,
                  },
                  {
                    value: "interested",
                    label: "Interested but haven't started",
                    description: "Want to learn how to invest",
                    icon: <AlertCircle className="w-5 h-5 text-yellow-500" />,
                  },
                  {
                    value: "not_interested",
                    label: "Not interested in investing",
                    icon: <X className="w-5 h-5 text-gray-500" />,
                  },
                ]}
                onSubmit={(answer) => handleStepSubmit("investments", answer)}
                isLoading={isLoading}
                initialAnswer={answers["investments"]} // Pass the stored answer
              />
            )}

            {/* Tax Debt Question */}
            {currentStep === "tax-debt" && (
              <QuizStep
                question="Do you owe back taxes to the IRS?"
                questionId="tax-debt"
                icon={<FileText className="w-10 h-10 text-red-500" />}
                options={[
                  {
                    value: "yes_significant",
                    label: "Yes, significant amount",
                    description: "Over $10,000 in tax debt",
                    highlight: true,
                    icon: <AlertCircle className="w-5 h-5 text-red-500" />,
                  },
                  {
                    value: "yes_small",
                    label: "Yes, small amount",
                    description: "Under $10,000 in tax debt",
                    icon: <AlertCircle className="w-5 h-5 text-orange-500" />,
                  },
                  {
                    value: "no",
                    label: "No tax debt",
                    description: "Current on all tax obligations",
                    icon: <Check className="w-5 h-5 text-green-500" />,
                  },
                  {
                    value: "not_sure",
                    label: "Not sure",
                    description: "Uncertain about tax status",
                    icon: <AlertCircle className="w-5 h-5 text-gray-500" />,
                  },
                ]}
                onSubmit={(answer) => handleStepSubmit("tax-debt", answer)}
                isLoading={isLoading}
                initialAnswer={answers["tax-debt"]} // Pass the stored answer
              />
            )}

            {/* Medical Bills Question */}
            {currentStep === "medical-bills" && (
              <QuizStep
                question="Do you have outstanding medical bills?"
                questionId="medical-bills"
                icon={<Heart className="w-10 h-10 text-red-500" />}
                options={[
                  {
                    value: "yes_significant",
                    label: "Yes, significant amount",
                    description: "Large medical debt burden",
                    highlight: true,
                    icon: <AlertCircle className="w-5 h-5 text-red-500" />,
                  },
                  {
                    value: "yes_small",
                    label: "Yes, small amount",
                    description: "Manageable medical bills",
                    icon: <AlertCircle className="w-5 h-5 text-orange-500" />,
                  },
                  {
                    value: "no",
                    label: "No medical bills",
                    description: "No outstanding medical debt",
                    icon: <Check className="w-5 h-5 text-green-500" />,
                  },
                  {
                    value: "insurance_issue",
                    label: "Insurance coverage issues",
                    description: "Problems with medical insurance",
                    icon: <AlertCircle className="w-5 h-5 text-yellow-500" />,
                  },
                ]}
                onSubmit={(answer) => handleStepSubmit("medical-bills", answer)}
                isLoading={isLoading}
                initialAnswer={answers["medical-bills"]} // Pass the stored answer
              />
            )}

            {/* Education Question */}
            {currentStep === "education" && (
              <QuizStep
                question="Are you interested in furthering your education?"
                questionId="education"
                icon={<FileText className="w-10 h-10 text-blue-500" />}
                options={[
                  {
                    value: "yes_degree",
                    label: "Yes, degree program",
                    description: "Bachelor's, Master's, or other degree",
                    highlight: true,
                    icon: <Check className="w-5 h-5 text-green-500" />,
                  },
                  {
                    value: "yes_certificate",
                    label: "Yes, certificate/skills",
                    description: "Professional certification or skills training",
                    icon: <Check className="w-5 h-5 text-blue-500" />,
                  },
                  {
                    value: "student_loans",
                    label: "Need help with student loans",
                    description: "Refinancing or loan forgiveness",
                    icon: <AlertCircle className="w-5 h-5 text-orange-500" />,
                  },
                  {
                    value: "not_interested",
                    label: "Not interested",
                    description: "No educational plans at this time",
                    icon: <X className="w-5 h-5 text-gray-500" />,
                  },
                ]}
                onSubmit={(answer) => handleStepSubmit("education", answer)}
                isLoading={isLoading}
                initialAnswer={answers["education"]} // Pass the stored answer
              />
            )}

            {/* Offers Wall */}
            {currentStep === "offers" && (
              <EnhancedOfferWall
                userData={userData}
                answers={answers}
                onContinue={() => router.push("/funnel/thank-you")}
              />
            )}

            {/* Back Button - Not shown on first step */}
            {stepHistory.length > 1 && currentStep !== "offers" && (
              <div className="mt-4 flex justify-center">
                <button onClick={handleBack} className="text-sm text-gray-500 hover:text-gray-700" disabled={isLoading}>
                  ← Go back
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Loading Overlay */}
      {isLoading && <LoadingOverlay />}

      {/* Exit Intent Popup */}
      {showExitIntent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="bg-white rounded-lg shadow-xl p-6 max-w-md"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-bold text-[#092e54]">Wait! Don't Miss Out!</h3>
              <button onClick={closeExitIntent} className="text-gray-400 hover:text-gray-500">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mb-4">
              <div className="bg-blue-50 border border-blue-100 rounded-md p-3 mb-4">
                <div className="flex items-center">
                  <DollarSign className="w-5 h-5 text-blue-500 mr-2" />
                  <p className="text-sm font-medium text-blue-700">
                    People in your area have found an average of $1,200 in unclaimed funds!
                  </p>
                </div>
              </div>

              <p className="mb-4">
                You're just a few questions away from discovering if you have unclaimed money waiting for you. Thousands
                of people have already found money they didn't know they had!
              </p>
            </div>

            <div className="flex justify-center space-x-3">
              <Button
                onClick={closeExitIntent}
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800"
              >
                Continue My Search
              </Button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Engagement Prompt */}
      {showEngagementPrompt && (
        <div className="fixed bottom-4 right-4 z-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg shadow-lg p-4 max-w-xs"
          >
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-sm font-bold text-[#092e54]">Did you know?</h4>
              <button onClick={closeEngagementPrompt} className="text-gray-400 hover:text-gray-500">
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-gray-600 mb-3">
              Over 1 in 10 Americans have unclaimed money waiting for them. The average claim is worth $1,780!
            </p>
            <div className="flex justify-end">
              <button onClick={closeEngagementPrompt} className="text-xs text-blue-600 font-medium">
                Continue my search →
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}
