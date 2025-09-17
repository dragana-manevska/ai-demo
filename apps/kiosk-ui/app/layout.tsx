import type React from "react"
import type { Metadata } from "next"
// import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"



export const metadata: Metadata = {
  title: "Geminova Kiosk",
  description: "From inspiration to activation in minutes",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
  <html lang="en" className="antialiased">
      <body>{children}</body>
    </html>
  )
}
