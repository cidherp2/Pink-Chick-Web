// bands model
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Band extends Model {}

Band.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
}, {
  sequelize,
  modelName: 'Band',
});

module.exports = Band;
