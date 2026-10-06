import Link from "next/link"

interface Props {
  searchParams: { v?: string }
}

export default function GraciasPage({ searchParams }: Props) {
  const acepta = searchParams.v === "acepta"
  const color = acepta ? "#4ade80" : "#f87171"
  const label = acepta ? "ACEPTO" : "NO ACEPTO"

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <div className="flex items-center gap-2 mb-10">
        <div className="w-[3px] h-4 rounded-full" style={{ background: "#7C5FFF" }} />
        <span className="font-black text-xs uppercase tracking-[0.12em]" style={{ color: "rgba(255,255,255,0.5)" }}>
          Loop Noticias
        </span>
      </div>

      <div
        className="text-6xl font-black mb-1"
        style={{ color }}
      >
        {acepta ? "✓" : "✗"}
      </div>

      <h1 className="text-3xl font-black text-white mt-4 mb-2">
        ¡Gracias por participar!
      </h1>
      <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.4)" }}>
        Tu voto fue registrado correctamente.
      </p>

      <div
        className="inline-block px-6 py-3 rounded-2xl font-black text-lg mb-10 border"
        style={{
          background: acepta ? "rgba(74,222,128,0.1)" : "rgba(248,113,113,0.1)",
          borderColor: acepta ? "rgba(74,222,128,0.3)" : "rgba(248,113,113,0.3)",
          color,
        }}
      >
        {label} la Ley de Lemas
      </div>

      <p className="text-sm mb-5" style={{ color: "rgba(255,255,255,0.3)" }}>
        Compartí la encuesta con tus contactos para sumar más voces.
      </p>

      <Link
        href="/"
        className="text-sm transition-colors"
        style={{ color: "rgba(255,255,255,0.3)" }}
      >
        ← Volver al inicio
      </Link>
    </main>
  )
}
