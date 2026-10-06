import Link from "next/link"

interface Props {
  searchParams: { v?: string }
}

export default function GraciasPage({ searchParams }: Props) {
  const acepta = searchParams.v === "acepta"
  const voto = acepta ? "SI" : "NO"
  const votoColor = acepta ? "#B6FF6E" : "#F0A0A0"

  return (
    <main
      className="flex min-h-dvh flex-col items-center justify-center px-6 text-center"
      style={{ background: "#0B0E14" }}
    >
      <div className="w-full max-w-sm">
        <div className="mb-8 flex items-center justify-center gap-2">
          <span className="h-4 w-[3px] rounded-full" style={{ background: "#B6FF6E" }} />
          <span
            className="text-xs font-black uppercase tracking-[0.14em]"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            Loop Noticias
          </span>
        </div>

        <h1 className="text-3xl font-black leading-tight text-white">Gracias por participar</h1>
        <p className="mt-3 text-base" style={{ color: "rgba(255,255,255,0.55)" }}>
          Votaste <span className="font-black" style={{ color: votoColor }}>{voto}</span> a la Ley de Lemas
        </p>

        <p className="mt-8 text-base leading-relaxed text-white">
          No te olvides suscribirte a Loop en{" "}
          <span className="font-black" style={{ color: "#B6FF6E" }}>
            YouTube
          </span>{" "}
          y mirar toda nuestra programación.
        </p>
        <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.72)" }}>
          Estás participando por un celular.
        </p>

        <Link
          href="/"
          className="mt-10 inline-block text-sm"
          style={{ color: "rgba(255,255,255,0.35)" }}
        >
          Volver al inicio
        </Link>
      </div>
    </main>
  )
}
