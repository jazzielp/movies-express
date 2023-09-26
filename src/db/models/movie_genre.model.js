const { DataTypes, Sequelize, Model } = require('sequelize')
const { MOVIE_TABLE } = require('../models/movies.model')
const { GENRE_TABLE } = require('../models/genres.model')

const MOVIE_GENRE_TABLE = 'movie_genre'

const MovieGenreSchema = {
  movieId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'movie_id',
    primaryKey: true,
    references: {
      model: MOVIE_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  genreId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'genre_id',
    primaryKey: true,
    references: {
      model: GENRE_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'updated_at',
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    onUpdate: Sequelize.literal('CURRENT_TIMESTAMP')
  }
}

class MovieGenre extends Model {
  static associate (models) {
  }

  static config (sequelize) {
    return {
      sequelize,
      tableName: MOVIE_GENRE_TABLE,
      modelName: 'MovieGenre',
      timestamps: false,
      primaryKey: ['movieId', 'genreId']
    }
  }
}

module.exports = {
  MOVIE_GENRE_TABLE,
  MovieGenreSchema,
  MovieGenre
}
