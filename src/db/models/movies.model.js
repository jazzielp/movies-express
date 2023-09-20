const { Model, DataTypes, Sequelize } = require('sequelize')

const MOVIE_TABLE = 'movies'

const MovieSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  title: {
    allowNull: false,
    type: DataTypes.STRING
  },
  year: {
    allowNull: false,
    type: DataTypes.INTEGER,
    validate: {
      min: 1900,
      max: 2020
    },
    defaultValue: 2020
  },
  director: {
    allowNull: false,
    type: DataTypes.STRING
  },
  duration: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  poster: {
    allowNull: false,
    type: DataTypes.STRING
  },
  genre: {
    allowNull: false,
    type: DataTypes.ARRAY(DataTypes.STRING)
  },
  rate: {
    allowNull: false,
    type: DataTypes.FLOAT
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

class Movie extends Model {
  static associate (models) {

  }

  static config (sequelize) {
    return {
      sequelize,
      tableName: MOVIE_TABLE,
      modelName: 'Movie',
      timestamps: false
    }
  }
}

module.exports = { MovieSchema, Movie, MOVIE_TABLE }