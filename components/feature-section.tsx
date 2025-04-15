import { Search, FileText, DollarSign } from "lucide-react"

export default function FeatureSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#092e54]">How to Find Your Unclaimed Money</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our free guide walks you through the entire process of finding and claiming your unclaimed funds.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="bg-[#0b4d8c] rounded-full p-5 mb-6 w-20 h-20 flex items-center justify-center">
              <Search className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#092e54]">Search Multiple Databases</h3>
            <p className="text-gray-700">
              Learn how to search state, federal, and specialized databases to find all your unclaimed funds.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="bg-[#0b4d8c] rounded-full p-5 mb-6 w-20 h-20 flex items-center justify-center">
              <FileText className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#092e54]">Complete Claim Forms</h3>
            <p className="text-gray-700">
              Get step-by-step instructions on filling out claim forms correctly to avoid delays.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="bg-[#0b4d8c] rounded-full p-5 mb-6 w-20 h-20 flex items-center justify-center">
              <DollarSign className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#092e54]">Receive Your Money</h3>
            <p className="text-gray-700">
              Understand the verification process and timeline for receiving your unclaimed funds.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
