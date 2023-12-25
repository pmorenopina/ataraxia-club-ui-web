import { Metadata } from 'next'

// Components
import Maintenance from '@/app/components/maintenance'

export const metadata: Metadata = {
  title: 'Entradas e información de eventos',
}

export default function EventsPage() {
  return <Maintenance />
}
