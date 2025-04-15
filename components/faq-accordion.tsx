"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface FAQItem {
  question: string
  answer: string
}

interface FAQAccordionProps {
  items: FAQItem[]
  structured?: boolean
}

export default function FAQAccordion({ items, structured = false }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-lg overflow-hidden"
          itemScope={structured}
          itemType={structured ? "https://schema.org/Question" : undefined}
        >
          <button
            className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-gray-50 transition-colors"
            onClick={() => toggleItem(index)}
            aria-expanded={openIndex === index}
            aria-controls={`faq-answer-${index}`}
          >
            <h3 className="font-medium text-lg text-[#092e54]" itemProp={structured ? "name" : undefined}>
              {item.question}
            </h3>
            <ChevronDown
              className={`w-5 h-5 text-[#0b4d8c] transition-transform ${
                openIndex === index ? "transform rotate-180" : ""
              }`}
            />
          </button>

          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                id={`faq-answer-${index}`}
                itemScope={structured}
                itemType={structured ? "https://schema.org/Answer" : undefined}
              >
                <div
                  className="p-4 pt-0 text-gray-600 border-t border-gray-100"
                  itemProp={structured ? "text" : undefined}
                >
                  {item.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}
