import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, Shield, Users, Clock } from "lucide-react"
import Breadcrumb from "@/components/breadcrumb"
import FloatingCTA from "@/components/floating-cta"

export default function About() {
  return (
    <main className="flex min-h-screen flex-col pt-24">
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto px-4">
          <Breadcrumb items={[{ label: "About Us" }]} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6 text-[#092e54]">About Our Unclaimed Money</h1>
            <p className="text-xl text-gray-600 mb-8">
              We're on a mission to help Americans find and claim the billions in unclaimed funds that rightfully belong
              to them.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-6 text-[#092e54]">Our Mission</h2>
              <p className="text-gray-600 mb-4">
                Our Unclaimed Money was founded with a simple mission: to help Americans discover and claim the billions
                of dollars in unclaimed funds that are rightfully theirs.
              </p>
              <p className="text-gray-600 mb-4">
                We believe that everyone deserves to know if they have unclaimed money waiting for them, and we're
                committed to making the search and claim process as simple and accessible as possible.
              </p>
              <p className="text-gray-600">
                Our free service has already helped thousands of people find and claim their unclaimed funds, and we're
                just getting started.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-[#092e54] text-center">Our Core Values</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="bg-[#0b4d8c] rounded-full p-3 mr-4">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#092e54]">Accessibility</h3>
                </div>
                <p className="text-gray-600">
                  We believe that everyone should have access to information about their unclaimed funds, regardless of
                  their technical ability or financial knowledge.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="bg-[#0b4d8c] rounded-full p-3 mr-4">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#092e54]">Security</h3>
                </div>
                <p className="text-gray-600">
                  We take data security seriously. All personal information is encrypted and protected, and we never
                  share your information without your consent.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="bg-[#0b4d8c] rounded-full p-3 mr-4">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#092e54]">Transparency</h3>
                </div>
                <p className="text-gray-600">
                  We're upfront about who we are and how our service works. We're not a government agency, but we help
                  connect you with the official resources you need.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="bg-[#0b4d8c] rounded-full p-3 mr-4">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#092e54]">Efficiency</h3>
                </div>
                <p className="text-gray-600">
                  We've streamlined the search process to make it as quick and easy as possible. Our goal is to help you
                  find your money in 60 seconds or less.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Help */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-[#092e54] text-center">How We Help</h2>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <p className="text-gray-600 mb-6">
                Our Unclaimed Money provides a free service that helps Americans search for and claim their unclaimed
                funds. Here's how we help:
              </p>

              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-[#092e54]">Comprehensive Database Search</h4>
                    <p className="text-gray-600">
                      We help you search across multiple state and federal databases to find all your potential
                      unclaimed funds in one place.
                    </p>
                  </div>
                </li>

                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-[#092e54]">Step-by-Step Guidance</h4>
                    <p className="text-gray-600">
                      We provide clear instructions on how to claim your funds, including which forms to fill out and
                      where to submit them.
                    </p>
                  </div>
                </li>

                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-[#092e54]">Educational Resources</h4>
                    <p className="text-gray-600">
                      We offer comprehensive information about different types of unclaimed funds and how the claiming
                      process works.
                    </p>
                  </div>
                </li>

                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-[#092e54]">Ongoing Support</h4>
                    <p className="text-gray-600">
                      We provide updates and reminders to help you complete the claiming process successfully.
                    </p>
                  </div>
                </li>
              </ul>

              <div className="bg-blue-50 border border-blue-100 rounded-md p-4">
                <p className="text-sm text-blue-800">
                  <strong>Important Note:</strong> While we help you find and claim your unclaimed money, we do not hold
                  or process the funds ourselves. All claims are processed through the appropriate state or federal
                  agencies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#092e54] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Find Your Unclaimed Money?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of Americans who have already found and claimed their unclaimed funds.
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
