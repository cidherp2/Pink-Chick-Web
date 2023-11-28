 // connection.js
 require('dotenv').config()
const { Sequelize } = require("sequelize");

const db_options = {
  host: process.env.DB_HOST || "localhost",
  dialect: process.env.DB_DIALECT || "mysql",
  port: process.env.DB_PORT || 3306
};

const sequelize = process.env.DATABASE_URL
  ? new Sequelize(process.env.DATABASE_URL)
  : new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    db_options
  );

module.exports = sequelize; // Exporta la instancia de Sequelize


