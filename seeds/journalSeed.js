const path = require("path");
const { Journal } = require(path.join(__dirname, "../models"));

const journalData = [
    {
        "title": "Ideas",
        "date": 2016-10-02,
        "description": "Jotting down anything that inspires me",
        "background": "blue",
        "user_id": 1,
    },
    {
        "title": "Personal",
        "date": 2010-04-19,
        "description": "Remembering all the details that make up my life",
        "background": "red",
        "user_id": 2,
    },
    {
        "title": "Travel",
        "date": 2016-10-02,
        "description": "Everywhere I've been",
        "user_id": 2,
    },
    {
        "title": "Travel",
        "date": 2020-03-11,
        "description": "Memories from all over the world",
        "background": "yellow",
        "user_id": 3,
    },
    {
        "title": "Creative",
        "date": 2019-05-22,
        "description": "Short stories, songs, poems and such",
        "background": "purple",
        "user_id": 4,
    },
    {
        "title": "Feelings",
        "date": 2017-09-15,
        "description": "A place to remember and reflect",
        "background": "green",
        "user_id": 5,
    },
]

const seedJournal = async () => await Journal.bulkCreate(journalData);

module.exports = seedJournal;