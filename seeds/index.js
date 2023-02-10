const path = require("path");
const sequelize = require(path.join(__dirname, '../config/connection'));
const seedUser = require('./userSeed');
const seedJournal = require('./journalSeed');
const seedEntry = require("./entrySeed");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedJournal();

  await seedEntry();

  process.exit(0);
};

seedAll();