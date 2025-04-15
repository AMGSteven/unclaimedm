import QuizQuestion from "@/components/quiz-question"

export default function BadCreditQuizPage() {
  return (
    <QuizQuestion
      question="Are you looking for a credit card that approves poor or no credit?"
      questionId="bad-credit"
      options={[
        { value: "yes", label: "Yes, I'm interested" },
        { value: "no", label: "No thanks" },
      ]}
    />
  )
}
