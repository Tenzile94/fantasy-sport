import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

// Custom color theme
const colorTheme = {
  primary: "hsl(220, 70%, 50%)",
  primaryHover: "hsl(220, 70%, 45%)",
  secondary: "hsl(280, 70%, 50%)",
  accent: "hsl(30, 100%, 50%)",
  success: "hsl(142, 76%, 36%)",
  warning: "hsl(38, 92%, 50%)",
  danger: "hsl(358, 85%, 52%)",
  info: "hsl(200, 85%, 45%)",
}

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'