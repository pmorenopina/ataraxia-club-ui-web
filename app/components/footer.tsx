'use client'

// Libs
import { useTranslation } from 'next-export-i18n'
import Link from 'next/link'

// Components
import Image from 'next/image'
import { List, ListItem, ListSubheader } from '@mui/material'

// Icons
import { Facebook, Instagram, YouTube } from '@mui/icons-material'

const logoImage = (
  <div className="flex justify-center md:justify-end items-center w-full max-w-5xl mb-2 md:mr-5">
    <Image
      alt="Ataraxia Logo"
      height={90}
      loading="lazy"
      src="logo_eye"
      width={80}
    />
  </div>
)

function SectionLinks({ t }: { t: any }) {
  return (
    <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start w-full max-w-5xl text-center md:text-left text-sm">
      <List
        component="nav"
        subheader={
          <ListSubheader component="h3">
            {t('footer.titles.sections')}
          </ListSubheader>
        }
      >
        <ul>
          <ListItem className="flex-col">
            <Link href="/events">{t('footer.sections.events')}</Link>
          </ListItem>
          <ListItem className="flex-col">
            <Link href="/artists">{t('footer.sections.artists')}</Link>
          </ListItem>
        </ul>
      </List>
      <List
        component="nav"
        subheader={
          <ListSubheader component="h3">
            {t('footer.titles.legal')}
          </ListSubheader>
        }
      >
        <ul>
          <ListItem className="flex-col">
            <Link href="/cookies">{t('footer.legal.cookies')}</Link>
          </ListItem>
        </ul>
      </List>
      <List
        className="md:text-right"
        component="nav"
        subheader={
          <ListSubheader component="h3">
            {t('footer.titles.contact')}
          </ListSubheader>
        }
      >
        <ul>
          <ListItem className="flex-col">
            <Link href="mailto:info@ataraxiaclub.com">
              {t('footer.contact.contactUs')}
            </Link>
          </ListItem>
        </ul>
      </List>
    </div>
  )
}

const socialLinks = (
  <nav className="flex justify-center md:justify-end items-center w-full max-w-5xl mb-10">
    <Link
      className="m-2"
      href="https://www.facebook.com/ataraxiaclub/"
      target="_blank"
    >
      <Facebook fontSize="large" />
    </Link>
    <Link
      className="m-2"
      href="https://www.instagram.com/ataraxia_club/"
      target="_blank"
    >
      <Instagram fontSize="large" />
    </Link>
    <Link
      className="m-2"
      href="https://www.youtube.com/user/JavyDeejay"
      target="_blank"
    >
      <YouTube fontSize="large" />
    </Link>
  </nav>
)

export default function Footer() {
  const { t } = useTranslation()
  return (
    <footer className="flex flex-col items-center px-28 pt-14 pb-2 border-t-2 border-fuchsia-600">
      {logoImage}
      <SectionLinks t={t} />
      {socialLinks}
      <span className="flex justify-center items-center w-full max-w-5xl text-xs">
        {t('footer.credits')}
        <Link
          className="ml-1"
          href="https://www.morenopina.com"
          target="_blank"
        >
          pmorenopina
        </Link>
      </span>
    </footer>
  )
}
