const express = require('express')
const router = express.Router()

const movieRouter = require('./movies.router')
const genreRouter = require('./genre.router')
const movieGenreRouter = require('./movie_genre.router')

const routerApi = (app) => {
  app.use('/api', router)
  router.use('/movies', movieRouter)
  router.use('/genres', genreRouter)
  router.use('/movie-genre', movieGenreRouter)
}

module.exports = routerApi
