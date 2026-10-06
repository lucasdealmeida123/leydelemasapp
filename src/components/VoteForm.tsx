"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function VoteForm() {
  const [selected, setSelected] = useState<"acepta" | "no_acepta" | null>(null)
  const [phone, setPhone] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!phone.trim() || !selected) return
    setLoading(true)
    setError("")

    const res = await fetch("/api/vote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone: phone.trim(), vote: selected }),
    })

    const data = await res.json()
    setLoading(false)

    if (!res.ok) {
      setError(data.error || "Error al registrar voto")
      return
    }

    router.push(`/gracias?v=${selected}`)
  }

  return (
    <div className="space-y-4">
      {/* Option buttons */}
      <div className="grid grid-cols-2 gap-3">
        {(["acepta", "no_acepta"] as const).map((opt) => {
          const isAcepta = opt === "acepta"
          const isSelected = selected === opt
          const color = isAcepta ? "#4ade80" : "#f87171"
          const borderSelected = isAcepta ? "rgba(74,222,128,0.7)" : "rgba(248,113,113,0.7)"
          const borderIdle = isAcepta ? "rgba(74,222,128,0.15)" : "rgba(248,113,113,0.15)"
          const bgSelected = isAcepta ? "rgba(74,222,128,0.08)" : "rgba(248,113,113,0.08)"
          const desc = isAcepta
            ? "Los votos del mismo partido se suman para definir al ganador"
            : "Cada partido compite con un solo candidato, sin acumular votos"

          return (
            <button
              key={opt}
              onClick={() => { setSelected(opt); setError("") }}
              className="rounded-2xl p-4 flex flex-col items-start gap-2 transition-all border text-left"
              style={{
                background: isSelected ? bgSelected : "#141825",
                borderColor: isSelected ? borderSelected : borderIdle,
                transform: isSelected ? "scale(1.02)" : "scale(1)",
              }}
            >
              <span className="text-3xl font-black leading-none" style={{ color }}>
                {isAcepta ? "SI" : "NO"}
              </span>
              <span className="text-[10px] font-black uppercase tracking-widest" style={{ color }}>
                {isAcepta ? "A favor" : "En contra"}
              </span>
              <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
                {desc}
              </p>
            </button>
          )
        })}
      </div>

      {/* Phone input — shown after selection */}
      {selected && (
        <form onSubmit={handleSubmit} className="space-y-3 pt-1">
          <div>
            <label
              className="block text-xs font-bold uppercase tracking-widest mb-2"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              Número de teléfono
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Ej: 3764 123456"
              className="w-full rounded-xl px-4 py-3.5 text-white text-base focus:outline-none transition-colors border"
              style={{
                background: "#0B0E14",
                borderColor: "rgba(255,255,255,0.12)",
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = "#7C5FFF")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)")}
              autoFocus
              required
            />
            <p className="text-xs mt-1.5" style={{ color: "rgba(255,255,255,0.25)" }}>
              Solo se usa para evitar votos duplicados
            </p>
          </div>

          {error && (
            <div
              className="rounded-xl px-4 py-3 text-sm border"
              style={{
                background: "rgba(248,113,113,0.08)",
                borderColor: "rgba(248,113,113,0.25)",
                color: "#f87171",
              }}
            >
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading || !phone.trim()}
            className="w-full font-black text-base rounded-xl py-4 transition-all active:scale-95 disabled:opacity-40"
            style={{ background: "#7C5FFF", color: "white" }}
          >
            {loading ? "Registrando..." : "Confirmar voto →"}
          </button>
        </form>
      )}
    </div>
  )
}
