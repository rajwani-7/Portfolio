import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Terminal Portfolio | Interactive Developer Portfolio',
  description: 'An interactive terminal-style portfolio website showcasing my skills, projects, and experience.',
  keywords: 'portfolio, developer, terminal, interactive, hacker, programming',
  authors: [{ name: 'Your Name' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='.9em' font-size='90'%3E⚡%3C/text%3E%3C/svg%3E" />
        <meta name="theme-color" content="#00ff00" />
      </head>
      <body className="font-mono bg-terminal-bg text-terminal-green overflow-hidden" suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
