import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  const { password } = await req.json().catch(() => ({ password: "" }))
  if (!process.env.ADMIN_PASSWORD || password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Contraseña incorrecta" }, { status: 401 })
  }
  const res = NextResponse.json({ ok: true })
  res.cookies.set("ldl_admin", "1", {
    httpOnly: true,
    path: "/",
    maxAge: 3600 * 8,
    sameSite: "strict",
  })
  return res
}
