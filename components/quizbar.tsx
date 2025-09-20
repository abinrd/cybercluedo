"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, XCircle, Trophy, Star } from "lucide-react"
import Cookies from "js-cookie";

interface QuizAnswer {
  questionId: number;
  answer: string;
}

interface ScoreResult {
  totalScore: number;
  questionScore: number;
  evidenceScore: number;
  maxPossible: number;
  details: {
    questions: Record<string, { correct: boolean, points: number, userAnswer: string, correctAnswer: string }>;
    evidence: Record<string, { found: boolean, points: number, userInput: string }>;
  };
}

const quizQuestions = [
  { id: 1, question: "What was the system name which was responsible for the breach?" },
  { id: 2, question: "What is the IP of the person who handles IT security?" },
  { id: 3, question: "Who is the CEO of NovaTech?" },
  { id: 4, question: "What was the complete connection string used for the transfer?"},
  { id: 5, question: "In the FTP payload capture, what password was used for authentication?"},
  { id: 6, question: "What was the decoded hidden string found in the image provided?"},
  { id: 7, question: "What is the final flag to complete the challenge? format:FLAG{........}"},
]

// Storage keys
const STORAGE_KEYS = {
  ANSWERS: 'helix_quiz_answers',
  EVIDENCE: 'helix_quiz_evidence',
  SUBMITTED: 'helix_quiz_submitted',
  SCORE_RESULT: 'helix_score_result'
}

