import { Pool } from "pg"

const pool = new Pool({ connectionString: process.env.DATABASE_URL })

let migrated = false

async function migrate() {
  if (migrated) return
  await pool.query(`
    CREATE TABLE IF NOT EXISTS votes (
      id SERIAL PRIMARY KEY,
      phone TEXT NOT NULL UNIQUE,
      vote TEXT NOT NULL CHECK (vote IN ('acepta', 'no_acepta')),
      created_at TIMESTAMPTZ DEFAULT NOW()
    );
  `)
  migrated = true
}

export async function sql<T = Record<string, unknown>>(
  text: string,
  params?: unknown[]
): Promise<T[]> {
  await migrate()
  const result = await pool.query(text, params)
  return result.rows
}
