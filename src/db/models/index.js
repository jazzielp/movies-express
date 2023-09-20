const { Movie, MovieSchema } = require('./movie.model.js')
const setupModels = (sequelize) => {
  Movie.init(MovieSchema, Movie.config(sequelize))
}

module.exports = setupModels
