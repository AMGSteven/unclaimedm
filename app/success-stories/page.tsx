import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DollarSign, MapPin, Calendar, Quote } from "lucide-react"
import Breadcrumb from "@/components/breadcrumb"
import TestimonialCarousel from "@/components/testimonial-carousel"
import StatsCounter from "@/components/stats-counter"
import FloatingCTA from "@/components/floating-cta"

interface SuccessStory {
  id: number
  name: string
  location: string
  amount: string
  story: string
  source: string
  date: string
}

const successStories: SuccessStory[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "Chicago, IL",
    amount: "$3,240",
    story:
      "I was skeptical at first, but decided to give it a try. To my surprise, I discovered over $3,200 from an old insurance policy I had completely forgotten about from when I lived in another state. The process was so simple, and I received my check within just a few weeks. I'm so glad I took the time to search!",
    source: "Insurance Policy",
    date: "March 2023",
  },
  {
    id: 2,
    name: "Michael Thompson",
    location: "Dallas, TX",
    amount: "$7,580",
    story:
      "After my father passed away, I was dealing with his estate and someone suggested I check for unclaimed funds. I was amazed to find over $7,500 in unclaimed funds that belonged to him from an old investment account. This service helped me navigate the process with ease, and the money helped cover some of the funeral expenses.",
    source: "Investment Account",
    date: "January 2023",
  },
  {
    id: 3,
    name: "Jennifer Lopez",
    location: "Seattle, WA",
    amount: "$1,250",
    story:
      "I had moved several times over the past decade and completely forgot about a utility deposit from my first apartment. I found nearly $1,200 that had been sitting unclaimed for years! The step-by-step guide made it easy to claim what was rightfully mine. I used the money for a weekend getaway with my family.",
    source: "Utility Deposit",
    date: "November 2022",
  },
  {
    id: 4,
    name: "Robert Keller",
    location: "Miami, FL",
    amount: "$5,120",
    story:
      "I had no idea I was owed money from a class action settlement related to a product I had purchased years ago. Thanks to this service, I found over $5,000 that I would have never known about! The process was straightforward, and I received my funds within about two months. It felt like winning the lottery!",
    source: "Class Action Settlement",
    date: "February 2023",
  },
  {
    id: 5,
    name: "David Wilson",
    location: "Phoenix, AZ",
    amount: "$2,780",
    story:
      "After changing jobs, I completely forgot about my final paycheck and some unused vacation time. Years later, I discovered nearly $2,800 sitting in the state's unclaimed property office. The search took less than a minute, and the claiming process was simple with the provided instructions. I'm so glad I found this service!",
    source: "Final Paycheck",
    date: "April 2023",
  },
  {
    id: 6,
    name: "Emily Rodriguez",
    location: "Denver, CO",
    amount: "$4,350",
    story:
      "I was helping my elderly mother organize her finances when I decided to check if she had any unclaimed funds. To our surprise, we found over $4,300 from an old life insurance policy that my late father had purchased. The money came at the perfect time as she needed some home repairs. The claiming process was straightforward with the guide provided.",
    source: "Life Insurance",
    date: "December 2022",
  },
]

export default function SuccessStories() {
  return (
    <main className="flex min-h-screen flex-col pt-24">
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto px-4">
          <Breadcrumb items={[{ label: "Success Stories" }]} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6 text-[#092e54]">Real Success Stories</h1>
            <p className="text-xl text-gray-600 mb-8">
              Read about real people who have found and claimed their unclaimed money using our free service.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-[#092e54] text-center">Featured Success Stories</h2>

            <TestimonialCarousel />

            <div className="text-center mt-8">
              <Link href="/funnel">
                <Button size="lg" className="bg-[#f9b000] hover:bg-[#e0a000] text-black font-bold px-8">
                  Find My Unclaimed Money
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-12 bg-[#092e54] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">
                <StatsCounter value={900000} suffix="+" />
              </div>
              <p className="text-lg">Successful searches</p>
            </div>

            <div>
              <div className="text-4xl font-bold mb-2">
                <StatsCounter value={49} suffix="B+" prefix="$" />
              </div>
              <p className="text-lg">Total unclaimed funds</p>
            </div>

            <div>
              <div className="text-4xl font-bold mb-2">
                <StatsCounter value={1780} prefix="$" />
              </div>
              <p className="text-lg">Average claim amount</p>
            </div>

            <div>
              <div className="text-4xl font-bold mb-2">60</div>
              <p className="text-lg">Seconds to search</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-[#092e54] text-center">More Success Stories</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story) => (
              <div
                key={story.id}
                className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all"
              >
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="font-bold text-[#092e54]">{story.name}</h3>
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="w-3 h-3 mr-1" />
                      {story.location}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <DollarSign className="w-3 h-3 mr-1" />
                      <span>Source: {story.source}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-3 h-3 mr-1" />
                      <span>{story.date}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-start mb-2">
                      <Quote className="w-4 h-4 text-gray-400 mr-2 flex-shrink-0 mt-1" />
                      <p className="text-gray-600 text-sm italic line-clamp-4">{story.story}</p>
                    </div>
                  </div>

                  <div className="bg-green-100 text-green-800 font-bold px-3 py-1 rounded-full text-sm inline-block">
                    Found {story.amount}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#092e54]">You Could Be Next!</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-600">
            Join thousands of Americans who have already found their unclaimed money. It only takes 60 seconds to
            search.
          </p>
          <Link href="/funnel">
            <Button size="lg" className="bg-[#f9b000] hover:bg-[#e0a000] text-black font-bold text-lg px-8 py-6">
              START MY FREE SEARCH
            </Button>
          </Link>
        </div>
      </section>

      <FloatingCTA />
    </main>
  )
}
