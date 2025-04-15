import MonetizableQuestion from "@/components/monetizable-question"

export default function CarInsuranceQuizPage() {
  return (
    <MonetizableQuestion
      question="Do you want to lower your car insurance payments?"
      questionId="car-insurance"
      subheadline="Rates as low as $19/month"
      options={[
        { value: "start_saving", label: "Start Saving" },
        { value: "already_switched", label: "I already switched" },
        { value: "no", label: "No thanks" },
      ]}
    />
  )
}
