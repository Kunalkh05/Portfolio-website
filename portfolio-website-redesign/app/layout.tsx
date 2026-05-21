import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kunal Vinod Khande - Portfolio",
  description: "Computer Science student showcasing web development and AI/ML projects, skills, and qualifications.",
  icons: {
    icon: [
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
  },
}

// <CHANGE> Disable auto-zoom on mobile and optimize for iOS Safari
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-black dark">
      <body className={`${inter.className} antialiased bg-black text-white`}>
        {children}
      </body>
    </html>
  )
}
