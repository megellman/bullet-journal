const path = require("path")
const { Entry } = require(path.join(__dirname, "../models"));

const entryData = [
    {
        "title": "Unleashing the Creative Mind",
        "date": 2016-15-05,
        "content": "Today, I decided to dedicate some time to exploring my ideas and tapping into my creativity. I found a quiet place to sit and let my thoughts wander. I started by writing down any and every idea that came to mind, no matter how big or small, silly or serious. I didn't censor myself or limit my imagination in any way.",
        "background": "blue",
        "journal_id": 1,
    },
    {
        "title": "Spray on Shoes",
        "date": 2016-10-03,
        "content": "A spray on elastic based polymer that will solve the untied shoes epidemic",
        "background": "pink",
        "journal_id": 1,
    },
    {
        "title": "Lunch Thoughts",
        "date": 2010-04-20,
        "content": "Today, I ate a peanut butter and jelly sandwich. It was delicious!",
        "background": "red",
        "journal_id": 2,
    },
    {
        "title": "Reflections on a Rainy Day",
        "date": 2016-10-03,
        "content": "Today was one of those days where the weather perfectly matched my mood. It was a gray, dreary day with a steady rain falling from the sky. As I walked to work, I couldn't help but feel a sense of melancholy wash over me. But despite the gloom outside, there was something cozy and comforting about being inside, listening to the pitter-patter of the raindrops against the windowpane.",
        "background": "purple",
        "journal_id": 2,
    },
    {
        "title": "Green Thumbs and Growing Dreams",
        "date": 2010-10-21,
        "content": "Today was a beautiful day in the garden. The sun was shining, the birds were singing, and the smell of freshly turned earth filled the air. I spent the morning planting my favorite flowers, herbs, and vegetables. There's something so satisfying about digging my hands into the soil and watching as new life takes root.",
        "background": "blue",
        "journal_id": 2,
    },
    {
        "title": "Adventures in Paris",
        "date": 2010-04-20,
        "content": "Today was an incredible day filled with new sights, sounds, and experiences. I am currently in Paris, the city of love and light, and it has exceeded all of my expectations. I started the day with a croissant and café au lait at a small café in the Latin Quarter. The flaky, buttery pastry melted in my mouth and the rich coffee was the perfect pick-me-up.!",
        "background": "pink",
        "journal_id": 3,
    },
    {
        "title": "Late Nights in Casablanca",
        "date": 2020-03-29,
        "content": "Of all the gin joints in all the towns in all the world, She walks into mine.",
        "background": "red",
        "journal_id": 3,
    },

    {
        "title": "Idea for a Childrens Book",
        "date": 2019-05-23,
        "content": "Not one, but two very hungry catepillars!",
        "background": "purple",
        "journal_id": 4,
    },

    {
        "title": "Stupid Seagulls",
        "date": 2017-09-16,
        "content": "Today at the beach, a seagull stole my sandwich out of my hands. I chased it hoping to save a piece of it and ended up falling face first in the sand. It's safe to say that I'll never be going to that beach again.",
        "background": "red",
        "journal_id": 5,
    },
    {
        "title": "Gratitude and Joy",
        "date": 2017-09-16,
        "content": "Today was a beautiful day filled with so much to be grateful for. I woke up feeling refreshed and energized, and I was excited to start the day. One of the things I am most grateful for is my loving family and friends. I had a wonderful conversation with my mom this morning, and I felt so grateful for her constant love and support. I also met up with a dear friend for lunch, and it was great to catch up and share our stories and experiences.",
        "background": "pink",
        "journal_id": 7,
    },
    {
        "title": "Hiking & Revelations",
        "date": 2017-09-20,
        "content": "I also had the opportunity to do something I love today. I went for a hike in the mountains, and the scenery was breathtaking. The fresh air, the sunshine, and the sound of birds singing all around me filled me with a deep sense of peace and joy. As I reflect on the day, I am filled with gratitude for all the simple pleasures and blessings in my life. I am grateful for my health, for my home, for my loved ones, and for all the opportunities that life has given me.",
        "background": "green",
        "journal_id": 7,
    },
    {
        "title": "A Fun-Filled Day",
        "date": 2017-12-22,
        "content": "Today was such a fun-filled day! I started off by meeting up with some friends for breakfast at a local cafe. We caught up on each other's lives and enjoyed some delicious food and coffee. After breakfast, we went to the park to play some frisbee and have a picnic. The weather was perfect and it was so much fun to be outside and enjoy the sunshine.",
        "background": "blue",
        "journal_id": 7,
    },
    {
        "title": "Planting Tomatoes!",
        "date": 2013-01-12,
        "content": "I just planted a few tomatoes in the garden today. I gave them just a bit of water. I read that they only need to be watered every 2 weeks so that's what I will be doing.",
        "background": "pink",
        "journal_id": 8,
    },
    {
        "title": "No Tomatoes Yet",
        "date": 2013-01-20,
        "content": "The tomatoes haven't sprouted yet. Maybe it's too soon?",
        "background": "red",
        "journal_id": 8,
    },
    {
        "title": "I Think I Messed Up..",
        "date": 2013-02-05,
        "content": "I think my tomatoes are dying...",
        "background": "red",
        "journal_id": 8,
    },
    {
        "title": "The Windy City",
        "date": 2012-01-22,
        "content": "Today was my first full day in Chicago, and I was eager to start exploring the city. I started off by visiting the iconic Willis Tower, which was amazing! The view from the top was breathtaking, and I could see for miles in every direction. After that, I went to Millennium Park to see the famous 'Cloud Gate' sculpture, also known as 'The Bean.' It was even more impressive in person and it was fun to take photos and admire the reflection of the city skyline in its shiny surface.",
        "background": "green",
        "journal_id": 9,
    },
    {
        "title": "Adventures in New Zealand",
        "date": 2014-05-12,
        "content": "Today was an incredible day in New Zealand. I started off by taking a scenic drive to Milford Sound, one of the country's most famous natural wonders. The drive was beautiful, with stunning mountain vistas and waterfalls along the way. When I arrived at Milford Sound, I took a boat tour to explore the fiords and see some of the local wildlife, including seals, dolphins, and penguins. It was truly awe-inspiring to be surrounded by such stunning scenery and to see the wildlife in its natural habitat.",
        "background": "pink",
        "journal_id": 9,
    },
    {
        "title": "Island Time",
        "date": 2015-07-01,
        "content": "Today was my first full day in Hawaii, and I was blown away by the beauty and hospitality of this incredible place. I started off by visiting Waikiki Beach, which was even more stunning than I imagined. The sand was soft, the water was clear and warm, and the sun was shining. Later, I took a drive to the North Shore, which is known for its big waves and surfing. I was amazed by the size of the waves and the skill of the surfers. I even got to try my hand at stand-up paddleboarding, which was a fun and challenging experience. In the afternoon, I went to a traditional Hawaiian luau, where I got to learn about the culture, music, and dance of the islands. The hula dancers were incredible, and the food was delicious.",
        "background": "blue",
        "journal_id": 9,
    },
    {
        "title": "Baking My First Load of Bread",
        "date": 2014-02-03,
        "content": "Today I tackled a new baking challenge: making my own loaf of bread from scratch. I've always loved the smell and taste of freshly baked bread, so I was excited to see if I could create my own. I started by gathering all the ingredients: flour, yeast, salt, water, and a little bit of sugar. I followed a simple recipe, carefully measuring out each ingredient and mixing them together. After letting the dough rise for a couple of hours, I shaped it into a loaf and let it rise again. Finally, it was time to bake. I was a little nervous as I slid the loaf into the oven, but I was also excited to see how it would turn out. As the bread baked, the aroma filled my kitchen, and I couldn't wait to taste it. When the bread was done, I took it out of the oven and let it cool. I was so proud of my first homemade loaf, and I couldn't wait to slice into it. When I finally did, I was blown away by the texture and flavor. It was soft and fluffy on the inside, with a crusty exterior. And the taste was amazing, so much better than anything I could buy at the store. Making this loaf of bread was a fun and rewarding experience, and I can't wait to try my hand at other baking projects in the future. From here on out, I'll never go back to store-bought bread!",
        "background": "purple",
        "journal_id": 10,
    },
    {
        "title": "Expirementing with Spices",
        "date": 2015-04-15,
        "content": "Today I decided to step out of my comfort zone and try cooking with spices I've never used before. I've always been a bit intimidated by spices, but I'm trying to expand my culinary horizons, so I headed to the store and picked up a few new ones to experiment with. For dinner, I made a chicken dish and decided to use some of my new spices. I was a little unsure of how much to use, but I decided to be bold and go for it. To my surprise, the flavors turned out amazing! The combination of spices gave the dish an unexpected depth and complexity that I never would have achieved with just salt and pepper.",
        "background": "blue",
        "journal_id": 10,
    },
    {
        "title": "Inspiration in the Ordinary",
        "date": 2017-09-17,
        "content": "Today I decided to take a break from my usual routine and try something new. I went for a walk in my neighborhood and focused on finding inspiration in the everyday things around me. I was amazed at how much creativity and beauty I found in the most unexpected places. I started by taking notice of the patterns and shapes in the sidewalk cracks, and then moved on to the plants and flowers growing in the gardens. I was struck by the different colors, textures, and shapes, and I couldn't help but think about how they could be incorporated into my art or design work.",
        "background": "purple",
        "journal_id": 11,
    },
    {
        "title": "The Power of Positive Thinking",
        "date": 2019-08-10,
        "content": "Today I decided to try something new and challenge myself to think positively, no matter what the day threw my way. I've always been a bit of a pessimist, and I've noticed that my negative thoughts can be draining and hold me back. I started my day with a positive mantra, reminding myself that I have the power to control my thoughts and attitudes. I made a conscious effort to focus on the good in every situation, even when things didn't go as planned.",
        "background": "pink",
        "journal_id": 11,
    },
];

const seedEntry = async () => await Entry.bulkCreate(entryData);

module.exports = seedEntry;