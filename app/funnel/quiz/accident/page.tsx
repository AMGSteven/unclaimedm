import QuizQuestion from "@/components/quiz-question"

export default function AccidentQuizPage() {
  return (
    <QuizQuestion
      question="Have you or a loved one been injured in an accident in the last 24 months?"
      questionId="accident"
      options={[
        { value: "last_3_months", label: "In the last 3 months" },
        { value: "last_3_6_months", label: "In the last 3–6 months" },
        { value: "last_6_12_months", label: "In the last 6–12 months" },
        { value: "last_12_24_months", label: "In the last 12–24 months" },
        { value: "no_accident", label: "No accident" },
      ]}
    />
  )
}
