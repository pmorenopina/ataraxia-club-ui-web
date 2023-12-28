'use client'

// Components
import Image from 'next/image'
import Link from 'next/link'
import { LanguageSwitcher } from 'next-export-i18n'

// Icons
import { Menu } from '@mui/icons-material'

export default function Header() {
  return (
    <header className="flex justify-center h-14 px-4 py-3 border-b-2 border-fuchsia-600 bg-gradient-to-t from-fuchsia-950 from-0% to-black to-70% md:px-8 md:h-16 lg:h-20">
      <div className="flex justify-between items-center h-full w-full max-w-7xl">
        <Link href="/">
          <Image
            alt="Ataraxia Logo"
            className="pt-1 max-w-44 md:max-w-48 lg:max-w-full"
            height={54}
            priority={true}
            src="logo_text|svg"
            width={228}
          />
        </Link>
        <div className="flex items-center">
          <div className="hidden md:flex">
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
          <Menu className="md:ml-20 !text-3xl md:!text-4xl lg:!text-5xl" />
        </div>
      </div>
    </header>
  )
}
