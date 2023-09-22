const express = require('express')
const router = express.Router()
const MovieGenreService = require('../services/movie-genre.service')
const movieGenreService = new MovieGenreService()
const { createMovieGenreSchema } = require('../schemas/movie-genre.schema')
const validatorHandler = require('../middlewares/validator.handler')

router.get('/', async (req, res, next) => {
  try {
    const movieGenres = await movieGenreService.findAll()
    res.json(movieGenres)
  } catch (error) {
    next(error)
  }
})

router.post('/',
  validatorHandler(createMovieGenreSchema, 'body'),
  async (req, res, next) => {
    try {
      const data = req.body
      const movieGenre = await movieGenreService.create(data)
      res.json(movieGenre)
    } catch (error) {
      next(error)
    }
  })

module.exports = router
