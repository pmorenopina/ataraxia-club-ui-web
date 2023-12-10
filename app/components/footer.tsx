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
      className="justify-self-end justify-end"
      height={90}
      src="ztsayuwynfj6g41hz4jc"
      width={80}
    />
  </div>
)

const sectionLinks = (
  <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start w-full max-w-5xl text-center md:text-left text-sm">
    <List
      component="nav"
      subheader={<ListSubheader component="h3">SECCIONES</ListSubheader>}
    >
      <ul>
        <ListItem className="flex-col">
          <Link href="/events">Eventos</Link>
        </ListItem>
        <ListItem className="flex-col">
          <Link href="/artists">Artistas</Link>
        </ListItem>
      </ul>
    </List>
    <List
      component="nav"
      subheader={<ListSubheader component="h3">LEGAL</ListSubheader>}
    >
      <ul>
        <ListItem className="flex-col">
          <Link href="/cookies">Política de Cookies</Link>
        </ListItem>
      </ul>
    </List>
    <List
      className="md:text-right"
      component="nav"
      subheader={<ListSubheader component="h3">CONTÁCTO</ListSubheader>}
    >
      <ul>
        <ListItem className="flex-col">
          <Link href="mailto:info@ataraxiaclub.com">Contáctanos</Link>
        </ListItem>
      </ul>
    </List>
  </div>
)

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
  return (
    <footer className="flex flex-col items-center px-28 pt-14 pb-2 border-t-2 border-fuchsia-600">
      {logoImage}
      {sectionLinks}
      {socialLinks}
      <span className="flex justify-center items-center w-full max-w-5xl text-xs">
        Website created by
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
