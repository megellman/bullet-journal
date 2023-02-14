const path = require("path");
const { User } = require(path.join(__dirname, "../models"));

const userdata = [
    {
        username: "JohnDoe",
        email: "noone@nowhere.com",
        password: "12345678"
    },
    {
        username: "JaneDoe",
        email: "anon@aol.com",
        password: "abcdefgh"
        
    },
    {
        username: "HarryPotter",
        email: "user@compuserve.com",
        password: "abc123zyx"
    },
    {
        username: "HermioneGranger",
        email: "person@peoplepc.com",
        password: "1234512345"
    },
    {
        username: "RonWeasley",
        email: "someone@yahoo.com",
        password: "aaaaaaaa"
    },
    {
        username: "megan",
        email: "megan@megan.megan",
        password: "megan123"
    }
];

const seedUser = async () => await User.bulkCreate(userdata, {
    individualHooks: true,
    returning: true
  });

module.exports = seedUser;