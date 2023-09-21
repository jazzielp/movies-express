const Joi = require('joi')

const id = Joi.number().integer().min(1)
const title = Joi.string().min(1).max(255)
const year = Joi.number().integer().min(1900).max(2020)
const director = Joi.string().min(1).max(255)
const duration = Joi.number().integer().min(1)
const poster = Joi.string().min(1).max(255)
const rate = Joi.number().min(0).max(10)
const genre = Joi.array().items(Joi.string().min(1).max(255))

const createMovieSchema = Joi.object({
  title: title.required(),
  year: year.required(),
  director: director.required(),
  duration: duration.required(),
  poster: poster.required(),
  rate: rate.required(),
  genre: genre.required()
})

const updateMovieSchema = Joi.object({
  title,
  year,
  director,
  duration,
  poster,
  rate,
  genre
})

const getMovieSchema = Joi.object({
  id: id.required()
})

module.exports = {
  createMovieSchema,
  updateMovieSchema,
  getMovieSchema
}
