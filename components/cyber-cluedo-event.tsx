"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Trophy, Users, MapPin, Calendar, LogIn, LogOut, UserPlus } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
export function CyberCluedoEvent() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [auth, setAuth] = useState(false);
    useEffect(() => {
    const teamId = Cookies.get('teamId');
    if (teamId) {
      setAuth(true);
    } else {
      setAuth(false);
    }
  }, []);


  const handleStartEvent = () => {
    router.push("/event");
  };

  // const handleLogin = () => router.push("/auth/login");
  const handleSignup = () => router.push("/auth/signup");

  const handleLogout = async () => {
    setLoading(true);
    try {
      Cookies.remove('teamId');
      Cookies.remove('teamName');
      Cookies.remove('status');
      Cookies.remove('score');
      Cookies.remove('userId');
      Cookies.remove('session');
      Cookies.remove('finalSubmitted');
      window.location.href = '/auth/login';
      }
     finally {
      setLoading(false);
    }
  };


  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-400 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-blue-400 rounded-full blur-lg animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-indigo-400 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-cyan-300 rounded-full blur-xl animate-bounce delay-500"></div>
      </div>

      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <main className="relative z-10 container mx-auto px-4 py-12 min-h-screen flex items-start justify-center">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-between items-center mb-8 opacity-90">
            <div className="text-white">
              <div className="text-lg font-bold">CYBER CLUEDO</div>
            </div>
            <div className="flex items-center gap-3">
              {auth && (
                <>
                  <Button
                    onClick={handleLogout}
                    variant="outline"
                    className="border-red-400/40 text-red-200 hover:bg-red-500/10"
                    disabled={loading}
                    title="Logout"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    {loading ? "Logging out..." : "Logout"}
                  </Button>
                </>
)}
              { !auth && (
                <>
                  <Button
                    onClick={() => window.location.href = "/auth/login"}
                    variant="outline"
                    className="border-cyan-400/40 text-cyan-200 hover:bg-cyan-500/10"
                    title="Login"
                  >
                    <LogIn className="w-4 h-4 mr-2" />
                    Login
                  </Button>
                  <Button
                    onClick={handleSignup}
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white"
                    title="Sign up"
                  >
                    <UserPlus className="w-4 h-4 mr-2" />
                    Sign up
                  </Button>
                </>
              )}
                
            </div>
          </div>

          <Card className="bg-white/10 backdrop-blur-lg border-white/20 p-8 mb-8">
            <div className="relative mb-6">
              <Image
                src="/images/asthra-poster.png"
                alt="Cyber Cluedo Board Game"
                width={400}
                height={300}
                className="mx-auto rounded-lg shadow-2xl"
              />
            </div>
            <div className="mb-6">
              <h1 className="text-6xl font-bold text-white mb-2 tracking-wider">CYBER CLUEDO</h1>
              <p className="text-2xl text-cyan-300 font-semibold tracking-wide">
                DIGITAL FORENSICS BOARD GAME
              </p>
            </div>
            <div className="flex justify-center items-center gap-4 mb-8">
              <Badge variant="outline" className="text-white border-cyan-400 bg-cyan-400/20 px-4 py-2 text-lg">
                INVESTIGATE
              </Badge>
              <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
              <Badge variant="outline" className="text-white border-cyan-400 bg-cyan-400/20 px-4 py-2 text-lg">
                DECODE
              </Badge>
              <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
              <Badge variant="outline" className="text-white border-cyan-400 bg-cyan-400/20 px-4 py-2 text-lg">
                UNMASK
              </Badge>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="flex flex-col items-center text-white">
                <Trophy className="w-8 h-8 text-yellow-400 mb-2" />
                <div className="text-sm text-cyan-300">PRIZE POOL</div>
                <div className="text-xl font-bold">₹1500</div>
              </div>
              <div className="flex flex-col items-center text-white">
                <Calendar className="w-8 h-8 text-yellow-400 mb-2" />
                <div className="text-sm text-cyan-300">DATE</div>
                <div className="text-xl font-bold">SEP 20</div>
              </div>
              <div className="flex flex-col items-center text-white">
                <Users className="w-8 h-8 text-green-400 mb-2" />
                <div className="text-sm text-cyan-300">ENTRY FEE</div>
                <div className="text-xl font-bold">₹100</div>
              </div>
              <div className="flex flex-col items-center text-white">
                <MapPin className="w-8 h-8 text-red-400 mb-2" />
                <div className="text-sm text-cyan-300">DEPARTMENT</div>
                <div className="text-sm font-bold">Computer Science & Engineering</div>
                <div className="text-xs">(Cyber Security)</div>
              </div>
            </div>
            <Button
              onClick={auth ? handleStartEvent : handleSignup}
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-12 text-xl rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 animate-pulse"
            >
              <Play className="w-6 h-6 mr-3" />
              {auth ? "START NOW" : "START"}
            </Button>
          </Card>

          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-white/80">
              <div className="w-8 h-px bg-gradient-to-r from-transparent to-cyan-400"></div>
              <span className="text-lg font-semibold tracking-wider">Decade of Innovation</span>
              <div className="w-8 h-px bg-gradient-to-l from-transparent to-cyan-400"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
