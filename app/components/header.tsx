import Link from 'next/link'

// Components
import Image from 'next/image'

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
            height={0}
            priority={true}
            src="logo_text|svg"
            width={228}
          />
        </Link>
        <Menu className="ml-4" fontSize="large" />
      </div>
    </header>
  )
}
