import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"
import { submitStep2 } from "@/lib/actions"

export default function LeadCaptureStep2() {
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
            <h1 className="text-2xl font-bold text-[#092e54] mb-2">
              You're Almost There! Tell Us Where To Send Your Guide
            </h1>
          </div>

          <div className="p-6 md:p-8">
            <div className="mb-6">
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
                <div className="bg-[#0b4d8c] h-2.5 rounded-full" style={{ width: "66%" }}></div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              <div className="md:col-span-3">
                <form action={submitStep2}>
                  <div className="space-y-5">
                    <div>
                      <Label htmlFor="zipCode" className="text-gray-700 font-medium">
                        ZIP Code
                      </Label>
                      <Input
                        id="zipCode"
                        name="zipCode"
                        type="text"
                        placeholder="Your ZIP code"
                        required
                        className="mt-1 bg-white border-gray-300"
                      />
                    </div>

                    <div>
                      <Label htmlFor="state" className="text-gray-700 font-medium">
                        State
                      </Label>
                      <Select name="state" required>
                        <SelectTrigger className="mt-1 bg-white border-gray-300">
                          <SelectValue placeholder="Select your state" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="AL">Alabama</SelectItem>
                          <SelectItem value="AK">Alaska</SelectItem>
                          <SelectItem value="AZ">Arizona</SelectItem>
                          <SelectItem value="AR">Arkansas</SelectItem>
                          <SelectItem value="CA">California</SelectItem>
                          <SelectItem value="CO">Colorado</SelectItem>
                          <SelectItem value="CT">Connecticut</SelectItem>
                          <SelectItem value="DE">Delaware</SelectItem>
                          <SelectItem value="FL">Florida</SelectItem>
                          <SelectItem value="GA">Georgia</SelectItem>
                          <SelectItem value="HI">Hawaii</SelectItem>
                          <SelectItem value="ID">Idaho</SelectItem>
                          <SelectItem value="IL">Illinois</SelectItem>
                          <SelectItem value="IN">Indiana</SelectItem>
                          <SelectItem value="IA">Iowa</SelectItem>
                          <SelectItem value="KS">Kansas</SelectItem>
                          <SelectItem value="KY">Kentucky</SelectItem>
                          <SelectItem value="LA">Louisiana</SelectItem>
                          <SelectItem value="ME">Maine</SelectItem>
                          <SelectItem value="MD">Maryland</SelectItem>
                          <SelectItem value="MA">Massachusetts</SelectItem>
                          <SelectItem value="MI">Michigan</SelectItem>
                          <SelectItem value="MN">Minnesota</SelectItem>
                          <SelectItem value="MS">Mississippi</SelectItem>
                          <SelectItem value="MO">Missouri</SelectItem>
                          <SelectItem value="MT">Montana</SelectItem>
                          <SelectItem value="NE">Nebraska</SelectItem>
                          <SelectItem value="NV">Nevada</SelectItem>
                          <SelectItem value="NH">New Hampshire</SelectItem>
                          <SelectItem value="NJ">New Jersey</SelectItem>
                          <SelectItem value="NM">New Mexico</SelectItem>
                          <SelectItem value="NY">New York</SelectItem>
                          <SelectItem value="NC">North Carolina</SelectItem>
                          <SelectItem value="ND">North Dakota</SelectItem>
                          <SelectItem value="OH">Ohio</SelectItem>
                          <SelectItem value="OK">Oklahoma</SelectItem>
                          <SelectItem value="OR">Oregon</SelectItem>
                          <SelectItem value="PA">Pennsylvania</SelectItem>
                          <SelectItem value="RI">Rhode Island</SelectItem>
                          <SelectItem value="SC">South Carolina</SelectItem>
                          <SelectItem value="SD">South Dakota</SelectItem>
                          <SelectItem value="TN">Tennessee</SelectItem>
                          <SelectItem value="TX">Texas</SelectItem>
                          <SelectItem value="UT">Utah</SelectItem>
                          <SelectItem value="VT">Vermont</SelectItem>
                          <SelectItem value="VA">Virginia</SelectItem>
                          <SelectItem value="WA">Washington</SelectItem>
                          <SelectItem value="WV">West Virginia</SelectItem>
                          <SelectItem value="WI">Wisconsin</SelectItem>
                          <SelectItem value="WY">Wyoming</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-gray-700 font-medium">
                        Phone Number (Optional)
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="Your phone number"
                        className="mt-1 bg-white border-gray-300"
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        We'll only use this to send you important updates about unclaimed money in your area.
                      </p>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-[#f9b000] hover:bg-[#e0a000] text-black font-bold text-lg py-6 uppercase"
                    >
                      GET MY FREE GUIDE NOW
                    </Button>
                  </div>
                </form>
              </div>

              <div className="md:col-span-2">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-[#092e54] mb-4">Why We Need This Information:</h3>
                  <p className="text-gray-700 mb-4">
                    Unclaimed money laws and procedures vary by state. We customize your guide based on your location to
                    provide the most accurate information.
                  </p>

                  <div className="flex items-center mt-6 mb-2">
                    <div className="relative w-10 h-10 mr-3">
                      <Image src="/placeholder.svg?height=40&width=40" alt="Secure" fill className="object-contain" />
                    </div>
                    <span className="text-gray-700 font-medium">Your information is secure</span>
                  </div>

                  <div className="flex items-center">
                    <div className="relative w-10 h-10 mr-3">
                      <Image src="/placeholder.svg?height=40&width=40" alt="Privacy" fill className="object-contain" />
                    </div>
                    <span className="text-gray-700 font-medium">We respect your privacy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
