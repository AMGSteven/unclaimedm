import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#092e54] to-[#0b4d8c] py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 text-center">
            <div className="mb-4 flex justify-center">
              <div className="relative w-40 h-40">
                <Image
                  src="/images/our-unclaimed-money-logo.png"
                  alt="Our Unclaimed Money"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <h1 className="text-2xl font-bold text-[#092e54] mb-2">Thank You! Your Free Guide Is On Its Way</h1>
          </div>

          <div className="p-6 md:p-8">
            <div className="flex justify-center mb-8">
              <div className="relative w-24 h-24">
                <Image src="/placeholder.svg?height=96&width=96" alt="Success" fill className="object-contain" />
              </div>
            </div>

            <div className="text-center mb-8 max-w-2xl mx-auto">
              <p className="text-gray-700 mb-4">
                Check your email in the next few minutes for your download link. Be sure to check your spam folder if
                you don't see it.
              </p>
              <p className="text-gray-700 font-medium">
                We've sent your guide to: <span className="text-[#0b4d8c]">your@email.com</span>
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6 max-w-2xl mx-auto">
              <h2 className="text-xl font-bold text-[#092e54] mb-4 text-center">While You Wait...</h2>
              <p className="text-gray-700 mb-6 text-center">
                Discover our premium search service that can help you find unclaimed money faster and with professional
                assistance.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded border border-gray-200">
                  <h3 className="font-bold text-[#092e54] mb-2">Premium Search</h3>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <span className="text-[#f9b000] mr-2">✓</span>
                      <span className="text-gray-700 text-sm">Search 50+ databases</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#f9b000] mr-2">✓</span>
                      <span className="text-gray-700 text-sm">Personalized report</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#f9b000] mr-2">✓</span>
                      <span className="text-gray-700 text-sm">Email support</span>
                    </li>
                  </ul>
                  <div className="text-center font-bold text-[#092e54]">$29.99</div>
                </div>

                <div className="bg-white p-4 rounded border border-gray-200">
                  <h3 className="font-bold text-[#092e54] mb-2">Complete Package</h3>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <span className="text-[#f9b000] mr-2">✓</span>
                      <span className="text-gray-700 text-sm">All Premium features</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#f9b000] mr-2">✓</span>
                      <span className="text-gray-700 text-sm">Claim filing assistance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#f9b000] mr-2">✓</span>
                      <span className="text-gray-700 text-sm">Priority support</span>
                    </li>
                  </ul>
                  <div className="text-center font-bold text-[#092e54]">$49.99</div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <Link href="/premium-service">
                  <Button className="bg-[#f9b000] hover:bg-[#e0a000] text-black font-bold px-8 py-3 uppercase">
                    Learn More About Premium Services
                  </Button>
                </Link>
              </div>
            </div>

            <div className="text-center">
              <Link href="/" className="text-[#0b4d8c] hover:underline text-sm">
                &larr; Return to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
