const { models } = require('../lib/sequelize')

class MovieGenreService {
  async findAll () {
    return await models.MovieGenre.findAll()
  }

  async findById (id) {
    return await models.MovieGenre.findByPk(id)
  }

  async create (data) {
    return await models.MovieGenre.create(data)
  }

  async update (id, data) {
    const movieGenre = await models.MovieGenre.findByPk(id)
    return await movieGenre.update(data)
  }

  async delete (id) {
    const movieGenre = await models.MovieGenre.findByPk(id)
    return await movieGenre.destroy()
  }
}

module.exports = MovieGenreService
