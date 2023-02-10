const path = require("path")
const { Entry } = require(path.join(__dirname, "../models"));

const entryData = [
    {
        "title": "Spray on Shoes",
        "date": 2016-10-03,
        "content": "A spray on elastic based polymer that will solve the untied shoes epidemic",
        "journal_id": 1,
    },

    {
        "title": "Lunch Thoughts",
        "date": 2010-04-20,
        "content": "Today, I ate a peanut butter and jelly sandwich. It was delicious!",
        "journal_id": 2,
    },

    {
        "title": "Late Nights in Casablanca",
        "date": 2020-03-29,
        "content": "Of all the gin joints in all the towns in all the world, She walks into mine.",
        "journal_id": 3,
    },

    {
        "title": "Idea for a Childrens Book",
        "date": 2019-05-23,
        "content": "Not one, but two very hungry catepillars!",
        "journal_id": 4,
    },

    {
        "title": "Stupid Seagulls",
        "date": 2017-09-16,
        "content": "Today at the beach, a seagull stole my sandwich out of my hands. I chased it hoping to save a piece of it and ended up falling face first in the sand. It's safe to say that I'll never be going to that beach again.",
        "journal_id": 5,
    },
];

const seedEntry = () => Entry.bulkCreate(entryData);

module.exports = seedEntry;