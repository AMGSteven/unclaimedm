import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Helper function to determine if the current path is in the funnel
export function isInFunnelPath(path: string): boolean {
  return path.startsWith("/funnel") || path.startsWith("/lead-capture") || path === "/thank-you"
}
