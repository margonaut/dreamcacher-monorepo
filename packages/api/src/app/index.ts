import dotenv from 'dotenv'
import { generateConfig, getEnvPath } from '@dreamcacher/shared'
import express, { Express } from 'express'
import cors from 'cors'
import routes from './routes'
import { initializeDatabaseConnection } from './loaders/connectToDatabase'

dotenv.config({ path: getEnvPath() })
const Config = generateConfig()

/**
 * Initialize the Express API by
 * 1. Setting up the database connection
 * 2. Configuring Express routes
 */
export const initializeApp = async (): Promise<Express> => {
  if (!(Config.app.env === 'test')) {
    await initializeDatabaseConnection(Config)
  }

  const app = express()

  app.use(cors())
  app.use(express.json())
  app.use('/', routes)

  console.log(`Dreamcacher API initialized; APP_ENV=${Config.app.env}`)

  return app
}
