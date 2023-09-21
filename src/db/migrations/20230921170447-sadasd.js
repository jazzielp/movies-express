'use strict'
const { MovieSchema, MOVIE_TABLE } = require('../models/movies.model')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(MOVIE_TABLE, MovieSchema)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(MOVIE_TABLE)
  }
}
