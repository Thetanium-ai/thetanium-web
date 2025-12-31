import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Thetanium — AI-Powered Security for Smart Contracts',
  description: 'Scan your code in minutes, not weeks. ThetaCore, our multi-agent AI engine, detects vulnerabilities that traditional tools miss — at a fraction of the cost.',
  keywords: ['smart contract security', 'AI audit', 'blockchain security', 'Solidity', 'Rust', 'Move'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  )
}
