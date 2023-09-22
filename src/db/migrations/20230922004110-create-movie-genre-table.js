'use strict'
const { MovieGenreSchema, MOVIE_GENRE_TABLE } = require('../models/movie_genre.model')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(MOVIE_GENRE_TABLE, MovieGenreSchema)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(MOVIE_GENRE_TABLE)
  }
}
