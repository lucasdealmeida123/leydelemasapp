import { NextRequest, NextResponse } from "next/server"
import { sql } from "@/lib/db"

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null)
  if (!body) return NextResponse.json({ error: "Datos inválidos" }, { status: 400 })

  const { phone, vote } = body as { phone?: string; vote?: string }

  if (!phone || !vote || !["acepta", "no_acepta"].includes(vote)) {
    return NextResponse.json({ error: "Datos inválidos" }, { status: 400 })
  }

  const cleaned = phone.replace(/\D/g, "")
  if (cleaned.length < 7 || cleaned.length > 15) {
    return NextResponse.json({ error: "Número de teléfono inválido" }, { status: 400 })
  }

  try {
    await sql("INSERT INTO votes (phone, vote) VALUES ($1, $2)", [cleaned, vote])
    return NextResponse.json({ ok: true })
  } catch (e: unknown) {
    const pg = e as { code?: string }
    if (pg.code === "23505") {
      return NextResponse.json(
        { error: "Este número ya registró un voto" },
        { status: 409 }
      )
    }
    console.error(e)
    return NextResponse.json({ error: "Error al registrar voto" }, { status: 500 })
  }
}
