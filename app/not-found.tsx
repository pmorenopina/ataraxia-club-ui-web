// Components
import Image from 'next/image'

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1>ERROR 404</h1>
      <Image
        alt="Ataraxia Logo"
        className="py-1"
        height={0}
        src="bicho_animation"
        width={250}
      />
      <h2>Página no encontrada</h2>
    </main>
  )
}
