import "regenerator-runtime/runtime"
import "./globals.css"
import "./components/scrollbar-hide.css"
import "./components/chatbot-animations.css"
import "./components/smooth-animations.css"
import "./components/responsive.css"
import { Inter } from "next/font/google"
import type React from "react"
import ThemeProvider from "./components/ThemeProvider"
import SearchProvider from "./components/SearchProvider"
import { ImageUrlProvider } from "./context/ImageUrlContext"
import CustomCursor from "./components/CustomCursor"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Daya-portfolio",
  description: "Personal portfolio of Dayanand Allada",
  openGraph: {
    title: "Dayanand's Portfolio",
    description: "Explore Allada Dayanand's skills, projects, and experience.",
    url: "https://my-portfolio-livid-eta-91.vercel.app", // your deployed URL
    siteName: "Dayanand Portfolio",
    images: [
      {
        url: "/preview.png", // optional: add this image to /public folder
        width: 800,
        height: 600,
        alt: "Dayanand Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
}
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black transition-colors duration-300`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <SearchProvider>
            <ImageUrlProvider>
              {children}
              <CustomCursor />
            </ImageUrlProvider>
          </SearchProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'
