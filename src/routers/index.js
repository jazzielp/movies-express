const express = require('express')
const router = express.Router()

const movieRouter = require('./movies.router')

const routerApi = (app) => {
  app.use('/users', router)
  app.use('/movies', movieRouter)
}

module.exports = routerApi
