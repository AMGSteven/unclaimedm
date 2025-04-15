// Email validation regex
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  return emailRegex.test(email)
}

// Phone validation regex for US numbers
export const isValidPhone = (phone: string): boolean => {
  // Remove all non-digit characters
  const digitsOnly = phone.replace(/\D/g, "")

  // Check if it's a valid US phone number (10 digits, or 11 digits starting with 1)
  if (digitsOnly.length === 10) {
    return true
  } else if (digitsOnly.length === 11 && digitsOnly.charAt(0) === "1") {
    return true
  }

  return false
}

// Format phone number as (XXX) XXX-XXXX
export const formatPhoneNumber = (phone: string): string => {
  const digitsOnly = phone.replace(/\D/g, "")

  // Handle different digit counts
  if (digitsOnly.length < 4) {
    return digitsOnly
  } else if (digitsOnly.length < 7) {
    return `(${digitsOnly.slice(0, 3)}) ${digitsOnly.slice(3)}`
  } else if (digitsOnly.length <= 10) {
    return `(${digitsOnly.slice(0, 3)}) ${digitsOnly.slice(3, 6)}-${digitsOnly.slice(6, 10)}`
  } else {
    // If 11 digits starting with 1, treat as country code
    if (digitsOnly.length === 11 && digitsOnly.charAt(0) === "1") {
      return `+1 (${digitsOnly.slice(1, 4)}) ${digitsOnly.slice(4, 7)}-${digitsOnly.slice(7, 11)}`
    }
    // Otherwise just return the first 10 digits formatted
    return `(${digitsOnly.slice(0, 3)}) ${digitsOnly.slice(3, 6)}-${digitsOnly.slice(6, 10)}`
  }
}
