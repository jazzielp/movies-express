const { Movie, MovieSchema } = require('./movies.model')
const { Genre, GenreSchema } = require('./genres.model')
const { MovieGenre, MovieGenreSchema } = require('./movie_genre.model')
const setupModels = (sequelize) => {
  Movie.init(MovieSchema, Movie.config(sequelize))
  Genre.init(GenreSchema, Genre.config(sequelize))
  MovieGenre.init(MovieGenreSchema, MovieGenre.config(sequelize))
}

module.exports = setupModels
