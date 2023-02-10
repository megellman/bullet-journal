const router = require("express").Router();
const path = require("path");
const { Entry } = require(path.join(__dirname, "../../models"));
const withAuth = require("../../utils/auth")

// Create new entry
router.post("/", withAuth, async (req, res) => {
    try {
        const newEntry = await Entry.create({
            ...req.body,
            journal_id: req.session.journal_id,
        });

        res.status(200).json(newEntry);
    } catch (err) {
        res.status(400).json(err);
    }
});

// Delete Specific Entry
router.delete("/:id", withAuth, async (req, res) => {
    try {
        const entryData = await Entry.destroy({
            where: {
                id: req.params.id,
                journal_id: req.session.journal_id
            }
        });

        if (!entryData) {
            res.status(404).json({ message: "No entry found with this ID!"});
            return;
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;