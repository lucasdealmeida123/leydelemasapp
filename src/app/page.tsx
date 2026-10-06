"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

const BORDER = "rgba(255,255,255,0.07)"
const SURFACE = "#141825"

export default function Home() {
  const [step, setStep] = useState<"phone" | "vote">("phone")
  const [phone, setPhone] = useState("")
  const [selected, setSelected] = useState<"acepta" | "no_acepta" | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()

  function handlePhoneContinue(e: React.FormEvent) {
    e.preventDefault()
    if (!phone.trim()) return
    setStep("vote")
  }

  async function handleVote(opt: "acepta" | "no_acepta") {
    setSelected(opt)
    setLoading(true)
    setError("")

    const res = await fetch("/api/vote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone: phone.trim(), vote: opt }),
    })

    const data = await res.json()
    setLoading(false)

    if (!res.ok) {
      setError(data.error || "Error al registrar voto")
      setSelected(null)
      return
    }

    router.push(`/gracias?v=${opt}`)
  }

  return (
    <main className="min-h-screen flex flex-col" style={{ background: "#0B0E14" }}>

      {/* HEADER */}
      <header className="px-5 py-3.5 shrink-0" style={{ borderBottom: `1px solid ${BORDER}` }}>
        <div className="max-w-lg mx-auto flex items-center gap-3">
          <div className="w-[3px] h-5 rounded-full" style={{ background: "#B6FF6E" }} />
          <span className="font-black text-sm tracking-[0.14em] uppercase" style={{ color: "#B6FF6E" }}>
            Loop Noticias
          </span>
        </div>
      </header>

      {/* STEP 1 — PHONE */}
      {step === "phone" && (
        <section className="flex-1 flex flex-col max-w-lg mx-auto w-full px-5 py-8 pb-12">

          <div className="mb-8">
            <p className="text-xs font-black uppercase tracking-widest mb-2" style={{ color: "rgba(255,255,255,0.28)" }}>
              Encuesta · Loop Noticias
            </p>
            <h1 className="text-6xl font-black text-white leading-none mb-3">
              VOTÁ
            </h1>
            <p className="text-base font-bold leading-snug" style={{ color: "rgba(255,255,255,0.5)" }}>
              Sobre la <span className="text-white">Ley de Lemas</span>
            </p>
          </div>

          <form onSubmit={handlePhoneContinue} className="space-y-4">
            <div>
              <label
                className="block text-xs font-black uppercase tracking-widest mb-2"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                Ingresá tu número de teléfono
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Ej: 3764 123456"
                className="w-full rounded-xl px-4 py-4 text-white text-base focus:outline-none transition-colors border"
                style={{
                  background: SURFACE,
                  borderColor: "rgba(255,255,255,0.12)",
                  fontSize: "16px",
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "#B6FF6E")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)")}
                autoFocus
                required
              />
              <p className="text-xs mt-2" style={{ color: "rgba(255,255,255,0.22)" }}>
                Solo se usa para evitar votos duplicados
              </p>
            </div>

            <button
              type="submit"
              disabled={!phone.trim()}
              className="w-full font-black text-base rounded-xl py-4 tracking-wide transition-all active:scale-95 disabled:opacity-40"
              style={{ background: "#B6FF6E", color: "#0B0E14" }}
            >
              Continuar →
            </button>
          </form>
        </section>
      )}

      {/* STEP 2 — VOTE */}
      {step === "vote" && (
        <section className="flex-1 flex flex-col max-w-lg mx-auto w-full px-5 py-8 pb-12">

          <div className="mb-8">
            <p className="text-xs font-black uppercase tracking-widest mb-2" style={{ color: "rgba(255,255,255,0.28)" }}>
              Tu opinión sobre la
            </p>
            <h2 className="text-5xl font-black text-white leading-none mb-2">
              LEY DE<br />LEMAS
            </h2>
          </div>

          {error && (
            <div
              className="rounded-xl px-4 py-3 text-sm border mb-4"
              style={{
                background: "rgba(248,113,113,0.08)",
                borderColor: "rgba(248,113,113,0.25)",
                color: "#f87171",
              }}
            >
              {error}
            </div>
          )}

          <div className="grid grid-cols-2 gap-4">
            {/* SI */}
            <button
              onClick={() => !loading && handleVote("acepta")}
              disabled={loading}
              className="rounded-2xl p-5 flex flex-col items-start gap-2 transition-all border text-left disabled:opacity-60"
              style={{
                background: selected === "acepta" ? "rgba(74,222,128,0.1)" : SURFACE,
                borderColor: selected === "acepta" ? "rgba(74,222,128,0.6)" : "rgba(74,222,128,0.18)",
              }}
            >
              <span className="text-5xl font-black leading-none" style={{ color: "#4ade80" }}>
                SI
              </span>
              <span className="text-[10px] font-black uppercase tracking-widest" style={{ color: "#4ade80" }}>
                A favor
              </span>
              <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
                Los votos del mismo partido se suman para definir al ganador
              </p>
            </button>

            {/* NO */}
            <button
              onClick={() => !loading && handleVote("no_acepta")}
              disabled={loading}
              className="rounded-2xl p-5 flex flex-col items-start gap-2 transition-all border text-left disabled:opacity-60"
              style={{
                background: selected === "no_acepta" ? "rgba(248,113,113,0.1)" : SURFACE,
                borderColor: selected === "no_acepta" ? "rgba(248,113,113,0.6)" : "rgba(248,113,113,0.18)",
              }}
            >
              <span className="text-5xl font-black leading-none" style={{ color: "#f87171" }}>
                NO
              </span>
              <span className="text-[10px] font-black uppercase tracking-widest" style={{ color: "#f87171" }}>
                En contra
              </span>
              <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
                Cada partido compite con un solo candidato, sin acumular votos
              </p>
            </button>
          </div>

          {loading && (
            <p className="text-center text-sm mt-6" style={{ color: "rgba(255,255,255,0.35)" }}>
              Registrando tu voto...
            </p>
          )}

          <button
            onClick={() => setStep("phone")}
            className="text-sm text-center mt-6"
            style={{ color: "rgba(255,255,255,0.2)" }}
          >
            ← Volver
          </button>
        </section>
      )}

    </main>
  )
}
