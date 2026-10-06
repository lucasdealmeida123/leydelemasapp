import Link from "next/link"

interface Props {
  searchParams: { v?: string }
}

export default function GraciasPage({ searchParams }: Props) {
  const acepta = searchParams.v === "acepta"

  return (
    <main className="min-h-screen bg-slate-900 text-white flex items-center justify-center px-4">
      <div className="text-center max-w-sm w-full">
        <div className="text-7xl mb-6">{acepta ? "✅" : "❌"}</div>

        <h1 className="text-3xl font-black mb-3">¡Gracias por participar!</h1>
        <p className="text-slate-400 mb-6 text-sm">
          Tu voto fue registrado correctamente.
        </p>

        <div
          className={`inline-block rounded-2xl px-6 py-4 font-black text-xl mb-8 ${
            acepta
              ? "bg-green-700 text-white"
              : "bg-red-700 text-white"
          }`}
        >
          {acepta ? "ACEPTO la Ley de Lemas" : "NO ACEPTO la Ley de Lemas"}
        </div>

        <p className="text-slate-500 text-sm mb-6">
          Compartí la encuesta con otras personas para sumar más opiniones.
        </p>

        <Link
          href="/"
          className="text-blue-400 hover:text-blue-300 underline underline-offset-2 text-sm"
        >
          ← Volver al inicio
        </Link>
      </div>
    </main>
  )
}
