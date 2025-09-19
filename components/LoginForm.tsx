"use client";

import type React from "react";
import { useState } from "react";
import Cookies from "js-cookie";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMsg(null);
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });

      const ct = res.headers.get("content-type") || "";
      if (!res.ok || !ct.includes("application/json")) {
        const text = await res.text();
        void text;
        throw new Error(`Login Failed btww..`);
      }

      const data = await res.json();

      setMsg(`Welcome! team`);
      // Keep team info in non-sensitive cookies if needed; session token should remain httpOnly on the server
      Cookies.set("teamId", data.teamId);
      Cookies.set("teamName", data.name);
      window.location.href = "/";
    } catch (err: unknown) {
      if (err instanceof Error) {
        setMsg(err.message || "Login failed");
      } else {
        setMsg("Login failed")
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen min-w-screen bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900 flex items-center justify-center p-4">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">Login</h2>
            <p className="text-blue-200">Access your Asthra 10.0 account</p>
          </div>

        {/* Team size rule hint + CTA */}
          <div className="mb-4 text-center">
            <p className="text-cyan-200 text-sm">
              Team size: minimum 1 and maximum 4 including the owner
            </p>
            <a
              href="/auth/signup"
              className="inline-block mt-2 text-cyan-300 hover:text-cyan-200 font-medium transition-colors underline"
            >
              Create a team (owner-only or up to 3 more)
            </a>
          </div>

          <form onSubmit={onSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-blue-100 mb-2">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-blue-100 mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Signing in...
                </div>
              ) : (
                "Sign In"
              )}
            </button>

            {msg && (
              <div
                className={`p-4 rounded-lg text-center ${
                  msg.includes("Welcome")
                    ? "bg-green-500/20 text-green-100 border border-green-500/30"
                    : "bg-red-500/20 text-red-100 border border-red-500/30"
                }`}
              >
                {msg}
              </div>
            )}
          </form>

          <div className="mt-6 text-center">
            <p className="text-blue-200 text-sm">
              Don&apos;t have an account?{" "}
              <a href="/auth/signup" className="text-cyan-300 hover:text-cyan-200 font-medium transition-colors">
                Sign up here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
