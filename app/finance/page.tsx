import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CreditCard, Landmark, PiggyBank, BarChart } from "lucide-react"

export default function FinancePage() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Unclaimed Financial Assets</h1>
            <p className="text-xl mb-8">
              Billions in forgotten bank accounts, uncashed checks, and investment accounts are waiting to be claimed.
            </p>
            <Link href="/funnel">
              <Button
                size="lg"
                className="bg-[#f9b000] hover:bg-[#e0a000] text-black font-bold text-lg px-8 py-6 uppercase tracking-wide"
              >
                FIND YOUR UNCLAIMED FINANCIAL ASSETS
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-[#092e54]">Common Types of Unclaimed Financial Assets</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Many Americans have unclaimed money in various financial institutions. Here are the most common types:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-[#0b4d8c] rounded-full p-3 mr-4">
                  <Landmark className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#092e54]">Dormant Bank Accounts</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Checking and savings accounts that show no activity for an extended period are considered dormant. After
                a certain time, banks are required to turn these funds over to the state.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#f9b000] mr-2">✓</span>
                  <span>Typical dormancy period: 3-5 years</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#f9b000] mr-2">✓</span>
                  <span>Often occurs after moving or changing banks</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-[#0b4d8c] rounded-full p-3 mr-4">
                  <CreditCard className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#092e54]">Uncashed Checks & Refunds</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Paychecks, tax refunds, insurance payments, and other checks that were never cashed eventually become
                unclaimed property.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#f9b000] mr-2">✓</span>
                  <span>Typical amount: $100 - $5,000</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#f9b000] mr-2">✓</span>
                  <span>Common with tax refunds and final paychecks</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-[#0b4d8c] rounded-full p-3 mr-4">
                  <BarChart className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#092e54]">Investments & Securities</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Stocks, bonds, mutual funds, and dividends that have been forgotten or lost track of. These can be
                substantial, especially with market growth over time.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#f9b000] mr-2">✓</span>
                  <span>Often inherited but never claimed</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#f9b000] mr-2">✓</span>
                  <span>May include dividend payments and stock splits</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-[#0b4d8c] rounded-full p-3 mr-4">
                  <PiggyBank className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#092e54]">Retirement Accounts</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Forgotten 401(k)s, IRAs, and pension benefits from previous employers. Many people lose track of these
                accounts when changing jobs.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#f9b000] mr-2">✓</span>
                  <span>Typical amount: $1,000 - $50,000+</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#f9b000] mr-2">✓</span>
                  <span>Often the largest category of unclaimed funds</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#092e54]">Ready to Find Your Unclaimed Financial Assets?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Our free guide shows you exactly how to search for and claim financial assets that may belong to you.
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
