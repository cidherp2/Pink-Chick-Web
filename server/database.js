const {Sequelize} = require ('sequelize')

const sequelize = new Sequelize ('pink-db','user','pass',{
    dialect: 'sqlite',
    host: './pinkDb.sqlite'
})

module.exports = sequelize;