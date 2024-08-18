import './globals.css'

import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
export const metadata: Metadata = {
  title: 'My SAAS',
}

export default function RootLayout({
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
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
