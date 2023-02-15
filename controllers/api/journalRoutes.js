const router = require("express").Router();
const { Journal } = require("../../models");
const withAuth = require("../../utils/auth");

// Create a journal
router.post('/', withAuth, async (req, res) => {
    try {
        const journal = await Journal.create({
            title: req.body.title,
            description: req.body.description,
            background: req.body.background,
            user_id: req.session.user_id,
        });

        res.status(200).json(journal)
    } catch (err) {
        res.status(500).json(err);
    }
})

// DELETE a journal
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const journal = await Journal.destroy({
            where: {
                id: req.params.id,
            },
        });

        res.status(200).json(journal);
    } catch (err) {
        res.status(500).json(err);
    }
})

// UPDATE a journal 
router.put('/:id', withAuth, async (req, res) => {
    try {
        console.log(req.params.id);
        const journal = await Journal.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        if (!journal[0]) {
            res.status(404).json({ message: 'No journal found with this id!' });
            return;
        }
        res.status(200).json(journal);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;