export default function Statistics() {
  return (
    <section className="py-16 bg-[#0056b3] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Unclaimed Money By The Numbers</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-5xl font-bold mb-2">$49B+</div>
            <p className="text-xl">Total unclaimed funds in the United States</p>
          </div>

          <div>
            <div className="text-5xl font-bold mb-2">1 in 10</div>
            <p className="text-xl">Americans have unclaimed money waiting for them</p>
          </div>

          <div>
            <div className="text-5xl font-bold mb-2">$1,780</div>
            <p className="text-xl">Average amount of unclaimed funds per person</p>
          </div>
        </div>
      </div>
    </section>
  )
}
