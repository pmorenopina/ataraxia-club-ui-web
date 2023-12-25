import { Metadata } from 'next'

// Components
import Maintenance from '@/app/components/maintenance'

export const metadata: Metadata = {
  title: 'Artist',
}

export default function ArtistsPage() {
  return <Maintenance />
}
