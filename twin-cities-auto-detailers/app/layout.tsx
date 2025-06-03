import type React from "react"
import type { Metadata } from "next"
import { Inter, Montserrat } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700", "900"], variable: "--font-heading" })

export const metadata: Metadata = {
  title: {
    default: "Twin Cities Auto Detailers - Premium Car Detailing",
    template: "%s | Twin Cities Auto Detailers",
  },
  description:
    "Twin Cities Auto Detailers offers top-tier, ultra-modern car detailing services in the Twin Cities metro area, including paint correction, ceramic coatings, and more. Get a quote and book online today!",
  keywords:
    "Twin Cities Auto Detailers, car detailing, auto detailing, twin cities, ceramic coating, paint correction, luxury car care, mobile detailing",
  // Add more SEO metadata as needed (OpenGraph, Twitter Cards, etc.)
  // robots.txt and sitemap.xml would be handled by Next.js or generated separately
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.variable, montserrat.variable)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system" // Or "light" / "dark" based on preference
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
