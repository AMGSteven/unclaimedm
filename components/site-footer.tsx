import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Shield, Lock } from "lucide-react"

export default function SiteFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#092e54] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative w-10 h-10 bg-white rounded-md overflow-hidden">
                <Image
                  src="/images/our-unclaimed-money-logo.png"
                  alt="Our Unclaimed Money Logo"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <span className="text-xl font-bold tracking-wider text-white">OUR UNCLAIMED MONEY</span>
            </div>
            <p className="text-sm mb-4 text-gray-300">
              Helping Americans discover and claim funds that rightfully belong to them.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-[#f9b000]" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-[#f9b000]" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-[#f9b000]" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 uppercase">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm hover:text-[#f9b000] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-sm hover:text-[#f9b000] transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/success-stories" className="text-sm hover:text-[#f9b000] transition-colors">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm hover:text-[#f9b000] transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm hover:text-[#f9b000] transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 uppercase">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://jmcustomerprivacy.com/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-[#f9b000] transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="https://jmcustomerprivacy.com/terms-conditions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-[#f9b000] transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="https://jmcustomerprivacy.com/e-sign"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-[#f9b000] transition-colors"
                >
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 uppercase">Contact Us</h3>
            <address className="not-italic text-sm text-gray-300">
              <p>Email: info@ourunclaimedmoney.org</p>
              <p>Hours: Monday-Friday 9am-5pm EST</p>
            </address>
            <div className="mt-4 flex flex-col space-y-2">
              <div className="flex items-center text-xs text-gray-300">
                <Shield className="w-4 h-4 mr-2 text-[#f9b000]" />
                <span>100% Secure & Confidential</span>
              </div>
              <div className="flex items-center text-xs text-gray-300">
                <Lock className="w-4 h-4 mr-2 text-[#f9b000]" />
                <span>256-bit SSL Encryption</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-300">
          <p>&copy; {currentYear} Our Unclaimed Money. All rights reserved.</p>
          <p className="mt-2">
            This is an informational resource, not a government website. We do not process claims or hold unclaimed
            funds.
          </p>
        </div>
      </div>
    </footer>
  )
}
