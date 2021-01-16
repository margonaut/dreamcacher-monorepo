export enum Environment {
  Test = 'test',
  Local = 'local',
  Dev = 'dev',
  Staging = 'staging',
  Production = 'production',
}

export interface ConfigurationValues {
  app: AppValues
  database: DatabaseValues
}

interface AppValues {
  env?: Environment
}

export interface DatabaseValues {
  host?: string
  port?: number
  username?: string
  password?: string
  name?: string
  socketPath?: string
}

export const generateConfig = (): ConfigurationValues => {
  const Config = {
    app: {
      env: process.env.APP_ENV as Environment,
    },
    database: {
      name: process.env.DB_NAME,
      host: process.env.DB_HOST,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
    },
  }

  return Config
}
