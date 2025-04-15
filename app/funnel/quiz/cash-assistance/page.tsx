import QuizQuestion from "@/components/quiz-question"

export default function CashAssistanceQuizPage() {
  return (
    <QuizQuestion
      question="Would you be interested in monthly government cash benefits if you qualified?"
      questionId="cash-assistance"
      options={[
        { value: "yes", label: "Yes, show me" },
        { value: "maybe", label: "Maybe" },
        { value: "not_now", label: "Not right now" },
      ]}
    />
  )
}
