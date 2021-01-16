/**
 * This file defines exports meant for use in other packages.
 * @packageDocumentation
 */

//  Database Entities
export { Dream } from './entities'

// Database Connection Helpers
export { connect, DatabaseConnectionOptions } from './connect'
export { getConnection, Connection, ConnectionOptions } from 'typeorm'

// Entity Factories
export { dreamFactory } from './factories/dreamFactory'
