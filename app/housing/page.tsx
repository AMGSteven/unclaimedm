import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Home, DollarSign, Building, Key } from "lucide-react"

export default function HousingPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Unclaimed Housing Funds</h1>
            <p className="text-xl mb-8">
              Billions in unclaimed mortgage refunds, escrow overages, and housing assistance funds are waiting to be
              claimed.
            </p>
            <Link href="/funnel">
              <Button
                size="lg"
                className="bg-[#f9b000] hover:bg-[#e0a000] text-black font-bold text-lg px-8 py-6 uppercase tracking-wide"
              >
                FIND YOUR UNCLAIMED HOUSING MONEY
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-[#092e54]">Common Types of Unclaimed Housing Funds</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Many Americans have unclaimed money related to housing transactions. Here are the most common types:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-[#0b4d8c] rounded-full p-3 mr-4">
                  <Home className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#092e54]">Mortgage Escrow Overages</h3>
              </div>
              <p className="text-gray-700 mb-4">
                When you pay off your mortgage or refinance, you may have excess funds in your escrow account. Lenders
                are required to refund this money, but many homeowners never receive it.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#f9b000] mr-2">✓</span>
                  <span>Typical amount: $500 - $2,500</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#f9b000] mr-2">✓</span>
                  <span>Common after refinancing or selling a home</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-[#0b4d8c] rounded-full p-3 mr-4">
                  <DollarSign className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#092e54]">FHA Insurance Refunds</h3>
              </div>
              <p className="text-gray-700 mb-4">
                If you had an FHA-insured mortgage and paid upfront mortgage insurance premiums, you may be entitled to
                a refund if you paid off your mortgage early.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#f9b000] mr-2">✓</span>
                  <span>Typical amount: $1,000 - $3,000</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#f9b000] mr-2">✓</span>
                  <span>Available for up to 3 years after payoff</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-[#0b4d8c] rounded-full p-3 mr-4">
                  <Building className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#092e54]">HUD Housing Assistance</h3>
              </div>
              <p className="text-gray-700 mb-4">
                The Department of Housing and Urban Development (HUD) has various assistance programs. Many eligible
                individuals never claim these funds or don't receive follow-up payments.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#f9b000] mr-2">✓</span>
                  <span>Rental assistance programs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#f9b000] mr-2">✓</span>
                  <span>Home repair and improvement grants</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-[#0b4d8c] rounded-full p-3 mr-4">
                  <Key className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#092e54]">Security Deposit Returns</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Landlords are required to return security deposits or provide an itemized list of deductions. Many
                renters move without providing forwarding addresses, resulting in unclaimed deposits.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#f9b000] mr-2">✓</span>
                  <span>Typical amount: $500 - $3,000</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#f9b000] mr-2">✓</span>
                  <span>Often reported to state unclaimed property offices</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#092e54]">Ready to Find Your Unclaimed Housing Money?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Our free guide shows you exactly how to search for and claim housing-related funds that may belong to you.
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
