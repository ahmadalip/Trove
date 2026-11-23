import { Hono } from 'hono'

import { api } from './routes'

/*
  The Worker in front of the static app: the API from ./routes, everything else
  handed to the built assets with SPA fallback.
*/
type Env = { ASSETS: Fetcher }

const app = new Hono<{ Bindings: Env }>()

app.route('/', api)
app.all('*', (c) => c.env.ASSETS.fetch(c.req.raw))

export default app
