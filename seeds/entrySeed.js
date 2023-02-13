const path = require("path")
const { Entry } = require(path.join(__dirname, "../models"));

const entryData = [
    {
        "title": "Unleashing the Creative Mind",
        "date": 2016-15-05,
        "content": "Today, I decided to dedicate some time to exploring my ideas and tapping into my creativity. I found a quiet place to sit and let my thoughts wander. I started by writing down any and every idea that came to mind, no matter how big or small, silly or serious. I didn't censor myself or limit my imagination in any way.",
        "journal_id": 1,
    },
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
        "title": "Reflections on a Rainy Day",
        "date": 2016-10-03,
        "content": "Today was one of those days where the weather perfectly matched my mood. It was a gray, dreary day with a steady rain falling from the sky. As I walked to work, I couldn't help but feel a sense of melancholy wash over me. But despite the gloom outside, there was something cozy and comforting about being inside, listening to the pitter-patter of the raindrops against the windowpane.",
        "journal_id": 2,
    },
    {
        "title": "Green Thumbs and Growing Dreams",
        "date": 2010-10-21,
        "content": "Today was a beautiful day in the garden. The sun was shining, the birds were singing, and the smell of freshly turned earth filled the air. I spent the morning planting my favorite flowers, herbs, and vegetables. There's something so satisfying about digging my hands into the soil and watching as new life takes root.",
        "journal_id": 2,
    },
    {
        "title": "Adventures in Paris",
        "date": 2010-04-20,
        "content": "Today was an incredible day filled with new sights, sounds, and experiences. I am currently in Paris, the city of love and light, and it has exceeded all of my expectations. I started the day with a croissant and café au lait at a small café in the Latin Quarter. The flaky, buttery pastry melted in my mouth and the rich coffee was the perfect pick-me-up.!",
        "journal_id": 3,
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

const seedEntry = async () => await Entry.bulkCreate(entryData);

module.exports = seedEntry;