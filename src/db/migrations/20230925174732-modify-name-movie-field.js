'use strict'
const { GenreSchema, GENRE_TABLE } = require('../models/genres.model')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn(GENRE_TABLE, 'name', GenreSchema.name)
  },

  async down (queryInterface, Sequelize) {
  }
}
