"use client"

import { usePathname } from "next/navigation"
import { type ReactNode, useEffect, useState } from "react"
import { isInFunnelPath } from "@/lib/utils"

interface ClientOnlyWrapperProps {
  children: ReactNode
  showOnFunnel?: boolean
}

export default function ClientOnlyWrapper({ children, showOnFunnel = false }: ClientOnlyWrapperProps) {
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isInFunnel = isInFunnelPath(pathname)

  // If showOnFunnel is true, show only on funnel pages
  // If showOnFunnel is false, show only on non-funnel pages
  if ((showOnFunnel && !isInFunnel) || (!showOnFunnel && isInFunnel)) {
    return null
  }

  return <>{children}</>
}
