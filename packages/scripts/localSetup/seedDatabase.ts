import { generateConfig, getEnvPath } from '@dreamcacher/shared'
import dotenv from 'dotenv'
import {
  connect,
  Connection,
  DatabaseConnectionOptions,
  Dream,
  dreamFactory,
} from '@dreamcacher/database'
import faker from 'faker'
import parseArgs from 'minimist'

dotenv.config({ path: getEnvPath() })
const Config = generateConfig()

const seedDatabase = async () => {
  const { wipeOldData } = parseArgs(process.argv)
  const connection = await initializeDatabaseConnection()

  if (wipeOldData) {
    console.log('Wiping existing data...')
    await Dream.delete({})
  }

  await createDatabaseEntities()
  connection.close()
}

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

const createDatabaseEntities = async () => {
  console.log('Seeidng database with Dreams...')

  await createRandomDream()
  await createRandomDream()
  await createRandomDream()

  const dreams = await Dream.find({})
  console.log('Seeded database with Dreams:')
  console.log(dreams)
}

const createRandomDream = async () => {
  await dreamFactory({
    name: `The Night of the ${faker.company.bsAdjective()} ${faker.company.bsNoun()}`,
    body: faker.lorem.sentence(),
  })
}

seedDatabase()
