import { generateConfig, getEnvPath } from '@dreamcacher/shared'
import dotenv from 'dotenv'
import {
  connect,
  Connection,
  DatabaseConnectionOptions,
  Dream,
  dreamFactory,
} from '@dreamcacher/database'

dotenv.config({ path: getEnvPath() })
const Config = generateConfig()

const initializeDatabaseConnection = async (): Promise<Connection> => {
  const connectionOptions = {
    database: Config.database.name,
    username: Config.database.username,
    password: Config.database.password,
    host: Config.database.host,
    port: Config.database.port,
  }
  return await connect(connectionOptions as DatabaseConnectionOptions)
}

const seedDatabase = async () => {
  const connection = await initializeDatabaseConnection()

  const dreams = await Dream.find()
  console.log(dreams)

  connection.close()
}

seedDatabase()