export function QuizBar() {
  const [answers, setAnswers] = useState<string[]>(Array(quizQuestions.length).fill(""))
  const [evidence, setEvidence] = useState<string[]>([""])
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [scoreResult, setScoreResult] = useState<ScoreResult | null>(null)
  const [finalSubmitted, setFinalSubmitted] = useState("")
  const [isLoaded, setIsLoaded] = useState(false)

  // Load data from localStorage on component mount
  useEffect(() => {
    const loadPersistedData = () => {
      try {
        // Load answers
        const savedAnswers = localStorage.getItem(STORAGE_KEYS.ANSWERS)
        if (savedAnswers) {
          const parsedAnswers = JSON.parse(savedAnswers)
          if (Array.isArray(parsedAnswers) && parsedAnswers.length === quizQuestions.length) {
            setAnswers(parsedAnswers)
          }
        }

        // Load evidence
        const savedEvidence = localStorage.getItem(STORAGE_KEYS.EVIDENCE)
        if (savedEvidence) {
          const parsedEvidence = JSON.parse(savedEvidence)
          if (Array.isArray(parsedEvidence) && parsedEvidence.length > 0) {
            setEvidence(parsedEvidence)
          }
        }

        // Load submission status
        const savedSubmitted = localStorage.getItem(STORAGE_KEYS.SUBMITTED)
        if (savedSubmitted === 'true') {
          setSubmitted(true)
          
          // Load score result if submitted
          const savedScoreResult = localStorage.getItem(STORAGE_KEYS.SCORE_RESULT)
          if (savedScoreResult) {
            setScoreResult(JSON.parse(savedScoreResult))
          }
        }

        // Load cookie status
        setFinalSubmitted(Cookies.get('finalSubmitted') || "")
        
        setIsLoaded(true)
      } catch (error) {
        console.error('Error loading persisted data:', error)
        setIsLoaded(true)
      }
    }

    loadPersistedData()
  }, [])

  // Save answers to localStorage whenever they change
  useEffect(() => {
    if (isLoaded && !submitted) {
      try {
        localStorage.setItem(STORAGE_KEYS.ANSWERS, JSON.stringify(answers))
      } catch (error) {
        console.error('Error saving answers:', error)
      }
    }
  }, [answers, isLoaded, submitted])

  // Save evidence to localStorage whenever it changes
  useEffect(() => {
    if (isLoaded && !submitted) {
      try {
        localStorage.setItem(STORAGE_KEYS.EVIDENCE, JSON.stringify(evidence))
      } catch (error) {
        console.error('Error saving evidence:', error)
      }
    }
  }, [evidence, isLoaded, submitted])

  // Auto-save functionality on input change
  const handleQuizChange = (index: number, value: string) => {
    const newAnswers = [...answers]
    newAnswers[index] = value
    setAnswers(newAnswers)
  }

  const handleEvidenceChange = (index: number, value: string) => {
    const newEvidence = [...evidence]
    newEvidence[index] = value
    setEvidence(newEvidence)
  }

  const addEvidenceField = () => {
    setEvidence([...evidence, ""])
  }

  const removeEvidenceField = (index: number) => {
    if (evidence.length > 1) {
      const newEvidence = evidence.filter((_, i) => i !== index)
      setEvidence(newEvidence)
    }
  }

  const clearPersistedData = () => {
    try {
      localStorage.removeItem(STORAGE_KEYS.ANSWERS)
      localStorage.removeItem(STORAGE_KEYS.EVIDENCE)
      localStorage.removeItem(STORAGE_KEYS.SUBMITTED)
      localStorage.removeItem(STORAGE_KEYS.SCORE_RESULT)
    } catch (error) {
      console.error('Error clearing persisted data:', error)
    }
  }

  const handleSubmit = async () => {
    if (answers.some(ans => ans.trim() === "")) {
      alert("Please answer all questions before submitting.")
      return
    }

    setIsSubmitting(true)
    
    try {
      const quizAnswers: QuizAnswer[] = answers.map((answer, index) => ({
        questionId: index + 1,
        answer: answer.trim()
      }))

      const evidenceFound = evidence.filter(e => e.trim() !== "")

      const response = await fetch('/api/calculate-score', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          quizAnswers,
          evidenceFound
        })
      })

      if (response.ok) {
        const result: ScoreResult = await response.json()
        setScoreResult(result)
        setSubmitted(true)
        
        // Save to cookie and localStorage
        Cookies.set('finalSubmitted', 'true');
        localStorage.setItem(STORAGE_KEYS.SUBMITTED, 'true')
        localStorage.setItem(STORAGE_KEYS.SCORE_RESULT, JSON.stringify(result))
        
        setFinalSubmitted('true');
      } else {
        throw new Error('Failed to calculate score')
      }
    } catch (error) {
      console.error('Error submitting quiz:', error)
      alert('Error submitting quiz. Please try again.')
    } finally {
      setIsSubmitting(false);
    }
  }

  const calculatePercentage = (score: number, max: number) => {
    return Math.round((score / max) * 100)
  }

  // Show loading state while data is being loaded
  if (!isLoaded) {
    return (
      <div className="space-y-6 bg-black/30 p-6 rounded-lg border border-blue-500/30 text-white">
        <div className="text-center">
          <p className="text-lg">Loading quiz data...</p>
        </div>
      </div>
    )
  }

  if (submitted && scoreResult) {
    return (
      <div className="space-y-6 bg-black/30 p-6 rounded-lg border border-blue-500/30 text-white">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <Trophy className="h-12 w-12 text-yellow-400" />
          </div>
          <h2 className="text-2xl font-bold text-green-400 mb-2">Quiz Submitted Successfully!</h2>
          <p className="text-lg mb-4">Your score: {scoreResult.totalScore}/{scoreResult.maxPossible}</p>
          
          <div className="w-full bg-gray-700 rounded-full h-4 mb-6">
            <div 
              className="bg-gradient-to-r from-blue-500 to-green-500 h-4 rounded-full transition-all duration-500"
              style={{ width: `${calculatePercentage(scoreResult.totalScore, scoreResult.maxPossible)}%` }}
            ></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <Card className="bg-blue-900/30 border-blue-500">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-400" />
                  Questions: {scoreResult.questionScore}/30
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">6 questions × 5 points each</p>
              </CardContent>
            </Card>
            
            <Card className="bg-purple-900/30 border-purple-500">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center">
                  <Star className="h-5 w-5 mr-2 text-yellow-400" />
                  Evidence: {scoreResult.evidenceScore}/130
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">13 evidence × 10 points each</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-left space-y-4">
            <h3 className="text-xl font-semibold border-b border-gray-600 pb-2">Detailed Results</h3>
            
            <div>
              <h4 className="font-semibold text-blue-300 mb-2">Questions:</h4>
              <div className="space-y-2">
                {Object.entries(scoreResult.details.questions).map(([questionId, detail]) => (
                  <div key={questionId} className="flex items-start p-2 bg-gray-800/50 rounded">
                    {detail.correct ? (
                      <CheckCircle className="h-5 w-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                    ) : (
                      <XCircle className="h-5 w-5 text-red-400 mr-2 flex-shrink-0 mt-0.5" />
                    )}
                    <div>
                      <p className="font-medium">Q{questionId}: {detail.correct ? "+5" : "0"}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-blue-300 mb-2">Evidence Found:</h4>
              {(() => {
                const evidenceEntries = Object.values(scoreResult.details.evidence || {});
                const foundCount = evidenceEntries.filter(d => d.found).length;
                const totalCount = evidenceEntries.length;
                const totalPoints = evidenceEntries.reduce(
                  (sum, d) => sum + (d.found ? (typeof d.points === "number" ? d.points : 10) : 0),
                  0
                );

                return (
                  <div className="p-3 bg-gray-800/50 rounded flex items-center space-x-3">
                    {foundCount > 0 ? (
                      <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                    ) : (
                      <XCircle className="h-6 w-6 text-red-400 flex-shrink-0" />
                    )}

                    <div>
                      <p className="font-medium">
                        You found <span className="text-white">{foundCount}</span> of{" "}
                        <span className="text-white">{totalCount}</span> evidences.
                      </p>
                      <p className="text-sm text-blue-200/90">
                        Total points: <span className="font-semibold">{totalPoints}</span>
                      </p>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>

          {/* Option to clear data and start over (for testing purposes) */}
          <div className="mt-6 pt-4 border-t border-gray-600">
            <Button
              onClick={() => {
                if (confirm('Are you sure you want to clear all data and start over? This cannot be undone.')) {
                  clearPersistedData()
                  Cookies.remove('finalSubmitted')
                  window.location.reload()
                }
              }}
              variant="outline"
              className="bg-red-900/30 border-red-600 text-white hover:bg-red-800/40"
            >
              Clear Data & Start Over
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6 bg-black/30 p-6 rounded-lg border border-blue-500/30 text-white">
      {finalSubmitted === "true" ? (
        <div className="text-center">
          <h2 className="text-2xl font-bold text-yellow-400 mb-2">You have already submitted the quiz!</h2>
          <p className="text-lg">Thank you for your participation.</p>
          
          {/* Option to clear data and start over */}
          <div className="mt-6">
            <Button
              onClick={() => {
                if (confirm('Are you sure you want to clear all data and start over? This cannot be undone.')) {
                  clearPersistedData()
                  Cookies.remove('finalSubmitted')
                  window.location.reload()
                }
              }}
              variant="outline"
              className="bg-red-900/30 border-red-600 text-white hover:bg-red-800/40"
            >
              Clear Data & Start Over
            </Button>
          </div>
        </div>
      ) : (
        <>
      
          <form
            onSubmit={(e) => {
              e.preventDefault()
              handleSubmit()
            }}
            className="space-y-6"
          >
            {/* Quiz Questions */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-blue-300 border-b border-blue-500 pb-2">Quiz Questions (5 points each)</h3>
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
                    className="bg-gray-800 text-white border-gray-600"
                    required
                  />
                </div>
              ))}
            </div>

            {/* Evidence Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-green-300 pb-2">Evidence Found (10 points each)</h3>
              <p className="text-md font-bold text-green-300 border-b border-green-500 pb-2">(Evidences That Make Your suspect Guilty)</p>
              <p className="text-sm text-gray-400">Enter evidence you&apos;ve discovered (partial matches accepted)</p>
              {evidence.map((ev, idx) => (
                <div key={idx} className="flex gap-2">
                  <Input
                    type="text"
                    placeholder={`Evidence #${idx + 1}`}
                    value={ev}
                    onChange={(e) => handleEvidenceChange(idx, e.target.value)}
                    className="bg-gray-800 text-white border-gray-600"
                  />
                  {evidence.length > 1 && (
                    <Button
                      type="button"
                      onClick={() => removeEvidenceField(idx)}
                      variant="outline"
                      className="bg-red-900/30 border-red-600 text-white hover:bg-red-800/40"
                    >
                      Remove
                    </Button>
                  )}
                </div>
              ))}
              <Button
                type="button"
                onClick={addEvidenceField}
                variant="outline"
                className="w-full bg-green-900/30 border-green-600 text-white hover:bg-green-800/40"
              >
                ➕ Add More Evidence
              </Button>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Calculating Score..." : "Submit Quiz & Evidence"}
            </Button>
          </form>

          {/* Progress indicator */}
          <div className="mt-4 p-3 bg-blue-900/30 border border-blue-600 rounded-lg">
            <p className="text-sm text-blue-300">
              📊 <strong>Progress:</strong> {answers.filter(a => a.trim() !== "").length}/{quizQuestions.length} questions answered, 
              {evidence.filter(e => e.trim() !== "").length} evidence entries
            </p>
          </div>
        </>
      )}
    </div>
  )
}