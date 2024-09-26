import './globals.css'

import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'

export const metadata: Metadata = {
  title: 'My SAAS',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <svg width="0" height="0">
            <defs>
              <linearGradient
                id="gradientSVG"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  style={{ stopColor: '#8b5cf6', stopOpacity: 1 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: '#a855f7', stopOpacity: 1 }}
                />
              </linearGradient>
            </defs>
          </svg>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
