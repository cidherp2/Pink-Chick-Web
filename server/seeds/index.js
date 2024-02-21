const seedCategories = require('./merchSeeds');

require('dotenv').config()

const sequelize = require('../config/connection');

// const createDb = async () => {
//   try{
//   await sequelize.query(`DROP DATABASE IF EXISTS pinkchicks_db;`,{ raw: true }) 
// await sequelize.query(`CREATE DATABASE pinkchicks_db;`, { raw: true })
// await sequelize.sync();
// console.log('\n----- DATABASE SYNCED -----\n');
// await seedCategories();
// console.log('\n----- MERCH SEEDED -----\n');
//   }
//   catch(err){
//     console.log("There was an error creating the db",err)
//   }
// }

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedCategories();
  console.log('\n----- MERCH SEEDED -----\n');
  process.exit(0);
};

seedAll();

