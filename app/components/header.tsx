'use client'

// Components
import Image from 'next/image'
import Link from 'next/link'
import { LanguageSwitcher } from 'next-export-i18n'

// Icons
import { Menu } from '@mui/icons-material'

export default function Footer() {
  return (
    <header className="flex justify-center h-20 py-3 border-b-2 border-fuchsia-600">
      <div className="flex justify-between items-center h-full w-full max-w-5xl">
        <Link href="/">
          <Image
            alt="Ataraxia Logo"
            className="pt-1"
            height={54}
            priority={true}
            src="logo_text|svg"
            width={228}
          />
        </Link>
        <div className="flex items-center">
          <div className="flex">
            <LanguageSwitcher lang="es">
              <Image
                alt="Spain Flag"
                className={
                  'p-0.5 mx-1 rounded-full hover:border hover:border-white'
                }
                height={30}
                priority={true}
                src="spain_flag|svg"
                width={30}
              />
            </LanguageSwitcher>
            <LanguageSwitcher lang="en">
              <Image
                alt="UK Flag"
                className={
                  'p-0.5 mx-1 rounded-full hover:border hover:border-white'
                }
                height={30}
                priority={true}
                src="uk_flag|svg"
                width={30}
              />
            </LanguageSwitcher>
          </div>
          <Menu className="ml-20" fontSize="large" />
        </div>
      </div>
    </header>
  )
}
