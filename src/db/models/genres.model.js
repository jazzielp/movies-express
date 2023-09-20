const { Sequelize, DataTypes, Model } = require('sequelize')

const GENRE_TABLE = 'genres'

const GenreSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING
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

class Genre extends Model {
  static associate (models) {}

  static config (sequelize) {
    return {
      sequelize,
      tableName: GENRE_TABLE,
      modelName: 'Genre',
      timestamps: false
    }
  }
}

module.exports = {
  GENRE_TABLE,
  GenreSchema,
  Genre
}
