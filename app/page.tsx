import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search, DollarSign, CheckCircle, Shield, Clock, Users } from "lucide-react"
import ProcessSteps from "@/components/process-steps"
import TestimonialCarousel from "@/components/testimonial-carousel"
import FAQAccordion from "@/components/faq-accordion"
import StatsCounter from "@/components/stats-counter"
import RealTimeCounter from "@/components/real-time-counter"
import FloatingCTA from "@/components/floating-cta"
import ExitIntentModal from "@/components/exit-intent-modal"

const faqItems = [
  {
    question: "What exactly is unclaimed money?",
    answer:
      "Unclaimed money refers to financial assets that have been forgotten or abandoned by their owners. These can include forgotten bank accounts, uncashed checks, insurance payouts, utility deposits, tax refunds, and more. After a certain period of inactivity, these funds are reported to state unclaimed property offices.",
  },
  {
    question: "How do I know if I have unclaimed money?",
    answer:
      "The only way to know for sure is to search for your name in unclaimed property databases. Our free service helps you search both state and federal databases, as well as other specialized sources where unclaimed funds might be held.",
  },
  {
    question: "Is this service really free?",
    answer:
      "Yes, our service is completely free. We do not charge any fees to help you find and claim your unclaimed money.",
  },
  {
    question: "How long does it take to receive unclaimed funds?",
    answer:
      "The timeframe varies depending on the state and the type of property being claimed. Simple claims might be processed in a few weeks, while more complex cases could take several months. Our guide provides estimated timeframes for different types of claims.",
  },
  {
    question: "Is this a government website?",
    answer:
      "No, we are not affiliated with any government agency. We are an independent information resource that helps people understand the process of finding and claiming unclaimed money. Our guide directs you to the official government resources where you can conduct your search.",
  },
]

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#092e54] to-[#0b4d8c] text-white pt-32 pb-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/money-background.jpg')] bg-cover bg-center opacity-10"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block bg-[#f9b000] text-black font-medium px-4 py-1 rounded-full mb-6">
              <span className="flex items-center">
                <DollarSign className="w-4 h-4 mr-1" />
                Americans have over $49 billion in unclaimed funds
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Find Your Unclaimed Money in 60 Seconds
            </h1>

            <p className="text-xl md:text-2xl mb-8 font-light">
              1 in 10 Americans have unclaimed money waiting for them.
              <span className="font-medium"> Are you one of them?</span>
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <Link href="/funnel">
                <Button
                  size="lg"
                  className="bg-[#f9b000] hover:bg-[#e0a000] text-black font-bold text-lg px-8 py-6 w-full sm:w-auto"
                >
                  FIND MY MONEY NOW
                </Button>
              </Link>

              <Link href="/how-it-works">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white/10 font-medium text-lg px-8 py-6 w-full sm:w-auto"
                >
                  Learn How It Works
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-1 text-[#f9b000]" />
                <span>100% Free</span>
              </div>

              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1 text-[#f9b000]" />
                <span>Takes 60 Seconds</span>
              </div>

              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-1 text-[#f9b000]" />
                <span>Secure & Confidential</span>
              </div>

              <div className="flex items-center">
                <Users className="w-4 h-4 mr-1 text-[#f9b000]" />
                <span>900,000+ Successful Searches</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2 text-[#092e54]">
                <StatsCounter value={49} suffix="B+" />
              </div>
              <p className="text-lg text-gray-600">Total unclaimed funds in the United States</p>
            </div>

            <div>
              <div className="text-4xl font-bold mb-2 text-[#092e54]">1 in 10</div>
              <p className="text-lg text-gray-600">Americans have unclaimed money waiting for them</p>
            </div>

            <div>
              <div className="text-4xl font-bold mb-2 text-[#092e54]">
                <StatsCounter value={1780} prefix="$" />
              </div>
              <p className="text-lg text-gray-600">Average amount of unclaimed funds per person</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#092e54]">How It Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Finding your unclaimed money is simple and free. Follow these easy steps to claim what's rightfully yours.
            </p>
          </div>

          <ProcessSteps />

          <div className="text-center mt-12">
            <Link href="/funnel">
              <Button size="lg" className="bg-[#f9b000] hover:bg-[#e0a000] text-black font-bold px-8">
                Start My Free Search
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Types of Unclaimed Money Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#092e54]">Types of Unclaimed Money</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Unclaimed money can come from many sources. Here are some common types you might be owed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center mb-4">
                <div className="bg-[#0b4d8c] rounded-full p-3 mr-4">
                  <DollarSign className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#092e54]">Forgotten Bank Accounts</h3>
              </div>
              <p className="text-gray-600">
                Checking and savings accounts that show no activity for an extended period are considered dormant and
                eventually become unclaimed property.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center mb-4">
                <div className="bg-[#0b4d8c] rounded-full p-3 mr-4">
                  <Search className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#092e54]">Uncashed Checks</h3>
              </div>
              <p className="text-gray-600">
                Paychecks, tax refunds, insurance payments, and other checks that were never cashed eventually become
                unclaimed property.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center mb-4">
                <div className="bg-[#0b4d8c] rounded-full p-3 mr-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#092e54]">Insurance Policies</h3>
              </div>
              <p className="text-gray-600">
                Life insurance benefits, annuity payments, and other insurance-related funds that beneficiaries never
                claimed.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center mb-4">
                <div className="bg-[#0b4d8c] rounded-full p-3 mr-4">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#092e54]">Security Deposits</h3>
              </div>
              <p className="text-gray-600">
                Utility deposits, rental security deposits, and other refundable deposits that were never returned to
                you.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center mb-4">
                <div className="bg-[#0b4d8c] rounded-full p-3 mr-4">
                  <DollarSign className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#092e54]">Investments & Securities</h3>
              </div>
              <p className="text-gray-600">
                Stocks, bonds, mutual funds, and dividends that have been forgotten or lost track of over time.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center mb-4">
                <div className="bg-[#0b4d8c] rounded-full p-3 mr-4">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#092e54]">Tax Refunds</h3>
              </div>
              <p className="text-gray-600">
                Unclaimed federal and state tax refunds that were never delivered or cashed by the recipient.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/funnel">
              <Button size="lg" className="bg-[#f9b000] hover:bg-[#e0a000] text-black font-bold px-8">
                Search All Sources Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Real-time Counter & Testimonials Section */}
      <section className="py-16 bg-gradient-to-b from-[#092e54] to-[#0b4d8c] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold mb-6">Real Success Stories</h2>
              <p className="mb-6">
                Thousands of Americans have already found and claimed money that rightfully belongs to them. Here are
                just a few of their stories.
              </p>

              <RealTimeCounter />

              <div className="mt-6">
                <Link href="/success-stories">
                  <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                    View More Success Stories
                  </Button>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-2">
              <TestimonialCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#092e54]">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get answers to common questions about unclaimed money and how our service works.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={faqItems} structured={true} />

            <div className="text-center mt-8">
              <Link href="/faq">
                <Button
                  variant="outline"
                  className="border-[#092e54] text-[#092e54] hover:bg-[#092e54] hover:text-white"
                >
                  View All FAQs
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#092e54]">Ready to Find Your Unclaimed Money?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-600">
            It only takes 60 seconds to search for unclaimed funds that may belong to you.
          </p>
          <Link href="/funnel">
            <Button size="lg" className="bg-[#f9b000] hover:bg-[#e0a000] text-black font-bold text-lg px-8 py-6">
              START MY FREE SEARCH NOW
            </Button>
          </Link>

          <p className="mt-4 text-sm text-gray-500">100% Free • No Credit Card Required • Secure & Confidential</p>
        </div>
      </section>

      <FloatingCTA />
      <ExitIntentModal />
    </main>
  )
}
