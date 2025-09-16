import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { Footer } from "@/components/footer"
import "./globals.css"

export const metadata: Metadata = {
  title: "Cyber Cluedo",
  description:
    "Join the Cyber Cluedo digital forensics board game at Asthra 10.0. Investigate, decode, and unmask in this exciting cybersecurity competition at SJCET Palai.",
  keywords: "tech fest, cybersecurity, digital forensics, SJCET Palai, Asthra 10.0, engineering, technology",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
