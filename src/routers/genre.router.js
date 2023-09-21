const express = require('express')
const router = express.Router()

const GenreService = require('../services/genre.service')
const genreService = new GenreService()

router.get('/', async (req, res, next) => {
  const genres = await genreService.findAll()
  res.status(200).json({
    data: genres,
    message: 'genres listed'
  })
})

router.get('/:id', async (req, res, next) => {
  const { id } = req.params
  const genre = await genreService.findById(id)
  res.status(200).json({
    data: genre,
    message: 'genre retrieved'
  })
})

router.post('/', async (req, res, next) => {
  const { body } = req
  const createdGenre = await genreService.create(body)
  res.status(201).json({
    data: createdGenre,
    message: 'genre created'
  })
})

router.patch('/:id', async (req, res, next) => {
  const { id } = req.params
  const { body } = req
  const updatedGenre = await genreService.update(id, body)
  res.status(200).json({
    data: updatedGenre,
    message: 'genre updated'
  })
})

router.delete('/:id', async (req, res, next) => {
  const { id } = req.params
  const deletedGenre = await genreService.delete(id)
  res.status(200).json({
    data: deletedGenre,
    message: 'genre deleted'
  })
})

module.exports = router
