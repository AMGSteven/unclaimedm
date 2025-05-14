import type React from "react"
import { Montserrat } from "next/font/google"
import "../globals.css"
import Image from "next/image"
import Link from "next/link"
import ClientOnlyWrapper from "@/components/client-only-wrapper"

const montserrat = Montserrat({ subsets: ["latin"] })

export default function FunnelLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-[#1a4b8a]">
      <ClientOnlyWrapper showOnFunnel={true}>
        <header className="bg-[#1a4b8a] py-4 px-4 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <div className="relative w-10 h-10 bg-white rounded-md overflow-hidden">
              <Image
                src="/images/our-unclaimed-money-logo.png"
                alt="Our Unclaimed Money Logo"
                fill
                className="object-contain p-1"
              />
            </div>
            <span className="text-white font-bold ml-2 hidden sm:inline">Find Your Unclaimed Money</span>
          </Link>
          <Link href="/funnel">
            <button className="bg-white text-[#092e54] px-4 py-2 rounded font-medium hover:bg-gray-100 transition-colors">
              Find My Money
            </button>
          </Link>
        </header>
      </ClientOnlyWrapper>
      <main className="container mx-auto px-4 py-8">{children}</main>
    </div>
  )
}
