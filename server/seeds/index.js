const seedCategories = require('./merchSeeds');


const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedCategories();
  console.log('\n----- MERCH SEEDED -----\n');
  process.exit(0);
};

seedAll();
