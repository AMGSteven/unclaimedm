import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { submitPhoneForm } from "@/lib/actions"

export default function PhoneCapturePage() {
  return (
    <div className="max-w-md mx-auto">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold text-center text-[#0a2d5e] mb-6">
          One More Step to Find Your Unclaimed Money
        </h2>

        <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
          <div className="bg-blue-600 h-2 rounded-full" style={{ width: "50%" }}></div>
        </div>

        <form action={submitPhoneForm} className="space-y-6">
          <div>
            <Label htmlFor="phone" className="font-medium text-gray-700">
              Mobile Phone Number
            </Label>
            <Input id="phone" name="phone" type="tel" placeholder="(555) 555-5555" required className="w-full mt-1" />
          </div>

          <div className="space-y-4">
            <div className="flex items-start space-x-2">
              <Checkbox id="tcpaConsent" name="tcpaConsent" required className="mt-1" />
              <Label htmlFor="tcpaConsent" className="text-xs text-gray-600">
                By checking this box, I agree to receive telemarketing calls and text messages via automated technology
                from unclaimedmoneyinfo.com and its marketing partners at the phone number provided above. I understand
                that consent is not a condition of purchase and that message and data rates may apply. Reply STOP to
                cancel. Reply HELP for help.
              </Label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded transition-colors"
          >
            Agree & Continue
          </button>
        </form>
      </div>
    </div>
  )
}
