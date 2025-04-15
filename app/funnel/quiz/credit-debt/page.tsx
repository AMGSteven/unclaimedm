import MonetizableQuestion from "@/components/monetizable-question"

export default function CreditDebtQuizPage() {
  return (
    <MonetizableQuestion
      question="Are you struggling with more than $10,000 in credit card debt?"
      questionId="credit-debt"
      options={[
        { value: "yes", label: "Yes, I need help" },
        { value: "no", label: "No, I'm okay" },
      ]}
    />
  )
}
