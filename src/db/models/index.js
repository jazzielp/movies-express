const { Movie, MovieSchema } = require('./movies.model')
const { Genre, GenreSchema } = require('./genres.model')
const setupModels = (sequelize) => {
  Movie.init(MovieSchema, Movie.config(sequelize))
  Genre.init(GenreSchema, Genre.config(sequelize))
}

module.exports = setupModels
