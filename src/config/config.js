import dotenv from 'dotenv'

if (process.env.NODE_ENV === 'prod') {
  dotenv.config({
    path: '.prod.env'
  })
} else if (process.env.NODE_ENV === 'dev') {
  dotenv.config({
    path: '.dev.env'
  })
} else {
  dotenv.config({
    path: '.test.env'
  })
}

export const config = {
  port: process.env.PORT,
  dbHost: process.env.DB_HOST,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbName: process.env.DB_NAME,
  dbPort: process.env.DB_PORT,
  jwtSecret: process.env.JTW_SECRET
}
