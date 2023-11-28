const {Model, DataTypes} = require('sequelize');
const sequelize = require ('../config/connection')

class Merch extends Model {}

Merch.init({
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    description:{
        type: DataTypes.TEXT,
        allowNull: false
    },
    price:{
        type: DataTypes.DECIMAL
    },
    imageUrl:{
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Merch',
    timestamps: false,
    freezeTableName: true,
    underscored:false

})

module.exports = Merch