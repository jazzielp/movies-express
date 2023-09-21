const Joi = require('joi')

const id = Joi.number().integer().min(1)
const name = Joi.string().min(1).max(255)

const createGenreSchema = Joi.object({
  name: name.required()
})

const updateGenreSchema = Joi.object({
  name
})

const getGenreSchema = Joi.object({
  id: id.required()
})

module.exports = {
  createGenreSchema,
  updateGenreSchema,
  getGenreSchema
}
