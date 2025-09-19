"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { RefreshCw, Trophy, Clock, Users, Shield, AlertTriangle } from "lucide-react"

// Types for the data structure
interface Team {
  id: string
  name: string
  points: number
  submissionTime: number // in minutes from start
  status: 'active' | 'completed' | 'failed'
  
}

// Mock data - replace with actual API call
const mockTeams: Team[] = [
  {
    id: "T001",
    name: "Cyber Hawks",
    points: 100,
    submissionTime: 23,
    status: 'completed',

  },
  {
    id: "T002", 
    name: "Digital Forensics Unit",
    points: 85,
    submissionTime: 31,
    status: 'completed',
 
  },
  {
    id: "T003",
    name: "Network Defenders",
    points: 45,
    submissionTime: 0,
    status: 'active',
   
  },
  {
    id: "T004",
    name: "Security Analysts",
    points: 30,
    submissionTime: 0,
    status: 'active', 

  },
  {
    id: "T005",
    name: "Threat Hunters",
    points: 0,
    submissionTime: 0,
    status: 'failed',
  }
]

export default function AdminDashboard() {
  const [teams, setTeams] = useState<Team[]>(mockTeams)
  const [isLoading, setIsLoading] = useState(false)
  const [eventStartTime] = useState(new Date('2025-09-19T14:00:00'))
  const [currentTime, setCurrentTime] = useState(new Date())

  // Update current time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  // Function to fetch data from backend
  const fetchTeamData = async () => {
    setIsLoading(true)
    try {
      // Replace with actual API endpoint
      // const response = await fetch('/api/admin/teams')
      // const data = await response.json()
      // setTeams(data)
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      setTeams([...mockTeams]) // Refresh with mock data
    } catch (error) {
      console.error('Failed to fetch team data:', error)
    } finally {
      setIsLoading(false)
    }
  }

  // Sort teams by points (descending) and then by submission time (ascending)
  const sortedTeams = [...teams].sort((a, b) => {
    if (b.points !== a.points) return b.points - a.points
    if (a.status === 'completed' && b.status === 'completed') {
      return a.submissionTime - b.submissionTime
    }
    return 0
  })

  const getStatusBadge = (status: Team['status']) => {
    const variants = {
      'completed': 'default',
      'active': 'secondary', 
      'failed': 'destructive'
    } as const
    
    const labels = {
      'completed': 'MISSION COMPLETE',
      'active': 'INVESTIGATING',
      'failed': 'COMPROMISED'
    }

    return <Badge variant={variants[status]}>{labels[status]}</Badge>
  }

  const formatTime = (minutes: number) => {
    if (minutes === 0) return '-'
    return `${minutes}m`
  }

  const getElapsedTime = () => {
    const elapsed = Math.floor((currentTime.getTime() - eventStartTime.getTime()) / (1000 * 60))
    return Math.max(0, elapsed)
  }

  const activeTeams = teams.filter(t => t.status === 'active').length
  const completedTeams = teams.filter(t => t.status === 'completed').length
  const compromisedTeams = teams.filter(t => t.status === 'failed').length

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-red-500 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-orange-500 rounded-full blur-lg animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-yellow-500 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(239, 68, 68, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(239, 68, 68, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white flex items-center gap-3">
                <Shield className="h-8 w-8 text-red-500" />
                CYa - COMMAND CENTER
              </h1>
              <p className="text-slate-400 mt-2">CYa Cybersecurity Investigation Dashboard</p>
            </div>
            <Button 
              onClick={fetchTeamData} 
              disabled={isLoading}
              className="bg-red-600 hover:bg-red-700"
            >
              {isLoading ? (
                <RefreshCw className="h-4 w-4 animate-spin mr-2" />
              ) : (
                <RefreshCw className="h-4 w-4 mr-2" />
              )}
              Refresh Intel
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-slate-400">ACTIVE INVESTIGATIONS</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-blue-500" />
                <span className="text-2xl font-bold text-white">{activeTeams}</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-slate-400">MISSIONS COMPLETED</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-green-500" />
                <span className="text-2xl font-bold text-white">{completedTeams}</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-slate-400">COMPROMISED UNITS</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-red-500" />
                <span className="text-2xl font-bold text-white">{compromisedTeams}</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-slate-400">OPERATION TIME</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-orange-500" />
                <span className="text-2xl font-bold text-white">{getElapsedTime()}m</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Teams Table */}
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">INVESTIGATION TEAMS LEADERBOARD</CardTitle>
            <CardDescription className="text-slate-400">
              Real-time status of all investigation units
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="border-slate-700">
                  <TableHead className="text-slate-300">RANK</TableHead>
                  <TableHead className="text-slate-300">TEAM ID</TableHead>
                  <TableHead className="text-slate-300">UNIT NAME</TableHead>
                  <TableHead className="text-slate-300">POINTS</TableHead>
                  <TableHead className="text-slate-300">COMPLETION TIME</TableHead>
                  <TableHead className="text-slate-300">STATUS</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sortedTeams.map((team, index) => (
                  <TableRow key={team.id} className="border-slate-700 hover:bg-slate-700/30">
                    <TableCell className="text-white font-bold">
                      {index < 3 ? (
                        <div className="flex items-center gap-2">
                          {index === 0 && <Trophy className="h-4 w-4 text-yellow-500" />}
                          {index === 1 && <Trophy className="h-4 w-4 text-slate-400" />}
                          {index === 2 && <Trophy className="h-4 w-4 text-orange-600" />}
                          #{index + 1}
                        </div>
                      ) : (
                        `#${index + 1}`
                      )}
                    </TableCell>
                    <TableCell className="text-slate-300 font-mono">{team.id}</TableCell>
                    <TableCell className="text-white font-medium">{team.name}</TableCell>
                    <TableCell className="text-white font-bold text-lg">{team.points}</TableCell>
                    <TableCell className="text-slate-300">{formatTime(team.submissionTime)}</TableCell>
                    <TableCell>{getStatusBadge(team.status)}</TableCell>
                    <TableCell>
                      <div className="flex gap-1">
                        
                      </div>
                    </TableCell>
                    <TableCell className="text-slate-400 text-sm font-mono">
                     
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}