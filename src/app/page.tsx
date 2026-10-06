import VoteForm from "@/components/VoteForm"

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <div className="bg-slate-800 border-b border-slate-700 py-5 px-4 text-center">
        <p className="text-xs text-slate-400 uppercase tracking-[0.2em] mb-1">
          Encuesta ciudadana · Misiones 2025
        </p>
        <h1 className="text-4xl font-black uppercase tracking-tight">
          Ley de Lemas
        </h1>
        <p className="text-slate-400 mt-2 text-sm max-w-sm mx-auto">
          Conocé el sistema y contanos qué pensás
        </p>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-8 space-y-8">

        {/* Explainer */}
        <section>
          <h2 className="text-xl font-bold text-center mb-1">¿Qué es la Ley de Lemas?</h2>
          <p className="text-slate-400 text-center text-sm max-w-xl mx-auto leading-relaxed">
            Es un sistema electoral que permite a un mismo partido presentar{" "}
            <strong className="text-white">múltiples candidatos</strong> (llamados{" "}
            <strong className="text-white">lemas</strong>). Los votos de todos los candidatos del
            partido se <strong className="text-white">suman</strong> para definir el resultado final.
          </p>
        </section>

        {/* CON vs SIN comparison */}
        <section>
          <h2 className="text-center text-sm font-semibold text-slate-400 uppercase tracking-widest mb-4">
            El mismo escenario — resultados distintos
          </h2>

          <div className="grid md:grid-cols-2 gap-5">
            {/* CON */}
            <div className="bg-blue-950 border border-blue-700/60 rounded-2xl overflow-hidden">
              <div className="bg-blue-600 px-5 py-3">
                <p className="font-black text-lg text-center uppercase tracking-wide">
                  CON Ley de Lemas
                </p>
              </div>
              <div className="p-5 space-y-3">
                <p className="text-blue-200 text-sm leading-relaxed">
                  Dentro de un mismo partido pueden presentarse varios candidatos.
                  Los votos de todos <strong className="text-white">se suman</strong> para el resultado del partido.
                </p>

                {/* Partido Azul */}
                <div className="bg-slate-800/70 rounded-xl p-4">
                  <p className="text-xs text-slate-400 uppercase tracking-wide mb-2">Partido Azul</p>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-300">Candidato A</span>
                      <span className="text-white font-semibold">120.000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Candidato B</span>
                      <span className="text-white font-semibold">80.000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Candidata C</span>
                      <span className="text-white font-semibold">50.000</span>
                    </div>
                    <div className="border-t border-slate-700 pt-2 flex justify-between">
                      <span className="text-blue-400 font-bold">Total</span>
                      <span className="text-blue-400 font-bold">250.000</span>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800/50 rounded-xl px-4 py-3 text-sm space-y-1">
                  <div className="flex justify-between text-slate-400">
                    <span>Partido Rojo</span><span>180.000</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Partido Amarillo</span><span>90.000</span>
                  </div>
                </div>

                <div className="bg-blue-800/50 border border-blue-600/50 rounded-xl px-4 py-3 text-center">
                  <p className="text-blue-300 font-bold">🏆 Gana Partido Azul: 250.000</p>
                  <p className="text-xs text-blue-400 mt-1">3 bancas extra por sumar lemas</p>
                </div>
              </div>
            </div>

            {/* SIN */}
            <div className="bg-red-950 border border-red-700/60 rounded-2xl overflow-hidden">
              <div className="bg-red-600 px-5 py-3">
                <p className="font-black text-lg text-center uppercase tracking-wide">
                  SIN Ley de Lemas
                </p>
              </div>
              <div className="p-5 space-y-3">
                <p className="text-red-200 text-sm leading-relaxed">
                  Cada partido presenta un único candidato. Se cuentan los votos
                  individualmente y <strong className="text-white">no se pueden sumar</strong>.
                </p>

                <div className="bg-slate-800/70 rounded-xl p-4 space-y-2 text-sm">
                  <p className="text-xs text-slate-400 uppercase tracking-wide mb-2">Mismo escenario</p>
                  <div className="flex justify-between">
                    <span className="text-slate-300">Partido Azul</span>
                    <span className="text-white font-semibold">120.000</span>
                  </div>
                  <div className="flex justify-between font-bold">
                    <span className="text-red-300">Partido Rojo</span>
                    <span className="text-red-300">180.000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-300">Partido Amarillo</span>
                    <span className="text-white font-semibold">90.000</span>
                  </div>
                </div>

                <div className="bg-red-800/50 border border-red-600/50 rounded-xl px-4 py-3 text-center">
                  <p className="text-red-300 font-bold">🏆 Gana Partido Rojo: 180.000</p>
                  <p className="text-xs text-red-400 mt-1">Gana el candidato más votado</p>
                </div>
              </div>
            </div>
          </div>

          {/* Key insight */}
          <div className="bg-amber-900/30 border border-amber-600/50 rounded-2xl p-4 mt-4 text-center">
            <p className="text-amber-300 font-semibold text-sm">
              ⚡ Con los <strong>mismos votos</strong>, el sistema cambia quién gana.
              El Partido Rojo gana sin Ley de Lemas pero pierde con ella.
            </p>
          </div>
        </section>

        {/* Bancas comparison */}
        <section className="bg-slate-800/50 rounded-2xl p-5">
          <h3 className="text-center font-bold mb-4 text-sm uppercase tracking-widest text-slate-400">
            Distribución de bancas (10 en total)
          </h3>
          <div className="grid grid-cols-2 gap-4 text-center text-sm">
            <div>
              <p className="text-blue-400 font-semibold mb-2">Con Ley de Lemas</p>
              <div className="space-y-1">
                <div className="bg-blue-900/40 rounded-lg px-3 py-2 flex justify-between">
                  <span>Partido Azul</span><span className="font-bold">5 bancas</span>
                </div>
                <div className="bg-slate-700/40 rounded-lg px-3 py-2 flex justify-between">
                  <span>Partido Rojo</span><span className="font-bold">3 bancas</span>
                </div>
                <div className="bg-slate-700/40 rounded-lg px-3 py-2 flex justify-between">
                  <span>Partido Amarillo</span><span className="font-bold">2 bancas</span>
                </div>
              </div>
            </div>
            <div>
              <p className="text-red-400 font-semibold mb-2">Sin Ley de Lemas</p>
              <div className="space-y-1">
                <div className="bg-slate-700/40 rounded-lg px-3 py-2 flex justify-between">
                  <span>Partido Azul</span><span className="font-bold">2 bancas</span>
                </div>
                <div className="bg-red-900/40 rounded-lg px-3 py-2 flex justify-between">
                  <span>Partido Rojo</span><span className="font-bold">4 bancas</span>
                </div>
                <div className="bg-slate-700/40 rounded-lg px-3 py-2 flex justify-between">
                  <span>Partido Amarillo</span><span className="font-bold">2 bancas</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vote section */}
        <section>
          <div className="border border-slate-700 rounded-2xl p-6 bg-slate-800/40">
            <h2 className="text-2xl font-black text-center mb-1">¿Cuál es tu posición?</h2>
            <p className="text-slate-400 text-center text-sm mb-6">
              Seleccioná una opción e ingresá tu número de teléfono
            </p>
            <VoteForm />
          </div>
        </section>

      </div>

      <footer className="text-center text-slate-600 text-xs py-6 px-4">
        Encuesta informativa · Los datos son confidenciales y se usan solo para estadística
      </footer>
    </main>
  )
}
