import { NextRequest, NextResponse } from 'next/server'

// Correct answers from your environment
const CORRECT_ANSWERS: Record<number, string> = {
  1: "j.taylor",
  2: "192.168.1.13",
  3: "Sarah Mitchell",
  4: "ftp://192.168.1.45:21/",
  5: "novatech2025",
  6: "Project_Helix_Pass:access_2025"
}

// Evidence patterns to match against (partial matching)
const EVIDENCE_PATTERNS = [
  "Login attempt to financial system by user 'j.taylor'",
  "Web server access to /backup/helix_specs.zip from 192.168.1.45",
  "Archive file helix_specs.zip compressed into smaller chunks",
  "Firewall alert: outbound transfer to external IP 185.222.81.14",
  "Suspicious PowerShell script executed on workstation 192.168.1.45 (Jennifer Taylor)",
  "Failed password for jtaylor from 192.168.1.45",
  "Failed password for admin from 192.168.1.45",
  "Failed password for root from 192.168.1.45",
  "jtaylor : TTY=pts/3 ; PWD=/home/jtaylor ; USER=root ; COMMAND=/bin/cp",
  "/home/jtaylor/helix_specs.txt -> /tmp/helix_specs.txt",
  "FTP STOR command received for helix_specs.txt from 192.168.1.45",
  'GET /backup/helix_specs.zip?download=true&auth=bypass HTTP/1.1" 200',
  'POST /powershell/exec.ps1 HTTP/1.1" 200 642 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
]

// Define types for the request data
interface QuizAnswer {
  questionId: number;
  answer: string;
}

interface ScoreRequest {
  quizAnswers: QuizAnswer[];
  evidenceFound: string[];
}

interface QuestionDetail {
  correct: boolean;
  points: number;
  userAnswer: string;
  correctAnswer: string;
}

interface EvidenceDetail {
  found: boolean;
  points: number;
  userInput: string;
}

interface ScoreDetails {
  questions: Record<string, QuestionDetail>;
  evidence: Record<string, EvidenceDetail>;
}

interface ScoreResponse {
  totalScore: number;
  questionScore: number;
  evidenceScore: number;
  maxPossible: number;
  details: ScoreDetails;
}

// Function to check if evidence text contains the pattern (case insensitive, partial match)
function checkEvidenceMatch(userInput: string, pattern: string): boolean {
  const normalizedInput = userInput.toLowerCase().trim()
  const normalizedPattern = pattern.toLowerCase().trim()
  return normalizedInput.includes(normalizedPattern)
}

export async function POST(request: NextRequest) {
  try {
    const { quizAnswers, evidenceFound }: ScoreRequest = await request.json()

    // Calculate question score
    let questionScore = 0
    const questionDetails: Record<string, QuestionDetail> = {}
    
    quizAnswers.forEach((answer: QuizAnswer) => {
      const correctAnswer = CORRECT_ANSWERS[answer.questionId]
      // Ensure we always get a boolean value
      const isCorrect = Boolean(correctAnswer && 
        answer.answer.trim().toLowerCase() === correctAnswer.toLowerCase())
      
      if (isCorrect) {
        questionScore += 5
      }
      
      questionDetails[answer.questionId] = {
        correct: isCorrect,
        points: isCorrect ? 5 : 0,
        userAnswer: answer.answer,
        correctAnswer: correctAnswer || "Unknown" // Provide a fallback value
      }
    })

    // Calculate evidence score
    let evidenceScore = 0
    const evidenceDetails: Record<string, EvidenceDetail> = {}
    
    // Initialize all evidence as not found
    EVIDENCE_PATTERNS.forEach((pattern, index) => {
      evidenceDetails[index + 1] = {
        found: false,
        points: 0,
        userInput: ""
      }
    })
    
    // Check which evidence was found using partial matching
    evidenceFound.forEach((userEvidence: string) => {
      let foundMatch = false
      let matchedIndex = -1
      
      // Check if user's evidence matches any pattern
      for (let i = 0; i < EVIDENCE_PATTERNS.length; i++) {
        if (checkEvidenceMatch(userEvidence, EVIDENCE_PATTERNS[i])) {
          foundMatch = true
          matchedIndex = i
          break
        }
      }
      
      if (foundMatch && matchedIndex !== -1) {
        // Check if this evidence hasn't been found already
        if (!evidenceDetails[matchedIndex + 1].found) {
          evidenceScore += 10
          evidenceDetails[matchedIndex + 1] = {
            found: true,
            points: 10,
            userInput: userEvidence
          }
        }
      }
    })

    const totalScore = questionScore + evidenceScore
    const maxPossible = 30 + (EVIDENCE_PATTERNS.length * 10) // 6 questions × 5 + 13 evidence × 10

    const response: ScoreResponse = {
      totalScore,
      questionScore,
      evidenceScore,
      maxPossible,
      details: {
        questions: questionDetails,
        evidence: evidenceDetails
      }
    }

    return NextResponse.json(response)
  } catch (error) {
    console.error('Error calculating score:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}