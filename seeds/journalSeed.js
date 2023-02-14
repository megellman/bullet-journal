const path = require("path");
const { Journal } = require(path.join(__dirname, "../models"));

const journalData = [
    {
        "title": "Ideas",
        "date": 2016-10-02,
        "description": "Jotting down anything that inspires me",
        "user_id": 1,
    },
    {
        "title": "Personal",
        "date": 2010-04-19,
        "description": "Remembering all the details that make up my life",
        "background": "blue",
        "user_id": 2,
    },
    {
        "title": "Travel",
        "date": 2016-10-02,
        "description": "Everywhere I've been",
        "background": "pink",
        "user_id": 2,
    },
    {
        "title": "Travel",
        "date": 2020-03-11,
        "description": "Memories from all over the world",
        "background": "purple",
        "user_id": 3,
    },
    {
        "title": "Creative",
        "date": 2019-06-22,
        "description": "Short stories, songs, poems and such",
        "background": "red",
        "user_id": 4,
    },
    {
        "title": "Feelings",
        "date": 2017-09-16,
        "description": "A place to remember and reflect",
        "background": "red",
        "user_id": 5,
    },
    {
        "title": "Personal",
        "date": 2021-03-16,
        "description": "My Life and Memories",
        "background": "blue",
        "user_id": 6,
    },
    {
        "title": "Gardening",
        "date": 2013-01-16,
        "description": "Growth Tracker",
        "background": "pink",
        "user_id": 6,
    },
    {
        "title": "Travel",
        "date": 2011-09-26,
        "description": "Everywhere I've Been & Planning to Go",
        "background": "green",
        "user_id": 6,
    },
    {
        "title": "Cooking",
        "date": 2014-01-20,
        "description": "Culinary Endeavors",
        "background": "blue",
        "user_id": 6,
    },
    {
        "title": "Ideas",
        "date": 2017-09-16,
        "description": "Inspiration",
        "background": "purple",
        "user_id": 6,
    },

]

const seedJournal = async () => await Journal.bulkCreate(journalData);

module.exports = seedJournal;