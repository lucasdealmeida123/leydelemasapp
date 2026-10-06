"use client"

import type { ReactNode } from "react"
import { Montserrat } from "next/font/google"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
})

const GOLD = "#F5C400"
const RED = "#E10600"
const GREEN = "#1B9E48"
const INK = "#07101C"
const ROW = "#16243C"

const CANDIDATES = [
  ["Candidato A", "120.000"],
  ["Candidato B", "80.000"],
  ["Candidato C", "50.000"],
] as const

export function Explainer({ onContinue }: { onContinue: () => void }) {
  return (
    <section
      className={`${montserrat.className} lema-screen flex min-h-dvh w-full flex-col px-[clamp(14px,1.8vw,28px)] py-[clamp(12px,1.6vh,20px)]`}
      style={{ background: INK }}
    >
      <header className="lema-title shrink-0 pb-[clamp(48px,6.5vh,64px)] text-center">
        <h1 className="text-[clamp(1.9rem,5.8vw,3.6rem)] font-black leading-none tracking-tight text-white">
          ¿Qué es la Ley de Lemas?
        </h1>
        <div className="mt-[clamp(10px,1.4vh,16px)] flex items-center justify-center gap-3">
          <span className="h-[2px] w-[clamp(28px,4vw,72px)] rounded-full" style={{ background: GOLD }} />
          <p
            className="text-[clamp(13px,1.7vw,18px)] font-black tracking-[0.18em]"
            style={{ color: GOLD }}
          >
            LOOP NOTICIAS
          </p>
          <span className="h-[2px] w-[clamp(28px,4vw,72px)] rounded-full" style={{ background: GOLD }} />
        </div>
      </header>

      <div className="lema-board grid grid-cols-2 items-stretch gap-x-[clamp(10px,1.2vw,18px)]">
        <article
          className="lema-panel lema-from-left row-span-4 grid min-w-0 grid-rows-subgrid rounded-2xl border-2 p-[clamp(12px,1.4vw,18px)] pb-[clamp(16px,2vh,22px)]"
          style={{ borderColor: GOLD, background: "rgba(245,196,0,0.035)", gridTemplateRows: "subgrid" }}
        >
          <Pill color={GOLD} ink="#1A1400" icon={<PeopleIcon />}>
            CON LEY DE LEMAS
          </Pill>

          <div className="self-start pt-[clamp(8px,1vh,12px)] space-y-[clamp(4px,0.6vh,8px)] text-[clamp(14px,1.7vw,18px)] font-medium leading-snug text-white">
            <p>Dentro de un mismo partido pueden presentarse varios candidatos.</p>
            <p>
              Los votos de todos ellos <Mark color={GOLD}>se suman</Mark> para obtener el resultado
              final del partido.
            </p>
            <p>
              Gana el partido que <Mark color={GOLD}>acumula más votos en total</Mark>, aunque
              ninguno de sus candidatos haya sido el más votado individualmente.
            </p>
          </div>

          <div className="lema-example mt-[clamp(28px,3.6vh,44px)]">
            <ExampleFrame label="EJEMPLO — PARTIDO AZUL" color={GOLD} ink="#1A1400">
              <div className="space-y-[clamp(3px,0.5vh,6px)]">
                {CANDIDATES.map(([name, votes]) => (
                  <VoteLine key={name} name={name} votes={votes} />
                ))}
              </div>
              <p
                className="py-[clamp(2px,0.4vh,6px)] text-center text-[clamp(10px,0.95vw,13px)] font-extrabold"
                style={{ color: GOLD }}
              >
                ↓ se suman
              </p>
              <div
                className="flex items-center justify-between gap-2 rounded-lg px-[clamp(8px,0.8vw,12px)] py-[clamp(5px,0.7vh,8px)] text-white"
                style={{ background: GREEN }}
              >
                <span className="whitespace-nowrap text-[clamp(11px,1vw,14px)] font-extrabold leading-none">
                  Total Partido Azul
                </span>
                <span className="shrink-0 whitespace-nowrap text-[clamp(11px,1vw,14px)] font-black tabular-nums">
                  250.000
                </span>
              </div>
            </ExampleFrame>
          </div>

            <Result tone="green">Partido Azul gana con 250.000 votos</Result>
        </article>

        <article
          className="lema-panel lema-from-right row-span-4 grid min-w-0 grid-rows-subgrid rounded-2xl border-2 p-[clamp(12px,1.4vw,18px)] pb-[clamp(16px,2vh,22px)]"
          style={{ borderColor: RED, background: "rgba(225,6,0,0.045)", gridTemplateRows: "subgrid" }}
        >
          <Pill color={RED} ink="#fff" icon={<PersonIcon />}>
            SIN LEY DE LEMAS
          </Pill>

          <div className="self-start pt-[clamp(8px,1vh,12px)] space-y-[clamp(4px,0.6vh,8px)] text-[clamp(14px,1.7vw,18px)] font-medium leading-snug text-white">
            <p>Cada partido presenta un único candidato.</p>
            <p>
              Los votos se cuentan por separado y gana quien <Mark color="#FF4D5A">obtiene más</Mark>.
            </p>
            <p>
              <Mark color="#FF4D5A">No se pueden sumar</Mark> los votos de distintos candidatos del
              mismo partido.
            </p>
          </div>

          <div className="lema-example mt-[clamp(28px,3.6vh,44px)]">
            <ExampleFrame label="LOS MISMOS VOTOS, OTRA REGLA" color={RED} ink="#fff">
              <div className="space-y-[clamp(3px,0.5vh,6px)]">
                <VoteLine name="Partido Azul" detail="solo cuenta Candidato A" votes="120.000" />
                <VoteLine name="Partido Rojo" detail="candidato único" votes="180.000" win />
                <VoteLine name="Partido Amarillo" detail="candidato único" votes="90.000" />
              </div>
            </ExampleFrame>
          </div>

            <Result tone="red">
              Partido Rojo gana con 180.000 votos
              <span className="mt-0.5 block text-[0.78em] font-medium leading-tight">
                aunque Partido Azul acumuló 250.000 entre sus candidatos.
              </span>
            </Result>
        </article>
      </div>

      <div className="lema-action shrink-0 pt-[clamp(36px,6vh,64px)]">
        <button
          type="button"
          onClick={onContinue}
          className="w-full rounded-2xl py-[clamp(12px,1.6vh,16px)] text-[clamp(14px,1.15vw,16px)] font-black tracking-wide transition-transform active:scale-[0.99]"
          style={{ background: GOLD, color: "#1A1400" }}
        >
          Dar mi opinión
        </button>
      </div>
    </section>
  )
}

