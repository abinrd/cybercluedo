import type React from "react"
import type { Metadata } from "next"
// import { GeistSans } from "geist/font/sans"
// import { GeistMono } from "geist/font/mono"
import { Inter } from "next/font/google"
import { Roboto_Mono } from "next/font/google"
import { SidebarProvider } from "@/components/ui/sidebar"
//import { AppSidebar } from "@/components/app-sidebar"
const GeistSans = Inter({ subsets: ["latin"], variable: "--font-sans" })
const GeistMono = Roboto_Mono({ subsets: ["latin"], variable: "--font-mono" })
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
        <Suspense fallback={null}> <SidebarProvider>{children}</SidebarProvider></Suspense>
        <Footer />
      </body>
    </html>
  )
}
