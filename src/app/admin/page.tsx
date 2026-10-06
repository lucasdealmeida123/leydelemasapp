"use client"

import { useState, useEffect, useCallback } from "react"

interface Results {
  acepta: number
  no_acepta: number
  entries: { phone: string; vote: string; created_at: string }[]
}

export default function AdminPage() {
  const [authed, setAuthed] = useState(false)
  const [password, setPassword] = useState("")
  const [loginError, setLoginError] = useState("")
  const [logging, setLogging] = useState(false)
  const [results, setResults] = useState<Results | null>(null)
  const [loading, setLoading] = useState(false)

  const fetchResults = useCallback(async () => {
    setLoading(true)
    const res = await fetch("/api/admin/results")
    if (res.status === 401) { setAuthed(false); return }
    const data = await res.json()
    setResults(data)
    setLoading(false)
  }, [])

  useEffect(() => {
    if (authed) fetchResults()
  }, [authed, fetchResults])

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setLogging(true)
    setLoginError("")
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    })
    setLogging(false)
    if (!res.ok) { setLoginError("Contraseña incorrecta"); return }
    setAuthed(true)
    setPassword("")
  }

  if (!authed) {
    return (
      <main className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
        <div className="w-full max-w-sm">
          <h1 className="text-2xl font-black text-center mb-6">Panel Admin</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Contraseña"
              autoFocus
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500"
            />
            {loginError && (
              <p className="text-red-400 text-sm text-center">{loginError}</p>
            )}
            <button
              type="submit"
              disabled={logging}
              className="w-full bg-blue-600 hover:bg-blue-500 disabled:opacity-50 rounded-xl py-3 font-bold"
            >
              {logging ? "Verificando..." : "Ingresar"}
            </button>
          </form>
        </div>
      </main>
    )
  }

  const total = results ? results.acepta + results.no_acepta : 0
  const pctAcepta = total > 0 ? Math.round((results!.acepta / total) * 100) : 0
  const pctNo = total > 0 ? Math.round((results!.no_acepta / total) * 100) : 0

  return (
    <main className="min-h-screen bg-slate-900 text-white px-4 py-8">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-black">Resultados · Ley de Lemas</h1>
          <button
            onClick={fetchResults}
            disabled={loading}
            className="text-sm text-blue-400 hover:text-blue-300 disabled:opacity-50"
          >
            {loading ? "Actualizando..." : "↻ Actualizar"}
          </button>
        </div>

        {results && (
          <>
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-slate-800 rounded-2xl p-5">
                <p className="text-3xl font-black">{total.toLocaleString("es")}</p>
                <p className="text-slate-400 text-sm mt-1">Total votos</p>
              </div>
              <div className="bg-green-900/40 border border-green-700/50 rounded-2xl p-5">
                <p className="text-3xl font-black text-green-400">{results.acepta.toLocaleString("es")}</p>
                <p className="text-green-400/70 text-sm mt-1">ACEPTA ({pctAcepta}%)</p>
              </div>
              <div className="bg-red-900/40 border border-red-700/50 rounded-2xl p-5">
                <p className="text-3xl font-black text-red-400">{results.no_acepta.toLocaleString("es")}</p>
                <p className="text-red-400/70 text-sm mt-1">NO ACEPTA ({pctNo}%)</p>
              </div>
            </div>

            {/* Bar */}
            {total > 0 && (
              <div className="bg-slate-800 rounded-2xl p-5">
                <div className="flex rounded-full overflow-hidden h-8">
                  <div
                    className="bg-green-600 flex items-center justify-center text-xs font-bold transition-all"
                    style={{ width: `${pctAcepta}%` }}
                  >
                    {pctAcepta > 8 ? `${pctAcepta}%` : ""}
                  </div>
                  <div
                    className="bg-red-600 flex items-center justify-center text-xs font-bold transition-all"
                    style={{ width: `${pctNo}%` }}
                  >
                    {pctNo > 8 ? `${pctNo}%` : ""}
                  </div>
                </div>
                <div className="flex justify-between mt-2 text-xs text-slate-400">
                  <span>✅ ACEPTA</span>
                  <span>❌ NO ACEPTA</span>
                </div>
              </div>
            )}

            {/* Table */}
            <div className="bg-slate-800 rounded-2xl overflow-hidden">
              <div className="px-5 py-4 border-b border-slate-700">
                <h2 className="font-bold">Registros ({results.entries.length})</h2>
              </div>
              <div className="overflow-x-auto max-h-[500px] overflow-y-auto">
                <table className="w-full text-sm">
                  <thead className="sticky top-0 bg-slate-800">
                    <tr className="text-left text-slate-400 text-xs uppercase tracking-wide border-b border-slate-700">
                      <th className="px-5 py-3">Teléfono</th>
                      <th className="px-5 py-3">Voto</th>
                      <th className="px-5 py-3">Fecha/Hora</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-700/50">
                    {results.entries.map((e, i) => (
                      <tr key={i} className="hover:bg-slate-700/30">
                        <td className="px-5 py-3 font-mono text-slate-300">{e.phone}</td>
                        <td className="px-5 py-3">
                          <span
                            className={`inline-block px-2 py-0.5 rounded-full text-xs font-bold ${
                              e.vote === "acepta"
                                ? "bg-green-900/50 text-green-400"
                                : "bg-red-900/50 text-red-400"
                            }`}
                          >
                            {e.vote === "acepta" ? "ACEPTA" : "NO ACEPTA"}
                          </span>
                        </td>
                        <td className="px-5 py-3 text-slate-400">
                          {new Date(e.created_at).toLocaleString("es-AR", {
                            day: "2-digit",
                            month: "2-digit",
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  )
}
