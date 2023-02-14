const path = require("path");
const { User } = require(path.join(__dirname, "../models"));

const userdata = [
    {
        id: 1,
        username: "JohnDoe",
        email: "noone@nowhere.com",
        password: "12345678"
    },
    {
        id: 2,
        username: "JaneDoe",
        email: "anon@aol.com",
        password: "abcdefgh"
        
    },
    {
        id: 3,
        username: "HarryPotter",
        email: "user@compuserve.com",
        password: "abc123zyx"
    },
    {
        id: 4,
        username: "HermioneGranger",
        email: "person@peoplepc.com",
        password: "1234512345"
    },
    {
        id: 5,
        username: "RonWeasley",
        email: "someone@yahoo.com",
        password: "aaaaaaaa"
    },
    {
        id: 6,
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