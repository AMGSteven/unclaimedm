export default function TestimonialSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#092e54]">Success Stories</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Real people who have found and claimed their unclaimed money.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <div className="mb-4">
              <h3 className="font-bold text-[#092e54]">Sarah J.</h3>
              <p className="text-sm text-gray-500">Chicago, IL</p>
            </div>
            <p className="text-gray-700">
              "I discovered over $3,200 from an old insurance policy I had completely forgotten about. The guide made
              the process so simple!"
            </p>
            <div className="mt-4 text-[#f9b000] font-bold">$3,200 Claimed</div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <div className="mb-4">
              <h3 className="font-bold text-[#092e54]">Michael T.</h3>
              <p className="text-sm text-gray-500">Dallas, TX</p>
            </div>
            <p className="text-gray-700">
              "After my father passed away, I found over $7,500 in unclaimed funds that belonged to him. This service
              helped me navigate the process."
            </p>
            <div className="mt-4 text-[#f9b000] font-bold">$7,500 Claimed</div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <div className="mb-4">
              <h3 className="font-bold text-[#092e54]">Jennifer L.</h3>
              <p className="text-sm text-gray-500">Seattle, WA</p>
            </div>
            <p className="text-gray-700">
              "I was skeptical at first, but I found nearly $1,200 from an old utility deposit. The step-by-step guide
              made it easy to claim."
            </p>
            <div className="mt-4 text-[#f9b000] font-bold">$1,200 Claimed</div>
          </div>
        </div>
      </div>
    </section>
  )
}
