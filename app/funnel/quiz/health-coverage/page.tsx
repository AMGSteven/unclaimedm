import MonetizableQuestion from "@/components/monetizable-question"

export default function HealthCoverageQuizPage() {
  return (
    <MonetizableQuestion
      question="Do you qualify for free or discounted health coverage?"
      questionId="health-coverage"
      options={[
        { value: "check", label: "Check Eligibility" },
        { value: "have", label: "I have insurance" },
        { value: "no", label: "No thanks" },
      ]}
    />
  )
}
