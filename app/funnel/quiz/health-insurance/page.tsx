import QuizQuestion from "@/components/quiz-question"

export default function HealthInsuranceQuizPage() {
  return (
    <QuizQuestion
      question="Do you want to see if you qualify for free or low-cost health insurance?"
      questionId="health-insurance"
      options={[
        { value: "yes", label: "Yes, check now" },
        { value: "no", label: "No thanks" },
      ]}
    />
  )
}
