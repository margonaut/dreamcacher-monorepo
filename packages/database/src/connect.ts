/**
 * This file defines functions that are used to create database connections
 */

import { Connection, ConnectionOptions, createConnection } from 'typeorm'

export const connect = async (options: DatabaseConnectionOptions): Promise<Connection> => {
  const { database, username, password, host, port, logging } = options
  const connectionOptions = {
    type: 'postgres',
    host: host,
    port: port,
    username,
    password,
    database,
    entities: [__dirname + '/entities/**/*.{js,ts}'],
    synchronize: false,
    logging,
  } as ConnectionOptions
  return await createConnection(connectionOptions)
}

export type DatabaseConnectionOptions = {
  username: string
  password: string
  database: string
  host?: string
  port?: number
  socketPath?: string
  logging?: boolean
}
