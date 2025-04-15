import MonetizableQuestion from "@/components/monetizable-question"

export default function GovernmentBenefitsQuizPage() {
  return (
    <MonetizableQuestion
      question="Are you receiving or applying for government benefits like SSDI, SSI, SNAP, or TANF?"
      questionId="government-benefits"
      options={[
        { value: "yes", label: "Yes" },
        { value: "no", label: "No" },
        { value: "not_sure", label: "Not sure" },
      ]}
    />
  )
}
