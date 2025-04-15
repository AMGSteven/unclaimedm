import QuizQuestion from "@/components/quiz-question"

export default function CreditCardDebtQuizPage() {
  return (
    <QuizQuestion
      question="Are you currently struggling with over $10,000 in credit card debt?"
      questionId="credit-card-debt"
      options={[
        { value: "yes", label: "Yes, I need help" },
        { value: "no", label: "No, I'm okay for now" },
      ]}
    />
  )
}
