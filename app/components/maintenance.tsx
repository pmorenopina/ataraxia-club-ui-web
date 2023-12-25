// Components
import Image from 'next/image'

export default function Maintenance() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1>ESTAMOS REFORMANDO NUESTRA WEB</h1>
      <Image
        alt="Ataraxia Logo"
        className="py-1"
        height={0}
        src="bicho_animation"
        width={250}
      />
      <h2>Próximamente estaremos online</h2>
    </main>
  )
}
