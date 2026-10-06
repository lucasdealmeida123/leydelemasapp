"use client"

import { useState } from "react"
import VoteForm from "@/components/VoteForm"

const BORDER = "rgba(255,255,255,0.07)"
const SURFACE = "#141825"

export default function Home() {
  const [step, setStep] = useState<"intro" | "vote">("intro")

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

      {/* INTRO */}
      {step === "intro" && (
        <section className="flex-1 flex flex-col max-w-lg mx-auto w-full px-4 py-6 pb-10">

          {/* Etiqueta + Título */}
          <div className="mb-6">
            <h1 className="text-4xl font-black text-white leading-[1.05]">
              ¿Qué es la<br />
              <span style={{ color: "#B6FF6E" }}>Ley de Lemas?</span>
            </h1>
          </div>

          {/* === CON LEY === */}
          <div
            className="rounded-2xl overflow-hidden mb-4"
            style={{ background: SURFACE, border: `1px solid ${BORDER}`, borderTop: "3px solid #B6FF6E" }}
          >
            {/* Cabecera */}
            <div className="px-5 pt-4 pb-3" style={{ borderBottom: `1px solid ${BORDER}` }}>
              <span
                className="inline-block text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded mb-2"
                style={{ background: "rgba(182,255,110,0.12)", color: "#B6FF6E" }}
              >
                Con Ley de Lemas
              </span>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                Dentro de un mismo partido pueden presentarse <strong className="text-white font-bold">varios candidatos</strong>. Los votos de todos ellos <strong className="text-white font-bold">se suman</strong> para obtener el resultado final del partido. Gana el partido que acumula más votos en total, aunque ninguno de sus candidatos haya sido el más votado individualmente.
              </p>
            </div>

            {/* Ejemplo */}
            <div className="px-5 py-4">
              <p className="text-[10px] font-black uppercase tracking-widest mb-3" style={{ color: "rgba(255,255,255,0.25)" }}>
                Ejemplo — Partido Azul
              </p>
              <div className="space-y-2 mb-3">
                {[
                  { name: "Candidato A", votes: "120.000" },
                  { name: "Candidato B", votes: "80.000" },
                  { name: "Candidato C", votes: "50.000" },
                ].map((c, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between px-4 py-3 rounded-xl"
                    style={{ background: "rgba(255,255,255,0.04)", border: `1px solid ${BORDER}` }}
                  >
                    <span className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>{c.name}</span>
                    <span className="text-sm font-black text-white">{c.votes} votos</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2 my-3">
                <div className="flex-1 h-px" style={{ background: "rgba(182,255,110,0.2)" }} />
                <span className="text-[10px] font-semibold" style={{ color: "rgba(182,255,110,0.45)" }}>se suman</span>
                <div className="flex-1 h-px" style={{ background: "rgba(182,255,110,0.2)" }} />
              </div>
              <div
                className="flex items-center justify-between px-4 py-3 rounded-xl mb-4"
                style={{ background: "rgba(182,255,110,0.08)", border: "1px solid rgba(182,255,110,0.25)" }}
              >
                <span className="text-sm font-bold" style={{ color: "#B6FF6E" }}>Total Partido Azul</span>
                <span className="text-xl font-black text-white">250.000 votos</span>
              </div>
              <div
                className="px-4 py-2.5 rounded-xl text-center"
                style={{ background: "rgba(182,255,110,0.08)", border: "1px solid rgba(182,255,110,0.2)" }}
              >
                <span className="text-sm font-black" style={{ color: "#B6FF6E" }}>Partido Azul gana con 250.000 votos</span>
              </div>
            </div>
          </div>

          {/* === SIN LEY === */}
          <div
            className="rounded-2xl overflow-hidden mb-5"
            style={{ background: SURFACE, border: `1px solid ${BORDER}`, borderTop: "3px solid #FF1F36" }}
          >
            {/* Cabecera */}
            <div className="px-5 pt-4 pb-3" style={{ borderBottom: `1px solid ${BORDER}` }}>
              <span
                className="inline-block text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded mb-2"
                style={{ background: "rgba(255,31,54,0.12)", color: "#FF1F36" }}
              >
                Sin Ley de Lemas
              </span>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                Cada partido presenta <strong className="text-white font-bold">un único candidato</strong>. Los votos se cuentan por separado y gana quien obtiene más. <strong className="text-white font-bold">No se pueden sumar</strong> los votos de distintos candidatos del mismo partido.
              </p>
            </div>

            {/* Ejemplo */}
            <div className="px-5 py-4">
              <p className="text-[10px] font-black uppercase tracking-widest mb-3" style={{ color: "rgba(255,255,255,0.25)" }}>
                Los mismos votos, otra regla
              </p>
              <div className="space-y-2 mb-4">
                {[
                  { name: "Partido Azul", note: "solo cuenta Candidato A", votes: "120.000", wins: false },
                  { name: "Partido Rojo", note: "candidato único", votes: "180.000", wins: true },
                  { name: "Partido Amarillo", note: "candidato único", votes: "90.000", wins: false },
                ].map((c, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between px-4 py-3 rounded-xl"
                    style={{
                      background: c.wins ? "rgba(255,31,54,0.08)" : "rgba(255,255,255,0.03)",
                      border: `1px solid ${c.wins ? "rgba(255,31,54,0.3)" : BORDER}`,
                    }}
                  >
                    <div>
                      <p className="text-sm font-bold" style={{ color: c.wins ? "#fff" : "rgba(255,255,255,0.45)" }}>
                        {c.name}
                      </p>
                      <p className="text-[10px]" style={{ color: "rgba(255,255,255,0.2)" }}>{c.note}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-black" style={{ color: c.wins ? "#fff" : "rgba(255,255,255,0.35)" }}>
                        {c.votes}
                      </p>
                      {c.wins && (
                        <p className="text-[10px] font-black" style={{ color: "#FF1F36" }}>GANA</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div
                className="px-4 py-3 rounded-xl text-center"
                style={{ background: "rgba(255,31,54,0.06)", border: "1px solid rgba(255,31,54,0.2)" }}
              >
                <p className="text-sm font-black" style={{ color: "#FF6B7A" }}>
                  Partido Rojo gana con 180.000 votos
                </p>
                <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.3)" }}>
                  aunque Partido Azul acumuló 250.000 entre sus candidatos
                </p>
              </div>
            </div>
          </div>

          {/* Conclusión */}
          <div
            className="px-5 py-4 rounded-2xl mb-6 text-center"
            style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
          >
            <p className="text-base font-black text-white leading-snug">
              Los mismos votos. La misma gente.
            </p>
            <p className="text-base font-black leading-snug" style={{ color: "#B6FF6E" }}>
              Distinto ganador.
            </p>
            <p className="text-xs mt-2" style={{ color: "rgba(255,255,255,0.3)" }}>
              La Ley de Lemas cambia quién gana, no cuántos votan.
            </p>
          </div>

          <button
            onClick={() => setStep("vote")}
            className="w-full font-black text-base rounded-2xl py-4 tracking-wide transition-all active:scale-95"
            style={{ background: "#B6FF6E", color: "#0B0E14" }}
          >
            Dar mi opinión
          </button>
        </section>
      )}

      {/* VOTE */}
      {step === "vote" && (
        <section className="flex-1 flex flex-col max-w-lg mx-auto w-full px-4 py-6 pb-10">
          <div className="mb-8">
            <span
              className="inline-block text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md mb-3"
              style={{ background: "rgba(124,95,255,0.15)", color: "#7C5FFF" }}
            >
              Tu opinión
            </span>
            <h2 className="text-3xl font-black text-white leading-tight">
              ¿Estás de acuerdo<br />con la Ley de Lemas?
            </h2>
            <p className="text-sm mt-2" style={{ color: "rgba(255,255,255,0.35)" }}>
              Seleccioná una opción e ingresá tu teléfono
            </p>
          </div>

          <VoteForm />

          <button
            onClick={() => setStep("intro")}
            className="text-sm text-center mt-5"
            style={{ color: "rgba(255,255,255,0.25)" }}
          >
            ← Volver
          </button>
        </section>
      )}

    </main>
  )
}
