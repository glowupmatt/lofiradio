import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import AppContext from '@/context/AppContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lofi Player',
  description: 'Music player for lofi music',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <AppContext>
        <body className={inter.className}>{children}</body>
      </AppContext>
    </html>
  )
}
