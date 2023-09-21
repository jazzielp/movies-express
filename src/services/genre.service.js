const { models } = require('../lib/sequelize')

class GenreService {
  async findAll () {
    return await models.Genre.findAll()
  }

  async findById (id) {
    return await models.Genre.findByPk(id)
  }

  async create (data) {
    return await models.Genre.create(data)
  }

  async update (id, data) {
    const genre = await models.Genre.findByPk(id)
    return await genre.update(data)
  }

  async delete (id) {
    const genre = await models.Genre.findByPk(id)
    return await genre.destroy()
  }
}

module.exports = GenreService
