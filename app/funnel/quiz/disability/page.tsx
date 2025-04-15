import QuizQuestion from "@/components/quiz-question"

export default function DisabilityQuizPage() {
  return (
    <QuizQuestion
      question="Are you currently receiving or applying for Social Security, SSI, or Disability benefits?"
      questionId="disability"
      options={[
        { value: "yes", label: "Yes" },
        { value: "no", label: "No" },
        { value: "not_sure", label: "I'm not sure" },
      ]}
    />
  )
}
