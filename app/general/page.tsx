import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Gift, Award, Briefcase, FileText } from "lucide-react"

export default function GeneralPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#092e54] to-[#0b4d8c] text-white py-16">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-6 flex justify-center">
              <div className="relative w-24 h-24 bg-white rounded-md overflow-hidden">
                <Image
                  src="/images/our-unclaimed-money-logo.png"
                  alt="Our Unclaimed Money Logo"
                  fill
                  className="object-contain p-1"
                />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Other Unclaimed Money Sources</h1>
            <p className="text-xl mb-8">
              Billions in unclaimed funds from various sources are waiting to be returned to their rightful owners.
            </p>
            <Link href="/funnel">
              <Button
                size="lg"
                className="bg-[#f9b000] hover:bg-[#e0a000] text-black font-bold text-lg px-8 py-6 uppercase tracking-wide"
              >
                FIND YOUR UNCLAIMED MONEY
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-[#092e54]">Other Common Sources of Unclaimed Money</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Beyond banking, insurance, and housing, there are many other sources of unclaimed funds. Here are some you
              might not have considered:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-[#0b4d8c] rounded-full p-3 mr-4">
                  <Gift className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#092e54]">Utility Deposits & Refunds</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Security deposits from electric, gas, water, and other utility companies that were never returned after
                service was terminated.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#f9b000] mr-2">✓</span>
                  <span>Typical amount: $50 - $500</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#f9b000] mr-2">✓</span>
                  <span>Common after moving to a new address</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-[#0b4d8c] rounded-full p-3 mr-4">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#092e54]">Class Action Settlements</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Payments from class action lawsuits that you may have been eligible for but never claimed or received.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#f9b000] mr-2">✓</span>
                  <span>Typical amount: $20 - $1,000+</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#f9b000] mr-2">✓</span>
                  <span>Often related to consumer products or services</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-[#0b4d8c] rounded-full p-3 mr-4">
                  <Briefcase className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#092e54]">Unclaimed Wages & Commissions</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Final paychecks, commissions, bonuses, or other compensation that was never collected from former
                employers.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#f9b000] mr-2">✓</span>
                  <span>Often occurs when changing jobs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#f9b000] mr-2">✓</span>
                  <span>May include unpaid overtime or vacation pay</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-[#0b4d8c] rounded-full p-3 mr-4">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#092e54]">Tax Refunds & Credits</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Unclaimed federal and state tax refunds, as well as tax credits that you may be eligible for but never
                claimed.
              </p>

              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#f9b000] mr-2">✓</span>
                  <span>Typical amount: $500 - $3,000</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#f9b000] mr-2">✓</span>
                  <span>IRS holds unclaimed refunds for up to 3 years</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#092e54]">Ready to Find All Your Unclaimed Money?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Our free guide shows you exactly how to search for and claim funds from all possible sources that may belong
            to you.
          </p>
          <Link href="/funnel">
            <Button className="bg-[#f9b000] hover:bg-[#e0a000] text-black font-bold px-8 py-3 uppercase">
              Get Your Free Guide Now
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
