import type { Metadata } from 'next'
import './globals.css'

// Custom theme
import ThemeRegistry from './themeRegistry'

// Components
import Header from './components/header'
import Footer from './components/footer'

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
    <html lang="es">
      <body>
        <ThemeRegistry options={{ key: 'mui-theme' }}>
          <Header />
          {children}
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  )
}
