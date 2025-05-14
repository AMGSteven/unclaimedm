"use client"

import { useEffect, useState } from "react"
import Script from "next/script"

/**
 * TrustedForm component for capturing lead certificates
 * This component ensures the TrustedForm script is only loaded once per page
 * and provides a consistent implementation across the application.
 */
export function TrustedForm() {
  const [scriptId] = useState(`trustedform-script-${Math.random().toString(36).substring(2, 9)}`)

  // Clean up any existing TrustedForm scripts on unmount
  useEffect(() => {
    return () => {
      // Remove any existing TrustedForm script when component unmounts
      const existingScripts = document.querySelectorAll('script[src*="trustedform.js"]')
      existingScripts.forEach(script => {
        if (script.id !== scriptId) {
          script.remove()
        }
      })
    }
  }, [scriptId])

  return (
    <>
      {/* Hidden input for TrustedForm */}
      <input type="hidden" id="xxTrustedFormCertUrl" name="xxTrustedFormCertUrl" />

      {/* TrustedForm Script */}
      <Script id={scriptId} strategy="afterInteractive">
        {`
          (function() {
            var field = 'xxTrustedFormCertUrl';
            var provideReferrer = false;
            var tf = document.createElement('script');
            tf.type = 'text/javascript';
            tf.async = true;
            tf.src = 'https' +
              '://api.trustedform.com/trustedform.js?field=' + field + '&use_tagged_consent=true&l=' +
              new Date().getTime() + Math.random();
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(tf, s);
          })();
        `}
      </Script>
      <img src='https://api.trustedform.com/ns.gif' alt="" style={{ display: 'none' }} />
    </>
  )
}
