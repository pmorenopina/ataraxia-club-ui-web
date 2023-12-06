import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: 'Ataraxia Club | %s',
    default: 'Ataraxia Club',
  },
  description:
    'Sesión de música electrónica situada en Madrid. Tickets e información de eventos.',
  keywords: [
    'Ataraxia',
    'Club',
    'Ataraxia Club',
    'Madrid',
    'Música',
    'Electrónica',
    'Tech',
    'House',
    'Tech-House',
    'Eventos',
    'Entradas',
  ],
  creator: 'pmorenopina',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
