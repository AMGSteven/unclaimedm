import MonetizableQuestion from "@/components/monetizable-question"

export default function InjuryQuizPage() {
  return (
    <MonetizableQuestion
      question="Have you or someone you love been injured recently?"
      questionId="injury"
      options={[
        { value: "last_3_months", label: "Yes, in the last 3 months" },
        { value: "last_year", label: "Yes, in the last year" },
        { value: "no", label: "No" },
      ]}
    />
  )
}
