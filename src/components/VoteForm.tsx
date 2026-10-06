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

  if (!selected) {
    return (
      <div className="grid grid-cols-2 gap-4">
        <button
          onClick={() => setSelected("acepta")}
          className="flex flex-col items-center gap-3 bg-green-600 hover:bg-green-500 active:scale-95 transition-all rounded-2xl p-6 font-black text-xl text-white shadow-lg shadow-green-900/40"
        >
          <span className="text-4xl">✅</span>
          <span>ACEPTO</span>
        </button>
        <button
          onClick={() => setSelected("no_acepta")}
          className="flex flex-col items-center gap-3 bg-red-600 hover:bg-red-500 active:scale-95 transition-all rounded-2xl p-6 font-black text-xl text-white shadow-lg shadow-red-900/40"
        >
          <span className="text-4xl">❌</span>
          <span>NO ACEPTO</span>
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div
        className={`flex items-center justify-between rounded-xl px-4 py-3 ${
          selected === "acepta"
            ? "bg-green-900/40 border border-green-600"
            : "bg-red-900/40 border border-red-600"
        }`}
      >
        <span className="font-bold text-lg">
          {selected === "acepta" ? "✅ ACEPTO" : "❌ NO ACEPTO"}
        </span>
        <button
          type="button"
          onClick={() => { setSelected(null); setError("") }}
          className="text-slate-400 hover:text-white text-sm underline underline-offset-2"
        >
          Cambiar
        </button>
      </div>

      <div>
        <label className="block text-sm text-slate-400 mb-2">
          Número de teléfono
        </label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Ej: 3764 123456"
          className="w-full bg-slate-700 border border-slate-600 rounded-xl px-4 py-3 text-white text-lg placeholder:text-slate-500 focus:outline-none focus:border-blue-500"
          autoFocus
          required
        />
        <p className="text-xs text-slate-500 mt-1">Solo se usa para evitar votos duplicados</p>
      </div>

      {error && (
        <div className="bg-red-900/40 border border-red-500 rounded-xl px-4 py-3 text-red-300 text-sm">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={loading || !phone.trim()}
        className="w-full bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors rounded-xl py-4 font-bold text-lg"
      >
        {loading ? "Registrando..." : "Confirmar voto →"}
      </button>
    </form>
  )
}
