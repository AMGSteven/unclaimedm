import MonetizableQuestion from "@/components/monetizable-question"

export default function CreditCardQuizPage() {
  return (
    <MonetizableQuestion
      question="Have you been denied a credit card due to your score?"
      questionId="credit-card"
      options={[
        { value: "yes", label: "Yes, help me get approved" },
        { value: "not_applied", label: "I haven't applied" },
        { value: "no", label: "No thanks" },
      ]}
    />
  )
}
