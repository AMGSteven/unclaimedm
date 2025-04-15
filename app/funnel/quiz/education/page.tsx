import QuizQuestion from "@/components/quiz-question"

export default function EducationQuizPage() {
  return (
    <QuizQuestion
      question="What do you want to study?"
      questionId="education"
      options={[
        { value: "business", label: "Business" },
        { value: "criminal_justice", label: "Criminal Justice & Legal" },
        { value: "health_medicine", label: "Health & Medicine" },
        { value: "math_science", label: "Math, Science & Engineering" },
        { value: "vocational", label: "Vocational Training" },
        { value: "public_affairs", label: "Public Affairs & Social Sciences" },
        { value: "fine_arts", label: "Fine Arts & Design" },
        { value: "technology", label: "Technology" },
        { value: "no_thanks", label: "No thanks" },
      ]}
    />
  )
}
