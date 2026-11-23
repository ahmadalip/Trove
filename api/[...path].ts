import { handle } from 'hono/vercel'

import { api } from '../src/worker/routes'

// Vercel serves the static app itself; only /api/* reaches this function.
export const config = { runtime: 'edge' }

export default handle(api)
