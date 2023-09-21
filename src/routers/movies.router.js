const express = require('express')
const router = express.Router()

const MovieService = require('../services/movie.service')
const movieService = new MovieService()

router.get('/', async (req, res, next) => {
  const movies = await movieService.findAll()
  res.status(200).json({
    data: movies,
    message: 'movies listed'
  })
})

router.get('/:id', async (req, res, next) => {
  const { id } = req.params
  const movie = await movieService.findById(id)
  res.status(200).json({
    data: movie,
    message: 'movie retrieved'
  })
})

router.post('/', async (req, res, next) => {
  const { body } = req
  const createdMovie = await movieService.create(body)
  res.status(201).json({
    data: createdMovie,
    message: 'movie created'
  })
})

router.put('/:id', async (req, res, next) => {
  const { id } = req.params
  const { body } = req
  const updatedMovie = await movieService.update(id, body)
  res.status(200).json({
    data: updatedMovie,
    message: 'movie updated'
  })
})

router.delete('/:id', async (req, res, next) => {
  const { id } = req.params
  const deletedMovie = await movieService.delete(id)
  res.status(200).json({
    data: deletedMovie,
    message: 'movie deleted'
  })
})

module.exports = router
