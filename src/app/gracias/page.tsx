import Link from "next/link"

interface Props {
  searchParams: { v?: string }
}

const REDES = [
  { name: "YouTube", href: "https://youtube.com/@loopstreaming" },
  { name: "Instagram", href: "https://instagram.com/loop.stream" },
  { name: "TikTok", href: "https://tiktok.com/@loopstreaming" },
  { name: "X", href: "https://x.com/loopstreamok" },
  { name: "WhatsApp", href: "https://whatsapp.com/channel/0029Vb8QU8a4IBhCGLjAdA20" },
  { name: "Web", href: "https://loopnoticias.com.ar" },
]

export default function GraciasPage({ searchParams }: Props) {
  const acepta = searchParams.v === "acepta"
  const voto = acepta ? "SI" : "NO"
  const votoColor = acepta ? "#B6FF6E" : "#F0A0A0"

  return (
    <main className="min-h-dvh px-5 py-8" style={{ background: "#0B0E14" }}>
      <div className="mx-auto flex w-full max-w-md flex-col">
        <div className="mb-8 flex items-center gap-2">
          <span className="h-5 w-[3px] rounded-full" style={{ background: "#B6FF6E" }} />
          <span
            className="text-sm font-black uppercase tracking-[0.14em]"
            style={{ color: "#B6FF6E" }}
          >
            Loop Noticias
          </span>
        </div>

        <h1 className="text-4xl font-black leading-tight text-white">Gracias por participar</h1>
        <p className="mt-3 text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
          Votaste <span className="font-black" style={{ color: votoColor }}>{voto}</span> a la Ley de Lemas
        </p>

        <p className="mt-6 text-2xl font-black leading-snug text-white">
          ¡Ya estás participando por un{" "}
          <span style={{ color: "#B6FF6E" }}>Smart TV de 60 pulgadas!</span>
        </p>
        <p className="mt-3 text-lg font-black text-white">
          Se sortea el 27 de noviembre
        </p>

        <h2 className="mb-3 mt-10 text-lg font-black text-white">Seguí a Loop en todas las redes</h2>
        <ul className="flex flex-col">
          {REDES.map((red) => (
            <li key={red.name} style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
              <a
                href={red.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-baseline justify-between gap-4 py-3"
              >
                <span className="shrink-0 text-base font-black text-white">{red.name}</span>
                <span
                  className="min-w-0 truncate text-right text-sm"
                  style={{ color: "#B6FF6E" }}
                >
                  {red.href.replace("https://", "")}
                </span>
              </a>
            </li>
          ))}
        </ul>

        <Link href="/" className="mt-8 text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
          Volver al inicio
        </Link>
      </div>
    </main>
  )
}
