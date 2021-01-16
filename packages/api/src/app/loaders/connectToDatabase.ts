import { connect, Dream, Connection, DatabaseConnectionOptions } from '@dreamcacher/database'
import { ConfigurationValues } from '@dreamcacher/shared'

export const initializeDatabaseConnection = async (
  Config: ConfigurationValues
): Promise<Connection> => {
  const connectionOptions = {
    type: 'postgres',
    host: Config.database.host,
    port: Config.database.port,
    username: Config.database.username,
    password: Config.database.password,
    database: Config.database.name,
    entities: [Dream],
  } as DatabaseConnectionOptions
  return await connect(connectionOptions)
}
