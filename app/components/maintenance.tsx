'use client'

// Libs
import { useTranslation } from 'next-export-i18n'

// Components
import Image from 'next/image'

export default function Maintenance() {
  const { t } = useTranslation()
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1>{t('maintenance.title')}</h1>
      <Image
        alt="Ataraxia Logo"
        className="py-1"
        height={0}
        src="bicho_animation"
        width={250}
      />
      <h2>{t('maintenance.subtitle')}</h2>
    </main>
  )
}
