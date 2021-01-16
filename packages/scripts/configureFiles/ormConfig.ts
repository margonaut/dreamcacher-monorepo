/**
 * This script generate ormconfig.json, which is used to configure TypeORM CLI
 * for the purposes of running, reverting, and creating migrations
 */

import fs from 'fs'
import dotenv from 'dotenv'
import { generateConfig, getEnvPath } from '@dreamcacher/shared'

dotenv.config({ path: getEnvPath() })
const Config = generateConfig()

const configFilePath = 'ormconfig.json'

// Delete the existing file so we can regenerate it
if (fs.existsSync(configFilePath)) {
  try {
    fs.unlinkSync(configFilePath)
  } catch (err) {
    console.error(err)
  }
}

const config = {
  name: 'default',
  type: 'postgres',
  entities: ['packages/database/dist/entities/**/*.js'],
  migrations: ['packages/database/dist/migrations/*.js'],
  database: Config.database.name,
  username: Config.database.username,
  password: Config.database.password,
  host: Config.database.host,
  port: Config.database.port,
  synchronize: false,
  logging: false,
  cli: {
    entitiesDir: 'packages/database/src/entities',
    migrationsDir: 'packages/database/src/migrations',
  },
}

fs.writeFileSync('ormconfig.json', JSON.stringify(config, null, 2))
