const { DataTypes, Sequelize, Model } = require('sequelize')

const MOVIE_GENRE_TABLE = 'movie_genre'

const MovieGenreSchema = {
  movieId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'movie_id'
  },
  genreId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'genre_id'
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
  static associate (models) {}

  static config (sequelize) {
    return {
      sequelize,
      tableName: MOVIE_GENRE_TABLE,
      modelName: 'MovieGenre',
      timestamps: false
    }
  }
}

module.exports = {
  MOVIE_GENRE_TABLE,
  MovieGenreSchema,
  MovieGenre
}