function Pill({
  color,
  ink,
  icon,
  children,
}: {
  color: string
  ink: string
  icon: ReactNode
  children: ReactNode
}) {
  return (
    <div
      className="inline-flex h-8 w-fit max-w-full shrink-0 items-center gap-1.5 self-start rounded-full py-0.5 pl-0.5 pr-3"
      style={{ background: color, color: ink }}
    >
      <span
        className="grid h-7 w-7 shrink-0 place-items-center rounded-full"
        style={{ background: "rgba(0,0,0,0.14)" }}
      >
        {icon}
      </span>
      <span className="text-[clamp(10px,0.95vw,13px)] font-black tracking-wide">{children}</span>
    </div>
  )
}

function ExampleFrame({
  label,
  color,
  ink,
  children,
}: {
  label: string
  color: string
  ink: string
  children: ReactNode
}) {
  return (
    <div className="flex flex-col">
      <p
        className="shrink-0 rounded-md px-2 py-1.5 text-center text-[clamp(9px,2.15vw,12px)] font-black leading-none tracking-wide"
        style={{ background: color, color: ink }}
      >
        {label}
      </p>
      <div className="mt-[clamp(8px,1vh,12px)] flex flex-col gap-[clamp(3px,0.5vh,6px)]">{children}</div>
    </div>
  )
}

function Mark({ color, children }: { color: string; children: ReactNode }) {
  return (
    <strong className="font-black" style={{ color }}>
      {children}
    </strong>
  )
}

function VoteLine({
  name,
  detail,
  votes,
  win = false,
}: {
  name: string
  detail?: string
  votes: string
  win?: boolean
}) {
  return (
    <div className="vote-line rounded-lg px-2.5 py-[clamp(4px,0.55vh,7px)]" style={{ background: win ? "#D3122A" : ROW }}>
      <div className="min-w-0">
        <p className="whitespace-nowrap text-[clamp(11px,0.95vw,14px)] font-bold leading-none text-white">{name}</p>
        {detail && (
          <p className="text-[clamp(9px,0.8vw,12px)] font-medium leading-tight text-white/70">{detail}</p>
        )}
      </div>
      <div className="votes flex flex-col items-end gap-0.5">
        <p className="whitespace-nowrap text-[clamp(12px,1vw,14px)] font-black tabular-nums leading-none text-white">
          {votes}
        </p>
        {win && (
          <span className="rounded bg-white px-1 py-px text-[8px] font-black leading-none tracking-wide text-[#C8102E]">
            GANA
          </span>
        )}
      </div>
    </div>
  )
}

function Result({ tone, children }: { tone: "green" | "red"; children: ReactNode }) {
  const background = tone === "green" ? "#178A3E" : RED
  return (
    <div
      className="lema-result mt-[clamp(18px,2.4vh,26px)] flex min-h-[52px] items-center gap-2 self-stretch rounded-xl px-3 py-[clamp(8px,1vh,12px)] text-white"
      style={{ background }}
    >
      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white/15">
        <TrophyIcon />
      </span>
      <p className="min-w-0 text-[clamp(11px,0.95vw,14px)] font-extrabold leading-snug">{children}</p>
    </div>
  )
}

function PeopleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
      <circle cx="9" cy="8" r="2.7" />
      <circle cx="16" cy="8.7" r="2.15" />
      <path d="M3.4 18.6c.7-3 3-4.6 5.6-4.6s4.9 1.6 5.6 4.6H3.4z" />
      <path d="M14.2 14.4c1.5-.15 3 .55 3.9 2 .5.8.7 1.6.8 2.2h-2.8c-.2-1.6-.8-2.9-1.9-4.2z" />
    </svg>
  )
}

function PersonIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
      <circle cx="12" cy="8" r="3.1" />
      <path d="M5 19.2c.9-3.4 3.2-5.1 7-5.1s6.1 1.7 7 5.1H5z" />
    </svg>
  )
}

function TrophyIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
      <path d="M17 4V2H7v2H3.5v2.5a3.5 3.5 0 0 0 3.2 3.48A5.5 5.5 0 0 0 11 13.4V16H8.5v2h7v-2H13v-2.6a5.5 5.5 0 0 0 4.3-3.42A3.5 3.5 0 0 0 20.5 6.5V4H17zM6.7 8.2A1.5 1.5 0 0 1 5.5 6.7V6H7v1.2c0 .35.04.69.1 1zM18.5 6.7a1.5 1.5 0 0 1-1.2 1.5c.06-.31.1-.65.1-1V6h1.1v.7z" />
    </svg>
  )
}
