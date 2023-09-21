const express = require('express')
const router = express.Router()

const movieRouter = require('./movies.router')

const routerApi = (app) => {
  app.use('/api', router)
  router.use('/movies', movieRouter)
}

module.exports = routerApi
