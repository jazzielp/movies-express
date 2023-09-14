import { config } from './config/config.js'

const USER = encodeURIComponent(config.dbUser)
const PASSWORD = encodeURIComponent(config.dbPassword)

const URL = `mysql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`

export const configSequelize = {
  development: {
    url: URL,
    dialect: 'mysql'
  },
  peoduction: {
    url: URL,
    dialect: 'mysql'
  }
}
