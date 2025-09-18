"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const quizQuestions = [
  { id: 1, question: "Who do you think is responsible for the breach?" },
  { id: 2, question: "Which department handles IT security?" },
  { id: 3, question: "Who is the CEO of NovaTech?" },
]

export function QuizBar() {
  const [answers, setAnswers] = useState<string[]>(Array(quizQuestions.length).fill(""))
  const [bonusEvidence, setBonusEvidence] = useState<string[]>([""]) // starts with one field
  const [submitted, setSubmitted] = useState(false)

  const handleQuizChange = (index: number, value: string) => {
    const newAnswers = [...answers]
    newAnswers[index] = value
    setAnswers(newAnswers)
  }

  const handleEvidenceChange = (index: number, value: string) => {
    const newEvidence = [...bonusEvidence]
    newEvidence[index] = value
    setBonusEvidence(newEvidence)
  }

  const addEvidenceField = () => {
    setBonusEvidence([...bonusEvidence, ""])
  }

  const handleSubmit = () => {
    if (answers.every((ans) => ans.trim() !== "")) {
      console.log("Quiz Answers:", answers)
      console.log("Bonus Evidence:", bonusEvidence.filter((e) => e.trim() !== ""))
      setSubmitted(true)
    } else {
      alert("Please answer all questions before submitting.")
    }
  }

  return (
    <div className="space-y-6 bg-black/30 p-6 rounded-lg border border-blue-500/30 text-white">
      {submitted ? (
        <div className="text-center text-green-400">
          <p className="text-xl font-bold">✅ Quiz submitted successfully with evidence! You may continue.</p>
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault()
            handleSubmit()
          }}
          className="space-y-6"
        >
          {/* Quiz Questions */}
          {quizQuestions.map((q, idx) => (
            <div key={q.id} className="space-y-2">
              <p className="font-semibold">
                Q{q.id}. {q.question}
              </p>
              <Input
                type="text"
                placeholder="Type your answer..."
                value={answers[idx]}
                onChange={(e) => handleQuizChange(idx, e.target.value)}
                className="bg-gray-800 text-white"
              />
            </div>
          ))}

          {/* Bonus Evidence Section */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-blue-300">Bonus Evidence</h3>
            {bonusEvidence.map((ev, idx) => (
              <Input
                key={idx}
                type="text"
                placeholder={`Evidence ${idx + 1}`}
                value={ev}
                onChange={(e) => handleEvidenceChange(idx, e.target.value)}
                className="bg-gray-800 text-white"
              />
            ))}
            <Button
              type="button"
              onClick={addEvidenceField}
              className="w-full bg-green-600 hover:bg-green-700"
            >
              ➕ Add More Evidence
            </Button>
          </div>

          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
            Submit Quiz & Evidence
          </Button>
        </form>
      )}
    </div>
  )
}
