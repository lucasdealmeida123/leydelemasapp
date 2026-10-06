import VoteForm from "@/components/VoteForm"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0f1e] text-white">

      {/* Header */}
      <header className="bg-[#0d1426] border-b border-white/10 px-4 py-4">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <div>
            <span className="text-xs font-bold tracking-[0.2em] text-blue-400 uppercase">Loop Noticias</span>
            <h1 className="text-xl font-black uppercase tracking-tight leading-none mt-0.5">
              Ley de Lemas
            </h1>
          </div>
          <div className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide animate-pulse">
            Encuesta activa
          </div>
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">

        {/* Hero question */}
        <div className="text-center pt-2">
          <h2 className="text-2xl font-black leading-tight">
            ¿Qué cambia con la<br />
            <span className="text-blue-400">Ley de Lemas?</span>
          </h2>
          <p className="text-slate-400 mt-2 text-sm">
            Un ejemplo real para entender el sistema
          </p>
        </div>

        {/* Visual scenario */}
        <div className="bg-[#111827] rounded-2xl overflow-hidden border border-white/10">
          <div className="px-5 py-3 border-b border-white/10">
            <p className="text-xs text-slate-400 uppercase tracking-widest text-center">
              Mismo escenario · Distintos resultados
            </p>
          </div>

          {/* Candidates row */}
          <div className="p-5">
            <p className="text-xs text-slate-500 uppercase tracking-wide mb-3">Votos emitidos</p>
            <div className="space-y-2">
              {/* Partido A - multiple */}
              <div>
                <div className="flex gap-2 mb-1">
                  <div className="flex-1 bg-blue-900/40 border border-blue-700/50 rounded-xl px-3 py-2 flex justify-between items-center">
                    <span className="text-sm text-blue-300">Cand. A1</span>
                    <span className="font-bold text-white">120k</span>
                  </div>
                  <div className="flex-1 bg-blue-900/40 border border-blue-700/50 rounded-xl px-3 py-2 flex justify-between items-center">
                    <span className="text-sm text-blue-300">Cand. A2</span>
                    <span className="font-bold text-white">80k</span>
                  </div>
                  <div className="flex-1 bg-blue-900/40 border border-blue-700/50 rounded-xl px-3 py-2 flex justify-between items-center">
                    <span className="text-sm text-blue-300">Cand. A3</span>
                    <span className="font-bold text-white">50k</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs text-slate-400 px-1">
                  <div className="h-px flex-1 bg-blue-800/40"></div>
                  <span className="text-blue-400">Partido Azul</span>
                  <div className="h-px flex-1 bg-blue-800/40"></div>
                </div>
              </div>

              <div className="bg-red-900/30 border border-red-700/40 rounded-xl px-4 py-2.5 flex justify-between items-center">
                <span className="text-sm text-red-300">Partido Rojo</span>
                <span className="font-bold text-white">180k votos</span>
              </div>

              <div className="bg-yellow-900/30 border border-yellow-700/40 rounded-xl px-4 py-2.5 flex justify-between items-center">
                <span className="text-sm text-yellow-300">Partido Amarillo</span>
                <span className="font-bold text-white">90k votos</span>
              </div>
            </div>
          </div>

          {/* CON vs SIN result */}
          <div className="grid grid-cols-2 divide-x divide-white/10 border-t border-white/10">
            <div className="p-4 bg-blue-950/30">
              <p className="text-xs font-bold text-blue-400 uppercase tracking-wide mb-3 text-center">
                CON Ley de Lemas
              </p>
              <div className="text-center mb-3">
                <p className="text-xs text-slate-400">Partido Azul suma sus candidatos</p>
                <p className="text-2xl font-black text-blue-400 mt-1">250k</p>
              </div>
              <div className="bg-blue-600 rounded-lg px-3 py-2 text-center">
                <p className="text-xs font-black">🏆 GANA PARTIDO AZUL</p>
              </div>
              <div className="mt-3 space-y-1 text-xs text-center text-slate-400">
                <div className="flex justify-between">
                  <span>Partido Azul</span><span className="text-blue-400 font-bold">5 bancas</span>
                </div>
                <div className="flex justify-between">
                  <span>Partido Rojo</span><span>3 bancas</span>
                </div>
                <div className="flex justify-between">
                  <span>Partido Amarillo</span><span>2 bancas</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-red-950/20">
              <p className="text-xs font-bold text-red-400 uppercase tracking-wide mb-3 text-center">
                SIN Ley de Lemas
              </p>
              <div className="text-center mb-3">
                <p className="text-xs text-slate-400">Un candidato por partido</p>
                <p className="text-2xl font-black text-red-400 mt-1">180k</p>
              </div>
              <div className="bg-red-600 rounded-lg px-3 py-2 text-center">
                <p className="text-xs font-black">🏆 GANA PARTIDO ROJO</p>
              </div>
              <div className="mt-3 space-y-1 text-xs text-center text-slate-400">
                <div className="flex justify-between">
                  <span>Partido Azul</span><span>2 bancas</span>
                </div>
                <div className="flex justify-between">
                  <span>Partido Rojo</span><span className="text-red-400 font-bold">4 bancas</span>
                </div>
                <div className="flex justify-between">
                  <span>Partido Amarillo</span><span>2 bancas</span>
                </div>
              </div>
            </div>
          </div>

          <div className="px-5 py-3 bg-amber-950/30 border-t border-amber-700/30">
            <p className="text-amber-300 text-xs text-center font-semibold">
              ⚡ Los mismos votos dan un ganador diferente según el sistema que se use
            </p>
          </div>
        </div>

        {/* Vote section */}
        <div className="bg-[#111827] rounded-2xl border border-white/10 overflow-hidden">
          <div className="px-5 pt-5 pb-4 text-center border-b border-white/10">
            <h3 className="text-xl font-black">¿Qué opinás?</h3>
            <p className="text-slate-400 text-sm mt-1">
              ¿Estás de acuerdo con la Ley de Lemas en Misiones?
            </p>
          </div>
          <div className="p-5">
            <VoteForm />
          </div>
        </div>

      </div>

      <footer className="text-center text-slate-700 text-xs py-6">
        Loop Noticias · Encuesta informativa · Los datos son confidenciales
      </footer>
    </main>
  )
}
