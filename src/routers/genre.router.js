const express = require('express')
const router = express.Router()

const GenreService = require('../services/genre.service')
const genreService = new GenreService()
const { createGenreSchema, updateGenreSchema, getGenreSchema } = require('../schemas/genre.schema')
const validatorHandler = require('../middlewares/validator.handler')

router.get('/', async (req, res, next) => {
  try {
    const genres = await genreService.findAll()
    res.status(200).json({
      data: genres,
      message: 'genres listed'
    })
  } catch (error) {
    next(error)
  }
})

router.get('/:id',
  validatorHandler(getGenreSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params
      const genre = await genreService.findById(id)
      res.status(200).json({
        data: genre,
        message: 'genre retrieved'
      })
    } catch (error) {
      next(error)
    }
  })

router.post('/',
  validatorHandler(createGenreSchema, 'body'),
  async (req, res, next) => {
    try {
      const { body } = req
      const createdGenre = await genreService.create(body)
      res.status(201).json({
        data: createdGenre,
        message: 'genre created'
      })
    } catch (error) {
      next(error)
    }
  })

router.patch('/:id',
  validatorHandler(getGenreSchema, 'params'),
  validatorHandler(updateGenreSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params
      const { body } = req
      const updatedGenre = await genreService.update(id, body)
      res.status(200).json({
        data: updatedGenre,
        message: 'genre updated'
      })
    } catch (error) {
      next(error)
    }
  })

router.delete('/:id',
  validatorHandler(getGenreSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params
      const deletedGenre = await genreService.delete(id)
      res.status(200).json({
        data: deletedGenre,
        message: 'genre deleted'
      })
    } catch (error) {
      next(error)
    }
  })

module.exports = router
