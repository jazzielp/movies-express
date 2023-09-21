const { models } = require('../lib/sequelize')

class MovieService {
  async findAll () {
    return await models.Movie.findAll()
  }

  async findById (id) {
    return await models.Movie.findByPk(id)
  }

  async creat (data) {
    return await models.Movie.create(data)
  }

  async update (id, data) {
    const movie = await models.Movie.findByPk(id)
    return await movie.update(data)
  }

  async delete (id) {
    const movie = await models.Movie.findByPk(id)
    return await movie.destroy()
  }
}

module.exports = MovieService
