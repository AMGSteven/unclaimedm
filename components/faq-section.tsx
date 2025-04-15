import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FaqSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#092e54]">Frequently Asked Questions</h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-b border-gray-200">
              <AccordionTrigger className="text-lg font-medium py-4 text-[#f9b000] hover:text-[#e0a000]">
                What exactly is unclaimed money?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pb-4">
                Unclaimed money refers to financial assets that have been forgotten or abandoned by their owners. These
                can include forgotten bank accounts, uncashed checks, insurance payouts, utility deposits, tax refunds,
                and more. After a certain period of inactivity, these funds are reported to state unclaimed property
                offices.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-b border-gray-200">
              <AccordionTrigger className="text-lg font-medium py-4 text-[#f9b000] hover:text-[#e0a000]">
                How do I know if I have unclaimed money?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pb-4">
                The only way to know for sure is to search for your name in unclaimed property databases. Our free guide
                explains how to search both state and federal databases, as well as other specialized sources where
                unclaimed funds might be held.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-b border-gray-200">
              <AccordionTrigger className="text-lg font-medium py-4 text-[#f9b000] hover:text-[#e0a000]">
                Is this service really free?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pb-4">
                Yes, our basic guide and information about unclaimed money is completely free. We offer premium services
                for those who want additional assistance with their search or claim process, but you are under no
                obligation to purchase anything.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-b border-gray-200">
              <AccordionTrigger className="text-lg font-medium py-4 text-[#f9b000] hover:text-[#e0a000]">
                How long does it take to receive unclaimed funds?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pb-4">
                The timeframe varies depending on the state and the type of property being claimed. Simple claims might
                be processed in a few weeks, while more complex cases could take several months. Our guide provides
                estimated timeframes for different types of claims.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-lg font-medium py-4 text-[#f9b000] hover:text-[#e0a000]">
                Is this a government website?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pb-4">
                No, we are not affiliated with any government agency. We are an independent information resource that
                helps people understand the process of finding and claiming unclaimed money. Our guide directs you to
                the official government resources where you can conduct your search.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}
