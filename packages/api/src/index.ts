/**
 * This file should serve as the main entrypoint of the Dreamcacher API
 *
 * @packageDocumentation
 */

import { initializeApp } from './app'

const PORT = process.env.PORT || 3001

initializeApp().then((app) => {
  app.listen(PORT, () => console.log(`Dreamcacher API running at ${PORT}...`))
})
