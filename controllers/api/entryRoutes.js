const router = require("express").Router();
const { Entry } = require("../../models");
const withAuth = require("../../utils/auth");

// Create new entry
router.post("/", withAuth, async (req, res) => {
    try {
        const newEntry = await Entry.create({
            title: req.body.title,
            content: req.body.content,
            background: req.body.background,
            journal_id: req.body.id,
        });

        res.status(200).json(newEntry);
    } catch (err) {
        console.log(err)
        res.status(400).json(err);
    }
});


// Update entry
router.put("/:id", withAuth, async (req, res) => {
    try {
        const entryData = await Entry.update(req.body, {
            where: {
                id: req.params.id,
            },
        });

        if (!entryData) {
            res.status(404).json({ message: "No entry found with this ID!"});
            return;
        }

        res.status(200).json(entryData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Delete Specific Entry
router.delete("/:id", withAuth, async (req, res) => {
    try {
        const entryData = await Entry.destroy({
            where: {
                id: req.params.id,
            }
        });

        if (!entryData) {
            res.status(404).json({ message: "No entry found with this ID!"});
            return;
        }

        res.status(200).json(entryData);
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
});

module.exports = router;