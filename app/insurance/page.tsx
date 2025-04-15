import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Shield, Heart, Umbrella, Car } from "lucide-react"

export default function InsurancePage() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Unclaimed Insurance Money</h1>
            <p className="text-xl mb-8">
              Billions in unclaimed life insurance benefits, premium refunds, and policy payouts are waiting to be
              claimed.
            </p>
            <Link href="/funnel">
              <Button
                size="lg"
                className="bg-[#f9b000] hover:bg-[#e0a000] text-black font-bold text-lg px-8 py-6 uppercase tracking-wide"
              >
                FIND YOUR UNCLAIMED INSURANCE MONEY
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-[#092e54]">Common Types of Unclaimed Insurance Money</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Many Americans have unclaimed money from various insurance policies. Here are the most common types:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-[#0b4d8c] rounded-full p-3 mr-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#092e54]">Life Insurance Benefits</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Unclaimed life insurance benefits are one of the largest categories of unclaimed funds. Many
                beneficiaries are unaware that policies exist in their name.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#f9b000] mr-2">✓</span>
                  <span>Typical amount: $2,000 - $25,000+</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#f9b000] mr-2">✓</span>
                  <span>Often unclaimed after the policyholder passes away</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-[#0b4d8c] rounded-full p-3 mr-4">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#092e54]">Health Insurance Refunds</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Premium overpayments, claim reimbursements, and Medical Loss Ratio rebates that were never delivered or
                cashed.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#f9b000] mr-2">✓</span>
                  <span>Typical amount: $100 - $1,000</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#f9b000] mr-2">✓</span>
                  <span>Common after changing health insurance providers</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-[#0b4d8c] rounded-full p-3 mr-4">
                  <Car className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#092e54]">Auto Insurance Refunds</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Premium refunds from canceled policies, overpayments, or class action settlements that were never
                delivered or cashed.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#f9b000] mr-2">✓</span>
                  <span>Often occurs when switching insurance companies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#f9b000] mr-2">✓</span>
                  <span>May include refunds from policy cancellations</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-[#0b4d8c] rounded-full p-3 mr-4">
                  <Umbrella className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#092e54]">Annuity & Long-Term Care Benefits</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Unclaimed annuity payments, long-term care insurance benefits, and disability insurance payments that
                were never collected.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#f9b000] mr-2">✓</span>
                  <span>Typical amount: $1,000 - $50,000+</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#f9b000] mr-2">✓</span>
                  <span>Often forgotten or unknown to beneficiaries</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#092e54]">Ready to Find Your Unclaimed Insurance Money?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Our free guide shows you exactly how to search for and claim insurance funds that may belong to you.
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
