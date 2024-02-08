import {neon, neonConfig} from '@neondatabase/serverless'
import { drizzle } from "drizzle-orm/neon-http"

neonConfig.fetchConnectionCache = true

if (!process.env.DABASE_URL) {
  throw new Error('DABASE_URL is not set')
}

const sql = neon(process.env.DABASE_URL)

export const db = drizzle(sql)