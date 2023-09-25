const { models } = require('../lib/sequelize')

class MovieService {
  async findAll () {
    return await models.Movie.findAll()
  }

  async findById (id) {
    return await models.Movie.findByPk(id)
  }

  async create (data) {
    const { genre } = data
    const movie = await models.Movie.create(data)
    genre.forEach(element => {
      this.createMovieGenre(movie.id, element)
    })
    return movie
  }

  async update (id, data) {
    const movie = await models.Movie.findByPk(id)
    return await movie.update(data)
  }

  async delete (id) {
    const movie = await models.Movie.findByPk(id)
    return await movie.destroy()
  }

  async createMovieGenre (movieId, genreName) {
    const movie = await models.Movie.findByPk(movieId)
    const genre = await models.Genre.findOne({ where: { name: genreName } })
    if (!movie || !genre) {
      return null
    }
    return await models.MovieGenre.create({ movieId, genreId: genre.id })
  }
}

module.exports = MovieService
