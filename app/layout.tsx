import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import { ThemeProvider } from "@/components/theme-provider"
import ClientOnlyWrapper from "@/components/client-only-wrapper"

const montserrat = Montserrat({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Our Unclaimed Money - Find Your Unclaimed Funds Today",
  description:
    "Americans have over $49 billion in unclaimed funds. Find yours free in 60 seconds. Our free service helps you search and claim money that rightfully belongs to you.",
  keywords: "unclaimed money, unclaimed funds, unclaimed property, free search, find money, lost money",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex flex-col min-h-screen">
            <ClientOnlyWrapper showOnFunnel={false}>
              <SiteHeader />
            </ClientOnlyWrapper>
            <div className="flex-grow">{children}</div>
            <ClientOnlyWrapper showOnFunnel={false}>
              <SiteFooter />
            </ClientOnlyWrapper>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

// Helper function to determine if the current path is in the funnel
function isPathInFunnel() {
  // This function runs on the server, so we need to check the URL differently
  if (typeof window !== "undefined") {
    // Client-side check
    const path = window.location.pathname
    return path.startsWith("/funnel") || path.startsWith("/lead-capture") || path === "/thank-you"
  } else {
    // Server-side - we can't determine this, so default to false
    // The actual check will happen on the client after hydration
    return false
  }
}


import './globals.css'