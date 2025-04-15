"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface Testimonial {
  id: number
  name: string
  location: string
  amount: string
  quote: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah J.",
    location: "Chicago, IL",
    amount: "$3,240",
    quote:
      "I discovered over $3,200 from an old insurance policy I had completely forgotten about. The process was so simple and I received my check within weeks!",
  },
  {
    id: 2,
    name: "Michael T.",
    location: "Dallas, TX",
    amount: "$7,580",
    quote:
      "After my father passed away, I found over $7,500 in unclaimed funds that belonged to him. This service helped me navigate the process with ease.",
  },
  {
    id: 3,
    name: "Jennifer L.",
    location: "Seattle, WA",
    amount: "$1,250",
    quote:
      "I was skeptical at first, but I found nearly $1,200 from an old utility deposit. The step-by-step guide made it easy to claim what was rightfully mine.",
  },
  {
    id: 4,
    name: "Robert K.",
    location: "Miami, FL",
    amount: "$5,120",
    quote:
      "I had no idea I was owed money from a class action settlement. Thanks to this service, I found over $5,000 that I would have never known about!",
  },
]

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay])

  const next = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-lg">
        <div className="relative h-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex flex-col gap-4">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>

                  <p className="text-gray-700 italic mb-4 text-lg">"{testimonials[current].quote}"</p>

                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div>
                      <h3 className="font-bold text-[#092e54]">{testimonials[current].name}</h3>
                      <p className="text-sm text-gray-500">{testimonials[current].location}</p>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <span className="inline-block bg-green-100 text-green-800 font-bold px-3 py-1 rounded-full text-sm">
                        Found {testimonials[current].amount}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="flex justify-center mt-4 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setAutoplay(false)
              setCurrent(index)
            }}
            className={`w-2 h-2 rounded-full transition-all ${index === current ? "bg-[#0b4d8c] w-4" : "bg-gray-300"}`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

      <button
        onClick={prev}
        className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#0b4d8c] md:flex hidden"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="w-5 h-5 text-[#092e54]" />
      </button>

      <button
        onClick={next}
        className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#0b4d8c] md:flex hidden"
        aria-label="Next testimonial"
      >
        <ChevronRight className="w-5 h-5 text-[#092e54]" />
      </button>
    </div>
  )
}
