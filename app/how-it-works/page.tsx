import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search, FileText, CheckCircle, DollarSign, Clock, AlertCircle, Shield } from "lucide-react"
import Breadcrumb from "@/components/breadcrumb"
import ProcessSteps from "@/components/process-steps"
import FAQAccordion from "@/components/faq-accordion"
import FloatingCTA from "@/components/floating-cta"

const faqItems = [
  {
    question: "How long does the search process take?",
    answer:
      "The initial search process takes about 60 seconds. You'll get immediate results showing potential matches. The actual claiming process can take anywhere from 2-12 weeks depending on the state and type of property.",
  },
  {
    question: "What information do I need to provide?",
    answer:
      "To conduct a basic search, you'll need to provide your name and state of residence. For more comprehensive searches, you may need to provide previous addresses, variations of your name, and in some cases, your Social Security Number (which is always handled securely).",
  },
  {
    question: "Can I search for unclaimed money for deceased relatives?",
    answer:
      "Yes, you can search for unclaimed money belonging to deceased relatives. However, claiming these funds typically requires additional documentation such as death certificates, wills, or proof that you're the rightful heir.",
  },
]

export default function HowItWorks() {
  return (
    <main className="flex min-h-screen flex-col pt-24">
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto px-4">
          <Breadcrumb items={[{ label: "How It Works" }]} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6 text-[#092e54]">How to Find Your Unclaimed Money</h1>
            <p className="text-xl text-gray-600 mb-8">
              Our simple, free process helps you find and claim money that rightfully belongs to you.
            </p>

            <div className="flex justify-center">
              <Link href="/funnel">
                <Button size="lg" className="bg-[#f9b000] hover:bg-[#e0a000] text-black font-bold px-8">
                  Start My Free Search
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#092e54]">The Process: Simple & Free</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Finding and claiming your unclaimed money is easier than you might think. Here's how it works:
            </p>
          </div>

          <ProcessSteps />
        </div>
      </section>

      {/* Detailed Steps Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-[#092e54]">Detailed Process Explanation</h2>

            <div className="space-y-12">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="bg-[#0b4d8c] rounded-lg p-6 text-white text-center">
                    <Search className="w-12 h-12 mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">Step 1: Search</h3>
                    <p className="text-sm">Enter your information to search multiple databases</p>
                  </div>
                </div>

                <div className="md:w-2/3">
                  <h3 className="text-xl font-bold mb-4 text-[#092e54]">What Happens During the Search</h3>
                  <p className="text-gray-600 mb-4">
                    When you enter your information, our system searches across multiple databases including:
                  </p>

                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>State unclaimed property databases (all 50 states)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Federal agency databases (IRS, HUD, Treasury, etc.)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Financial institution records</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Insurance company databases</span>
                    </li>
                  </ul>

                  <div className="bg-blue-50 border border-blue-100 rounded-md p-4">
                    <div className="flex items-start">
                      <Clock className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-blue-800">
                        <strong>Time Required:</strong> Approximately 60 seconds to complete the initial search.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="bg-[#0b4d8c] rounded-lg p-6 text-white text-center">
                    <FileText className="w-12 h-12 mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">Step 2: Verify</h3>
                    <p className="text-sm">Verify your identity to claim your funds</p>
                  </div>
                </div>

                <div className="md:w-2/3">
                  <h3 className="text-xl font-bold mb-4 text-[#092e54]">Identity Verification Process</h3>
                  <p className="text-gray-600 mb-4">
                    If potential matches are found, you'll need to verify your identity to ensure you're the rightful
                    owner:
                  </p>

                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Provide identification documents (ID, SSN, etc.)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Confirm previous addresses or account details</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Complete any state-specific verification requirements</span>
                    </li>
                  </ul>

                  <div className="bg-blue-50 border border-blue-100 rounded-md p-4">
                    <div className="flex items-start">
                      <Shield className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-blue-800">
                        <strong>Security Note:</strong> All personal information is encrypted and protected using
                        256-bit SSL encryption. We never store sensitive documents on our servers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="bg-[#0b4d8c] rounded-lg p-6 text-white text-center">
                    <CheckCircle className="w-12 h-12 mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">Step 3: Claim</h3>
                    <p className="text-sm">Complete the necessary forms to claim your money</p>
                  </div>
                </div>

                <div className="md:w-2/3">
                  <h3 className="text-xl font-bold mb-4 text-[#092e54]">Claim Filing Process</h3>
                  <p className="text-gray-600 mb-4">
                    Once your identity is verified, you'll need to file a claim with the appropriate agency:
                  </p>

                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Complete claim forms (we provide guidance)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Submit required documentation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Follow up with the holding agency as needed</span>
                    </li>
                  </ul>

                  <div className="bg-yellow-50 border border-yellow-100 rounded-md p-4">
                    <div className="flex items-start">
                      <AlertCircle className="w-5 h-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-yellow-800">
                        <strong>Important:</strong> Each state has different requirements and forms. Our guide provides
                        state-specific instructions to make the process easier.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="bg-[#0b4d8c] rounded-lg p-6 text-white text-center">
                    <DollarSign className="w-12 h-12 mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">Step 4: Receive</h3>
                    <p className="text-sm">Receive your funds via check or direct deposit</p>
                  </div>
                </div>

                <div className="md:w-2/3">
                  <h3 className="text-xl font-bold mb-4 text-[#092e54]">Payment Process</h3>
                  <p className="text-gray-600 mb-4">After your claim is approved, you'll receive your funds:</p>

                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Payment via check or direct deposit (varies by state)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Notification of claim approval</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Instructions for any additional steps if needed</span>
                    </li>
                  </ul>

                  <div className="bg-blue-50 border border-blue-100 rounded-md p-4">
                    <div className="flex items-start">
                      <Clock className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-blue-800">
                        <strong>Timeframe:</strong> Most claims are processed within 2-12 weeks, depending on the state
                        and complexity of the claim.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-[#092e54] text-center">Common Questions About the Process</h2>

            <FAQAccordion items={faqItems} />

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

      {/* CTA Section */}
      <section className="py-16 bg-[#092e54] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Find Your Unclaimed Money?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Start your free search now and discover if you have unclaimed funds waiting for you.
          </p>
          <Link href="/funnel">
            <Button size="lg" className="bg-[#f9b000] hover:bg-[#e0a000] text-black font-bold text-lg px-8 py-6">
              START MY FREE SEARCH
            </Button>
          </Link>
        </div>
      </section>

      <FloatingCTA />
    </main>
  )
}
