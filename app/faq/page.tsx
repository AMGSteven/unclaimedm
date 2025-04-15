import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import Breadcrumb from "@/components/breadcrumb"
import FAQAccordion from "@/components/faq-accordion"
import FloatingCTA from "@/components/floating-cta"

const generalFAQs = [
  {
    question: "What exactly is unclaimed money?",
    answer:
      "Unclaimed money refers to financial assets that have been forgotten or abandoned by their owners. These can include forgotten bank accounts, uncashed checks, insurance payouts, utility deposits, tax refunds, and more. After a certain period of inactivity, these funds are reported to state unclaimed property offices.",
  },
  {
    question: "How do I know if I have unclaimed money?",
    answer:
      "The only way to know for sure is to search for your name in unclaimed property databases. Our free service helps you search both state and federal databases, as well as other specialized sources where unclaimed funds might be held.",
  },
  {
    question: "Is this service really free?",
    answer:
      "Yes, our service is completely free. We do not charge any fees to help you find and claim your unclaimed money.",
  },
  {
    question: "How much unclaimed money is out there?",
    answer:
      "Currently, states, federal agencies, and other organizations collectively hold more than $49 billion in unclaimed funds. The average claim is worth approximately $1,780.",
  },
  {
    question: "Why does money go unclaimed?",
    answer:
      "Money goes unclaimed for various reasons: people move and forget to provide forwarding addresses, they forget about old accounts, they're unaware of inheritances or insurance benefits, or they simply lose track of funds over time.",
  },
]

const searchFAQs = [
  {
    question: "What information do I need to provide for a search?",
    answer:
      "To conduct a basic search, you'll need to provide your name and state of residence. For more comprehensive searches, you may need to provide previous addresses, variations of your name, and in some cases, your Social Security Number (which is always handled securely).",
  },
  {
    question: "How long does the search process take?",
    answer:
      "The initial search process takes about 60 seconds. You'll get immediate results showing potential matches.",
  },
  {
    question: "Can I search for unclaimed money for deceased relatives?",
    answer:
      "Yes, you can search for unclaimed money belonging to deceased relatives. However, claiming these funds typically requires additional documentation such as death certificates, wills, or proof that you're the rightful heir.",
  },
  {
    question: "Can I search for unclaimed money for a business?",
    answer:
      "Yes, businesses can also have unclaimed funds. You can search using the business name and state of operation.",
  },
  {
    question: "How far back do unclaimed money records go?",
    answer:
      "Most states maintain unclaimed property records indefinitely, though some may have limitations. Generally, you can find records going back several decades.",
  },
]

const claimFAQs = [
  {
    question: "How long does it take to receive unclaimed funds?",
    answer:
      "The timeframe varies depending on the state and the type of property being claimed. Simple claims might be processed in a few weeks, while more complex cases could take several months. Our guide provides estimated timeframes for different types of claims.",
  },
  {
    question: "What documentation will I need to claim my money?",
    answer:
      "Typically, you'll need identification (driver's license, passport, etc.), proof of your Social Security Number, and documentation connecting you to the reported address or account. For larger claims, additional documentation may be required.",
  },
  {
    question: "Is there a deadline to claim unclaimed money?",
    answer:
      "Most states hold unclaimed property indefinitely, but some may eventually transfer very old unclaimed funds to the state's general fund. It's best to claim your money as soon as possible.",
  },
  {
    question: "Will I have to pay taxes on unclaimed money I receive?",
    answer:
      "Unclaimed property itself is not taxable, but any interest or dividends earned on the property may be taxable. We recommend consulting with a tax professional regarding your specific situation.",
  },
  {
    question: "What if someone else has claimed my money?",
    answer:
      "If you believe someone has fraudulently claimed your unclaimed money, you should contact the state unclaimed property office immediately. They have procedures in place to investigate such situations.",
  },
]

const securityFAQs = [
  {
    question: "Is this a government website?",
    answer:
      "No, we are not affiliated with any government agency. We are an independent information resource that helps people understand the process of finding and claiming unclaimed money. Our guide directs you to the official government resources where you can conduct your search.",
  },
  {
    question: "How is my personal information protected?",
    answer:
      "We take data security very seriously. All personal information is encrypted using 256-bit SSL encryption. We do not store sensitive documents on our servers, and we never share your personal information with third parties without your consent.",
  },
  {
    question: "Why do you need my email and phone number?",
    answer:
      "We collect your email and phone number to send you your search results and guide. We may also send you updates about your claim status or additional unclaimed funds that may belong to you.",
  },
  {
    question: "Can I opt out of communications?",
    answer:
      "Yes, you can opt out of communications at any time by clicking the unsubscribe link in our emails or replying STOP to our text messages.",
  },
]

export default function FAQ() {
  return (
    <main className="flex min-h-screen flex-col pt-24">
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto px-4">
          <Breadcrumb items={[{ label: "FAQ" }]} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6 text-[#092e54]">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-600 mb-8">
              Find answers to common questions about unclaimed money and our free service.
            </p>

            <div className="relative max-w-xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0b4d8c] focus:border-[#0b4d8c]"
                placeholder="Search for a question..."
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-8 text-[#092e54]">General Questions</h2>
              <FAQAccordion items={generalFAQs} structured={true} />
            </div>

            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-8 text-[#092e54]">Search Process</h2>
              <FAQAccordion items={searchFAQs} structured={true} />
            </div>

            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-8 text-[#092e54]">Claiming Process</h2>
              <FAQAccordion items={claimFAQs} structured={true} />
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-8 text-[#092e54]">Security & Privacy</h2>
              <FAQAccordion items={securityFAQs} structured={true} />
            </div>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-[#092e54]">Still Have Questions?</h2>
            <p className="text-gray-600 mb-8">
              If you couldn't find the answer to your question, feel free to contact us or start your free search now.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="border-[#092e54] text-[#092e54] hover:bg-[#092e54] hover:text-white w-full sm:w-auto"
                >
                  Contact Us
                </Button>
              </Link>

              <Link href="/funnel">
                <Button className="bg-[#f9b000] hover:bg-[#e0a000] text-black font-bold w-full sm:w-auto">
                  Start My Free Search
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FloatingCTA />
    </main>
  )
}
