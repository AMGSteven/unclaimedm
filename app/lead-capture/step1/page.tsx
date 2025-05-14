import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"
import { submitStep1 } from "@/lib/actions"
import Script from 'next/script';

export default function LeadCaptureStep1() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#092e54] to-[#0b4d8c] py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 text-center">
            <div className="mb-4 flex justify-center">
              <div className="relative w-40 h-40">
                <Image
                  src="/images/our-unclaimed-money-logo.png"
                  alt="Our Unclaimed Money"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <h1 className="text-2xl font-bold text-[#092e54] mb-2">Get Your FREE Guide to Finding Unclaimed Money</h1>
            <p className="text-gray-600 mb-6">Discover how to find and claim money that's rightfully yours</p>
          </div>

          <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="md:col-span-3">
              <form action={submitStep1}>
                <div className="space-y-5">
                  <div>
                    <Label htmlFor="email" className="text-gray-700 font-medium">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      required
                      className="mt-1 bg-white border-gray-300"
                    />
                  </div>

                  <div>
                    <Label htmlFor="firstName" className="text-gray-700 font-medium">
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      type="text"
                      placeholder="Your first name"
                      required
                      className="mt-1 bg-white border-gray-300"
                    />
                  </div>

                  {/* Hidden input for TrustedForm */}
                  <input type="hidden" id="xxTrustedFormCertUrl" name="xxTrustedFormCertUrl" />

                  <Button
                    type="submit"
                    className="w-full bg-[#f9b000] hover:bg-[#e0a000] text-black font-bold text-lg py-6 uppercase"
                  >
                    CONTINUE
                  </Button>

                  <p className="text-center text-sm text-gray-500">We respect your privacy</p>
                </div>
              </form>
            </div>

            <div className="md:col-span-2">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-[#092e54] mb-4">Your Free Guide Includes:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-[#f9b000] mr-2">✓</span>
                    <span className="text-gray-700">Step-by-step search instructions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#f9b000] mr-2">✓</span>
                    <span className="text-gray-700">List of all official databases</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#f9b000] mr-2">✓</span>
                    <span className="text-gray-700">Claim form templates</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#f9b000] mr-2">✓</span>
                    <span className="text-gray-700">Tips to avoid common claim mistakes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#f9b000] mr-2">✓</span>
                    <span className="text-gray-700">State-specific information</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 text-center border-t border-gray-200">
            <p className="text-sm text-gray-600">
              By continuing, you agree to our{" "}
              <a
                href="https://jmcustomerprivacy.com/terms-conditions"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0b4d8c] hover:underline"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                href="https://jmcustomerprivacy.com/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0b4d8c] hover:underline"
              >
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
      {/* TrustedForm Script */}
      <Script id="trustedform-script-step1" strategy="afterInteractive">
        {`
          (function() {
            var tf = document.createElement('script');
            tf.type = 'text/javascript';
            tf.async = true;
            tf.src = ("https:" == document.location.protocol ? 'https' : 'http') +
              '://api.trustedform.com/trustedform.js?field=xxTrustedFormCertUrl&use_tagged_consent=true&l=' +
              new Date().getTime() + Math.random();
            var s = document.getElementsByTagName('script')[0]; 
            if (s && s.parentNode) {
              s.parentNode.insertBefore(tf, s);
            } else {
              // Fallback if no script tag is found
              document.head.appendChild(tf);
            }
          })();
        `}
      </Script>
      <noscript>
        <img src='https://api.trustedform.com/ns.gif' />
      </noscript>
    </div>
  )
}
