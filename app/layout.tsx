import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/ThemeProvider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TechSolutions - Professional IT Services & Web Development",
  description:
    "Transform your business with our comprehensive IT services including web development, mobile apps, SEO, AI R&D, and software solutions.",
  keywords: "web development, mobile apps, SEO, AI development, software solutions, IT services",
  authors: [{ name: "TechSolutions Team" }],
  openGraph: {
    title: "TechSolutions - Professional IT Services",
    description: "Leading IT services company specializing in web development, mobile applications, and AI solutions",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "TechSolutions - Professional IT Services",
    description: "Transform your business with cutting-edge technology solutions",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
