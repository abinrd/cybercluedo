"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trash2, Plus } from "lucide-react"

type Member = { name: string; email: string }

export default function TeamSignup() {
    const [teamName, setTeamName] = useState("")
    const [ownerName, setOwnerName] = useState("")
    const [ownerEmail, setOwnerEmail] = useState("")
    const [ownerPassword, setOwnerPassword] = useState("")
    const [members, setMembers] = useState<Member[]>([])
    const [loading, setLoading] = useState(false)
    const [msg, setMsg] = useState<string | null>(null)

    const addMember = () => {
        if (members.length < 4) { // Max 4 additional members (5 total with owner)
            setMembers([...members, { name: "", email: "" }])
        }
    }

    const removeMember = (idx: number) => {
        setMembers(members.filter((_, i) => i !== idx))
    }

    const updateMember = (idx: number, field: keyof Member, value: string) => {
        setMembers((prev) => prev.map((m, i) => (i === idx ? { ...m, [field]: value } : m)))
    }

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setMsg(null)
        
        // Filter out empty members (both name and email must be filled)
        const validMembers = members.filter(m => m.name.trim() && m.email.trim())
        
        try {
            const res = await fetch("/api/signup", { // Fixed endpoint
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    teamName,
                    owner: { name: ownerName, email: ownerEmail, password: ownerPassword },
                    members: validMembers,
                }),
            });
            
            const ct = res.headers.get('content-type') || '';
            if (!res.ok) {
                const text = await res.text();
                throw new Error(`Signup failed`);
            }
            if (!ct.includes('application/json')) {
                const text = await res.text();
                throw new Error("server side issue");
            }

            const data = await res.json();
            setMsg(`Success! Team created. You can now log in.`);
            window.location.href = '/';
        } catch (err: any) {
            setMsg(err.message || "Error")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen min-w-screen bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900 flex items-center justify-center p-4">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl animate-pulse delay-500"></div>
            </div>

            <Card className="w-full max-w-2xl bg-black/40 backdrop-blur-xl border-blue-500/30 shadow-2xl relative z-10">
                <CardHeader className="text-center pb-8">
                    <CardTitle className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 bg-clip-text text-transparent">
                        CYBER CLUEDO
                    </CardTitle>
                    <p className="text-blue-200 text-lg mt-2">Team Registration</p>
                    <div className="flex justify-center items-center gap-4 mt-4 text-sm">
                        <div className="bg-blue-500/20 px-3 py-1 rounded-full border border-blue-400/30">
                            <span className="text-blue-300">Prize Pool: ₹1500</span>
                        </div>
                        <div className="bg-cyan-500/20 px-3 py-1 rounded-full border border-cyan-400/30">
                            <span className="text-cyan-300">Team Size: 1-5 Members</span>
                        </div>
                    </div>
                </CardHeader>

                <CardContent className="space-y-6">
                    <form onSubmit={onSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="teamName" className="text-blue-200 font-medium">
                                Team Name
                            </Label>
                            <Input
                                id="teamName"
                                value={teamName}
                                onChange={(e) => setTeamName(e.target.value)}
                                required
                                className="bg-blue-950/50 border-blue-500/30 text-white placeholder:text-blue-300/50 focus:border-blue-400 focus:ring-blue-400/20"
                                placeholder="Enter your team name"
                            />
                        </div>

                        <Card className="bg-blue-950/30 border-blue-500/20">
                            <CardHeader className="pb-4">
                                <CardTitle className="text-blue-200 text-lg">Team Owner</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="ownerName" className="text-blue-200">
                                            Name
                                        </Label>
                                        <Input
                                            id="ownerName"
                                            value={ownerName}
                                            onChange={(e) => setOwnerName(e.target.value)}
                                            required
                                            className="bg-blue-950/50 border-blue-500/30 text-white placeholder:text-blue-300/50 focus:border-blue-400 focus:ring-blue-400/20"
                                            placeholder="Owner name"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="ownerEmail" className="text-blue-200">
                                            Email
                                        </Label>
                                        <Input
                                            id="ownerEmail"
                                            type="email"
                                            value={ownerEmail}
                                            onChange={(e) => setOwnerEmail(e.target.value)}
                                            required
                                            className="bg-blue-950/50 border-blue-500/30 text-white placeholder:text-blue-300/50 focus:border-blue-400 focus:ring-blue-400/20"
                                            placeholder="owner@example.com"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="ownerPassword" className="text-blue-200">
                                        Password
                                    </Label>
                                    <Input
                                        id="ownerPassword"
                                        type="password"
                                        value={ownerPassword}
                                        onChange={(e) => setOwnerPassword(e.target.value)}
                                        required
                                        className="bg-blue-950/50 border-blue-500/30 text-white placeholder:text-blue-300/50 focus:border-blue-400 focus:ring-blue-400/20"
                                        placeholder="Create a password"
                                    />
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="bg-cyan-950/30 border-cyan-500/20">
                            <CardHeader className="pb-4 flex flex-row items-center justify-between">
                                <CardTitle className="text-cyan-200 text-lg">
                                    Team Members ({members.length}/4)
                                </CardTitle>
                                <Button
                                    type="button"
                                    onClick={addMember}
                                    disabled={members.length >= 4}
                                    className="bg-cyan-600/20 hover:bg-cyan-600/30 text-cyan-300 border border-cyan-500/30 p-2 h-auto"
                                >
                                    <Plus className="h-4 w-4" />
                                </Button>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                {members.length === 0 ? (
                                    <div className="text-center text-cyan-300/60 py-8">
                                        <p>No additional members added yet.</p>
                                        <p className="text-sm">Click the + button to add team members (optional)</p>
                                    </div>
                                ) : (
                                    members.map((m, i) => (
                                        <div key={i} className="space-y-4 p-4 bg-cyan-950/20 rounded-lg border border-cyan-500/10">
                                            <div className="flex items-center justify-between">
                                                <h4 className="text-cyan-300 font-medium">Member {i + 1}</h4>
                                                <Button
                                                    type="button"
                                                    onClick={() => removeMember(i)}
                                                    className="bg-red-600/20 hover:bg-red-600/30 text-red-300 border border-red-500/30 p-2 h-auto"
                                                >
                                                    <Trash2 className="h-4 w-4" />
                                                </Button>
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="space-y-2">
                                                    <Label className="text-cyan-200">Name</Label>
                                                    <Input
                                                        value={m.name}
                                                        onChange={(e) => updateMember(i, "name", e.target.value)}
                                                        className="bg-cyan-950/50 border-cyan-500/30 text-white placeholder:text-cyan-300/50 focus:border-cyan-400 focus:ring-cyan-400/20"
                                                        placeholder={`Member ${i + 1} name`}
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label className="text-cyan-200">Email</Label>
                                                    <Input
                                                        type="email"
                                                        value={m.email}
                                                        onChange={(e) => updateMember(i, "email", e.target.value)}
                                                        className="bg-cyan-950/50 border-cyan-500/30 text-white placeholder:text-cyan-300/50 focus:border-cyan-400 focus:ring-cyan-400/20"
                                                        placeholder={`member${i + 1}@example.com`}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </CardContent>
                        </Card>

                        <div className="text-center text-blue-300/60 text-sm">
                            <p>Current team size: {1 + members.filter(m => m.name.trim() && m.email.trim()).length} member(s)</p>
                            <p>You can create a team with just the owner, or add up to 4 additional members.</p>
                        </div>

                        <Button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                        >
                            {loading ? (
                                <div className="flex items-center gap-2">
                                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                    Creating Team...
                                </div>
                            ) : (
                                "CREATE TEAM"
                            )}
                        </Button>

                        {msg && (
                            <div
                                className={`p-4 rounded-lg border ${msg.startsWith("Success")
                                        ? "bg-green-950/50 border-green-500/30 text-green-300"
                                        : "bg-red-950/50 border-red-500/30 text-red-300"
                                    }`}
                            >
                                {msg}
                            </div>
                        )}
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}