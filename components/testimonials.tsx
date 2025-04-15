import Image from "next/image"

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">Success Stories</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="relative w-16 h-16 mr-4 rounded-full overflow-hidden">
                <Image src="/placeholder.svg?height=64&width=64" alt="Sarah J." fill className="object-cover" />
              </div>
              <div>
                <h3 className="font-bold">Sarah J.</h3>
                <p className="text-sm text-gray-500">Chicago, IL</p>
              </div>
            </div>
            <p className="text-gray-700">
              "I discovered over $3,200 from an old insurance policy I had completely forgotten about. The guide made
              the process so simple!"
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="relative w-16 h-16 mr-4 rounded-full overflow-hidden">
                <Image src="/placeholder.svg?height=64&width=64" alt="Michael T." fill className="object-cover" />
              </div>
              <div>
                <h3 className="font-bold">Michael T.</h3>
                <p className="text-sm text-gray-500">Dallas, TX</p>
              </div>
            </div>
            <p className="text-gray-700">
              "After my father passed away, I found over $7,500 in unclaimed funds that belonged to him. This service
              helped me navigate the process."
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="relative w-16 h-16 mr-4 rounded-full overflow-hidden">
                <Image src="/placeholder.svg?height=64&width=64" alt="Jennifer L." fill className="object-cover" />
              </div>
              <div>
                <h3 className="font-bold">Jennifer L.</h3>
                <p className="text-sm text-gray-500">Seattle, WA</p>
              </div>
            </div>
            <p className="text-gray-700">
              "I was skeptical at first, but I found nearly $1,200 from an old utility deposit. The step-by-step guide
              made it easy to claim."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
