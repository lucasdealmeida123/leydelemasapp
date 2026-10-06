import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ley de Lemas · Loop Noticias",
  description: "Encuesta ciudadana: ¿Aceptás o no aceptás la Ley de Lemas en Misiones?",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${inter.className} antialiased`} style={{ background: "var(--loop-bg)" }}>
        {children}
      </body>
    </html>
  )
}
