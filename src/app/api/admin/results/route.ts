import { NextRequest, NextResponse } from "next/server"
import { sql } from "@/lib/db"

export async function GET(req: NextRequest) {
  if (req.cookies.get("ldl_admin")?.value !== "1") {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 })
  }

  const counts = await sql<{ vote: string; count: string }>(
    "SELECT vote, COUNT(*) as count FROM votes GROUP BY vote"
  )
  const entries = await sql<{ phone: string; vote: string; created_at: string }>(
    "SELECT phone, vote, created_at FROM votes ORDER BY created_at DESC LIMIT 1000"
  )

  const acepta = Number(counts.find((r) => r.vote === "acepta")?.count ?? 0)
  const no_acepta = Number(counts.find((r) => r.vote === "no_acepta")?.count ?? 0)

  return NextResponse.json({ acepta, no_acepta, entries })
}

export async function DELETE(req: NextRequest) {
  if (req.cookies.get("ldl_admin")?.value !== "1") {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 })
  }
  await sql("DELETE FROM votes")
  return NextResponse.json({ ok: true })
}
