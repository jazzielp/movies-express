const Joi = require('joi')

const movieId = Joi.number().integer().min(1).positive()
const genreId = Joi.number().integer().min(1).positive()

const createMovieGenreSchema = Joi.object({
  movieId: movieId.required(),
  genreId: genreId.required()
})

const updateMovieGenreSchema = Joi.object({
  movieId,
  genreId
})

module.exports = {
  createMovieGenreSchema,
  updateMovieGenreSchema
}
