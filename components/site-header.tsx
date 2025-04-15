"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
      style={{
        display: typeof window !== "undefined" && window.location.pathname.startsWith("/funnel") ? "none" : "block",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-10 h-10 bg-white rounded-md overflow-hidden">
              <Image
                src="/images/our-unclaimed-money-logo.png"
                alt="Our Unclaimed Money Logo"
                fill
                className="object-contain p-1"
              />
            </div>
            <span className={`text-xl font-bold tracking-wider ${isScrolled ? "text-[#092e54]" : "text-white"}`}>
              OUR UNCLAIMED MONEY
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className={`font-medium transition-colors ${
                isScrolled ? "text-[#092e54] hover:text-[#0b4d8c]" : "text-white hover:text-gray-200"
              }`}
            >
              Home
            </Link>
            <Link
              href="/how-it-works"
              className={`font-medium transition-colors ${
                isScrolled ? "text-[#092e54] hover:text-[#0b4d8c]" : "text-white hover:text-gray-200"
              }`}
            >
              How It Works
            </Link>
            <Link
              href="/success-stories"
              className={`font-medium transition-colors ${
                isScrolled ? "text-[#092e54] hover:text-[#0b4d8c]" : "text-white hover:text-gray-200"
              }`}
            >
              Success Stories
            </Link>
            <Link
              href="/faq"
              className={`font-medium transition-colors ${
                isScrolled ? "text-[#092e54] hover:text-[#0b4d8c]" : "text-white hover:text-gray-200"
              }`}
            >
              FAQ
            </Link>
            <Link
              href="/about"
              className={`font-medium transition-colors ${
                isScrolled ? "text-[#092e54] hover:text-[#0b4d8c]" : "text-white hover:text-gray-200"
              }`}
            >
              About Us
            </Link>
          </nav>

          <div className="hidden md:block">
            <Link href="/funnel">
              <Button
                size="lg"
                className={`${
                  isScrolled
                    ? "bg-[#f9b000] hover:bg-[#e0a000] text-black"
                    : "bg-white hover:bg-gray-100 text-[#092e54]"
                } font-bold transition-all duration-300`}
              >
                Find My Money
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? (
              <X className={isScrolled ? "text-[#092e54]" : "text-white"} size={24} />
            ) : (
              <Menu className={isScrolled ? "text-[#092e54]" : "text-white"} size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white shadow-lg"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                <Link
                  href="/"
                  className="font-medium text-[#092e54] hover:text-[#0b4d8c] py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/how-it-works"
                  className="font-medium text-[#092e54] hover:text-[#0b4d8c] py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  How It Works
                </Link>
                <Link
                  href="/success-stories"
                  className="font-medium text-[#092e54] hover:text-[#0b4d8c] py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Success Stories
                </Link>
                <Link
                  href="/faq"
                  className="font-medium text-[#092e54] hover:text-[#0b4d8c] py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  FAQ
                </Link>
                <Link
                  href="/about"
                  className="font-medium text-[#092e54] hover:text-[#0b4d8c] py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link href="/funnel" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full bg-[#f9b000] hover:bg-[#e0a000] text-black font-bold">Find My Money</Button>
                </Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
