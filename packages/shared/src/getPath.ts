import * as path from 'path'

/**
 * @returns the process path
 */
export const getProcessName = (): string => {
  return process.argv[1] || ''
}

/**
 * @returns relative path to the project root from the process
 */
export const getRootPath = (): string => {
  const processName = getProcessName()

  const isRunningTests = processName.includes('jest')
  const isLocallPackageProcess = processName.includes('/dreamcacher/packages/api/dist/')

  // When running tests or a local package process, the .env file will be located
  // two folders up at the root. Otherwise, the .env will have been copied to the
  // root of the service
  if (isRunningTests || isLocallPackageProcess) {
    return '../..'
  }
  return ''
}

/**
 * @returns string relative path to the .env file from the process
 */
export const getEnvPath = (): string => {
  /* Path to env file from the execution root */
  return path.resolve(path.join(getRootPath(), '.env'))
}
