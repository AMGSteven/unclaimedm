import { CheckCircle, Search, FileText, DollarSign } from "lucide-react"

export default function HowItWorks() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">How It Works</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="bg-[#0056b3] rounded-full p-4 mb-4">
              <FileText className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Get Our Free Guide</h3>
            <p className="text-gray-600">Download our comprehensive guide to unclaimed money</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="bg-[#0056b3] rounded-full p-4 mb-4">
              <Search className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Learn How to Search</h3>
            <p className="text-gray-600">Follow our step-by-step instructions to search databases</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="bg-[#0056b3] rounded-full p-4 mb-4">
              <CheckCircle className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Verify Your Identity</h3>
            <p className="text-gray-600">Complete the necessary verification steps</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="bg-[#0056b3] rounded-full p-4 mb-4">
              <DollarSign className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Claim Your Money</h3>
            <p className="text-gray-600">Receive funds that rightfully belong to you</p>
          </div>
        </div>
      </div>
    </section>
  )
}
