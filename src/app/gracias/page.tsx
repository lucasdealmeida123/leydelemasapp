import Link from "next/link"

interface Props {
  searchParams: { v?: string }
}

export default function GraciasPage({ searchParams }: Props) {
  const acepta = searchParams.v === "acepta"
  const color = acepta ? "#4ade80" : "#f87171"

  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-5 text-center"
      style={{ background: "#0B0E14" }}
    >
      {/* Logo */}
      <div className="flex items-center gap-2 mb-8">
        <div className="w-[3px] h-4 rounded-full" style={{ background: "#B6FF6E" }} />
        <span className="font-black text-xs uppercase tracking-[0.12em]" style={{ color: "rgba(255,255,255,0.5)" }}>
          Loop Noticias
        </span>
      </div>

      {/* Check / X */}
      <div className="text-7xl font-black mb-4" style={{ color }}>
        {acepta ? "✓" : "✗"}
      </div>

      {/* Vote label */}
      <div
        className="inline-flex items-center gap-2 px-5 py-2 rounded-full font-black text-sm mb-6 border"
        style={{
          background: acepta ? "rgba(74,222,128,0.08)" : "rgba(248,113,113,0.08)",
          borderColor: acepta ? "rgba(74,222,128,0.25)" : "rgba(248,113,113,0.25)",
          color,
        }}
      >
        Votaste <strong>{acepta ? "SI" : "NO"}</strong> a la Ley de Lemas
      </div>

      <h1 className="text-3xl font-black text-white mb-2">
        ¡Gracias por participar!
      </h1>
      <p className="text-sm mb-8" style={{ color: "rgba(255,255,255,0.4)" }}>
        Tu voto fue registrado correctamente.
      </p>

      {/* Giveaway */}
      <div
        className="w-full max-w-sm rounded-2xl px-5 py-5 mb-6 border"
        style={{ background: "#141825", borderColor: "rgba(182,255,110,0.2)" }}
      >
        <p className="text-xs font-black uppercase tracking-widest mb-2" style={{ color: "#B6FF6E" }}>
          Sorteo
        </p>
        <p className="text-base font-black text-white leading-snug mb-1">
          Estás participando<br />por un celular 📱
        </p>
        <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
          Todos los votantes participan del sorteo
        </p>
      </div>

      {/* YouTube CTA */}
      <div
        className="w-full max-w-sm rounded-2xl px-5 py-5 mb-8 border"
        style={{ background: "#141825", borderColor: "rgba(255,255,255,0.07)" }}
      >
        <p className="text-sm font-bold text-white mb-1">
          No te olvides suscribirte a <span style={{ color: "#FF1F36" }}>Loop</span> en YouTube
        </p>
        <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
          Mirá toda nuestra programación
        </p>
      </div>

      <Link
        href="/"
        className="text-xs transition-colors"
        style={{ color: "rgba(255,255,255,0.2)" }}
      >
        ← Volver al inicio
      </Link>
    </main>
  )
}
